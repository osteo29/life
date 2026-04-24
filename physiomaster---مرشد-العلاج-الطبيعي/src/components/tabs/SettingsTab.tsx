import React from 'react';
import { 
  User as UserIcon, 
  Calendar, 
  Bell, 
  Droplets, 
  Moon, 
  Sun, 
  LogOut, 
  Trophy, 
  Clock, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { auth } from '../../firebase';
import { sendNotification } from '../../services/notifications';

interface SettingsTabProps {
  userProfile: any;
  setUserProfile: (profile: any) => void;
  startDate: string | null;
  setStartDate: (date: string) => void;
  dailyReminder: boolean;
  setDailyReminder: (reminder: boolean) => void;
  waterReminder: boolean;
  setWaterReminder: (reminder: boolean) => void;
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  completedDays: string[];
  tasks: any[];
}

export function SettingsTab({
  userProfile,
  setUserProfile,
  startDate,
  setStartDate,
  dailyReminder,
  setDailyReminder,
  waterReminder,
  setWaterReminder,
  darkMode,
  setDarkMode,
  completedDays,
  tasks
}: SettingsTabProps) {
  return (
    <motion.div
      key="settings"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="space-y-6 pb-24"
    >
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-blue-200 dark:shadow-none">
            {userProfile.name?.charAt(0) || 'P'}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">{userProfile.name || 'مستخدم جديد'}</h3>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{userProfile.university || 'جامعة غير محددة'}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
            <Trophy className="mx-auto mb-2 text-amber-500" size={20} />
            <p className="text-lg font-black text-slate-800 dark:text-slate-100">{completedDays.length}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase">أيام مكتملة</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
            <CheckCircle2 className="mx-auto mb-2 text-emerald-500" size={20} />
            <p className="text-lg font-black text-slate-800 dark:text-slate-100">{tasks.filter(t => t.completed).length}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase">مهام منجزة</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
            <Clock className="mx-auto mb-2 text-blue-500" size={20} />
            <p className="text-lg font-black text-slate-800 dark:text-slate-100">12</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase">ساعات تركيز</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <UserIcon size={14} />
              الاسم بالكامل
            </label>
            <input 
              type="text" 
              value={userProfile.name}
              onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
              className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-right transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Calendar size={14} />
              تاريخ بداية الخطة
            </label>
            <input 
              type="date" 
              value={startDate || ''}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-right transition-all"
            />
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                  <Bell size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">تنبيهات الدراسة اليومية</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Daily Reminders</p>
                </div>
              </div>
              <button 
                onClick={() => setDailyReminder(!dailyReminder)}
                className={cn(
                  "w-12 h-6 rounded-full transition-all relative",
                  dailyReminder ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
                )}
              >
                <div className={cn(
                  "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                  dailyReminder ? "right-1" : "right-7"
                )} />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  <Droplets size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">تذكير شرب الماء</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Water Intake Reminders</p>
                </div>
              </div>
              <button 
                onClick={() => setWaterReminder(!waterReminder)}
                className={cn(
                  "w-12 h-6 rounded-full transition-all relative",
                  waterReminder ? "bg-emerald-600" : "bg-slate-300 dark:bg-slate-700"
                )}
              >
                <div className={cn(
                  "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                  waterReminder ? "right-1" : "right-7"
                )} />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl">
                  {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">الوضع الليلي</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Dark Mode Appearance</p>
                </div>
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={cn(
                  "w-12 h-6 rounded-full transition-all relative",
                  darkMode ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
                )}
              >
                <div className={cn(
                  "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                  darkMode ? "right-1" : "right-7"
                )} />
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            <button 
              onClick={() => sendNotification('اختبار الإشعارات', { body: 'هذا تنبيه تجريبي للتأكد من عمل النظام بنجاح! 🚀' })}
              className="w-full py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2 mb-4"
            >
              <Send size={18} />
              إرسال إشعار تجريبي
            </button>

            <button 
              onClick={() => auth.signOut()}
              className="w-full py-4 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 rounded-2xl font-bold text-sm hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-all flex items-center justify-center gap-2"
            >
              <LogOut size={18} />
              تسجيل الخروج
            </button>
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">تطبيقات شريكة (Partner Apps)</h4>
            <a 
              href="https://physionutrition.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                🍎
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-black text-emerald-900 dark:text-emerald-100">Physio Nutrition</h5>
                <p className="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold">منصة التغذية المتكاملة لأخصائي العلاج الطبيعي</p>
              </div>
              <Send size={16} className="text-emerald-400 -rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
