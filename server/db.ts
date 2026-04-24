import { and, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, lectures, InsertLecture, sleepRecords, InsertSleepRecord, habits, InsertHabit, habitTracking, InsertHabitTracking, brainDumps, InsertBrainDump, studySchedules, InsertStudySchedule, chatMessages, InsertChatMessage, weeklySummaries, InsertWeeklySummary } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ============ LECTURES ============
export async function createLecture(userId: number, data: InsertLecture) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(lectures).values({ ...data, userId });
  return result;
}

export async function getUserLectures(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(lectures).where(eq(lectures.userId, userId));
}

export async function getLectureById(id: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(lectures).where(and(eq(lectures.id, id), eq(lectures.userId, userId))).limit(1);
}

export async function updateLecture(id: number, userId: number, data: Partial<InsertLecture>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.update(lectures).set(data).where(and(eq(lectures.id, id), eq(lectures.userId, userId)));
}

export async function deleteLecture(id: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.delete(lectures).where(and(eq(lectures.id, id), eq(lectures.userId, userId)));
}

// ============ SLEEP RECORDS ============
export async function createSleepRecord(userId: number, data: InsertSleepRecord) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(sleepRecords).values({ ...data, userId });
}

export async function getUserSleepRecords(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(sleepRecords).where(eq(sleepRecords.userId, userId));
}

export async function getSleepRecordByDate(userId: number, date: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(sleepRecords).where(and(eq(sleepRecords.userId, userId), eq(sleepRecords.date, date))).limit(1);
}

// ============ HABITS ============
export async function createHabit(userId: number, data: InsertHabit) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(habits).values({ ...data, userId });
}

export async function getUserHabits(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(habits).where(eq(habits.userId, userId));
}

export async function updateHabit(id: number, userId: number, data: Partial<InsertHabit>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.update(habits).set(data).where(and(eq(habits.id, id), eq(habits.userId, userId)));
}

export async function deleteHabit(id: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.delete(habits).where(and(eq(habits.id, id), eq(habits.userId, userId)));
}

// ============ HABIT TRACKING ============
export async function trackHabit(habitId: number, userId: number, date: string, completed: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(habitTracking).values({ habitId, userId, date, completed });
}

export async function getHabitTrackingByDate(userId: number, date: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(habitTracking).where(and(eq(habitTracking.userId, userId), eq(habitTracking.date, date)));
}

// ============ BRAIN DUMPS ============
export async function createBrainDump(userId: number, data: InsertBrainDump) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(brainDumps).values({ ...data, userId });
}

export async function getUserBrainDumps(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(brainDumps).where(eq(brainDumps.userId, userId));
}

export async function getBrainDumpByDate(userId: number, date: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(brainDumps).where(and(eq(brainDumps.userId, userId), eq(brainDumps.date, date))).limit(1);
}

// ============ STUDY SCHEDULES ============
export async function createStudySchedule(userId: number, data: InsertStudySchedule) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(studySchedules).values({ ...data, userId });
}

export async function getUserStudySchedules(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(studySchedules).where(eq(studySchedules.userId, userId));
}

export async function updateStudySchedule(id: number, userId: number, data: Partial<InsertStudySchedule>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.update(studySchedules).set(data).where(and(eq(studySchedules.id, id), eq(studySchedules.userId, userId)));
}

// ============ CHAT MESSAGES ============
export async function createChatMessage(userId: number, data: InsertChatMessage) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(chatMessages).values({ ...data, userId });
}

export async function getUserChatMessages(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(chatMessages).where(eq(chatMessages.userId, userId));
}

// ============ WEEKLY SUMMARIES ============
export async function createWeeklySummary(userId: number, data: InsertWeeklySummary) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(weeklySummaries).values({ ...data, userId });
}

export async function getUserWeeklySummaries(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(weeklySummaries).where(eq(weeklySummaries.userId, userId));
}
