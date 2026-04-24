import React from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  Settings,
  Sparkles,
  Bot
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

export function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-1 py-3 flex justify-around items-center z-40 pb-safe">
      <NavButton 
        active={activeTab === 'daily'} 
        onClick={() => setActiveTab('daily')} 
        icon={<Sparkles size={20} />} 
        label="اليوم" 
      />
      <NavButton 
        active={activeTab === 'roadmap'} 
        onClick={() => setActiveTab('roadmap')} 
        icon={<Calendar size={20} />} 
        label="الخطة" 
      />
      <NavButton 
        active={activeTab === 'ai'} 
        onClick={() => setActiveTab('ai')} 
        icon={<Bot size={20} />} 
        label="الاستشاري" 
      />
      <NavButton 
        active={activeTab === 'tasks'} 
        onClick={() => setActiveTab('tasks')} 
        icon={<CheckCircle2 size={20} />} 
        label="مهامي" 
      />
      <NavButton 
        active={activeTab === 'library'} 
        onClick={() => setActiveTab('library')} 
        icon={<BookOpen size={20} />} 
        label="المكتبة" 
      />
      <NavButton 
        active={activeTab === 'settings'} 
        onClick={() => setActiveTab('settings')} 
        icon={<Settings size={20} />} 
        label="الإعدادات" 
      />
    </nav>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 transition-all",
        active ? "text-blue-600 scale-110" : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
      )}
    >
      {icon}
      <span className="text-[10px] font-bold">{label}</span>
    </button>
  );
}
