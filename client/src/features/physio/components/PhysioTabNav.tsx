import { cn } from '@/lib/utils';
import {
  Sparkles,
  Calendar,
  Bot,
  CheckCircle2,
  BookOpen,
  Settings,
} from 'lucide-react';

const tabs = [
  { id: 'daily', label: 'اليوم', icon: Sparkles },
  { id: 'roadmap', label: 'الخطة', icon: Calendar },
  { id: 'ai', label: 'الاستشاري', icon: Bot },
  { id: 'tasks', label: 'مهامي', icon: CheckCircle2 },
  { id: 'library', label: 'المكتبة', icon: BookOpen },
  { id: 'settings', label: 'الإعدادات', icon: Settings },
] as const;

export type PhysioTab = (typeof tabs)[number]['id'];

interface PhysioTabNavProps {
  activeTab: PhysioTab;
  setActiveTab: (tab: PhysioTab) => void;
}

export function PhysioTabNav({ activeTab, setActiveTab }: PhysioTabNavProps) {
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-2 no-scrollbar -mx-2 px-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all',
              isActive
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/30 scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 hover:text-blue-600 dark:hover:text-blue-400'
            )}
          >
            <Icon size={16} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
