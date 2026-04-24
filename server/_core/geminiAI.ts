/**
 * Google Gemini AI Integration
 * Real AI-powered responses for chat, analysis, and recommendations
 */

import { ENV } from "./env";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent";

export interface GeminiResponse {
  success: boolean;
  response?: string;
  error?: string;
}

/**
 * Send a message to Gemini AI and get a response
 */
export async function chatWithGemini(userMessage: string): Promise<GeminiResponse> {
  try {
    if (!ENV.geminiApiKey) {
      return {
        success: false,
        error: "Gemini API Key not configured",
      };
    }

    const systemPrompt = `أنت مساعد ذكي متخصص في مساعدة الطلاب على تنظيم دراستهم وإدارة وقتهم والعادات الصحية. 
    
تقدم نصائح عملية وإيجابية وتحفيزية. ترد باللغة العربية دائماً.`;

    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": ENV.geminiApiKey,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${systemPrompt}\n\nسؤال الطالب: ${userMessage}`,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("[Gemini] API Error:", error);
      return {
        success: false,
        error: `API Error: ${response.status}`,
      };
    }

    const data = await response.json();

    // Extract the response text from Gemini's response structure
    const responseText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "عذراً، لم أتمكن من معالجة طلبك";

    return {
      success: true,
      response: responseText,
    };
  } catch (error) {
    console.error("[Gemini] Error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Analyze brain dump with AI
 */
export async function analyzeBrainDumpWithAI(content: string): Promise<string> {
  const prompt = `حلل الأفكار التالية وقدم ملخصاً قصيراً (3-4 أسطر) وإرشادات بناءة:

"${content}"

ركز على:
1. المواضيع الرئيسية
2. المشاعر والقلق (إن وجدت)
3. نصيحة عملية واحدة`;

  const result = await chatWithGemini(prompt);
  return result.response || "لم يتمكن من تحليل الأفكار";
}

/**
 * Generate smart study recommendations
 */
export async function generateRecommendationsWithAI(
  lectures: string[],
  sleepHours: number,
  completedHabits: number,
  totalHabits: number
): Promise<string> {
  const habitRate = ((completedHabits / totalHabits) * 100).toFixed(0);

  const prompt = `بناءً على البيانات التالية، قدم 3-4 توصيات عملية قصيرة:

- المحاضرات: ${lectures.join(", ")}
- ساعات النوم: ${sleepHours}
- نسبة إكمال العادات: ${habitRate}%

قدم توصيات مخصصة وعملية وتحفيزية.`;

  const result = await chatWithGemini(prompt);
  return result.response || "لم يتمكن من توليد توصيات";
}

/**
 * Test Gemini API connection
 */
export async function testGeminiConnection(): Promise<boolean> {
  try {
    const result = await chatWithGemini("مرحباً، هل تعمل بشكل صحيح؟");
    return result.success;
  } catch (error) {
    console.error("[Gemini] Connection test failed:", error);
    return false;
  }
}
