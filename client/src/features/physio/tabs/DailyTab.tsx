import React from 'react';
import { 
  Timer, 
  Pause, 
  Play, 
  RotateCcw, 
  Map as MapIcon, 
  Sparkles, 
  Loader2, 
  HelpCircle, 
  Brain, 
  Stethoscope, 
  CheckCircle2, 
  Circle 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Streamdown } from 'streamdown';
import { cn } from '@/lib/utils';
import { TELEGRAM_RESOURCES } from '../constants';

interface DailyTabProps {
  pomoMode: 'work' | 'break';
  pomoTime: number;
  pomoActive: boolean;
  setPomoActive: (active: boolean) => void;
  setPomoTime: (time: number) => void;
  formatPomoTime: (time: number) => string;
  startDate: string | null;
  dayInfo: any;
  setActiveTab: (tab: any) => void;
  loadingTopic: boolean;
  dailyTopic: string | null;
  handleGenerateQuiz: () => void;
  loadingQuiz: boolean;
  quiz: string | null;
  setQuiz: (quiz: string | null) => void;
  fetchDailyTopic: () => void;
  showReasoningBuilder: boolean;
  setShowReasoningBuilder: (show: boolean) => void;
  reasoningData: any;
  setReasoningData: (data: any) => void;
  assessmentChecklist: Record<string, boolean>;
  setAssessmentChecklist: (checklist: any) => void;
}

