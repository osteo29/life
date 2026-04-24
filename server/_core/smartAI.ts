/**
 * Smart AI Engine - Local Implementation
 * Provides intelligent recommendations and analysis without external API dependency
 * Uses rule-based and data-driven algorithms for smart suggestions
 */

export interface StudentData {
  lectures: Array<{ name: string; date: string; notes?: string }>;
  sleepHours: number;
  completedHabits: number;
  totalHabits: number;
  brainDumpContent?: string;
}

/**
 * Generate smart study recommendations based on student data
 */
export function generateSmartRecommendations(data: StudentData): string {
  const recommendations: string[] = [];

  // Sleep-based recommendations
  if (data.sleepHours < 6) {
    recommendations.push(
      "⚠️ **تنبيه النوم**: ساعات نومك أقل من المتوسط الصحي (6-8 ساعات). حاول تنام أبكر بـ 30 دقيقة اليوم."
    );
  } else if (data.sleepHours > 9) {
    recommendations.push(
      "💡 **تحسين الإنتاجية**: قد تكون تنام أكثر من اللازم. حاول تقلل ساعات النوم تدريجياً."
    );
  } else {
    recommendations.push("✅ **النوم جيد**: ساعات نومك صحية، استمر على هذا النمط.");
  }

  // Habits-based recommendations
  const habitCompletionRate = (data.completedHabits / data.totalHabits) * 100;
  if (habitCompletionRate < 50) {
    recommendations.push(
      "🎯 **تحسين العادات**: أنت تكمل أقل من 50% من عاداتك. حاول تركز على عادة واحدة فقط وأكملها يومياً."
    );
  } else if (habitCompletionRate >= 80) {
    recommendations.push(
      "🌟 **ممتاز**: أنت تكمل أكثر من 80% من عاداتك! استمر على هذا الزخم."
    );
  }

  // Lecture-based recommendations
  if (data.lectures.length > 5) {
    recommendations.push(
      "📚 **جدول مراجعة**: لديك عدد كبير من المحاضرات. ركز على مراجعة المحاضرات الأقدم أولاً."
    );
  }

  // Brain dump analysis
  if (data.brainDumpContent && data.brainDumpContent.length > 0) {
    const keywords = extractKeywords(data.brainDumpContent);
    if (keywords.length > 0) {
      recommendations.push(
        `🧠 **من أفكارك**: لاحظت أنك قلق بشأن: ${keywords.join(", ")}. حاول تقسم هذه المخاوف إلى خطوات صغيرة.`
      );
    }
  }

  return recommendations.join("\n\n");
}

/**
 * Generate a personalized study schedule
 */
export function generateStudySchedule(
  lectures: Array<{ name: string; date: string }>,
  sleepHours: number
): Array<{ time: string; task: string; duration: number }> {
  const schedule: Array<{ time: string; task: string; duration: number }> = [];

  // Calculate available study time based on sleep
  const availableHours = 24 - sleepHours - 8; // 8 hours for other activities

  // Distribute lectures across available time
  const lecturesPerDay = Math.ceil(lectures.length / 5); // Spread over 5 days

  let currentHour = 9; // Start at 9 AM
  for (let i = 0; i < lecturesPerDay && i < lectures.length; i++) {
    const lecture = lectures[i];
    const duration = Math.min(2, availableHours / lecturesPerDay); // 2 hours max per session

    schedule.push({
      time: `${currentHour}:00`,
      task: `مراجعة: ${lecture.name}`,
      duration: duration,
    });

    currentHour += Math.ceil(duration) + 1; // Add 1 hour break
  }

  // Add evening review session
  if (currentHour < 20) {
    schedule.push({
      time: "20:00",
      task: "مراجعة عامة وتفريغ أفكار",
      duration: 1,
    });
  }

  return schedule;
}

/**
 * Analyze brain dump and provide insights
 */
export function analyzeBrainDump(content: string): string {
  const lines = content.split("\n").filter((line) => line.trim().length > 0);
  const keywordCount = lines.length;

  let analysis = "## 📊 تحليل تفريغ الأفكار\n\n";

  analysis += `**عدد الأفكار**: ${keywordCount}\n\n`;

  // Sentiment analysis (simple)
  const negativeWords = [
    "قلق",
    "خائف",
    "صعب",
    "مشكلة",
    "فشل",
    "ضغط",
    "متعب",
  ];
  const positiveWords = [
    "سعيد",
    "متحمس",
    "نجح",
    "رائع",
    "ممتاز",
    "فخور",
    "متحسن",
  ];

  let negativeCount = 0;
  let positiveCount = 0;

  content.split(" ").forEach((word) => {
    if (negativeWords.some((w) => word.includes(w))) negativeCount++;
    if (positiveWords.some((w) => word.includes(w))) positiveCount++;
  });

  if (negativeCount > positiveCount) {
    analysis +=
      "**المزاج**: يبدو أنك تشعر ببعض الضغط. تذكر أن تأخذ فترات راحة منتظمة. 💪\n\n";
  } else if (positiveCount > negativeCount) {
    analysis +=
      "**المزاج**: أنت متحمس وإيجابي! استمر على هذا الزخم. 🌟\n\n";
  }

  // Extract main topics
  const keywords = extractKeywords(content);
  if (keywords.length > 0) {
    analysis += `**المواضيع الرئيسية**: ${keywords.join(", ")}\n\n`;
  }

  analysis +=
    "**النصيحة**: حاول تقسم أفكارك إلى مهام صغيرة قابلة للتنفيذ. كل مهمة صغيرة تنجزها ستشعرك بالإنجاز! ✨";

  return analysis;
}

