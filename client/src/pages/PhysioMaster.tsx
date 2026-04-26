import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { TestDetailModal } from "@/features/physio/components/TestDetailModal";
import { PhysioTabNav, type PhysioTab } from "@/features/physio/components/PhysioTabNav";
import { DailyTab } from "@/features/physio/tabs/DailyTab";
import { LibraryTab } from "@/features/physio/tabs/LibraryTab";
import { RoadmapTab } from "@/features/physio/tabs/RoadmapTab";
import { TasksTab } from "@/features/physio/tabs/TasksTab";
import { MONTHS_PLAN } from "@/features/physio/constants/curriculum";
import type { SpecialTest } from "@/features/physio/types";
import {
  ArrowLeft,
  Bot,
  Calendar,
  CheckCircle2,
  Droplets,
  ExternalLink,
  Moon,
  Sparkles,
  Sun,
  Bell,
} from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useLocation } from "wouter";

type Task = { id: string; text: string; completed: boolean };

const TOPICS = [
  {
    body: "## حالة اليوم\nإصابة ACL بعد تغيير اتجاه سريع.\n\n- راجع التاريخ المرضي والتورم السريع.\n- فرّق بين الفحص الحاد والفحص بعد هدوء الألم.\n- ضع أهداف أول أسبوعين من التأهيل.",
    quiz: "## اختبار سريع\n1. ما الاختبار الأشهر لـ ACL؟\n- A) Lachman\n- B) FABER\n- C) Speed's\n\n2. ما الأولوية المبكرة؟\n- A) تهدئة الألم والتورم\n- B) قفزات قوية",
  },
  {
    body: "## موضوع اليوم\nShoulder impingement مع painful arc.\n\n- اربط الأعراض بحركة اللوح scapula.\n- راجع دور rotator cuff.\n- حدّد ماذا ستعدّل في نمط الحركة.",
    quiz: "## راجع معلوماتك\n1. painful arc يرتبط غالبًا بـ:\n- A) shoulder elevation\n- B) ankle dorsiflexion\n\n2. أحد أهداف العلاج المبكر:\n- A) تحسين ميكانيكا الحركة\n- B) تجاهل الألم",
  },
  {
    body: "## حالة سريرية\nألم أسفل الظهر ممتد أسفل الركبة.\n\n- افحص توزع الألم.\n- راجع SLR وred flags.\n- فرّق بين irritation عصبي ومشكلة عضلية بسيطة.",
    quiz: "## أسئلة قصيرة\n1. امتداد الألم أسفل الركبة قد يشير إلى:\n- A) nerve irritation\n- B) ألم موضعي فقط\n\n2. خطوة البداية:\n- A) جمع التاريخ المرضي\n- B) تخمين التشخيص مباشرة",
  },
];

const read = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;
  const raw = window.localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

