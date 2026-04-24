import { describe, it, expect } from "vitest";
import { testGeminiConnection, chatWithGemini } from "./_core/geminiAI";

describe("Gemini AI Integration", () => {
  it("should successfully connect to Gemini API", async () => {
    const result = await testGeminiConnection();
    expect(result).toBe(true);
  }, 30000);

  it("should respond to a simple message", async () => {
    const response = await chatWithGemini("مرحباً، كيف حالك؟");
    expect(response.success).toBe(true);
    expect(response.response).toBeDefined();
    expect(response.response?.length).toBeGreaterThan(0);
  }, 30000);

  it("should handle Arabic text correctly", async () => {
    const response = await chatWithGemini("اشرح لي كيفية إدارة الوقت بشكل فعال");
    expect(response.success).toBe(true);
    expect(response.response).toBeDefined();
    expect(response.response?.length).toBeGreaterThan(0);
  }, 30000);
});
