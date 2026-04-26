import React from 'react';
import { 
  Brain, 
  Stethoscope, 
  Dumbbell, 
  Award, 
  Sparkles,
  Calculator
} from 'lucide-react';
import type { Phase, SpecialTestCategory, OrthoLibraryCategory, ROMReference, TelegramResource, TelegramCategory } from '../types';

export const PHASES: Phase[] = [
  {
    id: 'p1',
    title: "المرحلة 1: التأسيس العلمي",
    sub: "Anatomy, Biomechanics, Physiology",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    icon: <Brain size={20} />,
  },
  {
    id: 'p2',
    title: "المرحلة 2: التقييم والتشخيص الإقليمي",
    sub: "Regional Assessment & Common Pathologies",
    color: "bg-blue-50 text-blue-700 border-blue-100",
    icon: <Stethoscope size={20} />,
  },
  {
    id: 'p3',
    title: "المرحلة 3: العلاج اليدوي والتقنيات المتقدمة",
    sub: "Manual Therapy, MDT, Mulligan, Maitland",
    color: "bg-amber-50 text-amber-700 border-amber-100",
    icon: <Dumbbell size={20} />,
  },
  {
    id: 'p4',
    title: "المرحلة 4: التأهيل الرياضي وما بعد الجراحة",
    sub: "Sports PT, Post-Op Protocols, Strength & Conditioning",
    color: "bg-rose-50 text-rose-700 border-rose-100",
    icon: <Award size={20} />,
  },
  {
    id: 'p5',
    title: "المرحلة 5: الإتقان الإكلينيكي والبحث العلمي",
    sub: "Clinical Reasoning, EBP, Mastery",
    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
    icon: <Sparkles size={20} />,
  },
  {
    id: 'p6',
    title: "المرحلة 6: التغذية والاستشفاء الرياضي",
    sub: "Sports Nutrition, Recovery, Supplements",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    icon: <Calculator size={20} />,
  }
];

export const TELEGRAM_RESOURCES: TelegramResource[] = [
  {
    name: "Physio Nutrition - الحاسبات",
    description: "حاسبات BMI، السعرات، البروتين، والماكروز المتخصصة",
    url: "https://physionutrition.vercel.app/ar/calculators",
    icon: "🧮"
  },
  {
    name: "مكتبة الإصابات والتعافي",
    description: "دليل شامل لإصابات الملاعب وخطط التأهيل المبنية على الأدلة",
    url: "https://physionutrition.vercel.app/ar/injuries",
    icon: "🩹"
  },
  {
    name: "مقالات التغذية العلاجية",
    description: "أحدث المقالات حول التغذية والاستشفاء العضلي",
    url: "https://physionutrition.vercel.app/ar/insights",
    icon: "📰"
  },
  {
    name: "قناة PT Courses",
    description: "أكبر مكتبة كورسات علاج طبيعي (Mulligan, Maitland, Dry Needling)",
    url: "https://t.me/pt_courses",
    icon: "📚"
  },
  {
    name: "Physio-U",
    description: "فيديوهات شرح عملي ممتازة",
    url: "https://t.me/PhysioU",
    icon: "🎓"
  },
  {
    name: "Radiology for PT",
    description: "شرح الأشعة لأخصائي العلاج الطبيعي",
    url: "https://t.me/RadiologyPT",
    icon: "🩻"
  },
  {
    name: "Physiopedia",
    description: "الموسوعة العالمية للعلاج الطبيعي",
    url: "https://www.physio-pedia.com",
    icon: "📖"
  }
];

export const TELEGRAM_CATEGORIES: TelegramCategory[] = [
  { 
    title: 'كورسات العظام (Ortho)', 
    icon: '🦴',
    links: [
      { name: 'Maitland Concept', url: 'https://t.me/pt_courses/search?q=Maitland' },
      { name: 'Mulligan Concept', url: 'https://t.me/pt_courses/search?q=Mulligan' },
      { name: 'McKenzie Method', url: 'https://t.me/pt_courses/search?q=McKenzie' },
      { name: 'Dry Needling', url: 'https://t.me/pt_courses/search?q=Needling' },
    ]
  },
  { 
    title: 'كورسات الأعصاب (Neuro)', 
    icon: '🧠',
    links: [
      { name: 'Bobath Concept', url: 'https://t.me/pt_courses/search?q=Bobath' },
      { name: 'PNF Technique', url: 'https://t.me/pt_courses/search?q=PNF' },
      { name: 'Stroke Rehab', url: 'https://t.me/pt_courses/search?q=Stroke' },
    ]
  },
  { 
    title: 'كتب ومراجع (Books)', 
    icon: '📚',
    links: [
      { name: 'Magee Orthopedic', url: 'https://t.me/pt_courses/search?q=Magee' },
      { name: 'Kendall Muscle Testing', url: 'https://t.me/pt_courses/search?q=Kendall' },
      { name: 'Dutton Ortho', url: 'https://t.me/pt_courses/search?q=Dutton' },
    ]
  }
];

