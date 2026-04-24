import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import * as db from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // ============ LECTURES ============
  lectures: router({
    list: protectedProcedure.query(({ ctx }) =>
      db.getUserLectures(ctx.user.id)
    ),
    create: protectedProcedure
      .input((val: any) => ({
        subject: val.subject as string,
        type: val.type as 'lecture' | 'session' | 'lab',
        date: val.date as Date,
        duration: val.duration as number | undefined,
        location: val.location as string | undefined,
        notes: val.notes as string | undefined,
      }))
      .mutation(({ ctx, input }) => {
        const data = { ...input } as any;
        return db.createLecture(ctx.user.id, data);
      }),
    update: protectedProcedure
      .input((val: any) => ({
        id: val.id as number,
        data: val.data as any,
      }))
      .mutation(({ ctx, input }) =>
        db.updateLecture(input.id, ctx.user.id, input.data)
      ),
    delete: protectedProcedure
      .input((val: any) => ({ id: val.id as number }))
      .mutation(({ ctx, input }) =>
        db.deleteLecture(input.id, ctx.user.id)
      ),
  }),

  // ============ SLEEP TRACKING ============
  sleep: router({
    list: protectedProcedure.query(({ ctx }) =>
      db.getUserSleepRecords(ctx.user.id)
    ),
    getByDate: protectedProcedure
      .input((val: any) => ({ date: val.date as string }))
      .query(({ ctx, input }) =>
        db.getSleepRecordByDate(ctx.user.id, input.date)
      ),
    create: protectedProcedure
      .input((val: any) => ({
        date: val.date as string,
        sleepTime: val.sleepTime as Date | undefined,
        wakeTime: val.wakeTime as Date | undefined,
        duration: val.duration as number | undefined,
        quality: val.quality as 'poor' | 'fair' | 'good' | 'excellent' | undefined,
        notes: val.notes as string | undefined,
      }))
      .mutation(({ ctx, input }) => {
        const data = { ...input } as any;
        return db.createSleepRecord(ctx.user.id, data);
      }),
  }),

  // ============ HABITS ============
  habits: router({
    list: protectedProcedure.query(({ ctx }) =>
      db.getUserHabits(ctx.user.id)
    ),
    create: protectedProcedure
      .input((val: any) => ({
        name: val.name as string,
        description: val.description as string | undefined,
        category: val.category as string | undefined,
        frequency: val.frequency as 'daily' | 'weekly' | 'custom',
        targetDays: val.targetDays as string | undefined,
        reminderTime: val.reminderTime as string | undefined,
      }))
      .mutation(({ ctx, input }) => {
        const data = { ...input } as any;
        return db.createHabit(ctx.user.id, data);
      }),
    update: protectedProcedure
      .input((val: any) => ({
        id: val.id as number,
        data: val.data as any,
      }))
      .mutation(({ ctx, input }) =>
        db.updateHabit(input.id, ctx.user.id, input.data)
      ),
    delete: protectedProcedure
      .input((val: any) => ({ id: val.id as number }))
      .mutation(({ ctx, input }) =>
        db.deleteHabit(input.id, ctx.user.id)
      ),
    track: protectedProcedure
      .input((val: any) => ({
        habitId: val.habitId as number,
        date: val.date as string,
        completed: val.completed as number,
      }))
      .mutation(({ ctx, input }) =>
        db.trackHabit(input.habitId, ctx.user.id, input.date, input.completed)
      ),
    getTracking: protectedProcedure
      .input((val: any) => ({ date: val.date as string }))
      .query(({ ctx, input }) =>
        db.getHabitTrackingByDate(ctx.user.id, input.date)
      ),
  }),

  // ============ BRAIN DUMP ============
  brainDump: router({
    list: protectedProcedure.query(({ ctx }) =>
      db.getUserBrainDumps(ctx.user.id)
    ),
    getByDate: protectedProcedure
      .input((val: any) => ({ date: val.date as string }))
      .query(({ ctx, input }) =>
        db.getBrainDumpByDate(ctx.user.id, input.date)
      ),
    create: protectedProcedure
      .input((val: any) => ({
        date: val.date as string,
        content: val.content as string,
        aiAnalysis: val.aiAnalysis as string | undefined,
      }))
      .mutation(async ({ ctx, input }) => {
        const { analyzeBrainDumpWithAI } = await import('./_core/geminiAI');
        const analysis = await analyzeBrainDumpWithAI(input.content);
        const data = { ...input, aiAnalysis: analysis } as any;
        return db.createBrainDump(ctx.user.id, data);
      }),
  }),

  // ============ STUDY SCHEDULE ============
  studySchedule: router({
    list: protectedProcedure.query(({ ctx }) =>
      db.getUserStudySchedules(ctx.user.id)
    ),
    create: protectedProcedure
      .input((val: any) => ({
        lectureId: val.lectureId as number | undefined,
        subject: val.subject as string,
        scheduledDate: val.scheduledDate as Date,
        type: val.type as 'review' | 'practice' | 'summary',
        duration: val.duration as number | undefined,
        priority: val.priority as 'low' | 'medium' | 'high' | undefined,
        status: val.status as 'pending' | 'in_progress' | 'completed' | undefined,
        notes: val.notes as string | undefined,
      }))
      .mutation(({ ctx, input }) => {
        const data = { ...input } as any;
        return db.createStudySchedule(ctx.user.id, data);
      }),
    update: protectedProcedure
      .input((val: any) => ({
        id: val.id as number,
        data: val.data as any,
      }))
      .mutation(({ ctx, input }) =>
        db.updateStudySchedule(input.id, ctx.user.id, input.data)
      ),
  }),

  // ============ CHAT ============
  chat: router({
    list: protectedProcedure.query(({ ctx }) =>
      db.getUserChatMessages(ctx.user.id)
    ),
    send: protectedProcedure
      .input((val: any) => ({
        content: val.content as string,
      }))
      .mutation(async ({ ctx, input }) => {
        const { chatWithGemini } = await import('./_core/geminiAI');
        
        await db.createChatMessage(ctx.user.id, {
          role: 'user',
          content: input.content,
        } as any);
        
        const result = await chatWithGemini(input.content);
        const aiResponse = result.response || 'عذراً، لم أتمكن من معالجة طلبك';
        
        await db.createChatMessage(ctx.user.id, {
          role: 'assistant',
          content: aiResponse,
        } as any);
        
        return { success: result.success, response: aiResponse };
      }),
  }),

  // ============ WEEKLY SUMMARY ============
  weeklySummary: router({
    list: protectedProcedure.query(({ ctx }) =>
      db.getUserWeeklySummaries(ctx.user.id)
    ),
    create: protectedProcedure
      .input((val: any) => ({
        weekStart: val.weekStart as string,
        weekEnd: val.weekEnd as string,
        summary: val.summary as string,
        lectureCount: val.lectureCount as number | undefined,
        habitsCompleted: val.habitsCompleted as number | undefined,
        averageSleep: val.averageSleep as number | undefined,
        studyHours: val.studyHours as number | undefined,
      }))
      .mutation(({ ctx, input }) => {
        const data = { ...input } as any;
        return db.createWeeklySummary(ctx.user.id, data);
      }),
  }),
});

export type AppRouter = typeof appRouter;
