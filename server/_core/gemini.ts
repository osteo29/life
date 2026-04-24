/**
 * Google Gemini AI Integration
 * Handles all AI-powered features like smart chat, recommendations, and analysis
 */

import { ENV } from "./env";

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent";

export interface GeminiMessage {
  role: "user" | "assistant";
  content: string;
}

export interface GeminiResponse {
  success: boolean;
  response?: string;
  error?: string;
}

/**
 * Send a message to Gemini AI and get a response
 */
export async function chatWithGemini(
  userMessage: string,
  context?: string
): Promise<GeminiResponse> {
  try {
    if (!ENV.geminiApiKey) {
      return {
        success: false,
        error: "Gemini API Key not configured",
      };
    }

    const systemPrompt = context
      ? `أنت مساعد ذكي متخصص في مساعدة الطلاب على تنظيم دراستهم. ${context}`
      : "أنت مساعد ذكي متخصص في مساعدة الطلاب على تنظيم دراستهم وإدارة وقتهم والعادات الصحية.";

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
                text: systemPrompt + "\n\nسؤال المستخدم: " + userMessage,
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
 * Analyze brain dump entry and provide insights
 */
export async function analyzeBrainDump(content: string): Promise<string> {
  const context =
    "أنت متخصص في تحليل أفكار الطلاب وتقديم نصائح بناءة. حلل الأفكار التالية وقدم ملخصاً قصيراً وإيجابياً.";

  const result = await chatWithGemini(
    `حلل هذه الأفكار وقدم ملخصاً وإرشادات: "${content}"`,
    context
  );

  return result.response || "لم يتمكن من تحليل الأفكار";
}

/**
 * Generate smart study recommendations based on user data
 */
export async function generateStudyRecommendations(
  lectures: Array<{ name: string; date: string }>,
  sleepHours: number,
  completedHabits: number,
  totalHabits: number
): Promise<string> {
  const context =
    "أنت متخصص في التعليم والإدارة الأكاديمية. قدم توصيات ذكية مخصصة.";

  const prompt = `
بناءً على البيانات التالية، قدم توصيات ذكية:
- المحاضرات: ${lectures.map((l) => l.name).join(", ")}
- ساعات النوم: ${sleepHours}
- العادات المكتملة: ${completedHabits}/${totalHabits}

قدم 3-4 توصيات عملية قصيرة.
  `;

  const result = await chatWithGemini(prompt, context);
  return result.response || "لم يتمكن من توليد توصيات";
}

/**
 * Test the Gemini API connection
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
