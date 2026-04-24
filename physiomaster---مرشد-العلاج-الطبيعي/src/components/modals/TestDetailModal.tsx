import React from 'react';
import { 
  X, 
  Stethoscope, 
  Target, 
  ListOrdered, 
  CheckCircle2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpecialTest } from '../../types';

interface TestDetailModalProps {
  test: SpecialTest | null;
  onClose: () => void;
}

export function TestDetailModal({ test, onClose }: TestDetailModalProps) {
  return (
    <AnimatePresence>
      {test && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-3xl">
                  <Stethoscope size={32} />
                </div>
                <button 
                  onClick={onClose}
                  className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-2xl transition-all hover:rotate-90"
                >
                  <X size={24} />
                </button>
              </div>

              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 text-right">{test.name}</h3>
              <p className="text-purple-600 dark:text-purple-400 font-bold text-sm mb-8 text-right uppercase tracking-widest">Special Test Details</p>

              <div className="space-y-8">
                <div className="flex gap-4 text-right dir-rtl">
                  <div className="mt-1 p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl h-fit">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white text-lg mb-1">الغرض من الاختبار</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">{test.purpose}</p>
                  </div>
                </div>

                <div className="flex gap-4 text-right dir-rtl">
                  <div className="mt-1 p-2 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl h-fit">
                    <ListOrdered size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white text-lg mb-1">طريقة الفحص (Procedure)</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">{test.procedure}</p>
                  </div>
                </div>

                <div className="flex gap-4 text-right dir-rtl">
                  <div className="mt-1 p-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl h-fit">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white text-lg mb-1">النتيجة الإيجابية (Positive Sign)</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">{test.positive}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={onClose}
                className="mt-10 w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-3xl font-black text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
              >
                فهمت، شكراً
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
