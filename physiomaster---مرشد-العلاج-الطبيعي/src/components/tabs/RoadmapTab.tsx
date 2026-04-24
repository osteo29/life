import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  BookOpen, 
  ExternalLink, 
  Lightbulb, 
  Target 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { PHASES } from '../../constants';
import { MONTHS_PLAN } from '../../constants/curriculum';

interface RoadmapTabProps {
  selectedPhase: string;
  setSelectedPhase: (id: string) => void;
  selectedMonth: number;
  setSelectedMonth: (id: number) => void;
  completedDays: string[];
  toggleDayCompletion: (id: string) => void;
}

export function RoadmapTab({
  selectedPhase,
  setSelectedPhase,
  selectedMonth,
  setSelectedMonth,
  completedDays,
  toggleDayCompletion
}: RoadmapTabProps) {
  const currentMonth = MONTHS_PLAN.find(m => m.id === selectedMonth);

  return (
    <motion.div
      key="roadmap"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {/* Phase Selector */}
      <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6">
        {PHASES.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setSelectedPhase(phase.id)}
            className={cn(
              "flex-shrink-0 px-5 py-4 rounded-3xl border transition-all text-right w-64",
              selectedPhase === phase.id 
                ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none scale-105" 
                : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-200 dark:hover:border-blue-900/50"
            )}
          >
            <div className={cn(
              "w-10 h-10 rounded-2xl flex items-center justify-center mb-3",
              selectedPhase === phase.id ? "bg-white/20" : "bg-blue-50 dark:bg-blue-900/30"
            )}>
              {phase.icon}
            </div>
            <h3 className="font-black text-sm mb-1">{phase.title}</h3>
            <p className={cn(
              "text-[10px] font-medium leading-relaxed",
              selectedPhase === phase.id ? "text-blue-100" : "text-slate-400"
            )}>{phase.sub}</p>
          </button>
        ))}
      </div>

      {/* Month Selector */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-2 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <button 
          onClick={() => setSelectedMonth(Math.max(0, selectedMonth - 1))}
          className="p-3 text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
        <div className="text-center">
          <h3 className="font-black text-slate-800 dark:text-slate-100">{currentMonth?.name}</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Month {selectedMonth + 1}</p>
        </div>
        <button 
          onClick={() => setSelectedMonth(Math.min(MONTHS_PLAN.length - 1, selectedMonth + 1))}
          className="p-3 text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* Weekly Content */}
      <div className="space-y-8">
        {currentMonth?.weeks.map((week, wIdx) => (
          <div key={wIdx} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800"></div>
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">{week.title}</h4>
              <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800"></div>
            </div>

            <div className="space-y-4">
              {week.days.map((day) => (
                <div 
                  key={day.id}
                  className={cn(
                    "bg-white dark:bg-slate-900 rounded-3xl border transition-all overflow-hidden",
                    completedDays.includes(day.id) 
                      ? "border-emerald-100 dark:border-emerald-900/30 opacity-75" 
                      : "border-slate-100 dark:border-slate-800 shadow-sm"
                  )}
                >
                  <div className="p-5 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black rounded-lg uppercase tracking-wider">
                          {day.badge}
                        </span>
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black rounded-lg uppercase tracking-wider">
                          {day.topic}
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-4">{day.name}</h3>
                      
                      <div className="space-y-3">
                        {day.tasks.map((task, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-3 group">
                            <div className="mt-1 p-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                              <Target size={14} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{task.text}</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{task.requirement}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {day.resources.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800 flex flex-wrap gap-2">
                          {day.resources.map((res, rIdx) => (
                            <a 
                              key={rIdx}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                              <BookOpen size={14} />
                              {res.title}
                              <ExternalLink size={12} />
                            </a>
                          ))}
                        </div>
                      )}

                      <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-start gap-3 border border-amber-100 dark:border-amber-900/30">
                        <Lightbulb className="text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" size={16} />
                        <p className="text-xs font-bold text-amber-800 dark:text-amber-300 leading-relaxed">{day.tip}</p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => toggleDayCompletion(day.id)}
                      className={cn(
                        "p-4 rounded-2xl transition-all",
                        completedDays.includes(day.id)
                          ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200 dark:shadow-none"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                      )}
                    >
                      {completedDays.includes(day.id) ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
