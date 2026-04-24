/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Loader2,
  LogOut,
  User as UserIcon,
  Sparkles
} from 'lucide-react';
import { 
  auth, 
  db, 
  googleProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  doc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  collection, 
  onSnapshot,
  handleFirestoreError,
  OperationType,
  testConnection
} from './firebase';
import { getDailyTopic, generateQuiz } from './services/gemini';
import { requestNotificationPermission, sendNotification, scheduleReminder, getFCMToken, onMessageListener } from './services/notifications';
import { MONTHS_PLAN } from './constants/curriculum';
import { PHASES } from './constants';
import { Task, SpecialTest } from './types';

// Components
import { BottomNav } from './components/layout/BottomNav';
import { DailyTab } from './components/tabs/DailyTab';
import { RoadmapTab } from './components/tabs/RoadmapTab';
import { TasksTab } from './components/tabs/TasksTab';
import { LibraryTab } from './components/tabs/LibraryTab';
import { SettingsTab } from './components/tabs/SettingsTab';
import { AIConsultantTab } from './components/tabs/AIConsultantTab';
import { TestDetailModal } from './components/modals/TestDetailModal';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [activeTab, setActiveTab] = useState<'daily' | 'roadmap' | 'tasks' | 'library' | 'settings' | 'ai'>('daily');
  
  // App State
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [curriculumProgress, setCurriculumProgress] = useState<Record<string, boolean>>({});
  const [startDate, setStartDate] = useState<string | null>(null);
  const [selectedPhase, setSelectedPhase] = useState('p1');
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [dailyTopic, setDailyTopic] = useState<string | null>(null);
  const [loadingTopic, setLoadingTopic] = useState(false);
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [quiz, setQuiz] = useState<string | null>(null);
  const [selectedTest, setSelectedTest] = useState<SpecialTest | null>(null);
  const [bmi, setBmi] = useState<{ weight: string; height: string; result: number | null }>({ weight: '', height: '', result: null });

  // User Profile & Settings
  const [userProfile, setUserProfile] = useState({
    name: '',
    university: '',
    goal: ''
  });
  const [showReasoningBuilder, setShowReasoningBuilder] = useState(false);
  const [reasoningData, setReasoningData] = useState({
    pain: '',
    movement: '',
    muscle: '',
    joint: '',
    diagnosis: ''
  });
  const [assessmentChecklist, setAssessmentChecklist] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });
  const [waterReminder, setWaterReminder] = useState<boolean>(false);
  const [reminderEnabled, setReminderEnabled] = useState<boolean>(false);
  const [reminderTime, setReminderTime] = useState<string>('09:00');

  // Auth Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setIsAuthReady(true);
      if (u) testConnection();
    });
    return () => unsubscribe();
  }, []);

  // Firestore Sync: User Profile
  useEffect(() => {
    if (!user || !isAuthReady) return;
    const userDoc = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userDoc, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        if (data.startDate) setStartDate(data.startDate);
        if (data.notes) setNotes(data.notes);
        if (data.reminderEnabled !== undefined) setReminderEnabled(data.reminderEnabled);
        if (data.reminderTime) setReminderTime(data.reminderTime);
        if (data.darkMode !== undefined) setDarkMode(data.darkMode);
        if (data.waterReminder !== undefined) setWaterReminder(data.waterReminder);
        if (data.assessmentChecklist) setAssessmentChecklist(data.assessmentChecklist);
        if (data.displayName) setUserProfile(prev => ({ ...prev, name: data.displayName }));
      } else {
        setDoc(userDoc, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          lastLogin: new Date().toISOString()
        }).catch(e => handleFirestoreError(e, OperationType.CREATE, `users/${user.uid}`));
      }
    }, (e) => handleFirestoreError(e, OperationType.GET, `users/${user.uid}`));
    return () => unsubscribe();
  }, [user, isAuthReady]);

  // Firestore Sync: Tasks
  useEffect(() => {
    if (!user || !isAuthReady) return;
    const tasksCol = collection(db, 'users', user.uid, 'tasks');
    const unsubscribe = onSnapshot(tasksCol, (snapshot) => {
      const loadedTasks = snapshot.docs.map(doc => doc.data() as Task);
      setTasks(loadedTasks.sort((a, b) => b.id.localeCompare(a.id)));
    }, (e) => handleFirestoreError(e, OperationType.GET, `users/${user.uid}/tasks`));
    return () => unsubscribe();
  }, [user, isAuthReady]);

  // Firestore Sync: Progress
  useEffect(() => {
    if (!user || !isAuthReady) return;
    const progressCol = collection(db, 'users', user.uid, 'progress');
    const unsubscribe = onSnapshot(progressCol, (snapshot) => {
      const progress: Record<string, boolean> = {};
      snapshot.docs.forEach(doc => {
        progress[doc.id] = doc.data().completed;
      });
      setCurriculumProgress(progress);
    }, (e) => handleFirestoreError(e, OperationType.GET, `users/${user.uid}/progress`));
    return () => unsubscribe();
  }, [user, isAuthReady]);

  // Save Settings to Firestore
  const updateProfile = async (updates: any) => {
    if (!user) return;
    try {
      await updateDoc(doc(db, 'users', user.uid), updates);
    } catch (e) {
      handleFirestoreError(e, OperationType.UPDATE, `users/${user.uid}`);
    }
  };

  useEffect(() => {
    if (isAuthReady && user) {
      updateProfile({ assessmentChecklist });
    }
  }, [assessmentChecklist]);

  useEffect(() => {
    if (isAuthReady && user) {
      updateProfile({ notes });
    }
  }, [notes]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    if (isAuthReady && user) {
      updateProfile({ darkMode });
    }
  }, [darkMode, isAuthReady, user]);

  useEffect(() => {
    if (isAuthReady && user) {
      updateProfile({ waterReminder });
      if (waterReminder) {
        const interval = setInterval(() => {
          sendNotification("اشرب ماء! 💧", {
            body: "حافظ على رطوبة جسمك لزيادة التركيز.",
          });
        }, 2 * 60 * 60 * 1000);
        return () => clearInterval(interval);
      }
    }
  }, [waterReminder]);

  useEffect(() => {
    if (isAuthReady && user) {
      updateProfile({ reminderEnabled, reminderTime });
      if (reminderEnabled) {
        getFCMToken().then(token => {
          if (token) {
            updateProfile({ fcmToken: token });
          }
        });

        const cleanup = scheduleReminder(reminderTime, () => {
          sendNotification("وقت المذاكرة يا بطل! 🩺", {
            body: "لا تنسَ إنجاز مهام اليوم في PhysioMaster.",
          });
        });
        return cleanup;
      }
    }
  }, [reminderEnabled, reminderTime]);

  // Handle Foreground Messages
  useEffect(() => {
    const unsubscribe = onMessageListener((payload: any) => {
      if (payload?.notification) {
        sendNotification(payload.notification.title, {
          body: payload.notification.body
        });
      }
    });
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = async () => {
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      // Check if already signed in
      if (auth.currentUser) {
        setIsLoggingIn(false);
        return;
      }
      
      await signInWithPopup(auth, googleProvider);
    } catch (e: any) {
      console.error("Login failed", e);
      if (e.code === 'auth/popup-blocked') {
        setLoginError("تم حظر النافذة المنبثقة. يرجى تفعيل النوافذ المنبثقة في متصفحك والمحاولة مرة أخرى.");
      } else if (e.code === 'auth/cancelled-popup-request') {
        setLoginError("تم إلغاء عملية تسجيل الدخول أو هناك طلب سابق قيد التنفيذ. يرجى تحديث الصفحة والمحاولة مرة أخرى.");
      } else if (e.message?.includes('INTERNAL ASSERTION FAILED')) {
        setLoginError("حدث خطأ داخلي في نظام تسجيل الدخول. يرجى تحديث الصفحة والمحاولة مرة أخرى.");
      } else {
        setLoginError("حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.");
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const toggleCurriculumTask = async (id: string) => {
    if (!user) return;
    const newCompleted = !curriculumProgress[id];
    try {
      await setDoc(doc(db, 'users', user.uid, 'progress', id), {
        uid: user.uid,
        dayId: id,
        completed: newCompleted,
        updatedAt: new Date().toISOString()
      });
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, `users/${user.uid}/progress/${id}`);
    }
  };

  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim() || !user) return;
    const taskId = Date.now().toString();
    const task: Task = {
      id: taskId,
      text: newTask,
      completed: false,
    };
    try {
      await setDoc(doc(db, 'users', user.uid, 'tasks', taskId), {
        ...task,
        uid: user.uid,
        createdAt: new Date().toISOString()
      });
      setNewTask('');
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, `users/${user.uid}/tasks/${taskId}`);
    }
  };

  const toggleTask = async (id: string) => {
    if (!user) return;
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    try {
      await updateDoc(doc(db, 'users', user.uid, 'tasks', id), {
        completed: !task.completed
      });
    } catch (e) {
      handleFirestoreError(e, OperationType.UPDATE, `users/${user.uid}/tasks/${id}`);
    }
  };

  const deleteTask = async (id: string) => {
    if (!user) return;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'tasks', id));
    } catch (e) {
      handleFirestoreError(e, OperationType.DELETE, `users/${user.uid}/tasks/${id}`);
    }
  };

  const calculateBMI = () => {
    const w = parseFloat(bmi.weight);
    const h = parseFloat(bmi.height) / 100;
    if (w > 0 && h > 0) {
      setBmi({ ...bmi, result: parseFloat((w / (h * h)).toFixed(1)) });
    }
  };

  const formatPomoTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleGenerateQuiz = async () => {
    if (!dailyTopic) return;
    setLoadingQuiz(true);
    const result = await generateQuiz(dailyTopic);
    setQuiz(result);
    setLoadingQuiz(false);
  };

  const fetchDailyTopic = async () => {
    setLoadingTopic(true);
    const topic = await getDailyTopic();
    setDailyTopic(topic);
    setLoadingTopic(false);
  };

  useEffect(() => {
    if (activeTab === 'daily' && !dailyTopic) {
      fetchDailyTopic();
    }
  }, [activeTab]);

  const currentDayInfo = () => {
    if (!startDate) return null;
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - start.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const monthIdx = Math.floor(diffDays / 30);
    const dayInMonth = diffDays % 30;
    const weekIdx = Math.floor(dayInMonth / 7);
    const dayInWeek = dayInMonth % 7;

    const month = MONTHS_PLAN[monthIdx];
    const week = month?.weeks[weekIdx];
    const day = week?.days[dayInWeek];

    return { month, week, day, diffDays };
  };

  const dayInfo = currentDayInfo();

  // Pomodoro State
  const [pomoTime, setPomoTime] = useState(25 * 60);
  const [pomoActive, setPomoActive] = useState(false);
  const [pomoMode, setPomoMode] = useState<'work' | 'break'>('work');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (pomoActive && pomoTime > 0) {
      interval = setInterval(() => {
        setPomoTime((prev) => prev - 1);
      }, 1000);
    } else if (pomoTime === 0) {
      setPomoActive(false);
      const nextMode = pomoMode === 'work' ? 'break' : 'work';
      setPomoMode(nextMode);
      setPomoTime(nextMode === 'work' ? 25 * 60 : 5 * 60);
      sendNotification(nextMode === 'work' ? "وقت العمل!" : "وقت الراحة!", {
        body: nextMode === 'work' ? "عد للمذاكرة بتركيز." : "خذ نفساً عميقاً واسترح قليلاً.",
      });
    }
    return () => clearInterval(interval);
  }, [pomoActive, pomoTime, pomoMode]);

  if (!isAuthReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 text-center">
        <div className="w-24 h-24 bg-blue-600 rounded-[2.5rem] flex items-center justify-center text-white mb-8 shadow-2xl shadow-blue-200 dark:shadow-none">
          <Sparkles size={48} />
        </div>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">PhysioMaster</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-xs leading-relaxed">
          رفيقك الذكي في رحلة احتراف العلاج الطبيعي. خطة دراسية، أدوات تقييم، ومجتمع تعليمي.
        </p>
        <button 
          onClick={handleLogin}
          disabled={isLoggingIn}
          className="w-full max-w-xs py-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl font-bold text-slate-800 dark:text-slate-100 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {isLoggingIn ? (
            <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
          ) : (
            <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
          )}
          {isLoggingIn ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول بواسطة جوجل'}
        </button>
        {loginError && (
          <p className="mt-4 text-xs font-bold text-rose-500 bg-rose-50 dark:bg-rose-900/20 p-3 rounded-2xl border border-rose-100 dark:border-rose-900/30">
            {loginError}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 transition-colors duration-300">
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl sticky top-0 z-30 px-6 py-4 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 dark:shadow-none">
            <Sparkles size={20} />
          </div>
          <div>
            <h1 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">PhysioMaster</h1>
            <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Clinical Excellence</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Welcome back</p>
            <p className="text-sm font-black text-slate-800 dark:text-slate-100">{userProfile.name || user.displayName}</p>
          </div>
          <div className="w-10 h-10 rounded-2xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm">
            <img src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`} alt="Profile" />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-6">
        {activeTab === 'daily' && (
          <DailyTab 
            pomoMode={pomoMode}
            pomoTime={pomoTime}
            pomoActive={pomoActive}
            setPomoActive={setPomoActive}
            setPomoTime={setPomoTime}
            formatPomoTime={formatPomoTime}
            startDate={startDate}
            dayInfo={dayInfo}
            setActiveTab={setActiveTab}
            loadingTopic={loadingTopic}
            dailyTopic={dailyTopic}
            handleGenerateQuiz={handleGenerateQuiz}
            loadingQuiz={loadingQuiz}
            quiz={quiz}
            setQuiz={setQuiz}
            fetchDailyTopic={fetchDailyTopic}
            showReasoningBuilder={showReasoningBuilder}
            setShowReasoningBuilder={setShowReasoningBuilder}
            reasoningData={reasoningData}
            setReasoningData={setReasoningData}
            assessmentChecklist={assessmentChecklist}
            setAssessmentChecklist={setAssessmentChecklist}
          />
        )}

        {activeTab === 'ai' && (
          <AIConsultantTab />
        )}

        {activeTab === 'roadmap' && (
          <RoadmapTab 
            selectedPhase={selectedPhase}
            setSelectedPhase={setSelectedPhase}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            completedDays={Object.keys(curriculumProgress).filter(k => curriculumProgress[k])}
            toggleDayCompletion={toggleCurriculumTask}
          />
        )}

        {activeTab === 'tasks' && (
          <TasksTab 
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            notes={notes}
            setNotes={setNotes}
          />
        )}

        {activeTab === 'library' && (
          <LibraryTab 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            bmi={bmi}
            setBmi={setBmi}
            calculateBMI={calculateBMI}
            setSelectedTest={setSelectedTest}
          />
        )}

        {activeTab === 'settings' && (
          <SettingsTab 
            userProfile={userProfile}
            setUserProfile={setUserProfile}
            startDate={startDate}
            setStartDate={setStartDate}
            dailyReminder={reminderEnabled}
            setDailyReminder={setReminderEnabled}
            waterReminder={waterReminder}
            setWaterReminder={setWaterReminder}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            completedDays={Object.keys(curriculumProgress).filter(k => curriculumProgress[k])}
            tasks={tasks}
          />
        )}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <TestDetailModal test={selectedTest} onClose={() => setSelectedTest(null)} />
    </div>
  );
}
