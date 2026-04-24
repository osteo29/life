import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { Moon, Plus, TrendingUp } from "lucide-react";
import { toast } from "sonner";

export default function Sleep() {
  const { user } = useAuth();
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    sleepTime: "",
    wakeTime: "",
    quality: "good" as "poor" | "fair" | "good" | "excellent",
    notes: "",
  });

  const sleepQuery = trpc.sleep.list.useQuery();
  const createSleep = trpc.sleep.create.useMutation({
    onSuccess: () => {
      toast.success("تم تسجيل النوم بنجاح");
      setFormData({
        date: new Date().toISOString().split("T")[0],
        sleepTime: "",
        wakeTime: "",
        quality: "good",
        notes: "",
      });
      setIsAdding(false);
      sleepQuery.refetch();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date) {
      toast.error("يرجى اختيار التاريخ");
      return;
    }

    const sleepTime = formData.sleepTime ? new Date(`${formData.date}T${formData.sleepTime}`) : undefined;
    const wakeTime = formData.wakeTime ? new Date(`${formData.date}T${formData.wakeTime}`) : undefined;

    let duration = undefined;
    if (sleepTime && wakeTime) {
      duration = Math.round((wakeTime.getTime() - sleepTime.getTime()) / (1000 * 60));
    }

    createSleep.mutate({
      date: formData.date,
      sleepTime,
      wakeTime,
      duration,
      quality: formData.quality,
      notes: formData.notes || undefined,
    });
  };

  const calculateStats = () => {
    if (!sleepQuery.data || sleepQuery.data.length === 0) {
      return { average: 0, total: 0, best: 0, worst: 0 };
    }

    const durations = sleepQuery.data
      .filter(s => s.duration)
      .map(s => s.duration!);

    if (durations.length === 0) {
      return { average: 0, total: 0, best: 0, worst: 0 };
    }

    const average = Math.round(durations.reduce((a, b) => a + b, 0) / durations.length / 60);
    const total = durations.length;
    const best = Math.round(Math.max(...durations) / 60);
    const worst = Math.round(Math.min(...durations) / 60);

    return { average, total, best, worst };
  };

  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <Moon className="w-8 h-8 text-accent" />
                تتبع النوم
              </h1>
              <p className="text-muted-foreground mt-1">سجل ساعات نومك واحصل على إحصائيات</p>
            </div>
            <Button onClick={() => setIsAdding(!isAdding)} size="lg">
              <Plus className="w-4 h-4 mr-2" />
              تسجيل نوم
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="card-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">متوسط النوم</p>
                  <p className="text-2xl font-bold mt-2">{stats.average} ساعة</p>
                </div>
                <Moon className="w-8 h-8 text-accent/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">عدد الليالي</p>
                  <p className="text-2xl font-bold mt-2">{stats.total}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">أفضل ليلة</p>
                  <p className="text-2xl font-bold mt-2">{stats.best} ساعة</p>
                </div>
                <span className="text-2xl">✨</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">أقل ليلة</p>
                  <p className="text-2xl font-bold mt-2">{stats.worst} ساعة</p>
                </div>
                <span className="text-2xl">😴</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Form */}
        {isAdding && (
          <Card className="card-elegant mb-8">
            <CardHeader>
              <CardTitle>تسجيل نوم جديد</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>التاريخ *</Label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>جودة النوم</Label>
                    <Select value={formData.quality} onValueChange={(value: any) => setFormData({ ...formData, quality: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="poor">سيء</SelectItem>
                        <SelectItem value="fair">مقبول</SelectItem>
                        <SelectItem value="good">جيد</SelectItem>
                        <SelectItem value="excellent">ممتاز</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>وقت النوم</Label>
                    <Input
                      type="time"
                      value={formData.sleepTime}
                      onChange={(e) => setFormData({ ...formData, sleepTime: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>وقت الاستيقاظ</Label>
                    <Input
                      type="time"
                      value={formData.wakeTime}
                      onChange={(e) => setFormData({ ...formData, wakeTime: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label>ملاحظات</Label>
                  <Textarea
                    placeholder="أي ملاحظات عن نومك..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={2}
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit" disabled={createSleep.isPending}>
                    {createSleep.isPending ? "جاري الحفظ..." : "حفظ"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setIsAdding(false)}>
                    إلغاء
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Sleep Records */}
        <div className="grid gap-4">
          {sleepQuery.isLoading ? (
            <p className="text-center text-muted-foreground py-8">جاري التحميل...</p>
          ) : sleepQuery.data && sleepQuery.data.length > 0 ? (
            sleepQuery.data
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((record) => {
                const duration = record.duration ? Math.round(record.duration / 60) : null;
                const qualityEmoji = {
                  poor: "😴",
                  fair: "😐",
                  good: "😊",
                  excellent: "😴✨",
                };
                return (
                  <Card key={record.id} className="card-elegant">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{qualityEmoji[record.quality as keyof typeof qualityEmoji] || "😴"}</span>
                            <div>
                              <p className="font-semibold">
                                {new Date(record.date).toLocaleDateString("ar-SA", { weekday: "long", month: "long", day: "numeric" })}
                              </p>
                              {duration && (
                                <p className="text-sm text-muted-foreground">
                                  {duration} ساعة من النوم
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                            {record.sleepTime && (
                              <span>🌙 {new Date(record.sleepTime).toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })}</span>
                            )}
                            {record.wakeTime && (
                              <span>☀️ {new Date(record.wakeTime).toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })}</span>
                            )}
                            <span className="capitalize">
                              {record.quality === "poor" ? "سيء" : record.quality === "fair" ? "مقبول" : record.quality === "good" ? "جيد" : "ممتاز"}
                            </span>
                          </div>
                          {record.notes && (
                            <p className="text-sm text-muted-foreground mt-2">📝 {record.notes}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
          ) : (
            <Card className="card-elegant">
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground py-8">لم تسجل أي نوم بعد. ابدأ بتسجيل نومك!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