export default function PhysioMaster() {
  const { user, logout } = useAuth({ redirectOnUnauthenticated: true });
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState<PhysioTab>(() => read("physio.tab", "daily"));
  const [tasks, setTasks] = useState<Task[]>(() => read("physio.tasks", []));
  const [newTask, setNewTask] = useState("");
  const [notes, setNotes] = useState(() => read("physio.notes", ""));
  const [startDate, setStartDate] = useState<string | null>(() => read("physio.startDate", null));
  const [selectedPhase, setSelectedPhase] = useState(() => read("physio.phase", "p1"));
  const [selectedMonth, setSelectedMonth] = useState(() => read("physio.month", 0));
  const [completedDays, setCompletedDays] = useState<string[]>(() => read("physio.completed", []));
  const [darkMode, setDarkMode] = useState(() => read("physio.darkMode", false));
  const [dailyReminder, setDailyReminder] = useState(() => read("physio.dailyReminder", false));
  const [waterReminder, setWaterReminder] = useState(() => read("physio.waterReminder", false));
  const [reasoningData, setReasoningData] = useState(() => read("physio.reasoning", { pain: "", movement: "", muscle: "", joint: "", diagnosis: "" }));
  const [assessmentChecklist, setAssessmentChecklist] = useState<Record<string, boolean>>(() => read("physio.assessment", {}));
  const [showReasoningBuilder, setShowReasoningBuilder] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTest, setSelectedTest] = useState<SpecialTest | null>(null);
  const [bmi, setBmi] = useState({ weight: "", height: "", result: null as number | null });
  const [topicIndex, setTopicIndex] = useState(() => read("physio.topicIndex", 0));
  const [dailyTopic, setDailyTopic] = useState<string | null>(TOPICS[read("physio.topicIndex", 0)]?.body ?? TOPICS[0].body);
  const [quiz, setQuiz] = useState<string | null>(null);
  const [loadingTopic, setLoadingTopic] = useState(false);
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [pomoTime, setPomoTime] = useState(25 * 60);
  const [pomoActive, setPomoActive] = useState(false);
  const [pomoMode, setPomoMode] = useState<"work" | "break">("work");

  // Persist state to localStorage
  useEffect(() => {
    const values: Array<[string, unknown]> = [
      ["physio.tab", activeTab],
      ["physio.tasks", tasks],
      ["physio.notes", notes],
      ["physio.startDate", startDate],
      ["physio.phase", selectedPhase],
      ["physio.month", selectedMonth],
      ["physio.completed", completedDays],
      ["physio.darkMode", darkMode],
      ["physio.dailyReminder", dailyReminder],
      ["physio.waterReminder", waterReminder],
      ["physio.reasoning", reasoningData],
      ["physio.assessment", assessmentChecklist],
      ["physio.topicIndex", topicIndex],
    ];
    values.forEach(([key, value]) => window.localStorage.setItem(key, JSON.stringify(value)));
  }, [activeTab, assessmentChecklist, completedDays, dailyReminder, darkMode, notes, reasoningData, selectedMonth, selectedPhase, startDate, tasks, topicIndex, waterReminder]);

  // Pomodoro timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (pomoActive && pomoTime > 0) {
      interval = setInterval(() => setPomoTime((value) => value - 1), 1000);
    } else if (pomoTime === 0) {
      const nextMode = pomoMode === "work" ? "break" : "work";
      setPomoMode(nextMode);
      setPomoTime(nextMode === "work" ? 25 * 60 : 5 * 60);
      setPomoActive(false);
    }
    return () => interval && clearInterval(interval);
  }, [pomoActive, pomoMode, pomoTime]);

  const dayInfo = useMemo(() => {
    if (!startDate) return null;
    const diffDays = Math.floor(Math.abs(Date.now() - new Date(startDate).getTime()) / 86400000);
    const month = MONTHS_PLAN[Math.min(MONTHS_PLAN.length - 1, Math.floor(diffDays / 30))];
    const week = month?.weeks[Math.floor((diffDays % 30) / 7)];
    const day = week?.days[diffDays % 7];
    return { month, week, day, diffDays };
  }, [startDate]);

  const addTask = (event: FormEvent) => {
    event.preventDefault();
    const value = newTask.trim();
    if (!value) return;
    setTasks((current) => [{ id: `${Date.now()}`, text: value, completed: false }, ...current]);
    setNewTask("");
  };

  const toggleTask = (id: string) => setTasks((current) => current.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  const deleteTask = (id: string) => setTasks((current) => current.filter((task) => task.id !== id));
  const toggleCurriculumTask = (id: string) => setCompletedDays((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const formatPomoTime = (seconds: number) => `${`${Math.floor(seconds / 60)}`.padStart(2, "0")}:${`${seconds % 60}`.padStart(2, "0")}`;
  const calculateBMI = () => {
    const weight = Number.parseFloat(bmi.weight);
    const height = Number.parseFloat(bmi.height) / 100;
    if (!weight || !height) return;
    setBmi((current) => ({ ...current, result: Number.parseFloat((weight / (height * height)).toFixed(1)) }));
  };
  const fetchDailyTopic = () => {
    setLoadingTopic(true);
    window.setTimeout(() => {
      const next = (topicIndex + 1) % TOPICS.length;
      setTopicIndex(next);
      setDailyTopic(TOPICS[next].body);
      setQuiz(null);
      setLoadingTopic(false);
    }, 250);
  };
  const handleGenerateQuiz = () => {
    setLoadingQuiz(true);
    window.setTimeout(() => {
      setQuiz(TOPICS[topicIndex].quiz);
      setLoadingQuiz(false);
    }, 250);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 md:pt-0 pt-16">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-xl sticky top-16 md:top-0 z-30">
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            <Button variant="ghost" onClick={() => navigate("/dashboard")} className="gap-2 rounded-2xl">
              <ArrowLeft className="h-4 w-4" />رجوع
            </Button>
            <div className="flex items-center gap-3 text-right">
              <div>
                <h1 className="text-xl font-black text-foreground">مرشد العلاج الطبيعي</h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Clinical Excellence</p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                <Sparkles size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container pt-5 pb-2">
        <PhysioTabNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Content */}
      <main className="container pb-12">
        <div className="mx-auto max-w-5xl space-y-6 pt-4">
          {activeTab === "daily" && (
            <DailyTab pomoMode={pomoMode} pomoTime={pomoTime} pomoActive={pomoActive} setPomoActive={setPomoActive} setPomoTime={setPomoTime} formatPomoTime={formatPomoTime} startDate={startDate} dayInfo={dayInfo} setActiveTab={setActiveTab} loadingTopic={loadingTopic} dailyTopic={dailyTopic} handleGenerateQuiz={handleGenerateQuiz} loadingQuiz={loadingQuiz} quiz={quiz} setQuiz={setQuiz} fetchDailyTopic={fetchDailyTopic} showReasoningBuilder={showReasoningBuilder} setShowReasoningBuilder={setShowReasoningBuilder} reasoningData={reasoningData} setReasoningData={setReasoningData} assessmentChecklist={assessmentChecklist} setAssessmentChecklist={setAssessmentChecklist} />
          )}
          {activeTab === "roadmap" && (
            <RoadmapTab selectedPhase={selectedPhase} setSelectedPhase={setSelectedPhase} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} completedDays={completedDays} toggleDayCompletion={toggleCurriculumTask} />
          )}
          {activeTab === "tasks" && (
            <TasksTab newTask={newTask} setNewTask={setNewTask} addTask={addTask} tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} notes={notes} setNotes={setNotes} />
          )}
          {activeTab === "library" && (
            <LibraryTab searchQuery={searchQuery} setSearchQuery={setSearchQuery} bmi={bmi} setBmi={setBmi} calculateBMI={calculateBMI} setSelectedTest={setSelectedTest} />
          )}

          {/* AI Consultant Tab - Inline */}
          {activeTab === "ai" && (
            <div className="space-y-6">
              <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 via-cyan-600 to-emerald-600 p-6 text-right text-white shadow-xl">
                <div className="mb-3 flex items-center justify-between">
                  <a href="https://physionutrition.vercel.app/ar/insights" target="_blank" rel="noreferrer" className="rounded-2xl bg-white/15 p-3 hover:bg-white/25 transition-colors"><ExternalLink size={18} /></a>
                  <div className="flex items-center gap-3"><Bot size={24} /><h3 className="text-2xl font-black">مركز الاستشارة الذكية</h3></div>
                </div>
                <p className="leading-7 text-cyan-50">استخدم الشات الذكي الحالي بالمشروع مع prompts سريرية، واستفد من روابط التغذية العلاجية ومكتبة الإصابات في نفس المكان.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <a href="/chat" className="rounded-[2rem] border border-border bg-card p-5 text-right shadow-sm hover:shadow-md transition-shadow">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-primary">AI</p>
                  <h4 className="font-black text-foreground">افتح الشات الذكي</h4>
                  <p className="text-sm text-muted-foreground">للنقاش السريري وصياغة أسئلة مذاكرة.</p>
                </a>
                <a href="https://physionutrition.vercel.app/ar/calculators" target="_blank" rel="noreferrer" className="rounded-[2rem] border border-border bg-card p-5 text-right shadow-sm hover:shadow-md transition-shadow">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-600">Nutrition</p>
                  <h4 className="font-black text-foreground">حاسبات التغذية</h4>
                  <p className="text-sm text-muted-foreground">BMI وCalories وMacros.</p>
                </a>
                <a href="https://physionutrition.vercel.app/ar/injuries" target="_blank" rel="noreferrer" className="rounded-[2rem] border border-border bg-card p-5 text-right shadow-sm hover:shadow-md transition-shadow">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-cyan-600">Library</p>
                  <h4 className="font-black text-foreground">مكتبة الإصابات</h4>
                  <p className="text-sm text-muted-foreground">بروتوكولات وتعافي مبني على الأدلة.</p>
                </a>
              </div>
            </div>
          )}

          {/* Settings Tab - Inline */}
          {activeTab === "settings" && (
            <div className="space-y-4">
              <div className="rounded-[2rem] border border-border bg-card p-6 text-right shadow-sm">
                <h3 className="mb-4 text-xl font-black text-foreground">{user?.name || "الطالب"}</h3>
                <div className="grid gap-3 md:grid-cols-3">
                  <label className="rounded-2xl border border-border bg-muted/30 p-4">
                    <span className="mb-2 flex items-center justify-end gap-2 text-xs font-black uppercase text-muted-foreground">بداية الخطة <Calendar size={14} /></span>
                    <input type="date" value={startDate ?? ""} onChange={(event) => setStartDate(event.target.value || null)} className="w-full rounded-xl border border-border bg-card px-3 py-2 text-right text-sm outline-none" />
                  </label>
                  <button onClick={() => setDailyReminder((value) => !value)} className="rounded-2xl border border-border bg-muted/30 p-4 text-right">
                    <span className="mb-2 flex items-center justify-end gap-2 text-xs font-black uppercase text-muted-foreground">تنبيه الدراسة <Bell size={14} /></span>
                    <p className="text-sm font-bold text-foreground">{dailyReminder ? "مفعل ✅" : "متوقف"}</p>
                  </button>
                  <button onClick={() => setWaterReminder((value) => !value)} className="rounded-2xl border border-border bg-muted/30 p-4 text-right">
                    <span className="mb-2 flex items-center justify-end gap-2 text-xs font-black uppercase text-muted-foreground">شرب الماء <Droplets size={14} /></span>
                    <p className="text-sm font-bold text-foreground">{waterReminder ? "مفعل ✅" : "متوقف"}</p>
                  </button>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <button onClick={() => setDarkMode((value) => !value)} className="rounded-2xl border border-border bg-muted/30 p-4 text-right">
                    <span className="mb-2 flex items-center justify-end gap-2 text-xs font-black uppercase text-muted-foreground">الوضع الليلي {darkMode ? <Moon size={14} /> : <Sun size={14} />}</span>
                    <p className="text-sm font-bold text-foreground">{darkMode ? "مفعل" : "نهاري"}</p>
                  </button>
                  <div className="rounded-2xl border border-border bg-muted/30 p-4 text-right">
                    <span className="mb-2 flex items-center justify-end gap-2 text-xs font-black uppercase text-muted-foreground">أيام مكتملة <Calendar size={14} /></span>
                    <p className="text-sm font-bold text-foreground">{completedDays.length}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-muted/30 p-4 text-right">
                    <span className="mb-2 flex items-center justify-end gap-2 text-xs font-black uppercase text-muted-foreground">مهام منجزة <CheckCircle2 size={14} /></span>
                    <p className="text-sm font-bold text-foreground">{tasks.filter((task) => task.completed).length}</p>
                  </div>
                </div>
                <Button onClick={() => void logout()} variant="outline" className="mt-4 w-full rounded-2xl">تسجيل الخروج</Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <TestDetailModal test={selectedTest} onClose={() => setSelectedTest(null)} />
    </div>
  );
}
