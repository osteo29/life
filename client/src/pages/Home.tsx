import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getLoginUrl } from "@/const";
import { useLocation } from "wouter";
import { BookOpen, Calendar, Moon, Zap, Brain, MessageSquare, ArrowRight, Stethoscope } from "lucide-react";

export default function Home() {
  const { user, isAuthenticated, loading } = useAuth();
  const [, navigate] = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/5">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
        {/* Navigation Bar */}
        <nav className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-accent">نظام إدارة الدراسة</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">مرحباً، {user.name}</span>
              <Button variant="outline" size="sm" onClick={() => navigate("/dashboard")}>
                لوحة التحكم
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 gradient-accent">مرحباً بك في نظام إدارة دراستك</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              نظام متكامل يساعدك على تنظيم محاضراتك، تتبع عاداتك، وتحسين إنتاجيتك الأكاديمية
            </p>
            <Button size="lg" onClick={() => navigate("/dashboard")}>
              ابدأ الآن
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <FeatureCard
              icon={<BookOpen className="w-8 h-8" />}
              title="إدارة المحاضرات"
              description="سجل محاضراتك والسكاشن مع جدول زمني منظم"
              color="primary"
            />
            <FeatureCard
              icon={<Calendar className="w-8 h-8" />}
              title="جدول المراجعة الذكي"
              description="احصل على جدول مراجعة مخصص بناءً على محاضراتك"
              color="secondary"
            />
            <FeatureCard
              icon={<Moon className="w-8 h-8" />}
              title="تتبع النوم"
              description="سجل ساعات نومك واحصل على إحصائيات مفصلة"
              color="accent"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="العادات اليومية"
              description="تابع عاداتك اليومية مع نظام streaks محفز"
              color="primary"
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="تفريغ الأفكار"
              description="اكتب أفكارك وملاحظاتك بحرية وتنظيمها تلقائياً"
              color="secondary"
            />
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8" />}
              title="الشات الذكي"
              description="احصل على اقتراحات ذكية مخصصة لبياناتك"
              color="accent"
            />
            <FeatureCard
              icon={<Stethoscope className="w-8 h-8" />}
              title="مرشد العلاج الطبيعي"
              description="الخطة السريرية والمكتبة والأدوات الدراسية صارت داخل التطبيق نفسه"
              color="primary"
            />
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="card-elegant max-w-2xl mx-auto">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-4">ابدأ رحلتك نحو الإنتاجية الآن</h2>
                <p className="text-muted-foreground mb-6">
                  انضم إلى الآلاف من الطلاب الذين يستخدمون نظامنا لتحسين أدائهم الأكاديمي
                </p>
                <Button size="lg" onClick={() => navigate("/dashboard")}>
                  الذهاب إلى لوحة التحكم
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-accent">نظام إدارة الدراسة</h1>
          <Button onClick={() => window.location.href = getLoginUrl()}>
            دخول
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <div className="container py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 gradient-accent">
            نظام متكامل لإدارة دراستك وحياتك
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            نظم محاضراتك، تابع عاداتك، وحسّن إنتاجيتك مع نظام ذكي يفهم احتياجاتك الأكاديمية
          </p>
          <Button 
            size="lg" 
            onClick={() => window.location.href = getLoginUrl()}
            className="text-lg px-8 py-6"
          >
            ابدأ الآن مجاناً
            <ArrowRight className="w-5 h-5 mr-2" />
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <FeatureCard
            icon={<BookOpen className="w-8 h-8" />}
            title="إدارة المحاضرات"
            description="سجل محاضراتك والسكاشن مع جدول زمني منظم"
            color="primary"
          />
          <FeatureCard
            icon={<Calendar className="w-8 h-8" />}
            title="جدول المراجعة الذكي"
            description="احصل على جدول مراجعة مخصص بناءً على محاضراتك"
            color="secondary"
          />
          <FeatureCard
            icon={<Moon className="w-8 h-8" />}
            title="تتبع النوم"
            description="سجل ساعات نومك واحصل على إحصائيات مفصلة"
            color="accent"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="العادات اليومية"
            description="تابع عاداتك اليومية مع نظام streaks محفز"
            color="primary"
          />
          <FeatureCard
            icon={<Brain className="w-8 h-8" />}
            title="تفريغ الأفكار"
            description="اكتب أفكارك وملاحظاتك بحرية وتنظيمها تلقائياً"
            color="secondary"
          />
          <FeatureCard
            icon={<MessageSquare className="w-8 h-8" />}
            title="الشات الذكي"
            description="احصل على اقتراحات ذكية مخصصة لبياناتك"
            color="accent"
          />
          <FeatureCard
            icon={<Stethoscope className="w-8 h-8" />}
            title="مرشد العلاج الطبيعي"
            description="منصة موحدة للخطة التعليمية والمكتبة السريرية والمهام"
            color="primary"
          />
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="card-elegant max-w-2xl mx-auto">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-3xl font-bold mb-4">جاهز للبدء؟</h2>
              <p className="text-lg text-muted-foreground mb-8">
                انضم إلينا اليوم وابدأ رحلتك نحو الإنتاجية الأكاديمية
              </p>
              <Button 
                size="lg"
                onClick={() => window.location.href = getLoginUrl()}
                className="text-lg px-8 py-6"
              >
                دخول الآن
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: "primary" | "secondary" | "accent" }) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
  };

  return (
    <Card className="card-elegant hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
