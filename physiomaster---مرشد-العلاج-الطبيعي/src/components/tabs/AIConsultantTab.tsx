import React, { useState, useRef } from 'react';
import { 
  MessageSquare, 
  Image as ImageIcon, 
  Send, 
  Bot, 
  User, 
  Loader2, 
  AlertCircle, 
  Camera,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import { cn } from '../../lib/utils';
import { chatWithAI, analyzeClinicalImage } from '../../services/gemini';

interface Message {
  role: 'user' | 'model';
  text: string;
  image?: string;
}

export function AIConsultantTab() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'أهلاً بك في الاستشاري السريري الذكي. كيف يمكنني مساعدتك اليوم؟ يمكنك وصفي حالة، سؤال عن ميكانيكا حيوية، أو حتى رفع صورة أشعة لشرحها.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim() && !selectedImage) return;

    const userMessage: Message = { role: 'user', text: input, image: selectedImage || undefined };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      let responseText = '';
      if (selectedImage) {
        // Extract base64 data
        const base64Data = selectedImage.split(',')[1];
        responseText = await analyzeClinicalImage(base64Data, input || "اشرح هذه الصورة السريرية.");
        setSelectedImage(null);
      } else {
        const history = messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }));
        responseText = await chatWithAI(input, history);
      }

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'عذراً، حدث خطأ في الاتصال بالذكاء الاصطناعي.' }]);
    } finally {
      setLoading(false);
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
  };

  return (
    <motion.div
      key="ai-consultant"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col h-[calc(100vh-180px)]"
    >
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-t-3xl text-white shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
            <Bot size={24} />
          </div>
          <div>
            <h2 className="text-xl font-black">الاستشاري السريري الذكي</h2>
            <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest">AI Clinical Consultant</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white dark:bg-slate-900 border-x border-slate-100 dark:border-slate-800 scrollbar-hide">
        {messages.length === 1 && (
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button 
              onClick={() => handleQuickAction("اشرح لي ميكانيكا المشي (Gait Cycle) ببساطة.")}
              className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl text-xs font-bold text-blue-700 dark:text-blue-300 text-right hover:bg-blue-100 transition-colors"
            >
              شرح ميكانيكا المشي 🚶‍♂️
            </button>
            <button 
              onClick={() => handleQuickAction("اقترح خطة علاجية لحالة تمزق الرباط الصليبي (ACL) في المرحلة الأولى.")}
              className="p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-2xl text-xs font-bold text-indigo-700 dark:text-indigo-300 text-right hover:bg-indigo-100 transition-colors"
            >
              خطة علاج ACL 🦵
            </button>
            <button 
              onClick={() => handleQuickAction("كيف يمكنني التمييز بين الانزلاق الغضروفي والشد العضلي في أسفل الظهر؟")}
              className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 rounded-2xl text-xs font-bold text-purple-700 dark:text-purple-300 text-right hover:bg-purple-100 transition-colors"
            >
              تشخيص آلام الظهر 🔍
            </button>
            <button 
              onClick={() => handleQuickAction("أعطني 3 تمارين لتقوية عضلات الكفة المدورة (Rotator Cuff).")}
              className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-2xl text-xs font-bold text-emerald-700 dark:text-emerald-300 text-right hover:bg-emerald-100 transition-colors"
            >
              تمارين الكتف 💪
            </button>
            <a 
              href="https://physionutrition.vercel.app/ar/calculators" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800 rounded-2xl text-xs font-bold text-rose-700 dark:text-rose-300 text-right hover:bg-rose-100 transition-colors flex items-center justify-between"
            >
              <span>حاسبات التغذية والماكروز 🍎</span>
              <ExternalLink size={12} />
            </a>
            <a 
              href="https://physionutrition.vercel.app/ar/injuries" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-2xl text-xs font-bold text-emerald-700 dark:text-emerald-300 text-right hover:bg-emerald-100 transition-colors flex items-center justify-between"
            >
              <span>مكتبة الإصابات والتعافي 🩹</span>
              <ExternalLink size={12} />
            </a>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={cn(
            "flex gap-3 max-w-[85%]",
            msg.role === 'user' ? "mr-auto flex-row-reverse" : "ml-auto"
          )}>
            <div className={cn(
              "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
              msg.role === 'user' ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            )}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className="space-y-2">
              {msg.image && (
                <img src={msg.image} alt="Uploaded" className="rounded-2xl max-w-full border border-slate-100 dark:border-slate-800 shadow-sm" />
              )}
              <div className={cn(
                "p-4 rounded-2xl text-sm leading-relaxed text-right dir-rtl",
                msg.role === 'user' 
                  ? "bg-blue-600 text-white rounded-tr-none" 
                  : "bg-slate-50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-800"
              )}>
                <Markdown>{msg.text}</Markdown>
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3 ml-auto max-w-[85%]">
            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <Loader2 className="animate-spin text-blue-600" size={16} />
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-800">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      <div className="p-4 bg-white dark:bg-slate-900 border-x border-b border-slate-100 dark:border-slate-800 rounded-b-3xl">
        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-2xl border border-amber-100 dark:border-amber-900/30 flex items-start gap-3 mb-4">
          <AlertCircle className="text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" size={14} />
          <p className="text-[10px] font-bold text-amber-800 dark:text-amber-300 leading-relaxed">
            تنبيه: هذا الذكاء الاصطناعي للأغراض التعليمية فقط. لا تستخدمه للتشخيص الطبي النهائي.
          </p>
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="relative w-20 h-20 mb-4"
            >
              <img src={selectedImage} alt="Preview" className="w-full h-full object-cover rounded-xl border-2 border-blue-600" />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-1 shadow-lg"
              >
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-2">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            accept="image/*" 
            className="hidden" 
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <ImageIcon size={20} />
          </button>
          <div className="relative flex-1">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اسأل عن حالة أو ارفع صورة..."
              className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-right transition-all"
            />
          </div>
          <button 
            onClick={handleSend}
            disabled={loading || (!input.trim() && !selectedImage)}
            className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function X({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
