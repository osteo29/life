import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { BookOpen, Calendar, Moon, Zap, Brain, MessageSquare, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { useLocation } from "wouter";

export default function Dashboard() {
  const { user } = useAuth();
  const [, navigate] = useLocation();

  const lecturesQuery = trpc.lectures.list.useQuery();
  const habitsQuery = trpc.habits.list.useQuery();
  const sleepQuery = trpc.sleep.list.useQuery();
  const studyScheduleQuery = trpc.studySchedule.list.useQuery();

  const upcomingLectures = lecturesQuery.data?.slice(0, 3) || [];
  const todayHabits = habitsQuery.data?.slice(0, 5) || [];
  const recentSleep = sleepQuery.data?.[sleepQuery.data.length - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 md:pt-0 pt-16">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-16 md:top-0 z-40">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold gradient-accent">مرحباً، {user?.name || "الطالب"}</h1>
              <p className="text-muted-foreground mt-1">نظام إدارة دراستك وحياتك الأكاديمية</p>
            </div>
            <div className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString("ar-SA", { weekday: "long", month: "long", day: "numeric" })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8 space-y-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="card-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">المحاضرات هذا الأسبوع</p>
                  <p className="text-2xl font-bold mt-2">{lecturesQuery.data?.length || 0}</p>
                </div>
                <BookOpen className="w-8 h-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">العادات النشطة</p>
                  <p className="text-2xl font-bold mt-2">{habitsQuery.data?.length || 0}</p>
                </div>
                <Zap className="w-8 h-8 text-secondary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">ساعات النوم أمس</p>
                  <p className="text-2xl font-bold mt-2">{recentSleep?.duration ? Math.round(recentSleep.duration / 60) : "-"}</p>
                </div>
                <Moon className="w-8 h-8 text-accent/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">مهام المراجعة</p>
                  <p className="text-2xl font-bold mt-2">{studyScheduleQuery.data?.length || 0}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Lectures */}
          <Card className="card-elegant lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                المحاضرات القادمة
              </CardTitle>
              <CardDescription>أهم المحاضرات في الأيام القادمة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingLectures.length > 0 ? (
                upcomingLectures.map((lecture) => (
                  <div key={lecture.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{lecture.subject}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(lecture.date).toLocaleDateString("ar-SA")}
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded text-xs bg-primary/10 text-primary whitespace-nowrap">
                      {lecture.type === "lecture" ? "محاضرة" : lecture.type === "session" ? "سكاشن" : "معمل"}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground text-center py-6">لا توجد محاضرات مسجلة</p>
              )}
              <Button 
                onClick={() => navigate("/lectures")}
                className="w-full mt-4"
              >
                عرض جميع المحاضرات
              </Button>
            </CardContent>
          </Card>

          {/* Today's Habits */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                العادات اليومية
              </CardTitle>
              <CardDescription>تابع إنجازاتك</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {todayHabits.length > 0 ? (
                todayHabits.map((habit) => (
                  <div key={habit.id} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <span className="text-sm flex-1">{habit.name}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground text-center py-6">لا توجد عادات مسجلة</p>
              )}
              <Button 
                onClick={() => navigate("/habits")}
                variant="outline"
                className="w-full mt-4"
              >
                إدارة العادات
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card 
            className="card-elegant cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("/sleep")}
          >
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Moon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">تتبع النوم</h3>
                  <p className="text-xs text-muted-foreground">سجل نومك</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="card-elegant cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("/habits")}
          >
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">العادات</h3>
                  <p className="text-xs text-muted-foreground">تابع عاداتك</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="card-elegant cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("/brain-dump")}
          >
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">تفريغ الأفكار</h3>
                  <p className="text-xs text-muted-foreground">اكتب أفكارك</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="card-elegant cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("/chat")}
          >
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">الشات الذكي</h3>
                  <p className="text-xs text-muted-foreground">احصل على اقتراحات</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
