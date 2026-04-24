import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { Brain, Send } from "lucide-react";
import { toast } from "sonner";

export default function BrainDump() {
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  const brainDumpQuery = trpc.brainDump.list.useQuery();
  const createBrainDump = trpc.brainDump.create.useMutation({
    onSuccess: () => {
      toast.success("تم حفظ أفكارك بنجاح");
      setContent("");
      brainDumpQuery.refetch();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      toast.error("يرجى كتابة بعض الأفكار");
      return;
    }
    createBrainDump.mutate({
      date: selectedDate,
      content: content.trim(),
      aiAnalysis: undefined,
    });
  };

  const todayDump = brainDumpQuery.data?.find(
    d => d.date === new Date().toISOString().split("T")[0]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container py-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Brain className="w-8 h-8 text-secondary" />
              تفريغ الأفكار
            </h1>
            <p className="text-muted-foreground mt-1">اكتب أفكارك بحرية دون قيود</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8 max-w-4xl">
        {/* Main Input */}
        <Card className="card-elegant mb-8">
          <CardHeader>
            <CardTitle>اليوم - {new Date().toLocaleDateString("ar-SA", { weekday: "long", month: "long", day: "numeric" })}</CardTitle>
            <CardDescription>اكتب ما يدور في بالك بدون تردد</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder="ما الذي يشغل بالك؟ اكتب أفكارك، قلقك، أحلامك، أي شيء..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
                className="resize-none"
              />
              <div className="flex gap-2">
                <Button type="submit" disabled={createBrainDump.isPending} size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  {createBrainDump.isPending ? "جاري الحفظ..." : "حفظ الأفكار"}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setContent("")}
                >
                  مسح
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Today's Entry */}
        {todayDump && (
          <Card className="card-elegant mb-8 border-secondary/50 bg-secondary/5">
            <CardHeader>
              <CardTitle className="text-secondary">✅ تم حفظ أفكار اليوم</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground whitespace-pre-wrap">{todayDump.content}</p>
              {todayDump.aiAnalysis && (
                <div className="mt-4 p-4 rounded-lg bg-background/50 border border-border">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">تحليل الذكاء الاصطناعي:</p>
                  <p className="text-sm">{todayDump.aiAnalysis}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Previous Entries */}
        {brainDumpQuery.data && brainDumpQuery.data.length > 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">الإدخالات السابقة</h2>
            <div className="grid gap-4">
              {brainDumpQuery.data
                .filter(d => d.date !== new Date().toISOString().split("T")[0])
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 10)
                .map((dump) => (
                  <Card key={dump.id} className="card-elegant hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <p className="text-sm font-semibold text-muted-foreground mb-2">
                        {new Date(dump.date).toLocaleDateString("ar-SA", { weekday: "long", month: "long", day: "numeric" })}
                      </p>
                      <p className="text-sm line-clamp-3">{dump.content}</p>
                      {dump.aiAnalysis && (
                        <p className="text-xs text-secondary mt-2">💡 تم تحليلها بالذكاء الاصطناعي</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!brainDumpQuery.data || brainDumpQuery.data.length === 0 && (
          <Card className="card-elegant text-center">
            <CardContent className="pt-12 pb-12">
              <Brain className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">ابدأ بتفريغ أفكارك اليوم</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
