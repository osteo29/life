import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { 
  Home, 
  BookOpen, 
  Moon, 
  Zap, 
  Brain, 
  MessageSquare, 
  Calendar,
  Stethoscope,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/dashboard", label: "لوحة التحكم", icon: Home },
  { href: "/lectures", label: "المحاضرات", icon: BookOpen },
  { href: "/sleep", label: "النوم", icon: Moon },
  { href: "/habits", label: "العادات", icon: Zap },
  { href: "/brain-dump", label: "تفريغ الأفكار", icon: Brain },
  { href: "/study-schedule", label: "جدول المراجعة", icon: Calendar },
  { href: "/chat", label: "الشات الذكي", icon: MessageSquare },
  { href: "/physio-master", label: "مرشد العلاج الطبيعي", icon: Stethoscope },
];

export default function Navigation() {
  const { user, logout } = useAuth();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed right-0 top-0 h-screen w-64 bg-card border-l border-border/50 flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border/50">
          <h2 className="text-xl font-bold text-primary">نظام الدراسة</h2>
          <p className="text-xs text-muted-foreground mt-1">{user?.name || "الطالب"}</p>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-border/50">
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => logout()}
          >
            <LogOut className="w-4 h-4" />
            تسجيل الخروج
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 right-0 left-0 h-16 bg-card border-b border-border/50 flex items-center justify-between px-4 z-50">
        <h2 className="text-lg font-bold text-primary">نظام الدراسة</h2>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 hover:bg-secondary/10 rounded-lg"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 right-0 left-0 bottom-0 bg-card border-b border-border/50 overflow-y-auto z-40">
          <div className="p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              );
            })}
            <button
              onClick={() => {
                logout();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">تسجيل الخروج</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