export const SPECIAL_TESTS: SpecialTestCategory[] = [
  {
    category: "Shoulder (الكتف)",
    tests: [
      { 
        name: "Hawkins-Kennedy Test", 
        purpose: "Subacromial Impingement",
        procedure: "ثني الكتف والمرفق لـ 90 درجة، ثم عمل دوران داخلي (Internal Rotation) مفاجئ.",
        positive: "ظهور ألم في منطقة الكتف."
      },
      { 
        name: "Empty Can (Jobe) Test", 
        purpose: "Supraspinatus Tear/Tendonitis",
        procedure: "رفع الذراع لـ 90 درجة في مستوى لوح الكتف مع تدوير الإبهام للأسفل، ثم مقاومة الضغط لأسفل.",
        positive: "ضعف أو ألم شديد."
      },
      { 
        name: "Speed's Test", 
        purpose: "Bicep Tendon Pathology",
        procedure: "فرد المرفق مع تدوير الساعد للأعلى (Supination)، ثم مقاومة ثني الكتف.",
        positive: "ألم في منطقة bicipital groove."
      }
    ]
  },
  {
    category: "Knee (الركبة)",
    tests: [
      { 
        name: "Lachman Test", 
        purpose: "ACL Integrity (الأكثر دقة)",
        procedure: "ثني الركبة 20-30 درجة، تثبيت الفخذ وسحب الساق (Tibia) للأمام.",
        positive: "حركة زائدة للساق للأمام مع عدم وجود 'End feel' صلب."
      },
      { 
        name: "McMurray Test", 
        purpose: "Meniscal Tear",
        procedure: "ثني الركبة بالكامل مع تدوير الساق للداخل أو الخارج ثم فردها تدريجياً.",
        positive: "سماع صوت 'Click' أو شعور بطقطقة مع ألم."
      },
      { 
        name: "Valgus Stress Test", 
        purpose: "MCL Integrity",
        procedure: "تثبيت الفخذ والضغط على الركبة من الخارج للداخل عند 0 و 30 درجة ثني.",
        positive: "فتح مفصل الركبة من الداخل أو ألم شديد."
      }
    ]
  },
  {
    category: "Spine & Hip (الظهر والحوض)",
    tests: [
      { 
        name: "Straight Leg Raise (SLR)", 
        purpose: "Lumbar Disc / Nerve Root",
        procedure: "رفع الرجل وهي مفرودة تماماً بينما المريض مستلقٍ على ظهره.",
        positive: "ألم يمتد أسفل الركبة عند زاوية بين 30-70 درجة."
      },
      { 
        name: "FABER (Patrick's) Test", 
        purpose: "Hip or SI Joint Pathology",
        procedure: "وضع القدم على الركبة المعاكسة (شكل رقم 4) ثم الضغط على الركبة لأسفل.",
        positive: "ألم في الفخذ (Hip) أو في الخلف (SI Joint)."
      }
    ]
  }
];

export const ORTHO_LIBRARY: OrthoLibraryCategory[] = [
  {
    category: "Red Flags (علامات الخطر)",
    items: [
      { name: "Cauda Equina Syndrome", detail: "فقدان التحكم في الإخراج، تنميل منطقة السرج (Saddle Anesthesia)." },
      { name: "Fracture (كسر)", detail: "ألم شديد جداً بعد صدمة، تشوه في شكل العضو، عدم القدرة على التحميل." },
      { name: "Malignancy (سرطان)", detail: "فقدان وزن غير مبرر، ألم ليلي لا يتغير بالوضعيات، تاريخ مرضي للسرطان." }
    ]
  },
  {
    category: "Common Conditions (أشهر الحالات)",
    items: [
      { name: "Shoulder Impingement", detail: "ألم عند رفع الذراع (Painful Arc)، غالباً بسبب ضيق المسافة تحت الأخرم." },
      { name: "ACL Tear", detail: "سماع صوت 'Pop'، تورم سريع، عدم ثبات في الركبة." },
      { name: "Lumbar Disc Herniation", detail: "ألم أسفل الظهر يمتد للرجل (Sciatica)، يزيد مع السعال أو العطس." }
    ]
  }
];

export const ROM_REFERENCE: ROMReference[] = [
  { joint: "Shoulder (الكتف)", flexion: "180°", extension: "60°", abduction: "180°", intRot: "70°", extRot: "90°" },
  { joint: "Hip (الفخذ)", flexion: "120°", extension: "30°", abduction: "45°", intRot: "45°", extRot: "45°" },
  { joint: "Knee (الركبة)", flexion: "135°", extension: "0°", abduction: "-", intRot: "-", extRot: "-" },
  { joint: "Ankle (الكاحل)", flexion: "50° (Plantar)", extension: "20° (Dorsi)", abduction: "-", intRot: "-", extRot: "-" }
];