export function DailyTab({
  pomoMode,
  pomoTime,
  pomoActive,
  setPomoActive,
  setPomoTime,
  formatPomoTime,
  startDate,
  dayInfo,
  setActiveTab,
  loadingTopic,
  dailyTopic,
  handleGenerateQuiz,
  loadingQuiz,
  quiz,
  setQuiz,
  fetchDailyTopic,
  showReasoningBuilder,
  setShowReasoningBuilder,
  reasoningData,
  setReasoningData,
  assessmentChecklist,
  setAssessmentChecklist
}: DailyTabProps) {
  return (
    <motion.div
      key="daily"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Pomodoro Widget */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={cn(
            "p-3 rounded-2xl",
            pomoMode === 'work' ? "bg-orange-50 text-orange-600" : "bg-emerald-50 text-emerald-600"
          )}>
            <Timer size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
              {pomoMode === 'work' ? 'وقت التركيز' : 'وقت الراحة'}
            </h4>
            <p className="text-2xl font-black text-slate-900 dark:text-white font-mono">{formatPomoTime(pomoTime)}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setPomoActive(!pomoActive)}
            className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {pomoActive ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button 
            onClick={() => {
              setPomoActive(false);
              setPomoTime(pomoMode === 'work' ? 25 * 60 : 5 * 60);
            }}
            className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      {startDate && dayInfo?.day && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 rounded-3xl p-5 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-1">أنت الآن في اليوم {dayInfo.diffDays + 1} من الخطة</p>
            <h3 className="text-lg font-black text-blue-900 dark:text-blue-100">{dayInfo.day.name}</h3>
            <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">{dayInfo.month.name} • {dayInfo.week.title}</p>
          </div>
          <button 
            onClick={() => setActiveTab('roadmap')}
            className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none hover:scale-105 transition-transform"
          >
            <MapIcon size={20} />
          </button>
        </div>
      )}

      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-blue-200" />
          <span className="text-blue-100 font-medium">موضوع اليوم المقترح</span>
        </div>
        <h2 className="text-2xl font-bold mb-4">طور مهاراتك السريرية</h2>
        <p className="text-blue-100 leading-relaxed">
          كل يوم هو فرصة لتصبح معالجاً أفضل. اقرأ الحالة بتمعن وحاول تخيل المريض أمامك.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
        {loadingTopic ? (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            <p className="text-slate-500">جاري تحضير الحالة السريرية...</p>
          </div>
        ) : (
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="dir-rtl text-right">
              <Streamdown>{dailyTopic || 'اضغط على الزر لتوليد موضوع جديد.'}</Streamdown>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <HelpCircle className="text-blue-600" size={18} />
                  اختبر معلوماتك
                </h4>
                {!quiz && dailyTopic && (
                  <button 
                    onClick={handleGenerateQuiz}
                    disabled={loadingQuiz}
                    className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-2 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors flex items-center gap-2"
                  >
                    {loadingQuiz ? <Loader2 className="animate-spin" size={14} /> : <Sparkles size={14} />}
                    إنشاء اختبار سريع
                  </button>
                )}
              </div>

              {quiz && (
                <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-300">
                  <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-right dir-rtl">
                    <Streamdown>{quiz}</Streamdown>
                  </div>
                  <button 
                    onClick={() => setQuiz(null)}
                    className="mt-4 text-xs font-bold text-slate-400 hover:text-slate-600"
                  >
                    إخفاء الاختبار
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={fetchDailyTopic}
              className="mt-6 w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-2xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles size={18} />
              توليد موضوع آخر
            </button>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <button 
                onClick={() => setShowReasoningBuilder(!showReasoningBuilder)}
                className="w-full py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-2xl font-bold text-sm hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors flex items-center justify-center gap-2"
              >
                <Brain size={18} />
                {showReasoningBuilder ? 'إخفاء أداة التفكير السريري' : 'بناء التفكير السريري للحالة'}
              </button>

              <AnimatePresence>
                {showReasoningBuilder && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-4 space-y-4"
                  >
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">الألم (Pain)</label>
                        <input 
                          type="text" 
                          placeholder="أين وكيف يشعر بالألم؟"
                          value={reasoningData.pain}
                          onChange={(e) => setReasoningData({...reasoningData, pain: e.target.value})}
                          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-right"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">الحركة (Movement)</label>
                        <input 
                          type="text" 
                          placeholder="ما هي الحركات التي تزيد أو تقلل الألم؟"
                          value={reasoningData.movement}
                          onChange={(e) => setReasoningData({...reasoningData, movement: e.target.value})}
                          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-right"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">العضلة/المفصل (Muscle/Joint)</label>
                        <input 
                          type="text" 
                          placeholder="ما هي الهياكل المشتبه بها؟"
                          value={reasoningData.muscle}
                          onChange={(e) => setReasoningData({...reasoningData, muscle: e.target.value})}
                          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-right"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">التشخيص المقترح (Diagnosis)</label>
                        <input 
                          type="text" 
                          placeholder="ما هو تشخيصك المبدئي؟"
                          value={reasoningData.diagnosis}
                          onChange={(e) => setReasoningData({...reasoningData, diagnosis: e.target.value})}
                          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-right"
                        />
                      </div>
                      <div className="p-3 bg-blue-600 text-white rounded-xl text-center text-xs font-bold">
                        {reasoningData.pain && reasoningData.diagnosis ? 'رائع! استمر في تحليل الحالات لتطوير تفكيرك.' : 'أكمل البيانات لبناء مسار التفكير.'}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      {/* Assessment Checklist */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Stethoscope className="text-blue-600" size={20} />
          قائمة التقييم السريري (Interactive)
        </h3>
        <div className="space-y-4">
          {[
            { id: 'subj', label: 'Subjective (التاريخ المرضي)', items: ['Chief Complaint', 'Pain History', 'Red Flags Check', 'Past Medical History'] },
            { id: 'obj', label: 'Objective (الفحص البدني)', items: ['Observation', 'Palpation', 'ROM Testing', 'Manual Muscle Testing'] },
            { id: 'spec', label: 'Special Tests (الاختبارات الخاصة)', items: ['Provocative Tests', 'Neurological Exam', 'Functional Tests'] }
          ].map(section => (
            <div key={section.id} className="space-y-2">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">{section.label}</h4>
              <div className="grid grid-cols-1 gap-2">
                {section.items.map(item => (
                  <button
                    key={item}
                    onClick={() => setAssessmentChecklist(prev => ({...prev, [item]: !prev[item]}))}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-2xl border transition-all text-right",
                      assessmentChecklist[item] 
                        ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-400" 
                        : "bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-200 dark:hover:border-blue-900/50"
                    )}
                  >
                    {assessmentChecklist[item] ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                    <span className="text-sm font-bold">{item}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Resources */}
      <div className="grid grid-cols-2 gap-4">
        {TELEGRAM_RESOURCES.map((res, i) => (
          <a 
            key={i}
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-900/50 transition-all group"
          >
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="text-xl">{res.icon}</span>
            </div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-1">{res.name}</h3>
            <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">{res.description}</p>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
