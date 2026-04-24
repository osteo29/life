import React from 'react';
import { 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Circle, 
  StickyNote, 
  ListTodo, 
  Calendar 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Task } from '../../types';

interface TasksTabProps {
  newTask: string;
  setNewTask: (task: string) => void;
  addTask: (e: React.FormEvent) => void;
  tasks: Task[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
}

export function TasksTab({
  newTask,
  setNewTask,
  addTask,
  tasks,
  toggleTask,
  deleteTask,
  notes,
  setNotes
}: TasksTabProps) {
  return (
    <motion.div
      key="tasks"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="space-y-6"
    >
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl">
            <ListTodo size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-800 dark:text-slate-100">قائمة المهام الشخصية</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Personal Study Tasks</p>
          </div>
        </div>

        <form onSubmit={addTask} className="flex gap-2 mb-6">
          <input 
            type="text" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="أضف مهمة جديدة..."
            className="flex-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-right transition-all"
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none hover:scale-105 active:scale-95 transition-all"
          >
            <Plus size={24} />
          </button>
        </form>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {tasks.map((task) => (
              <motion.div 
                key={task.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-2xl border transition-all group",
                  task.completed 
                    ? "bg-slate-50 dark:bg-slate-800/30 border-slate-100 dark:border-slate-800 opacity-60" 
                    : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-200 dark:hover:border-blue-900/50"
                )}
              >
                <button 
                  onClick={() => toggleTask(task.id)}
                  className={cn(
                    "transition-colors",
                    task.completed ? "text-emerald-500" : "text-slate-300 hover:text-blue-500"
                  )}
                >
                  {task.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                </button>
                <span className={cn(
                  "flex-1 text-sm font-bold text-right",
                  task.completed ? "line-through text-slate-400" : "text-slate-700 dark:text-slate-200"
                )}>
                  {task.text}
                </span>
                <button 
                  onClick={() => deleteTask(task.id)}
                  className="opacity-0 group-hover:opacity-100 p-2 text-slate-300 hover:text-rose-500 transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {tasks.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800/50 rounded-3xl flex items-center justify-center mx-auto mb-4 text-slate-300">
                <ListTodo size={32} />
              </div>
              <p className="text-sm font-bold text-slate-400">لا توجد مهام حالياً. ابدأ بإضافة مهامك الدراسية!</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl">
            <StickyNote size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-800 dark:text-slate-100">ملاحظات سريعة</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Quick Study Notes</p>
          </div>
        </div>
        <textarea 
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="اكتب ملاحظاتك هنا..."
          className="w-full h-48 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 text-sm outline-none focus:ring-2 focus:ring-amber-500 text-right resize-none transition-all"
        />
      </div>
    </motion.div>
  );
}
