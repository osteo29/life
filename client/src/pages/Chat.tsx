import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { MessageSquare, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Streamdown } from "streamdown";

export default function Chat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: "مرحباً! أنا مساعدك الذكي في إدارة دراستك. يمكنني مساعدتك في:\n\n📚 تنظيم جدول المراجعة\n⏰ إدارة الوقت والعادات\n💤 تحسين نوعية نومك\n🎯 تحديد الأولويات\n\nما الذي تحتاج إلى مساعدة فيه؟",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatMutation = trpc.chat.send.useMutation({
    onSuccess: (response) => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.success ? "تم معالجة رسالتك" : "حدث خطأ",
        },
      ]);
      setIsLoading(false);
    },
    onError: (error) => {
      toast.error("حدث خطأ في الاتصال بالمساعد الذكي");
      setIsLoading(false);
    },
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setIsLoading(true);
    chatMutation.mutate({
      content: userMessage,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 flex flex-col">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container py-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <MessageSquare className="w-8 h-8 text-accent" />
            الشات الذكي
          </h1>
          <p className="text-muted-foreground mt-1">احصل على اقتراحات مخصصة بناءً على بياناتك</p>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 container py-8 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-6 space-y-4 max-w-4xl mx-auto w-full">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-md lg:max-w-2xl px-4 py-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-card border border-border rounded-bl-none"
                }`}
              >
                {message.role === "assistant" ? (
                  <Streamdown>{message.content}</Streamdown>
                ) : (
                  <p className="text-sm">{message.content}</p>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-card border border-border px-4 py-3 rounded-lg rounded-bl-none">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm text-muted-foreground">جاري الرد...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <Card className="card-elegant max-w-4xl mx-auto w-full">
          <CardContent className="pt-4">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                placeholder="اكتب سؤالك أو طلبك..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
