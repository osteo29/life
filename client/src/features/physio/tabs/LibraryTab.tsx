import React from 'react';
import { 
  Search, 
  Calculator, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  ExternalLink, 
  Stethoscope, 
  ArrowRightLeft 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ORTHO_LIBRARY, ROM_REFERENCE, TELEGRAM_CATEGORIES, SPECIAL_TESTS } from '../constants';
import type { SpecialTest } from '../types';

interface LibraryTabProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  bmi: { weight: string; height: string; result: number | null };
  setBmi: (bmi: any) => void;
  calculateBMI: () => void;
  setSelectedTest: (test: SpecialTest | null) => void;
}

export function LibraryTab({
  searchQuery,
  setSearchQuery,
  bmi,
  setBmi,
  calculateBMI,
  setSelectedTest
}: LibraryTabProps) {
  return (
    <motion.div
      key="library"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="relative">
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="ابحث في المكتبة..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-12 py-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-right shadow-sm transition-all"
        />
      </div>

      {/* Physio Nutrition Integration Hub */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-6 text-white shadow-lg shadow-emerald-100 dark:shadow-none">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <span className="text-2xl">🍎</span>
            </div>
            <div>
              <h3 className="text-xl font-black">Physio Nutrition Hub</h3>
              <p className="text-emerald-50 text-[10px] font-bold uppercase tracking-widest">Nutrition & Recovery Expert</p>
            </div>
          </div>
          <a 
            href="https://physionutrition.vercel.app/ar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <a 
            href="https://physionutrition.vercel.app/ar/calculators" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all text-right"
          >
            <Calculator size={20} className="mb-2 text-emerald-200" />
            <p className="text-xs font-black">حاسبات التغذية</p>
            <p className="text-[8px] text-emerald-100 opacity-80">BMI, Calories, Macros</p>
          </a>
          <a 
            href="https://physionutrition.vercel.app/ar/injuries" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all text-right"
          >
            <Stethoscope size={20} className="mb-2 text-emerald-200" />
            <p className="text-xs font-black">مكتبة الإصابات</p>
            <p className="text-[8px] text-emerald-100 opacity-80">Injury Protocols</p>
          </a>
          <a 
            href="https://physionutrition.vercel.app/ar/insights" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all text-right"
          >
            <BookOpen size={20} className="mb-2 text-emerald-200" />
            <p className="text-xs font-black">مقالات تعليمية</p>
            <p className="text-[8px] text-emerald-100 opacity-80">Evidence-Based Insights</p>
          </a>
          <a 
            href="https://physionutrition.vercel.app/ar/diets" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all text-right"
          >
            <Calculator size={20} className="mb-2 text-emerald-200" />
            <p className="text-xs font-black">الأنظمة الغذائية</p>
            <p className="text-[8px] text-emerald-100 opacity-80">Diet Types & Plans</p>
          </a>
        </div>
      </div>

      {/* Featured Insights from Physio Nutrition */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-lg font-black text-slate-800 dark:text-slate-100">مقالات مختارة 📰</h3>
          <a href="https://physionutrition.vercel.app/ar/insights" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">عرض الكل</a>
        </div>
        <div className="grid gap-3">
          {[
            {
              title: "احتياج البروتين الفعلي للنمو العضلي",
              desc: "هل تأكل بروتين بكثرة ولا تلاحظ نتيجة؟ اعرف احتياجك الحقيقي.",
              url: "https://physionutrition.vercel.app/ar/insights/protein-after-acl-reconstruction",
              tag: "Sports Nutrition"
            },
            {
              title: "أهمية متابعة القياسات السريرية",
              desc: "لماذا متابعة التغير عبر الوقت أهم من النتيجة الواحدة؟",
              url: "https://physionutrition.vercel.app/ar/insights/why-tracking-measurements-matters",
              tag: "Clinical Tracking"
            },
            {
              title: "التغذية العلاجية بعد الإصابة",
              desc: "ما الذي يهم فعلاً في تغذية المصابين لدعم التعافي؟",
              url: "https://physionutrition.vercel.app/ar/insights/nutrition-after-injury-basics",
              tag: "Rehab Nutrition"
            }
          ].map((article, idx) => (
            <a 
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="text-[8px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md mb-2 inline-block">
                    {article.tag}
                  </span>
                  <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 mb-1 group-hover:text-emerald-600 transition-colors">{article.title}</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2">{article.desc}</p>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 group-hover:text-emerald-500 transition-colors">
                  <ChevronLeft size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* BMI Calculator */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-2xl">
            <Calculator size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-800 dark:text-slate-100">حاسبة مؤشر كتلة الجسم (BMI)</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Clinical Calculator</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">الوزن (كجم)</label>
            <input 
              type="number" 
              value={bmi.weight}
              onChange={(e) => setBmi({...bmi, weight: e.target.value})}
              className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500 text-right"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">الطول (سم)</label>
            <input 
              type="number" 
              value={bmi.height}
              onChange={(e) => setBmi({...bmi, height: e.target.value})}
              className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500 text-right"
            />
          </div>
        </div>
        <button 
          onClick={calculateBMI}
          className="w-full py-3 bg-emerald-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-emerald-200 dark:shadow-none hover:scale-105 active:scale-95 transition-all"
        >
          احسب الآن
        </button>
        {bmi.result && (
          <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 text-center animate-in fade-in zoom-in-95">
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">النتيجة</p>
            <p className="text-2xl font-black text-emerald-900 dark:text-emerald-100">{bmi.result.toFixed(1)}</p>
            <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 mt-1">
              {bmi.result < 18.5 ? 'نقص وزن' : bmi.result < 25 ? 'وزن مثالي' : bmi.result < 30 ? 'زيادة وزن' : 'سمنة'}
            </p>
          </div>
        )}
      </div>

      {/* Special Tests Library */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl">
            <Stethoscope size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-800 dark:text-slate-100">مكتبة الاختبارات الخاصة</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Special Tests Library</p>
          </div>
        </div>
        
        <div className="space-y-6">
          {SPECIAL_TESTS.map((cat, i) => {
            const filteredTests = cat.tests.filter(t => 
              t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
              t.purpose.toLowerCase().includes(searchQuery.toLowerCase())
            );
            
            if (filteredTests.length === 0) return null;

            return (
              <div key={i} className="space-y-3">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest border-r-2 border-purple-500 pr-2">{cat.category}</h4>
                <div className="grid grid-cols-1 gap-2">
                  {filteredTests.map((test, j) => (
                    <button
                      key={j}
                      onClick={() => setSelectedTest(test)}
                      className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-purple-300 dark:hover:border-purple-900/50 transition-all group text-right"
                    >
                      <ChevronLeft size={18} className="text-slate-300 group-hover:text-purple-500 transition-colors" />
                      <div className="flex-1">
                        <p className="text-sm font-black text-slate-800 dark:text-slate-100">{test.name}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">{test.purpose}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cheat Sheets */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl">
            <BookOpen size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-800 dark:text-slate-100">ملخصات سريعة (Cheat Sheets)</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Quick Reference Guides</p>
          </div>
        </div>
        <div className="space-y-6">
          {ORTHO_LIBRARY.map((cat, i) => (
            <div key={i} className="space-y-3">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest border-r-2 border-amber-500 pr-2">{cat.category}</h4>
              <div className="grid grid-cols-1 gap-3">
                {cat.items.map((item, j) => (
                  <div key={j} className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl">
                    <p className="text-sm font-black text-slate-800 dark:text-slate-100 mb-1">{item.name}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ROM Reference */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl">
            <ArrowRightLeft size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-800 dark:text-slate-100">مرجع مدى الحركة (ROM)</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Normal Range of Motion</p>
          </div>
        </div>
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <th className="py-3 font-black text-slate-400 uppercase">Joint</th>
                <th className="py-3 font-black text-slate-400 uppercase">Flex</th>
                <th className="py-3 font-black text-slate-400 uppercase">Ext</th>
                <th className="py-3 font-black text-slate-400 uppercase">Abd</th>
                <th className="py-3 font-black text-slate-400 uppercase">IR/ER</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
              {ROM_REFERENCE.map((rom, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 font-bold text-slate-800 dark:text-slate-100">{rom.joint}</td>
                  <td className="py-4 text-slate-600 dark:text-slate-400">{rom.flexion}</td>
                  <td className="py-4 text-slate-600 dark:text-slate-400">{rom.extension}</td>
                  <td className="py-4 text-slate-600 dark:text-slate-400">{rom.abduction}</td>
                  <td className="py-4 text-slate-600 dark:text-slate-400">{rom.intRot}/{rom.extRot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Telegram Resources */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-2xl">
            <Search size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-800 dark:text-slate-100">بحث كورسات تليجرام</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Telegram Course Finder</p>
          </div>
        </div>
        <div className="space-y-6">
          {TELEGRAM_CATEGORIES.map((cat, i) => (
            <div key={i} className="space-y-3">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="text-lg">{cat.icon}</span>
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.links.map((link, j) => (
                  <a 
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:text-sky-600 dark:hover:text-sky-400 transition-all flex items-center gap-2"
                  >
                    {link.name}
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
