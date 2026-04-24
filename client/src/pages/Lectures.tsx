import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { BookOpen, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function Lectures() {
  const { user } = useAuth();
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    type: "lecture" as "lecture" | "session" | "lab",
    date: "",
    duration: "",
    location: "",
    notes: "",
  });

  const lecturesQuery = trpc.lectures.list.useQuery();
  const createLecture = trpc.lectures.create.useMutation({
    onSuccess: () => {
      toast.success("تم إضافة المحاضرة بنجاح");
      setFormData({ subject: "", type: "lecture", date: "", duration: "", location: "", notes: "" });
      setIsAdding(false);
      lecturesQuery.refetch();
    },
    onError: (error) => {
      toast.error("خطأ في إضافة المحاضرة");
    },
  });

  const deleteLecture = trpc.lectures.delete.useMutation({
    onSuccess: () => {
      toast.success("تم حذف المحاضرة");
      lecturesQuery.refetch();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.subject || !formData.date) {
      toast.error("يرجى ملء الحقول المطلوبة");
      return;
    }
    createLecture.mutate({
      subject: formData.subject,
      type: formData.type,
      date: new Date(formData.date),
      duration: formData.duration ? parseInt(formData.duration) : undefined,
      location: formData.location || undefined,
      notes: formData.notes || undefined,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <BookOpen className="w-8 h-8 text-primary" />
                المحاضرات والسكاشن
              </h1>
              <p className="text-muted-foreground mt-1">إدارة محاضراتك الأكاديمية</p>
            </div>
            <Button onClick={() => setIsAdding(!isAdding)} size="lg">
              <Plus className="w-4 h-4 mr-2" />
              إضافة محاضرة
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
              <CardTitle>إضافة محاضرة جديدة</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>اسم المادة *</Label>
                    <Input
                      placeholder="مثال: علم التشريح"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>نوع المحاضرة *</Label>
                    <Select value={formData.type} onValueChange={(value: any) => setFormData({ ...formData, type: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lecture">محاضرة</SelectItem>
                        <SelectItem value="session">سكاشن</SelectItem>
                        <SelectItem value="lab">معمل</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>التاريخ والوقت *</Label>
                    <Input
                      type="datetime-local"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
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
                    <Label>المكان</Label>
                    <Input
                      placeholder="قاعة المحاضرات"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label>ملاحظات</Label>
                  <Textarea
                    placeholder="أي ملاحظات إضافية..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit" disabled={createLecture.isPending}>
                    {createLecture.isPending ? "جاري الإضافة..." : "إضافة المحاضرة"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setIsAdding(false)}>
                    إلغاء
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Lectures List */}
        <div className="grid gap-4">
          {lecturesQuery.isLoading ? (
            <p className="text-center text-muted-foreground py-8">جاري التحميل...</p>
          ) : lecturesQuery.data && lecturesQuery.data.length > 0 ? (
            lecturesQuery.data.map((lecture) => (
              <Card key={lecture.id} className="card-elegant">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{lecture.subject}</h3>
                        <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                          {lecture.type === "lecture" ? "محاضرة" : lecture.type === "session" ? "سكاشن" : "معمل"}
                        </span>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>📅 {new Date(lecture.date).toLocaleDateString("ar-SA", { weekday: "long", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
                        {lecture.location && <p>📍 {lecture.location}</p>}
                        {lecture.duration && <p>⏱️ {lecture.duration} دقيقة</p>}
                        {lecture.notes && <p className="mt-2">📝 {lecture.notes}</p>}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => lecture.id && deleteLecture.mutate({ id: lecture.id })}
                      disabled={deleteLecture.isPending}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="card-elegant">
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground py-8">لا توجد محاضرات مسجلة. ابدأ بإضافة محاضرتك الأولى!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
