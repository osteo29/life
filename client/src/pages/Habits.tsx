import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { Zap, Plus, Trash2, Check } from "lucide-react";
import { toast } from "sonner";

export default function Habits() {
  const { user } = useAuth();
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    frequency: "daily" as "daily" | "weekly" | "custom",
    targetDays: "",
    reminderTime: "",
  });

  const habitsQuery = trpc.habits.list.useQuery();
  const trackingQuery = trpc.habits.getTracking.useQuery({ date: new Date().toISOString().split("T")[0] });

  const createHabit = trpc.habits.create.useMutation({
    onSuccess: () => {
      toast.success("تم إضافة العادة بنجاح");
      setFormData({ name: "", description: "", category: "", frequency: "daily", targetDays: "", reminderTime: "" });
      setIsAdding(false);
      habitsQuery.refetch();
    },
  });

  const trackHabit = trpc.habits.track.useMutation({
    onSuccess: () => {
      toast.success("تم تحديث العادة");
      trackingQuery.refetch();
    },
  });

  const deleteHabit = trpc.habits.delete.useMutation({
    onSuccess: () => {
      toast.success("تم حذف العادة");
      habitsQuery.refetch();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error("يرجى إدخال اسم العادة");
      return;
    }
    createHabit.mutate({
      name: formData.name,
      description: formData.description || undefined,
      category: formData.category || undefined,
      frequency: formData.frequency,
      targetDays: formData.targetDays || undefined,
      reminderTime: formData.reminderTime || undefined,
    });
  };

  const handleToggleHabit = (habitId: number) => {
    const today = new Date().toISOString().split("T")[0];
    const isCompleted = trackingQuery.data?.find(t => t.habitId === habitId)?.completed;
    trackHabit.mutate({
      habitId,
      date: today,
      completed: isCompleted ? 0 : 1,
    });
  };

  const getStreakCount = (habitId: number) => {
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split("T")[0];
      // This would need actual tracking data to calculate properly
    }
    return streak;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <Zap className="w-8 h-8 text-secondary" />
                العادات اليومية
              </h1>
              <p className="text-muted-foreground mt-1">تابع عاداتك وحافظ على الاستمرارية</p>
            </div>
            <Button onClick={() => setIsAdding(!isAdding)} size="lg">
              <Plus className="w-4 h-4 mr-2" />
              إضافة عادة
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
              <CardTitle>إضافة عادة جديدة</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>اسم العادة *</Label>
                    <Input
                      placeholder="مثال: الدراسة لمدة ساعة"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>الفئة</Label>
                    <Input
                      placeholder="دراسة، صحة، إنتاجية..."
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label>الوصف</Label>
                  <Textarea
                    placeholder="وصف العادة..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>التكرار</Label>
                    <Select value={formData.frequency} onValueChange={(value: any) => setFormData({ ...formData, frequency: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">يومي</SelectItem>
                        <SelectItem value="weekly">أسبوعي</SelectItem>
                        <SelectItem value="custom">مخصص</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>أيام الهدف</Label>
                    <Input
                      placeholder="السبت، الأحد..."
                      value={formData.targetDays}
                      onChange={(e) => setFormData({ ...formData, targetDays: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>وقت التذكير</Label>
                    <Input
                      type="time"
                      value={formData.reminderTime}
                      onChange={(e) => setFormData({ ...formData, reminderTime: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button type="submit" disabled={createHabit.isPending}>
                    {createHabit.isPending ? "جاري الإضافة..." : "إضافة العادة"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setIsAdding(false)}>
                    إلغاء
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Habits List */}
        <div className="grid gap-4">
          {habitsQuery.isLoading ? (
            <p className="text-center text-muted-foreground py-8">جاري التحميل...</p>
          ) : habitsQuery.data && habitsQuery.data.length > 0 ? (
            habitsQuery.data.map((habit) => {
              const tracking = trackingQuery.data?.find(t => t.habitId === habit.id);
              const isCompleted = tracking?.completed === 1;
              return (
                <Card key={habit.id} className="card-elegant">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <button
                            onClick={() => handleToggleHabit(habit.id!)}
                            className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                              isCompleted
                                ? "bg-secondary border-secondary"
                                : "border-border hover:border-secondary"
                            }`}
                          >
                            {isCompleted && <Check className="w-4 h-4 text-white" />}
                          </button>
                          <h3 className={`text-lg font-semibold ${isCompleted ? "line-through text-muted-foreground" : ""}`}>
                            {habit.name}
                          </h3>
                          {habit.category && (
                            <span className="px-2 py-1 rounded-full text-xs bg-secondary/10 text-secondary">
                              {habit.category}
                            </span>
                          )}
                        </div>
                        {habit.description && (
                          <p className="text-sm text-muted-foreground mb-2">{habit.description}</p>
                        )}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          {habit.frequency && (
                            <span>
                              {habit.frequency === "daily" ? "يومي" : habit.frequency === "weekly" ? "أسبوعي" : "مخصص"}
                            </span>
                          )}
                          {habit.reminderTime && <span>🔔 {habit.reminderTime}</span>}
                          <span className="text-secondary font-semibold">🔥 {getStreakCount(habit.id!)} أيام</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => habit.id && deleteHabit.mutate({ id: habit.id })}
                        disabled={deleteHabit.isPending}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <Card className="card-elegant">
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground py-8">لا توجد عادات مسجلة. ابدأ بإضافة عادتك الأولى!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
