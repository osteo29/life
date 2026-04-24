import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const MODEL_NAME = "gemini-3-flash-preview";

export async function getDailyTopic() {
  const today = new Date().toISOString().split('T')[0];
  const cacheKey = `daily_topic_${today}`;
  const cached = localStorage.getItem(cacheKey);
  
  if (cached) {
    return cached;
  }

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: "أنت مرشد أكاديمي خبير في العلاج الطبيعي. اقترح موضوعاً واحداً مهماً جداً أو حالة عملية (Case Study) لليوم لزيادة خبرة طالب في السنة الثانية. اجعل الشرح مفصلاً، يشمل التشخيص، التقييم، والخطة العلاجية المقترحة. اكتب باللغة العربية بأسلوب احترافي ومحفز.",
      config: {
        temperature: 0.7,
      },
    });
    
    const text = response.text;
    if (text) {
      localStorage.setItem(cacheKey, text);
      // Clean up old caches
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('daily_topic_') && key !== cacheKey) {
          localStorage.removeItem(key);
        }
      });
    }
    return text;
  } catch (error: any) {
    console.error("Error fetching daily topic:", JSON.stringify(error, null, 2));
    if (error.status === 429) {
      return "⚠️ تم الوصول للحد الأقصى للطلبات حالياً. يرجى المحاولة مرة أخرى بعد قليل. (ملاحظة: سيتم حفظ الموضوع بمجرد جلبة بنجاح لليوم بأكمله)";
    }
    return "عذراً، حدث خطأ أثناء جلب موضوع اليوم. حاول مرة أخرى لاحقاً.";
  }
}

export async function getRoadmapAdvice(phase: string) {
  const cacheKey = `roadmap_advice_${phase}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) return cached;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: `أنت مرشد أكاديمي خبير. قدم نصيحة ذهبية وخطوات عملية للتميز في مرحلة "${phase}" في دراسة العلاج الطبيعي، مع التركيز على الجانب العملي وكيفية التدريب باليد. اكتب باللغة العربية.`,
    });
    const text = response.text;
    if (text) localStorage.setItem(cacheKey, text);
    return text;
  } catch (error) {
    console.error("Error fetching roadmap advice:", JSON.stringify(error, null, 2));
    return "لا يمكن جلب النصيحة حالياً.";
  }
}

export async function generateQuiz(topic: string) {
  const cacheKey = `quiz_${topic.substring(0, 50)}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) return cached;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: `بناءً على الموضوع التالي في العلاج الطبيعي: "${topic}"، قم بإنشاء اختبار قصير مكون من 3 أسئلة اختيار من متعدد (MCQ) مع 4 خيارات لكل سؤال. حدد الإجابة الصحيحة لكل سؤال. اكتب باللغة العربية بأسلوب أكاديمي.`,
    });
    const text = response.text;
    if (text) localStorage.setItem(cacheKey, text);
    return text;
  } catch (error) {
    console.error("Error generating quiz:", JSON.stringify(error, null, 2));
    return "عذراً، حدث خطأ أثناء إنشاء الاختبار.";
  }
}

export async function chatWithAI(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: "أنت خبير استشاري في العلاج الطبيعي. مهمتك هي مساعدة الطلاب والممارسين في فهم الحالات السريرية، شرح الميكانيكا الحيوية، واقتراح خطط علاجية مبنية على الدليل العلمي (EBP). \n\nعندما يسأل المستخدم عن حسابات غذائية (سعرات، بروتين، ماكروز) أو يحتاج لمكتبة إصابات مفصلة، قم بتوجيهه لاستخدام أدوات Physio Nutrition المتاحة في التطبيق أو عبر الروابط التالية:\n- للحسابات: https://physionutrition.vercel.app/ar/calculators\n- لمكتبة الإصابات: https://physionutrition.vercel.app/ar/injuries\n- للمقالات: https://physionutrition.vercel.app/ar/insights\n\nدائماً اذكر تنبيهاً بأن هذه المعلومات استرشادية ولا تغني عن الفحص السريري المباشر. اكتب باللغة العربية.",
      },
      history: history,
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "عذراً، واجهت مشكلة في معالجة طلبك.";
  }
}

export async function analyzeClinicalImage(base64Image: string, prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: {
        parts: [
          { inlineData: { data: base64Image, mimeType: "image/jpeg" } },
          { text: prompt || "اشرح ما تراه في هذه الصورة من منظور أخصائي علاج طبيعي. إذا كانت أشعة، وضح المعالم التشريحية وأي ملاحظات سريرية محتملة مع التنبيه بأن هذا ليس تشخيصاً نهائياً." }
        ]
      }
    });
    return response.text;
  } catch (error) {
    console.error("Image analysis error:", error);
    return "عذراً، فشل تحليل الصورة.";
  }
}
