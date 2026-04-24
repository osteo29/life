import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { Calendar, Plus, CheckCircle, Trash2, Zap } from "lucide-react";
import { toast } from "sonner";

export default function StudySchedule() {
  const { user } = useAuth();
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    type: "review" as "review" | "practice" | "summary",
    scheduledDate: "",
    duration: "",
    priority: "medium" as "low" | "medium" | "high",
    status: "pending" as "pending" | "in_progress" | "completed",
    notes: "",
  });

  const scheduleQuery = trpc.studySchedule.list.useQuery();
  const createSchedule = trpc.studySchedule.create.useMutation({
    onSuccess: () => {
      toast.success("تم إضافة جلسة المراجعة");
      setFormData({
        subject: "",
        type: "review",
        scheduledDate: "",
        duration: "",
        priority: "medium",
        status: "pending",
        notes: "",
      });
      setIsAdding(false);
      scheduleQuery.refetch();
    },
  });

  const updateSchedule = trpc.studySchedule.update.useMutation({
    onSuccess: () => {
      toast.success("تم تحديث الجلسة");
      scheduleQuery.refetch();
    },
  });

  // const deleteSchedule = trpc.studySchedule.delete.useMutation({
  //   onSuccess: () => {
  //     toast.success("تم حذف الجلسة");
  //     scheduleQuery.refetch();
  //   },
  // });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.subject || !formData.scheduledDate) {
      toast.error("يرجى ملء الحقول المطلوبة");
      return;
    }
    createSchedule.mutate({
      lectureId: undefined,
      subject: formData.subject,
      type: formData.type,
      scheduledDate: new Date(formData.scheduledDate),
      duration: formData.duration ? parseInt(formData.duration) : undefined,
      priority: formData.priority,
      status: formData.status,
      notes: formData.notes || undefined,
    });
  };

  const getTypeLabel = (type: string | null) => {
    return type === "review" ? "مراجعة" : type === "practice" ? "تمارين" : "ملخص";
  };

  const getPriorityColor = (priority: string | null) => {
    return priority === "high" ? "text-destructive" : priority === "medium" ? "text-secondary" : "text-muted-foreground";
  };

  const getStatusIcon = (status: string | null) => {
    return status === "completed" ? "✅" : status === "in_progress" ? "⏳" : "⭕";
  };

  const upcomingSessions = scheduleQuery.data
    ?.filter(s => s.status !== "completed")
    .sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime())
    .slice(0, 10) || [];

  const completedSessions = scheduleQuery.data?.filter(s => s.status === "completed") || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <Calendar className="w-8 h-8 text-primary" />
                جدول المراجعة
              </h1>
              <p className="text-muted-foreground mt-1">خطط جلسات مراجعتك بذكاء</p>
            </div>
            <Button onClick={() => setIsAdding(!isAdding)} size="lg">
              <Plus className="w-4 h-4 mr-2" />
              إضافة جلسة
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        {/* Add Form */}
        {isAdding && (
          <Card className="card-elegant mb-8">
            <CardHeader>
              <CardTitle>إضافة جلسة مراجعة</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>المادة *</Label>
                    <Input
                      placeholder="مثال: علم التشريح"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>نوع الجلسة</Label>
                    <Select value={formData.type} onValueChange={(value: any) => setFormData({ ...formData, type: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="review">مراجعة</SelectItem>
                        <SelectItem value="practice">تمارين</SelectItem>
                        <SelectItem value="summary">ملخص</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>التاريخ والوقت *</Label>
                    <Input
                      type="datetime-local"
                      value={formData.scheduledDate}
                      onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>المدة (دقائق)</Label>
                    <Input
                      type="number"
                      placeholder="60"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>الأولوية</Label>
                    <Select value={formData.priority} onValueChange={(value: any) => setFormData({ ...formData, priority: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">منخفضة</SelectItem>
                        <SelectItem value="medium">متوسطة</SelectItem>
                        <SelectItem value="high">عالية</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>ملاحظات</Label>
                  <Textarea
                    placeholder="أي ملاحظات عن الجلسة..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={2}
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit" disabled={createSchedule.isPending}>
                    {createSchedule.isPending ? "جاري الإضافة..." : "إضافة الجلسة"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setIsAdding(false)}>
                    إلغاء
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Upcoming Sessions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-secondary" />
            الجلسات القادمة
          </h2>
          <div className="grid gap-4">
            {upcomingSessions.length > 0 ? (
              upcomingSessions.map((session) => (
                <Card key={session.id} className="card-elegant">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{getStatusIcon(session.status)}</span>
                          <div>
                            <h3 className="text-lg font-semibold">{session.subject}</h3>
                            <p className="text-sm text-muted-foreground">
                              {getTypeLabel(session.type)} • {new Date(session.scheduledDate).toLocaleDateString("ar-SA")}
                            </p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs bg-secondary/10 text-secondary ml-auto`}>
                            {getTypeLabel(session.type)}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(session.priority)}`}>
                            {session.priority === "high" ? "🔴 عالية" : session.priority === "medium" ? "🟡 متوسطة" : "🟢 منخفضة"}
                          </span>
                        </div>
                        {session.duration && (
                          <p className="text-sm text-muted-foreground">⏱️ {session.duration} دقيقة</p>
                        )}
                        {session.notes && (
                          <p className="text-sm text-muted-foreground mt-2">📝 {session.notes}</p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {session.status !== "completed" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              if (session.id) {
                                updateSchedule.mutate({
                                  id: session.id,
                                  data: { status: "completed" },
                                });
                              }
                            }}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                        )}
                        {/* Delete button would go here */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="card-elegant">
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground py-8">لا توجد جلسات قادمة. ابدأ بإضافة جلسة مراجعة!</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Completed Sessions */}
        {completedSessions.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">✅ الجلسات المكتملة ({completedSessions.length})</h2>
            <div className="grid gap-4">
              {completedSessions.slice(0, 5).map((session) => (
                <Card key={session.id} className="card-elegant opacity-75">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold line-through">{session.subject}</p>
                        <p className="text-sm text-muted-foreground">
                          {getTypeLabel(session.type)} • {new Date(session.scheduledDate).toLocaleDateString("ar-SA")}
                        </p>
                      </div>
                      <span className="text-2xl">✨</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
