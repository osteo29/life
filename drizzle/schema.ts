import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Lectures table - محاضرات وسكاشن
export const lectures = mysqlTable("lectures", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  subject: varchar("subject", { length: 255 }).notNull(), // اسم المادة
  type: mysqlEnum("type", ["lecture", "session", "lab"]).notNull(), // نوع المحاضرة
  date: timestamp("date").notNull(), // تاريخ ووقت المحاضرة
  duration: int("duration"), // المدة بالدقائق
  location: varchar("location", { length: 255 }), // مكان المحاضرة
  notes: text("notes"), // ملاحظات عن المحاضرة
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Lecture = typeof lectures.$inferSelect;
export type InsertLecture = typeof lectures.$inferInsert;

// Sleep tracking table - تتبع النوم
export const sleepRecords = mysqlTable("sleepRecords", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  date: varchar("date", { length: 10 }).notNull(), // YYYY-MM-DD
  sleepTime: timestamp("sleepTime"), // وقت النوم
  wakeTime: timestamp("wakeTime"), // وقت الاستيقاظ
  duration: int("duration"), // المدة بالدقائق
  quality: mysqlEnum("quality", ["poor", "fair", "good", "excellent"]), // جودة النوم
  notes: text("notes"), // ملاحظات
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SleepRecord = typeof sleepRecords.$inferSelect;
export type InsertSleepRecord = typeof sleepRecords.$inferInsert;

// Daily habits table - العادات اليومية
export const habits = mysqlTable("habits", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  name: varchar("name", { length: 255 }).notNull(), // اسم العادة
  description: text("description"), // وصف العادة
  category: varchar("category", { length: 100 }), // فئة العادة (دراسة، صحة، إنتاجية)
  frequency: mysqlEnum("frequency", ["daily", "weekly", "custom"]).notNull(),
  targetDays: varchar("targetDays", { length: 50 }), // أيام الهدف (للعادات الأسبوعية)
  reminderTime: varchar("reminderTime", { length: 5 }), // وقت التذكير HH:MM
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Habit = typeof habits.$inferSelect;
export type InsertHabit = typeof habits.$inferInsert;

// Habit tracking table - تتبع إنجاز العادات
export const habitTracking = mysqlTable("habitTracking", {
  id: int("id").autoincrement().primaryKey(),
  habitId: int("habitId").notNull().references(() => habits.id),
  userId: int("userId").notNull().references(() => users.id),
  date: varchar("date", { length: 10 }).notNull(), // YYYY-MM-DD
  completed: int("completed").default(0).notNull(), // 0 أو 1
  notes: text("notes"), // ملاحظات
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type HabitTracking = typeof habitTracking.$inferSelect;
export type InsertHabitTracking = typeof habitTracking.$inferInsert;

// Brain dump entries - تفريغ الأفكار
export const brainDumps = mysqlTable("brainDumps", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  date: varchar("date", { length: 10 }).notNull(), // YYYY-MM-DD
  content: text("content").notNull(), // محتوى تفريغ الأفكار
  aiAnalysis: text("aiAnalysis"), // تحليل الذكاء الاصطناعي
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BrainDump = typeof brainDumps.$inferSelect;
export type InsertBrainDump = typeof brainDumps.$inferInsert;

// Study schedule table - جدول المراجعة الذكي
export const studySchedules = mysqlTable("studySchedules", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  lectureId: int("lectureId").references(() => lectures.id),
  subject: varchar("subject", { length: 255 }).notNull(),
  scheduledDate: timestamp("scheduledDate").notNull(), // موعد المراجعة
  type: mysqlEnum("type", ["review", "practice", "summary"]).notNull(), // نوع المراجعة
  duration: int("duration"), // المدة المقترحة بالدقائق
  priority: mysqlEnum("priority", ["low", "medium", "high"]).default("medium"),
  status: mysqlEnum("status", ["pending", "in_progress", "completed"]).default("pending"),
  notes: text("notes"), // ملاحظات
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type StudySchedule = typeof studySchedules.$inferSelect;
export type InsertStudySchedule = typeof studySchedules.$inferInsert;

// Chat messages table - رسائل الشات مع الذكاء الاصطناعي
export const chatMessages = mysqlTable("chatMessages", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  role: mysqlEnum("role", ["user", "assistant"]).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = typeof chatMessages.$inferInsert;

// Weekly summary table - ملخص الأسبوع
export const weeklySummaries = mysqlTable("weeklySummaries", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  weekStart: varchar("weekStart", { length: 10 }).notNull(), // YYYY-MM-DD
  weekEnd: varchar("weekEnd", { length: 10 }).notNull(),
  summary: text("summary").notNull(), // ملخص الأسبوع
  lectureCount: int("lectureCount").default(0),
  habitsCompleted: int("habitsCompleted").default(0),
  averageSleep: int("averageSleep"), // متوسط ساعات النوم
  studyHours: int("studyHours"), // ساعات المراجعة
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type WeeklySummary = typeof weeklySummaries.$inferSelect;
export type InsertWeeklySummary = typeof weeklySummaries.$inferInsert;