/**
 * Extract keywords from text (simple implementation)
 */
function extractKeywords(text: string): string[] {
  const stopWords = [
    "في",
    "من",
    "إلى",
    "هذا",
    "ذلك",
    "هي",
    "هو",
    "أن",
    "و",
    "أو",
    "لا",
    "نعم",
  ];

  const words = text
    .split(/[\s\n]+/)
    .filter((word) => word.length > 3 && !stopWords.includes(word))
    .slice(0, 5); // Top 5 keywords

  return Array.from(new Set(words)); // Remove duplicates
}

/**
 * Generate habit improvement suggestions
 */
export function generateHabitSuggestions(
  habits: Array<{ name: string; completedToday: boolean; streak: number }>
): string {
  let suggestions = "## 🎯 اقتراحات تحسين العادات\n\n";

  // Find habits with low completion
  const incompleteHabits = habits.filter((h) => !h.completedToday);
  if (incompleteHabits.length > 0) {
    suggestions += `**العادات المتبقية**: ${incompleteHabits.map((h) => h.name).join(", ")}\n\n`;
    suggestions +=
      "حاول تكملها قبل النوم. كل عادة تكملها ستزيد من streak بتاعك! 🔥\n\n";
  }

  // Find habits with good streaks
  const goodStreaks = habits.filter((h) => h.streak >= 7);
  if (goodStreaks.length > 0) {
    suggestions += `**عادات قوية**: ${goodStreaks.map((h) => `${h.name} (${h.streak} أيام)`).join(", ")}\n\n`;
    suggestions += "استمر على هذا الزخم! 🌟\n\n";
  }

  // Motivational message
  suggestions +=
    "**تذكر**: العادات تُبنى بالتكرار. كل يوم تكمل عاداتك، أنت تبني نسخة أفضل من نفسك! 💪";

  return suggestions;
}

/**
 * Chat response generator for common questions
 */
export function generateChatResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  // Common questions and responses
  if (
    message.includes("كيف") &&
    (message.includes("مراجعة") || message.includes("دراسة"))
  ) {
    return `
**نصائح للمراجعة الفعالة:**

1. **تقنية Pomodoro**: ادرس 25 دقيقة، ثم خذ راحة 5 دقائق
2. **التكرار المتباعد**: راجع المادة في أيام مختلفة
3. **التلخيص**: اكتب ملخصات قصيرة بكلماتك
4. **الشرح للآخرين**: شرح المادة لشخص آخر يساعد على الفهم
5. **النوم الكافي**: النوم ضروري لتثبيت المعلومات

جرب هذه الطرق وشوف أيها أنسب ليك! 📚
    `;
  }

  if (message.includes("عادات") || message.includes("habit")) {
    return `
**كيفية بناء عادات قوية:**

1. **ابدأ صغير**: عادة واحدة بسيطة أولاً
2. **ربط العادة بروتين موجود**: مثلاً بعد الفطار مباشرة
3. **تتبع يومي**: استخدم التطبيق لتتبع إنجازك
4. **المكافآت**: كافئ نفسك عند إكمال streak
5. **الصبر**: تحتاج 21-66 يوم لتصير عادة

أنت على الطريق الصحيح! 🎯
    `;
  }

  if (message.includes("نوم") || message.includes("sleep")) {
    return `
**نصائح لنوم أفضل:**

1. **روتين منتظم**: نم في نفس الوقت يومياً
2. **بيئة مناسبة**: غرفة مظلمة وباردة وهادئة
3. **تجنب الشاشات**: ابعد عن الهاتف قبل النوم بـ 30 دقيقة
4. **تمارين استرخاء**: جرب تمارين التنفس قبل النوم
5. **الهدف**: 7-9 ساعات نوم يومياً

النوم الجيد = مذاكرة أفضل! 😴
    `;
  }

  if (message.includes("متحمس") || message.includes("تحفيز")) {
    return `
**أنت تفعل رائع! 🌟**

تذكر:
- كل يوم تدرس فيه، أنت تقترب من أهدافك
- الفشل جزء من النجاح
- قارن نفسك بنسختك أمس، ليس بالآخرين
- استمتع بالعملية، ليس فقط بالنتيجة

أنت قادر على تحقيق أهدافك! 💪
    `;
  }

  // Default response
  return `
**مرحباً! 👋**

أنا هنا لمساعدتك في:
- تنظيم المحاضرات والمراجعة
- بناء عادات يومية قوية
- تحسين ساعات النوم
- إدارة الوقت بشكل فعال

اسأل عن أي حاجة متعلقة بالدراسة أو العادات! 📚
  `;
}
