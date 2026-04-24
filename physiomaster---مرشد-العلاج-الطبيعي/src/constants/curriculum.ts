/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TaskItem {
  text: string;
  requirement: string;
}

export interface Resource {
  title: string;
  url: string;
}

export interface DayPlan {
  id: string;
  name: string;
  topic: string;
  badge: string;
  tasks: TaskItem[];
  resources: Resource[];
  tip: string;
}

export interface WeekPlan {
  title: string;
  days: DayPlan[];
}

export interface MonthPlan {
  id: number;
  name: string;
  weeks: WeekPlan[];
}

export const MONTHS_PLAN: MonthPlan[] = [
  // Phase 1: Foundations (1-6)
  { 
    id: 0, 
    name: "شهر 1 — الكتف والكوع (Anatomy)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Shoulder Girdle", 
        days: [
          { 
            id: "1_1_1", 
            name: "عظام الكتف", 
            topic: "Anatomy", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Scapula & Clavicle", requirement: "تحديد كل المعالم (Spine, Acromion, Coracoid) والزوايا." },
              { text: "رسم العظام من الذاكرة", requirement: "رسم الـ Scapula من الأمام والخلف مع تسمية الأجزاء." }
            ], 
            resources: [
              { title: "Physiopedia: Scapula", url: "https://www.physio-pedia.com/Scapula" },
              { title: "Kenhub: Shoulder Girdle", url: "https://www.kenhub.com/en/library/anatomy/shoulder-girdle" }
            ],
            tip: "الرسم أفضل وسيلة للحفظ." 
          },
          { 
            id: "1_1_2", 
            name: "عضلات الكتف 1", 
            topic: "Anatomy", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Rotator Cuff muscles", requirement: "حفظ الـ Origin, Insertion, Action, Nerve supply لكل عضلة (SITS)." },
              { text: "تحديد الأصول والاندغامات", requirement: "استخدام تطبيق تشريح 3D لتتبع مسار الأوتار تحت الـ Acromion." }
            ], 
            resources: [
              { title: "Rotator Cuff Anatomy", url: "https://www.physio-pedia.com/Rotator_Cuff" },
              { title: "Video: SITS Muscles", url: "https://www.youtube.com/results?search_query=rotator+cuff+anatomy" }
            ],
            tip: "عضلات الـ SITS هي مفتاح استقرار الكتف." 
          },
          { 
            id: "1_1_3", 
            name: "عضلات الكتف 2", 
            topic: "Anatomy", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Deltoid & Pectoralis", requirement: "فهم الألياف المختلفة (Anterior, Middle, Posterior) وتأثيرها على الحركة." },
              { text: "فهم عمل العضلات الكبيرة", requirement: "شرح كيف تعمل الـ Serratus Anterior في تثبيت اللوح." }
            ], 
            resources: [
              { title: "Shoulder Muscles Guide", url: "https://www.physio-pedia.com/Shoulder_Muscles" }
            ],
            tip: "العضلات السطحية تعطي القوة." 
          },
          { 
            id: "1_1_4", 
            name: "أربطة الكتف", 
            topic: "Anatomy", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة Glenohumeral ligaments", requirement: "فهم دور الـ Superior, Middle, Inferior GH ligaments في الثبات." },
              { text: "فهم الـ Labrum", requirement: "دراسة تشريح الـ Labrum وكيف يزيد من عمق التجويف." }
            ], 
            resources: [
              { title: "Shoulder Ligaments", url: "https://www.physio-pedia.com/Shoulder_Joint" }
            ],
            tip: "الأربطة هي الحماية السلبية للمفصل." 
          },
          { 
            id: "1_1_5", 
            name: "ميكانيكا الكتف", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Scapulohumeral Rhythm", requirement: "شرح حركة الـ 2:1 بين الـ GH joint والـ Scapulothoracic." },
              { text: "دراسة الـ Force Couples", requirement: "فهم التوازن بين الـ Deltoid والـ Rotator cuff." }
            ], 
            resources: [
              { title: "Scapulohumeral Rhythm", url: "https://www.physio-pedia.com/Scapulohumeral_Rhythm" }
            ],
            tip: "الكتف واللوح يتحركان معاً بنسبة 2:1." 
          },
          { 
            id: "1_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تحديد المعالم التشريحية على زميل", requirement: "جس الـ Coracoid process والـ Acromion بدقة." },
              { text: "رسم العضلات على الجلد", requirement: "استخدام قلم لتحديد مسار الـ Supraspinatus tendon." }
            ], 
            resources: [
              { title: "Shoulder Palpation Video", url: "https://www.youtube.com/results?search_query=shoulder+palpation+physiotherapy" }
            ],
            tip: "المس بيدك لتتعلم." 
          },
          { 
            id: "1_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة ملخص الأسبوع", requirement: "كتابة أهم 5 نقاط تعلمتها هذا الأسبوع." },
              { text: "راحة ذهنية", requirement: "النوم الكافي لتثبيت المعلومات." }
            ], 
            resources: [],
            tip: "الراحة جزء من التعلم." 
          }
        ]
      },
      { 
        title: "الأسبوع 2 — Elbow Complex", 
        days: [
          { 
            id: "1_2_1", 
            name: "عظام الكوع", 
            topic: "Anatomy", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Humerus, Radius, Ulna", requirement: "تحديد الـ Olecranon, Coronoid process, Radial head." },
              { text: "فهم الـ Carrying Angle", requirement: "شرح الزاوية الطبيعية للكوع والفرق بين الذكر والأنثى." }
            ], 
            resources: [
              { title: "Elbow Anatomy", url: "https://www.physio-pedia.com/Elbow_Anatomy" }
            ],
            tip: "الكوع مفصل رزي (Hinge) بسيط لكنه مهم." 
          },
          { 
            id: "1_2_2", 
            name: "عضلات الكوع", 
            topic: "Anatomy", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Biceps & Triceps", requirement: "فهم الـ Long head vs Short head وتأثيرهما على الكتف والكوع." },
              { text: "فهم الـ Brachialis", requirement: "لماذا تعتبر العضلة العضدية هي 'Workhorse' لثني الكوع؟" }
            ], 
            resources: [
              { title: "Elbow Muscles Guide", url: "https://www.kenhub.com/en/library/anatomy/muscles-of-the-elbow-joint" }
            ],
            tip: "العضلة العضدية هي المحرك الأساسي للثني." 
          },
          { 
            id: "1_2_3", 
            name: "أربطة الكوع", 
            topic: "Anatomy", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة MCL & LCL للكوع", requirement: "فهم الـ Valgus & Varus stability ودور الأربطة الجانبية." },
              { text: "فهم الـ Annular ligament", requirement: "دراسة كيف يثبت الرباط الحلقي رأس الكعبرة أثناء الدوران." }
            ], 
            resources: [
              { title: "Elbow Ligaments", url: "https://www.physio-pedia.com/Elbow_Joint" }
            ],
            tip: "الرباط الحلقي يمسك رأس الكعبرة." 
          },
          { 
            id: "1_2_4", 
            name: "أعصاب الطرف العلوي", 
            topic: "Anatomy", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تتبع مسار Median, Ulnar, Radial nerves", requirement: "تحديد أماكن الانضغاط الشائعة (Cubital tunnel, Guyon's canal)." },
              { text: "فهم الـ Brachial Plexus", requirement: "رسم مبسط للضفيرة العضدية (Roots, Trunks, Divisions, Cords, Branches)." }
            ], 
            resources: [
              { title: "Brachial Plexus Anatomy", url: "https://www.physio-pedia.com/Brachial_Plexus" }
            ],
            tip: "الأعصاب هي أسلاك الكهرباء للجسم." 
          },
          { 
            id: "1_2_5", 
            name: "ميكانيكا الكوع", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Arthrokinematics للكوع", requirement: "شرح الـ Concave-Convex rule المطبق على مفصل الكوع." },
              { text: "دراسة الـ Supination/Pronation", requirement: "فهم الميكانيكا الحيوية للدوران في المفاصل الكعبرية الزندية." }
            ], 
            resources: [
              { title: "Elbow Biomechanics", url: "https://www.physio-pedia.com/Elbow_Biomechanics" }
            ],
            tip: "الدوران يحدث في مفاصل الكعبرة والزند." 
          },
          { 
            id: "1_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "جس الأعصاب عند الكوع", requirement: "تحديد مكان العصب الزندي في الـ Ulnar groove." },
              { text: "اختبار مدى الحركة السلبي", requirement: "قياس الـ Flexion/Extension باستخدام الـ Goniometer." }
            ], 
            resources: [
              { title: "Goniometry of the Elbow", url: "https://www.youtube.com/results?search_query=elbow+goniometry" }
            ],
            tip: "العصب الزندي يمر خلف النتوء الداخلي." 
          },
          { 
            id: "1_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تشريح الكوع", requirement: "ربط العضلات بالأعصاب التي تغذيها." },
              { text: "تحضير للأسبوع القادم", requirement: "نظرة سريعة على عظام الرسغ." }
            ], 
            resources: [],
            tip: "الاستمرارية أهم من السرعة." 
          }
        ]
      },
      { 
        title: "الأسبوع 3 — Wrist & Hand", 
        days: [
          { 
            id: "1_3_1", 
            name: "عظام الرسغ", 
            topic: "Anatomy", 
            badge: "السبت", 
            tasks: [
              { text: "حفظ الـ Carpal bones (8 عظام)", requirement: "استخدام جملة (She Looks Too Pretty, Try To Catch Her) لحفظ الترتيب." },
              { text: "فهم الـ Scaphoid blood supply", requirement: "لماذا يعتبر كسر الـ Scaphoid خطيراً (Retrograde blood flow)؟" }
            ], 
            resources: [
              { title: "Wrist Bones Anatomy", url: "https://www.physio-pedia.com/Wrist_Anatomy" }
            ],
            tip: "عظمة الـ Scaphoid هي الأكثر عرضة للكسر." 
          },
          { 
            id: "1_3_2", 
            name: "مفاصل اليد", 
            topic: "Anatomy", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة MCP, PIP, DIP joints", requirement: "فهم الفرق بين مفاصل الأصابع ودور الـ Volar plate." },
              { text: "فهم الـ CMC joint of thumb", requirement: "دراسة الـ Saddle joint وميكانيكا حركة الـ Opposition." }
            ], 
            resources: [
              { title: "Hand Joints Guide", url: "https://www.kenhub.com/en/library/anatomy/joints-of-the-hand" }
            ],
            tip: "إبهام الإنسان هو سر تطوره الحركي." 
          },
          { 
            id: "1_3_3", 
            name: "عضلات اليد الخارجية", 
            topic: "Anatomy", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Extensors & Flexors", requirement: "تحديد الـ Common Extensor Origin والـ Common Flexor Origin." },
              { text: "فهم الـ Carpal Tunnel", requirement: "تحديد محتويات نفق الرسغ (9 أوتار وعصب واحد)." }
            ], 
            resources: [
              { title: "Carpal Tunnel Anatomy", url: "https://www.physio-pedia.com/Carpal_Tunnel" }
            ],
            tip: "نفق الرسغ يمر فيه العصب الأوسط." 
          },
          { 
            id: "1_3_4", 
            name: "عضلات اليد الداخلية", 
            topic: "Anatomy", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة Thenar & Hypothenar", requirement: "فهم العضلات المسؤولة عن حركة الإبهام والخنصر." },
              { text: "فهم الـ Lumbricals", requirement: "شرح الوظيفة الفريدة للـ Lumbricals (ثني الـ MCP وفرد الـ IP)." }
            ], 
            resources: [
              { title: "Intrinsic Muscles of the Hand", url: "https://www.physio-pedia.com/Intrinsic_Muscles_of_the_Hand" }
            ],
            tip: "العضلات الداخلية تعطي الدقة في الحركة." 
          },
          { 
            id: "1_3_5", 
            name: "ميكانيكا القبضة", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "أنواع الـ Grips & Pinches", requirement: "الفرق بين الـ Power grip والـ Precision pinch." },
              { text: "دراسة الـ Tenodesis effect", requirement: "شرح كيف يؤدي مد الرسغ إلى ثني الأصابع تلقائياً." }
            ], 
            resources: [
              { title: "Hand Biomechanics", url: "https://www.physio-pedia.com/Hand_Biomechanics" }
            ],
            tip: "تأثير الـ Tenodesis يساعد مرضى الشلل الرباعي." 
          },
          { 
            id: "1_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "جس عظام الرسغ", requirement: "تحديد الـ Pisiform والـ Hook of hamate." },
              { text: "اختبار قوة القبضة", requirement: "استخدام الـ Dynamometer (أو ضغط كرة) لتقييم القوة." }
            ], 
            resources: [
              { title: "Hand Palpation Guide", url: "https://www.youtube.com/results?search_query=hand+palpation+anatomy" }
            ],
            tip: "الـ Anatomical Snuffbox مكان مهم للجس." 
          },
          { 
            id: "1_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الطرف العلوي كاملاً", requirement: "رسم خريطة ذهنية تربط الكتف بالكوع باليد." },
              { text: "تنظيم الملاحظات", requirement: "تجهيز ملخصات سريعة للمراجعة لاحقاً." }
            ], 
            resources: [],
            tip: "المراجعة التراكمية تثبت المعلومة." 
          }
        ]
      },
      { 
        title: "الأسبوع 4 — Upper Limb Integration", 
        days: [
          { 
            id: "1_4_1", 
            name: "التروية الدموية", 
            topic: "Anatomy", 
            badge: "السبت", 
            tasks: [
              { text: "تتبع مسار الـ Axillary & Brachial arteries", requirement: "تحديد أماكن جس النبض في العضد والرسغ (Radial & Ulnar)." },
              { text: "فهم الـ Palmar arches", requirement: "دراسة الـ Superficial & Deep palmar arches وتغذية الأصابع." }
            ], 
            resources: [
              { title: "Blood Supply of Upper Limb", url: "https://www.kenhub.com/en/library/anatomy/arteries-of-the-upper-limb" }
            ],
            tip: "الدم هو الغذاء للأنسجة." 
          },
          { 
            id: "1_4_2", 
            name: "التصريف اللمفاوي", 
            topic: "Anatomy", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Lymph nodes للطرف العلوي", requirement: "تحديد مجموعات العقد اللمفاوية في الإبط (Axillary nodes)." },
              { text: "فهم الـ Edema management", requirement: "لماذا يرتفع الطرف العلوي لتقليل التورم؟" }
            ], 
            resources: [
              { title: "Lymphatic Drainage Guide", url: "https://www.physio-pedia.com/Lymphatic_System" }
            ],
            tip: "الجهاز اللمفاوي هو نظام الصرف الصحي." 
          },
          { 
            id: "1_4_3", 
            name: "الجلد والأعصاب الحسية", 
            topic: "Anatomy", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Dermatomes للطرف العلوي", requirement: "حفظ خريطة الإحساس من C5 إلى T1." },
              { text: "فهم الـ Cutaneous supply", requirement: "الفرق بين الـ Dermatome والـ Peripheral nerve distribution." }
            ], 
            resources: [
              { title: "Dermatomes Map", url: "https://www.physio-pedia.com/Dermatomes" }
            ],
            tip: "الجلد هو أكبر عضو حسي." 
          },
          { 
            id: "1_4_4", 
            name: "تحليل حركي شامل", 
            topic: "Biomechanics", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تحليل حركة الرمي (Throwing)", requirement: "تحديد العضلات العاملة في كل مرحلة (Wind-up, Cocking, Acceleration, Deceleration)." },
              { text: "تحليل حركة الكتابة", requirement: "فهم دور عضلات اليد الداخلية في التحكم الدقيق." }
            ], 
            resources: [
              { title: "Biomechanics of Throwing", url: "https://www.physio-pedia.com/Biomechanics_of_Throwing" }
            ],
            tip: "الحركات المعقدة هي مزيج من مفاصل عدة." 
          },
          { 
            id: "1_4_5", 
            name: "إصابات شائعة (نظرة سريعة)", 
            topic: "Pathology", 
            badge: "الأربعاء", 
            tasks: [
              { text: "التعرف على الـ Frozen Shoulder", requirement: "فهم الـ Capsular pattern للكتف (ER > Abd > IR)." },
              { text: "التعرف على الـ Tennis Elbow", requirement: "لماذا يحدث الألم عند الـ Lateral Epicondyle؟" }
            ], 
            resources: [
              { title: "Common Upper Limb Conditions", url: "https://www.physio-pedia.com/Category:Upper_Limb_Conditions" }
            ],
            tip: "التشريح يفسر سبب الإصابة." 
          },
          { 
            id: "1_4_6", 
            name: "اختبار ذاتي", 
            topic: "Assessment", 
            badge: "الخميس", 
            tasks: [
              { text: "حل أسئلة تشريح الطرف العلوي", requirement: "اختبار نفسك في 20 سؤالاً عن العضلات والأعصاب." },
              { text: "شرح ميكانيكا الكتف لشخص آخر", requirement: "تبسيط مفهوم الـ Scapulohumeral rhythm." }
            ], 
            resources: [
              { title: "Anatomy Quiz", url: "https://www.anatomyquiz.com/" }
            ],
            tip: "أفضل طريقة للتعلم هي التعليم." 
          },
          { 
            id: "1_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "الاستعداد لشهر الطرف السفلي", requirement: "تصفح سريع لمحتويات الشهر القادم." },
              { text: "مكافأة نفسك", requirement: "الاحتفال بإتمام أول 4 أسابيع بنجاح." }
            ], 
            resources: [],
            tip: "احتفل بإنجاز أول شهر." 
          }
        ]
      }
    ] 
  },
  { 
    id: 1, 
    name: "شهر 2 — الركبة والورك (Anatomy)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Hip Joint", 
        days: [
          { 
            id: "2_1_1", 
            name: "عظام الحوض والورك", 
            topic: "Anatomy", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Pelvis & Femur", requirement: "تحديد الـ Ilium, Ischium, Pubis والمعالم الهامة مثل الـ Greater Trochanter." },
              { text: "فهم الـ Angle of Inclination", requirement: "دراسة الـ Coxa Vara والـ Coxa Valga وتأثيرهما على الركبة." }
            ], 
            resources: [
              { title: "Pelvis Anatomy", url: "https://www.physio-pedia.com/Pelvis" },
              { title: "Femur Anatomy", url: "https://www.physio-pedia.com/Femur" }
            ],
            tip: "الورك مفصل كروي عميق جداً." 
          },
          { 
            id: "2_1_2", 
            name: "عضلات الورك 1", 
            topic: "Anatomy", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Gluteal muscles", requirement: "فهم دور الـ Gluteus Maximus كمحرك أساسي والـ Medius كمثبت للحوض." },
              { text: "فهم الـ Iliopsoas", requirement: "دراسة العضلة الحرقفية الخصرية ودورها في ثني الورك وزيادة لوردوز الظهر." }
            ], 
            resources: [
              { title: "Hip Muscles Guide", url: "https://www.kenhub.com/en/library/anatomy/muscles-of-the-hip-joint" }
            ],
            tip: "عضلة الـ Gluteus Medius تمنع سقوط الحوض." 
          },
          { 
            id: "2_1_3", 
            name: "عضلات الورك 2", 
            topic: "Anatomy", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Adductors", requirement: "حفظ العضلات الضامة (Longus, Brevis, Magnus) ودورها في التوازن." },
              { text: "دراسة الـ Deep Rotators", requirement: "فهم الـ Piriformis وعلاقته بالعصب الوركي (Sciatic nerve)." }
            ], 
            resources: [
              { title: "Adductor Muscles", url: "https://www.physio-pedia.com/Adductor_Group" }
            ],
            tip: "العضلات الضامة تساعد في التوازن." 
          },
          { 
            id: "2_1_4", 
            name: "أربطة الورك", 
            topic: "Anatomy", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة Y-ligament of Bigelow", requirement: "لماذا يعتبر أقوى رباط في الجسم؟ وما الحركات التي يمنعها؟" },
              { text: "فهم الـ Acetabular labrum", requirement: "دراسة دور الغضروف الحلقي في زيادة ثبات المفصل." }
            ], 
            resources: [
              { title: "Hip Joint Ligaments", url: "https://www.physio-pedia.com/Hip_Joint" }
            ],
            tip: "أربطة الورك هي الأقوى في الجسم." 
          },
          { 
            id: "2_1_5", 
            name: "ميكانيكا الورك", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Trendelenburg sign", requirement: "شرح الميكانيكا الحيوية لسقوط الحوض عند ضعف العضلات المبعدة." },
              { text: "دراسة الـ Hip-Spine syndrome", requirement: "كيف تؤثر قلة حركة الورك على آلام أسفل الظهر؟" }
            ], 
            resources: [
              { title: "Trendelenburg Gait", url: "https://www.physio-pedia.com/Trendelenburg_Gait" }
            ],
            tip: "مشاكل الظهر غالباً تبدأ من الورك." 
          },
          { 
            id: "2_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "جس الـ ASIS & PSIS", requirement: "تحديد مكان الشوك الحرقفي الأمامي والخلفي لتقييم ميلان الحوض." },
              { text: "اختبار مدى الحركة للورك", requirement: "قياس الـ Flexion والـ Internal/External rotation." }
            ], 
            resources: [
              { title: "Hip Palpation & ROM", url: "https://www.youtube.com/results?search_query=hip+assessment+physiotherapy" }
            ],
            tip: "تحديد مكان الحوض أساسي للتقييم." 
          },
          { 
            id: "2_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تشريح الورك", requirement: "ربط العضلات بالحركات الوظيفية مثل القيام من الكرسي." },
              { text: "راحة", requirement: "تجديد الطاقة للأسبوع القادم." }
            ], 
            resources: [],
            tip: "الورك يحتاج عضلات قوية." 
          }
        ]
      },
      { 
        title: "الأسبوع 2 — Knee Joint", 
        days: [
          { 
            id: "2_2_1", 
            name: "عظام الركبة", 
            topic: "Anatomy", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Tibia & Patella", requirement: "تحديد الـ Tibial Tuberosity والـ Gerdy's tubercle." },
              { text: "فهم الـ Q-angle", requirement: "كيف يقاس الـ Q-angle؟ وما هي القيم الطبيعية؟" }
            ], 
            resources: [
              { title: "Knee Anatomy", url: "https://www.physio-pedia.com/Knee_Anatomy" }
            ],
            tip: "الـ Patella هي أكبر عظمة سمسمية." 
          },
          { 
            id: "2_2_2", 
            name: "عضلات الركبة", 
            topic: "Anatomy", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Quadriceps & Hamstrings", requirement: "فهم دور الـ VMO في ثبات الصابونة والـ Hamstrings في حماية الـ ACL." },
              { text: "فهم الـ Popliteus", requirement: "شرح كيف تقوم العضلة المأبضية بفك قفل الركبة (Unlocking)." }
            ], 
            resources: [
              { title: "Knee Muscles Guide", url: "https://www.kenhub.com/en/library/anatomy/muscles-of-the-knee-joint" }
            ],
            tip: "عضلة الـ Popliteus هي مفتاح فك الركبة." 
          },
          { 
            id: "2_2_3", 
            name: "أربطة الركبة", 
            topic: "Anatomy", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة ACL, PCL, MCL, LCL", requirement: "فهم الحركات التي يمنعها كل رباط (Anterior/Posterior translation, Valgus/Varus)." },
              { text: "فهم الـ Menisci", requirement: "الفرق بين الغضروف الهلالي الداخلي (C-shaped) والخارجي (O-shaped)." }
            ], 
            resources: [
              { title: "Knee Ligaments", url: "https://www.physio-pedia.com/Knee_Joint" }
            ],
            tip: "الغضاريف الهلالية تمتص الصدمات." 
          },
          { 
            id: "2_2_4", 
            name: "أعصاب الطرف السفلي", 
            topic: "Anatomy", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تتبع مسار Sciatic, Femoral, Tibial nerves", requirement: "تحديد مسار العصب الوركي وانقسامه خلف الركبة." },
              { text: "فهم الـ Common Peroneal nerve", requirement: "لماذا يعتبر هذا العصب حساساً عند رأس الشظية؟" }
            ], 
            resources: [
              { title: "Nerves of Lower Limb", url: "https://www.kenhub.com/en/library/anatomy/nerves-of-the-lower-limb" }
            ],
            tip: "العصب الشظوي معرض للإصابة عند رأس الشظية." 
          },
          { 
            id: "2_2_5", 
            name: "ميكانيكا الركبة", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Screw-home mechanism", requirement: "شرح الدوران التلقائي للركبة في آخر 20 درجة من الفرد." },
              { text: "دراسة الـ Patellofemoral tracking", requirement: "كيف تتحرك الصابونة داخل الـ Trochlear groove؟" }
            ], 
            resources: [
              { title: "Knee Biomechanics", url: "https://www.physio-pedia.com/Knee_Biomechanics" }
            ],
            tip: "الركبة تدور قليلاً عند الفرد الكامل." 
          },
          { 
            id: "2_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "جس الأربطة الجانبية", requirement: "تحديد مكان الـ MCL والـ LCL بالجس اليدوي." },
              { text: "اختبار الـ Patellar mobility", requirement: "تحريك الصابونة في الاتجاهات الأربعة (Medial, Lateral, Superior, Inferior)." }
            ], 
            resources: [
              { title: "Knee Palpation Video", url: "https://www.youtube.com/results?search_query=knee+palpation+physiotherapy" }
            ],
            tip: "حركة الصابونة مهمة جداً لثني الركبة." 
          },
          { 
            id: "2_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الركبة والورك", requirement: "فهم العلاقة بين ضعف عضلات الورك وآلام الركبة." },
              { text: "تحضير للكاحل", requirement: "نظرة سريعة على عظام القدم." }
            ], 
            resources: [],
            tip: "الركبة تقع بين الورك والكاحل." 
          }
        ]
      },
      { 
        title: "الأسبوع 3 — Ankle & Foot", 
        days: [
          { 
            id: "2_3_1", 
            name: "عظام الكاحل", 
            topic: "Anatomy", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Talus & Calcaneus", requirement: "فهم كيف ينقل الـ Talus وزن الجسم إلى القدم." },
              { text: "فهم الـ Mortise joint", requirement: "دراسة العلاقة بين الـ Tibia والـ Fibula والـ Talus." }
            ], 
            resources: [
              { title: "Ankle Anatomy", url: "https://www.physio-pedia.com/Ankle_Anatomy" }
            ],
            tip: "مفصل الكاحل هو الأكثر عرضة للالتواء." 
          },
          { 
            id: "2_3_2", 
            name: "مفاصل القدم", 
            topic: "Anatomy", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Subtalar joint", requirement: "فهم حركات الـ Inversion والـ Eversion." },
              { text: "فهم الـ Midtarsal joints", requirement: "دراسة مفاصل Chopart و Lisfranc." }
            ], 
            resources: [
              { title: "Foot Joints Guide", url: "https://www.kenhub.com/en/library/anatomy/joints-of-the-foot" }
            ],
            tip: "الدوران الداخلي والخارجي يحدث في الـ Subtalar." 
          },
          { 
            id: "2_3_3", 
            name: "عضلات الساق", 
            topic: "Anatomy", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Gastrocnemius & Soleus", requirement: "الفرق بين العضلة التوأمية والنعالية في الثني الأخمصي." },
              { text: "فهم الـ Tibialis Anterior", requirement: "دور العضلة الظنبوبية الأمامية في رفع القدم (Dorsiflexion)." }
            ], 
            resources: [
              { title: "Lower Leg Muscles", url: "https://www.physio-pedia.com/Muscles_of_the_Lower_Leg" }
            ],
            tip: "عضلة الـ Soleus هي القلب الثاني للجسم." 
          },
          { 
            id: "2_3_4", 
            name: "أربطة الكاحل", 
            topic: "Anatomy", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة ATFL & Deltoid ligament", requirement: "لماذا يصاب الـ ATFL أكثر من الـ Deltoid؟" },
              { text: "فهم الـ Spring ligament", requirement: "دراسة دور الرباط النابضي في دعم قوس القدم." }
            ], 
            resources: [
              { title: "Ankle Ligaments", url: "https://www.physio-pedia.com/Ankle_Joint" }
            ],
            tip: "الـ ATFL هو الرباط الأكثر إصابة في الجسم." 
          },
          { 
            id: "2_3_5", 
            name: "ميكانيكا القدم", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Windlass mechanism", requirement: "شرح كيف يؤدي رفع الإبهام إلى شد اللفافة الأخمصية." },
              { text: "دراسة الـ Arches of the foot", requirement: "فهم الـ Medial Longitudinal Arch ودوره في امتصاص الصدمات." }
            ], 
            resources: [
              { title: "Foot Biomechanics", url: "https://www.physio-pedia.com/Foot_Biomechanics" }
            ],
            tip: "أقواس القدم تمتص الوزن وتدفعه." 
          },
          { 
            id: "2_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "جس الـ Malleoli", requirement: "تحديد مكان الكعب الداخلي والخارجي وجس الأربطة حولهما." },
              { text: "اختبار الـ Anterior Drawer للكاحل", requirement: "تقييم سلامة الـ ATFL يدوياً." }
            ], 
            resources: [
              { title: "Ankle Assessment Video", url: "https://www.youtube.com/results?search_query=ankle+assessment+physiotherapy" }
            ],
            tip: "الجس الدقيق يحدد مكان التمزق." 
          },
          { 
            id: "2_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الطرف السفلي", requirement: "ربط حركة الورك والركبة بحركة القدم." },
              { text: "راحة", requirement: "استراحة محارب." }
            ], 
            resources: [],
            tip: "القدم هي أساس الحركة." 
          }
        ]
      },
      { 
        title: "الأسبوع 4 — Lower Limb Integration", 
        days: [
          { 
            id: "2_4_1", 
            name: "التروية والأعصاب", 
            topic: "Anatomy", 
            badge: "السبت", 
            tasks: [
              { text: "تتبع الـ Femoral artery", requirement: "تحديد مسار الشريان الفخذي وأماكن جس النبض في الفخذ." },
              { text: "دراسة الـ Lumbosacral plexus", requirement: "فهم الجذور العصبية المغذية للطرف السفلي (L1-S4)." }
            ], 
            resources: [
              { title: "Arteries of Lower Limb", url: "https://www.kenhub.com/en/library/anatomy/arteries-of-the-lower-limb" }
            ],
            tip: "الأعصاب الكبيرة تمر في أماكن محمية." 
          },
          { 
            id: "2_4_2", 
            name: "تحليل المشي 1", 
            topic: "Biomechanics", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Gait Cycle", requirement: "دراسة الـ Initial Contact, Loading Response, Mid-stance, Terminal Stance." },
              { text: "دراسة الـ Stance phase", requirement: "ما هي العضلات التي تعمل للتحكم في امتصاص الصدمات؟" }
            ], 
            resources: [
              { title: "Gait Cycle Guide", url: "https://www.physio-pedia.com/Gait" }
            ],
            tip: "المشي هو سلسلة من السقوط المستعاد." 
          },
          { 
            id: "2_4_3", 
            name: "تحليل المشي 2", 
            topic: "Biomechanics", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Swing phase", requirement: "فهم الـ Initial, Mid, and Terminal swing." },
              { text: "فهم الـ Determinants of gait", requirement: "كيف يقلل الجسم من استهلاك الطاقة أثناء المشي؟" }
            ], 
            resources: [
              { title: "Normal Gait Analysis", url: "https://www.physio-pedia.com/Gait_Analysis" }
            ],
            tip: "الحوض يتحرك في 3 اتجاهات أثناء المشي." 
          },
          { 
            id: "2_4_4", 
            name: "الجلد والديرماتوم", 
            topic: "Anatomy", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "حفظ Dermatomes للطرف السفلي", requirement: "تحديد مناطق الإحساس من L1 إلى S2." },
              { text: "فهم الـ Myotomes", requirement: "حفظ الحركات المرتبطة بكل جذر عصبي (L2: Hip flexion, L3: Knee extension...)." }
            ], 
            resources: [
              { title: "Lower Limb Dermatomes", url: "https://www.physio-pedia.com/Dermatomes" }
            ],
            tip: "اختبار القوة يحدد مستوى إصابة العصب." 
          },
          { 
            id: "2_4_5", 
            name: "إصابات شائعة", 
            topic: "Pathology", 
            badge: "الأربعاء", 
            tasks: [
              { text: "التعرف على الـ ACL tear", requirement: "فهم آلية الإصابة (Non-contact pivot) والأعراض الأولية." },
              { text: "التعرف على الـ Plantar Fasciitis", requirement: "لماذا يكون الألم أشد ما يمكن في أول خطوات الصباح؟" }
            ], 
            resources: [
              { title: "ACL Injury Overview", url: "https://www.physio-pedia.com/Anterior_Cruciate_Ligament_(ACL)_Injury" }
            ],
            tip: "الإصابات الرياضية تكثر في الطرف السفلي." 
          },
          { 
            id: "2_4_6", 
            name: "اختبار ذاتي", 
            topic: "Assessment", 
            badge: "الخميس", 
            tasks: [
              { text: "حل أسئلة الطرف السفلي", requirement: "اختبار نفسك في 20 سؤالاً عن ميكانيكا المشي وتشريح الركبة." },
              { text: "شرح ميكانيكا الركبة", requirement: "تبسيط مفهوم الـ Screw-home mechanism لزميل." }
            ], 
            resources: [
              { title: "Lower Limb Quiz", url: "https://www.anatomyquiz.com/" }
            ],
            tip: "الربط بين التشريح والميكانيكا هو السر." 
          },
          { 
            id: "2_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الشهر الثاني", requirement: "تلخيص أهم الفروقات بين ميكانيكا الطرف العلوي والسفلي." },
              { text: "مكافأة", requirement: "الاحتفال بنهاية شهر التشريح الثاني." }
            ], 
            resources: [],
            tip: "أنهيت أساسيات الأطراف!" 
          }
        ]
      }
    ] 
  },
  { 
    id: 2, 
    name: "شهر 3 — العمود الفقري (Anatomy)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Cervical Spine", 
        days: [
          { 
            id: "3_1_1", 
            name: "الفقرات العنقية", 
            topic: "Anatomy", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة C1 (Atlas) & C2 (Axis)", requirement: "تحديد الـ Dens (Odontoid process) والمفاصل الأطلسية المحورية." },
              { text: "فهم الـ Uncinate processes", requirement: "دراسة مفاصل Luschka ودورها في ثبات الرقبة." }
            ], 
            resources: [
              { title: "Cervical Spine Anatomy", url: "https://www.physio-pedia.com/Cervical_Anatomy" }
            ],
            tip: "الفقرات العنقية هي الأكثر حركة." 
          },
          { 
            id: "3_1_2", 
            name: "عضلات الرقبة", 
            topic: "Anatomy", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة SCM & Trapezius", requirement: "فهم دور العضلات السطحية في حركة الرأس والرقبة." },
              { text: "فهم الـ Deep Neck Flexors", requirement: "لماذا تعتبر الـ Longus Colli & Capitis هامة جداً لثبات الفقرات؟" }
            ], 
            resources: [
              { title: "Cervical Muscles Guide", url: "https://www.kenhub.com/en/library/anatomy/muscles-of-the-cervical-spine" }
            ],
            tip: "العضلات العميقة هي المسؤولة عن الثبات." 
          },
          { 
            id: "3_1_3", 
            name: "أربطة الرقبة", 
            topic: "Anatomy", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Alar & Transverse ligaments", requirement: "فهم دور هذه الأربطة في حماية النخاع الشوكي عند الحركة." },
              { text: "فهم الـ Ligamentum Nuchae", requirement: "دراسة الرباط القفوي ودوره في دعم الرأس." }
            ], 
            resources: [
              { title: "Cervical Ligaments", url: "https://www.physio-pedia.com/Cervical_Spine_Ligaments" }
            ],
            tip: "أربطة الـ Alar تحمي النخاع الشوكي." 
          },
          { 
            id: "3_1_4", 
            name: "الشرايين والأعصاب", 
            topic: "Anatomy", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة الـ Vertebral artery", requirement: "تتبع مسار الشريان الفقري داخل الـ Foramen Transversarium." },
              { text: "فهم الـ Cervical plexus", requirement: "دراسة الأعصاب الخارجة من الرقبة وتغذيتها للجلد والعضلات." }
            ], 
            resources: [
              { title: "Vertebral Artery Anatomy", url: "https://www.physio-pedia.com/Vertebral_Artery" }
            ],
            tip: "الشريان الفقري يمر داخل الفقرات." 
          },
          { 
            id: "3_1_5", 
            name: "ميكانيكا الرقبة", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Protraction & Retraction", requirement: "شرح الحركات المركبة للفقرات العنقية العليا والسفلى." },
              { text: "دراسة الـ Upper Cervical kinematics", requirement: "فهم كيف يحدث الدوران والميلان الجانبي في C0-C1-C2." }
            ], 
            resources: [
              { title: "Cervical Biomechanics", url: "https://www.physio-pedia.com/Cervical_Biomechanics" }
            ],
            tip: "معظم الدوران يحدث بين C1 و C2." 
          },
          { 
            id: "3_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "جس الفقرات العنقية", requirement: "تحديد الـ C2 spinous process والـ C7 (Vertebra Prominens)." },
              { text: "اختبار مدى الحركة للرقبة", requirement: "قياس الـ Rotation والـ Lateral flexion بدقة." }
            ], 
            resources: [
              { title: "Cervical Assessment Video", url: "https://www.youtube.com/results?search_query=cervical+spine+assessment+physiotherapy" }
            ],
            tip: "كن حذراً جداً عند التعامل مع الرقبة." 
          },
          { 
            id: "3_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تشريح الرقبة", requirement: "ربط الأعصاب العنقية بمشاكل الطرف العلوي (Radiculopathy)." },
              { text: "راحة", requirement: "استرخاء عضلات الرقبة." }
            ], 
            resources: [],
            tip: "الرقبة تحمل الرأس الثقيل." 
          }
        ]
      },
      { 
        title: "الأسبوع 2 — Thoracic Spine & Ribs", 
        days: [
          { 
            id: "3_2_1", 
            name: "الفقرات الصدرية", 
            topic: "Anatomy", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة T1-T12", requirement: "تحديد الـ Costal facets والـ Long spinous processes." },
              { text: "فهم الـ Costal facets", requirement: "دراسة كيفية تمفصل الضلوع مع الفقرات الصدرية." }
            ], 
            resources: [
              { title: "Thoracic Spine Anatomy", url: "https://www.physio-pedia.com/Thoracic_Anatomy" }
            ],
            tip: "المنطقة الصدرية هي الأكثر ثباتاً بسبب الضلوع." 
          },
          { 
            id: "3_2_2", 
            name: "القفص الصدري", 
            topic: "Anatomy", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الضلوع والقص", requirement: "الفرق بين الضلوع الحقيقية (True), الكاذبة (False), والعائمة (Floating)." },
              { text: "فهم الـ Breathing mechanics", requirement: "دراسة دور القفص الصدري في تغيير حجم التجويف الصدري." }
            ], 
            resources: [
              { title: "Rib Cage Anatomy", url: "https://www.kenhub.com/en/library/anatomy/rib-cage" }
            ],
            tip: "التنفس يعتمد على حركة الضلوع." 
          },
          { 
            id: "3_2_3", 
            name: "عضلات الظهر والصدر", 
            topic: "Anatomy", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Intercostals", requirement: "فهم دور العضلات الوربية الداخلية والخارجية في الشهيق والزفير." },
              { text: "فهم الـ Diaphragm", requirement: "دراسة تشريح الحجاب الحاجز ومسار العصب الحجابي (Phrenic nerve)." }
            ], 
            resources: [
              { title: "Respiratory Muscles", url: "https://www.physio-pedia.com/Muscles_of_Respiration" }
            ],
            tip: "الحجاب الحاجز هو المحرك الرئيسي للتنفس." 
          },
          { 
            id: "3_2_4", 
            name: "الأعصاب الصدرية", 
            topic: "Anatomy", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة الـ Intercostal nerves", requirement: "تتبع مسار الأعصاب الوربية وتغذيتها للجلد." },
              { text: "فهم الـ Sympathetic chain", requirement: "دراسة السلسلة الودية وموقعها بجانب الفقرات الصدرية." }
            ], 
            resources: [
              { title: "Thoracic Nerves", url: "https://www.kenhub.com/en/library/anatomy/thoracic-nerves" }
            ],
            tip: "الأعصاب الصدرية تتبع مسار الضلوع." 
          },
          { 
            id: "3_2_5", 
            name: "ميكانيكا الصدر", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Pump-handle & Bucket-handle", requirement: "شرح أنواع حركة الضلوع أثناء التنفس العميق." },
              { text: "دراسة الـ Thoracic rotation", requirement: "لماذا تعتبر الحركة الدورانية في الصدر هامة جداً للمشي والجري؟" }
            ], 
            resources: [
              { title: "Thoracic Biomechanics", url: "https://www.physio-pedia.com/Thoracic_Biomechanics" }
            ],
            tip: "الدوران في الصدر مهم لحركة الكتف." 
          },
          { 
            id: "3_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "جس الضلوع والفقرات", requirement: "تحديد مكان الضلع الثاني (Angle of Louis) والفقرة الصدرية السابعة." },
              { text: "قياس تمدد الصدر", requirement: "استخدام المازورة لقياس الفرق بين الشهيق والزفير العميق." }
            ], 
            resources: [
              { title: "Thoracic Assessment Video", url: "https://www.youtube.com/results?search_query=thoracic+spine+assessment+physiotherapy" }
            ],
            tip: "التمدد الصدري مؤشر على صحة الرئة." 
          },
          { 
            id: "3_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تشريح الصدر", requirement: "فهم العلاقة بين وضعية الصدر (Kyphosis) وحركة الكتف." },
              { text: "راحة", requirement: "تنفس بعمق واسترخِ." }
            ], 
            resources: [],
            tip: "الصدر يحمي القلب والرئتين." 
          }
        ]
      },
      { 
        title: "الأسبوع 3 — Lumbar Spine", 
        days: [
          { 
            id: "3_3_1", 
            name: "الفقرات القطنية", 
            topic: "Anatomy", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة L1-L5", requirement: "تحديد الـ Large vertebral bodies والـ Short, thick spinous processes." },
              { text: "فهم الـ Mammillary processes", requirement: "دراسة المعالم التشريحية الدقيقة للفقرات القطنية." }
            ], 
            resources: [
              { title: "Lumbar Spine Anatomy", url: "https://www.physio-pedia.com/Lumbar_Anatomy" }
            ],
            tip: "الفقرات القطنية هي الأكبر لتحمل الوزن." 
          },
          { 
            id: "3_3_2", 
            name: "عضلات الظهر السفلي", 
            topic: "Anatomy", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Erector Spinae", requirement: "تحديد العضلات الثلاث (Iliocostalis, Longissimus, Spinalis)." },
              { text: "فهم الـ Multifidus", requirement: "لماذا تعتبر هذه العضلة هي المفتاح لثبات الفقرات القطنية؟" }
            ], 
            resources: [
              { title: "Lumbar Muscles Guide", url: "https://www.kenhub.com/en/library/anatomy/muscles-of-the-lumbar-spine" }
            ],
            tip: "الـ Multifidus هي أهم عضلة لثبات الظهر." 
          },
          { 
            id: "3_3_3", 
            name: "عضلات البطن والـ Core", 
            topic: "Anatomy", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Transversus Abdominis", requirement: "فهم دور العضلة العرضية البطنية كحزام طبيعي (Natural corset)." },
              { text: "فهم الـ Pelvic Floor", requirement: "دراسة عضلات قاع الحوض وعلاقتها بضغط البطن وثبات الظهر." }
            ], 
            resources: [
              { title: "Core Stability Muscles", url: "https://www.physio-pedia.com/Core_Stability" }
            ],
            tip: "الـ Core هو الحزام الطبيعي للظهر." 
          },
          { 
            id: "3_3_4", 
            name: "الأعصاب القطنية", 
            topic: "Anatomy", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة الـ Lumbar plexus", requirement: "تتبع مسار الأعصاب الرئيسية مثل الـ Femoral & Obturator nerves." },
              { text: "تتبع الـ Cauda Equina", requirement: "فهم تشريح 'ذيل الفرس' وأهميته السريرية." }
            ], 
            resources: [
              { title: "Lumbar Plexus Anatomy", url: "https://www.kenhub.com/en/library/anatomy/lumbar-plexus" }
            ],
            tip: "جذور الأعصاب تخرج من تحت الفقرات." 
          },
          { 
            id: "3_3_5", 
            name: "ميكانيكا الظهر", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Disc pressure", requirement: "دراسة كيف يتغير الضغط على الديسك في وضعيات الجلوس والوقوف والرفع." },
              { text: "دراسة الـ Flexion/Extension kinematics", requirement: "فهم حركة الفقرات القطنية أثناء الانحناء للأمام والخلف." }
            ], 
            resources: [
              { title: "Lumbar Biomechanics", url: "https://www.physio-pedia.com/Lumbar_Biomechanics" }
            ],
            tip: "الضغط على الديسك يقل عند الاستلقاء." 
          },
          { 
            id: "3_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "جس الفقرات القطنية", requirement: "تحديد مستوى L4-L5 باستخدام الـ Iliac crests." },
              { text: "اختبار الـ Core stability", requirement: "تطبيق اختبار الـ Leg loading لتقييم ثبات الظهر." }
            ], 
            resources: [
              { title: "Lumbar Assessment Video", url: "https://www.youtube.com/results?search_query=lumbar+spine+assessment+physiotherapy" }
            ],
            tip: "الجس يحدد مستوى الفقرة المصابة." 
          },
          { 
            id: "3_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تشريح الظهر", requirement: "فهم العلاقة بين عضلات البطن وآلام الظهر." },
              { text: "راحة", requirement: "استلقِ على ظهرك وأرح عضلاتك." }
            ], 
            resources: [],
            tip: "الظهر هو عمود الخيمة." 
          }
        ]
      },
      { 
        title: "الأسبوع 4 — Sacrum & Pelvis", 
        days: [
          { 
            id: "3_4_1", 
            name: "العجز والعصعص", 
            topic: "Anatomy", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Sacrum & Coccyx", requirement: "تحديد الـ Sacral promontory والـ Foramina." },
              { text: "فهم الـ Sacral foramina", requirement: "دراسة الأعصاب الخارجة من الثقوب العجزية." }
            ], 
            resources: [
              { title: "Sacrum Anatomy", url: "https://www.physio-pedia.com/Sacrum" }
            ],
            tip: "العجز هو قاعدة العمود الفقري." 
          },
          { 
            id: "3_4_2", 
            name: "مفصل الـ SIJ", 
            topic: "Anatomy", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Sacroiliac joint", requirement: "فهم طبيعة المفصل (Part synovial, part syndesmosis)." },
              { text: "فهم الـ Form & Force closure", requirement: "شرح كيف يثبت المفصل العجزي الحرقفي نفسه ميكانيكياً." }
            ], 
            resources: [
              { title: "Sacroiliac Joint Anatomy", url: "https://www.physio-pedia.com/Sacroiliac_Joint" }
            ],
            tip: "مفصل الـ SIJ ينقل الوزن من الظهر للرجل." 
          },
          { 
            id: "3_4_3", 
            name: "أربطة الحوض", 
            topic: "Anatomy", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Sacrotuberous & Sacrospinous", requirement: "فهم دور هذه الأربطة في منع دوران العجز للأمام." },
              { text: "فهم الـ Iliolumbar ligament", requirement: "دراسة الرباط الحرقفي القطني ودوره في ثبات الفقرة L5." }
            ], 
            resources: [
              { title: "Pelvic Ligaments", url: "https://www.kenhub.com/en/library/anatomy/ligaments-of-the-pelvis" }
            ],
            tip: "الأربطة هنا قوية جداً لمنع الانزلاق." 
          },
          { 
            id: "3_4_4", 
            name: "ميكانيكا الحوض", 
            topic: "Biomechanics", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Nutation & Counternutation", requirement: "شرح حركات العجز بالنسبة للحوض." },
              { text: "دراسة الـ Pelvic tilts", requirement: "الفرق بين الـ Anterior, Posterior, and Lateral pelvic tilts." }
            ], 
            resources: [
              { title: "Pelvic Biomechanics", url: "https://www.physio-pedia.com/Pelvic_Biomechanics" }
            ],
            tip: "الحوض يتحرك مع الظهر ككتلة واحدة." 
          },
          { 
            id: "3_4_5", 
            name: "تكامل العمود الفقري", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة الـ Spinal curves", requirement: "فهم الـ Cervical/Lumbar Lordosis والـ Thoracic/Sacral Kyphosis." },
              { text: "فهم الـ Postural alignment", requirement: "دراسة الـ Plumb line وكيف يمر عبر مراكز ثقل الجسم." }
            ], 
            resources: [
              { title: "Spinal Alignment Guide", url: "https://www.physio-pedia.com/Posture" }
            ],
            tip: "الانحناءات الطبيعية تمتص الصدمات." 
          },
          { 
            id: "3_4_6", 
            name: "اختبار شامل", 
            topic: "Assessment", 
            badge: "الخميس", 
            tasks: [
              { text: "حل أسئلة العمود الفقري", requirement: "اختبار نهائي لجميع أجزاء العمود الفقري (عنقي، صدري، قطني)." },
              { text: "رسم الفقرات", requirement: "رسم فقرة نموذجية مع تسمية جميع أجزائها." }
            ], 
            resources: [
              { title: "Spine Anatomy Quiz", url: "https://www.anatomyquiz.com/" }
            ],
            tip: "التشريح هو خريطة العلاج." 
          },
          { 
            id: "3_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الشهر الثالث", requirement: "تلخيص أهم النقاط في ميكانيكا العمود الفقري." },
              { text: "مكافأة", requirement: "الاحتفال بإنهاء مرحلة التشريح الأساسية!" }
            ], 
            resources: [],
            tip: "أنهيت تشريح الجسم كاملاً!" 
          }
        ]
      }
    ] 
  },
  { 
    id: 3, 
    name: "شهر 4 — الميكانيكا الحيوية (Biomechanics)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Intro to Biomechanics", 
        days: [
          { 
            id: "4_1_1", 
            name: "أساسيات الميكانيكا", 
            topic: "Biomechanics", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Levers (1, 2, 3)", requirement: "تحديد أمثلة لكل نوع من الروافع في جسم الإنسان." },
              { text: "دراسة الـ Torque & Moment arm", requirement: "شرح كيف يؤثر طول ذراع العزم على القوة المطلوبة من العضلة." }
            ], 
            resources: [
              { title: "Biomechanics Basics", url: "https://www.physio-pedia.com/Biomechanics" }
            ],
            tip: "الميكانيكا هي لغة الحركة." 
          },
          { 
            id: "4_1_2", 
            name: "القوى والضغوط", 
            topic: "Biomechanics", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Stress-Strain curve", requirement: "دراسة مراحل الـ Elastic, Plastic, and Failure للأنسجة." },
              { text: "دراسة الـ Creep & Hysteresis", requirement: "فهم كيف تتغير الأنسجة الحيوية مع الوقت تحت ضغط ثابت." }
            ], 
            resources: [
              { title: "Tissue Biomechanics", url: "https://www.physio-pedia.com/Soft_Tissue_Biomechanics" }
            ],
            tip: "الأنسجة تتغير تحت الضغط المستمر." 
          },
          { 
            id: "4_1_3", 
            name: "ميكانيكا العضلات", 
            topic: "Biomechanics", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Length-Tension relationship", requirement: "شرح لماذا تكون العضلة ضعيفة جداً عندما تكون قصيرة جداً أو طويلة جداً." },
              { text: "دراسة الـ Force-Velocity curve", requirement: "فهم العلاقة العكسية بين سرعة الانقباض المركزية والقوة الناتجة." }
            ], 
            resources: [
              { title: "Muscle Biomechanics", url: "https://www.physio-pedia.com/Muscle_Biomechanics" }
            ],
            tip: "العضلة تكون أقوى في منتصف طولها." 
          },
          { 
            id: "4_1_4", 
            name: "ميكانيكا المفاصل", 
            topic: "Biomechanics", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Osteokinematics", requirement: "دراسة حركة العظام في الفراغ (Flexion, Extension...)." },
              { text: "دراسة الـ Arthrokinematics (Roll, Slide, Spin)", requirement: "تطبيق قاعدة الـ Concave-Convex على مفاصل الجسم الكبيرة." }
            ], 
            resources: [
              { title: "Joint Kinematics", url: "https://www.physio-pedia.com/Arthrokinematics" }
            ],
            tip: "حركة السطح تختلف عن حركة العظمة." 
          },
          { 
            id: "4_1_5", 
            name: "تطبيق على الطرف العلوي", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تحليل ميكانيكا الكتف عند الرفع", requirement: "شرح دور الـ Scapular rotators في الحفاظ على طول العضلة الدالية." },
              { text: "فهم الـ Scapular upward rotation", requirement: "دراسة الـ Force couple بين الـ Trapezius والـ Serratus Anterior." }
            ], 
            resources: [
              { title: "Shoulder Biomechanics", url: "https://www.physio-pedia.com/Shoulder_Biomechanics" }
            ],
            tip: "الكتف يحتاج توازن دقيق بين القوى." 
          },
          { 
            id: "4_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تحديد أنواع الروافع في الجسم", requirement: "إيجاد مثال لرافعة من النوع الأول والثاني والثالث في حركات يومية." },
              { text: "حساب الـ Torque لتمارين بسيطة", requirement: "فهم كيف يتغير الجهد عند تغيير مكان الوزن في تمرين الـ Biceps curl." }
            ], 
            resources: [
              { title: "Biomechanics in Practice", url: "https://www.youtube.com/results?search_query=biomechanics+physiotherapy+examples" }
            ],
            tip: "غير مكان المقاومة ليتغير الجهد." 
          },
          { 
            id: "4_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أساسيات الميكانيكا", requirement: "تلخيص القوانين الثلاثة لنيوتن وتطبيقاتها في العلاج الطبيعي." },
              { text: "راحة", requirement: "استراحة ذهنية." }
            ], 
            resources: [],
            tip: "الميكانيكا تفسر 'لماذا' نتحرك هكذا." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Gait Analysis (تحليل المشي)", 
        days: [
          { 
            id: "4_2_1", 
            name: "دورة المشي", 
            topic: "Biomechanics", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Stance & Swing phases", requirement: "تحديد النسب المئوية لكل مرحلة في دورة المشي الطبيعية." },
              { text: "دراسة الـ Double support", requirement: "فهم متى يحدث الدعم المزدوج ولماذا يختفي عند الجري." }
            ], 
            resources: [
              { title: "Gait Cycle Basics", url: "https://www.physio-pedia.com/Gait" }
            ],
            tip: "المشي هو سلسلة من السقوط المستعاد." 
          },
          { 
            id: "4_2_2", 
            name: "مراحل الـ Stance", 
            topic: "Biomechanics", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Initial contact to Mid-stance", requirement: "شرح دور الـ Dorsiflexors والـ Quadriceps في امتصاص الصدمات." },
              { text: "فهم الـ Terminal stance", requirement: "دراسة الـ Heel off ودور الـ Plantarflexors في دفع الجسم للأمام." }
            ], 
            resources: [
              { title: "Stance Phase Analysis", url: "https://www.physio-pedia.com/Gait_Analysis" }
            ],
            tip: "امتصاص الصدمات يبدأ من الكعب." 
          },
          { 
            id: "4_2_3", 
            name: "مراحل الـ Swing", 
            topic: "Biomechanics", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Initial to Terminal swing", requirement: "فهم كيف يتم تقصير الرجل (Clearance) لتجنب الاصطدام بالأرض." },
              { text: "فهم دور الـ Hamstrings", requirement: "دراسة الانقباض اللامركزي للهامسترينج لتقليل سرعة الرجل قبل لمس الأرض." }
            ], 
            resources: [
              { title: "Swing Phase Details", url: "https://www.physio-pedia.com/Gait_Analysis" }
            ],
            tip: "الـ Swing يحتاج مرونة كافية في الركبة." 
          },
          { 
            id: "4_2_4", 
            name: "حركة الحوض والظهر", 
            topic: "Biomechanics", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Pelvic rotation", requirement: "دراسة كيف يقلل دوران الحوض من استهلاك الطاقة أثناء المشي." },
              { text: "دراسة الـ Center of Mass movement", requirement: "تتبع حركة مركز ثقل الجسم (Vertical & Lateral displacement)." }
            ], 
            resources: [
              { title: "Pelvic Movement in Gait", url: "https://www.physio-pedia.com/Gait_Analysis" }
            ],
            tip: "الحوض يتحرك في 3 مستويات أثناء المشي." 
          },
          { 
            id: "4_2_5", 
            name: "أنماط المشي المرضية", 
            topic: "Pathology", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة Trendelenburg gait", requirement: "شرح لماذا يميل الحوض عند ضعف الـ Gluteus Medius." },
              { text: "فهم الـ Antalgic gait", requirement: "دراسة كيف يغير الألم من وقت الـ Stance phase." }
            ], 
            resources: [
              { title: "Pathological Gait Patterns", url: "https://www.physio-pedia.com/Gait_Analysis" }
            ],
            tip: "المشية المرضية هي محاولة للجسم لتجنب الألم." 
          },
          { 
            id: "4_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تحليل مشية زميل", requirement: "استخدام الملاحظة البصرية لتحديد مراحل المشي وتحديد أي انحرافات." },
              { text: "تصوير فيديو للمشي", requirement: "استخدام العرض البطيء (Slow motion) لتحليل الـ Heel strike والـ Toe off." }
            ], 
            resources: [
              { title: "Gait Analysis Video Guide", url: "https://www.youtube.com/results?search_query=gait+analysis+physiotherapy+tutorial" }
            ],
            tip: "العين المدربة ترى ما لا يراه الآخرون." 
          },
          { 
            id: "4_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة ميكانيكا المشي", requirement: "ربط عضلات الرجل بمراحل المشي المختلفة." },
              { text: "راحة", requirement: "امشِ ببطء وتأمل حركتك." }
            ], 
            resources: [],
            tip: "المشي هو أعقد حركة نقوم بها يومياً." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Lower Limb Biomechanics", 
        days: [
          { 
            id: "4_3_1", 
            name: "ميكانيكا الورك", 
            topic: "Biomechanics", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Hip joint loading", requirement: "دراسة كيف يتضاعف الحمل على الورك عند الوقوف على رجل واحدة." },
              { text: "دراسة الـ Femoral neck angles", requirement: "فهم الـ Angle of Inclination والـ Torsion وتأثيرهما على المشي." }
            ], 
            resources: [
              { title: "Hip Biomechanics", url: "https://www.physio-pedia.com/Hip_Biomechanics" }
            ],
            tip: "الورك يتحمل ضغوطاً هائلة." 
          },
          { 
            id: "4_3_2", 
            name: "ميكانيكا الركبة", 
            topic: "Biomechanics", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Screw-home mechanism", requirement: "شرح كيف يتم قفل الركبة في آخر درجات الـ Extension." },
              { text: "دراسة الـ Patellofemoral forces", requirement: "فهم كيف يتغير الضغط على الصابونة مع زيادة زاوية ثني الركبة." }
            ], 
            resources: [
              { title: "Knee Biomechanics", url: "https://www.physio-pedia.com/Knee_Biomechanics" }
            ],
            tip: "الركبة تعتمد على الأربطة للثبات." 
          },
          { 
            id: "4_3_3", 
            name: "ميكانيكا الكاحل", 
            topic: "Biomechanics", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Windlass mechanism", requirement: "شرح كيف يرتفع قوس القدم عند ثني أصابع القدم للأعلى." },
              { text: "دراسة الـ Talocrural kinematics", requirement: "فهم حركة الكاحل أثناء الـ Dorsi & Plantar flexion." }
            ], 
            resources: [
              { title: "Ankle Biomechanics", url: "https://www.physio-pedia.com/Ankle_Biomechanics" }
            ],
            tip: "القدم هي قاعدة الارتكاز." 
          },
          { 
            id: "4_3_4", 
            name: "ميكانيكا التوازن", 
            topic: "Biomechanics", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Center of Pressure (COP)", requirement: "دراسة كيف يتحرك الـ COP داخل قاعدة الارتكاز للحفاظ على التوازن." },
              { text: "دراسة الـ Ankle vs Hip strategy", requirement: "فهم متى يستخدم الجسم الكاحل ومتى يستخدم الورك لاستعادة التوازن." }
            ], 
            resources: [
              { title: "Balance Biomechanics", url: "https://www.physio-pedia.com/Balance" }
            ],
            tip: "التوازن هو صراع ضد الجاذبية." 
          },
          { 
            id: "4_3_5", 
            name: "ميكانيكا الجري", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "الفرق بين المشي والجري", requirement: "تحديد الـ Flight phase والـ Ground reaction forces العالية في الجري." },
              { text: "دراسة الـ Running strike patterns", requirement: "الفرق بين الـ Forefoot, Midfoot, and Rearfoot strike." }
            ], 
            resources: [
              { title: "Running Biomechanics", url: "https://www.physio-pedia.com/Running_Biomechanics" }
            ],
            tip: "الجري يضاعف الحمل على المفاصل 3 مرات." 
          },
          { 
            id: "4_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "اختبار الـ Windlass mechanism", requirement: "ملاحظة ارتفاع قوس القدم عند المريض أثناء المشي." },
              { text: "تقييم التوازن (Single leg stand)", requirement: "قياس الوقت الذي يستطيع فيه المريض الوقوف على رجل واحدة." }
            ], 
            resources: [
              { title: "Balance Assessment Video", url: "https://www.youtube.com/results?search_query=balance+assessment+physiotherapy" }
            ],
            tip: "التوازن يقل مع التقدم في العمر." 
          },
          { 
            id: "4_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة ميكانيكا الطرف السفلي", requirement: "ربط حركة الورك بحركة الركبة والقدم (Kinetic chain)." },
              { text: "راحة", requirement: "استرخِ وجهز نفسك للأسبوع القادم." }
            ], 
            resources: [],
            tip: "الرجل هي محرك الحركة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Spinal Biomechanics & Ergonomics", 
        days: [
          { 
            id: "4_4_1", 
            name: "ميكانيكا الرقبة المتقدمة", 
            topic: "Biomechanics", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Text Neck syndrome", requirement: "حساب زيادة الوزن الفعلي للرأس على الفقرات عند إمالته للأمام." },
              { text: "دراسة الـ Upper Cross Syndrome", requirement: "فهم التوازن العضلي المختل في الرقبة والكتف." }
            ], 
            resources: [
              { title: "Cervical Biomechanics", url: "https://www.physio-pedia.com/Cervical_Biomechanics" }
            ],
            tip: "إمالة الرأس تزيد الحمل على الرقبة بشكل مرعب." 
          },
          { 
            id: "4_4_2", 
            name: "ميكانيكا الظهر المتقدمة", 
            topic: "Biomechanics", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Lifting mechanics", requirement: "شرح لماذا يجب ثني الركبتين والحفاظ على الظهر مستقيماً عند الرفع." },
              { text: "دراسة الـ Intra-abdominal pressure", requirement: "فهم دور ضغط البطن في حماية الفقرات القطنية." }
            ], 
            resources: [
              { title: "Lumbar Biomechanics", url: "https://www.physio-pedia.com/Lumbar_Biomechanics" }
            ],
            tip: "ارفع بعضلات رجلك لا بظهرك." 
          },
          { 
            id: "4_4_3", 
            name: "ميكانيكا الجلوس (Ergonomics)", 
            topic: "Biomechanics", 
            badge: "الاثنين", 
            tasks: [
              { text: "تصميم المكتب المثالي", requirement: "تحديد الارتفاع المناسب للكرسي والشاشة ولوحة المفاتيح." },
              { text: "فهم الـ Static loading", requirement: "دراسة تأثير الجلوس الطويل على تغذية الديسك (Imbibition)." }
            ], 
            resources: [
              { title: "Ergonomics Guide", url: "https://www.physio-pedia.com/Ergonomics" }
            ],
            tip: "أفضل وضعية جلوس هي الوضعية التالية (تحرك باستمرار)." 
          },
          { 
            id: "4_4_4", 
            name: "ميكانيكا النوم", 
            topic: "Biomechanics", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "اختيار المرتبة والوسادة", requirement: "فهم كيف تحافظ الوضعيات المختلفة على انحناءات العمود الفقري." },
              { text: "دراسة الـ Spinal unloading", requirement: "لماذا يزداد طول الإنسان قليلاً بعد النوم؟" }
            ], 
            resources: [
              { title: "Sleep Posture", url: "https://www.physio-pedia.com/Sleep_Posture" }
            ],
            tip: "النوم هو وقت ترميم الديسك." 
          },
          { 
            id: "4_4_5", 
            name: "تحليل المهام الوظيفية", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة الـ Functional Capacity", requirement: "فهم كيف نقيم قدرة المريض على العودة لعمله البدني." },
              { text: "تحليل حركة الرفع والدفع", requirement: "تحديد القوى المؤثرة على المفاصل في بيئة العمل." }
            ], 
            resources: [
              { title: "Functional Assessment", url: "https://www.physio-pedia.com/Functional_Capacity_Evaluation" }
            ],
            tip: "العلاج يجب أن يشبه وظيفة المريض." 
          },
          { 
            id: "4_4_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تعديل وضعية مكتب", requirement: "تطبيق مبادئ الـ Ergonomics على مكتبك الخاص أو مكتب زميل." },
              { text: "تعليم مريض كيفية الرفع", requirement: "استخدام الـ Squat technique لرفع صندوق ثقيل بأمان." }
            ], 
            resources: [
              { title: "Ergonomics in Office Video", url: "https://www.youtube.com/results?search_query=office+ergonomics+physiotherapy" }
            ],
            tip: "التوعية هي جزء كبير من العلاج." 
          },
          { 
            id: "4_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الميكانيكا", requirement: "ربط جميع المفاهيم (روافع، قوى، مشي، ظهر) ببعضها." },
              { text: "راحة", requirement: "استعد لشهر الفسيولوجيا القادم." }
            ], 
            resources: [],
            tip: "أنت الآن تفهم كيف يتحرك الجسم ميكانيكياً." 
          }
        ] 
      }
    ] 
  },
  { 
    id: 4, 
    name: "شهر 5 — فيزيولوجيا التمارين (Exercise Physiology)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Muscle Physiology", 
        days: [
          { 
            id: "5_1_1", 
            name: "فسيولوجيا العضلات", 
            topic: "Physiology", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Sliding Filament Theory", requirement: "شرح دور الـ Actin, Myosin, and Calcium في انقباض العضلة." },
              { text: "دراسة الـ Motor Unit recruitment", requirement: "فهم الـ Size Principle وكيف يتم تجنيد الألياف العضلية." }
            ], 
            resources: [
              { title: "Muscle Physiology Basics", url: "https://www.physio-pedia.com/Muscle_Physiology" }
            ],
            tip: "افهم كيف تنقبض العضلة على المستوى الجزيئي." 
          },
          { 
            id: "5_1_2", 
            name: "أنظمة الطاقة 1", 
            topic: "Physiology", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ ATP-CP system", requirement: "دراسة النظام اللاهوائي الفوري للأنشطة التي تستغرق أقل من 10 ثوانٍ." },
              { text: "دراسة الـ Anaerobic Glycolysis", requirement: "فهم كيف يتم إنتاج الطاقة من الجلوكوز بدون أكسجين وتراكم اللاكتات." }
            ], 
            resources: [
              { title: "Energy Systems Guide", url: "https://www.physio-pedia.com/Energy_Systems" }
            ],
            tip: "الطاقة السريعة تنفد بسرعة." 
          },
          { 
            id: "5_1_3", 
            name: "أنظمة الطاقة 2", 
            topic: "Physiology", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Aerobic system", requirement: "دراسة النظام الهوائي للأنشطة الطويلة والمستمرة." },
              { text: "دراسة الـ Krebs cycle (ببساطة)", requirement: "فهم دور الميتوكوندريا في إنتاج كميات كبيرة من الـ ATP." }
            ], 
            resources: [
              { title: "Aerobic Metabolism", url: "https://www.physio-pedia.com/Energy_Systems" }
            ],
            tip: "الأكسجين هو وقود الاستمرارية." 
          },
          { 
            id: "5_1_4", 
            name: "التكيف العضلي", 
            topic: "Physiology", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Hypertrophy vs Hyperplasia", requirement: "الفرق بين زيادة حجم الليفة العضلية وزيادة عدد الألياف." },
              { text: "دراسة الـ Atrophy causes", requirement: "فهم أسباب ضمور العضلات (Disuse, Denervation, Sarcopenia)." }
            ], 
            resources: [
              { title: "Muscle Adaptation", url: "https://www.physio-pedia.com/Skeletal_Muscle_Adaptations_to_Exercise" }
            ],
            tip: "العضلة التي لا تستخدم تضمر." 
          },
          { 
            id: "5_1_5", 
            name: "التعب العضلي", 
            topic: "Physiology", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Central vs Peripheral fatigue", requirement: "الفرق بين تعب الجهاز العصبي وتعب العضلة نفسها." },
              { text: "دراسة الـ DOMS", requirement: "فهم أسباب الألم العضلي المتأخر (Delayed Onset Muscle Soreness)." }
            ], 
            resources: [
              { title: "Muscle Fatigue", url: "https://www.physio-pedia.com/Muscle_Fatigue" }
            ],
            tip: "الألم بعد التمرين طبيعي ومؤقت." 
          },
          { 
            id: "5_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "قياس معدل ضربات القلب", requirement: "تعلم جس النبض الكعبري وحساب الـ Resting Heart Rate." },
              { text: "اختبار الـ Muscle endurance", requirement: "تطبيق اختبار الـ Push-up أو الـ Plank لقياس التحمل." }
            ], 
            resources: [
              { title: "Heart Rate Measurement", url: "https://www.youtube.com/results?search_query=how+to+measure+heart+rate+physiotherapy" }
            ],
            tip: "النبض هو مرآة الجهد البدني." 
          },
          { 
            id: "5_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة فسيولوجيا العضلات", requirement: "ربط أنظمة الطاقة بنوع التمارين الموصوفة." },
              { text: "راحة", requirement: "الجسم يحتاج وقت للبناء." }
            ], 
            resources: [],
            tip: "الاستشفاء جزء من التمرين." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Cardiovascular & Respiratory Physiology", 
        days: [
          { 
            id: "5_2_1", 
            name: "فسيولوجيا القلب", 
            topic: "Physiology", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Cardiac Output", requirement: "دراسة العلاقة بين الـ Stroke Volume والـ Heart Rate." },
              { text: "دراسة الـ Blood Pressure response", requirement: "فهم كيف يتغير ضغط الدم الانقباضي والانبساطي أثناء التمرين." }
            ], 
            resources: [
              { title: "Cardiovascular Response to Exercise", url: "https://www.physio-pedia.com/Cardiovascular_Response_to_Exercise" }
            ],
            tip: "القلب هو المضخة التي لا تتوقف." 
          },
          { 
            id: "5_2_2", 
            name: "فسيولوجيا التنفس", 
            topic: "Physiology", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ VO2 Max", requirement: "دراسة مفهوم السعة القصوى لاستهلاك الأكسجين وأهميتها كمعيار للياقة." },
              { text: "دراسة الـ Ventilation response", requirement: "فهم كيف تزداد سرعة وعمق التنفس مع زيادة شدة التمرين." }
            ], 
            resources: [
              { title: "Respiratory Response to Exercise", url: "https://www.physio-pedia.com/Respiratory_Response_to_Exercise" }
            ],
            tip: "الرئتان توفران الوقود للدم." 
          },
          { 
            id: "5_2_3", 
            name: "التكيف القلبي الوعائي", 
            topic: "Physiology", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Athlete's Heart", requirement: "دراسة التغيرات الطبيعية في حجم القلب وكفاءته عند الرياضيين." },
              { text: "دراسة الـ Capillarization", requirement: "فهم كيف تزداد الشعيرات الدموية في العضلات مع تمارين التحمل." }
            ], 
            resources: [
              { title: "Chronic Adaptations to Exercise", url: "https://www.physio-pedia.com/Physiological_Adaptations_to_Exercise" }
            ],
            tip: "التمرين يجعل القلب أكثر كفاءة." 
          },
          { 
            id: "5_2_4", 
            name: "تنظيم الحرارة", 
            topic: "Physiology", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Thermoregulation", requirement: "دراسة كيف يتخلص الجسم من الحرارة الزائدة أثناء التمرين (العرق، التوصيل)." },
              { text: "دراسة الـ Dehydration effects", requirement: "فهم تأثير نقص السوائل على الأداء الرياضي وسلامة الجسم." }
            ], 
            resources: [
              { title: "Thermoregulation in Exercise", url: "https://www.physio-pedia.com/Thermoregulation" }
            ],
            tip: "اشرب الماء بانتظام أثناء التمرين." 
          },
          { 
            id: "5_2_5", 
            name: "الاستجابة الهرمونية", 
            topic: "Physiology", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم دور الـ Adrenaline & Noradrenaline", requirement: "دراسة استجابة 'الكر والفر' وتأثيرها على القلب والعضلات." },
              { text: "دراسة الـ Cortisol & Insulin", requirement: "فهم كيف تتغير مستويات السكر في الدم أثناء المجهود البدني." }
            ], 
            resources: [
              { title: "Hormonal Response to Exercise", url: "https://www.kenhub.com/en/library/anatomy/endocrine-system" }
            ],
            tip: "الهرمونات هي الرسل الكيميائية للجسم." 
          },
          { 
            id: "5_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "قياس ضغط الدم", requirement: "تعلم استخدام جهاز الضغط الزئبقي أو الإلكتروني بدقة." },
              { text: "اختبار الـ Step Test", requirement: "تطبيق اختبار بسيط لتقييم اللياقة القلبية التنفسية." }
            ], 
            resources: [
              { title: "Blood Pressure Measurement Video", url: "https://www.youtube.com/results?search_query=how+to+measure+blood+pressure+physiotherapy" }
            ],
            tip: "الضغط الطبيعي هو علامة حيوية أساسية." 
          },
          { 
            id: "5_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة فسيولوجيا القلب والرئة", requirement: "ربط ضيق التنفس بمشاكل القلب أو الرئة المحتملة." },
              { text: "راحة", requirement: "استرخِ وراقب تنفسك." }
            ], 
            resources: [],
            tip: "الراحة تسمح للقلب بالتعافي." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Principles of Exercise Prescription", 
        days: [
          { 
            id: "5_3_1", 
            name: "مبدأ الـ FITT", 
            topic: "Physiology", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Frequency, Intensity, Time, Type", requirement: "شرح كل عنصر من عناصر وصفة التمرين وكيفية تعديله." },
              { text: "تطبيق الـ FITT على مريض سكر", requirement: "وضع خطة تمرين أولية لمريض يعاني من السكري." }
            ], 
            resources: [
              { title: "FITT Principle Guide", url: "https://www.physio-pedia.com/FITT_Principle" }
            ],
            tip: "وصف التمرين هو علم وفن." 
          },
          { 
            id: "5_3_2", 
            name: "مبدأ الـ Overload", 
            topic: "Physiology", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Progressive Overload", requirement: "شرح لماذا يجب زيادة الحمل تدريجياً لتحقيق تطور مستمر." },
              { text: "دراسة الـ SAID Principle", requirement: "فهم أن الجسم يتكيف بشكل خاص مع نوع الضغط المسلط عليه." }
            ], 
            resources: [
              { title: "Principles of Exercise", url: "https://www.physio-pedia.com/Principles_of_Exercise" }
            ],
            tip: "لا تتوقع نتائج جديدة بنفس المجهود القديم." 
          },
          { 
            id: "5_3_3", 
            name: "تمارين القوة (Strength)", 
            topic: "Physiology", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ 1RM (One Rep Max)", requirement: "تعلم كيفية حساب أو تقدير أقصى وزن يمكن رفعه مرة واحدة." },
              { text: "دراسة الـ Hypertrophy protocols", requirement: "فهم عدد العدات والمجموعات الأمثل لزيادة حجم العضلة." }
            ], 
            resources: [
              { title: "Strength Training Principles", url: "https://www.physio-pedia.com/Strength_Training" }
            ],
            tip: "القوة هي أساس الأداء الوظيفي." 
          },
          { 
            id: "5_3_4", 
            name: "تمارين التحمل (Endurance)", 
            topic: "Physiology", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Aerobic Training Zones", requirement: "حساب مناطق ضربات القلب المستهدفة (Target Heart Rate) باستخدام معادلة كاربونين." },
              { text: "دراسة الـ Interval Training", requirement: "فهم فوائد التدريب الفتري عالي الشدة (HIIT)." }
            ], 
            resources: [
              { title: "Aerobic Exercise Prescription", url: "https://www.physio-pedia.com/Aerobic_Exercise" }
            ],
            tip: "التحمل يطيل عمر القلب." 
          },
          { 
            id: "5_3_5", 
            name: "تمارين المرونة (Flexibility)", 
            topic: "Physiology", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Static vs Dynamic stretching", requirement: "دراسة متى نستخدم الإطالات الثابتة ومتى نستخدم الحركية." },
              { text: "دراسة الـ PNF stretching", requirement: "فهم تقنيات التسهيل العصبي العضلي للمستقبلات الحسية لزيادة المرونة." }
            ], 
            resources: [
              { title: "Flexibility Training", url: "https://www.physio-pedia.com/Flexibility" }
            ],
            tip: "المرونة تحمي المفاصل من الإصابة." 
          },
          { 
            id: "5_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم برنامج تمرين كامل", requirement: "كتابة برنامج تمرين لشخص معافى يتضمن قوة وتحمل ومرونة." },
              { text: "تعليم تقنية الـ PNF", requirement: "تطبيق تقنية الـ Hold-Relax على عضلات الهامسترينج لزميل." }
            ], 
            resources: [
              { title: "PNF Stretching Video", url: "https://www.youtube.com/results?search_query=pnf+stretching+physiotherapy" }
            ],
            tip: "التطبيق العملي يثبت المعلومة." 
          },
          { 
            id: "5_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة مبادئ التمرين", requirement: "التأكد من فهم كيفية تعديل البرنامج إذا لم يحقق المريض نتائج." },
              { text: "راحة", requirement: "استمتع بيومك." }
            ], 
            resources: [],
            tip: "التخطيط الجيد هو سر النجاح." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Exercise in Special Populations", 
        days: [
          { 
            id: "5_4_1", 
            name: "التمارين لكبار السن", 
            topic: "Physiology", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Sarcopenia & Osteoporosis", requirement: "دراسة التغيرات الفسيولوجية مع العمر وكيفية مواجهتها بالتمارين." },
              { text: "تصميم تمارين التوازن", requirement: "التركيز على منع السقوط (Fall prevention) في هذه الفئة." }
            ], 
            resources: [
              { title: "Exercise for Older Adults", url: "https://www.physio-pedia.com/Physical_Activity_in_Older_Adults" }
            ],
            tip: "الحركة هي سر الشباب الدائم." 
          },
          { 
            id: "5_4_2", 
            name: "التمارين للأطفال", 
            topic: "Physiology", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم مراحل النمو الحركي", requirement: "دراسة كيف نكيف التمارين لتناسب الأطفال دون الضغط على مراكز النمو (Growth plates)." },
              { text: "أهمية اللعب الحركي", requirement: "فهم دور النشاط البدني في تطوير المهارات العصبية الحركية." }
            ], 
            resources: [
              { title: "Physical Activity in Children", url: "https://www.physio-pedia.com/Physical_Activity_in_Children" }
            ],
            tip: "التمارين للأطفال يجب أن تكون ممتعة." 
          },
          { 
            id: "5_4_3", 
            name: "التمارين أثناء الحمل", 
            topic: "Physiology", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم التغيرات الفسيولوجية للحامل", requirement: "دراسة موانع التمرين والوضعيات الآمنة أثناء الحمل." },
              { text: "تمارين قاع الحوض (Kegel)", requirement: "فهم أهمية تقوية عضلات الحوض قبل وبعد الولادة." }
            ], 
            resources: [
              { title: "Exercise During Pregnancy", url: "https://www.physio-pedia.com/Physical_Activity_and_Pregnancy" }
            ],
            tip: "التمرين يحسن صحة الأم والجنين." 
          },
          { 
            id: "5_4_4", 
            name: "التمارين للأمراض المزمنة", 
            topic: "Physiology", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "التمارين لمرضى الضغط والسكر", requirement: "فهم الاحتياطات الخاصة بكل مرض (مثل مراقبة سكر الدم)." },
              { text: "التمارين لمرضى القلب (Phase 1)", requirement: "دراسة أساسيات التأهيل القلبي المبكر." }
            ], 
            resources: [
              { title: "Exercise for Chronic Disease", url: "https://www.physio-pedia.com/Exercise_and_Chronic_Disease" }
            ],
            tip: "التمرين هو دواء بدون آثار جانبية." 
          },
          { 
            id: "5_4_5", 
            name: "التغذية والتمارين", 
            topic: "Physiology", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Macronutrients", requirement: "دراسة دور البروتين والكربوهيدرات والدهون في الأداء والاستشفاء." },
              { text: "أهمية الـ Hydration", requirement: "حساب كمية السوائل المفقودة والمطلوبة تعويضها بعد التمرين." }
            ], 
            resources: [
              { title: "Nutrition for Exercise", url: "https://www.physio-pedia.com/Nutrition_and_Physical_Activity" }
            ],
            tip: "أنت ما تأكله." 
          },
          { 
            id: "5_4_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تعديل تمارين لحالة خاصة", requirement: "خذ تمرين الـ Squat وعدله ليناسب مريضاً يعاني من خشونة ركبة متقدمة." },
              { text: "شرح موانع التمرين", requirement: "عمل قائمة بالـ Absolute Contraindications لممارسة الرياضة." }
            ], 
            resources: [
              { title: "Modified Exercises Video", url: "https://www.youtube.com/results?search_query=modified+exercises+for+elderly+physiotherapy" }
            ],
            tip: "السلامة دائماً تأتي أولاً." 
          },
          { 
            id: "5_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الفسيولوجيا", requirement: "التأكد من القدرة على شرح 'لماذا' نصف هذا التمرين لهذا المريض." },
              { text: "راحة", requirement: "استعد لشهر التقييم العام القادم." }
            ], 
            resources: [],
            tip: "أنهيت شهر الفسيولوجيا بنجاح!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 5, 
    name: "شهر 6 — التقييم العام (General Assessment)", 
    weeks: [
      { 
        title: "الأسبوع 1 — History Taking & Red Flags", 
        days: [
          { 
            id: "6_1_1", 
            name: "أخذ التاريخ المرضي", 
            topic: "Assessment", 
            badge: "السبت", 
            tasks: [
              { text: "تعلم الـ SOCRATES للـ Pain", requirement: "تطبيق معايير (Site, Onset, Character, Radiation, Association, Time, Exacerbating, Severity) على حالة وهمية." },
              { text: "مهارات التواصل الفعال", requirement: "دراسة كيفية بناء الثقة مع المريض واستخدام الأسئلة المفتوحة." }
            ], 
            resources: [
              { title: "History Taking Guide", url: "https://www.physio-pedia.com/Clinical_History_Taking" }
            ],
            tip: "المريض يحكي لك التشخيص إذا استمعت جيداً." 
          },
          { 
            id: "6_1_2", 
            name: "علامات الخطر (Red Flags)", 
            topic: "Assessment", 
            badge: "الأحد", 
            tasks: [
              { text: "حفظ الـ Red Flags للعمود الفقري", requirement: "تحديد العلامات التي تستوجب التحويل الفوري للجراح (مثل Cauda Equina Syndrome)." },
              { text: "فهم الـ Yellow Flags (النفسية)", requirement: "دراسة العوامل النفسية والاجتماعية التي قد تعيق تقدم العلاج." }
            ], 
            resources: [
              { title: "Red Flags in Physiotherapy", url: "https://www.physio-pedia.com/Red_Flags_in_Spinal_Conditions" }
            ],
            tip: "الأمان أولاً قبل أي علاج." 
          },
          { 
            id: "6_1_3", 
            name: "الفحص البصري (Observation)", 
            topic: "Assessment", 
            badge: "الاثنين", 
            tasks: [
              { text: "تحليل الـ Posture", requirement: "ملاحظة الانحرافات القوامية من الأمام والخلف والجانب." },
              { text: "رصد الـ Muscle wasting & Swelling", requirement: "تعلم كيفية مقارنة الطرف المصاب بالطرف السليم بصرياً." }
            ], 
            resources: [
              { title: "Observation Skills", url: "https://www.physio-pedia.com/Postural_Assessment" }
            ],
            tip: "عينك هي أول أداة تشخيصية." 
          },
          { 
            id: "6_1_4", 
            name: "اختبارات المدى الحركي", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ AROM vs PROM", requirement: "الفرق بين الحركة التي يقوم بها المريض والحركة التي يقوم بها المعالج." },
              { text: "دراسة الـ End-feel types", requirement: "التمييز بين الـ Soft, Firm, and Hard end-feel." }
            ], 
            resources: [
              { title: "Range of Motion Assessment", url: "https://www.physio-pedia.com/Range_of_Motion" }
            ],
            tip: "ملمس نهاية الحركة يخبرك بنوع المشكلة." 
          },
          { 
            id: "6_1_5", 
            name: "اختبارات القوة (MMT)", 
            topic: "Assessment", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تعلم الـ Oxford Scale (0-5)", requirement: "حفظ معايير كل درجة من درجات القوة العضلية." },
              { text: "تطبيق الـ MMT للعضلات الكبيرة", requirement: "تطبيق اختبار القوة لعضلات الـ Quadriceps والـ Biceps." }
            ], 
            resources: [
              { title: "Manual Muscle Testing", url: "https://www.physio-pedia.com/Manual_Muscle_Testing" }
            ],
            tip: "القوة يجب أن تكون متساوية بين الطرفين." 
          },
          { 
            id: "6_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "إجراء مقابلة كاملة مع زميل", requirement: "تطبيق مهارات أخذ التاريخ المرضي والفحص البصري في 15 دقيقة." },
              { text: "توثيق الحالة (Documentation)", requirement: "كتابة تقرير أولي باستخدام نظام الـ SOAP (Subjective, Objective, Assessment, Plan)." }
            ], 
            resources: [
              { title: "SOAP Notes Guide", url: "https://www.physio-pedia.com/SOAP_Notes" }
            ],
            tip: "ما لم يكتب لم يفعل." 
          },
          { 
            id: "6_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة مهارات التقييم", requirement: "التأكد من القدرة على تحديد المشكلة الرئيسية للمريض من الجلسة الأولى." },
              { text: "راحة", requirement: "استرخِ وجهز نفسك للأسبوع القادم." }
            ], 
            resources: [],
            tip: "التقييم الصحيح هو نصف العلاج." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Palpation & Neurological Exam", 
        days: [
          { 
            id: "6_2_1", 
            name: "مهارات الجس (Palpation)", 
            topic: "Assessment", 
            badge: "السبت", 
            tasks: [
              { text: "جس المعالم العظمية", requirement: "تحديد النتوءات العظمية الرئيسية في الكتف والحوض والركبة." },
              { text: "جس الأنسجة الرخوة", requirement: "التمييز بين ملمس العضلة، الوتر، والرباط." }
            ], 
            resources: [
              { title: "Palpation Skills", url: "https://www.physio-pedia.com/Palpation" }
            ],
            tip: "يدك هي عينك الثانية." 
          },
          { 
            id: "6_2_2", 
            name: "اختبار الإحساس (Dermatomes)", 
            topic: "Assessment", 
            badge: "الأحد", 
            tasks: [
              { text: "حفظ خريطة الـ Dermatomes", requirement: "تحديد مناطق الجلد التي تغذيها جذور الأعصاب المختلفة." },
              { text: "تطبيق اختبار الـ Light touch", requirement: "استخدام القطن لاختبار سلامة الإحساس السطحي." }
            ], 
            resources: [
              { title: "Dermatomes Map", url: "https://www.physio-pedia.com/Dermatomes" }
            ],
            tip: "تغير الإحساس يشير لضغط على العصب." 
          },
          { 
            id: "6_2_3", 
            name: "اختبار القوة العصبية (Myotomes)", 
            topic: "Assessment", 
            badge: "الاثنين", 
            tasks: [
              { text: "حفظ خريطة الـ Myotomes", requirement: "تحديد الحركات المسؤولة عنها كل جذر عصبي (مثل C5-Shoulder Abduction)." },
              { text: "تطبيق اختبار الـ Isometric hold", requirement: "اختبار قوة العضلات في وضع الثبات لتقييم التوصيل العصبي." }
            ], 
            resources: [
              { title: "Myotomes Guide", url: "https://www.physio-pedia.com/Myotomes" }
            ],
            tip: "ضعف الـ Myotome يعني مشكلة في الجذر العصبي." 
          },
          { 
            id: "6_2_4", 
            name: "اختبار المنعكسات (Reflexes)", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تعلم الـ Deep Tendon Reflexes", requirement: "تطبيق اختبار الـ Biceps (C5), Triceps (C7), and Patellar (L4) reflexes." },
              { text: "فهم الـ Reflex grading (0-4)", requirement: "التمييز بين الـ Hyporeflexia والـ Hyperreflexia." }
            ], 
            resources: [
              { title: "Reflex Testing", url: "https://www.physio-pedia.com/Reflex_Testing" }
            ],
            tip: "المنعكسات تعطي فكرة عن سلامة النخاع الشوكي." 
          },
          { 
            id: "6_2_5", 
            name: "اختبارات التوتر العصبي", 
            topic: "Assessment", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تعلم الـ SLR & Slump tests", requirement: "تطبيق اختبارات شد العصب الوركي (Sciatic nerve)." },
              { text: "تعلم الـ ULNT tests", requirement: "تطبيق اختبارات شد أعصاب الطرف العلوي (Median, Radial, Ulnar)." }
            ], 
            resources: [
              { title: "Neurodynamic Testing", url: "https://www.physio-pedia.com/Neurodynamic_Assessment" }
            ],
            tip: "الأعصاب يجب أن تتحرك بحرية." 
          },
          { 
            id: "6_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "فحص عصبي كامل", requirement: "تطبيق (Dermatomes, Myotomes, Reflexes) لزميل في 10 دقائق." },
              { text: "جس العضلات العميقة", requirement: "محاولة جس عضلة الـ Psoas أو الـ Piriformis بدقة." }
            ], 
            resources: [
              { title: "Neurological Exam Video", url: "https://www.youtube.com/results?search_query=neurological+examination+physiotherapy" }
            ],
            tip: "الدقة في الفحص العصبي تنقذ المريض." 
          },
          { 
            id: "6_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الفحص العصبي", requirement: "ربط نتائج الفحص بمستوى الإصابة في العمود الفقري." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "الجهاز العصبي هو المتحكم في كل شيء." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Special Tests & Clinical Reasoning", 
        days: [
          { 
            id: "6_3_1", 
            name: "مقدمة للاختبارات الخاصة", 
            topic: "Assessment", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Sensitivity & Specificity", requirement: "دراسة لماذا نستخدم بعض الاختبارات لاستبعاد الإصابة والبعض الآخر لتأكيدها." },
              { text: "دراسة الـ Likelihood Ratios", requirement: "فهم كيف تزيد مجموعة من الاختبارات (Clusters) من دقة التشخيص." }
            ], 
            resources: [
              { title: "Diagnostic Accuracy", url: "https://www.physio-pedia.com/Diagnostic_Accuracy" }
            ],
            tip: "لا يوجد اختبار واحد دقيق بنسبة 100%." 
          },
          { 
            id: "6_3_2", 
            name: "اختبارات الثبات (Stability)", 
            topic: "Assessment", 
            badge: "الأحد", 
            tasks: [
              { text: "تعلم اختبارات أربطة الركبة", requirement: "تطبيق الـ Lachman & Drawer tests للـ ACL والـ PCL." },
              { text: "تعلم اختبارات ثبات الكتف", requirement: "تطبيق الـ Apprehension & Relocation tests." }
            ], 
            resources: [
              { title: "Ligamentous Stability Tests", url: "https://www.physio-pedia.com/Special_Tests" }
            ],
            tip: "الثبات يضمن سلامة المفصل." 
          },
          { 
            id: "6_3_3", 
            name: "اختبارات الانضغاط (Impingement)", 
            topic: "Assessment", 
            badge: "الاثنين", 
            tasks: [
              { text: "تعلم اختبارات الكتف", requirement: "تطبيق الـ Neer & Hawkins-Kennedy tests." },
              { text: "تعلم اختبارات الورك", requirement: "تطبيق الـ FADIR test للـ FAI." }
            ], 
            resources: [
              { title: "Impingement Tests", url: "https://www.physio-pedia.com/Special_Tests" }
            ],
            tip: "الانضغاط يسبب ألماً حاداً مع الحركة." 
          },
          { 
            id: "6_3_4", 
            name: "التفكير السريري (Clinical Reasoning)", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "بناء الفرضيات التشخيصية", requirement: "تعلم كيف تربط المعلومات من التاريخ المرضي بنتائج الفحص البدني." },
              { text: "التمييز بين الأنسجة (Differential Diagnosis)", requirement: "كيف تعرف إذا كان الألم من العضلة أم من الوتر أم من المفصل؟" }
            ], 
            resources: [
              { title: "Clinical Reasoning Guide", url: "https://www.physio-pedia.com/Clinical_Reasoning" }
            ],
            tip: "فكر كالمحقق لتصل للسبب الحقيقي." 
          },
          { 
            id: "6_3_5", 
            name: "استخدام المقاييس الوظيفية", 
            topic: "Assessment", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تعلم الـ Outcome Measures", requirement: "دراسة استبيانات مثل الـ DASH لليد والـ Oswestry للظهر." },
              { text: "فهم الـ MCID", requirement: "دراسة أقل تغيير في الدرجات يعتبر تحسناً حقيقياً للمريض." }
            ], 
            resources: [
              { title: "Outcome Measures Guide", url: "https://www.physio-pedia.com/Outcome_Measures" }
            ],
            tip: "الأرقام لا تكذب في تقييم التحسن." 
          },
          { 
            id: "6_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق Cluster من الاختبارات", requirement: "تطبيق الـ Laslett cluster لتشخيص مشاكل الـ SIJ." },
              { text: "تحليل حالة سريرية", requirement: "قراءة حالة مكتوبة واستخراج التشخيص المحتمل منها." }
            ], 
            resources: [
              { title: "Special Tests Video Library", url: "https://www.youtube.com/results?search_query=physiotherapy+special+tests+library" }
            ],
            tip: "الاختبارات الخاصة هي اللمسة الأخيرة في التقييم." 
          },
          { 
            id: "6_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الاختبارات الخاصة", requirement: "التأكد من حفظ طريقة أداء الاختبارات الأكثر شيوعاً." },
              { text: "راحة", requirement: "استراحة محارب." }
            ], 
            resources: [],
            tip: "الممارسة تجعل الأداء مثالياً." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Functional Assessment & Final Review", 
        days: [
          { 
            id: "6_4_1", 
            name: "تقييم التوازن والحركة", 
            topic: "Assessment", 
            badge: "السبت", 
            tasks: [
              { text: "تعلم الـ Berg Balance Scale", requirement: "دراسة معايير تقييم التوازن عند كبار السن." },
              { text: "تطبيق الـ Timed Up and Go (TUG)", requirement: "قياس سرعة المريض في القيام والمشي والجلوس." }
            ], 
            resources: [
              { title: "Functional Balance Tests", url: "https://www.physio-pedia.com/Balance_Scales" }
            ],
            tip: "الوظيفة هي الهدف النهائي للعلاج." 
          },
          { 
            id: "6_4_2", 
            name: "تقييم القدرة الرياضية", 
            topic: "Assessment", 
            badge: "الأحد", 
            tasks: [
              { text: "تعلم الـ Hop Tests", requirement: "تطبيق اختبارات القفز لتقييم جاهزية الرياضي للعودة للملعب." },
              { text: "دراسة الـ Y-Balance Test", requirement: "تقييم الثبات الديناميكي للطرف السفلي." }
            ], 
            resources: [
              { title: "Return to Play Assessment", url: "https://www.physio-pedia.com/Return_to_Play_in_Sports" }
            ],
            tip: "الرياضي يحتاج تقييماً تحت ضغط." 
          },
          { 
            id: "6_4_3", 
            name: "تقييم بيئة العمل", 
            topic: "Assessment", 
            badge: "الاثنين", 
            tasks: [
              { text: "إجراء الـ Ergonomic Assessment", requirement: "تقييم وضعية الجلوس والوقوف في مكان العمل." },
              { text: "تحديد المخاطر المهنية", requirement: "رصد الحركات المتكررة التي قد تسبب إصابات (RSI)." }
            ], 
            resources: [
              { title: "Workplace Assessment", url: "https://www.physio-pedia.com/Ergonomics" }
            ],
            tip: "عالج السبب في بيئة العمل لا العرض فقط." 
          },
          { 
            id: "6_4_4", 
            name: "وضع الأهداف (SMART Goals)", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "كتابة أهداف SMART", requirement: "صياغة أهداف (Specific, Measurable, Achievable, Relevant, Time-bound) للمريض." },
              { text: "إشراك المريض في الخطة", requirement: "تعلم كيفية تحديد الأولويات بناءً على احتياجات المريض اليومية." }
            ], 
            resources: [
              { title: "Goal Setting in Rehab", url: "https://www.physio-pedia.com/Goal_Setting_in_Rehabilitation" }
            ],
            tip: "الهدف الواضح هو طريق النجاح." 
          },
          { 
            id: "6_4_5", 
            name: "التوثيق القانوني والطبي", 
            topic: "Assessment", 
            badge: "الأربعاء", 
            tasks: [
              { text: "كتابة تقرير الخروج (Discharge)", requirement: "تلخيص نتائج العلاج والتوصيات النهائية للمريض." },
              { text: "فهم أخلاقيات المهنة", requirement: "دراسة سرية معلومات المريض وحقوقه." }
            ], 
            resources: [
              { title: "Ethics in Physiotherapy", url: "https://www.physio-pedia.com/Ethics" }
            ],
            tip: "كن مهنياً في كل كلمة تكتبها." 
          },
          { 
            id: "6_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تقييم حالة كاملة من الصفر", requirement: "إجراء تقييم شامل (تاريخ، فحص، اختبارات، أهداف) لزميل." },
              { text: "عرض الحالة (Case Presentation)", requirement: "شرح الحالة والتشخيص المقترح وخطة العلاج في 5 دقائق." }
            ], 
            resources: [
              { title: "Clinical Assessment Checklist", url: "https://www.physio-pedia.com/Clinical_Assessment" }
            ],
            tip: "أنت الآن جاهز لبدء علاج الأمراض." 
          },
          { 
            id: "6_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة مرحلة التأسيس", requirement: "التأكد من هضم كل ما سبق (تشريح، ميكانيكا، فسيولوجيا، تقييم)." },
              { text: "احتفال", requirement: "لقد أتممت أول 6 أشهر من رحلتك نحو الخبرة!" }
            ], 
            resources: [],
            tip: "القادم هو التطبيق العملي على الأمراض." 
          }
        ] 
      }
    ] 
  },
  // Phase 2: Regional Pathologies (7-12)
  { 
    id: 6, 
    name: "شهر 7 — أمراض الكتف (Shoulder Pathologies)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Subacromial Pain Syndrome (SAPS)", 
        days: [
          { 
            id: "7_1_1", 
            name: "متلازمة الانحشار (Impingement)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Neer's stages", requirement: "فهم المراحل الثلاث للانحشار (Edema, Fibrosis, Bone spurs)." },
              { text: "الفرق بين الـ Internal & External impingement", requirement: "دراسة ميكانيكا كل نوع والأنسجة المتضررة." }
            ], 
            resources: [
              { title: "Shoulder Impingement", url: "https://www.physio-pedia.com/Shoulder_Impingement" }
            ],
            tip: "الكتف يحتاج مساحة للحركة بدون ألم." 
          },
          { 
            id: "7_1_2", 
            name: "التهاب الأوتار (Tendinopathy)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Supraspinatus tendinitis", requirement: "فهم لماذا يعتبر وتر العضلة فوق الشوكية هو الأكثر عرضة للإصابة." },
              { text: "فهم الـ Calcific Tendonitis", requirement: "دراسة ترسب الكالسيوم في الأوتار وأعراضه الحادة." }
            ], 
            resources: [
              { title: "Rotator Cuff Tendinopathy", url: "https://www.physio-pedia.com/Rotator_Cuff_Tendinopathy" }
            ],
            tip: "الأوتار تحتاج حملاً تدريجياً للتعافي." 
          },
          { 
            id: "7_1_3", 
            name: "التهاب الجراب (Bursitis)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Subacromial Bursitis", requirement: "التمييز بين ألم الوتر وألم الجراب (Bursa)." },
              { text: "فهم الـ Painful Arc", requirement: "دراسة المدى الحركي الذي يظهر فيه الألم (60-120 درجة)." }
            ], 
            resources: [
              { title: "Subacromial Bursitis", url: "https://www.physio-pedia.com/Subacromial_Bursitis" }
            ],
            tip: "الجراب الملتهب يسبب ألماً ليلياً شديداً." 
          },
          { 
            id: "7_1_4", 
            name: "التقييم السريري لـ SAPS", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Hawkins-Kennedy test", requirement: "تعلم كيفية أداء الاختبار بدقة وحساسيته." },
              { text: "تطبيق Empty Can test", requirement: "اختبار قوة وتر الـ Supraspinatus." }
            ], 
            resources: [
              { title: "SAPS Assessment Video", url: "https://www.youtube.com/results?search_query=saps+assessment+physiotherapy" }
            ],
            tip: "استخدم مجموعة من الاختبارات للوصول للنتيجة." 
          },
          { 
            id: "7_1_5", 
            name: "بروتوكول العلاج (Phase 1)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Scapular setting", requirement: "تعلم كيفية إعادة توازن حركة لوح الكتف." },
              { text: "تعديل النشاط (Activity Modification)", requirement: "تعليم المريض كيفية تجنب الحركات التي تزيد الانحشار." }
            ], 
            resources: [
              { title: "Shoulder Rehab Exercises", url: "https://www.physio-pedia.com/Shoulder_Impingement_Rehabilitation" }
            ],
            tip: "ابدأ بتمارين لا تسبب ألماً." 
          },
          { 
            id: "7_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Scapular Assistance Test", requirement: "ملاحظة إذا كان تحريك لوح الكتف يقلل ألم المريض." },
              { text: "تعليم تمارين الـ Isometric", requirement: "تطبيق انقباضات ثابتة لعضلات الـ Rotator Cuff." }
            ], 
            resources: [
              { title: "Shoulder Practical Skills", url: "https://www.youtube.com/results?search_query=shoulder+impingement+physiotherapy+practical" }
            ],
            tip: "الـ Scapula هي قاعدة حركة الكتف." 
          },
          { 
            id: "7_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الـ SAPS", requirement: "التأكد من فهم ميكانيكا الانحشار وعلاقتها بالوضعية (Posture)." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "الكتف يحتاج صبراً في العلاج." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Rotator Cuff Tears & Biceps Tendon", 
        days: [
          { 
            id: "7_2_1", 
            name: "تمزق الكفة المدورة", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "الفرق بين الـ Partial & Full thickness tears", requirement: "دراسة الأعراض السريرية لكل نوع وتأثيره على القوة." },
              { text: "فهم الـ Massive Rotator Cuff Tear", requirement: "دراسة الحالات التي تشمل أكثر من وتر واحد." }
            ], 
            resources: [
              { title: "Rotator Cuff Tears", url: "https://www.physio-pedia.com/Rotator_Cuff_Tears" }
            ],
            tip: "التمزق لا يعني دائماً الجراحة." 
          },
          { 
            id: "7_2_2", 
            name: "مشاكل وتر البايسبس", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Biceps Tendinopathy", requirement: "فهم التهاب الرأس الطويل لعضلة البايسبس في الـ Bicipital groove." },
              { text: "فهم الـ Biceps Rupture (Popeye sign)", requirement: "دراسة شكل العضلة عند تمزق الوتر بالكامل." }
            ], 
            resources: [
              { title: "Biceps Tendonitis", url: "https://www.physio-pedia.com/Biceps_Tendinopathy" }
            ],
            tip: "وتر البايسبس يساعد في ثبات الكتف." 
          },
          { 
            id: "7_2_3", 
            name: "إصابات الـ SLAP", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ SLAP Lesion", requirement: "دراسة تمزق الغضروف (Labrum) في الجزء العلوي حيث يتصل وتر البايسبس." },
              { text: "تصنيف الـ SLAP (Type I-IV)", requirement: "فهم الفرق بين الأنواع الأربعة الأساسية للتمزق." }
            ], 
            resources: [
              { title: "SLAP Lesion Guide", url: "https://www.physio-pedia.com/SLAP_Lesion" }
            ],
            tip: "إصابات الـ SLAP شائعة عند الرياضيين الذين يرمون الكرة." 
          },
          { 
            id: "7_2_4", 
            name: "التقييم السريري للتمزق", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Drop Arm test", requirement: "اختبار قدرة المريض على التحكم في نزول الذراع (لتمزق الـ Supraspinatus)." },
              { text: "تطبيق Speed's test", requirement: "اختبار وتر البايسبس." }
            ], 
            resources: [
              { title: "Rotator Cuff Assessment Video", url: "https://www.youtube.com/results?search_query=rotator+cuff+tear+assessment+physiotherapy" }
            ],
            tip: "الضعف الشديد مع الألم يشير لتمزق." 
          },
          { 
            id: "7_2_5", 
            name: "بروتوكول العلاج (Phase 2)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Rotator Cuff Strengthening", requirement: "تطبيق تمارين الـ External & Internal rotation باستخدام الأستك (Theraband)." },
              { text: "فهم الـ Closed Kinetic Chain exercises", requirement: "تطبيق تمارين الضغط على الحائط لزيادة الثبات." }
            ], 
            resources: [
              { title: "Rotator Cuff Rehab", url: "https://www.physio-pedia.com/Rotator_Cuff_Tears_Rehabilitation" }
            ],
            tip: "التقوية يجب أن تكون تدريجية وبدون ألم." 
          },
          { 
            id: "7_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ O'Brien's test", requirement: "اختبار الـ SLAP lesion بدقة." },
              { text: "تعليم تمارين الـ Eccentric", requirement: "تطبيق تمارين النزول البطيء لتقوية الأوتار." }
            ], 
            resources: [
              { title: "Shoulder Special Tests Video", url: "https://www.youtube.com/results?search_query=slap+lesion+test+physiotherapy" }
            ],
            tip: "الاختبارات السريرية توجهك لنوع الإصابة." 
          },
          { 
            id: "7_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة التمزقات", requirement: "فهم متى يجب تحويل المريض للجراحة (Red flags for surgery)." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "ليس كل تمزق يحتاج جراحة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Frozen Shoulder & Instability", 
        days: [
          { 
            id: "7_3_1", 
            name: "الكتف المتجمد (Adhesive Capsulitis)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة مراحل الـ Frozen Shoulder", requirement: "فهم مراحل الـ Freezing, Frozen, and Thawing." },
              { text: "فهم الـ Capsular Pattern", requirement: "دراسة فقدان الحركة المميز (ER > Abd > IR)." }
            ], 
            resources: [
              { title: "Adhesive Capsulitis", url: "https://www.physio-pedia.com/Adhesive_Capsulitis" }
            ],
            tip: "الكتف المتجمد يحتاج وقتاً طويلاً (شهور)." 
          },
          { 
            id: "7_3_2", 
            name: "عدم ثبات الكتف (Instability)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ TUBS vs AMBRI", requirement: "الفرق بين عدم الثبات الناتج عن إصابة (Traumatic) والناتج عن ليونة الأربطة (Atraumatic)." },
              { text: "دراسة الـ Bankart & Hill-Sachs lesions", requirement: "فهم الإصابات العظمية والغضروفية المصاحبة للخلع." }
            ], 
            resources: [
              { title: "Shoulder Instability", url: "https://www.physio-pedia.com/Shoulder_Instability" }
            ],
            tip: "الخلع المتكرر يضعف المفصل." 
          },
          { 
            id: "7_3_3", 
            name: "مشاكل الـ AC Joint", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة AC Joint Sprain", requirement: "فهم درجات الإصابة (Grade I-VI) لمفصل الترقوة مع لوح الكتف." },
              { text: "فهم الـ Step-off deformity", requirement: "ملاحظة بروز الترقوة عند التمزق الكامل للأربطة." }
            ], 
            resources: [
              { title: "AC Joint Injury", url: "https://www.physio-pedia.com/Acromioclavicular_Joint_Injury" }
            ],
            tip: "إصابات الـ AC Joint شائعة عند السقوط المباشر على الكتف." 
          },
          { 
            id: "7_3_4", 
            name: "التقييم السريري", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Apprehension test", requirement: "اختبار خوف المريض من حدوث خلع (لعدم الثبات الأمامي)." },
              { text: "تطبيق Sulcus sign", requirement: "اختبار عدم الثبات السفلي." }
            ], 
            resources: [
              { title: "Shoulder Instability Assessment", url: "https://www.youtube.com/results?search_query=shoulder+instability+assessment+physiotherapy" }
            ],
            tip: "الكتف المتجمد يفقد الحركة السلبية والنشطة." 
          },
          { 
            id: "7_3_5", 
            name: "بروتوكول العلاج (Phase 3)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Proprioception", requirement: "تطبيق تمارين التوازن الحركي للكتف باستخدام الكرة السويسرية." },
              { text: "تمارين الـ Joint Mobilization", requirement: "تعلم تحريك المفصل لزيادة المدى الحركي في حالات التيبس." }
            ], 
            resources: [
              { title: "Shoulder Mobilization Techniques", url: "https://www.physio-pedia.com/Shoulder_Mobilisation" }
            ],
            tip: "التحريك اليدوي يقلل الألم ويزيد الحركة." 
          },
          { 
            id: "7_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق Maitland Grade I & II", requirement: "تطبيق تحريك بسيط لتقليل الألم في الكتف الملتهب." },
              { text: "تعليم تمارين الـ Codman's Pendulum", requirement: "تطبيق تمارين البندول لزيادة الحركة بدون حمل." }
            ], 
            resources: [
              { title: "Codman's Exercises Video", url: "https://www.youtube.com/results?search_query=codman+pendulum+exercises+physiotherapy" }
            ],
            tip: "تمارين البندول هي الأفضل في البداية." 
          },
          { 
            id: "7_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة التيبس وعدم الثبات", requirement: "الفرق الجوهري في العلاج بين الكتف المتصلب والكتف اللين." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "لا تشد على الكتف المتجمد في المرحلة الملتهبة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Post-Op Rehab & Advanced Shoulder", 
        days: [
          { 
            id: "7_4_1", 
            name: "تأهيل ما بعد جراحة الكفة المدورة", 
            topic: "Post-Op", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Protection Phase", requirement: "دراسة الاحتياطات في أول 6 أسابيع بعد العملية (No active movement)." },
              { text: "دراسة الـ Healing timeline", requirement: "فهم متى يمكن البدء بالتقوية النشطة." }
            ], 
            resources: [
              { title: "Rotator Cuff Post-Op Protocol", url: "https://www.physio-pedia.com/Rotator_Cuff_Repair_Rehabilitation" }
            ],
            tip: "احترم الجراح واحترم الأنسجة المرممة." 
          },
          { 
            id: "7_4_2", 
            name: "تأهيل ما بعد جراحة الـ Bankart", 
            topic: "Post-Op", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Stabilization protocol", requirement: "دراسة كيفية استعادة الثبات بعد جراحة تثبيت المفصل." },
              { text: "تجنب الـ Combined ER & Abduction", requirement: "فهم الوضعيات الخطرة في المرحلة الأولى." }
            ], 
            resources: [
              { title: "Bankart Repair Rehab", url: "https://www.physio-pedia.com/Bankart_Repair_Rehabilitation" }
            ],
            tip: "الثبات هو الهدف الأول بعد الخلع." 
          },
          { 
            id: "7_4_3", 
            name: "تغيير مفصل الكتف (TSA)", 
            topic: "Post-Op", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Total Shoulder Arthroplasty", requirement: "دراسة تأهيل تغيير المفصل الكامل." },
              { text: "فهم الـ Reverse Shoulder Arthroplasty", requirement: "لماذا نستخدم المفصل العكسي عند تمزق الكفة المدورة بالكامل؟" }
            ], 
            resources: [
              { title: "Shoulder Arthroplasty Rehab", url: "https://www.physio-pedia.com/Shoulder_Arthroplasty" }
            ],
            tip: "المفصل العكسي يعتمد على العضلة الدالية (Deltoid)." 
          },
          { 
            id: "7_4_4", 
            name: "الكتف والرياضة", 
            topic: "Sports", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة الـ Thrower's Shoulder", requirement: "فهم التكيفات الحركية عند لاعبي التنس والكرة الطائرة." },
              { text: "فهم الـ GIRD", requirement: "دراسة نقص الدوران الداخلي (Glenohumeral Internal Rotation Deficit)." }
            ], 
            resources: [
              { title: "The Athletic Shoulder", url: "https://www.physio-pedia.com/The_Athletic_Shoulder" }
            ],
            tip: "الرياضي يحتاج مدى حركي وقوة انفجارية." 
          },
          { 
            id: "7_4_5", 
            name: "تحليل الحالات المعقدة", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "التمييز بين ألم الرقبة والكتف", requirement: "كيف تعرف إذا كان الألم مصدره الفقرات العنقية أم مفصل الكتف؟" },
              { text: "دراسة الـ Scapular Dyskinesis", requirement: "فهم أنواع اضطراب حركة لوح الكتف وعلاقتها بالألم." }
            ], 
            resources: [
              { title: "Cervical vs Shoulder Pain", url: "https://www.physio-pedia.com/Differential_Diagnosis_of_Shoulder_Pain" }
            ],
            tip: "افحص الرقبة دائماً عند وجود ألم في الكتف." 
          },
          { 
            id: "7_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم برنامج تأهيل رياضي", requirement: "وضع خطة لعودة لاعب كرة يد للملاعب بعد إصابة impingement." },
              { text: "تطبيق الـ Sleeper Stretch", requirement: "تعلم كيفية زيادة الـ Internal rotation بأمان." }
            ], 
            resources: [
              { title: "Shoulder Advanced Rehab Video", url: "https://www.youtube.com/results?search_query=advanced+shoulder+rehab+physiotherapy" }
            ],
            tip: "العودة للملعب تحتاج اختبارات وظيفية." 
          },
          { 
            id: "7_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الكتف", requirement: "التأكد من القدرة على تشخيص وعلاج أشهر 5 إصابات في الكتف." },
              { text: "راحة", requirement: "استعد لشهر الكوع واليد." }
            ], 
            resources: [],
            tip: "أصبحت الآن خبيراً في مشاكل الكتف!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 7, 
    name: "شهر 8 — أمراض الكوع واليد (Elbow & Hand Pathologies)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Elbow Tendinopathies & Ligaments", 
        days: [
          { 
            id: "8_1_1", 
            name: "مرفق التنس (Lateral Epicondylitis)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Lateral Epicondylalgia", requirement: "فهم التهاب منشأ العضلات الباسطة (Extensors) عند الكوع." },
              { text: "فهم دور عضلة الـ ECRB", requirement: "لماذا تعتبر هذه العضلة هي الأكثر تضرراً في مرفق التنس؟" }
            ], 
            resources: [
              { title: "Lateral Epicondylitis", url: "https://www.physio-pedia.com/Lateral_Epicondylitis" }
            ],
            tip: "الألم يزداد مع القبض القوي على الأشياء." 
          },
          { 
            id: "8_1_2", 
            name: "مرفق الجولف (Medial Epicondylitis)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Medial Epicondylalgia", requirement: "فهم التهاب منشأ العضلات القابضة (Flexors) عند الكوع." },
              { text: "الفرق بين مرفق التنس والجولف", requirement: "مقارنة مكان الألم والحركات المسببة له." }
            ], 
            resources: [
              { title: "Medial Epicondylitis", url: "https://www.physio-pedia.com/Medial_Epicondylitis" }
            ],
            tip: "ألم مرفق الجولف يظهر في الجهة الداخلية للكوع." 
          },
          { 
            id: "8_1_3", 
            name: "إصابات الأربطة (UCL & RCL)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة UCL Injury (Tommy John)", requirement: "فهم تمزق الرباط الداخلي للكوع عند لاعبي الرمي." },
              { text: "فهم الـ Valgus Stress", requirement: "دراسة القوة التي تسبب تمزق الرباط الداخلي." }
            ], 
            resources: [
              { title: "Ulnar Collateral Ligament Injury", url: "https://www.physio-pedia.com/Ulnar_Collateral_Ligament_Injuries" }
            ],
            tip: "الرباط الداخلي هو الأهم لثبات الكوع." 
          },
          { 
            id: "8_1_4", 
            name: "التقييم السريري للكوع", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Cozen's test", requirement: "اختبار مرفق التنس بدقة." },
              { text: "تطبيق Valgus Stress test", requirement: "اختبار ثبات الرباط الداخلي." }
            ], 
            resources: [
              { title: "Elbow Assessment Video", url: "https://www.youtube.com/results?search_query=elbow+assessment+physiotherapy" }
            ],
            tip: "الجس الدقيق يحدد مكان الالتهاب." 
          },
          { 
            id: "8_1_5", 
            name: "بروتوكول العلاج (Phase 1)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Eccentric Loading", requirement: "تطبيق تمارين النزول البطيء لعضلات الرسغ لتقوية أوتار الكوع." },
              { text: "استخدام الـ Counterforce Brace", requirement: "فهم كيفية عمل الرباط الضاغط في تقليل الحمل على الوتر." }
            ], 
            resources: [
              { title: "Tennis Elbow Rehab", url: "https://www.physio-pedia.com/Lateral_Epicondylitis_Rehabilitation" }
            ],
            tip: "الحمل التدريجي هو مفتاح علاج الأوتار." 
          },
          { 
            id: "8_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق Mill's test", requirement: "اختبار إطالة العضلات الباسطة لتشخيص مرفق التنس." },
              { text: "تعليم تمارين الـ Tyler Twist", requirement: "استخدام الـ FlexBar لتقوية أوتار الكوع." }
            ], 
            resources: [
              { title: "Tyler Twist Exercise Video", url: "https://www.youtube.com/results?search_query=tyler+twist+exercise" }
            ],
            tip: "الـ FlexBar أداة فعالة جداً لمرفق التنس." 
          },
          { 
            id: "8_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة إصابات الكوع", requirement: "التأكد من فهم الفرق بين مشاكل الأوتار ومشاكل الأربطة." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "الكوع مفصل بسيط لكن إصاباته مزمنة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Nerve Entrapments & Fractures", 
        days: [
          { 
            id: "8_2_1", 
            name: "متلازمة النفق الرسغي (CTS)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Carpal Tunnel Syndrome", requirement: "فهم ضغط العصب المتوسط (Median nerve) عند الرسغ." },
              { text: "فهم الـ Thenar Atrophy", requirement: "ملاحظة ضمور عضلات الإبهام في الحالات المتقدمة." }
            ], 
            resources: [
              { title: "Carpal Tunnel Syndrome", url: "https://www.physio-pedia.com/Carpal_Tunnel_Syndrome" }
            ],
            tip: "التنميل في أول 3 أصابع ونصف يشير للـ CTS." 
          },
          { 
            id: "8_2_2", 
            name: "ضغط العصب الزندي (Cubital Tunnel)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Cubital Tunnel Syndrome", requirement: "فهم ضغط العصب الزندي (Ulnar nerve) عند الكوع." },
              { text: "فهم الـ Claw Hand", requirement: "دراسة شكل اليد عند إصابة العصب الزندي." }
            ], 
            resources: [
              { title: "Cubital Tunnel Syndrome", url: "https://www.physio-pedia.com/Cubital_Tunnel_Syndrome" }
            ],
            tip: "التنميل في الخنصر والبنصر يشير للعصب الزندي." 
          },
          { 
            id: "8_2_3", 
            name: "كسور الكوع والرسغ", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Colles' Fracture", requirement: "فهم كسر نهاية عظمة الكعبرة (Radius) عند السقوط على اليد." },
              { text: "دراسة Scaphoid Fracture", requirement: "فهم خطورة كسر عظمة الزورقية وتأثيرها على التروية الدموية." }
            ], 
            resources: [
              { title: "Wrist Fractures", url: "https://www.physio-pedia.com/Colles_Fracture" }
            ],
            tip: "ألم في الـ Anatomical Snuffbox قد يعني كسر الزورقية." 
          },
          { 
            id: "8_2_4", 
            name: "التقييم السريري للأعصاب", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Phalen's test", requirement: "اختبار النفق الرسغي بوضع اليدين في وضع الانثناء." },
              { text: "تطبيق Tinel's sign", requirement: "النقر على العصب لإثارة التنميل." }
            ], 
            resources: [
              { title: "Wrist Nerve Assessment", url: "https://www.youtube.com/results?search_query=carpal+tunnel+assessment+physiotherapy" }
            ],
            tip: "الاختبارات العصبية تؤكد مكان الضغط." 
          },
          { 
            id: "8_2_5", 
            name: "بروتوكول العلاج (Phase 2)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Nerve Gliding", requirement: "تطبيق تمارين تحريك العصب المتوسط والزندي لتقليل الالتصاقات." },
              { text: "استخدام الـ Wrist Splint", requirement: "فهم دور الجبيرة الليلية في تقليل أعراض الـ CTS." }
            ], 
            resources: [
              { title: "Nerve Gliding Exercises", url: "https://www.physio-pedia.com/Nerve_Gliding_Exercises" }
            ],
            tip: "الأعصاب تحب الحركة اللطيفة لا الشد العنيف." 
          },
          { 
            id: "8_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Froment's sign", requirement: "اختبار قوة العصب الزندي باستخدام ورقة." },
              { text: "تعليم تمارين تقوية اليد", requirement: "استخدام الـ Putty أو الـ Hand gripper لزيادة قوة القبضة." }
            ], 
            resources: [
              { title: "Hand Rehab Exercises Video", url: "https://www.youtube.com/results?search_query=hand+physiotherapy+exercises" }
            ],
            tip: "قوة القبضة تعكس صحة اليد العامة." 
          },
          { 
            id: "8_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الأعصاب والكسور", requirement: "التأكد من معرفة متى يجب تحويل المريض للجراحة في حالات الكسور." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "التشخيص المبكر للكسور يمنع التشوهات." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Hand Tendons & De Quervain's", 
        days: [
          { 
            id: "8_3_1", 
            name: "متلازمة دي كيرفان (De Quervain's)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة De Quervain's Tenosynovitis", requirement: "فهم التهاب غمد أوتار الإبهام (APL & EPB)." },
              { text: "فهم أسباب الإصابة", requirement: "دراسة الحركات المتكررة للإبهام التي تسبب هذا الالتهاب." }
            ], 
            resources: [
              { title: "De Quervain's Tenosynovitis", url: "https://www.physio-pedia.com/De_Quervain's_Tenosynovitis" }
            ],
            tip: "الألم يتركز عند قاعدة الإبهام من جهة الرسغ." 
          },
          { 
            id: "8_3_2", 
            name: "الإصبع الزنادي (Trigger Finger)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Stenosing Tenosynovitis", requirement: "فهم كيفية تعليق الوتر داخل الغمد (Pulley) وصعوبة فرد الإصبع." },
              { text: "فهم الـ Nodule formation", requirement: "جس العقدة الصغيرة التي تسبب تعليق الإصبع." }
            ], 
            resources: [
              { title: "Trigger Finger Guide", url: "https://www.physio-pedia.com/Trigger_Finger" }
            ],
            tip: "الإصبع يفتح فجأة بصوت طقطقة." 
          },
          { 
            id: "8_3_3", 
            name: "إصابات الـ Mallet & Jersey Finger", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Mallet Finger", requirement: "فهم تمزق وتر العضلة الباسطة عند طرف الإصبع (Baseball finger)." },
              { text: "دراسة Jersey Finger", requirement: "فهم تمزق وتر العضلة القابضة العميقة (FDP)." }
            ], 
            resources: [
              { title: "Hand Tendon Injuries", url: "https://www.physio-pedia.com/Mallet_Finger" }
            ],
            tip: "إصابات الأوتار في اليد تحتاج جبائر دقيقة جداً." 
          },
          { 
            id: "8_3_4", 
            name: "التقييم السريري لليد", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Finkelstein's test", requirement: "اختبار متلازمة دي كيرفان بدقة." },
              { text: "اختبار الـ FDS & FDP tendons", requirement: "تعلم كيفية عزل كل وتر واختباره منفرداً." }
            ], 
            resources: [
              { title: "Hand Special Tests", url: "https://www.youtube.com/results?search_query=hand+special+tests+physiotherapy" }
            ],
            tip: "الدقة في عزل الأوتار هي مهارة المعالج الخبير." 
          },
          { 
            id: "8_3_5", 
            name: "بروتوكول العلاج (Phase 3)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Tendon Gliding", requirement: "تطبيق سلسلة حركات اليد (Hook, Fist, Tabletop) لتحريك الأوتار." },
              { text: "استخدام الـ Thumb Spica", requirement: "فهم دور الجبيرة في إراحة أوتار الإبهام." }
            ], 
            resources: [
              { title: "Tendon Gliding Exercises", url: "https://www.physio-pedia.com/Tendon_Gliding_Exercises" }
            ],
            tip: "تحريك الأوتار يمنع التيبس بعد الإصابة." 
          },
          { 
            id: "8_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Bunnel-Littler test", requirement: "التمييز بين تيبس المفصل وقصر العضلات الصغيرة (Intrinsic muscles)." },
              { text: "تعليم تمارين الـ Fine Motor Skills", requirement: "استخدام الخرز أو الأزرار لتحسين المهارات الدقيقة لليد." }
            ], 
            resources: [
              { title: "Hand Dexterity Exercises", url: "https://www.youtube.com/results?search_query=hand+dexterity+exercises+physiotherapy" }
            ],
            tip: "اليد هي أداة الإنسان للتواصل مع العالم." 
          },
          { 
            id: "8_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أوتار اليد", requirement: "التأكد من فهم ميكانيكا حركة الأصابع المعقدة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "تشريح اليد هو الأكثر تعقيداً في الجسم." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Rheumatoid Arthritis & Post-Op Hand", 
        days: [
          { 
            id: "8_4_1", 
            name: "الروماتويد واليد (RA)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Rheumatoid Arthritis in Hand", requirement: "فهم التشوهات المميزة (Ulnar drift, Boutonniere, Swan neck)." },
              { text: "فهم الـ Joint Protection techniques", requirement: "تعليم المريض كيفية استخدام مفاصله الكبيرة بدلاً من الصغيرة." }
            ], 
            resources: [
              { title: "Rheumatoid Arthritis Hand", url: "https://www.physio-pedia.com/Rheumatoid_Arthritis" }
            ],
            tip: "الهدف هو الحفاظ على الوظيفة ومنع زيادة التشوه." 
          },
          { 
            id: "8_4_2", 
            name: "خشونة مفاصل اليد (OA)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Osteoarthritis of the Hand", requirement: "فهم الـ Heberden's & Bouchard's nodes عند مفاصل الأصابع." },
              { text: "فهم الـ CMC Joint OA", requirement: "دراسة خشونة قاعدة الإبهام وتأثيرها على القبضة." }
            ], 
            resources: [
              { title: "Hand Osteoarthritis", url: "https://www.physio-pedia.com/Hand_Osteoarthritis" }
            ],
            tip: "الخشونة تسبب تيبساً صباحياً يقل مع الحركة." 
          },
          { 
            id: "8_4_3", 
            name: "تأهيل ما بعد جراحة الأوتار", 
            topic: "Post-Op", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Flexor Tendon Repair protocols", requirement: "دراسة بروتوكولات (Kleinert or Duran) للحركة المبكرة المحمية." },
              { text: "تجنب الـ Active flexion المبكر", requirement: "فهم لماذا قد ينقطع الوتر المرمم إذا انقبضت العضلة بقوة." }
            ], 
            resources: [
              { title: "Flexor Tendon Repair Rehab", url: "https://www.physio-pedia.com/Flexor_Tendon_Repair" }
            ],
            tip: "تأهيل أوتار اليد هو فن التوازن بين الحركة والحماية." 
          },
          { 
            id: "8_4_4", 
            name: "إصابات الـ TFCC", 
            topic: "Pathology", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة TFCC Lesion", requirement: "فهم تمزق الغضروف والرباط في الجهة الزندية للرسغ (Ulnar side)." },
              { text: "فهم الـ Ulnar Fovea sign", requirement: "جس المنطقة الحساسة لتشخيص إصابة الـ TFCC." }
            ], 
            resources: [
              { title: "TFCC Injury Guide", url: "https://www.physio-pedia.com/Triangular_Fibrocartilage_Complex_Injuries" }
            ],
            tip: "ألم مع الدوران (Supination/Pronation) يشير للـ TFCC." 
          },
          { 
            id: "8_4_5", 
            name: "تحليل الحالات المعقدة", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "التمييز بين ألم الكوع والرسغ", requirement: "كيف يمكن لمشكلة في الكوع أن تسبب ألماً في اليد (Referral pain)؟" },
              { text: "دراسة الـ CRPS في اليد", requirement: "فهم متلازمة الألم الإقليمي المعقد بعد الكسور أو الجراحات." }
            ], 
            resources: [
              { title: "CRPS in Hand", url: "https://www.physio-pedia.com/Complex_Regional_Pain_Syndrome" }
            ],
            tip: "الألم غير المتناسب مع الإصابة قد يكون CRPS." 
          },
          { 
            id: "8_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم برنامج تأهيل لكسر Colles", requirement: "وضع خطة لاستعادة حركة الرسغ بعد فك الجبس." },
              { text: "تطبيق الـ Contrast Bath", requirement: "تعلم كيفية استخدام الماء البارد والساخن لتقليل التورم في اليد." }
            ], 
            resources: [
              { title: "Wrist Post-Fracture Rehab Video", url: "https://www.youtube.com/results?search_query=wrist+fracture+rehab+physiotherapy" }
            ],
            tip: "استعادة حركة الرسغ تحتاج صبراً وتمارين يومية." 
          },
          { 
            id: "8_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الكوع واليد", requirement: "التأكد من القدرة على التعامل مع الإصابات الرياضية والمهنية للطرف العلوي." },
              { text: "راحة", requirement: "استعد لشهر الورك." }
            ], 
            resources: [],
            tip: "لقد أتممت دراسة الطرف العلوي بالكامل!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 8, 
    name: "شهر 9 — أمراض الورك (Hip Pathologies)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Hip Osteoarthritis & Labral Tears", 
        days: [
          { 
            id: "9_1_1", 
            name: "خشونة مفصل الورك (Hip OA)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة معايير الـ ACR للـ Hip OA", requirement: "فهم كيفية تشخيص الخشونة بناءً على الألم والمدى الحركي (IR < 15)." },
              { text: "فهم الـ Capsular Pattern للورك", requirement: "دراسة فقدان الحركة المميز (Flexion > IR > Abduction)." }
            ], 
            resources: [
              { title: "Hip Osteoarthritis", url: "https://www.physio-pedia.com/Hip_Osteoarthritis" }
            ],
            tip: "الورك مفصل عميق، الألم غالباً ما يظهر في منطقة العانة (Groin)." 
          },
          { 
            id: "9_1_2", 
            name: "تمزق الغضروف (Labral Tears)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Acetabular Labral Tears", requirement: "فهم وظيفة الغضروف في زيادة عمق المفصل وأعراض تمزقه." },
              { text: "فهم الـ Clicking & Catching", requirement: "دراسة الأعراض الميكانيكية التي يشكو منها المريض." }
            ], 
            resources: [
              { title: "Hip Labral Tear", url: "https://www.physio-pedia.com/Hip_Labral_Tear" }
            ],
            tip: "الألم يزداد مع الحركات الدورانية المفاجئة." 
          },
          { 
            id: "9_1_3", 
            name: "انحشار الورك (FAI)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Cam vs Pincer lesions", requirement: "الفرق بين بروز عظمة الفخذ (Cam) وبروز حافة الحوض (Pincer)." },
              { text: "دراسة الـ C-sign", requirement: "ملاحظة كيفية إشارة المريض لمكان الألم حول مفصل الورك." }
            ], 
            resources: [
              { title: "Femoroacetabular Impingement", url: "https://www.physio-pedia.com/Femoroacetabular_Impingement" }
            ],
            tip: "الـ FAI هو السبب الرئيسي لتمزق الغضروف عند الشباب." 
          },
          { 
            id: "9_1_4", 
            name: "التقييم السريري للورك", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق FADIR test", requirement: "اختبار الانحشار وتمزق الغضروف الأمامي." },
              { text: "تطبيق FABER (Patrick's) test", requirement: "التمييز بين ألم الورك وألم الـ SIJ." }
            ], 
            resources: [
              { title: "Hip Assessment Video", url: "https://www.youtube.com/results?search_query=hip+assessment+physiotherapy" }
            ],
            tip: "المدى الحركي للورك يقل بشكل ملحوظ في الخشونة." 
          },
          { 
            id: "9_1_5", 
            name: "بروتوكول العلاج (Phase 1)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Hip Mobilization", requirement: "تطبيق تحريك المفصل (Long axis traction) لتقليل الألم وزيادة المدى." },
              { text: "تقوية عضلات الـ Glutes", requirement: "تطبيق تمارين الـ Clamshells والـ Bridges لزيادة ثبات المفصل." }
            ], 
            resources: [
              { title: "Hip OA Rehabilitation", url: "https://www.physio-pedia.com/Hip_Osteoarthritis_Rehabilitation" }
            ],
            tip: "تقوية العضلات المحيطة بالورك تقلل الحمل على المفصل." 
          },
          { 
            id: "9_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Scouring test", requirement: "اختبار سلامة سطح المفصل والغضروف." },
              { text: "تعليم تمارين الـ Hip Flexor Stretch", requirement: "تطبيق إطالة عضلات الـ Iliopsoas بأمان." }
            ], 
            resources: [
              { title: "Hip Special Tests Video", url: "https://www.youtube.com/results?search_query=hip+special+tests+physiotherapy" }
            ],
            tip: "الـ Scouring test يعطي فكرة عن حالة الغضروف." 
          },
          { 
            id: "9_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الخشونة والانحشار", requirement: "التأكد من فهم العلاقة بين شكل العظام وتطور الخشونة." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "الورك مفصل يحمل وزن الجسم، الراحة جزء من العلاج." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Trochanteric Pain & Muscle Strains", 
        days: [
          { 
            id: "9_2_1", 
            name: "متلازمة الألم الحرقفي (GTPS)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Greater Trochanteric Pain Syndrome", requirement: "فهم التهاب أوتار الـ Gluteus Medius والـ Bursitis الجانبي." },
              { text: "فهم الـ Trendelenburg sign", requirement: "ملاحظة سقوط الحوض عند المشي بسبب ضعف العضلات المبعدة." }
            ], 
            resources: [
              { title: "GTPS Guide", url: "https://www.physio-pedia.com/Greater_Trochanteric_Pain_Syndrome" }
            ],
            tip: "الألم يظهر عند النوم على الجانب المصاب." 
          },
          { 
            id: "9_2_2", 
            name: "تمزق عضلات الـ Hamstrings", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Hamstring Strains", requirement: "فهم درجات التمزق (Grade I-III) ومكان الإصابة الشائع (MTJ)." },
              { text: "فهم الـ Avulsion fracture", requirement: "دراسة انفصال جزء من العظمة مع الوتر عند الرياضيين." }
            ], 
            resources: [
              { title: "Hamstring Strain", url: "https://www.physio-pedia.com/Hamstring_Strain" }
            ],
            tip: "تمزق الهامسترنج يحدث غالباً أثناء الجري السريع." 
          },
          { 
            id: "9_2_3", 
            name: "تمزق عضلات الـ Groin (Adductors)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Adductor Strains", requirement: "فهم إصابات العضلات الضامة عند لاعبي كرة القدم." },
              { text: "فهم الـ Osteitis Pubis", requirement: "دراسة التهاب عظمة العانة وأعراضه المشابهة لتمزق العضلات." }
            ], 
            resources: [
              { title: "Groin Strain", url: "https://www.physio-pedia.com/Groin_Strain" }
            ],
            tip: "ألم العضلات الضامة يزداد مع تغيير الاتجاه المفاجئ." 
          },
          { 
            id: "9_2_4", 
            name: "التقييم السريري للعضلات", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Thomas test", requirement: "اختبار قصر عضلات الـ Hip Flexors." },
              { text: "تطبيق Ober's test", requirement: "اختبار شد الـ IT Band." }
            ], 
            resources: [
              { title: "Hip Muscle Assessment", url: "https://www.youtube.com/results?search_query=hip+muscle+assessment+physiotherapy" }
            ],
            tip: "اختبارات القصر العضلي توجهك لبرنامج الإطالات." 
          },
          { 
            id: "9_2_5", 
            name: "بروتوكول العلاج (Phase 2)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Eccentric Hamstring", requirement: "تطبيق تمارين الـ Nordic Curls لتقليل خطر الإصابة." },
              { text: "تقوية الـ Hip Abductors", requirement: "تطبيق تمارين الـ Side-lying leg lift لثبات الحوض." }
            ], 
            resources: [
              { title: "Hamstring Rehab Protocol", url: "https://www.physio-pedia.com/Hamstring_Strain_Rehabilitation" }
            ],
            tip: "التمارين اللامركزية (Eccentric) هي الأفضل للأوتار." 
          },
          { 
            id: "9_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Trendelenburg test", requirement: "تقييم ثبات الحوض أثناء الوقوف على رجل واحدة." },
              { text: "تعليم تمارين الـ Adductor Squeeze", requirement: "تقوية العضلات الضامة باستخدام كرة بين الركبتين." }
            ], 
            resources: [
              { title: "Hip Practical Exercises Video", url: "https://www.youtube.com/results?search_query=hip+physiotherapy+practical+exercises" }
            ],
            tip: "ثبات الحوض هو أساس المشي الصحيح." 
          },
          { 
            id: "9_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة إصابات العضلات", requirement: "التأكد من فهم مراحل الالتئام العضلي (Inflammation, Repair, Remodeling)." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "العضلات تلتئم أسرع من الأربطة بسبب التروية الدموية." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Pediatric Hip & Nerve Issues", 
        days: [
          { 
            id: "9_3_1", 
            name: "مشاكل الورك عند الأطفال (DDH)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Developmental Dysplasia of the Hip", requirement: "فهم خلع الورك الولادي وأهمية التشخيص المبكر." },
              { text: "فهم الـ Ortolani & Barlow maneuvers", requirement: "دراسة اختبارات فحص الورك عند الرضع." }
            ], 
            resources: [
              { title: "Developmental Dysplasia of the Hip", url: "https://www.physio-pedia.com/Developmental_Dysplasia_of_the_Hip" }
            ],
            tip: "التشخيص المبكر يمنع الجراحات المعقدة مستقبلاً." 
          },
          { 
            id: "9_3_2", 
            name: "مرض بيرثيز (Perthes Disease)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Legg-Calvé-Perthes Disease", requirement: "فهم نقص التروية الدموية لرأس عظمة الفخذ عند الأطفال." },
              { text: "فهم الـ SCFE", requirement: "دراسة انزلاق رأس عظمة الفخذ (Slipped Capital Femoral Epiphysis) عند المراهقين." }
            ], 
            resources: [
              { title: "Perthes Disease Guide", url: "https://www.physio-pedia.com/Legg-Calve-Perthes_Disease" }
            ],
            tip: "ألم الركبة عند الطفل قد يكون مصدره الورك." 
          },
          { 
            id: "9_3_3", 
            name: "متلازمة العضلة الكمثرية (Piriformis)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Piriformis Syndrome", requirement: "فهم ضغط العضلة الكمثرية على العصب الوركي (Sciatic nerve)." },
              { text: "الفرق بين الانزلاق الغضروفي والـ Piriformis", requirement: "كيف تميز إذا كان مصدر ألم العصب من الظهر أم من الحوض؟" }
            ], 
            resources: [
              { title: "Piriformis Syndrome", url: "https://www.physio-pedia.com/Piriformis_Syndrome" }
            ],
            tip: "الألم يزداد مع الجلوس الطويل." 
          },
          { 
            id: "9_3_4", 
            name: "التقييم السريري للأعصاب", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق FAIR test", requirement: "اختبار العضلة الكمثرية بوضع (Flexion, Adduction, Internal Rotation)." },
              { text: "تطبيق الـ Pace sign", requirement: "اختبار قوة المبعدات في وضع الجلوس لإثارة ألم الكمثرية." }
            ], 
            resources: [
              { title: "Piriformis Assessment Video", url: "https://www.youtube.com/results?search_query=piriformis+syndrome+assessment+physiotherapy" }
            ],
            tip: "الجس العميق للعضلة الكمثرية يثير الألم." 
          },
          { 
            id: "9_3_5", 
            name: "بروتوكول العلاج (Phase 3)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Sciatic Nerve Gliding", requirement: "تطبيق تحريك العصب الوركي لتقليل التنميل." },
              { text: "إطالات العضلة الكمثرية", requirement: "تطبيق أوضاع الإطالة المختلفة (Figure 4 stretch)." }
            ], 
            resources: [
              { title: "Piriformis Rehab Exercises", url: "https://www.physio-pedia.com/Piriformis_Syndrome_Rehabilitation" }
            ],
            tip: "الإطالة اللطيفة أفضل من الشد العنيف للأعصاب." 
          },
          { 
            id: "9_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Craig's test", requirement: "تقييم زاوية ميل رأس عظمة الفخذ (Anteversion/Retroversion)." },
              { text: "تعليم تمارين الـ Pelvic Stability", requirement: "استخدام الـ Dead bug exercise لثبات الحوض والظهر." }
            ], 
            resources: [
              { title: "Hip Special Tests Video 2", url: "https://www.youtube.com/results?search_query=craig+test+physiotherapy" }
            ],
            tip: "زاوية العظام تؤثر على المدى الحركي المتاح." 
          },
          { 
            id: "9_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة مشاكل الأطفال والأعصاب", requirement: "التأكد من معرفة الـ Red flags التي تستوجب التحويل الفوري للجراح عند الأطفال." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الورك عند الأطفال يحتاج دقة وحذر." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Post-Op Rehab & Advanced Hip", 
        days: [
          { 
            id: "9_4_1", 
            name: "تغيير مفصل الورك (THR)", 
            topic: "Post-Op", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Total Hip Replacement", requirement: "دراسة تأهيل تغيير المفصل والاحتياطات اللازمة (Hip Precautions)." },
              { text: "الفرق بين الـ Anterior vs Posterior approach", requirement: "فهم كيف يؤثر مكان الجرح على الحركات الممنوعة بعد العملية." }
            ], 
            resources: [
              { title: "Total Hip Arthroplasty Rehab", url: "https://www.physio-pedia.com/Total_Hip_Replacement" }
            ],
            tip: "تجنب ثني الورك أكثر من 90 درجة في البداية (للمدخل الخلفي)." 
          },
          { 
            id: "9_4_2", 
            name: "تأهيل ما بعد جراحة الغضروف", 
            topic: "Post-Op", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Labral Repair protocol", requirement: "دراسة مراحل العودة للحركة بعد خياطة الغضروف." },
              { text: "تجنب الـ Extension المبكر", requirement: "فهم الضغط الذي يسببه فرد الورك على الغضروف المرمم." }
            ], 
            resources: [
              { title: "Hip Labral Repair Rehab", url: "https://www.physio-pedia.com/Hip_Labral_Repair_Rehabilitation" }
            ],
            tip: "الحماية في أول 4 أسابيع هي الأهم." 
          },
          { 
            id: "9_4_3", 
            name: "تأهيل كسور عنق الفخذ", 
            topic: "Post-Op", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Femoral Neck Fractures", requirement: "فهم تأهيل كبار السن بعد تثبيت الكسر بمسامير أو تغيير المفصل." },
              { text: "فهم الـ Weight bearing status", requirement: "الالتزام بتعليمات الجراح حول مقدار الوزن المسموح به." }
            ], 
            resources: [
              { title: "Hip Fracture Rehab", url: "https://www.physio-pedia.com/Hip_Fractures" }
            ],
            tip: "المشي المبكر يمنع الجلطات عند كبار السن." 
          },
          { 
            id: "9_4_4", 
            name: "الورك والرياضة", 
            topic: "Sports", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة الـ Athletic Pubalgia (Sports Hernia)", requirement: "فهم ألم العانة عند الرياضيين الناتج عن ضعف جدار البطن." },
              { text: "فهم الـ Snapping Hip Syndrome", requirement: "دراسة صوت الطقطقة الناتج عن حركة الأوتار فوق العظام." }
            ], 
            resources: [
              { title: "Athletic Pubalgia", url: "https://www.physio-pedia.com/Athletic_Pubalgia" }
            ],
            tip: "الطقطقة بدون ألم غالباً ما تكون طبيعية." 
          },
          { 
            id: "9_4_5", 
            name: "تحليل الحالات المعقدة", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "التمييز بين ألم الظهر والورك", requirement: "كيف تعرف إذا كان الألم مصدره الفقرات القطنية أم مفصل الورك؟" },
              { text: "دراسة الـ Meralgia Paresthetica", requirement: "فهم ضغط العصب الجلدي الجانبي للفخذ وأعراض التنميل." }
            ], 
            resources: [
              { title: "Differential Diagnosis Hip Pain", url: "https://www.physio-pedia.com/Differential_Diagnosis_of_Hip_Pain" }
            ],
            tip: "افحص الظهر دائماً عند وجود ألم في الورك." 
          },
          { 
            id: "9_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم برنامج تأهيل لـ THR", requirement: "وضع خطة للمشي واستعادة القوة في أول أسبوعين بعد العملية." },
              { text: "تطبيق الـ Gait training", requirement: "تعليم المريض كيفية استخدام المشاية (Walker) أو العكازات بشكل صحيح." }
            ], 
            resources: [
              { title: "Hip Post-Op Rehab Video", url: "https://www.youtube.com/results?search_query=total+hip+replacement+rehab+physiotherapy" }
            ],
            tip: "المشي الصحيح يمنع العرج مستقبلاً." 
          },
          { 
            id: "9_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الورك", requirement: "التأكد من القدرة على تشخيص وعلاج أشهر إصابات الورك عند مختلف الأعمار." },
              { text: "راحة", requirement: "استعد لشهر الركبة." }
            ], 
            resources: [],
            tip: "أصبحت الآن متمكناً من مشاكل الورك!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 9, 
    name: "شهر 10 — أمراض الركبة (Knee Pathologies)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Ligamentous Injuries (ACL & PCL)", 
        days: [
          { 
            id: "10_1_1", 
            name: "إصابة الرباط الصليبي الأمامي (ACL)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة ميكانيكا إصابة الـ ACL", requirement: "فهم الـ Non-contact mechanism (Valgus + Rotation) وأعراض التمزق الحاد." },
              { text: "فهم الـ Copers vs Non-copers", requirement: "دراسة لماذا يستطيع البعض العيش بدون رباط صليبي والبعض الآخر يحتاج جراحة." }
            ], 
            resources: [
              { title: "ACL Injury Guide", url: "https://www.physio-pedia.com/Anterior_Cruciate_Ligament_(ACL)_Injury" }
            ],
            tip: "صوت الـ 'Pop' مع تورم سريع يشير لتمزق الـ ACL." 
          },
          { 
            id: "10_1_2", 
            name: "إصابة الرباط الصليبي الخلفي (PCL)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة ميكانيكا إصابة الـ PCL", requirement: "فهم الـ Dashboard injury (قوة خلفية على عظمة القصبة)." },
              { text: "الفرق بين الـ ACL والـ PCL", requirement: "مقارنة الأعراض وطرق العلاج التحفظي." }
            ], 
            resources: [
              { title: "PCL Injury Guide", url: "https://www.physio-pedia.com/Posterior_Cruciate_Ligament_(PCL)_Injury" }
            ],
            tip: "الـ PCL هو الرباط الأقوى في الركبة." 
          },
          { 
            id: "10_1_3", 
            name: "إصابات الأربطة الجانبية (MCL & LCL)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة تمزق الـ MCL", requirement: "فهم إصابات الجهة الداخلية للركبة الناتجة عن قوة الـ Valgus." },
              { text: "فهم درجات التمزق (Grade I-III)", requirement: "دراسة متى يحتاج المريض لجبيرة مفصلية (Hinged brace)." }
            ], 
            resources: [
              { title: "MCL Injury Guide", url: "https://www.physio-pedia.com/Medial_Collateral_Ligament_Injury" }
            ],
            tip: "الـ MCL يلتئم جيداً بدون جراحة في أغلب الحالات." 
          },
          { 
            id: "10_1_4", 
            name: "التقييم السريري للأربطة", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Lachman test", requirement: "الاختبار الأكثر دقة لتشخيص تمزق الـ ACL." },
              { text: "تطبيق Posterior Sag sign", requirement: "اختبار تمزق الـ PCL بملاحظة سقوط عظمة القصبة للخلف." }
            ], 
            resources: [
              { title: "Knee Ligament Assessment Video", url: "https://www.youtube.com/results?search_query=knee+ligament+assessment+physiotherapy" }
            ],
            tip: "الارتخاء (Laxity) هو العلامة الرئيسية لتمزق الأربطة." 
          },
          { 
            id: "10_1_5", 
            name: "بروتوكول العلاج التحفظي", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تقوية الـ Quadriceps & Hamstrings", requirement: "تطبيق تمارين الـ Isometric والـ Closed Chain لثبات الركبة." },
              { text: "تمارين الـ Neuromuscular control", requirement: "تطبيق تمارين التوازن على سطح غير مستقر." }
            ], 
            resources: [
              { title: "ACL Non-Surgical Rehab", url: "https://www.physio-pedia.com/ACL_Rehabilitation" }
            ],
            tip: "العضلات القوية هي الرباط الصليبي الثاني للركبة." 
          },
          { 
            id: "10_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق Valgus & Varus Stress tests", requirement: "اختبار الـ MCL والـ LCL بدقة عند زاوية 0 و30 درجة." },
              { text: "تعليم تمارين الـ Terminal Knee Extension", requirement: "تقوية الجزء الداخلي من العضلة الرباعية (VMO)." }
            ], 
            resources: [
              { title: "Knee Special Tests Video", url: "https://www.youtube.com/results?search_query=knee+special+tests+physiotherapy" }
            ],
            tip: "الدقة في زاوية الاختبار تحدد الرباط المصاب." 
          },
          { 
            id: "10_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة إصابات الأربطة", requirement: "التأكد من فهم ميكانيكا الثبات في الركبة." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "الركبة مفصل يحتاج ثباتاً عالياً." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Meniscal Injuries & Patellofemoral Pain", 
        days: [
          { 
            id: "10_2_1", 
            name: "تمزق الغضروف الهلالي (Meniscus)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة أنواع تمزق الغضروف الهلالي", requirement: "فهم الـ Bucket handle, Radial, and Degenerative tears." },
              { text: "فهم الـ Red zone vs White zone", requirement: "لماذا تلتئم الأطراف الخارجية للغضروف ولا تلتئم الأجزاء الداخلية؟" }
            ], 
            resources: [
              { title: "Meniscal Injury Guide", url: "https://www.physio-pedia.com/Meniscal_Injury" }
            ],
            tip: "تعليق الركبة (Locking) هو علامة كلاسيكية لتمزق الغضروف." 
          },
          { 
            id: "10_2_2", 
            name: "ألم صابونة الركبة (PFPS)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Patellofemoral Pain Syndrome", requirement: "فهم أسباب الألم الأمامي للركبة وعلاقته بضعف عضلات الورك." },
              { text: "فهم الـ Q-angle", requirement: "دراسة زاوية ميل عظمة الفخذ وتأثيرها على مسار الصابونة." }
            ], 
            resources: [
              { title: "PFPS Guide", url: "https://www.physio-pedia.com/Patellofemoral_Pain_Syndrome" }
            ],
            tip: "ألم الصابونة يزداد مع نزول السلم والجلوس الطويل." 
          },
          { 
            id: "10_2_3", 
            name: "التهاب وتر الصابونة (Patellar Tendinopathy)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Jumper's Knee", requirement: "فهم التهاب وتر الصابونة عند الرياضيين الذين يمارسون القفز." },
              { text: "فهم الـ Osgood-Schlatter disease", requirement: "دراسة ألم بروز عظمة القصبة عند المراهقين الرياضيين." }
            ], 
            resources: [
              { title: "Patellar Tendinopathy", url: "https://www.physio-pedia.com/Patellar_Tendinopathy" }
            ],
            tip: "الألم يتركز تحت الصابونة مباشرة." 
          },
          { 
            id: "10_2_4", 
            name: "التقييم السريري للغضروف والصابونة", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق McMurray's test", requirement: "اختبار تمزق الغضروف الهلالي مع الدوران." },
              { text: "تطبيق Clarke's sign", requirement: "اختبار انضغاط الصابونة." }
            ], 
            resources: [
              { title: "Meniscus Assessment Video", url: "https://www.youtube.com/results?search_query=meniscus+assessment+physiotherapy" }
            ],
            tip: "ألم مع الجس في خط المفصل (Joint line) يشير للغضروف." 
          },
          { 
            id: "10_2_5", 
            name: "بروتوكول العلاج (Phase 2)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ VMO strengthening", requirement: "تطبيق تمارين عزل الجزء الداخلي للرباعية لتحسين مسار الصابونة." },
              { text: "تقوية الـ Gluteus Medius", requirement: "فهم لماذا علاج الركبة يبدأ من الورك." }
            ], 
            resources: [
              { title: "PFPS Rehab Exercises", url: "https://www.physio-pedia.com/Patellofemoral_Pain_Syndrome_Rehabilitation" }
            ],
            tip: "ثبات الورك يمنع دخول الركبة للداخل (Valgus)." 
          },
          { 
            id: "10_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Thessaly test", requirement: "اختبار الغضروف الهلالي أثناء الوقوف على رجل واحدة." },
              { text: "تعليم تمارين الـ Eccentric Squats", requirement: "تطبيق تمارين القرفصاء على سطح مائل لعلاج وتر الصابونة." }
            ], 
            resources: [
              { title: "Knee Practical Exercises Video 2", url: "https://www.youtube.com/results?search_query=knee+physiotherapy+practical+exercises+2" }
            ],
            tip: "التمارين اللامركزية هي المعيار الذهبي لعلاج الأوتار." 
          },
          { 
            id: "10_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الغضروف والصابونة", requirement: "التأكد من فهم الفرق بين الألم الميكانيكي وألم الانضغاط." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الركبة تحتاج توازناً بين القوة والمرونة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Knee Osteoarthritis & Post-Op ACL", 
        days: [
          { 
            id: "10_3_1", 
            name: "خشونة الركبة (Knee OA)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة درجات الخشونة (Kellgren-Lawrence scale)", requirement: "فهم التغيرات الإشعاعية من الدرجة 1 إلى 4." },
              { text: "فهم الـ Genu Varum (Bow legs)", requirement: "دراسة كيف تزيد تقوس الساقين من الحمل على الجزء الداخلي للركبة." }
            ], 
            resources: [
              { title: "Knee Osteoarthritis", url: "https://www.physio-pedia.com/Knee_Osteoarthritis" }
            ],
            tip: "الخشونة هي مرض العصر، والتمارين هي العلاج الأول." 
          },
          { 
            id: "10_3_2", 
            name: "تأهيل ما بعد جراحة الـ ACL (Phase 1)", 
            topic: "Post-Op", 
            badge: "الأحد", 
            tasks: [
              { text: "استعادة الـ Full Extension", requirement: "فهم لماذا فرد الركبة الكامل هو الأولوية القصوى في أول أسبوعين." },
              { text: "تفعيل الـ Quadriceps", requirement: "تطبيق الـ Electrical Stimulation والـ Quad sets لمنع الضمور." }
            ], 
            resources: [
              { title: "ACL Post-Op Protocol", url: "https://www.physio-pedia.com/ACL_Rehabilitation_Protocols" }
            ],
            tip: "نقص فرد الركبة بعد العملية يسبب عرجاً مزمناً." 
          },
          { 
            id: "10_3_3", 
            name: "تأهيل ما بعد جراحة الـ ACL (Phase 2)", 
            topic: "Post-Op", 
            badge: "الاثنين", 
            tasks: [
              { text: "استعادة المدى الحركي (Flexion)", requirement: "الوصول لـ 120 درجة ثني في نهاية الأسبوع السادس." },
              { text: "بدء تمارين الـ Proprioception", requirement: "تطبيق تمارين التوازن البسيطة." }
            ], 
            resources: [
              { title: "ACL Rehab Phase 2", url: "https://www.physio-pedia.com/ACL_Rehabilitation_Phase_2" }
            ],
            tip: "التحكم الحركي أهم من القوة المطلقة في هذه المرحلة." 
          },
          { 
            id: "10_3_4", 
            name: "التقييم الوظيفي للركبة", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الـ Step-down test", requirement: "تقييم ثبات الركبة والتحكم في الورك أثناء النزول." },
              { text: "استخدام الـ KOOS scale", requirement: "دراسة استبيان تقييم نتائج إصابات الركبة." }
            ], 
            resources: [
              { title: "Functional Knee Assessment", url: "https://www.youtube.com/results?search_query=functional+knee+assessment+physiotherapy" }
            ],
            tip: "راقب حركة الركبة أثناء المهام اليومية." 
          },
          { 
            id: "10_2_5", 
            name: "بروتوكول العلاج (Phase 3)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Weight bearing", requirement: "تطبيق الـ Squats والـ Lunges بمدى حركي تدريجي." },
              { text: "استخدام الـ Knee Sleeve", requirement: "فهم دور الدعامة البسيطة في زيادة الـ Proprioception." }
            ], 
            resources: [
              { title: "Knee OA Rehab Exercises", url: "https://www.physio-pedia.com/Knee_Osteoarthritis_Rehabilitation" }
            ],
            tip: "الحركة هي زيت المفاصل." 
          },
          { 
            id: "10_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Patellar Mobilization", requirement: "تحريك الصابونة في جميع الاتجاهات لزيادة ليونة المفصل." },
              { text: "تعليم تمارين الـ Heel Slides", requirement: "زيادة ثني الركبة بأمان بعد العمليات." }
            ], 
            resources: [
              { title: "Knee Mobilization Video", url: "https://www.youtube.com/results?search_query=knee+mobilization+techniques+physiotherapy" }
            ],
            tip: "ليونة الصابونة تضمن حركة ركبة سلسة." 
          },
          { 
            id: "10_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الخشونة وتأهيل الـ ACL", requirement: "التأكد من فهم أولويات التأهيل في كل مرحلة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "التأهيل هو رحلة وليس سباقاً." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Total Knee Replacement & Advanced Rehab", 
        days: [
          { 
            id: "10_4_1", 
            name: "تغيير مفصل الركبة (TKR)", 
            topic: "Post-Op", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Total Knee Arthroplasty", requirement: "دراسة تأهيل تغيير المفصل والتحكم في التورم والألم." },
              { text: "استخدام الـ CPM machine", requirement: "فهم دور جهاز الحركة السلبية المستمرة في استعادة المدى." }
            ], 
            resources: [
              { title: "Total Knee Replacement Rehab", url: "https://www.physio-pedia.com/Total_Knee_Replacement" }
            ],
            tip: "المشي في أول يوم بعد العملية يسرع التعافي." 
          },
          { 
            id: "10_4_2", 
            name: "تأهيل ما بعد جراحة الغضروف الهلالي", 
            topic: "Post-Op", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Meniscectomy vs Meniscal Repair", requirement: "الفرق الجوهري في التأهيل بين استئصال الغضروف وخياطته." },
              { text: "تجنب الـ Deep Squat", requirement: "فهم لماذا يمنع الثني الزائد بعد خياطة الغضروف." }
            ], 
            resources: [
              { title: "Meniscal Repair Rehab", url: "https://www.physio-pedia.com/Meniscal_Repair_Rehabilitation" }
            ],
            tip: "خياطة الغضروف تحتاج حماية أطول بكثير من الاستئصال." 
          },
          { 
            id: "10_4_3", 
            name: "العودة للملعب (Return to Sport)", 
            topic: "Sports", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الـ Hop Tests", requirement: "تقييم قوة وثبات الركبة مقارنة بالطرف السليم (LSI > 90%)." },
              { text: "فهم الـ Agility drills", requirement: "تطبيق تمارين تغيير الاتجاه والجري المتعرج." }
            ], 
            resources: [
              { title: "Return to Play Knee", url: "https://www.physio-pedia.com/Return_to_Play_after_ACL_Reconstruction" }
            ],
            tip: "لا تعد للملعب قبل استعادة كامل القوة والثقة." 
          },
          { 
            id: "10_4_4", 
            name: "إصابات الركبة النادرة", 
            topic: "Pathology", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة الـ Baker's Cyst", requirement: "فهم تجمع السوائل خلف الركبة وعلاقته بمشاكل المفصل الداخلية." },
              { text: "فهم الـ IT Band Syndrome", requirement: "دراسة الألم الجانبي للركبة عند العدائين." }
            ], 
            resources: [
              { title: "IT Band Syndrome", url: "https://www.physio-pedia.com/Iliotibial_Band_Syndrome" }
            ],
            tip: "ألم خلف الركبة قد يكون كيساً زلالياً." 
          },
          { 
            id: "10_4_5", 
            name: "تحليل الحالات المعقدة", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "التمييز بين ألم الورك والركبة", requirement: "كيف يمكن لمشكلة في الورك أن تظهر كألم في الركبة (Referred pain)؟" },
              { text: "دراسة الـ Arthrofibrosis", requirement: "فهم تليف المفصل بعد العمليات وكيفية التعامل معه." }
            ], 
            resources: [
              { title: "Differential Diagnosis Knee Pain", url: "https://www.physio-pedia.com/Differential_Diagnosis_of_Knee_Pain" }
            ],
            tip: "افحص المفصل فوق وتحت الركبة دائماً." 
          },
          { 
            id: "10_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم برنامج تأهيل لـ TKR", requirement: "وضع خطة لاستعادة 90 درجة ثني في أول أسبوعين." },
              { text: "تطبيق الـ Patellar Taping", requirement: "تعلم كيفية استخدام اللاصق الطبي (McConnell taping) لتقليل ألم الصابونة." }
            ], 
            resources: [
              { title: "Knee Advanced Rehab Video", url: "https://www.youtube.com/results?search_query=advanced+knee+rehab+physiotherapy" }
            ],
            tip: "اللاصق الطبي يعطي راحة فورية لمرضى الصابونة." 
          },
          { 
            id: "10_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الركبة", requirement: "التأكد من القدرة على تشخيص وعلاج أشهر إصابات الركبة الرياضية والتنكسية." },
              { text: "راحة", requirement: "استعد لشهر الكاحل والقدم." }
            ], 
            resources: [],
            tip: "أصبحت الآن خبيراً في مشاكل الركبة!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 10, 
    name: "شهر 11 — الكاحل والقدم (Ankle & Foot Pathologies)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Ankle Sprains & Instability", 
        days: [
          { 
            id: "11_1_1", 
            name: "التواء الكاحل (Ankle Sprain)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة ميكانيكا الـ Inversion Sprain", requirement: "فهم تمزق الرباط الخارجي (ATFL) وأعراضه." },
              { text: "فهم الـ Ottawa Ankle Rules", requirement: "دراسة المعايير التي تحدد الحاجة لعمل أشعة (X-ray) لاستبعاد الكسور." }
            ], 
            resources: [
              { title: "Ankle Sprain Guide", url: "https://www.physio-pedia.com/Ankle_Sprain" }
            ],
            tip: "الـ ATFL هو الرباط الأكثر عرضة للإصابة في الجسم." 
          },
          { 
            id: "11_1_2", 
            name: "إصابة الرباط الداخلي (Deltoid)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Eversion Sprain", requirement: "فهم تمزق الرباط الداخلي (Deltoid ligament) وهو أقل شيوعاً وأكثر خطورة." },
              { text: "فهم الـ Syndesmosis injury (High Ankle Sprain)", requirement: "دراسة تمزق الأربطة بين عظمة القصبة والشظية." }
            ], 
            resources: [
              { title: "High Ankle Sprain", url: "https://www.physio-pedia.com/High_Ankle_Sprain" }
            ],
            tip: "الالتواء العالي يحتاج وقتاً أطول بكثير للتعافي." 
          },
          { 
            id: "11_1_3", 
            name: "عدم ثبات الكاحل المزمن (CAI)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Chronic Ankle Instability", requirement: "دراسة لماذا يتكرر الالتواء عند بعض المرضى (Mechanical vs Functional instability)." },
              { text: "فهم دور الـ Peroneal muscles", requirement: "دراسة أهمية العضلات الشظوية في حماية الكاحل من الالتواء." }
            ], 
            resources: [
              { title: "Chronic Ankle Instability", url: "https://www.physio-pedia.com/Chronic_Ankle_Instability" }
            ],
            tip: "التوازن (Proprioception) هو مفتاح منع تكرار الإصابة." 
          },
          { 
            id: "11_1_4", 
            name: "التقييم السريري للكاحل", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Anterior Drawer test", requirement: "اختبار سلامة الرباط الخارجي (ATFL)." },
              { text: "تطبيق Talar Tilt test", requirement: "اختبار سلامة الرباط الجانبي (CFL)." }
            ], 
            resources: [
              { title: "Ankle Assessment Video", url: "https://www.youtube.com/results?search_query=ankle+assessment+physiotherapy" }
            ],
            tip: "الجس الدقيق للأربطة يحدد درجة الإصابة." 
          },
          { 
            id: "11_1_5", 
            name: "بروتوكول العلاج (Phase 1)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تطبيق نظام الـ PEACE & LOVE", requirement: "فهم الإسعافات الأولية الحديثة للإصابات الحادة (بدلاً من RICE)." },
              { text: "تمارين الـ Range of Motion", requirement: "تطبيق حركات الكاحل البسيطة لتقليل التورم." }
            ], 
            resources: [
              { title: "Ankle Sprain Rehab", url: "https://www.physio-pedia.com/Ankle_Sprain_Rehabilitation" }
            ],
            tip: "التحميل المبكر المحمي يسرع الالتئام." 
          },
          { 
            id: "11_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Squeeze test", requirement: "اختبار الـ Syndesmosis (High ankle sprain)." },
              { text: "تعليم تمارين الـ Alphabet exercises", requirement: "تحريك الكاحل في جميع الاتجاهات برسم الحروف." }
            ], 
            resources: [
              { title: "Ankle Practical Exercises Video", url: "https://www.youtube.com/results?search_query=ankle+physiotherapy+practical+exercises" }
            ],
            tip: "رسم الحروف بالقدم يحرك كل عضلات الكاحل." 
          },
          { 
            id: "11_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الالتواءات", requirement: "التأكد من فهم الفرق بين درجات التمزق الثلاث." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "الكاحل هو قاعدة الجسم، ثباته يعني ثبات كل ما فوقه." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Achilles Tendon & Plantar Fasciitis", 
        days: [
          { 
            id: "11_2_1", 
            name: "التهاب وتر أكيلس (Achilles Tendinopathy)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Mid-portion vs Insertional tendinopathy", requirement: "الفرق في مكان الألم وطريقة العلاج بين منتصف الوتر ومكان اتصاله بالعظمة." },
              { text: "فهم الـ Haglund's deformity", requirement: "دراسة البروز العظمي خلف الكعب الذي يسبب التهاب الوتر." }
            ], 
            resources: [
              { title: "Achilles Tendinopathy", url: "https://www.physio-pedia.com/Achilles_Tendinopathy" }
            ],
            tip: "وتر أكيلس هو الأقوى والأكبر في الجسم." 
          },
          { 
            id: "11_2_2", 
            name: "تمزق وتر أكيلس (Achilles Rupture)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة ميكانيكا التمزق الكامل", requirement: "فهم الشعور بـ 'ضربة حجر' خلف الكعب وعدم القدرة على المشي." },
              { text: "فهم الـ Thompson test", requirement: "دراسة الاختبار السريري لتأكيد التمزق الكامل." }
            ], 
            resources: [
              { title: "Achilles Tendon Rupture", url: "https://www.physio-pedia.com/Achilles_Tendon_Rupture" }
            ],
            tip: "التمزق الكامل يحتاج تدخلاً طبياً فورياً." 
          },
          { 
            id: "11_2_3", 
            name: "التهاب اللفافة الأخمصية (Plantar Fasciitis)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Plantar Fasciopathy", requirement: "فهم أسباب ألم الكعب من الأسفل (خاصة في أول خطوات الصباح)." },
              { text: "فهم الـ Heel Spur", requirement: "دراسة نتوء الكعب وعلاقته بالتهاب اللفافة." }
            ], 
            resources: [
              { title: "Plantar Fasciitis Guide", url: "https://www.physio-pedia.com/Plantar_Fasciitis" }
            ],
            tip: "ألم أول خطوة في الصباح هو العلامة المميزة." 
          },
          { 
            id: "11_2_4", 
            name: "التقييم السريري للقدم", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Windlass test", requirement: "اختبار سلامة اللفافة الأخمصية." },
              { text: "جس وتر أكيلس", requirement: "تحديد مكان الألم بدقة (Insertional vs Mid-portion)." }
            ], 
            resources: [
              { title: "Foot Assessment Video", url: "https://www.youtube.com/results?search_query=foot+assessment+physiotherapy" }
            ],
            tip: "الجس يحدد إذا كانت المشكلة في الوتر أم في العظمة." 
          },
          { 
            id: "11_2_5", 
            name: "بروتوكول العلاج (Phase 2)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Heavy Slow Resistance", requirement: "تطبيق تمارين التحميل الثقيل والبطيء لعلاج أوتار الكاحل." },
              { text: "إطالات الـ Calf muscles", requirement: "تطبيق إطالة عضلات السمانة لتقليل الحمل على الكعب." }
            ], 
            resources: [
              { title: "Achilles Rehab Protocol", url: "https://www.physio-pedia.com/Achilles_Tendinopathy_Rehabilitation" }
            ],
            tip: "الأوتار تحب الحمل الثقيل والبطيء." 
          },
          { 
            id: "11_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Thompson test", requirement: "التأكد من سلامة وتر أكيلس لزميل." },
              { text: "تعليم تمارين الـ Towel Curls", requirement: "تقوية العضلات الصغيرة للقدم باستخدام منشفة." }
            ], 
            resources: [
              { title: "Foot Practical Exercises Video", url: "https://www.youtube.com/results?search_query=foot+physiotherapy+practical+exercises+2" }
            ],
            tip: "تقوية عضلات القدم الداخلية تدعم قوس القدم." 
          },
          { 
            id: "11_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الأوتار واللفافة", requirement: "التأكد من فهم الفرق بين الالتهاب الحاد والتنكس المزمن (Tendinosis)." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "علاج الأوتار يحتاج استمرارية لعدة أسابيع." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Foot Deformities & Nerve Issues", 
        days: [
          { 
            id: "11_3_1", 
            name: "تسطح القدم (Flat Foot)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Pes Planus", requirement: "فهم الفرق بين تسطح القدم المرن (Flexible) والثابت (Rigid)." },
              { text: "فهم الـ Posterior Tibial Tendon Dysfunction", requirement: "دراسة السبب الرئيسي لتسطح القدم المكتسب عند البالغين." }
            ], 
            resources: [
              { title: "Flat Foot Guide", url: "https://www.physio-pedia.com/Pes_Planus" }
            ],
            tip: "تسطح القدم يؤثر على ميكانيكا الركبة والظهر." 
          },
          { 
            id: "11_3_2", 
            name: "ارتفاع قوس القدم (Pes Cavus)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Pes Cavus", requirement: "فهم أسباب ارتفاع قوس القدم وعلاقته بالمشاكل العصبية." },
              { text: "فهم الـ Claw toes", requirement: "دراسة تشوهات الأصابع المصاحبة لارتفاع قوس القدم." }
            ], 
            resources: [
              { title: "Pes Cavus Guide", url: "https://www.physio-pedia.com/Pes_Cavus" }
            ],
            tip: "القدم ذات القوس العالي تفتقد لامتصاص الصدمات." 
          },
          { 
            id: "11_3_3", 
            name: "مشاكل الأعصاب (Tarsal Tunnel)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Tarsal Tunnel Syndrome", requirement: "فهم ضغط العصب الظنبوبي (Tibial nerve) عند الكاحل الداخلي." },
              { text: "فهم الـ Morton's Neuroma", requirement: "دراسة ألم وتنميل بين الأصابع (خاصة الثالث والرابع)." }
            ], 
            resources: [
              { title: "Tarsal Tunnel Syndrome", url: "https://www.physio-pedia.com/Tarsal_Tunnel_Syndrome" }
            ],
            tip: "التنميل في باطن القدم يشير لضغط عصبي." 
          },
          { 
            id: "11_3_4", 
            name: "التقييم السريري للتشوهات", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Navicular Drop test", requirement: "قياس مدي تسطح القدم وانهيار القوس." },
              { text: "تطبيق Mulder's sign", requirement: "اختبار الـ Morton's neuroma بالضغط على مشط القدم." }
            ], 
            resources: [
              { title: "Foot Deformity Assessment", url: "https://www.youtube.com/results?search_query=foot+deformity+assessment+physiotherapy" }
            ],
            tip: "راقب شكل القدم أثناء الوقوف والمشي." 
          },
          { 
            id: "11_3_5", 
            name: "بروتوكول العلاج (Phase 3)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Short Foot Exercise", requirement: "تعلم كيفية تفعيل قوس القدم بدون ثني الأصابع." },
              { text: "استخدام الـ Orthotics", requirement: "فهم متى يحتاج المريض لفرش طبي (Insoles) ومتى نعتمد على التمارين." }
            ], 
            resources: [
              { title: "Short Foot Exercise Video", url: "https://www.youtube.com/results?search_query=short+foot+exercise+physiotherapy" }
            ],
            tip: "التمارين تبني القوس، والفرش الطبي يدعمه." 
          },
          { 
            id: "11_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Coleman Block test", requirement: "التمييز بين تشوه الكعب وتشوه مشط القدم في الـ Pes Cavus." },
              { text: "تعليم تمارين الـ Toe Spreading", requirement: "تحسين التحكم في أصابع القدم لزيادة الثبات." }
            ], 
            resources: [
              { title: "Foot Special Tests Video 3", url: "https://www.youtube.com/results?search_query=foot+special+tests+physiotherapy+3" }
            ],
            tip: "التحكم في الأصابع مهارة مهملة لكنها ضرورية." 
          },
          { 
            id: "11_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة التشوهات والأعصاب", requirement: "التأكد من فهم كيفية تأثير شكل القدم على كامل السلسلة الحركية." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "القدم هي أول نقطة اتصال مع الأرض." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Fractures & Post-Op Foot", 
        days: [
          { 
            id: "11_4_1", 
            name: "كسور الكاحل (Pott's Fracture)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Weber Classification", requirement: "فهم أنواع كسور الشظية (Fibula) وعلاقتها بثبات الكاحل." },
              { text: "فهم الـ Bimalleolar vs Trimalleolar fractures", requirement: "دراسة الكسور المعقدة التي تشمل الكاحل الداخلي والخارجي والخلفي." }
            ], 
            resources: [
              { title: "Ankle Fractures Guide", url: "https://www.physio-pedia.com/Ankle_Fracture" }
            ],
            tip: "الكسور غير الثابتة تحتاج جراحة (ORIF)." 
          },
          { 
            id: "11_4_2", 
            name: "كسور الإجهاد (Stress Fractures)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Metatarsal Stress Fractures", requirement: "فهم كسور عظام المشط عند العدائين (March fracture)." },
              { text: "فهم الـ Navicular Stress Fracture", requirement: "دراسة الكسور التي يصعب تشخيصها وتحتاج راحة طويلة." }
            ], 
            resources: [
              { title: "Stress Fractures of the Foot", url: "https://www.physio-pedia.com/Stress_Fractures_of_the_Foot_and_Ankle" }
            ],
            tip: "ألم مستمر يزداد مع النشاط قد يكون كسر إجهاد." 
          },
          { 
            id: "11_4_3", 
            name: "تأهيل ما بعد جراحة أكيلس", 
            topic: "Post-Op", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Accelerated Rehab protocol", requirement: "دراسة الحركة المبكرة المحمية بعد خياطة وتر أكيلس." },
              { text: "استخدام الـ Heel lifts", requirement: "فهم دور رفع الكعب في تقليل الشد على الوتر المرمم." }
            ], 
            resources: [
              { title: "Achilles Post-Op Rehab", url: "https://www.physio-pedia.com/Achilles_Tendon_Rupture_Rehabilitation" }
            ],
            tip: "تجنب الشد الزائد (Dorsiflexion) في المرحلة الأولى." 
          },
          { 
            id: "11_4_4", 
            name: "تشوهات الأصابع (Hallux Valgus)", 
            topic: "Pathology", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة Bunions", requirement: "فهم انحراف إصبع القدم الكبير وأسبابه (الأحذية الضيقة، الوراثة)." },
              { text: "فهم الـ Turf Toe", requirement: "دراسة تمزق أربطة إصبع القدم الكبير عند الرياضيين." }
            ], 
            resources: [
              { title: "Hallux Valgus Guide", url: "https://www.physio-pedia.com/Hallux_Valgus" }
            ],
            tip: "انحراف الإبهام يؤثر على دفع القدم أثناء المشي." 
          },
          { 
            id: "11_4_5", 
            name: "تحليل الحالات المعقدة", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "التمييز بين ألم الساق والكاحل", requirement: "كيف يمكن لمشكلة في عضلات الساق أن تظهر كألم في الكاحل؟" },
              { text: "دراسة الـ Sinus Tarsi Syndrome", requirement: "فهم الألم الجانبي العميق للكاحل بعد الالتواءات المتكررة." }
            ], 
            resources: [
              { title: "Differential Diagnosis Foot Pain", url: "https://www.physio-pedia.com/Differential_Diagnosis_of_Foot_and_Ankle_Pain" }
            ],
            tip: "افحص الساق والركبة دائماً عند وجود ألم في الكاحل." 
          },
          { 
            id: "11_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم برنامج تأهيل لالتواء كاحل (Grade II)", requirement: "وضع خطة للعودة للجري في غضون 4-6 أسابيع." },
              { text: "تطبيق الـ Ankle Taping", requirement: "تعلم كيفية عمل رباط طبي ثباتي (Figure 8) لحماية الكاحل." }
            ], 
            resources: [
              { title: "Ankle Advanced Rehab Video", url: "https://www.youtube.com/results?search_query=advanced+ankle+rehab+physiotherapy" }
            ],
            tip: "الرباط الطبي يعطي ثباتاً وثقة للرياضي." 
          },
          { 
            id: "11_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الكاحل والقدم", requirement: "التأكد من القدرة على التعامل مع الإصابات الحادة والمزمنة للقدم." },
              { text: "راحة", requirement: "استعد لشهر العمود الفقري القطني." }
            ], 
            resources: [],
            tip: "لقد أتممت دراسة الطرف السفلي بالكامل!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 11, 
    name: "شهر 12 — العمود الفقري القطني (Lumbar Spine Pathologies)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Disc Herniation & Sciatica", 
        days: [
          { 
            id: "12_1_1", 
            name: "الانزلاق الغضروفي (Disc Prolapse)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة ميكانيكا الانزلاق الغضروفي", requirement: "فهم الفرق بين الـ Bulge, Protrusion, Extrusion, and Sequestration." },
              { text: "فهم الـ Dermatomes & Myotomes", requirement: "دراسة خريطة توزيع الأعصاب في الطرف السفلي لتحديد مستوى الانزلاق." }
            ], 
            resources: [
              { title: "Lumbar Disc Herniation", url: "https://www.physio-pedia.com/Lumbar_Disc_Herniation" }
            ],
            tip: "الانزلاق الغضروفي ليس دائماً سبباً للألم." 
          },
          { 
            id: "12_1_2", 
            name: "عرق النسا (Sciatica)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Sciatic Nerve Pain", requirement: "فهم مسار العصب الوركي وأسباب انضغاطه." },
              { text: "فهم الـ Radiculopathy vs Referred Pain", requirement: "التمييز بين الألم الناتج عن ضغط العصب والألم المسمع من العضلات أو المفاصل." }
            ], 
            resources: [
              { title: "Sciatica Guide", url: "https://www.physio-pedia.com/Sciatica" }
            ],
            tip: "عرق النسا هو عرض وليس مرضاً بحد ذاته." 
          },
          { 
            id: "12_1_3", 
            name: "متلازمة ذيل الفرس (Cauda Equina Syndrome)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Red Flags للظهر", requirement: "فهم أعراض الـ Cauda Equina (فقدان التحكم في الإخراج، تنميل منطقة السرج)." },
              { text: "فهم الـ Emergency Referral", requirement: "دراسة متى يجب إرسال المريض للجراحة فوراً." }
            ], 
            resources: [
              { title: "Cauda Equina Syndrome", url: "https://www.physio-pedia.com/Cauda_Equina_Syndrome" }
            ],
            tip: "هذه حالة طارئة تستدعي الجراحة في أقل من 48 ساعة." 
          },
          { 
            id: "12_1_4", 
            name: "التقييم السريري للأعصاب", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Straight Leg Raise (SLR)", requirement: "اختبار شد العصب الوركي (L4-S2)." },
              { text: "تطبيق Slump test", requirement: "اختبار أكثر حساسية للتوتر العصبي في العمود الفقري." }
            ], 
            resources: [
              { title: "Lumbar Neuro Assessment Video", url: "https://www.youtube.com/results?search_query=lumbar+neurological+assessment+physiotherapy" }
            ],
            tip: "الألم المسمع تحت الركبة يزيد من احتمالية وجود انزلاق غضروفي." 
          },
          { 
            id: "12_1_5", 
            name: "بروتوكول العلاج (Phase 1)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تطبيق الـ Centralization phenomenon", requirement: "فهم كيفية تحريك الألم من الطرف السفلي باتجاه الظهر (طريقة ماكنزي)." },
              { text: "تمارين الـ Lumbar Extension", requirement: "تطبيق تمارين الـ Cobra (Prone press-ups) لمرضى الانزلاق الخلفي." }
            ], 
            resources: [
              { title: "McKenzie Method Guide", url: "https://www.physio-pedia.com/McKenzie_Method" }
            ],
            tip: "الـ Centralization هي علامة جيدة جداً على نجاح العلاج." 
          },
          { 
            id: "12_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Neural Flossing", requirement: "تعلم كيفية تحريك العصب (Nerve gliding) لتقليل الحساسية." },
              { text: "تعليم وضعيات الراحة", requirement: "تطبيق وضعية الـ Psoas position لتقليل الضغط على الغضروف." }
            ], 
            resources: [
              { title: "Lumbar Practical Exercises Video", url: "https://www.youtube.com/results?search_query=lumbar+physiotherapy+practical+exercises" }
            ],
            tip: "تحريك العصب بلطف يقلل الألم العصبي المزمن." 
          },
          { 
            id: "12_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الانزلاق وعرق النسا", requirement: "التأكد من فهم متى نستخدم التمارين ومتى نحذر المريض." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "الظهر يحتاج حركة مدروسة وليس سكوناً تاماً." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Spinal Stenosis & Spondylolisthesis", 
        days: [
          { 
            id: "12_2_1", 
            name: "ضيق القناة الشوكية (Spinal Stenosis)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Lumbar Spinal Stenosis", requirement: "فهم ضيق القناة وعلاقته بالعمر وأعراض الـ Neurogenic Claudication." },
              { text: "فهم الـ Shopping Cart sign", requirement: "لماذا يشعر المريض براحة عند الانحناء للأمام؟" }
            ], 
            resources: [
              { title: "Spinal Stenosis Guide", url: "https://www.physio-pedia.com/Lumbar_Spinal_Stenosis" }
            ],
            tip: "مرضى الضيق يفضلون الثني (Flexion) على الفرد (Extension)." 
          },
          { 
            id: "12_2_2", 
            name: "زحزحة الفقرات (Spondylolisthesis)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Spondylolysis vs Spondylolisthesis", requirement: "فهم الفرق بين شرخ الفقرة وانزلاقها للأمام." },
              { text: "فهم درجات الانزلاق (Meyerding classification)", requirement: "دراسة الدرجات من 1 إلى 4 ومتى يكون الانزلاق غير مستقر." }
            ], 
            resources: [
              { title: "Spondylolisthesis Guide", url: "https://www.physio-pedia.com/Spondylolisthesis" }
            ],
            tip: "تجنب تمارين الفرد الزائد (Hyperextension) في هذه الحالة." 
          },
          { 
            id: "12_2_3", 
            name: "ألم المفصل العجزي الحرقفي (SIJ Pain)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Sacroiliac Joint Dysfunction", requirement: "فهم ألم الحوض المسمع للظهر والفخذ." },
              { text: "فهم الـ Fortin Finger test", requirement: "تحديد مكان الألم بدقة عند الـ PSIS." }
            ], 
            resources: [
              { title: "SIJ Dysfunction Guide", url: "https://www.physio-pedia.com/Sacroiliac_Joint_Dysfunction" }
            ],
            tip: "ألم الـ SIJ غالباً ما يكون في جهة واحدة تحت خط الخصر." 
          },
          { 
            id: "12_2_4", 
            name: "التقييم السريري للثبات", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الـ Prone Instability test", requirement: "اختبار ثبات الفقرات عند الجس." },
              { text: "تطبيق الـ SIJ Provocation tests (Laslett's cluster)", requirement: "استخدام مجموعة اختبارات (Distraction, Compression, Thigh thrust) لتشخيص الـ SIJ." }
            ], 
            resources: [
              { title: "SIJ Assessment Video", url: "https://www.youtube.com/results?search_query=sij+assessment+physiotherapy" }
            ],
            tip: "تحتاج لـ 3 اختبارات إيجابية على الأقل لتأكيد إصابة الـ SIJ." 
          },
          { 
            id: "12_2_5", 
            name: "بروتوكول العلاج (Phase 2)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Core Stability (Level 1)", requirement: "تطبيق تمارين الـ Drawing-in maneuver وتفعيل الـ Transversus Abdominis." },
              { text: "تمارين الـ Pelvic Tilts", requirement: "تحسين التحكم الحركي في الحوض والفقرات القطنية." }
            ], 
            resources: [
              { title: "Core Stability Exercises", url: "https://www.physio-pedia.com/Core_Stability" }
            ],
            tip: "الـ Core هو المشد الطبيعي للظهر." 
          },
          { 
            id: "12_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Step-off sign", requirement: "جس الفقرات للبحث عن 'درجة' تشير لزحزحة الفقرات." },
              { text: "تعليم تمارين الـ Williams Flexion exercises", requirement: "تمارين مخصصة لمرضى ضيق القناة الشوكية." }
            ], 
            resources: [
              { title: "Lumbar Practical Exercises Video 2", url: "https://www.youtube.com/results?search_query=lumbar+physiotherapy+practical+exercises+2" }
            ],
            tip: "الجس الدقيق يوفر معلومات أهم من الأشعة أحياناً." 
          },
          { 
            id: "12_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الضيق والزحزحة والـ SIJ", requirement: "التأكد من فهم التوجه العلاجي لكل حالة (Flexion vs Extension vs Stability)." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "التشخيص الصحيح هو نصف العلاج." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Non-Specific Low Back Pain & Biopsychosocial Model", 
        days: [
          { 
            id: "12_3_1", 
            name: "ألم الظهر غير المحدد (NSLBP)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Non-Specific Low Back Pain", requirement: "دراسة لماذا 90% من آلام الظهر لا يوجد لها سبب تشريحي واضح." },
              { text: "فهم الـ Yellow Flags", requirement: "دراسة العوامل النفسية والاجتماعية التي تزيد من احتمالية تحول الألم لمزمن." }
            ], 
            resources: [
              { title: "Non-Specific Low Back Pain", url: "https://www.physio-pedia.com/Non_Specific_Low_Back_Pain" }
            ],
            tip: "ألم الظهر ليس دائماً بسبب 'دسك' أو 'فقرة'." 
          },
          { 
            id: "12_3_2", 
            name: "النموذج الحيوي النفسي الاجتماعي", 
            topic: "Theory", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Biopsychosocial Model", requirement: "فهم تأثير التوتر، الخوف من الحركة (Kinesiophobia)، وقلة النوم على ألم الظهر." },
              { text: "فهم الـ Pain Education", requirement: "كيف تشرح للمريض أن ظهره 'قوي' وليس 'منهاراً'؟" }
            ], 
            resources: [
              { title: "Biopsychosocial Model in Back Pain", url: "https://www.physio-pedia.com/Biopsychosocial_Model" }
            ],
            tip: "علاج عقل المريض لا يقل أهمية عن علاج عضلاته." 
          },
          { 
            id: "12_3_3", 
            name: "ثبات الفقرات (Lumbar Instability)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Clinical Lumbar Instability", requirement: "فهم أعراض عدم الثبات الوظيفي (ألم عند تغيير الوضعيات، الشعور بـ 'تكة' في الظهر)." },
              { text: "فهم دور الـ Multifidus muscle", requirement: "دراسة أهمية العضلات العميقة في ثبات كل فقرة على حدة." }
            ], 
            resources: [
              { title: "Lumbar Instability Guide", url: "https://www.physio-pedia.com/Lumbar_Instability" }
            ],
            tip: "الـ Multifidus هي أول عضلة تضمر عند وجود ألم ظهر." 
          },
          { 
            id: "12_3_4", 
            name: "تقييم العوامل النفسية", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "استخدام الـ STarT Back Tool", requirement: "تصنيف المرضى حسب خطورة تحول الألم لمزمن (Low, Medium, High risk)." },
              { text: "استخدام الـ FABQ questionnaire", requirement: "قياس مدى خوف المريض من الحركة والنشاط." }
            ], 
            resources: [
              { title: "STarT Back Tool Guide", url: "https://www.physio-pedia.com/STarT_Back_Screening_Tool" }
            ],
            tip: "المريض الخائف يحتاج تشجيعاً أكثر من التمارين الشاقة." 
          },
          { 
            id: "12_3_5", 
            name: "بروتوكول العلاج (Phase 3)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Core Stability (Level 2)", requirement: "تطبيق الـ Bird-Dog والـ Dead Bug مع الحفاظ على ثبات الفقرات." },
              { text: "تطبيق الـ Graded Exposure", requirement: "تعريض المريض للحركات التي يخاف منها تدريجياً." }
            ], 
            resources: [
              { title: "Graded Exposure for Back Pain", url: "https://www.physio-pedia.com/Graded_Exposure" }
            ],
            tip: "الحركة هي الدواء للخوف من الحركة." 
          },
          { 
            id: "12_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ McGill Big 3", requirement: "تعلم التمارين الثلاثة الأساسية لثبات الظهر (Curl-up, Side bridge, Bird-dog)." },
              { text: "تعليم الـ Hip Hinge", requirement: "تدريب المريض على الانحناء باستخدام الورك بدلاً من الظهر." }
            ], 
            resources: [
              { title: "McGill Big 3 Video", url: "https://www.youtube.com/results?search_query=mcgill+big+3+back+exercises" }
            ],
            tip: "الـ Hip Hinge يحمي ظهرك أثناء رفع الأثقال." 
          },
          { 
            id: "12_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الـ NSLBP والنموذج النفسي", requirement: "التأكد من القدرة على التعامل مع المريض كإنسان متكامل وليس مجرد عمود فقري." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الاستماع للمريض هو جزء من العلاج." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Post-Op Lumbar & Advanced Core", 
        days: [
          { 
            id: "12_4_1", 
            name: "جراحات الظهر (Discectomy & Fusion)", 
            topic: "Post-Op", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Microdiscectomy", requirement: "دراسة تأهيل ما بعد استئصال الغضروف والقيود الحركية (No BLT: Bending, Lifting, Twisting)." },
              { text: "فهم الـ Spinal Fusion", requirement: "دراسة تأهيل دمج الفقرات وأهمية ثبات المفاصل المجاورة." }
            ], 
            resources: [
              { title: "Lumbar Surgery Rehab", url: "https://www.physio-pedia.com/Lumbar_Surgery_Rehabilitation" }
            ],
            tip: "المشي المبكر يمنع الالتصاقات بعد الجراحة." 
          },
          { 
            id: "12_4_2", 
            name: "متلازمة فشل جراحة الظهر (FBSS)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Failed Back Surgery Syndrome", requirement: "فهم لماذا يستمر الألم عند البعض بعد الجراحة وكيفية التعامل معهم." },
              { text: "فهم الـ Epidural Fibrosis", requirement: "دراسة تليف الأنسجة حول العصب بعد العمليات." }
            ], 
            resources: [
              { title: "Failed Back Surgery Syndrome", url: "https://www.physio-pedia.com/Failed_Back_Surgery_Syndrome" }
            ],
            tip: "الجراحة ليست دائماً الحل النهائي." 
          },
          { 
            id: "12_4_3", 
            name: "العودة للعمل والرياضة", 
            topic: "Rehab", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الـ Functional Capacity Evaluation", requirement: "تقييم قدرة المريض على العودة لمهامه الوظيفية (رفع، حمل، جلوس)." },
              { text: "فهم الـ Ergonomics", requirement: "تعديل بيئة العمل لتقليل الضغط على الظهر." }
            ], 
            resources: [
              { title: "Back Ergonomics Guide", url: "https://www.physio-pedia.com/Ergonomics" }
            ],
            tip: "أفضل وضعية للجلوس هي الوضعية التالية (الحركة المستمرة)." 
          },
          { 
            id: "12_4_4", 
            name: "التهاب الفقرات التصلبي (Ankylosing Spondylitis)", 
            topic: "Pathology", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة Ankylosing Spondylitis", requirement: "فهم المرض المناعي الذي يسبب تيبس العمود الفقري (Bamboo spine)." },
              { text: "فهم الـ Schober's test", requirement: "اختبار قياس مدى مرونة الفقرات القطنية." }
            ], 
            resources: [
              { title: "Ankylosing Spondylitis Guide", url: "https://www.physio-pedia.com/Ankylosing_Spondylitis" }
            ],
            tip: "التمارين الصباحية ضرورية لمرضى التصلب." 
          },
          { 
            id: "12_4_5", 
            name: "تحليل الحالات المعقدة", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "التمييز بين ألم الظهر والكلى", requirement: "كيف تفرق بين ألم الفقرات وألم الكلى أو الأعضاء الداخلية؟" },
              { text: "دراسة الـ Modic changes", requirement: "فهم التغيرات في نخاع العظام داخل الفقرات وعلاقتها بالألم." }
            ], 
            resources: [
              { title: "Differential Diagnosis Back Pain", url: "https://www.physio-pedia.com/Differential_Diagnosis_of_Low_Back_Pain" }
            ],
            tip: "الألم الذي لا يتغير مع الحركة يستدعي فحصاً طبياً شاملاً." 
          },
          { 
            id: "12_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم برنامج ثبات متقدم", requirement: "وضع خطة تشمل الـ Planks والـ Side Planks مع حركات الأطراف." },
              { text: "تطبيق الـ Lumbar Taping", requirement: "تعلم كيفية استخدام الـ Kinesio tape لدعم عضلات الظهر وتقليل الألم." }
            ], 
            resources: [
              { title: "Advanced Core Rehab Video", url: "https://www.youtube.com/results?search_query=advanced+core+rehab+physiotherapy" }
            ],
            tip: "الثبات الديناميكي هو الهدف النهائي للتأهيل." 
          },
          { 
            id: "12_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الظهر", requirement: "التأكد من القدرة على تشخيص وعلاج أعقد مشاكل العمود الفقري القطني." },
              { text: "راحة", requirement: "استعد لشهر العمود الفقري العنقي." }
            ], 
            resources: [],
            tip: "لقد أتممت دراسة أهم جزء في الجسم!" 
          }
        ] 
      }
    ] 
  },
  // Phase 3: Manual Therapy (13-18)
  { 
    id: 12, 
    name: "شهر 13 — العمود الفقري العنقي (Cervical Spine Pathologies)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Neck Pain & Radiculopathy", 
        days: [
          { 
            id: "13_1_1", 
            name: "ألم الرقبة الميكانيكي (Mechanical Neck Pain)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة أسباب ألم الرقبة", requirement: "فهم الـ Postural syndrome وعلاقتها بالجلوس الطويل أمام الشاشات." },
              { text: "فهم الـ Facet Joint Syndrome", requirement: "دراسة ألم المفاصل الخلفية للفقرات الذي يزداد مع فرد الرقبة والدوران." }
            ], 
            resources: [
              { title: "Mechanical Neck Pain", url: "https://www.physio-pedia.com/Mechanical_Neck_Pain" }
            ],
            tip: "الوضعية الخاطئة هي العدو الأول للرقبة." 
          },
          { 
            id: "13_1_2", 
            name: "الانزلاق الغضروفي العنقي (Cervical Disc)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Cervical Radiculopathy", requirement: "فهم أعراض ضغط العصب في الرقبة (ألم، تنميل، ضعف في الذراع)." },
              { text: "فهم الـ C5-C7 Dermatomes", requirement: "دراسة خريطة الأعصاب لتحديد مستوى الفقرة المصابة من مكان التنميل." }
            ], 
            resources: [
              { title: "Cervical Radiculopathy", url: "https://www.physio-pedia.com/Cervical_Radiculopathy" }
            ],
            tip: "ألم الذراع قد يكون مصدره الرقبة." 
          },
          { 
            id: "13_1_3", 
            name: "اعتلال النخاع الشوكي (Cervical Myelopathy)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Red Flags للرقبة", requirement: "فهم أعراض ضغط النخاع (فقدان التوازن، صعوبة في استخدام اليدين، تغير في المشية)." },
              { text: "فهم الـ Upper Motor Neuron signs", requirement: "دراسة اختبارات الـ Hoffmann's & Babinski في حالات الرقبة." }
            ], 
            resources: [
              { title: "Cervical Myelopathy", url: "https://www.physio-pedia.com/Cervical_Spondylotic_Myelopathy" }
            ],
            tip: "هذه حالة خطيرة تتطلب تدخلاً جراحياً." 
          },
          { 
            id: "13_1_4", 
            name: "التقييم السريري للرقبة", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Spurling's test", requirement: "اختبار ضغط مخرج العصب لتشخيص الـ Radiculopathy." },
              { text: "تطبيق Distraction test", requirement: "فهم كيف يقل الألم عند رفع الرأس للأعلى (علامة إيجابية)." }
            ], 
            resources: [
              { title: "Cervical Assessment Video", url: "https://www.youtube.com/results?search_query=cervical+spine+assessment+physiotherapy" }
            ],
            tip: "اختبار Spurling هو الأكثر شهرة لتشخيص ضغط العصب." 
          },
          { 
            id: "13_1_5", 
            name: "بروتوكول العلاج (Phase 1)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Deep Neck Flexors", requirement: "تطبيق تمارين الـ Chin-tuck لتقوية العضلات العميقة للرقبة." },
              { text: "تطبيق الـ Postural correction", requirement: "تعليم المريض كيفية ضبط وضعية الرأس والكتفين." }
            ], 
            resources: [
              { title: "Neck Exercises for Pain", url: "https://www.physio-pedia.com/Neck_Exercises" }
            ],
            tip: "تقوية العضلات العميقة هي مفتاح ثبات الرقبة." 
          },
          { 
            id: "13_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Upper Limb Tension Tests (ULTT)", requirement: "تعلم كيفية شد أعصاب الذراع (Median, Radial, Ulnar) للتأكد من مصدر الألم." },
              { text: "تعليم تمارين الـ Scapular Retraction", requirement: "تحسين وضعية لوح الكتف لتقليل الحمل على الرقبة." }
            ], 
            resources: [
              { title: "Cervical Practical Exercises Video", url: "https://www.youtube.com/results?search_query=cervical+physiotherapy+practical+exercises" }
            ],
            tip: "أعصاب الذراع تبدأ من الرقبة، تحريكها بلطف يقلل الألم." 
          },
          { 
            id: "13_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة ألم الرقبة والـ Radiculopathy", requirement: "التأكد من فهم الفرق بين الألم العضلي والألم العصبي." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "الرقبة تحمل الرأس، فاجعلها قوية." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Whiplash & Cervicogenic Headaches", 
        days: [
          { 
            id: "13_2_1", 
            name: "إصابة المصع (Whiplash)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Whiplash Associated Disorders (WAD)", requirement: "فهم إصابات الرقبة الناتجة عن حوادث السيارات (حركة مفاجئة للخلف ثم للأمام)." },
              { text: "فهم الـ Quebec Task Force classification", requirement: "دراسة درجات الـ WAD من 0 إلى 4." }
            ], 
            resources: [
              { title: "Whiplash Injury Guide", url: "https://www.physio-pedia.com/Whiplash_Associated_Disorders" }
            ],
            tip: "الخوف من الحركة بعد الحادث يزيد من تيبس الرقبة." 
          },
          { 
            id: "13_2_2", 
            name: "الصداع الناتج عن الرقبة", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Cervicogenic Headache", requirement: "فهم الصداع الذي يبدأ من الرقبة وينتقل للرأس (غالباً في جهة واحدة)." },
              { text: "الفرق بينه وبين الـ Tension Headache", requirement: "دراسة الخصائص المميزة لكل نوع." }
            ], 
            resources: [
              { title: "Cervicogenic Headache Guide", url: "https://www.physio-pedia.com/Cervicogenic_Headache" }
            ],
            tip: "تحسين حركة الفقرات العليا (C1-C3) يقلل هذا الصداع." 
          },
          { 
            id: "13_2_3", 
            name: "عدم ثبات الفقرات العليا", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Upper Cervical Instability", requirement: "فهم خطورة إصابة أربطة الـ Alar & Transverse ligaments." },
              { text: "فهم الـ Vertebrobasilar Insufficiency (VBI)", requirement: "دراسة أعراض نقص تروية الدم للمخ عند تحريك الرقبة (دوخة، زغللة، إغماء)." }
            ], 
            resources: [
              { title: "Cervical Instability Guide", url: "https://www.physio-pedia.com/Cervical_Instability" }
            ],
            tip: "الدوخة مع حركة الرقبة تستدعي فحصاً دقيقاً." 
          },
          { 
            id: "13_2_4", 
            name: "التقييم السريري للثبات والدوخة", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الـ Sharp-Purser test", requirement: "اختبار ثبات الفقرة الأولى والثانية (C1-C2)." },
              { text: "تطبيق الـ Cervical Flexion-Rotation Test", requirement: "الاختبار الأكثر دقة لتشخيص الصداع الناتج عن الرقبة." }
            ], 
            resources: [
              { title: "Upper Cervical Assessment Video", url: "https://www.youtube.com/results?search_query=upper+cervical+assessment+physiotherapy" }
            ],
            tip: "لا تبدأ العلاج اليدوي قبل التأكد من ثبات الفقرات العليا." 
          },
          { 
            id: "13_2_5", 
            name: "بروتوكول العلاج (Phase 2)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ Sensorimotor training", requirement: "تطبيق تمارين تتبع الليزر (Laser tracking) لتحسين التحكم في حركة الرأس." },
              { text: "تمارين الـ Isometric Neck strengthening", requirement: "تقوية عضلات الرقبة في جميع الاتجاهات بدون حركة." }
            ], 
            resources: [
              { title: "Cervical Sensorimotor Training", url: "https://www.physio-pedia.com/Sensorimotor_Impairment_in_Neck_Pain" }
            ],
            tip: "الرقبة تحتاج دقة في الحركة وليس قوة فقط." 
          },
          { 
            id: "13_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Cranio-cervical Flexion Test", requirement: "استخدام جهاز ضغط الهواء (Biofeedback) لتقييم العضلات العميقة." },
              { text: "تعليم تمارين الـ Shoulder Shrugs", requirement: "تقوية عضلات الـ Trapezius لدعم الرقبة." }
            ], 
            resources: [
              { title: "Cervical Practical Exercises Video 2", url: "https://www.youtube.com/results?search_query=cervical+physiotherapy+practical+exercises+2" }
            ],
            tip: "العضلات العميقة هي التي تحمي مفاصل الفقرات." 
          },
          { 
            id: "13_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الـ Whiplash والصداع", requirement: "التأكد من فهم كيفية التعامل مع الحالات الحادة والمزمنة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الرقبة هي جسر التواصل بين العقل والجسم." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Thoracic Outlet Syndrome & Post-Op Cervical", 
        days: [
          { 
            id: "13_3_1", 
            name: "متلازمة مخرج الصدر (TOS)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Thoracic Outlet Syndrome", requirement: "فهم ضغط الأعصاب والأوعية الدموية بين الرقبة والكتف." },
              { text: "فهم الـ Neurogenic vs Vascular TOS", requirement: "التمييز بين ضغط العصب وضغط الشريان/الوريد." }
            ], 
            resources: [
              { title: "Thoracic Outlet Syndrome", url: "https://www.physio-pedia.com/Thoracic_Outlet_Syndrome" }
            ],
            tip: "ألم وتنميل اليد قد يكون مصدره مخرج الصدر." 
          },
          { 
            id: "13_3_2", 
            name: "جراحات الرقبة (ACDF)", 
            topic: "Post-Op", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Anterior Cervical Discectomy and Fusion", requirement: "دراسة تأهيل جراحة دمج الفقرات من الأمام والقيود الحركية." },
              { text: "فهم الـ Disc Arthroplasty", requirement: "دراسة جراحة تغيير غضروف الرقبة الصناعي." }
            ], 
            resources: [
              { title: "Cervical Surgery Rehab", url: "https://www.physio-pedia.com/Cervical_Spine_Surgery_Rehabilitation" }
            ],
            tip: "الحفاظ على حركة الأكتاف ضروري بعد جراحة الرقبة." 
          },
          { 
            id: "13_3_3", 
            name: "تيبس الرقبة (Torticollis)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Acute Wry Neck", requirement: "فهم التيبس المفاجئ للرقبة عند الاستيقاظ وكيفية فكه يدوياً." },
              { text: "فهم الـ Congenital Torticollis", requirement: "دراسة ميل الرقبة عند الأطفال حديثي الولادة." }
            ], 
            resources: [
              { title: "Torticollis Guide", url: "https://www.physio-pedia.com/Torticollis" }
            ],
            tip: "التيبس المفاجئ غالباً ما يكون بسبب تشنج عضلي أو قفل في المفصل." 
          },
          { 
            id: "13_3_4", 
            name: "التقييم السريري لـ TOS", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Adson's test", requirement: "اختبار ضغط الشريان تحت الترقوة." },
              { text: "تطبيق Roos test (EAST)", requirement: "الاختبار الأكثر دقة لتشخيص الـ TOS بتحريك اليدين." }
            ], 
            resources: [
              { title: "TOS Assessment Video", url: "https://www.youtube.com/results?search_query=thoracic+outlet+syndrome+assessment+physiotherapy" }
            ],
            tip: "اختبار Roos يحتاج لـ 3 دقائق من الحركة المستمرة." 
          },
          { 
            id: "13_3_5", 
            name: "بروتوكول العلاج (Phase 3)", 
            topic: "Rehab", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تمارين الـ First Rib Mobilization", requirement: "تعلم كيفية تقليل الضغط على مخرج الصدر بتحريك الضلع الأول." },
              { text: "تمارين الـ Nerve Gliding (Advanced)", requirement: "تطبيق تحريك الأعصاب بمدى حركي كامل." }
            ], 
            resources: [
              { title: "TOS Rehab Exercises", url: "https://www.physio-pedia.com/Thoracic_Outlet_Syndrome_Rehabilitation" }
            ],
            tip: "فتح مساحة مخرج الصدر يزيل الأعراض فوراً." 
          },
          { 
            id: "13_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Scalene stretch", requirement: "إطالة العضلات الأخمعية لتقليل الضغط على الأعصاب." },
              { text: "تعليم تمارين الـ Wall Slides", requirement: "تحسين ثبات لوح الكتف والرقبة معاً." }
            ], 
            resources: [
              { title: "Cervical Mobilization Video", url: "https://www.youtube.com/results?search_query=cervical+mobilization+techniques+physiotherapy" }
            ],
            tip: "الضلع الأول غالباً ما يكون مرتفعاً عند مرضى الـ TOS." 
          },
          { 
            id: "13_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الـ TOS وجراحات الرقبة", requirement: "التأكد من فهم كيفية التمييز بين مشاكل الرقبة والكتف." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "التشخيص التفريقي هو سلاحك الأقوى." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Thoracic Spine & Advanced Cervical Rehab", 
        days: [
          { 
            id: "13_4_1", 
            name: "العمود الفقري الصدري (Thoracic Spine)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة Thoracic Kyphosis", requirement: "فهم تحدب الظهر وعلاقته بآلام الرقبة والكتف." },
              { text: "فهم الـ Scheuermann's disease", requirement: "دراسة التحدب الوراثي عند المراهقين." }
            ], 
            resources: [
              { title: "Thoracic Spine Guide", url: "https://www.physio-pedia.com/Thoracic_Kyphosis" }
            ],
            tip: "تيبس الظهر الصدري يجبر الرقبة على الحركة الزائدة." 
          },
          { 
            id: "13_4_2", 
            name: "ألم الأضلاع (Rib Pain)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة Costochondritis", requirement: "فهم التهاب غضاريف الأضلاع وألم الصدر الميكانيكي." },
              { text: "فهم الـ Rib Dysfunction", requirement: "دراسة 'قفل' الضلع وكيفية فكه يدوياً." }
            ], 
            resources: [
              { title: "Costochondritis Guide", url: "https://www.physio-pedia.com/Costochondritis" }
            ],
            tip: "ألم الصدر قد يكون ميكانيكياً وليس قلبياً (بعد استبعاد القلب)." 
          },
          { 
            id: "13_4_3", 
            name: "الجنف (Scoliosis)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة Adolescent Idiopathic Scoliosis", requirement: "فهم انحراف العمود الفقري الجانبي وطرق تقييمه (Cobb angle)." },
              { text: "فهم الـ Schroth Method", requirement: "دراسة المبادئ الأساسية لعلاج الجنف بالتمارين التنفسية والحركية." }
            ], 
            resources: [
              { title: "Scoliosis Guide", url: "https://www.physio-pedia.com/Scoliosis" }
            ],
            tip: "الاكتشاف المبكر للجنف يمنع الحاجة للجراحة." 
          },
          { 
            id: "13_4_4", 
            name: "التقييم السريري للصدر", 
            topic: "Assessment", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق Adam's Forward Bend test", requirement: "الاختبار الأساسي للكشف عن الجنف." },
              { text: "جس الفقرات الصدرية", requirement: "البحث عن تيبس المفاصل (Hypomobility)." }
            ], 
            resources: [
              { title: "Thoracic Assessment Video", url: "https://www.youtube.com/results?search_query=thoracic+spine+assessment+physiotherapy" }
            ],
            tip: "بروز الأضلاع عند الانحناء يشير لوجود دوران في الفقرات." 
          },
          { 
            id: "13_4_5", 
            name: "تحليل الحالات المعقدة", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "التمييز بين ألم الصدر والقلب", requirement: "كيف تفرق بين الذبحة الصدرية وألم العضلات والأضلاع؟" },
              { text: "دراسة الـ T4 Syndrome", requirement: "فهم المتلازمة النادرة التي تسبب تنميلاً في اليدين بسبب تيبس الفقرات الصدرية." }
            ], 
            resources: [
              { title: "Differential Diagnosis Thoracic Pain", url: "https://www.physio-pedia.com/Differential_Diagnosis_of_Thoracic_Pain" }
            ],
            tip: "ألم الظهر الصدري قد يكون مسمعاً من المعدة أو المرارة." 
          },
          { 
            id: "13_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Thoracic Extension on Foam Roller", requirement: "تعلم كيفية زيادة مرونة الظهر الصدري باستخدام الرولر." },
              { text: "تعليم تمارين الـ Open Book", requirement: "تحسين دوران الفقرات الصدرية لزيادة مدى حركة الرقبة." }
            ], 
            resources: [
              { title: "Thoracic Mobility Video", url: "https://www.youtube.com/results?search_query=thoracic+mobility+exercises+physiotherapy" }
            ],
            tip: "مرونة الظهر الصدري تحمي الرقبة والقطنية معاً." 
          },
          { 
            id: "13_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الرقبة والصدر", requirement: "التأكد من القدرة على التعامل مع مشاكل العمود الفقري العلوي بالكامل." },
              { text: "راحة", requirement: "استعد لشهر العلاج اليدوي (Maitland)." }
            ], 
            resources: [],
            tip: "لقد أتممت دراسة العمود الفقري بالكامل!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 13, 
    name: "شهر 14 — العلاج اليدوي (Maitland Concept)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Foundations & Grades of Movement", 
        days: [
          { 
            id: "14_1_1", 
            name: "مبادئ ميتلاند (Maitland Principles)", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة مفهوم ميتلاند", requirement: "فهم الـ Clinical Reasoning والتركيز على الـ Signs & Symptoms." },
              { text: "فهم الـ SINSS model", requirement: "دراسة تقييم (Severity, Irritability, Nature, Stage, Stability) للحالة." }
            ], 
            resources: [
              { title: "Maitland Concept Guide", url: "https://www.physio-pedia.com/Maitland's_Concept" }
            ],
            tip: "ميتلاند يعتمد على الاستماع للمريض بقدر ما يعتمد على تحريك مفاصله." 
          },
          { 
            id: "14_1_2", 
            name: "درجات الحركة (Grades I & II)", 
            topic: "Manual", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Grade I & II oscillations", requirement: "دراسة الحركات الصغيرة والواسعة في بداية المدى الحركي لتقليل الألم." },
              { text: "تطبيق الـ Neurophysiological effect", requirement: "فهم كيف يقلل التحريك اللطيف من حساسية الجهاز العصبي." }
            ], 
            resources: [
              { title: "Maitland Mobilization Grades", url: "https://www.physio-pedia.com/Maitland's_Mobilisation_Grading_Scale" }
            ],
            tip: "الدرجات الأولى والثانية مخصصة لعلاج الألم وليس التيبس." 
          },
          { 
            id: "14_1_3", 
            name: "درجات الحركة (Grades III & IV)", 
            topic: "Manual", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Grade III & IV oscillations", requirement: "دراسة الحركات التي تصل لنهاية المدى الحركي (Resistance) لزيادة المرونة." },
              { text: "فهم الـ Mechanical effect", requirement: "دراسة كيفية شد الأنسجة المتيبسة ميكانيكياً." }
            ], 
            resources: [
              { title: "Manual Therapy Grades Video", url: "https://www.youtube.com/results?search_query=maitland+grades+of+mobilization" }
            ],
            tip: "الدرجات الثالثة والرابعة مخصصة لعلاج التيبس وزيادة المدى." 
          },
          { 
            id: "14_1_4", 
            name: "الدرجة الخامسة (Grade V - Manipulation)", 
            topic: "Manual", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ High Velocity Low Amplitude (HVLA)", requirement: "دراسة الـ Thrust السريع في نهاية المدى الحركي." },
              { text: "فهم الـ Contraindications", requirement: "دراسة متى يمنع منعاً باتاً عمل 'طرقعة' للمفاصل (هشاشة، كسور، أورام)." }
            ], 
            resources: [
              { title: "Spinal Manipulation Guide", url: "https://www.physio-pedia.com/Spinal_Manipulation" }
            ],
            tip: "الدرجة الخامسة تحتاج مهارة عالية وحذر شديد." 
          },
          { 
            id: "14_1_5", 
            name: "تقييم المقاومة (Resistance & Pain)", 
            topic: "Manual", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة الـ Pain-Resistance relationship", requirement: "فهم متى يظهر الألم بالنسبة للمقاومة (قبل، أثناء، أو بعد)." },
              { text: "تطبيق الـ End-feel assessment", requirement: "دراسة أنواع الإحساس في نهاية المدى (Firm, Hard, Soft, Empty)." }
            ], 
            resources: [
              { title: "Joint Play and End Feel", url: "https://www.physio-pedia.com/Joint_Play" }
            ],
            tip: "الإحساس باليد (Palpation) هو أهم أداة للمعالج اليدوي." 
          },
          { 
            id: "14_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الدرجات الأربعة على مفصل المعصم", requirement: "التدرب على الإحساس بالفرق بين الدرجات على مفصل سهل الجس." },
              { text: "تطبيق الـ Accessory Movements", requirement: "تعلم حركات الـ Gliding والـ Sliding داخل المفصل." }
            ], 
            resources: [
              { title: "Maitland Practical Video 1", url: "https://www.youtube.com/results?search_query=maitland+mobilization+practical+wrist" }
            ],
            tip: "ابدأ بمفاصل صغيرة لتطوير مهارة يدك." 
          },
          { 
            id: "14_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة مبادئ ميتلاند والدرجات", requirement: "التأكد من فهم متى نستخدم كل درجة بناءً على حالة المريض." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "اليد هي لسان حال المعالج مع جسم المريض." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Peripheral Joint Mobilization (Upper Limb)", 
        days: [
          { 
            id: "14_2_1", 
            name: "تحريك مفصل الكتف (Shoulder)", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الـ Inferior Glide", requirement: "لزيادة مدى الـ Abduction." },
              { text: "تطبيق الـ Posterior Glide", requirement: "لزيادة مدى الـ Flexion & Internal Rotation." }
            ], 
            resources: [
              { title: "Shoulder Mobilization Maitland", url: "https://www.physio-pedia.com/Shoulder_Mobilisation" }
            ],
            tip: "اتبع قاعدة الـ Convex-Concave دائماً." 
          },
          { 
            id: "14_2_2", 
            name: "تحريك مفصل الكوع (Elbow)", 
            topic: "Manual", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الـ Humeroulnar distraction", requirement: "لتقليل الألم وزيادة المدى العام للكوع." },
              { text: "تطبيق الـ Radioulnar glides", requirement: "لتحسين حركات الـ Supination & Pronation." }
            ], 
            resources: [
              { title: "Elbow Mobilization Video", url: "https://www.youtube.com/results?search_query=elbow+mobilization+maitland" }
            ],
            tip: "الكوع مفصل حساس، كن لطيفاً في التحريك." 
          },
          { 
            id: "14_2_3", 
            name: "تحريك مفصل المعصم واليد", 
            topic: "Manual", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الـ Radiocarpal glides", requirement: "لتحسين ثني وفرد المعصم." },
              { text: "تحريك عظام الـ Carpals", requirement: "دراسة تحريك كل عظمة صغيرة لزيادة مرونة اليد." }
            ], 
            resources: [
              { title: "Wrist Mobilization Video", url: "https://www.youtube.com/results?search_query=wrist+mobilization+maitland" }
            ],
            tip: "مرونة عظام الرسغ تريح أوتار اليد." 
          },
          { 
            id: "14_2_4", 
            name: "تقييم الاستجابة (Re-assessment)", 
            topic: "Manual", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الـ Comparable Sign", requirement: "اختبار الحركة المؤلمة قبل وبعد التحريك اليدوي للتأكد من الفعالية." },
              { text: "فهم الـ Treatment soreness", requirement: "دراسة الفرق بين ألم العلاج الطبيعي وألم الإصابة." }
            ], 
            resources: [
              { title: "Maitland Re-assessment Guide", url: "https://www.physio-pedia.com/Clinical_Reasoning" }
            ],
            tip: "إذا لم تتحسن الحركة المؤلمة، فغير اتجاه التحريك." 
          },
          { 
            id: "14_2_5", 
            name: "دمج التحريك مع التمارين", 
            topic: "Manual", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تطبيق الـ Mobilization with Movement (Intro)", requirement: "فهم كيف يمهد ميتلاند الطريق لتمارين القوة." },
              { text: "تعليم المريض الـ Self-mobilization", requirement: "تطبيق تمارين منزلية تحاكي التحريك اليدوي." }
            ], 
            resources: [
              { title: "Self Mobilization Techniques", url: "https://www.youtube.com/results?search_query=self+mobilization+physiotherapy" }
            ],
            tip: "التحريك اليدوي يفتح نافذة زمنية بدون ألم لممارسة التمارين." 
          },
          { 
            id: "14_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Anterior Glide للكتف", requirement: "لزيادة مدى الـ Extension & External Rotation." },
              { text: "تطبيق الـ Distraction للكوع", requirement: "تعلم كيفية سحب المفصل لفك الضغط." }
            ], 
            resources: [
              { title: "Upper Limb Mobilization Video", url: "https://www.youtube.com/results?search_query=upper+limb+mobilization+maitland+practical" }
            ],
            tip: "وضعية المريض المريحة تضمن استرخاء عضلاته." 
          },
          { 
            id: "14_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تحريك الطرف العلوي", requirement: "التأكد من حفظ اتجاهات التحريك لكل مفصل." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "التكرار هو سر إتقان العلاج اليدوي." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Peripheral Joint Mobilization (Lower Limb)", 
        days: [
          { 
            id: "14_3_1", 
            name: "تحريك مفصل الورك (Hip)", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الـ Lateral Distraction", requirement: "لتقليل ألم الخشونة وزيادة المدى العام." },
              { text: "تطبيق الـ Posterior Glide", requirement: "لزيادة مدى الـ Flexion & Internal Rotation." }
            ], 
            resources: [
              { title: "Hip Mobilization Maitland", url: "https://www.physio-pedia.com/Hip_Mobilisation" }
            ],
            tip: "الورك مفصل عميق يحتاج قوة في التحريك." 
          },
          { 
            id: "14_3_2", 
            name: "تحريك مفصل الركبة (Knee)", 
            topic: "Manual", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الـ Tibiofemoral glides", requirement: "لتحسين ثني وفرد الركبة." },
              { text: "تحريك الصابونة (Patellar glides)", requirement: "لتحسين مسار الصابونة وتقليل الألم الأمامي." }
            ], 
            resources: [
              { title: "Knee Mobilization Video", url: "https://www.youtube.com/results?search_query=knee+mobilization+maitland" }
            ],
            tip: "حركة الصابونة ضرورية جداً لحركة الركبة الكاملة." 
          },
          { 
            id: "14_3_3", 
            name: "تحريك مفصل الكاحل والقدم", 
            topic: "Manual", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الـ Talocrural distraction", requirement: "لزيادة مدى الـ Dorsiflexion." },
              { text: "تحريك مفصل الـ Subtalar", requirement: "لتحسين حركات الـ Inversion & Eversion." }
            ], 
            resources: [
              { title: "Ankle Mobilization Video", url: "https://www.youtube.com/results?search_query=ankle+mobilization+maitland" }
            ],
            tip: "الكاحل المتيبس يسبب مشاكل في الركبة والظهر." 
          },
          { 
            id: "14_3_4", 
            name: "تحريك المفاصل الصغيرة للقدم", 
            topic: "Manual", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تحريك عظام الـ Midfoot", requirement: "لزيادة مرونة قوس القدم." },
              { text: "تحريك مفصل الـ MTP", requirement: "لتحسين حركة إصبع القدم الكبير (ضروري للمشي)." }
            ], 
            resources: [
              { title: "Foot Mobilization Video", url: "https://www.youtube.com/results?search_query=foot+mobilization+maitland" }
            ],
            tip: "حركة إصبع القدم الكبير هي سر الدفع الصحيح أثناء المشي." 
          },
          { 
            id: "14_3_5", 
            name: "تحليل ميكانيكا المفاصل (Arthrokinematics)", 
            topic: "Manual", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة الـ Roll, Spin, and Slide", requirement: "فهم الحركات الدقيقة التي تحدث داخل المفصل." },
              { text: "تطبيق قاعدة الـ Concave-Convex", requirement: "تحديد اتجاه التحريك بناءً على شكل أسطح المفصل." }
            ], 
            resources: [
              { title: "Arthrokinematics Guide", url: "https://www.physio-pedia.com/Arthrokinematics" }
            ],
            tip: "إذا كان السطح المتحرك مقعراً (Concave)، فالتحريك يكون في نفس اتجاه حركة العظمة." 
          },
          { 
            id: "14_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Inferior Glide للورك", requirement: "استخدام حزام العلاج اليدوي (Mulligan belt) للمساعدة." },
              { text: "تطبيق الـ Posterior Glide للكاحل", requirement: "لزيادة مدى الـ Dorsiflexion." }
            ], 
            resources: [
              { title: "Lower Limb Mobilization Video", url: "https://www.youtube.com/results?search_query=lower+limb+mobilization+maitland+practical" }
            ],
            tip: "استخدام وزن جسمك يسهل تحريك المفاصل الكبيرة." 
          },
          { 
            id: "14_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تحريك الطرف السفلي", requirement: "التأكد من إتقان تقنيات تحريك الورك والركبة والكاحل." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الطرف السفلي هو أساس الحركة والتوازن." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Spinal Mobilization (Cervical, Thoracic, Lumbar)", 
        days: [
          { 
            id: "14_4_1", 
            name: "تحريك الفقرات العنقية (Cervical)", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الـ Central PA glides", requirement: "الضغط المباشر على النتوء الشوكي (Spinous process) لتقليل ألم الرقبة." },
              { text: "تطبيق الـ Unilateral PA glides", requirement: "الضغط الجانبي على الـ Facet joints لزيادة الدوران." }
            ], 
            resources: [
              { title: "Cervical Mobilization Maitland", url: "https://www.physio-pedia.com/Cervical_Mobilisation" }
            ],
            tip: "الرقبة حساسة جداً، استخدم ضغطاً بسيطاً (Grade I-II) في البداية." 
          },
          { 
            id: "14_4_2", 
            name: "تحريك الفقرات الصدرية (Thoracic)", 
            topic: "Manual", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الـ Thoracic PA glides", requirement: "لتحسين فرد الظهر وتقليل التحدب." },
              { text: "تحريك الأضلاع (Rib mobilization)", requirement: "لتحسين التنفس وتقليل ألم الصدر الميكانيكي." }
            ], 
            resources: [
              { title: "Thoracic Mobilization Video", url: "https://www.youtube.com/results?search_query=thoracic+mobilization+maitland" }
            ],
            tip: "الفقرات الصدرية تحتاج ضغطاً أقوى من العنقية." 
          },
          { 
            id: "14_4_3", 
            name: "تحريك الفقرات القطنية (Lumbar)", 
            topic: "Manual", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الـ Lumbar PA glides", requirement: "لتقليل ألم الظهر وزيادة المدى." },
              { text: "تطبيق الـ Rotation mobilization", requirement: "تحريك الفقرات في وضعية النوم الجانبي لزيادة الليونة." }
            ], 
            resources: [
              { title: "Lumbar Mobilization Video", url: "https://www.youtube.com/results?search_query=lumbar+mobilization+maitland" }
            ],
            tip: "التحريك الدوراني فعال جداً لآلام الظهر الحادة." 
          },
          { 
            id: "14_4_4", 
            name: "تحريك المفصل العجزي الحرقفي (SIJ)", 
            topic: "Manual", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الـ SIJ Anterior/Posterior glides", requirement: "لتحسين حركة الحوض وتقليل الألم المسمع." },
              { text: "فهم الـ Upslip & Downslip correction", requirement: "دراسة تقنيات تعديل وضعية عظمة الحوض يدوياً." }
            ], 
            resources: [
              { title: "SIJ Mobilization Video", url: "https://www.youtube.com/results?search_query=sij+mobilization+maitland" }
            ],
            tip: "الـ SIJ مفصل قليل الحركة لكن تحريكه يفرق كثيراً في الألم." 
          },
          { 
            id: "14_4_5", 
            name: "تحليل نتائج العلاج اليدوي", 
            topic: "Manual", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة الـ Treatment reactions", requirement: "فهم متى يكون الألم بعد الجلسة طبيعياً ومتى يكون علامة على التحريك الزائد." },
              { text: "تعديل الخطة بناءً على الاستجابة", requirement: "متى نزيد الدرجة (Grade) ومتى نقللها؟" }
            ], 
            resources: [
              { title: "Manual Therapy Clinical Reasoning", url: "https://www.physio-pedia.com/Clinical_Reasoning_in_Manual_Therapy" }
            ],
            tip: "دائماً أعد التقييم بعد كل تقنية يدوية." 
          },
          { 
            id: "14_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ PA glides على كامل العمود الفقري", requirement: "التدرب على الإحساس بتيبس كل فقرة (Intervertebral motion)." },
              { text: "تصميم جلسة علاج يدوية متكاملة", requirement: "اختيار مفصل طرفي وفقرة مرتبطة به وتحريكهما." }
            ], 
            resources: [
              { title: "Spinal Mobilization Video", url: "https://www.youtube.com/results?search_query=spinal+mobilization+maitland+practical" }
            ],
            tip: "العمود الفقري هو محور الحركة، اجعله مرناً." 
          },
          { 
            id: "14_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر ميتلاند", requirement: "التأكد من إتقان فلسفة ميتلاند والقدرة على تطبيق الدرجات الأربعة بدقة." },
              { text: "راحة", requirement: "استعد لشهر مولجان (Mulligan)." }
            ], 
            resources: [],
            tip: "أصبحت الآن تمتلك 'يداً ذهبية' في العلاج اليدوي!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 14, 
    name: "شهر 15 — العلاج اليدوي (Mulligan Concept)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Foundations & MWM Principles", 
        days: [
          { 
            id: "15_1_1", 
            name: "مبادئ مولجان (Mulligan Principles)", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة مفهوم مولجان", requirement: "فهم الـ Positional Fault theory (الخلل البسيط في وضعية المفصل)." },
              { text: "فهم الـ PILL response", requirement: "دراسة معايير نجاح التقنية (Pain-free, Instant, Long-Lasting)." }
            ], 
            resources: [
              { title: "Mulligan Concept Guide", url: "https://www.physio-pedia.com/Mulligan_Concept" }
            ],
            tip: "مولجان يعتمد على الحركة النشطة للمريض أثناء التحريك اليدوي." 
          },
          { 
            id: "15_1_2", 
            name: "قاعدة الـ CROCKS", 
            topic: "Manual", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ CROCKS acronym", requirement: "فهم (Contraindications, Repetitions, Overpressure, Communication, Knowledge, Skill)." },
              { text: "تطبيق الـ Overpressure", requirement: "فهم أهمية الضغط الإضافي في نهاية المدى لضمان استمرارية النتيجة." }
            ], 
            resources: [
              { title: "Mulligan Principles Video", url: "https://www.youtube.com/results?search_query=mulligan+concept+principles+physiotherapy" }
            ],
            tip: "إذا لم تكن التقنية خالية من الألم تماماً، فلا تستمر فيها." 
          },
          { 
            id: "15_1_3", 
            name: "التحريك مع الحركة (MWM)", 
            topic: "Manual", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Mobilization with Movement", requirement: "دراسة كيفية دمج الـ Accessory glide مع الـ Physiological movement." },
              { text: "تطبيق الـ Gliding direction", requirement: "فهم كيفية البحث عن الاتجاه الصحيح للتحريك (غالباً ما يكون عرضياً)." }
            ], 
            resources: [
              { title: "MWM Introduction", url: "https://www.physio-pedia.com/Mobilisation_with_Movement" }
            ],
            tip: "المعالج يثبت المفصل والمريض يتحرك." 
          },
          { 
            id: "15_1_4", 
            name: "تقنيات الـ NAGs", 
            topic: "Manual", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الـ Natural Apophyseal Glides", requirement: "دراسة تقنية التحريك الإيقاعي للفقرات العنقية والصدرية العليا." },
              { text: "فهم الـ Reverse NAGs", requirement: "تطبيق التقنية العكسية لمرضى الـ Forward Head Posture." }
            ], 
            resources: [
              { title: "NAGs Technique Video", url: "https://www.youtube.com/results?search_query=mulligan+nags+technique" }
            ],
            tip: "الـ NAGs تستخدم للفقرات من C2 إلى T3." 
          },
          { 
            id: "15_1_5", 
            name: "تقنيات الـ SNAGs", 
            topic: "Manual", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تطبيق الـ Sustained Natural Apophyseal Glides", requirement: "دراسة التحريك المستمر للفقرات أثناء حركة المريض." },
              { text: "فهم الـ Self-SNAGs", requirement: "تعليم المريض كيفية تطبيق التقنية لنفسه باستخدام منشفة." }
            ], 
            resources: [
              { title: "SNAGs Technique Video", url: "https://www.youtube.com/results?search_query=mulligan+snags+technique" }
            ],
            tip: "الـ SNAGs فعالة جداً لزيادة مدى حركة الرقبة والظهر فوراً." 
          },
          { 
            id: "15_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ SNAGs للرقبة (Rotation)", requirement: "تحسين دوران الرقبة باستخدام الضغط على الـ Facet joint." },
              { text: "تطبيق الـ Self-SNAG للفقرات القطنية", requirement: "استخدام حزام لزيادة مدى ثني الظهر بدون ألم." }
            ], 
            resources: [
              { title: "Mulligan Practical Video 1", url: "https://www.youtube.com/results?search_query=mulligan+practical+spine" }
            ],
            tip: "الضغط يجب أن يكون موازياً لسطح المفصل." 
          },
          { 
            id: "15_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة مبادئ مولجان والـ NAGs/SNAGs", requirement: "التأكد من فهم فلسفة 'الألم صفر' أثناء العلاج." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "مولجان يحول الحركة المؤلمة إلى حركة ممتعة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — MWM for Upper Limb", 
        days: [
          { 
            id: "15_2_1", 
            name: "MWM لمفصل الكتف", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الـ Posterolateral glide", requirement: "لزيادة مدى الـ Elevation (Flexion/Abduction)." },
              { text: "تطبيق الـ MWM for AC Joint", requirement: "لتقليل ألم الكتف عند رفع اليد للأعلى." }
            ], 
            resources: [
              { title: "Shoulder MWM Video", url: "https://www.youtube.com/results?search_query=mulligan+shoulder+mwm" }
            ],
            tip: "استخدم حزام مولجان لتثبيت لوح الكتف." 
          },
          { 
            id: "15_2_2", 
            name: "MWM لمفصل الكوع", 
            topic: "Manual", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الـ Lateral Glide للكوع", requirement: "العلاج السحري لمرضى الـ Tennis Elbow." },
              { text: "تطبيق الـ MWM for Flexion/Extension", requirement: "تحسين مدى حركة الكوع بعد الكسور." }
            ], 
            resources: [
              { title: "Elbow MWM for Tennis Elbow", url: "https://www.youtube.com/results?search_query=mulligan+elbow+lateral+glide" }
            ],
            tip: "الـ Lateral glide للكوع يقلل ألم القبضة فوراً." 
          },
          { 
            id: "15_2_3", 
            name: "MWM لمفصل المعصم واليد", 
            topic: "Manual", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الـ MWM for Wrist Extension", requirement: "تحسين فرد المعصم باستخدام الـ Medial/Lateral glides." },
              { text: "تحريك عظام الـ Carpals مع الحركة", requirement: "لتقليل ألم المعصم الميكانيكي." }
            ], 
            resources: [
              { title: "Wrist MWM Video", url: "https://www.youtube.com/results?search_query=mulligan+wrist+mwm" }
            ],
            tip: "المعصم يستجيب بسرعة كبيرة لتقنيات مولجان." 
          },
          { 
            id: "15_2_4", 
            name: "تقنيات الـ SMWAM", 
            topic: "Manual", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Spinal Mobilization with Arm Movement", requirement: "تحسين حركة الذراع بتحريك فقرات الرقبة في نفس الوقت." },
              { text: "تطبيق التقنية لمرضى الـ Radiculopathy", requirement: "تقليل ألم الذراع العصبي." }
            ], 
            resources: [
              { title: "SMWAM Technique Video", url: "https://www.youtube.com/results?search_query=mulligan+smwam+technique" }
            ],
            tip: "هذه التقنية تدمج بين الرقبة والطرف العلوي." 
          },
          { 
            id: "15_2_5", 
            name: "استخدام الـ Mulligan Taping", 
            topic: "Manual", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تطبيق الـ Positional Taping", requirement: "استخدام اللاصق الطبي للحفاظ على نتيجة التحريك اليدوي." },
              { text: "تطبيق اللاصق للكوع والكتف", requirement: "تثبيت المفصل في الوضعية الصحيحة (Corrected position)." }
            ], 
            resources: [
              { title: "Mulligan Taping Techniques", url: "https://www.youtube.com/results?search_query=mulligan+taping+physiotherapy" }
            ],
            tip: "اللاصق الطبي يطيل مفعول الجلسة لساعات أو أيام." 
          },
          { 
            id: "15_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Lateral Glide للكوع لزميل", requirement: "اختبار قوة القبضة قبل وبعد التقنية." },
              { text: "تطبيق الـ MWM للكتف باستخدام الحزام", requirement: "تحسين مدى الـ Abduction." }
            ], 
            resources: [
              { title: "Upper Limb MWM Practical", url: "https://www.youtube.com/results?search_query=mulligan+upper+limb+practical" }
            ],
            tip: "تأكد من أن اتجاه الضغط مريح تماماً للمريض." 
          },
          { 
            id: "15_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة MWM الطرف العلوي", requirement: "التأكد من حفظ التقنيات الأساسية للكتف والكوع والمعصم." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "مولجان هو أسرع طريقة لإبهار المريض بنتائج فورية." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — MWM for Lower Limb", 
        days: [
          { 
            id: "15_3_1", 
            name: "MWM لمفصل الورك", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الـ Lateral Glide للورك", requirement: "لتحسين ثني الورك (Flexion) وتقليل ألم الخشونة." },
              { text: "تطبيق الـ MWM for Internal Rotation", requirement: "استخدام الحزام لزيادة الدوران الداخلي." }
            ], 
            resources: [
              { title: "Hip MWM Video", url: "https://www.youtube.com/results?search_query=mulligan+hip+mwm" }
            ],
            tip: "الورك يحتاج قوة دفع كبيرة باستخدام وزن جسمك." 
          },
          { 
            id: "15_3_2", 
            name: "MWM لمفصل الركبة", 
            topic: "Manual", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الـ Internal Rotation glide", requirement: "لتحسين ثني الركبة (Flexion) بعد العمليات." },
              { text: "تطبيق الـ MWM for Extension", requirement: "لتحسين فرد الركبة الكامل." }
            ], 
            resources: [
              { title: "Knee MWM Video", url: "https://www.youtube.com/results?search_query=mulligan+knee+mwm" }
            ],
            tip: "دوران عظمة القصبة للداخل يسهل ثني الركبة." 
          },
          { 
            id: "15_3_3", 
            name: "MWM لمفصل الكاحل", 
            topic: "Manual", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الـ Posterior Glide للـ Talus", requirement: "لزيادة مدى الـ Dorsiflexion (ضروري للمشي والقرفصاء)." },
              { text: "تطبيق الـ MWM for Inversion Sprain", requirement: "علاج آثار التواء الكاحل القديمة." }
            ], 
            resources: [
              { title: "Ankle MWM Video", url: "https://www.youtube.com/results?search_query=mulligan+ankle+mwm" }
            ],
            tip: "تحسين الـ Dorsiflexion يريح الركبة والظهر." 
          },
          { 
            id: "15_3_4", 
            name: "تقنيات الـ SMWLM", 
            topic: "Manual", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Spinal Mobilization with Leg Movement", requirement: "تحسين حركة الرجل بتحريك فقرات الظهر القطنية." },
              { text: "تطبيق التقنية لمرضى عرق النسا", requirement: "لزيادة مدى اختبار الـ SLR بدون ألم." }
            ], 
            resources: [
              { title: "SMWLM Technique Video", url: "https://www.youtube.com/results?search_query=mulligan+smwlm+technique" }
            ],
            tip: "هذه التقنية فعالة جداً لآلام الظهر المسمعة للرجل." 
          },
          { 
            id: "15_3_5", 
            name: "تقنية الـ Squeeze للكاحل", 
            topic: "Manual", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تطبيق الـ MWM for Syndesmosis", requirement: "لتقليل ألم الكاحل العالي (High ankle sprain)." },
              { text: "تحريك عظام القدم مع الحركة", requirement: "لتحسين مرونة قوس القدم." }
            ], 
            resources: [
              { title: "Foot MWM Video", url: "https://www.youtube.com/results?search_query=mulligan+foot+mwm" }
            ],
            tip: "الضغط العرضي للكاحل يعيد الثبات للمفصل." 
          },
          { 
            id: "15_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Posterior Glide للكاحل باستخدام الحزام", requirement: "تحسين مدى الـ Dorsiflexion أثناء القرفصاء." },
              { text: "تطبيق الـ Hip Lateral Glide لزميل", requirement: "تحسين مدى ثني الورك." }
            ], 
            resources: [
              { title: "Lower Limb MWM Practical", url: "https://www.youtube.com/results?search_query=mulligan+lower+limb+practical" }
            ],
            tip: "الحزام هو يدك الثالثة في علاج الطرف السفلي." 
          },
          { 
            id: "15_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة MWM الطرف السفلي", requirement: "التأكد من إتقان تقنيات الورك والركبة والكاحل." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الطرف السفلي يحتاج ثباتاً حركياً عالياً." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Advanced Mulligan Techniques & Clinical Reasoning", 
        days: [
          { 
            id: "15_4_1", 
            name: "تقنيات الصداع (Headache SNAGs)", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الـ C1-C2 SNAG", requirement: "علاج الصداع الناتج عن الرقبة (Cervicogenic headache)." },
              { text: "فهم الـ Headache Release technique", requirement: "تطبيق الضغط اللطيف على قاعدة الجمجمة لتقليل الصداع." }
            ], 
            resources: [
              { title: "Mulligan Headache Techniques", url: "https://www.youtube.com/results?search_query=mulligan+headache+snags" }
            ],
            tip: "نتائج علاج الصداع بمولجان غالباً ما تكون سحرية وفورية." 
          },
          { 
            id: "15_4_2", 
            name: "تقنيات الدوخة (Dizziness SNAGs)", 
            topic: "Manual", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الـ SNAGs لمرضى الدوخة", requirement: "تحسين التوازن وتقليل الدوار الناتج عن مشاكل الرقبة." },
              { text: "فهم الـ Contraindications للدوخة", requirement: "متى يمنع تحريك الرقبة عند مريض الدوخة؟" }
            ], 
            resources: [
              { title: "Mulligan Dizziness Techniques", url: "https://www.youtube.com/results?search_query=mulligan+dizziness+snags" }
            ],
            tip: "الدوخة الناتجة عن الرقبة تستجيب جيداً للتحريك اللطيف." 
          },
          { 
            id: "15_4_3", 
            name: "تقنيات الـ PRPs", 
            topic: "Manual", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Pain Release Phenomena", requirement: "دراسة تقنيات الضغط المستمر لعلاج الآلام المستعصية (مثل الـ Tennis Elbow المزمن)." },
              { text: "تطبيق الـ Compression techniques", requirement: "استخدام الضغط المباشر لفك 'قفل' المفاصل." }
            ], 
            resources: [
              { title: "Mulligan PRP Techniques", url: "https://www.youtube.com/results?search_query=mulligan+prp+techniques" }
            ],
            tip: "الـ PRPs تستخدم عندما تفشل تقنيات الـ MWM التقليدية." 
          },
          { 
            id: "15_4_4", 
            name: "دمج مولجان مع المدارس الأخرى", 
            topic: "Clinical Reasoning", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "الفرق بين ميتلاند ومولجان", requirement: "متى تختار التحريك السلبي (Maitland) ومتى تختار التحريك مع الحركة (Mulligan)؟" },
              { text: "دمج الـ MDT مع مولجان", requirement: "استخدام تقنيات مولجان لتثبيت نتائج تمارين ماكنزي." }
            ], 
            resources: [
              { title: "Manual Therapy Integration", url: "https://www.physio-pedia.com/Manual_Therapy" }
            ],
            tip: "المعالج الذكي يستخدم أفضل ما في كل مدرسة." 
          },
          { 
            id: "15_4_5", 
            name: "تحليل الحالات المعقدة", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "علاج مريض يعاني من آلام متعددة", requirement: "كيف ترتب أولوياتك باستخدام تقنيات مولجان؟" },
              { text: "التعامل مع الحالات التي لا تستجيب", requirement: "ماذا تفعل إذا لم تحقق الـ PILL response؟" }
            ], 
            resources: [
              { title: "Mulligan Clinical Reasoning", url: "https://www.physio-pedia.com/Clinical_Reasoning" }
            ],
            tip: "إذا لم تنجح التقنية، فراجع الـ Positional Fault أو اتجاه الضغط." 
          },
          { 
            id: "15_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم جلسة مولجان متكاملة", requirement: "اختيار حالة (مثلاً التواء كاحل قديم) وتطبيق الـ MWM والـ Taping والـ Self-MWM." },
              { text: "تطبيق الـ C1-C2 SNAG لزميل", requirement: "لتحسين دوران الرقبة العلوي." }
            ], 
            resources: [
              { title: "Mulligan Advanced Practical", url: "https://www.youtube.com/results?search_query=mulligan+advanced+practical+physiotherapy" }
            ],
            tip: "النتائج الفورية هي أفضل وسيلة لكسب ثقة المريض." 
          },
          { 
            id: "15_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر مولجان", requirement: "التأكد من إتقان فلسفة مولجان والقدرة على تطبيق الـ MWM والـ SNAGs بدقة." },
              { text: "راحة", requirement: "استعد لشهر ماكنزي (MDT)." }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن معالجاً يدوياً متميزاً بتقنيات مولجان!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 15, 
    name: "شهر 16 — طريقة ماكنزي (MDT Concept)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Foundations & Classification", 
        days: [
          { 
            id: "16_1_1", 
            name: "مبادئ ماكنزي (MDT Principles)", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة مفهوم ماكنزي", requirement: "فهم الـ Mechanical Diagnosis and Therapy (MDT) والتركيز على الـ Self-treatment." },
              { text: "فهم الـ Centralization phenomenon", requirement: "دراسة انتقال الألم من الأطراف إلى مركز الظهر كعلامة على التحسن." }
            ], 
            resources: [
              { title: "McKenzie Method Guide", url: "https://www.physio-pedia.com/McKenzie_Method" }
            ],
            tip: "ماكنزي يعتمد على تصنيف الحالة بناءً على استجابة الألم للحركة المتكررة." 
          },
          { 
            id: "16_1_2", 
            name: "تصنيف الحالات (Classification)", 
            topic: "Manual", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Derangement Syndrome", requirement: "فهم الحالات التي تتغير فيها الأعراض بسرعة مع الحركة (الأكثر شيوعاً)." },
              { text: "دراسة الـ Dysfunction Syndrome", requirement: "فهم الآلام الناتجة عن تيبس الأنسجة (تظهر في نهاية المدى فقط)." }
            ], 
            resources: [
              { title: "MDT Classification System", url: "https://www.physio-pedia.com/McKenzie_Method#Classification" }
            ],
            tip: "التصنيف الصحيح هو مفتاح العلاج الناجح في ماكنزي." 
          },
          { 
            id: "16_1_3", 
            name: "متلازمة الوضعية (Postural Syndrome)", 
            topic: "Manual", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Postural Syndrome", requirement: "دراسة الألم الناتج عن وضعيات ثابتة لفترة طويلة (لا يوجد خلل ميكانيكي)." },
              { text: "تطبيق الـ Slump-Stretch correction", requirement: "تعليم المريض كيفية الجلوس الصحيح وتصحيح القوام." }
            ], 
            resources: [
              { title: "Postural Syndrome Guide", url: "https://www.physio-pedia.com/Postural_Syndrome" }
            ],
            tip: "علاج متلازمة الوضعية هو التعليم (Education) فقط." 
          },
          { 
            id: "16_1_4", 
            name: "التقييم الميكانيكي (Mechanical Assessment)", 
            topic: "Manual", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الـ Repeated Movements", requirement: "دراسة تأثير حركات الـ Flexion & Extension المتكررة على الألم." },
              { text: "فهم الـ Peripheralization", requirement: "الحذر من الحركات التي تزيد الألم في الأطراف وتبعده عن الظهر." }
            ], 
            resources: [
              { title: "MDT Assessment Video", url: "https://www.youtube.com/results?search_query=mckenzie+assessment+lumbar+spine" }
            ],
            tip: "راقب استجابة الألم أثناء وبعد الحركة المتكررة." 
          },
          { 
            id: "16_1_5", 
            name: "تحديد الاتجاه المفضل (Directional Preference)", 
            topic: "Manual", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة الـ Directional Preference", requirement: "تحديد الحركة التي تسبب الـ Centralization أو تقلل الألم." },
              { text: "فهم الـ Obstruction to movement", requirement: "دراسة متى تمنع الحركة في اتجاه معين بسبب 'عائق' ميكانيكي." }
            ], 
            resources: [
              { title: "Directional Preference Guide", url: "https://www.physio-pedia.com/Directional_Preference" }
            ],
            tip: "الاتجاه المفضل هو الدواء الميكانيكي للمريض." 
          },
          { 
            id: "16_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Repeated Extension in Lying", requirement: "التدرب على تمرين الـ Cobra الشهير لمرضى الانزلاق الغضروفي." },
              { text: "تطبيق الـ Repeated Flexion in Lying", requirement: "التدرب على ضم الركبتين للصدر لمرضى الـ Stenosis." }
            ], 
            resources: [
              { title: "McKenzie Lumbar Exercises Video", url: "https://www.youtube.com/results?search_query=mckenzie+lumbar+spine+exercises" }
            ],
            tip: "تأكد من وصول المريض لنهاية المدى (End-range) لتحقيق النتيجة." 
          },
          { 
            id: "16_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تصنيفات ماكنزي الثلاثة", requirement: "التأكد من القدرة على التمييز بين Derangement, Dysfunction, and Posture." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "ماكنزي يعطي المريض السيطرة على ألمه." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Lumbar Spine MDT", 
        days: [
          { 
            id: "16_2_1", 
            name: "علاج الـ Lumbar Derangement (Extension)", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الـ Extension progression", requirement: "التدرج من النوم على البطن (Prone) إلى الـ Extension in standing." },
              { text: "فهم الـ Lateral Shift", requirement: "دراسة انحراف القوام الجانبي وكيفية تصحيحه قبل البدء في تمارين الـ Extension." }
            ], 
            resources: [
              { title: "Lumbar Extension Progression", url: "https://www.youtube.com/results?search_query=mckenzie+lumbar+extension+progression" }
            ],
            tip: "لا تبدأ بالـ Extension إذا كان المريض لديه Lateral Shift غير مصحح." 
          },
          { 
            id: "16_2_2", 
            name: "تصحيح الـ Lateral Shift", 
            topic: "Manual", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الـ Manual Shift Correction", requirement: "تعلم كيفية دفع حوض المريض يدوياً لإعادة القوام للمنتصف." },
              { text: "تعليم الـ Self-shift correction", requirement: "كيف يصحح المريض انحراف ظهره باستخدام الحائط." }
            ], 
            resources: [
              { title: "Lateral Shift Correction Video", url: "https://www.youtube.com/results?search_query=mckenzie+lateral+shift+correction" }
            ],
            tip: "تصحيح الشفت قد يكون مؤلماً لكنه ضروري جداً." 
          },
          { 
            id: "16_2_3", 
            name: "علاج الـ Lumbar Derangement (Flexion)", 
            topic: "Manual", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الـ Flexion in lying/standing", requirement: "متى نستخدم الثني كاتجاه مفضل؟ (غالباً في الـ Stenosis أو الـ Adherent Nerve Root)." },
              { text: "فهم الـ Adherent Nerve Root (ANR)", requirement: "دراسة تيبس العصب بعد التئام الانزلاق الغضروفي وكيفية شده بالثني." }
            ], 
            resources: [
              { title: "MDT for Adherent Nerve Root", url: "https://www.youtube.com/results?search_query=mckenzie+adherent+nerve+root" }
            ],
            tip: "ألم الـ ANR يظهر في نهاية الحركة ويختفي فوراً عند العودة." 
          },
          { 
            id: "16_2_4", 
            name: "القوى المساعدة من المعالج (Clinician Overpressure)", 
            topic: "Manual", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الـ Extension mobilization", requirement: "استخدام يد المعالج لزيادة مدى الـ Extension أثناء حركة المريض." },
              { text: "تطبيق الـ Lumbar Rotation mobilization", requirement: "استخدام الدوران كقوة إضافية لحل المشاكل الجانبية (Unilateral pain)." }
            ], 
            resources: [
              { title: "MDT Clinician Techniques Lumbar", url: "https://www.youtube.com/results?search_query=mckenzie+lumbar+clinician+techniques" }
            ],
            tip: "نستخدم يدنا فقط إذا لم يحقق المريض نتيجة كاملة بتمارينه الذاتية." 
          },
          { 
            id: "16_2_5", 
            name: "الوقاية من الانتكاسة (Prophylaxis)", 
            topic: "Manual", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تعليم الـ Lumbar Roll usage", requirement: "أهمية استخدام ساند الظهر أثناء الجلوس للحفاظ على الـ Lordosis." },
              { text: "دراسة الـ Lifting techniques", requirement: "كيفية رفع الأشياء بطريقة ماكنزي (حفظ تقوس الظهر)." }
            ], 
            resources: [
              { title: "McKenzie Prophylaxis Guide", url: "https://www.youtube.com/results?search_query=mckenzie+method+prevention" }
            ],
            tip: "الوقاية هي الجزء الأهم في مدرسة ماكنزي." 
          },
          { 
            id: "16_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Extension with Overpressure لزميل", requirement: "التدرب على الضغط اللطيف على الفقرات القطنية أثناء الـ Cobra." },
              { text: "تطبيق الـ Side-gliding in standing", requirement: "تمرين بديل لتصحيح المشاكل الجانبية." }
            ], 
            resources: [
              { title: "Lumbar MDT Practical Video", url: "https://www.youtube.com/results?search_query=mckenzie+lumbar+practical" }
            ],
            tip: "تأكد من استرخاء عضلات الظهر تماماً أثناء التمرين." 
          },
          { 
            id: "16_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة MDT الفقرات القطنية", requirement: "التأكد من إتقان تصحيح الشفت وتدرج تمارين الفرد والثني." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الظهر القوي هو الظهر المرن في كل الاتجاهات." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Cervical & Thoracic Spine MDT", 
        days: [
          { 
            id: "16_3_1", 
            name: "علاج الـ Cervical Derangement (Retraction)", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الـ Cervical Retraction (Chin tuck)", requirement: "التمرين الأساسي لمرضى الرقبة لإعادة الفقرات لوضعها الطبيعي." },
              { text: "فهم الـ Protracted posture", requirement: "دراسة تأثير وضعية الرأس للأمام على الغضاريف العنقية." }
            ], 
            resources: [
              { title: "Cervical Retraction Video", url: "https://www.youtube.com/results?search_query=mckenzie+cervical+retraction" }
            ],
            tip: "الـ Retraction هو مفتاح علاج معظم آلام الرقبة." 
          },
          { 
            id: "16_3_2", 
            name: "علاج الـ Cervical Derangement (Extension)", 
            topic: "Manual", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الـ Retraction with Extension", requirement: "إضافة فرد الرقبة للخلف بعد عمل الـ Chin tuck." },
              { text: "تطبيق الـ Extension in lying", requirement: "فرد الرقبة خارج حافة السرير لزيادة المدى." }
            ], 
            resources: [
              { title: "Cervical Extension Progression", url: "https://www.youtube.com/results?search_query=mckenzie+cervical+extension+progression" }
            ],
            tip: "دائماً ابدأ بالـ Retraction قبل الـ Extension." 
          },
          { 
            id: "16_3_3", 
            name: "علاج المشاكل الجانبية للرقبة", 
            topic: "Manual", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الـ Cervical Lateral Flexion", requirement: "استخدام الميل الجانبي كاتجاه مفضل للآلام غير المركزية." },
              { text: "تطبيق الـ Cervical Rotation", requirement: "استخدام الدوران المتكرر لتحسين المدى وتقليل الألم." }
            ], 
            resources: [
              { title: "Cervical Lateral MDT Video", url: "https://www.youtube.com/results?search_query=mckenzie+cervical+lateral+flexion" }
            ],
            tip: "إذا لم يتحسن الألم بالـ Retraction، جرب الحركات الجانبية." 
          },
          { 
            id: "16_3_4", 
            name: "MDT للفقرات الصدرية (Thoracic)", 
            topic: "Manual", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الـ Thoracic Extension in sitting", requirement: "استخدام ظهر الكرسي كنقطة ارتكاز لفرد الفقرات الصدرية." },
              { text: "تطبيق الـ Thoracic Rotation", requirement: "تحسين دوران الصدر لتقليل الألم بين اللوحين." }
            ], 
            resources: [
              { title: "Thoracic MDT Exercises", url: "https://www.youtube.com/results?search_query=mckenzie+thoracic+spine+exercises" }
            ],
            tip: "الفقرات الصدرية المتيبسة تزيد الحمل على الرقبة والظهر." 
          },
          { 
            id: "16_3_5", 
            name: "تقنيات المعالج للرقبة", 
            topic: "Manual", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تطبيق الـ Cervical Retraction with Overpressure", requirement: "استخدام يد المعالج لزيادة ضغط الـ Chin tuck." },
              { text: "تطبيق الـ Cervical Traction", requirement: "سحب الرقبة يدوياً لتقليل ضغط الغضاريف." }
            ], 
            resources: [
              { title: "Cervical Clinician Techniques", url: "https://www.youtube.com/results?search_query=mckenzie+cervical+clinician+techniques" }
            ],
            tip: "كن حذراً جداً في التعامل مع الفقرات العنقية العليا." 
          },
          { 
            id: "16_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Retraction & Extension لزميل", requirement: "التأكد من الوصول لنهاية المدى بدون زيادة الألم الطرفي." },
              { text: "تعليم المريض وضعية النوم الصحيحة", requirement: "استخدام وسادة تدعم تقوس الرقبة." }
            ], 
            resources: [
              { title: "Cervical MDT Practical Video", url: "https://www.youtube.com/results?search_query=mckenzie+cervical+practical" }
            ],
            tip: "الوسادة الصحيحة هي نصف العلاج لمرضى الرقبة." 
          },
          { 
            id: "16_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة MDT الرقبة والصدر", requirement: "التأكد من إتقان تمارين الـ Retraction وتدرجاتها." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الرقبة المرنة تعني ذهناً صافياً وأعصاباً هادئة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — MDT for Extremities & Clinical Reasoning", 
        days: [
          { 
            id: "16_4_1", 
            name: "MDT للمفاصل الطرفية (Extremities)", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق مبادئ ماكنزي على الركبة والكتف", requirement: "دراسة كيف يمكن تصنيف آلام المفاصل الطرفية لـ Derangement & Dysfunction." },
              { text: "فهم الـ Joint derangement", requirement: "دراسة الحالات التي يتحسن فيها ألم المفصل فوراً بحركة متكررة." }
            ], 
            resources: [
              { title: "MDT for Extremities Guide", url: "https://www.physio-pedia.com/McKenzie_Method#Extremities" }
            ],
            tip: "ماكنزي ليس للظهر فقط، بل لكل مفاصل الجسم." 
          },
          { 
            id: "16_4_2", 
            name: "التفريق بين ألم الظهر وألم المفاصل", 
            topic: "Clinical Reasoning", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Spinal screening", requirement: "كيف تتأكد أن ألم الكتف أو الورك ليس مسمعاً من الرقبة أو الظهر؟" },
              { text: "تطبيق الـ Repeated movements للعمود الفقري", requirement: "اختبار تأثير حركة الظهر على ألم الطرف قبل علاجه مباشرة." }
            ], 
            resources: [
              { title: "Spinal vs Peripheral Screening", url: "https://www.youtube.com/results?search_query=mckenzie+spinal+screening+extremities" }
            ],
            tip: "دائماً افحص الظهر قبل أن تلمس الركبة أو الكتف." 
          },
          { 
            id: "16_4_3", 
            name: "التعامل مع الحالات غير المستجيبة", 
            topic: "Clinical Reasoning", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Irreducible Derangement", requirement: "دراسة الحالات التي لا تستجيب ميكانيكياً (مثل الانزلاق الغضروفي الكبير جداً)." },
              { text: "متى تحول المريض للجراحة؟", requirement: "دراسة الـ Red Flags والعلامات العصبية المتدهورة." }
            ], 
            resources: [
              { title: "MDT Red Flags", url: "https://www.physio-pedia.com/Red_Flags_in_Spinal_Pain" }
            ],
            tip: "المعالج الشاطر يعرف متى يتوقف ويحول المريض." 
          },
          { 
            id: "16_4_4", 
            name: "دمج ماكنزي مع العلاج اليدوي الآخر", 
            topic: "Clinical Reasoning", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دمج مولجان مع ماكنزي", requirement: "استخدام الـ MWM لفتح المدى الحركي ثم تمارين ماكنزي للحفاظ عليه." },
              { text: "الفرق بين ميتلاند وماكنزي", requirement: "فهم متى نركز على الـ Passive mobilization ومتى نركز على الـ Active exercises." }
            ], 
            resources: [
              { title: "Integrating Manual Therapy Schools", url: "https://www.physio-pedia.com/Manual_Therapy" }
            ],
            tip: "ماكنزي هو الأساس، والمدارس الأخرى هي مكملات." 
          },
          { 
            id: "16_4_5", 
            name: "بناء برنامج علاجي متكامل", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تصميم خطة علاجية لمريض ديسك حاد", requirement: "تحديد التمارين، عدد التكرارات، والتعليمات الوقائية." },
              { text: "متابعة تطور الحالة", requirement: "كيف تغير التمارين مع تحول الألم من الطرف للمركز (Centralization)؟" }
            ], 
            resources: [
              { title: "MDT Case Study", url: "https://www.physio-pedia.com/Clinical_Reasoning_Case_Study" }
            ],
            tip: "التزام المريض بالتمارين المنزلية هو سر نجاح ماكنزي." 
          },
          { 
            id: "16_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم جلسة ماكنزي كاملة لزميل", requirement: "التقييم، التصنيف، تحديد الاتجاه المفضل، والتعليمات الوقائية." },
              { text: "اختبار الـ Repeated movements للمفاصل الطرفية", requirement: "تطبيق المبادئ على الركبة أو الكاحل." }
            ], 
            resources: [
              { title: "Advanced MDT Practical", url: "https://www.youtube.com/results?search_query=mckenzie+method+advanced+practical" }
            ],
            tip: "أنت الآن 'ميكانيكي' جسم الإنسان!" 
          },
          { 
            id: "16_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر ماكنزي", requirement: "التأكد من إتقان فلسفة MDT والقدرة على تصنيف وعلاج حالات العمود الفقري." },
              { text: "راحة", requirement: "استعد لشهر تحريك الأعصاب (Neurodynamics)." }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن خبيراً في أقوى مدرسة لعلاج الظهر في العالم!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 16, 
    name: "شهر 17 — تحريك الأعصاب (Neurodynamics)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Foundations & Upper Limb Tests", 
        days: [
          { 
            id: "17_1_1", 
            name: "مبادئ الـ Neurodynamics", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة فيزيولوجيا الأعصاب", requirement: "فهم كيف يتحرك العصب داخل النفق العصبي (Sliding & Tension)." },
              { text: "فهم الـ Mechanosensitivity", requirement: "دراسة لماذا يصبح العصب حساساً للضغط أو الشد عند الإصابة." }
            ], 
            resources: [
              { title: "Neurodynamics Guide", url: "https://www.physio-pedia.com/Neurodynamics" }
            ],
            tip: "الأعصاب تحتاج دم وحركة ومساحة لتعمل بشكل صحيح." 
          },
          { 
            id: "17_1_2", 
            name: "اختبار العصب المتوسط (ULNT 1)", 
            topic: "Manual", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الـ ULNT 1 (Median Nerve)", requirement: "دراسة خطوات الاختبار (Shoulder depression, Abduction, Extension, etc.)." },
              { text: "فهم الـ Structural Differentiation", requirement: "كيف تفرق بين ألم العصب وألم العضلات باستخدام حركة الرقبة الجانبية." }
            ], 
            resources: [
              { title: "ULNT 1 Median Nerve Video", url: "https://www.youtube.com/results?search_query=ulnt1+median+nerve+test" }
            ],
            tip: "العصب المتوسط هو المسؤول عن معظم حالات تنميل اليد." 
          },
          { 
            id: "17_1_3", 
            name: "اختبار العصب الكعبري (ULNT 2b)", 
            topic: "Manual", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الـ ULNT 2b (Radial Nerve)", requirement: "دراسة خطوات الاختبار (Shoulder depression, Elbow extension, Internal rotation)." },
              { text: "فهم أعراض الـ Radial nerve entrapment", requirement: "دراسة الألم في الجزء الخارجي من الكوع والساعد." }
            ], 
            resources: [
              { title: "ULNT 2b Radial Nerve Video", url: "https://www.youtube.com/results?search_query=ulnt2b+radial+nerve+test" }
            ],
            tip: "العصب الكعبري يتأثر بوضعية الـ Pronation وثني المعصم." 
          },
          { 
            id: "17_1_4", 
            name: "اختبار العصب الزندي (ULNT 3)", 
            topic: "Manual", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الـ ULNT 3 (Ulnar Nerve)", requirement: "دراسة خطوات الاختبار (Shoulder abduction, Elbow flexion, Wrist extension)." },
              { text: "فهم الـ Cubital Tunnel Syndrome", requirement: "دراسة انضغاط العصب الزندي عند الكوع." }
            ], 
            resources: [
              { title: "ULNT 3 Ulnar Nerve Video", url: "https://www.youtube.com/results?search_query=ulnt3+ulnar+nerve+test" }
            ],
            tip: "وضعية 'النظارة' هي الوضعية النهائية لاختبار العصب الزندي." 
          },
          { 
            id: "17_1_5", 
            name: "تقنيات الـ Sliders vs Tensioners", 
            topic: "Manual", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Nerve Sliders", requirement: "دراسة الحركات اللطيفة التي تحرك العصب بدون شده (تستخدم في الحالات الحادة)." },
              { text: "فهم الـ Nerve Tensioners", requirement: "دراسة الحركات التي تشد العصب من الطرفين (تستخدم في الحالات المزمنة)." }
            ], 
            resources: [
              { title: "Sliders vs Tensioners Guide", url: "https://www.youtube.com/results?search_query=nerve+sliders+vs+tensioners" }
            ],
            tip: "ابدأ دائماً بالـ Sliders لتجنب تهيج العصب." 
          },
          { 
            id: "17_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ ULNT 1 لزميل", requirement: "التدرب على سلاسة الخطوات والوصول للنقطة التي يبدأ فيها العرض." },
              { text: "تطبيق الـ Median nerve slider", requirement: "تحريك الرقبة واليد في نفس الاتجاه لتحريك العصب." }
            ], 
            resources: [
              { title: "Upper Limb Neurodynamics Practical", url: "https://www.youtube.com/results?search_query=upper+limb+neurodynamics+practical" }
            ],
            tip: "العصب لا يحب الشد العنيف، كن رقيقاً." 
          },
          { 
            id: "17_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة اختبارات الطرف العلوي", requirement: "التأكد من حفظ خطوات كل اختبار والقدرة على التفرقة بين الأعصاب." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "الأعصاب هي أسلاك الكهرباء في الجسم، حافظ عليها." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Lower Limb Tests & Management", 
        days: [
          { 
            id: "17_2_1", 
            name: "اختبار العصب الوركي (SLR Test)", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الـ Straight Leg Raise (SLR)", requirement: "دراسة زوايا الاختبار (30-70 درجة) وتأثيرها على العصب الوركي." },
              { text: "تطبيق الـ Sensitizing maneuvers", requirement: "إضافة الـ Dorsiflexion أو الـ Neck flexion لزيادة الشد." }
            ], 
            resources: [
              { title: "SLR Test Guide", url: "https://www.physio-pedia.com/Straight_Leg_Raise_Test" }
            ],
            tip: "الـ SLR الإيجابي الحقيقي يسبب ألم أسفل الركبة." 
          },
          { 
            id: "17_2_2", 
            name: "اختبار الـ Slump Test", 
            topic: "Manual", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الـ Slump Test", requirement: "دراسة خطوات الاختبار الأكثر حساسية لمشاكل الديسك وعرق النسا." },
              { text: "فهم الـ Differential Diagnosis", requirement: "كيف تفرق بين شد العضلات الخلفية وشد العصب في وضعية الـ Slump." }
            ], 
            resources: [
              { title: "Slump Test Video", url: "https://www.youtube.com/results?search_query=slump+test+physiotherapy" }
            ],
            tip: "الـ Slump test يشد الجهاز العصبي بالكامل من الرأس للقدم." 
          },
          { 
            id: "17_2_3", 
            name: "اختبار العصب الفخذي (PKB Test)", 
            topic: "Manual", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الـ Prone Knee Bend (Femoral Nerve)", requirement: "دراسة الاختبار المخصص لآلام الفخذ الأمامية (L2-L4)." },
              { text: "فهم الـ Femoral nerve entrapment", requirement: "دراسة أسباب تنميل الفخذ الأمامي." }
            ], 
            resources: [
              { title: "Femoral Nerve Test Video", url: "https://www.youtube.com/results?search_query=prone+knee+bend+test+femoral+nerve" }
            ],
            tip: "هذا الاختبار يجرى والمريض نائم على بطنه." 
          },
          { 
            id: "17_2_4", 
            name: "تحريك العصب الوركي (Sciatic Sliders)", 
            topic: "Manual", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الـ Sciatic nerve sliders", requirement: "تعلم كيفية تحريك العصب الوركي بدون ألم لمرضى عرق النسا." },
              { text: "تطبيق الـ Sciatic nerve tensioners", requirement: "للمراحل المتأخرة من التأهيل لزيادة مرونة العصب." }
            ], 
            resources: [
              { title: "Sciatic Nerve Flossing Video", url: "https://www.youtube.com/results?search_query=sciatic+nerve+flossing+exercises" }
            ],
            tip: "تمارين الـ Flossing تساعد في تقليل الالتهاب العصبي." 
          },
          { 
            id: "17_2_5", 
            name: "تحريك الأعصاب الطرفية للرجل", 
            topic: "Manual", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تحريك العصب الـ Tibial", requirement: "لآلام الكعب وباطن القدم." },
              { text: "تحريك العصب الـ Peroneal", requirement: "لآلام الجزء الخارجي من الساق والقدم." }
            ], 
            resources: [
              { title: "Lower Limb Nerve Glides", url: "https://www.youtube.com/results?search_query=tibial+and+peroneal+nerve+glides" }
            ],
            tip: "تغيير وضعية القدم يغير العصب المستهدف." 
          },
          { 
            id: "17_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Slump test لزميل", requirement: "التدرب على التدرج في الخطوات ومراقبة الاستجابة." },
              { text: "تطبيق الـ Femoral nerve slider", requirement: "تحريك الرأس والرجل في وضعية النوم الجانبي." }
            ], 
            resources: [
              { title: "Lower Limb Neurodynamics Practical", url: "https://www.youtube.com/results?search_query=lower+limb+neurodynamics+practical" }
            ],
            tip: "الهدوء والتركيز ضروريان عند التعامل مع الأعصاب." 
          },
          { 
            id: "17_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة اختبارات الطرف السفلي", requirement: "التأكد من حفظ خطوات الـ SLR, Slump, and PKB." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الرجل القوية تحتاج أعصاباً حرة الحركة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Clinical Syndromes & Entrapments", 
        days: [
          { 
            id: "17_3_1", 
            name: "متلازمة النفق الرسغي (Carpal Tunnel)", 
            topic: "Pathology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة الـ Carpal Tunnel Syndrome", requirement: "فهم انضغاط العصب المتوسط عند المعصم." },
              { text: "تطبيق الـ Phalen & Tinel tests", requirement: "دراسة الاختبارات السريرية لتشخيص الحالة." }
            ], 
            resources: [
              { title: "Carpal Tunnel Syndrome Guide", url: "https://www.physio-pedia.com/Carpal_Tunnel_Syndrome" }
            ],
            tip: "تحريك العصب المتوسط جزء أساسي من علاج الـ CTS." 
          },
          { 
            id: "17_3_2", 
            name: "متلازمة مخرج الصدر (Thoracic Outlet)", 
            topic: "Pathology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Thoracic Outlet Syndrome (TOS)", requirement: "فهم انضغاط الضفيرة العصبية عند الرقبة والكتف." },
              { text: "تطبيق الـ Adson & Roos tests", requirement: "دراسة الاختبارات الاستفزازية للـ TOS." }
            ], 
            resources: [
              { title: "Thoracic Outlet Syndrome Guide", url: "https://www.physio-pedia.com/Thoracic_Outlet_Syndrome" }
            ],
            tip: "الـ TOS يحتاج علاجاً للرقبة والكتف والأعصاب معاً." 
          },
          { 
            id: "17_3_3", 
            name: "عرق النسا الكاذب (Piriformis Syndrome)", 
            topic: "Pathology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Piriformis Syndrome", requirement: "فهم انضغاط العصب الوركي تحت عضلة الكومثرى." },
              { text: "التفريق بين الديسك والبيريفورمس", requirement: "دراسة الاختبارات التي تستهدف العضلة مباشرة (FAIR test)." }
            ], 
            resources: [
              { title: "Piriformis Syndrome Guide", url: "https://www.physio-pedia.com/Piriformis_Syndrome" }
            ],
            tip: "ألم البيريفورمس يتركز في المقعدة ولا يصعد للظهر." 
          },
          { 
            id: "17_3_4", 
            name: "متلازمة النفق الكاحلي (Tarsal Tunnel)", 
            topic: "Pathology", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة الـ Tarsal Tunnel Syndrome", requirement: "فهم انضغاط العصب الـ Tibial عند الكاحل." },
              { text: "تطبيق الـ Dorsiflexion-Eversion test", requirement: "الاختبار العصبي المخصص لهذه الحالة." }
            ], 
            resources: [
              { title: "Tarsal Tunnel Syndrome Guide", url: "https://www.physio-pedia.com/Tarsal_Tunnel_Syndrome" }
            ],
            tip: "هذه الحالة تسبب تنميلاً وحرقاناً في باطن القدم." 
          },
          { 
            id: "17_3_5", 
            name: "الـ Double Crush Syndrome", 
            topic: "Pathology", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم مفهوم الـ Double Crush", requirement: "دراسة كيف يمكن لانضغاط العصب في مكانين (مثل الرقبة والمعصم) أن يزيد الأعراض." },
              { text: "تطبيق التقييم الشامل للعصب", requirement: "فحص مسار العصب بالكامل من المنبع للمصب." }
            ], 
            resources: [
              { title: "Double Crush Syndrome Explained", url: "https://www.physio-pedia.com/Double_Crush_Syndrome" }
            ],
            tip: "عالج الرقبة حتى لو كان الألم في اليد فقط." 
          },
          { 
            id: "17_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Roos test لزميل", requirement: "فتح وقفل اليدين لمدة 3 دقائق ومراقبة الأعراض." },
              { text: "تطبيق الـ Tinel sign على المعصم والكوع والكاحل", requirement: "التدرب على النقر الخفيف فوق مسار العصب." }
            ], 
            resources: [
              { title: "Nerve Entrapment Tests Practical", url: "https://www.youtube.com/results?search_query=nerve+entrapment+tests+physiotherapy" }
            ],
            tip: "الـ Tinel sign الإيجابي يعطي إحساساً بكهرباء بسيطة." 
          },
          { 
            id: "17_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة متلازمات انضغاط الأعصاب", requirement: "التأكد من فهم أسباب وأعراض واختبارات كل حالة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "التشخيص الدقيق هو نصف العلاج." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Advanced Neurodynamics & Integration", 
        days: [
          { 
            id: "17_4_1", 
            name: "تحريك الأعصاب في الحالات الحادة", 
            topic: "Manual", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الـ Indirect neurodynamics", requirement: "تحريك مفاصل بعيدة عن العصب لتقليل الحساسية." },
              { text: "فهم الـ Irritability level", requirement: "تعديل الجرعة بناءً على شدة ألم المريض." }
            ], 
            resources: [
              { title: "Acute Nerve Pain Management", url: "https://www.youtube.com/results?search_query=acute+nerve+pain+physiotherapy" }
            ],
            tip: "في الحالات الحادة، 'الأقل هو الأكثر' (Less is more)." 
          },
          { 
            id: "17_4_2", 
            name: "دمج تحريك الأعصاب مع العلاج اليدوي", 
            topic: "Clinical Reasoning", 
            badge: "الأحد", 
            tasks: [
              { text: "دمج ميتلاند مع تحريك الأعصاب", requirement: "تحريك الفقرات لفتح المساحة للعصب ثم تحريك العصب نفسه." },
              { text: "دمج مولجان مع تحريك الأعصاب", requirement: "استخدام الـ MWM لتحسين حركة المفصل المرتبط بالعصب." }
            ], 
            resources: [
              { title: "Integrating Neurodynamics", url: "https://www.physio-pedia.com/Manual_Therapy" }
            ],
            tip: "العصب لا يتحرك في فراغ، بل بين عضلات ومفاصل." 
          },
          { 
            id: "17_4_3", 
            name: "تمارين التقوية للجهاز العصبي", 
            topic: "Exercise", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Nerve loading", requirement: "دراسة كيف يمكن للتمارين أن تحسن مرونة وقوة العصب." },
              { text: "تطبيق الـ Progressive loading", requirement: "التدرج من الـ Sliders إلى الـ Tensioners إلى التمارين الوظيفية." }
            ], 
            resources: [
              { title: "Nerve Loading Exercises", url: "https://www.youtube.com/results?search_query=nerve+loading+exercises+physiotherapy" }
            ],
            tip: "العصب يحتاج وقتاً أطول للتكيف مقارنة بالعضلات." 
          },
          { 
            id: "17_4_4", 
            name: "التعامل مع الآلام العصبية المزمنة", 
            topic: "Clinical Reasoning", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Central Sensitization", requirement: "دراسة كيف يصبح الدماغ حساساً للألم حتى بعد التئام العصب." },
              { text: "تطبيق الـ Pain Education", requirement: "شرح طبيعة الألم العصبي للمريض لتقليل الخوف والقلق." }
            ], 
            resources: [
              { title: "Chronic Nerve Pain Management", url: "https://www.physio-pedia.com/Central_Sensitisation" }
            ],
            tip: "في الألم المزمن، نحن نعالج الجهاز العصبي بالكامل وليس العصب فقط." 
          },
          { 
            id: "17_4_5", 
            name: "بناء برنامج علاجي متكامل", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تصميم خطة علاجية لمريض ديسك مع عرق نسا", requirement: "دمج ماكنزي مع تحريك الأعصاب والتمارين العلاجية." },
              { text: "متابعة تطور الحالة", requirement: "كيف تعرف أن العصب بدأ في التعافي؟ (تحسن القوة، ردود الفعل، والإحساس)." }
            ], 
            resources: [
              { title: "Neurodynamics Case Study", url: "https://www.physio-pedia.com/Clinical_Reasoning_Case_Study" }
            ],
            tip: "تحسن الإحساس والقوة أهم من اختفاء الألم فوراً." 
          },
          { 
            id: "17_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم جلسة تحريك أعصاب كاملة لزميل", requirement: "التقييم، اختيار الـ Slider المناسب، والتدرج للـ Tensioner." },
              { text: "تطبيق الـ Neural mobilization للطرفين العلوي والسفلي", requirement: "التأكد من إتقان كل الاختبارات والتقنيات." }
            ], 
            resources: [
              { title: "Advanced Neurodynamics Practical", url: "https://www.youtube.com/results?search_query=advanced+neurodynamics+practical" }
            ],
            tip: "أنت الآن تمتلك مهارة نادرة وقوية في علاج الأعصاب!" 
          },
          { 
            id: "17_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر تحريك الأعصاب", requirement: "التأكد من إتقان فلسفة Neurodynamics والقدرة على تشخيص وعلاج المشاكل العصبية." },
              { text: "راحة", requirement: "استعد لشهر الإبر الجافة (Dry Needling)." }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن خبيراً في 'كهرباء' الجسم!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 17, 
    name: "شهر 18 — الإبر الجافة (Dry Needling)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Foundations & Safety", 
        days: [
          { 
            id: "18_1_1", 
            name: "مبادئ الإبر الجافة", 
            topic: "Advanced", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة مفهوم الـ Dry Needling", requirement: "فهم الفرق بين الإبر الجافة والوخز بالإبر الصينية (Acupuncture)." },
              { text: "فهم الـ Myofascial Trigger Points", requirement: "دراسة تكوين العقد العضلية (Active vs Latent trigger points)." }
            ], 
            resources: [
              { title: "Dry Needling Guide", url: "https://www.physio-pedia.com/Dry_Needling" }
            ],
            tip: "الإبر الجافة تستهدف العضلات مباشرة لفك التشنجات." 
          },
          { 
            id: "18_1_2", 
            name: "قواعد السلامة والتعقيم", 
            topic: "Advanced", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Contraindications", requirement: "متى يمنع استخدام الإبر (فوبيا الإبر، مشاكل النزيف، الحمل، الأورام)." },
              { text: "فهم الـ Infection Control", requirement: "دراسة كيفية التعقيم والتخلص الآمن من الإبر المستخدمة (Sharps container)." }
            ], 
            resources: [
              { title: "Dry Needling Safety Standards", url: "https://www.physio-pedia.com/Dry_Needling#Safety" }
            ],
            tip: "سلامة المريض هي الأولوية القصوى دائماً." 
          },
          { 
            id: "18_1_3", 
            name: "أنواع الإبر وطرق الإدخال", 
            topic: "Advanced", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة مقاسات الإبر", requirement: "فهم متى نستخدم إبر قصيرة (للوجه) وإبر طويلة (للمقعدة)." },
              { text: "تطبيق الـ Needle insertion techniques", requirement: "دراسة كيفية إمساك الإبرة وإدخالها بسرعة وبدون ألم." }
            ], 
            resources: [
              { title: "Needle Insertion Video", url: "https://www.youtube.com/results?search_query=dry+needling+insertion+technique" }
            ],
            tip: "الإدخال السريع يقلل من ألم الجلد." 
          },
          { 
            id: "18_1_4", 
            name: "فهم الـ Local Twitch Response", 
            topic: "Advanced", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة الـ Local Twitch Response (LTR)", requirement: "فهم الانقباض اللاإرادي للعضلة عند لمس العقدة بالإبرة." },
              { text: "فهم التأثير الفسيولوجي للـ LTR", requirement: "دراسة كيف يقلل هذا الانقباض من المواد الكيميائية المسببة للألم." }
            ], 
            resources: [
              { title: "Local Twitch Response Explained", url: "https://www.physio-pedia.com/Local_Twitch_Response" }
            ],
            tip: "الـ Twitch هو علامة على أنك في المكان الصحيح." 
          },
          { 
            id: "18_1_5", 
            name: "تقنيات التحريك (Piston vs Rotation)", 
            topic: "Advanced", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تطبيق الـ Piston technique", requirement: "دراسة حركة الإبرة للأعلى والأسفل داخل العضلة." },
              { text: "تطبيق الـ Needle rotation", requirement: "دراسة لف الإبرة لشد الأنسجة الضامة (Fascia)." }
            ], 
            resources: [
              { title: "Dry Needling Manipulation Video", url: "https://www.youtube.com/results?search_query=dry+needling+piston+technique" }
            ],
            tip: "التحريك يزيد من فعالية التقنية في فك العقد." 
          },
          { 
            id: "18_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "التدرب على إمساك الإبرة وإدخالها في 'إسفنجة'", requirement: "تطوير مهارة اليد في التحكم بالإبرة قبل تجربتها على البشر." },
              { text: "تحديد الـ Trigger points بالجس", requirement: "التدرب على الإحساس بالـ Taut band داخل العضلة." }
            ], 
            resources: [
              { title: "Dry Needling Practical Basics", url: "https://www.youtube.com/results?search_query=dry+needling+practical+for+beginners" }
            ],
            tip: "يدك هي التي توجه الإبرة، فاجعلها حساسة." 
          },
          { 
            id: "18_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أساسيات السلامة والتعقيم", requirement: "التأكد من حفظ الموانع والاحتياطات." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "الإبرة أداة علاجية، فاستخدمها بحكمة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Upper Body Dry Needling", 
        days: [
          { 
            id: "18_2_1", 
            name: "عضلات الرقبة والكتف (Trapezius)", 
            topic: "Advanced", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الإبر لعضلة الـ Upper Trapezius", requirement: "دراسة كيفية مسك العضلة (Pincer grip) لتجنب الرئة." },
              { text: "علاج الـ Levator Scapulae", requirement: "لتقليل ألم الرقبة وتيبسها." }
            ], 
            resources: [
              { title: "Trapezius Dry Needling Video", url: "https://www.youtube.com/results?search_query=dry+needling+upper+trapezius" }
            ],
            tip: "دائماً وجه الإبرة بعيداً عن تجويف الصدر." 
          },
          { 
            id: "18_2_2", 
            name: "عضلات لوح الكتف (Rotator Cuff)", 
            topic: "Advanced", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الإبر لعضلة الـ Infraspinatus", requirement: "علاج ألم الكتف الأمامي المسمع." },
              { text: "علاج الـ Supraspinatus", requirement: "لتحسين مدى حركة الكتف وتقليل الالتهاب." }
            ], 
            resources: [
              { title: "Shoulder Dry Needling Video", url: "https://www.youtube.com/results?search_query=dry+needling+shoulder+muscles" }
            ],
            tip: "عضلات لوح الكتف تستجيب بسرعة مذهلة للإبر." 
          },
          { 
            id: "18_2_3", 
            name: "عضلات الظهر العلوية (Rhomboids)", 
            topic: "Advanced", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الإبر لعضلات الـ Rhomboids", requirement: "علاج الألم بين اللوحين." },
              { text: "فهم الـ Pneumothorax risk", requirement: "دراسة كيفية تجنب ثقب الرئة عند العمل قريباً من القفص الصدري." }
            ], 
            resources: [
              { title: "Rhomboids Dry Needling Safety", url: "https://www.youtube.com/results?search_query=dry+needling+rhomboids+safety" }
            ],
            tip: "استخدم زاوية مائلة (Oblique) واجعل العظمة تحت الإبرة كحماية." 
          },
          { 
            id: "18_2_4", 
            name: "عضلات الذراع (Tennis Elbow)", 
            topic: "Advanced", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الإبر لعضلات الـ Extensors", requirement: "علاج الـ Lateral Epicondylitis." },
              { text: "علاج الـ Brachioradialis", requirement: "لتقليل ألم الساعد." }
            ], 
            resources: [
              { title: "Tennis Elbow Dry Needling", url: "https://www.youtube.com/results?search_query=dry+needling+tennis+elbow" }
            ],
            tip: "الإبر الجافة تزيد من تدفق الدم للأوتار الضعيفة." 
          },
          { 
            id: "18_2_5", 
            name: "عضلات اليد والمعصم", 
            topic: "Advanced", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تطبيق الإبر لعضلات الـ Thenar", requirement: "علاج ألم قاعدة الإبهام." },
              { text: "علاج الـ Interossei", requirement: "لتحسين مرونة أصابع اليد." }
            ], 
            resources: [
              { title: "Hand Dry Needling Video", url: "https://www.youtube.com/results?search_query=dry+needling+hand+muscles" }
            ],
            tip: "عضلات اليد صغيرة، استخدم إبراً قصيرة جداً." 
          },
          { 
            id: "18_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Pincer grip للـ Trapezius لزميل", requirement: "التدرب على عزل العضلة عن الرئة قبل الإدخال." },
              { text: "تحديد الـ Trigger points في عضلات الساعد", requirement: "التدرب على الجس الدقيق." }
            ], 
            resources: [
              { title: "Upper Body Dry Needling Practical", url: "https://www.youtube.com/results?search_query=upper+body+dry+needling+practical" }
            ],
            tip: "الثقة في اليد تأتي من كثرة الممارسة." 
          },
          { 
            id: "18_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تشريح عضلات الطرف العلوي", requirement: "التأكد من معرفة أماكن الأعصاب والأوعية الدموية لتجنبها." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "التشريح هو خريطتك، فلا تضل الطريق." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Lower Body Dry Needling", 
        days: [
          { 
            id: "18_3_1", 
            name: "عضلات المقعدة (Gluteus Maximus/Medius)", 
            topic: "Advanced", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الإبر لعضلات الـ Glutes", requirement: "علاج ألم الحوض والظهر المسمع." },
              { text: "فهم الـ Sciatic nerve location", requirement: "دراسة كيفية تجنب العصب الوركي عند العمل في المقعدة." }
            ], 
            resources: [
              { title: "Gluteal Dry Needling Video", url: "https://www.youtube.com/results?search_query=dry+needling+gluteus+maximus" }
            ],
            tip: "عضلات المقعدة سميكة، قد تحتاج إبراً بطول 50-75 ملم." 
          },
          { 
            id: "18_3_2", 
            name: "عضلات الفخذ الأمامية (Quadriceps)", 
            topic: "Advanced", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الإبر لعضلة الـ Rectus Femoris", requirement: "علاج ألم الركبة الأمامي." },
              { text: "علاج الـ VMO", requirement: "لتحسين ثبات الصابونة." }
            ], 
            resources: [
              { title: "Quadriceps Dry Needling Video", url: "https://www.youtube.com/results?search_query=dry+needling+quadriceps" }
            ],
            tip: "عضلات الفخذ تستجيب جيداً للـ Piston technique." 
          },
          { 
            id: "18_3_3", 
            name: "عضلات الفخذ الخلفية (Hamstrings)", 
            topic: "Advanced", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الإبر لعضلات الـ Hamstrings", requirement: "علاج التشنجات المزمنة وزيادة المدى الحركي." },
              { text: "علاج الـ Adductors", requirement: "لتقليل ألم الحوض الداخلي." }
            ], 
            resources: [
              { title: "Hamstrings Dry Needling Video", url: "https://www.youtube.com/results?search_query=dry+needling+hamstrings" }
            ],
            tip: "كن حذراً من الأوعية الدموية في الجزء الداخلي من الفخذ." 
          },
          { 
            id: "18_3_4", 
            name: "عضلات الساق (Gastrocnemius/Soleus)", 
            topic: "Advanced", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الإبر لعضلات السمانة", requirement: "علاج ألم الكعب وتشنجات الساق." },
              { text: "علاج الـ Tibialis Anterior", requirement: "لتقليل ألم الـ Shin Splints." }
            ], 
            resources: [
              { title: "Calf Dry Needling Video", url: "https://www.youtube.com/results?search_query=dry+needling+gastrocnemius" }
            ],
            tip: "عضلات السمانة حساسة جداً، توقع رد فعل قوي (Twitch)." 
          },
          { 
            id: "18_3_5", 
            name: "عضلات القدم (Plantar Fasciitis)", 
            topic: "Advanced", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تطبيق الإبر لعضلات باطن القدم", requirement: "علاج التهاب اللفافة الأخمصية." },
              { text: "فهم الـ Needle depth in foot", requirement: "دراسة كيفية العمل في الأنسجة الرقيقة للقدم." }
            ], 
            resources: [
              { title: "Foot Dry Needling Video", url: "https://www.youtube.com/results?search_query=dry+needling+plantar+fascia" }
            ],
            tip: "إبر القدم مؤلمة قليلاً، أخبر المريض بذلك." 
          },
          { 
            id: "18_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الإبر لعضلة الـ Vastus Lateralis لزميل", requirement: "التدرب على الوصول للـ Trigger point وتحقيق الـ Twitch." },
              { text: "تحديد مسار العصب الوركي بالرسم على الجلد", requirement: "لضمان الأمان أثناء العمل." }
            ], 
            resources: [
              { title: "Lower Body Dry Needling Practical", url: "https://www.youtube.com/results?search_query=lower+body+dry+needling+practical" }
            ],
            tip: "الرسم على الجلد (Surface Anatomy) يسهل عملك كثيراً." 
          },
          { 
            id: "18_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تشريح عضلات الطرف السفلي", requirement: "التأكد من حفظ أماكن الشرايين والأعصاب الكبيرة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الطرف السفلي يحمل وزن الجسم، فاجعل عضلاته مرنة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Spinal Dry Needling & Integration", 
        days: [
          { 
            id: "18_4_1", 
            name: "عضلات الظهر العميقة (Multifidus)", 
            topic: "Advanced", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الإبر لعضلات الـ Multifidus", requirement: "علاج ألم الظهر المزمن وتحسين ثبات الفقرات." },
              { text: "فهم الـ Lamina contact technique", requirement: "استخدام عظمة الفقرة كنقطة توقف آمنة للإبرة." }
            ], 
            resources: [
              { title: "Multifidus Dry Needling Video", url: "https://www.youtube.com/results?search_query=dry+needling+multifidus" }
            ],
            tip: "الوصول للعظم (Bone contact) يضمن أنك في العمق الصحيح." 
          },
          { 
            id: "18_4_2", 
            name: "عضلات الرقبة العميقة (Suboccipitals)", 
            topic: "Advanced", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الإبر لعضلات قاعدة الجمجمة", requirement: "علاج الصداع النصفي والتوتر العصبي." },
              { text: "فهم الـ Vertebral artery safety", requirement: "دراسة كيفية تجنب الشريان الفقري عند العمل في الرقبة العليا." }
            ], 
            resources: [
              { title: "Suboccipital Dry Needling Video", url: "https://www.youtube.com/results?search_query=dry+needling+suboccipital+muscles" }
            ],
            tip: "هذه المنطقة حساسة جداً، تحتاج دقة متناهية." 
          },
          { 
            id: "18_4_3", 
            name: "عضلات الحوض (Quadratus Lumborum)", 
            topic: "Advanced", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الإبر لعضلة الـ QL", requirement: "علاج ألم الجنب وأسفل الظهر." },
              { text: "فهم الـ Kidney safety", requirement: "دراسة كيفية تجنب الكلى عند العمل في منطقة الخصر." }
            ], 
            resources: [
              { title: "QL Dry Needling Safety", url: "https://www.youtube.com/results?search_query=dry+needling+quadratus+lumborum+safety" }
            ],
            tip: "وجه الإبرة دائماً باتجاه الفقرات وليس للداخل." 
          },
          { 
            id: "18_4_4", 
            name: "دمج الإبر مع الكهرباء (Electro-Needling)", 
            topic: "Advanced", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Electrical Dry Needling", requirement: "دراسة توصيل جهاز الـ TENS بالإبر لزيادة مفعول تسكين الألم." },
              { text: "تطبيق الـ Frequency settings", requirement: "فهم الفرق بين التردد العالي والمنخفض في علاج الأعصاب والعضلات." }
            ], 
            resources: [
              { title: "Electro Dry Needling Guide", url: "https://www.youtube.com/results?search_query=electrical+dry+needling+physiotherapy" }
            ],
            tip: "الكهرباء مع الإبر تعطي نتائج أسرع في الحالات المزمنة." 
          },
          { 
            id: "18_4_5", 
            name: "بناء برنامج علاجي متكامل", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "متى تستخدم الإبر في الجلسة؟", requirement: "دراسة هل الأفضل البدء بها أم إنهاء الجلسة بها؟ (غالباً في البداية لفك التشنج)." },
              { text: "دمج الإبر مع التمارين", requirement: "فهم أهمية ممارسة التمارين فوراً بعد فك العقد العضلية." }
            ], 
            resources: [
              { title: "Integrating Dry Needling in Rehab", url: "https://www.physio-pedia.com/Dry_Needling#Integration" }
            ],
            tip: "الإبر تفتح الباب، والتمارين هي التي تثبت النتيجة." 
          },
          { 
            id: "18_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم جلسة إبر جافة كاملة لحالة (مثلاً ديسك قطني)", requirement: "تحديد العضلات المستهدفة (Multifidus, QL, Glutes) وتطبيق التقنية." },
              { text: "التدرب على الـ Electro-needling لزميل", requirement: "ضبط الجهاز على شدة مريحة." }
            ], 
            resources: [
              { title: "Advanced Dry Needling Practical", url: "https://www.youtube.com/results?search_query=advanced+dry+needling+practical" }
            ],
            tip: "أنت الآن تمتلك أقوى أداة لفك التشنجات العضلية!" 
          },
          { 
            id: "18_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الإبر الجافة", requirement: "التأكد من إتقان التقنيات وقواعد السلامة والقدرة على التعامل مع المضاعفات." },
              { text: "راحة", requirement: "استعد للمرحلة الرابعة: التأهيل التخصصي." }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن خبيراً في العلاج بالإبر الجافة!" 
          }
        ] 
      }
    ] 
  },
  // Phase 4: Specialized Rehab (19-24)
  { 
    id: 18, 
    name: "شهر 19 — التأهيل الرياضي (Sports Rehabilitation)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Injury Prevention & Screening", 
        days: [
          { 
            id: "19_1_1", 
            name: "مبادئ التأهيل الرياضي", 
            topic: "Sports", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة الـ Sports Injury Cycle", requirement: "فهم مراحل الإصابة من الالتهاب إلى العودة للملعب." },
              { text: "فهم الـ Load Management", requirement: "دراسة كيفية موازنة الأحمال التدريبية لتجنب الإصابات المتكررة." }
            ], 
            resources: [
              { title: "Sports Rehabilitation Guide", url: "https://www.physio-pedia.com/Sports_Rehabilitation" }
            ],
            tip: "التأهيل الرياضي يبدأ من اليوم الأول للإصابة." 
          },
          { 
            id: "19_1_2", 
            name: "اختبارات القوام الرياضي (Screening)", 
            topic: "Sports", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق الـ Functional Movement Screen (FMS)", requirement: "دراسة الاختبارات السبعة لتقييم جودة الحركة." },
              { text: "فهم الـ Y-Balance Test", requirement: "دراسة اختبار التوازن الديناميكي للتنبؤ بمخاطر إصابات الركبة والكاحل." }
            ], 
            resources: [
              { title: "FMS Screening Guide", url: "https://www.physio-pedia.com/Functional_Movement_Screen_(FMS)" }
            ],
            tip: "الاختبارات الوظيفية تكشف نقاط الضعف قبل أن تتحول لإصابات." 
          },
          { 
            id: "19_1_3", 
            name: "تحليل الميكانيكا الحيوية للرياضي", 
            topic: "Sports", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Running Gait Analysis", requirement: "فهم مراحل الجري وكيفية اكتشاف الأخطاء الميكانيكية." },
              { text: "تحليل الـ Landing Mechanics", requirement: "دراسة كيفية هبوط الرياضي من القفز لتجنب قطع الرباط الصليبي." }
            ], 
            resources: [
              { title: "Running Gait Analysis Guide", url: "https://www.physio-pedia.com/Running_Gait_Analysis" }
            ],
            tip: "الهبوط الخاطئ هو العدو الأول للركبة." 
          },
          { 
            id: "19_1_4", 
            name: "برامج الوقاية (FIFA 11+)", 
            topic: "Sports", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة برنامج FIFA 11+", requirement: "فهم التمارين الوقائية المعتمدة عالمياً لتقليل إصابات كرة القدم." },
              { text: "تطبيق الـ Nordic Hamstring Exercise", requirement: "دراسة أقوى تمرين للوقاية من تمزق العضلات الخلفية." }
            ], 
            resources: [
              { title: "FIFA 11+ Program Guide", url: "https://www.physio-pedia.com/FIFA_11%2B" }
            ],
            tip: "15 دقيقة من الوقاية توفر شهوراً من التأهيل." 
          },
          { 
            id: "19_1_5", 
            name: "تأهيل العضلات (Muscle Injuries)", 
            topic: "Sports", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة تصنيف تمزق العضلات (Grade 1, 2, 3)", requirement: "فهم الفرق بين الشد البسيط والتمزق الكامل." },
              { text: "تطبيق الـ Eccentric Loading", requirement: "دراسة لماذا تعتبر التمارين اللامرركزية هي الأفضل لتأهيل الأوتار والعضلات." }
            ], 
            resources: [
              { title: "Muscle Injury Management", url: "https://www.physio-pedia.com/Muscle_Injuries" }
            ],
            tip: "لا تعد للملعب قبل استعادة 90% من قوة العضلة المصابة مقارنة بالسليمة." 
          },
          { 
            id: "19_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Deep Squat test لزميل", requirement: "تقييم مرونة الكاحل والورك وثبات الظهر." },
              { text: "تطبيق الـ Nordic Hamstring لزميل", requirement: "التأكد من الأداء الصحيح للتمرين." }
            ], 
            resources: [
              { title: "Sports Screening Practical", url: "https://www.youtube.com/results?search_query=functional+movement+screen+practical" }
            ],
            tip: "جودة الحركة أهم من كمية الوزن المرفوع." 
          },
          { 
            id: "19_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة برامج الوقاية واختبارات المسح", requirement: "التأكد من فهم كيفية حماية الرياضي من الإصابة." },
              { text: "راحة", requirement: "استرخِ." }
            ], 
            resources: [],
            tip: "الراحة جزء من التدريب، وليست هروباً منه." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Power, Agility & Plyometrics", 
        days: [
          { 
            id: "19_2_1", 
            name: "مبادئ الـ Plyometrics", 
            topic: "Sports", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Stretch-Shortening Cycle (SSC)", requirement: "دراسة كيف تخزن العضلات الطاقة وتفرغها بسرعة." },
              { text: "تطبيق الـ Jump Training progression", requirement: "التدرج من القفز في المكان إلى القفز فوق الحواجز." }
            ], 
            resources: [
              { title: "Plyometric Training Guide", url: "https://www.physio-pedia.com/Plyometric_Training" }
            ],
            tip: "البلأيومتريك هو الجسر بين القوة والسرعة." 
          },
          { 
            id: "19_2_2", 
            name: "تدريبات الرشاقة (Agility)", 
            topic: "Sports", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Change of Direction (COD)", requirement: "فهم ميكانيكا تغيير الاتجاه السريع بدون إصابة." },
              { text: "تطبيق الـ Ladder drills", requirement: "تحسين التوافق العضلي العصبي وسرعة القدمين." }
            ], 
            resources: [
              { title: "Agility Training in Rehab", url: "https://www.youtube.com/results?search_query=agility+drills+for+sports+rehab" }
            ],
            tip: "الرشاقة تحتاج تركيزاً ذهنياً عالياً." 
          },
          { 
            id: "19_2_3", 
            name: "تدريبات السرعة (Speed)", 
            topic: "Sports", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Acceleration mechanics", requirement: "فهم كيفية بدء الانطلاق السريع." },
              { text: "تطبيق الـ Sprinting drills", requirement: "تحسين تكنيك الجري السريع لتقليل حمل العضلات الخلفية." }
            ], 
            resources: [
              { title: "Speed Training for Athletes", url: "https://www.youtube.com/results?search_query=speed+mechanics+for+athletes" }
            ],
            tip: "السرعة هي السلاح الأقوى للرياضي." 
          },
          { 
            id: "19_2_4", 
            name: "تأهيل القوة الانفجارية (Explosive Power)", 
            topic: "Sports", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق الـ Olympic lifts (Intro)", requirement: "دراسة تمارين الـ Clean & Snatch وتأثيرها على القوة." },
              { text: "فهم الـ Rate of Force Development (RFD)", requirement: "دراسة مدى سرعة العضلة في إنتاج أقصى قوة لها." }
            ], 
            resources: [
              { title: "Explosive Power Training", url: "https://www.youtube.com/results?search_query=explosive+power+exercises+physiotherapy" }
            ],
            tip: "القوة الانفجارية هي التي تميز البطل عن اللاعب العادي." 
          },
          { 
            id: "19_2_5", 
            name: "التحمل الدوري التنفسي (Conditioning)", 
            topic: "Sports", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة الـ HIIT training", requirement: "فهم التدريب عالي الكثافة لتحسين اللياقة البدنية." },
              { text: "تطبيق الـ Sport-specific conditioning", requirement: "تصميم تمارين لياقة تشبه مجهود المباراة." }
            ], 
            resources: [
              { title: "Conditioning for Athletes", url: "https://www.physio-pedia.com/Aerobic_Exercise" }
            ],
            tip: "اللاعب المتعب هو لاعب معرض للإصابة." 
          },
          { 
            id: "19_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Box Jump لزميل", requirement: "التأكد من الهبوط الصامت (Silent landing) لامتصاص الصدمات." },
              { text: "تطبيق الـ T-Test للرشاقة", requirement: "قياس سرعة تغيير الاتجاه." }
            ], 
            resources: [
              { title: "Plyometric and Agility Practical", url: "https://www.youtube.com/results?search_query=plyometric+and+agility+practical+physiotherapy" }
            ],
            tip: "الهبوط الصامت يعني مفاصل محمية." 
          },
          { 
            id: "19_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تمارين القوة والسرعة", requirement: "التأكد من فهم تدرج الأحمال الرياضية." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الاستشفاء هو الوقت الذي تنمو فيه العضلات." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Sport-Specific Rehabilitation", 
        days: [
          { 
            id: "19_3_1", 
            name: "تأهيل لاعبي كرة القدم", 
            topic: "Sports", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة إصابات كرة القدم الشائعة", requirement: "التركيز على الـ ACL, Hamstring, and Ankle sprains." },
              { text: "تطبيق الـ Ball-specific drills", requirement: "دمج الكرة في تمارين التأهيل في المراحل الأخيرة." }
            ], 
            resources: [
              { title: "Football Rehabilitation Guide", url: "https://www.physio-pedia.com/Football_Injuries" }
            ],
            tip: "اللاعب يحتاج الكرة ليشعر أنه عاد للحياة." 
          },
          { 
            id: "19_3_2", 
            name: "تأهيل لاعبي كرة السلة والطائرة", 
            topic: "Sports", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Jumper's Knee", requirement: "تأهيل التهاب وتر الصابونة الناتج عن كثرة القفز." },
              { text: "تحسين الـ Vertical Jump", requirement: "تمارين خاصة لزيادة قوة القفز والثبات عند الهبوط." }
            ], 
            resources: [
              { title: "Basketball Injury Rehab", url: "https://www.physio-pedia.com/Basketball_Injuries" }
            ],
            tip: "ثبات الكاحل والركبة هو سر البقاء في ملاعب السلة." 
          },
          { 
            id: "19_3_3", 
            name: "تأهيل رياضيي الرمي (Tennis/Baseball)", 
            topic: "Sports", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Thrower's Shoulder", requirement: "فهم مشاكل الكتف الناتجة عن حركات الرمي المتكررة." },
              { text: "تطبيق الـ Scapular dyskinesis correction", requirement: "تحسين حركة لوح الكتف لزيادة قوة الرمي وحماية المفصل." }
            ], 
            resources: [
              { title: "Overhead Athlete Rehab", url: "https://www.physio-pedia.com/Overhead_Athlete" }
            ],
            tip: "القوة تبدأ من لوح الكتف وتنتهي في اليد." 
          },
          { 
            id: "19_3_4", 
            name: "تأهيل العدائين (Running)", 
            topic: "Sports", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة الـ IT Band Syndrome", requirement: "علاج ألم الركبة الخارجي عند الجري." },
              { text: "تطبيق الـ Cadence training", requirement: "تحسين عدد الخطوات في الدقيقة لتقليل الحمل على المفاصل." }
            ], 
            resources: [
              { title: "Running Injury Rehab", url: "https://www.physio-pedia.com/Running_Injuries" }
            ],
            tip: "زيادة الـ Cadence بنسبة 5% قد تحل معظم مشاكل الجري." 
          },
          { 
            id: "19_3_5", 
            name: "العودة للتدريب (Return to Training)", 
            topic: "Sports", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Training Load Ratio", requirement: "دراسة العلاقة بين الحمل الحالي (Acute) والحمل التراكمي (Chronic)." },
              { text: "تطبيق الـ On-field progression", requirement: "التدرج من الجري المستقيم إلى المناورات بالكرة." }
            ], 
            resources: [
              { title: "Return to Play Criteria", url: "https://www.physio-pedia.com/Return_to_Play_in_Sports" }
            ],
            tip: "لا تتسرع في العودة، الانتكاسة أصعب من الإصابة الأولى." 
          },
          { 
            id: "19_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم تمرين رشاقة بالكرة للاعب كرة قدم", requirement: "دمج تغيير الاتجاه مع التحكم في الكرة." },
              { text: "تطبيق الـ Scapular setting لزميل", requirement: "تحسين ثبات لوح الكتف." }
            ], 
            resources: [
              { title: "Sport Specific Practical Video", url: "https://www.youtube.com/results?search_query=sport+specific+rehab+drills" }
            ],
            tip: "اجعل التأهيل ممتعاً ليشبه اللعبة." 
          },
          { 
            id: "19_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تأهيل الرياضات المختلفة", requirement: "التأكد من فهم متطلبات كل رياضة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الرياضي يحتاج جسداً وعقلاً قوياً." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Return to Play & Performance Testing", 
        days: [
          { 
            id: "19_4_1", 
            name: "اختبارات العودة للملعب (RTP Testing)", 
            topic: "Sports", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق الـ Hop Tests", requirement: "دراسة اختبارات القفز على رجل واحدة لتقييم ثبات وقوة الركبة." },
              { text: "فهم الـ Limb Symmetry Index (LSI)", requirement: "حساب النسبة بين الرجل المصابة والسليمة (يجب أن تكون > 90%)." }
            ], 
            resources: [
              { title: "Hop Tests for ACL Rehab", url: "https://www.physio-pedia.com/Hop_Tests" }
            ],
            tip: "الـ Hop tests هي المعيار الذهبي للعودة بعد الرباط الصليبي." 
          },
          { 
            id: "19_4_2", 
            name: "التقييم النفسي للرياضي", 
            topic: "Sports", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Kinesiophobia", requirement: "فهم خوف الرياضي من إعادة الإصابة وكيفية علاجه." },
              { text: "تطبيق الـ ACL-RSI scale", requirement: "استبيان لتقييم الجاهزية النفسية للعودة للملعب." }
            ], 
            resources: [
              { title: "Psychology of Sports Injury", url: "https://www.physio-pedia.com/Psychological_Factors_in_ACL_Reconstruction" }
            ],
            tip: "الخوف من الإصابة هو أكبر مسبب لإعادة الإصابة." 
          },
          { 
            id: "19_4_3", 
            name: "تأهيل الـ Fatigue Resistance", 
            topic: "Sports", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم تأثير التعب على الحركة", requirement: "دراسة كيف تتدهور ميكانيكا الحركة في نهاية المباراة." },
              { text: "تطبيق الـ Fatigue-state testing", requirement: "إجراء الاختبارات الوظيفية واللاعب متعب لضمان الأمان." }
            ], 
            resources: [
              { title: "Fatigue and Injury Risk", url: "https://www.youtube.com/results?search_query=fatigue+and+injury+risk+in+sports" }
            ],
            tip: "معظم الإصابات تحدث في الدقائق الأخيرة من المباراة." 
          },
          { 
            id: "19_4_4", 
            name: "استراتيجيات الاستشفاء (Recovery)", 
            topic: "Sports", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة الـ Ice Baths & Compression", requirement: "فهم فوائد وعيوب الاستشفاء بالثلج والضغط." },
              { text: "أهمية النوم والتغذية", requirement: "دراسة دور النوم العميق والبروتين في التئام الأنسجة." }
            ], 
            resources: [
              { title: "Sports Recovery Strategies", url: "https://www.physio-pedia.com/Recovery_Strategies_in_Sports" }
            ],
            tip: "النوم هو أفضل مكمل غذائي في العالم." 
          },
          { 
            id: "19_4_5", 
            name: "بناء برنامج تأهيل رياضي متكامل", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تصميم رحلة لاعب من الإصابة للمباراة", requirement: "تحديد الأهداف لكل مرحلة (Phase 1 to Phase 5)." },
              { text: "التواصل مع المدرب والجهاز الفني", requirement: "كيفية كتابة تقرير عن جاهزية اللاعب للمشاركة." }
            ], 
            resources: [
              { title: "Sports Rehab Case Study", url: "https://www.physio-pedia.com/Clinical_Reasoning_Case_Study" }
            ],
            tip: "أنت حلقة الوصل بين الطبيب والمدرب واللاعب." 
          },
          { 
            id: "19_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Triple Hop Test لزميل", requirement: "قياس المسافة ومقارنتها بالرجل الأخرى." },
              { text: "تصميم اختبار عودة للملعب مخصص لرياضة معينة", requirement: "دمج القوة والرشاقة والمهارة." }
            ], 
            resources: [
              { title: "Return to Play Practical Video", url: "https://www.youtube.com/results?search_query=return+to+play+testing+practical" }
            ],
            tip: "أنت الآن جاهز لإعادة الأبطال للملاعب!" 
          },
          { 
            id: "19_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر التأهيل الرياضي", requirement: "التأكد من إتقان مبادئ الوقاية والتأهيل والعودة للملعب." },
              { text: "راحة", requirement: "استعد لشهر تأهيل ما بعد الجراحة." }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن خبيراً في التأهيل الرياضي!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 19, 
    name: "شهر 20 — تأهيل ما بعد الجراحة (Post-Operative Rehabilitation)", 
    weeks: [
      { 
        title: "الأسبوع 1 — ACL Reconstruction Rehab", 
        days: [
          { 
            id: "20_1_1", 
            name: "مراحل التئام الرباط الصليبي", 
            topic: "Post-Op", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة الـ Graft Healing Timeline", requirement: "فهم متى يكون الرباط في أضعف حالاته (Week 6-12)." },
              { text: "فهم الـ Ligamentization process", requirement: "دراسة تحول الوتر إلى رباط داخل الركبة." }
            ], 
            resources: [
              { title: "ACL Rehabilitation Protocol", url: "https://www.physio-pedia.com/ACL_Rehabilitation" }
            ],
            tip: "احترام زمن التئام الأنسجة هو سر نجاح العملية." 
          },
          { 
            id: "20_1_2", 
            name: "المرحلة الأولى (0-2 أسبوع)", 
            topic: "Post-Op", 
            badge: "الأحد", 
            tasks: [
              { text: "التحكم في الألم والورم (POLICE)", requirement: "استخدام الثلج والضغط والرفع." },
              { text: "استعادة الـ Full Extension", requirement: "أهم هدف في الأسبوع الأول لتجنب الـ Cyclops lesion." }
            ], 
            resources: [
              { title: "Early ACL Rehab Exercises", url: "https://www.youtube.com/results?search_query=acl+rehab+phase+1+exercises" }
            ],
            tip: "الركبة المفرودة تماماً أهم من الركبة المثنية في البداية." 
          },
          { 
            id: "20_1_3", 
            name: "تفعيل عضلة الـ Quadriceps", 
            topic: "Post-Op", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق الـ Quad Sets", requirement: "تفعيل العضلة بدون تحريك المفصل." },
              { text: "استخدام الـ NMES", requirement: "دراسة استخدام التنبيه الكهربائي للتغلب على الـ Arthrogenic Muscle Inhibition." }
            ], 
            resources: [
              { title: "Quadriceps Activation After ACL", url: "https://www.youtube.com/results?search_query=quadriceps+activation+after+acl+surgery" }
            ],
            tip: "العضلة الأمامية هي حارس الركبة، أيقظها مبكراً." 
          },
          { 
            id: "20_1_4", 
            name: "المرحلة الثانية (2-6 أسابيع)", 
            topic: "Post-Op", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "زيادة مدى الثني (Flexion)", requirement: "الوصول لـ 120 درجة تدريجياً." },
              { text: "تمارين الـ Closed Kinetic Chain (CKC)", requirement: "البدء بتمارين الـ Mini-squats والـ Weight bearing." }
            ], 
            resources: [
              { title: "ACL Rehab Phase 2 Guide", url: "https://www.youtube.com/results?search_query=acl+rehab+phase+2+exercises" }
            ],
            tip: "ابدأ تحميل الوزن تدريجياً حسب تعليمات الجراح." 
          },
          { 
            id: "20_1_5", 
            name: "تأهيل الغضروف الهلالي (Meniscus Repair)", 
            topic: "Post-Op", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Meniscus Repair Protocol", requirement: "دراسة لماذا يمنع الثني العميق لأكثر من 90 درجة في أول 4 أسابيع." },
              { text: "الفرق بين الـ Meniscectomy والـ Repair", requirement: "فهم تدرج الأحمال المختلف لكل منهما." }
            ], 
            resources: [
              { title: "Meniscus Repair Rehabilitation", url: "https://www.physio-pedia.com/Meniscal_Repair_Rehabilitation" }
            ],
            tip: "خياطة الغضروف تحتاج صبراً أكثر من استئصاله." 
          },
          { 
            id: "20_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Patellar Mobilization لزميل", requirement: "تحريك الصابونة لمنع الالتصاقات بعد الجراحة." },
              { text: "تطبيق الـ Heel Slides لزيادة المدى", requirement: "التأكد من الأداء الصحيح." }
            ], 
            resources: [
              { title: "Post-Op Knee Practical Video", url: "https://www.youtube.com/results?search_query=post+op+knee+physiotherapy+practical" }
            ],
            tip: "حركة الصابونة هي مفتاح حركة الركبة." 
          },
          { 
            id: "20_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة بروتوكول الركبة (ACL/Meniscus)", requirement: "التأكد من حفظ الممنوعات في كل مرحلة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "التأهيل الناجح يمنع إعادة الجراحة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Shoulder Surgery Rehab", 
        days: [
          { 
            id: "20_2_1", 
            name: "تأهيل خياطة الأوتار (Rotator Cuff Repair)", 
            topic: "Post-Op", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Protection Phase (0-6 weeks)", requirement: "دراسة لماذا يمنع الرفع النشط (Active elevation) في هذه المرحلة." },
              { text: "تطبيق الـ Passive ROM", requirement: "استخدام الـ Pendulum exercises والـ Pulley." }
            ], 
            resources: [
              { title: "Rotator Cuff Repair Protocol", url: "https://www.physio-pedia.com/Rotator_Cuff_Repair_Rehabilitation" }
            ],
            tip: "لا تحرك كتفك بقوة عضلاتك في أول 6 أسابيع." 
          },
          { 
            id: "20_2_2", 
            name: "تأهيل الـ Labrum Repair (Bankart/SLAP)", 
            topic: "Post-Op", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ SLAP Repair precautions", requirement: "تجنب شد عضلة الـ Biceps لمنع سحب الغضروف المخيط." },
              { text: "تأهيل ثبات الكتف", requirement: "البدء بتمارين الـ Isometrics في الزوايا الآمنة." }
            ], 
            resources: [
              { title: "SLAP Lesion Rehabilitation", url: "https://www.physio-pedia.com/SLAP_Lesion_Rehabilitation" }
            ],
            tip: "ثبات المفصل أهم من مرونته في حالات الخلع." 
          },
          { 
            id: "20_2_3", 
            name: "تغيير مفصل الكتف (Shoulder Arthroplasty)", 
            topic: "Post-Op", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Total vs Reverse Shoulder Replacement", requirement: "دراسة الفرق الجوهري في التأهيل لكل نوع." },
              { text: "أهداف المرحلة الأولى", requirement: "تقليل الألم وحماية المفصل الصناعي." }
            ], 
            resources: [
              { title: "Shoulder Arthroplasty Rehab", url: "https://www.physio-pedia.com/Shoulder_Arthroplasty_Rehabilitation" }
            ],
            tip: "في الـ Reverse Shoulder، عضلة الـ Deltoid هي التي تقوم بكل العمل." 
          },
          { 
            id: "20_2_4", 
            name: "المرحلة المتوسطة (6-12 أسبوع)", 
            topic: "Post-Op", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "البدء بالـ Active-Assisted ROM", requirement: "التدرج في رفع الذراع بمساعدة اليد الأخرى." },
              { text: "تقوية عضلات لوح الكتف", requirement: "تحسين الـ Scapular stability لدعم المفصل." }
            ], 
            resources: [
              { title: "Shoulder Rehab Phase 2", url: "https://www.youtube.com/results?search_query=shoulder+rehab+phase+2+exercises" }
            ],
            tip: "لوح الكتف هو القاعدة التي يرتكز عليها المفصل." 
          },
          { 
            id: "20_2_5", 
            name: "المرحلة المتقدمة (أكثر من 12 أسبوع)", 
            topic: "Post-Op", 
            badge: "الأربعاء", 
            tasks: [
              { text: "البدء بتقوية الـ Rotator Cuff", requirement: "استخدام الـ Resistance bands." },
              { text: "تمارين الـ Proprioception", requirement: "تحسين الإحساس بوضعية المفصل." }
            ], 
            resources: [
              { title: "Advanced Shoulder Strengthening", url: "https://www.youtube.com/results?search_query=advanced+shoulder+rehab+exercises" }
            ],
            tip: "القوة التدريجية تمنع عودة التمزق." 
          },
          { 
            id: "20_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Scapular PNF لزميل", requirement: "تحسين نمط حركة لوح الكتف." },
              { text: "تطبيق الـ Passive External Rotation", requirement: "التأكد من عدم تجاوز المدى المسموح به." }
            ], 
            resources: [
              { title: "Shoulder Post-Op Practical", url: "https://www.youtube.com/results?search_query=shoulder+post+op+physiotherapy+practical" }
            ],
            tip: "كن لطيفاً مع الأنسجة المخيطة حديثاً." 
          },
          { 
            id: "20_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة بروتوكولات الكتف", requirement: "التأكد من فهم الفروق بين خياطة الأوتار وتثبيت الغضروف." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الكتف هو أكثر المفاصل تعقيداً، فادرسه جيداً." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Hip & Ankle Surgery Rehab", 
        days: [
          { 
            id: "20_3_1", 
            name: "تغيير مفصل الحوض (Total Hip Replacement)", 
            topic: "Post-Op", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Hip Precautions (Posterior approach)", requirement: "دراسة الممنوعات: لا ثني > 90، لا تقريب للأرجل، لا دوران داخلي." },
              { text: "تمارين اليوم الأول", requirement: "الـ Ankle pumps والـ Gluteal sets." }
            ], 
            resources: [
              { title: "Total Hip Replacement Rehab", url: "https://www.physio-pedia.com/Total_Hip_Replacement_Rehabilitation" }
            ],
            tip: "الممنوعات تحمي المفصل من الخلع في أول 3 شهور." 
          },
          { 
            id: "20_3_2", 
            name: "تأهيل كسور عنق الفخذ (Hip Fracture)", 
            topic: "Post-Op", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ ORIF protocol", requirement: "دراسة تدرج تحميل الوزن حسب نوع التثبيت (Nailing vs Plating)." },
              { text: "تحسين المشي (Gait training)", requirement: "استخدام المشاية (Walker) والتدرب على النقل الصحيح للوزن." }
            ], 
            resources: [
              { title: "Hip Fracture Rehabilitation", url: "https://www.physio-pedia.com/Hip_Fracture_Rehabilitation" }
            ],
            tip: "الهدف الأهم هو إعادة المريض للمشي في أسرع وقت." 
          },
          { 
            id: "20_3_3", 
            name: "خياطة وتر أكيلس (Achilles Tendon Repair)", 
            topic: "Post-Op", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Early Functional Mobilization", requirement: "دراسة لماذا نفضل الحركة المبكرة المحمية على الجبس الثابت." },
              { text: "استخدام الـ Heel lifts", requirement: "دراسة كيفية تقليل الشد على الوتر في البداية." }
            ], 
            resources: [
              { title: "Achilles Tendon Repair Rehab", url: "https://www.physio-pedia.com/Achilles_Tendon_Rupture_Rehabilitation" }
            ],
            tip: "وتر أكيلس يحتاج تدرجاً دقيقاً جداً في تمارين الإطالة." 
          },
          { 
            id: "20_3_4", 
            name: "تثبيت كسور الكاحل (Ankle ORIF)", 
            topic: "Post-Op", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "استعادة الـ Dorsiflexion", requirement: "أهم مدى حركي للمشي الطبيعي." },
              { text: "تمارين التوازن (Proprioception)", requirement: "البدء بمجرد السماح بتحميل الوزن." }
            ], 
            resources: [
              { title: "Ankle Fracture Rehab", url: "https://www.physio-pedia.com/Ankle_Fracture_Rehabilitation" }
            ],
            tip: "تيبس الكاحل بعد الكسر هو أكبر تحدي، ابدأ الحركة مبكراً." 
          },
          { 
            id: "20_3_5", 
            name: "تأهيل مناظير المفاصل (Arthroscopy)", 
            topic: "Post-Op", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تأهيل الـ Hip Labrum Repair", requirement: "دراسة القيود على حركة الثني والدوران." },
              { text: "تأهيل الـ Ankle Debridement", requirement: "العودة السريعة للنشاط." }
            ], 
            resources: [
              { title: "Hip Arthroscopy Rehab", url: "https://www.physio-pedia.com/Hip_Labral_Injuries" }
            ],
            tip: "المناظير جروحها صغيرة لكن عملها داخلي كبير." 
          },
          { 
            id: "20_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تعليم مريض كيفية القيام من السرير بعد تغيير الحوض", requirement: "تطبيق الممنوعات (Hip precautions)." },
              { text: "تطبيق تمارين التوازن لمريض كاحل", requirement: "التدرج من الوقوف على رجلين لرجل واحدة." }
            ], 
            resources: [
              { title: "Hip and Ankle Post-Op Practical", url: "https://www.youtube.com/results?search_query=hip+and+ankle+post+op+physiotherapy+practical" }
            ],
            tip: "تعليم المريض (Patient Education) هو نصف العلاج." 
          },
          { 
            id: "20_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة بروتوكولات الحوض والكاحل", requirement: "التأكد من فهم تدرج تحميل الوزن." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الحوض والكاحل هما أساس الحركة، فاجعلهما قويين." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Spine Surgery & Integration", 
        days: [
          { 
            id: "20_4_1", 
            name: "تأهيل استئصال الغضروف (Discectomy/Laminectomy)", 
            topic: "Post-Op", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ BLT restrictions", requirement: "دراسة الممنوعات: لا انحناء (Bending)، لا رفع أثقال (Lifting)، لا التواء (Twisting)." },
              { text: "تمارين الـ Core stability المبكرة", requirement: "تفعيل الـ Transversus Abdominis." }
            ], 
            resources: [
              { title: "Lumbar Discectomy Rehab", url: "https://www.physio-pedia.com/Lumbar_Discectomy_Rehabilitation" }
            ],
            tip: "حماية الظهر في أول 6 أسابيع تمنع عودة الانزلاق." 
          },
          { 
            id: "20_4_2", 
            name: "تأهيل دمج الفقرات (Spinal Fusion)", 
            topic: "Post-Op", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم تدرج الالتئام العظمي", requirement: "دراسة لماذا يحتاج المريض وقتاً أطول للعودة للنشاط مقارنة بالديسك." },
              { text: "تحسين نمط المشي والحركة", requirement: "تعليم المريض الـ Log roll للقيام من السرير." }
            ], 
            resources: [
              { title: "Spinal Fusion Rehabilitation", url: "https://www.physio-pedia.com/Spinal_Fusion_Rehabilitation" }
            ],
            tip: "الفقرات المدمجة تحتاج فقرات أخرى مرنة فوقها وتحتها." 
          },
          { 
            id: "20_4_3", 
            name: "تأهيل جراحات الرقبة (ACDF)", 
            topic: "Post-Op", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Cervical precautions", requirement: "حماية الرقبة من الحركات المفاجئة." },
              { text: "تمارين الـ Deep Neck Flexors", requirement: "استعادة ثبات الرقبة." }
            ], 
            resources: [
              { title: "Cervical Spine Surgery Rehab", url: "https://www.physio-pedia.com/Cervical_Spine_Surgery_Rehabilitation" }
            ],
            tip: "الرقبة تحمل الرأس، فاجعل عضلاتها العميقة قوية." 
          },
          { 
            id: "20_4_4", 
            name: "التعامل مع المضاعفات (Complications)", 
            topic: "Post-Op", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "اكتشاف الـ DVT", requirement: "دراسة علامات جلطة الساق (Homan's sign, Well's criteria)." },
              { text: "علامات الالتهاب (Infection)", requirement: "متى يجب إرسال المريض للجراح فوراً؟" }
            ], 
            resources: [
              { title: "Post-Op Complications Guide", url: "https://www.physio-pedia.com/Post-Operative_Complications" }
            ],
            tip: "عينك يجب أن تلاحظ أي علامة خطر (Red Flags)." 
          },
          { 
            id: "20_4_5", 
            name: "بناء خطة تأهيل شاملة", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "التواصل مع الجراح", requirement: "كيفية قراءة تقرير العملية وفهم ما تم بداخل المفصل." },
              { text: "تخصيص البروتوكول للمريض", requirement: "مراعاة عمر المريض ونشاطه السابق." }
            ], 
            resources: [
              { title: "Clinical Reasoning in Post-Op Rehab", url: "https://www.physio-pedia.com/Clinical_Reasoning" }
            ],
            tip: "البروتوكول دليل، لكن المريض هو البوصلة." 
          },
          { 
            id: "20_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تعليم مريض الـ Log roll للقيام من السرير", requirement: "التأكد من ثبات العمود الفقري كقطعة واحدة." },
              { text: "تصميم برنامج تأهيل منزلي (HEP) لمريض بعد الجراحة", requirement: "اختيار تمارين آمنة وفعالة." }
            ], 
            resources: [
              { title: "Post-Op Spine Practical Video", url: "https://www.youtube.com/results?search_query=post+op+spine+physiotherapy+practical" }
            ],
            tip: "أنت الآن خبير في إعادة المرضى لحياتهم بعد الجراحة!" 
          },
          { 
            id: "20_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر تأهيل ما بعد الجراحة", requirement: "التأكد من إتقان البروتوكولات والممنوعات وعلامات الخطر." },
              { text: "راحة", requirement: "استعد لشهر تحليل المشية المتقدم." }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن خبيراً في تأهيل ما بعد الجراحة!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 20, 
    name: "شهر 21 — تحليل المشية المتقدم (Advanced Gait Analysis)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Gait Cycle & Normal Biomechanics", 
        days: [
          { 
            id: "21_1_1", 
            name: "مراحل المشية (Gait Cycle)", 
            topic: "Biomechanics", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة الـ Stance Phase", requirement: "فهم مراحلها (Initial contact, Loading response, Mid-stance, Terminal stance, Pre-swing)." },
              { text: "دراسة الـ Swing Phase", requirement: "فهم مراحلها (Initial swing, Mid-swing, Terminal swing)." }
            ], 
            resources: [
              { title: "Gait Cycle Guide", url: "https://www.physio-pedia.com/Gait_Cycle" }
            ],
            tip: "المشية الطبيعية هي سيمفونية من الحركة المتناغمة." 
          },
          { 
            id: "21_1_2", 
            name: "المتغيرات المكانية والزمانية (Spatiotemporal)", 
            topic: "Biomechanics", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Step Length vs Stride Length", requirement: "دراسة كيفية قياس المسافة بين الخطوات." },
              { text: "دراسة الـ Cadence and Velocity", requirement: "فهم معدل الخطوات وسرعة المشي الطبيعية." }
            ], 
            resources: [
              { title: "Gait Parameters Explained", url: "https://www.physio-pedia.com/Gait_Analysis#Parameters" }
            ],
            tip: "السرعة هي مؤشر حيوي للصحة العامة." 
          },
          { 
            id: "21_1_3", 
            name: "حركة المفاصل أثناء المشي (Kinematics)", 
            topic: "Biomechanics", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة حركة الحوض والورك", requirement: "فهم الـ Pelvic tilt والـ Hip flexion/extension أثناء المشي." },
              { text: "دراسة حركة الركبة والكاحل", requirement: "فهم الـ Knee flexion wave والـ Ankle rockers." }
            ], 
            resources: [
              { title: "Gait Kinematics Guide", url: "https://www.youtube.com/results?search_query=gait+kinematics+explained" }
            ],
            tip: "كل مفصل له دور محدد في كل لحظة من المشية." 
          },
          { 
            id: "21_1_4", 
            name: "النشاط العضلي أثناء المشي (Kinetics)", 
            topic: "Biomechanics", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة دور الـ Gluteus Medius", requirement: "فهم أهميتها في ثبات الحوض أثناء الـ Single limb support." },
              { text: "دراسة دور الـ Plantarflexors", requirement: "فهم الـ Push-off وكيفية توليد الطاقة للمشي." }
            ], 
            resources: [
              { title: "Muscle Activity During Gait", url: "https://www.youtube.com/results?search_query=muscle+activity+during+gait+cycle" }
            ],
            tip: "العضلات تعمل غالباً بشكل لامرركزي (Eccentric) لامتصاص الصدمات." 
          },
          { 
            id: "21_1_5", 
            name: "مركز الجاذبية وتوازن الجسم (COM)", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة الـ Center of Mass (COM) displacement", requirement: "فهم كيف يتحرك مركز ثقل الجسم للأعلى والأسفل وللجانبين." },
              { text: "فهم الـ Energy conservation", requirement: "دراسة كيف يحافظ الجسم على الطاقة أثناء المشي." }
            ], 
            resources: [
              { title: "Center of Mass in Gait", url: "https://www.youtube.com/results?search_query=center+of+mass+displacement+gait" }
            ],
            tip: "المشي الفعال هو الذي يقلل من تذبذب مركز الجاذبية." 
          },
          { 
            id: "21_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "ملاحظة مشية زميل وتحديد مراحلها", requirement: "التدرب على رؤية الـ Initial contact والـ Mid-stance بالعين المجردة." },
              { text: "قياس الـ Step length لزميل", requirement: "استخدام شريط القياس." }
            ], 
            resources: [
              { title: "Observational Gait Analysis Practical", url: "https://www.youtube.com/results?search_query=observational+gait+analysis+practical" }
            ],
            tip: "العين الخبيرة ترى ما لا يراه الآخرون." 
          },
          { 
            id: "21_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة مراحل المشية الطبيعية", requirement: "التأكد من حفظ زوايا المفاصل في كل مرحلة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "افهم الطبيعي أولاً لتكتشف غير الطبيعي لاحقاً." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Pathological Gait Patterns", 
        days: [
          { 
            id: "21_2_1", 
            name: "مشية الـ Trendelenburg", 
            topic: "Biomechanics", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة الـ Trendelenburg Gait", requirement: "فهم سقوط الحوض الناتج عن ضعف الـ Gluteus Medius." },
              { text: "الفرق بين الـ Uncompensated والـ Compensated", requirement: "فهم ميل الجذع للجانب المصاب." }
            ], 
            resources: [
              { title: "Trendelenburg Gait Guide", url: "https://www.physio-pedia.com/Trendelenburg_Gait" }
            ],
            tip: "ميل الجذع هو محاولة من الجسم لتقليل الحمل على الورك." 
          },
          { 
            id: "21_2_2", 
            name: "مشية الـ Foot Drop", 
            topic: "Biomechanics", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Steppage Gait", requirement: "فهم رفع الركبة عالياً لتعويض سقوط القدم." },
              { text: "أسباب الـ Foot Drop", requirement: "دراسة إصابة العصب الشظوي (Peroneal nerve) وضعف الـ Tibialis Anterior." }
            ], 
            resources: [
              { title: "Foot Drop Gait Guide", url: "https://www.physio-pedia.com/Foot_Drop" }
            ],
            tip: "سقوط القدم يزيد من خطر التعثر والسقوط." 
          },
          { 
            id: "21_2_3", 
            name: "مشية الـ Circumduction", 
            topic: "Biomechanics", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Circumduction Gait", requirement: "فهم حركة الرجل بشكل دائري للخارج لتعويض نقص ثني الركبة أو الورك." },
              { text: "الحالات المرتبطة بها", requirement: "دراسة الجلطات الدماغية (Stroke) وتيبس الركبة." }
            ], 
            resources: [
              { title: "Circumduction Gait Explained", url: "https://www.youtube.com/results?search_query=circumduction+gait+pattern" }
            ],
            tip: "هذه المشية تستهلك طاقة كبيرة جداً من المريض." 
          },
          { 
            id: "21_2_4", 
            name: "مشية الـ Antalgic (المؤلمة)", 
            topic: "Biomechanics", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة الـ Antalgic Gait", requirement: "فهم تقليل زمن الـ Stance phase على الرجل المصابة لتقليل الألم." },
              { text: "تحليل لغة الجسد أثناء الألم", requirement: "كيف يحاول المريض حماية الجزء المصاب." }
            ], 
            resources: [
              { title: "Antalgic Gait Guide", url: "https://www.physio-pedia.com/Antalgic_Gait" }
            ],
            tip: "الألم هو الذي يملي على المريض كيف يمشي." 
          },
          { 
            id: "21_2_5", 
            name: "مشية الـ Vaulting & Hiking", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة الـ Vaulting", requirement: "فهم الوقوف على أطراف الأصابع في الرجل السليمة لتسهيل مرور الرجل المصابة." },
              { text: "دراسة الـ Hip Hiking", requirement: "رفع الحوض للأعلى لتعويض طول الرجل." }
            ], 
            resources: [
              { title: "Vaulting and Hip Hiking Gait", url: "https://www.youtube.com/results?search_query=vaulting+and+hip+hiking+gait" }
            ],
            tip: "هذه تعويضات (Compensations) لمشاكل في مفاصل أخرى." 
          },
          { 
            id: "21_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تمثيل أنواع المشية المختلفة مع زميل", requirement: "محاولة تقليد مشية الـ Trendelenburg والـ Steppage لفهم الشعور بها." },
              { text: "تحديد نوع المشية من فيديوهات لحالات حقيقية", requirement: "التدرب على التشخيص البصري." }
            ], 
            resources: [
              { title: "Pathological Gait Practical", url: "https://www.youtube.com/results?search_query=pathological+gait+patterns+video+quiz" }
            ],
            tip: "التمثيل يساعدك على فهم ميكانيكا الخلل." 
          },
          { 
            id: "21_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أنواع المشية غير الطبيعية وأسبابها", requirement: "التأكد من القدرة على ربط المشية بالعضلة الضعيفة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "المشية هي مرآة لصحة الجهاز الحركي." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Advanced Gait Assessment Tools", 
        days: [
          { 
            id: "21_3_1", 
            name: "تحليل المشية بالفيديو (2D Analysis)", 
            topic: "Biomechanics", 
            badge: "السبت", 
            tasks: [
              { text: "استخدام تطبيقات تحليل الحركة (مثل Kinovea)", requirement: "دراسة كيفية تصوير المريض وقياس الزوايا من الفيديو." },
              { text: "أهمية التصوير من الجنب ومن الأمام", requirement: "فهم الـ Sagittal vs Frontal plane analysis." }
            ], 
            resources: [
              { title: "Video Gait Analysis Guide", url: "https://www.youtube.com/results?search_query=kinovea+gait+analysis+tutorial" }
            ],
            tip: "الفيديو يسمح لك بمشاهدة الحركة ببطء شديد (Slow motion)." 
          },
          { 
            id: "21_3_2", 
            name: "منصات قياس الضغط (Pressure Mats)", 
            topic: "Biomechanics", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Plantar Pressure Mapping", requirement: "دراسة توزيع الوزن على باطن القدم أثناء المشي." },
              { text: "اكتشاف الـ Over-pronation", requirement: "كيف تكشف منصات الضغط تسطح القدم الديناميكي." }
            ], 
            resources: [
              { title: "Plantar Pressure Analysis", url: "https://www.youtube.com/results?search_query=plantar+pressure+mapping+gait" }
            ],
            tip: "الضغط يخبرك أين تتركز المشاكل في القدم." 
          },
          { 
            id: "21_3_3", 
            name: "تخطيط العضلات الكهربائي (Dynamic EMG)", 
            topic: "Biomechanics", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Surface EMG in Gait", requirement: "دراسة توقيت عمل العضلات أثناء المشي." },
              { text: "اكتشاف الـ Muscle co-contraction", requirement: "فهم تشنج العضلات المتقابلة في حالات الشلل الدماغي." }
            ], 
            resources: [
              { title: "EMG in Gait Analysis", url: "https://www.youtube.com/results?search_query=dynamic+emg+gait+analysis" }
            ],
            tip: "الـ EMG يخبرك متى تعمل العضلة بالضبط." 
          },
          { 
            id: "21_3_4", 
            name: "تحليل المشية ثلاثي الأبعاد (3D Motion Capture)", 
            topic: "Biomechanics", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Vicon/OptiTrack systems", requirement: "دراسة كيفية عمل المعامل المتقدمة باستخدام الحساسات (Markers)." },
              { text: "قراءة تقارير الـ 3D Gait Analysis", requirement: "فهم الرسوم البيانية المعقدة لحركة المفاصل." }
            ], 
            resources: [
              { title: "3D Gait Analysis Explained", url: "https://www.youtube.com/results?search_query=3d+gait+analysis+lab+tour" }
            ],
            tip: "هذا هو المعيار الذهبي (Gold Standard) في الأبحاث." 
          },
          { 
            id: "21_3_5", 
            name: "المستشعرات القابلة للارتداء (Wearable Sensors)", 
            topic: "Biomechanics", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة الـ IMU sensors", requirement: "فهم كيف تقيس الحساسات الصغيرة السرعة والزوايا خارج المعمل." },
              { text: "مستقبل تحليل المشية", requirement: "دراسة دور الذكاء الاصطناعي في تحليل المشية من الموبايل." }
            ], 
            resources: [
              { title: "Wearable Sensors in Gait", url: "https://www.youtube.com/results?search_query=wearable+sensors+gait+analysis" }
            ],
            tip: "المستشعرات تجعل تحليل المشية متاحاً في كل مكان." 
          },
          { 
            id: "21_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصوير زميل وتحليل مشيته باستخدام تطبيق موبايل", requirement: "قياس زاوية ثني الركبة عند الـ Initial contact." },
              { text: "استخدام الـ Ink and Paper test", requirement: "طريقة بسيطة لقياس الـ Step length والـ Base of support." }
            ], 
            resources: [
              { title: "Simple Gait Analysis Practical", url: "https://www.youtube.com/results?search_query=simple+gait+analysis+tools+physiotherapy" }
            ],
            tip: "لا تحتاج دائماً لأجهزة غالية لتقوم بتحليل جيد." 
          },
          { 
            id: "21_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أدوات التقييم المتقدمة", requirement: "التأكد من فهم مميزات وعيوب كل أداة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الأدوات تساعدك، لكن عقلك هو الذي يحلل." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Gait Correction & Clinical Reasoning", 
        days: [
          { 
            id: "21_4_1", 
            name: "تصحيح المشية (Gait Retraining)", 
            topic: "Biomechanics", 
            badge: "السبت", 
            tasks: [
              { text: "استراتيجيات الـ Verbal & Visual feedback", requirement: "كيف توجه المريض لتصحيح مشيته أثناء المشي على السير." },
              { text: "تطبيق الـ Mirror feedback", requirement: "استخدام المرآة لزيادة وعي المريض بحركته." }
            ], 
            resources: [
              { title: "Gait Retraining Strategies", url: "https://www.youtube.com/results?search_query=gait+retraining+physiotherapy" }
            ],
            tip: "التغذية الراجعة الفورية هي أسرع وسيلة للتعلم." 
          },
          { 
            id: "21_4_2", 
            name: "استخدام الجبائر (Orthotics) في تصحيح المشية", 
            topic: "Biomechanics", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم دور الـ AFO (Ankle Foot Orthosis)", requirement: "كيف تعالج الجبيرة مشية الـ Foot drop." },
              { text: "استخدام الـ Foot Insoles", requirement: "تصحيح الـ Over-pronation لتحسين مشية المريض." }
            ], 
            resources: [
              { title: "Orthotics in Gait Correction", url: "https://www.physio-pedia.com/Orthotics" }
            ],
            tip: "الجبيرة هي أداة مساعدة، لا تغني عن التمارين." 
          },
          { 
            id: "21_4_3", 
            name: "تمارين التقوية الموجهة للمشية", 
            topic: "Biomechanics", 
            badge: "الاثنين", 
            tasks: [
              { text: "تقوية الـ Gluteus Medius للمشية", requirement: "تمارين الـ Side-lying abduction والـ Monster walks." },
              { text: "تحسين الـ Push-off", requirement: "تقوية عضلات السمانة بشكل وظيفي." }
            ], 
            resources: [
              { title: "Strengthening for Gait Improvement", url: "https://www.youtube.com/results?search_query=exercises+to+improve+gait+pattern" }
            ],
            tip: "قوِّ العضلات في الوضعيات التي تشبه المشي." 
          },
          { 
            id: "21_4_4", 
            name: "تحليل المشية في كبار السن", 
            topic: "Biomechanics", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تغيرات المشية مع العمر", requirement: "فهم قصر الخطوة وزيادة زمن الـ Double support." },
              { text: "تقييم خطر السقوط (Fall Risk)", requirement: "استخدام اختبار الـ Timed Up and Go (TUG)." }
            ], 
            resources: [
              { title: "Gait in Elderly", url: "https://www.physio-pedia.com/Gait_and_Aging" }
            ],
            tip: "تحسين المشية في كبار السن ينقذ حياتهم من السقوط." 
          },
          { 
            id: "21_4_5", 
            name: "بناء خطة علاجية مبنية على تحليل المشية", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "ربط الخلل في المشية بالسبب الجذري", requirement: "هل المشكلة ضعف عضلي، تيبس مفصل، أم مشكلة عصبية؟" },
              { text: "تحديد الأولويات في العلاج", requirement: "ما هو الخلل الذي يسبب أكبر استهلاك للطاقة أو خطر السقوط؟" }
            ], 
            resources: [
              { title: "Clinical Reasoning in Gait Analysis", url: "https://www.physio-pedia.com/Clinical_Reasoning" }
            ],
            tip: "عالج السبب، لا تعالج العرض فقط." 
          },
          { 
            id: "21_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "إجراء تحليل مشية كامل لزميل وتحديد 3 نقاط للتحسين", requirement: "كتابة تقرير مختصر بالنتائج." },
              { text: "تصميم برنامج تمارين لتصحيح مشية الـ Trendelenburg", requirement: "اختيار 4 تمارين متدرجة." }
            ], 
            resources: [
              { title: "Final Gait Analysis Practical", url: "https://www.youtube.com/results?search_query=comprehensive+gait+analysis+practical" }
            ],
            tip: "أنت الآن خبير في تحليل وتصحيح المشية البشرية!" 
          },
          { 
            id: "21_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر تحليل المشية المتقدم", requirement: "التأكد من إتقان التحليل البصري وأدوات التقييم وطرق العلاج." },
              { text: "راحة", requirement: "استعد لشهر القوة والتكيف." }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن خبيراً في الميكانيكا الحيوية للمشية!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 21, 
    name: "شهر 22 — القوة والتكيف (Strength & Conditioning for Rehab)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Foundations of S&C", 
        days: [
          { 
            id: "22_1_1", 
            name: "مبادئ التدريب الرياضي", 
            topic: "Exercise", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة الـ Progressive Overload", requirement: "فهم كيفية زيادة الحمل تدريجياً لتحقيق التكيف." },
              { text: "فهم الـ Specificity principle", requirement: "دراسة لماذا يجب أن يكون التمرين مخصصاً للهدف المطلوب." }
            ], 
            resources: [
              { title: "S&C Principles for Physiotherapists", url: "https://www.physio-pedia.com/Strength_and_Conditioning" }
            ],
            tip: "الجسم يتكيف مع الضغط الذي تضعه عليه." 
          },
          { 
            id: "21_1_2", 
            name: "حساب الأحمال (1RM & RPE)", 
            topic: "Exercise", 
            badge: "الأحد", 
            tasks: [
              { text: "حساب الـ 1 Repetition Maximum (1RM)", requirement: "دراسة كيفية تقدير أقصى وزن يمكن للمريض رفعه مرة واحدة." },
              { text: "استخدام مقياس الـ RPE (Rate of Perceived Exertion)", requirement: "فهم كيفية تقييم شدة التمرين بناءً على شعور المريض." }
            ], 
            resources: [
              { title: "RPE Scale Guide", url: "https://www.physio-pedia.com/Rate_of_Perceived_Exertion" }
            ],
            tip: "الـ RPE هو أداة رائعة لتعديل الحمل يومياً حسب حالة المريض." 
          },
          { 
            id: "22_1_3", 
            name: "أنواع الانقباض العضلي وتأثيرها", 
            topic: "Exercise", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Isometric vs Isotonic", requirement: "فهم متى نستخدم الثبات ومتى نستخدم الحركة." },
              { text: "أهمية الـ Eccentric training", requirement: "دراسة دور الانقباض اللامرركزي في علاج الأوتار (Tendinopathy)." }
            ], 
            resources: [
              { title: "Muscle Contraction Types", url: "https://www.physio-pedia.com/Muscle_Contraction" }
            ],
            tip: "الـ Eccentric هو المفتاح لإعادة بناء الأوتار القوية." 
          },
          { 
            id: "22_1_4", 
            name: "برمجة التمرين (Sets, Reps, Rest)", 
            topic: "Exercise", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تصميم عدد المجموعات والتكرارات", requirement: "فهم الفرق بين تدريب القوة (Strength) والضخامة (Hypertrophy) والتحمل (Endurance)." },
              { text: "فهم أهمية فترات الراحة", requirement: "دراسة كيف تؤثر الراحة على استشفاء الجهاز العصبي والعضلي." }
            ], 
            resources: [
              { title: "Resistance Training Prescription", url: "https://www.physio-pedia.com/Resistance_Training" }
            ],
            tip: "الراحة بين المجموعات ليست وقتاً ضائعاً، بل هي وقت للبناء." 
          },
          { 
            id: "22_1_5", 
            name: "اختيار التمارين (Exercise Selection)", 
            topic: "Exercise", 
            badge: "الأربعاء", 
            tasks: [
              { text: "الفرق بين الـ Compound vs Isolation exercises", requirement: "فهم متى نستخدم التمارين المركبة (مثل الـ Squat) والتمارين المنفردة." },
              { text: "ترتيب التمارين في الجلسة", requirement: "دراسة لماذا نبدأ بالتمارين الكبيرة والمعقدة أولاً." }
            ], 
            resources: [
              { title: "Exercise Selection Principles", url: "https://www.youtube.com/results?search_query=exercise+selection+for+physiotherapy" }
            ],
            tip: "ابدأ بالأصعب واللاعب في كامل طاقته." 
          },
          { 
            id: "22_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "حساب الـ 1RM لزميل في تمرين الـ Leg Press", requirement: "استخدام معادلات التقدير (مثل Brzycki formula)." },
              { text: "تصميم برنامج تقوية بسيط لعضلة الـ Quadriceps", requirement: "تحديد الشدة والحجم والراحة." }
            ], 
            resources: [
              { title: "1RM Calculation Practical", url: "https://www.youtube.com/results?search_query=how+to+calculate+1rm+physiotherapy" }
            ],
            tip: "الدقة في حساب الأحمال تمنع الإصابات وتسرع النتائج." 
          },
          { 
            id: "22_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أساسيات الـ S&C", requirement: "التأكد من فهم كيفية بناء برنامج تدريبي علمي." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "العلم هو الذي يوجه العضلات." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Hypertrophy & Strength Development", 
        days: [
          { 
            id: "22_2_1", 
            name: "آليات الضخامة العضلية (Hypertrophy)", 
            topic: "Exercise", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة الـ Mechanical Tension", requirement: "فهم دور الوزن الثقيل في تحفيز نمو الألياف." },
              { text: "فهم الـ Metabolic Stress", requirement: "دراسة دور الـ 'Pump' وتراكم اللاكتيك في النمو العضلي." }
            ], 
            resources: [
              { title: "Mechanisms of Hypertrophy", url: "https://www.youtube.com/results?search_query=mechanisms+of+muscle+hypertrophy+explained" }
            ],
            tip: "الضخامة العضلية تحمي المفاصل وتزيد من معدل الحرق." 
          },
          { 
            id: "22_2_2", 
            name: "تدريب القوة القصوى (Maximal Strength)", 
            topic: "Exercise", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Neural adaptations", requirement: "دراسة كيف يتحسن الجهاز العصبي في تجنيد الألياف العضلية." },
              { text: "تصميم برنامج قوة (Low reps, High weight)", requirement: "التدرب في نطاق 1-5 تكرارات." }
            ], 
            resources: [
              { title: "Strength Training for Rehab", url: "https://www.youtube.com/results?search_query=maximal+strength+training+physiotherapy" }
            ],
            tip: "القوة هي نتاج تعاون بين العضلات والجهاز العصبي." 
          },
          { 
            id: "22_2_3", 
            name: "التحكم في وتيرة التمرين (Tempo Training)", 
            topic: "Exercise", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Tempo notation (e.g., 3-1-1-0)", requirement: "دراسة كيفية التحكم في سرعة النزول والثبات والصعود." },
              { text: "فوائد الـ Slow eccentrics", requirement: "تحسين التحكم الحركي وتقوية الأوتار." }
            ], 
            resources: [
              { title: "Tempo Training Guide", url: "https://www.youtube.com/results?search_query=tempo+training+physiotherapy" }
            ],
            tip: "السرعة البطيئة تزيد من الوقت تحت الجهد (Time Under Tension)." 
          },
          { 
            id: "22_2_4", 
            name: "تدريب الـ Blood Flow Restriction (BFR)", 
            topic: "Exercise", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم مبدأ الـ BFR", requirement: "دراسة كيفية تحقيق ضخامة عضلية بأوزان خفيفة جداً عن طريق تقليل تدفق الدم." },
              { text: "تطبيقات الـ BFR في التأهيل المبكر", requirement: "استخدامه بعد العمليات الجراحية لمنع الضمور." }
            ], 
            resources: [
              { title: "BFR Training Guide", url: "https://www.physio-pedia.com/Blood_Flow_Restriction_Training" }
            ],
            tip: "الـ BFR هو 'سحر' التأهيل للمرضى الذين لا يستطيعون حمل أوزان ثقيلة." 
          },
          { 
            id: "22_2_5", 
            name: "التغذية لدعم النمو العضلي", 
            topic: "Exercise", 
            badge: "الأربعاء", 
            tasks: [
              { text: "أهمية البروتين في الاستشفاء", requirement: "دراسة كمية البروتين المطلوبة للرياضي المصاب." },
              { text: "فهم الـ Energy balance", requirement: "دور السعرات الحرارية في بناء العضلات مقابل فقدان الدهون." }
            ], 
            resources: [
              { title: "Nutrition for Injury Recovery", url: "https://www.physio-pedia.com/Nutrition_and_Athletic_Performance" }
            ],
            tip: "لا يمكنك بناء قصر بدون مواد بناء (بروتين)." 
          },
          { 
            id: "22_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق تمرين بـ Tempo 4-2-1-0 لزميل", requirement: "التأكد من الالتزام بالوقت المحدد لكل مرحلة." },
              { text: "تجربة الـ BFR (إذا توفر الجهاز) أو دراسة تكنيكه", requirement: "فهم شعور الضغط العضلي." }
            ], 
            resources: [
              { title: "Hypertrophy Practical Video", url: "https://www.youtube.com/results?search_query=hypertrophy+training+practical+physiotherapy" }
            ],
            tip: "التركيز الذهني على العضلة (Mind-Muscle Connection) يزيد من النتائج." 
          },
          { 
            id: "22_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة آليات الضخامة والقوة", requirement: "التأكد من فهم كيفية تحفيز الأنسجة للنمو." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "العضلات القوية هي أفضل استثمار لصحتك." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Power, Agility & Energy Systems", 
        days: [
          { 
            id: "22_3_1", 
            name: "تطوير القدرة (Power Development)", 
            topic: "Exercise", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Power = Force x Velocity", requirement: "دراسة كيف نزيد من سرعة إنتاج القوة." },
              { text: "تطبيق الـ Ballistic exercises", requirement: "تمارين الرمي والقفز (Medicine ball throws)." }
            ], 
            resources: [
              { title: "Power Training Guide", url: "https://www.youtube.com/results?search_query=power+training+for+athletes+physiotherapy" }
            ],
            tip: "القدرة هي التي تجعل الرياضي ينفجر في الملعب." 
          },
          { 
            id: "22_3_2", 
            name: "أنظمة الطاقة (Energy Systems)", 
            topic: "Exercise", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة النظام اللاهوائي (ATP-CP & Glycolytic)", requirement: "فهم المجهودات القصيرة والمكثفة." },
              { text: "دراسة النظام الهوائي (Aerobic)", requirement: "فهم التحمل الدوري التنفسي." }
            ], 
            resources: [
              { title: "Energy Systems Explained", url: "https://www.youtube.com/results?search_query=energy+systems+in+sports+explained" }
            ],
            tip: "درب النظام الطاقي الذي يحتاجه الرياضي في لعبته." 
          },
          { 
            id: "22_3_3", 
            name: "تدريب التحمل (Endurance Training)", 
            topic: "Exercise", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ VO2 Max", requirement: "دراسة مقياس كفاءة الجسم في استخدام الأكسجين." },
              { text: "تطبيق الـ Zone training", requirement: "فهم مستويات شدة التمرين بناءً على ضربات القلب." }
            ], 
            resources: [
              { title: "Endurance Training Principles", url: "https://www.physio-pedia.com/Aerobic_Exercise" }
            ],
            tip: "التحمل هو القدرة على الاستمرار رغم التعب." 
          },
          { 
            id: "22_3_4", 
            name: "الرشاقة وتغيير الاتجاه (Agility & COD)", 
            topic: "Exercise", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة الـ Reactive Agility", requirement: "تحسين سرعة الاستجابة للمؤثرات الخارجية (مثل حركة الخصم)." },
              { text: "تطبيق الـ Deceleration training", requirement: "أهمية التدرب على التوقف السريع لتقليل إصابات الركبة." }
            ], 
            resources: [
              { title: "Agility and COD Training", url: "https://www.youtube.com/results?search_query=agility+and+change+of+direction+drills" }
            ],
            tip: "القدرة على التوقف أهم من القدرة على الانطلاق في الوقاية من الإصابات." 
          },
          { 
            id: "22_3_5", 
            name: "الاستشفاء الرياضي (Sports Recovery)", 
            topic: "Exercise", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ Active Recovery", requirement: "دراسة فوائد الحركة الخفيفة في التخلص من الفضلات العضلية." },
              { text: "دور الـ Massage and Foam Rolling", requirement: "تحسين مرونة الأنسجة وتقليل الـ DOMS." }
            ], 
            resources: [
              { title: "Recovery Strategies Guide", url: "https://www.physio-pedia.com/Recovery_Strategies_in_Sports" }
            ],
            tip: "الاستشفاء هو الوقت الذي يحدث فيه التكيف الحقيقي." 
          },
          { 
            id: "22_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم دائرة تدريبية (Circuit training) تجمع بين القوة والرشاقة", requirement: "تحديد المحطات والزمن." },
              { text: "تطبيق تمارين الـ Foam rolling لعضلات الساق", requirement: "التأكد من التقنية الصحيحة." }
            ], 
            resources: [
              { title: "Power and Agility Practical", url: "https://www.youtube.com/results?search_query=power+and+agility+practical+session" }
            ],
            tip: "التنوع في التدريب يمنع الملل ويزيد النتائج." 
          },
          { 
            id: "22_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أنظمة الطاقة وتدريبات القدرة", requirement: "التأكد من فهم كيفية دمجها في برنامج التأهيل." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الرياضي المتكامل هو الذي يمتلك القوة والسرعة والتحمل." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Periodization & Program Design", 
        days: [
          { 
            id: "22_4_1", 
            name: "دورية التدريب (Periodization)", 
            topic: "Exercise", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Macro, Meso, and Micro cycles", requirement: "دراسة كيفية تقسيم البرنامج التدريبي على مدار السنة." },
              { text: "الفرق بين الـ Linear vs Undulating periodization", requirement: "فهم طرق تغيير الأحمال أسبوعياً أو يومياً." }
            ], 
            resources: [
              { title: "Periodization in Rehab", url: "https://www.youtube.com/results?search_query=periodization+for+physiotherapy+explained" }
            ],
            tip: "التخطيط طويل المدى هو سر الوصول للقمة." 
          },
          { 
            id: "22_4_2", 
            name: "تأهيل الـ Tendinopathy بالأحمال", 
            topic: "Exercise", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Heavy Slow Resistance (HSR)", requirement: "فهم لماذا تعتبر الأوزان الثقيلة والحركة البطيئة هي الأفضل للأوتار." },
              { text: "تطبيق الـ Tendon loading progression", requirement: "التدرج من الـ Isometric إلى الـ Plyometrics." }
            ], 
            resources: [
              { title: "Tendon Loading Guide", url: "https://www.physio-pedia.com/Tendinopathy_Exercises" }
            ],
            tip: "الأوتار تحب الأحمال، لكنها تكره التغييرات المفاجئة." 
          },
          { 
            id: "22_4_3", 
            name: "الوقاية من الإصابات بالأحمال (Injury Prevention)", 
            topic: "Exercise", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Acute:Chronic Workload Ratio", requirement: "دراسة كيفية التنبؤ بالإصابات من خلال مراقبة أحمال التدريب." },
              { text: "تطبيق تمارين الـ Prehab", requirement: "تمارين بسيطة تدمج في الإحماء لتقوية نقاط الضعف." }
            ], 
            resources: [
              { title: "Workload and Injury Risk", url: "https://www.youtube.com/results?search_query=acute+chronic+workload+ratio+explained" }
            ],
            tip: "أفضل إصابة هي التي لم تحدث أبداً." 
          },
          { 
            id: "22_4_4", 
            name: "تعديل التمارين للحالات الخاصة", 
            topic: "Exercise", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تعديل الـ S&C لكبار السن", requirement: "التركيز على القوة الوظيفية ومنع هشاشة العظام." },
              { text: "تعديل الـ S&C للأطفال والناشئين", requirement: "فهم خرافات تأثر الطول بالحديد والتركيز على التكنيك." }
            ], 
            resources: [
              { title: "S&C for Special Populations", url: "https://www.youtube.com/results?search_query=strength+training+for+elderly+and+youth" }
            ],
            tip: "الحديد مفيد للجميع، فقط عدل الطريقة." 
          },
          { 
            id: "22_4_5", 
            name: "بناء برنامج S&C متكامل لمريض", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تحليل متطلبات المريض (Needs Analysis)", requirement: "ما هي القوة التي يحتاجها المريض في حياته اليومية أو رياضته؟" },
              { text: "كتابة البرنامج التدريبي كاملاً", requirement: "تحديد التمارين، الأحمال، التكرارات، والراحة." }
            ], 
            resources: [
              { title: "Program Design for Rehab", url: "https://www.youtube.com/results?search_query=how+to+design+a+rehab+program+physiotherapy" }
            ],
            tip: "برنامجك هو خريطة الطريق لشفاء المريض." 
          },
          { 
            id: "22_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم وقيادة جلسة S&C لزميل", requirement: "التأكد من جودة التكنيك وتعديل الأحمال حسب الحاجة." },
              { text: "استخدام تطبيقات الموبايل لمراقبة الأحمال", requirement: "التدرب على تسجيل البيانات." }
            ], 
            resources: [
              { title: "Final S&C Practical Video", url: "https://www.youtube.com/results?search_query=comprehensive+strength+and+conditioning+session" }
            ],
            tip: "أنت الآن تمتلك العلم لتحويل المرضى إلى رياضيين!" 
          },
          { 
            id: "22_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر القوة والتكيف", requirement: "التأكد من إتقان مبادئ التدريب وبرمجة الأحمال والوقاية." },
              { text: "راحة", requirement: "استعد لشهر الأشعة." }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن خبيراً في القوة والتكيف العلاجي!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 22, 
    name: "شهر 23 — الأشعة (Radiology for Physiotherapists)", 
    weeks: [
      { 
        title: "الأسبوع 1 — X-Ray & Bone Imaging", 
        days: [
          { 
            id: "23_1_1", 
            name: "أساسيات الأشعة السينية (X-Ray)", 
            topic: "Imaging", 
            badge: "السبت", 
            tasks: [
              { text: "فهم كيفية عمل الـ X-Ray", requirement: "دراسة الـ Radiodensity (لماذا يظهر العظم أبيض والهواء أسود)." },
              { text: "دراسة الـ Standard Views", requirement: "فهم الفرق بين الـ AP, Lateral, and Oblique views." }
            ], 
            resources: [
              { title: "Introduction to X-Ray", url: "https://www.physio-pedia.com/X-Rays" }
            ],
            tip: "الأشعة السينية هي الخط الأول لتقييم العظام." 
          },
          { 
            id: "23_1_2", 
            name: "تشخيص الكسور بالأشعة", 
            topic: "Imaging", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة أنواع الكسور", requirement: "فهم الـ Transverse, Oblique, Spiral, and Comminuted fractures." },
              { text: "وصف الكسر (Displacement & Angulation)", requirement: "كيفية كتابة تقرير دقيق عن وضعية العظمة المكسورة." }
            ], 
            resources: [
              { title: "Fracture Radiology Guide", url: "https://www.physio-pedia.com/Fractures" }
            ],
            tip: "ابحث دائماً عن كسر في مفصلين (المفصل فوق وتحت مكان الألم)." 
          },
          { 
            id: "23_1_3", 
            name: "أشعة المفاصل والخشونة", 
            topic: "Imaging", 
            badge: "الاثنين", 
            tasks: [
              { text: "علامات الـ Osteoarthritis", requirement: "دراسة الـ Joint space narrowing, Osteophytes, and Subchondral sclerosis." },
              { text: "تقييم الـ Joint alignment", requirement: "فهم الـ Varus/Valgus deformities من خلال الأشعة." }
            ], 
            resources: [
              { title: "Radiology of Osteoarthritis", url: "https://www.youtube.com/results?search_query=radiology+of+osteoarthritis+explained" }
            ],
            tip: "الأشعة تظهر الخشونة، لكنها لا تظهر دائماً سبب الألم." 
          },
          { 
            id: "23_1_4", 
            name: "أشعة العمود الفقري", 
            topic: "Imaging", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تقييم الـ Spinal Alignment", requirement: "دراسة الـ Scoliosis (Cobb angle) والـ Spondylolisthesis." },
              { text: "فهم الـ Degenerative changes", requirement: "دراسة الـ Disc space narrowing والـ Bone spurs في الفقرات." }
            ], 
            resources: [
              { title: "Spine Radiology Guide", url: "https://www.youtube.com/results?search_query=spine+xray+interpretation+for+physiotherapists" }
            ],
            tip: "الفقرات يجب أن تكون مصفوفة كالمكعبات فوق بعضها." 
          },
          { 
            id: "23_1_5", 
            name: "الأشعة المقطعية (CT Scan)", 
            topic: "Imaging", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم مميزات الـ CT Scan", requirement: "دراسة لماذا نستخدمها للكسور المعقدة والـ 3D reconstruction." },
              { text: "الفرق بين الـ CT والـ X-Ray", requirement: "فهم متى نطلب الأشعة المقطعية بدلاً من العادية." }
            ], 
            resources: [
              { title: "CT Scan in Orthopedics", url: "https://www.physio-pedia.com/Computed_Tomography_(CT)" }
            ],
            tip: "الـ CT هو الأفضل لرؤية تفاصيل العظام الدقيقة." 
          },
          { 
            id: "23_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تحليل أشعة ركبة بها خشونة", requirement: "تحديد الـ Osteophytes وقياس الـ Joint space." },
              { text: "تحديد نوع كسر من مجموعة صور أشعة", requirement: "التدرب على التشخيص السريع." }
            ], 
            resources: [
              { title: "X-Ray Interpretation Practical", url: "https://www.youtube.com/results?search_query=xray+interpretation+practice+orthopedics" }
            ],
            tip: "الممارسة المستمرة تجعل عينك تلتقط الخلل بسرعة." 
          },
          { 
            id: "23_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أساسيات الـ X-Ray والـ CT", requirement: "التأكد من فهم كيفية قراءة صور العظام." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الأشعة هي عينك داخل جسم المريض." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — MRI: Soft Tissue Masterclass", 
        days: [
          { 
            id: "23_2_1", 
            name: "أساسيات الرنين المغناطيسي (MRI)", 
            topic: "Imaging", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ T1 vs T2 sequences", requirement: "دراسة لماذا يظهر الماء (الالتهاب) أبيض في T2 وأسود في T1." },
              { text: "فهم الـ Fat suppression (STIR)", requirement: "دراسة كيفية رؤية الـ Bone marrow edema بوضوح." }
            ], 
            resources: [
              { title: "MRI Basics for Physiotherapists", url: "https://www.physio-pedia.com/Magnetic_Resonance_Imaging_(MRI)" }
            ],
            tip: "الرنين هو الملك عندما يتعلق الأمر بالأنسجة الرخوة." 
          },
          { 
            id: "23_2_2", 
            name: "رنين الركبة (ACL & Meniscus)", 
            topic: "Imaging", 
            badge: "الأحد", 
            tasks: [
              { text: "تشخيص قطع الرباط الصليبي", requirement: "دراسة الـ Primary signs (قطع الوتر) والـ Secondary signs (Bone bruise)." },
              { text: "تشخيص قطع الغضروف الهلالي", requirement: "فهم الـ High signal reaching the surface." }
            ], 
            resources: [
              { title: "Knee MRI Interpretation", url: "https://www.youtube.com/results?search_query=knee+mri+interpretation+for+physiotherapists" }
            ],
            tip: "ابحث عن الـ 'Ghost sign' في حالات قطع الغضروف." 
          },
          { 
            id: "23_2_3", 
            name: "رنين الكتف (Rotator Cuff)", 
            topic: "Imaging", 
            badge: "الاثنين", 
            tasks: [
              { text: "تشخيص تمزق الأوتار", requirement: "فهم الفرق بين الـ Partial vs Full thickness tears." },
              { text: "تشخيص الـ Labral tears", requirement: "فهم الـ SLAP and Bankart lesions في الرنين." }
            ], 
            resources: [
              { title: "Shoulder MRI Interpretation", url: "https://www.youtube.com/results?search_query=shoulder+mri+interpretation+for+physiotherapists" }
            ],
            tip: "الرنين يظهر جودة العضلة (Fatty infiltration) وهو أمر مهم للتأهيل." 
          },
          { 
            id: "23_2_4", 
            name: "رنين العمود الفقري (Disc Herniation)", 
            topic: "Imaging", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تقييم الانزلاق الغضروفي", requirement: "فهم الفرق بين الـ Bulge, Protrusion, and Extrusion." },
              { text: "تقييم ضيق القناة الشوكية (Stenosis)", requirement: "دراسة كيفية رؤية الضغط على الأعصاب." }
            ], 
            resources: [
              { title: "Lumbar Spine MRI Guide", url: "https://www.youtube.com/results?search_query=lumbar+spine+mri+interpretation+for+physiotherapists" }
            ],
            tip: "تذكر: الكثير من الناس لديهم انزلاق غضروفي في الرنين بدون أي ألم." 
          },
          { 
            id: "23_2_5", 
            name: "رنين الكاحل والحوض", 
            topic: "Imaging", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تشخيص تمزق أربطة الكاحل", requirement: "دراسة الـ ATFL and CFL injuries." },
              { text: "تشخيص الـ Hip Labral tears", requirement: "فهم كيفية رؤية الغضروف الصغير في الحوض." }
            ], 
            resources: [
              { title: "Ankle and Hip MRI Guide", url: "https://www.youtube.com/results?search_query=ankle+and+hip+mri+interpretation" }
            ],
            tip: "الرنين هو الأداة الأدق لإصابات الملاعب المعقدة." 
          },
          { 
            id: "23_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تحديد قطع الرباط الصليبي في صور رنين حقيقية", requirement: "التدرب على رؤية الـ Sagittal view." },
              { text: "التمييز بين T1 و T2 في مجموعة صور", requirement: "البحث عن السائل النخاعي (CSF) الأبيض في T2." }
            ], 
            resources: [
              { title: "MRI Interpretation Practice", url: "https://www.youtube.com/results?search_query=mri+interpretation+quiz+orthopedics" }
            ],
            tip: "T2 = H2O (الماء يلمع في T2)." 
          },
          { 
            id: "23_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أساسيات الرنين المغناطيسي", requirement: "التأكد من فهم كيفية قراءة الأنسجة الرخوة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الرنين يكمل الفحص السريري، ولا يحل محله." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Ultrasound & Specialized Imaging", 
        days: [
          { 
            id: "23_3_1", 
            name: "السونار الحركي (Musculoskeletal Ultrasound)", 
            topic: "Imaging", 
            badge: "السبت", 
            tasks: [
              { text: "فهم مميزات السونار", requirement: "دراسة الـ Dynamic imaging (رؤية الوتر وهو يتحرك)." },
              { text: "تشخيص التهاب الأوتار (Tendinopathy)", requirement: "فهم الـ Hypoechoic areas والـ Thickening." }
            ], 
            resources: [
              { title: "MSK Ultrasound Basics", url: "https://www.physio-pedia.com/Diagnostic_Ultrasound" }
            ],
            tip: "السونار هو الأفضل لتقييم الأوتار السطحية في الوقت الحقيقي." 
          },
          { 
            id: "23_3_2", 
            name: "سونار الكتف والكوع", 
            topic: "Imaging", 
            badge: "الأحد", 
            tasks: [
              { text: "تقييم الـ Rotator Cuff بالسونار", requirement: "دراسة كيفية اكتشاف التمزقات الكلية والجزئية." },
              { text: "تشخيص الـ Tennis Elbow", requirement: "رؤية التغيرات في منشأ عضلات الساعد." }
            ], 
            resources: [
              { title: "Shoulder Ultrasound Guide", url: "https://www.youtube.com/results?search_query=shoulder+ultrasound+for+physiotherapists" }
            ],
            tip: "السونار دقيق جداً في الكتف إذا كان الفاحص خبيراً." 
          },
          { 
            id: "23_3_3", 
            name: "سونار القدم والكاحل", 
            topic: "Imaging", 
            badge: "الاثنين", 
            tasks: [
              { text: "تشخيص الـ Plantar Fasciitis", requirement: "قياس سمك اللفافة الأخمصية." },
              { text: "تقييم وتر أكيلس", requirement: "اكتشاف التمزقات والالتهابات المزمنة." }
            ], 
            resources: [
              { title: "Ankle and Foot Ultrasound", url: "https://www.youtube.com/results?search_query=ankle+and+foot+ultrasound+physiotherapy" }
            ],
            tip: "السونار يظهر تدفق الدم الزائد (Neovascularization) في الأوتار الملتهبة." 
          },
          { 
            id: "23_3_4", 
            name: "أشعة الطب النووي (Bone Scan)", 
            topic: "Imaging", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Bone Scan", requirement: "دراسة لماذا نستخدمها لاكتشاف الـ Stress fractures والأورام." },
              { text: "فهم الـ Hot spots", requirement: "دراسة المناطق التي يزداد فيها نشاط بناء العظم." }
            ], 
            resources: [
              { title: "Bone Scan in Orthopedics", url: "https://www.physio-pedia.com/Bone_Scan" }
            ],
            tip: "الـ Bone Scan حساس جداً لكنه غير محدد (Sensitive but not specific)." 
          },
          { 
            id: "23_3_5", 
            name: "أشعة الـ DEXA (هشاشة العظام)", 
            topic: "Imaging", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم تقرير الـ DEXA", requirement: "دراسة الـ T-score والـ Z-score." },
              { text: "تصنيف الهشاشة", requirement: "فهم الفرق بين الـ Osteopenia والـ Osteoporosis." }
            ], 
            resources: [
              { title: "DEXA Scan Explained", url: "https://www.physio-pedia.com/Dual-Energy_X-ray_Absorptiometry_(DEXA)" }
            ],
            tip: "الهشاشة تزيد من خطر الكسور، فكن حذراً في تمارينك." 
          },
          { 
            id: "23_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "مشاهدة فيديو لسونار حركي للكتف", requirement: "محاولة التعرف على الأوتار (Supraspinatus)." },
              { text: "تحليل تقرير DEXA لمريض", requirement: "تحديد مدى خطورة الحالة." }
            ], 
            resources: [
              { title: "MSK Ultrasound Practical Video", url: "https://www.youtube.com/results?search_query=msk+ultrasound+practical+demonstration" }
            ],
            tip: "السونار يحتاج يداً ثابتة وعيناً مدربة." 
          },
          { 
            id: "23_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة السونار والطب النووي", requirement: "التأكد من فهم متى نطلب كل نوع من الأشعة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "تعدد الوسائل يزيد من دقة التشخيص." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Clinical Integration & Radiology Quiz", 
        days: [
          { 
            id: "23_4_1", 
            name: "ربط الأشعة بالفحص السريري", 
            topic: "Imaging", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Clinical Correlation", requirement: "دراسة لماذا يجب أن نعالج المريض وليس الأشعة." },
              { text: "التعامل مع الـ Incidental findings", requirement: "ماذا تفعل عندما تجد مشكلة في الأشعة لا تسبب أعراضاً؟" }
            ], 
            resources: [
              { title: "Clinical Correlation in Radiology", url: "https://www.youtube.com/results?search_query=treat+the+patient+not+the+mri" }
            ],
            tip: "الأشعة هي جزء من الصورة، وليست الصورة كاملة." 
          },
          { 
            id: "23_4_2", 
            name: "متى تطلب الأشعة؟ (Red Flags)", 
            topic: "Imaging", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Ottawa Ankle Rules", requirement: "فهم متى نطلب أشعة للكاحل الملتوي." },
              { text: "دراسة الـ Canadian C-Spine Rules", requirement: "فهم متى نطلب أشعة للرقبة بعد الحوادث." }
            ], 
            resources: [
              { title: "Clinical Decision Rules for Imaging", url: "https://www.physio-pedia.com/Ottawa_Ankle_Rules" }
            ],
            tip: "القواعد السريرية توفر الوقت والمال وتحمي المريض من الإشعاع." 
          },
          { 
            id: "23_4_3", 
            name: "قراءة تقارير الأشعة باحترافية", 
            topic: "Imaging", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم المصطلحات الطبية في التقارير", requirement: "دراسة معاني كلمات مثل (Effusion, Edema, Degeneration, Signal intensity)." },
              { text: "كتابة ملخص للأشعة في ملف المريض", requirement: "التدرب على استخراج المعلومات المهمة فقط." }
            ], 
            resources: [
              { title: "Radiology Report Terminology", url: "https://www.youtube.com/results?search_query=radiology+report+terms+explained" }
            ],
            tip: "لا تعتمد على الخلاصة (Conclusion) فقط، اقرأ التقرير كاملاً." 
          },
          { 
            id: "23_4_4", 
            name: "الأشعة في حالات الطوارئ", 
            topic: "Imaging", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "اكتشاف الـ Cauda Equina في الرنين", requirement: "علامات الخطر التي تستدعي جراحة فورية." },
              { text: "اكتشاف الكسور غير المستقرة", requirement: "فهم متى يكون التحريك خطراً على المريض." }
            ], 
            resources: [
              { title: "Emergency Radiology for Physios", url: "https://www.youtube.com/results?search_query=emergency+radiology+red+flags" }
            ],
            tip: "سرعة اكتشاف علامات الخطر تنقذ حياة المريض." 
          },
          { 
            id: "23_4_5", 
            name: "بناء قرار سريري مبني على الأشعة", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "حالة دراسية: مريض يعاني من ألم ظهر وأشعة سليمة", requirement: "كيف تفسر ذلك للمريض وتبني خطة علاج؟" },
              { text: "حالة دراسية: رياضي مصاب بقطع ACL في الرنين", requirement: "تحديد هل يحتاج جراحة أم تأهيل تحفظي." }
            ], 
            resources: [
              { title: "Radiology Case Studies", url: "https://www.physio-pedia.com/Clinical_Reasoning_Case_Study" }
            ],
            tip: "الأشعة تساعدك في التنبؤ بالوقت الذي سيحتاجه المريض للشفاء." 
          },
          { 
            id: "23_4_6", 
            name: "تطبيق عملي نهائي (Quiz)", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "اختبار قراءة 10 صور أشعة متنوعة", requirement: "تحديد التشخيص في كل صورة." },
              { text: "شرح نتائج أشعة لزميل (كأنه مريض)", requirement: "التدرب على تبسيط المعلومات وطمأنة المريض." }
            ], 
            resources: [
              { title: "Radiology Final Quiz", url: "https://www.youtube.com/results?search_query=orthopedic+radiology+quiz+for+students" }
            ],
            tip: "أنت الآن تمتلك الرؤية الثاقبة لتشخيص الحالات بدقة!" 
          },
          { 
            id: "23_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الأشعة", requirement: "التأكد من إتقان قراءة الـ X-Ray, MRI, and Ultrasound." },
              { text: "راحة", requirement: "استعد لشهر الأدوية." }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن خبيراً في الأشعة الحركية!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 23, 
    name: "شهر 24 — الأدوية (Pharmacology for Physiotherapists)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Pain Management & NSAIDs", 
        days: [
          { 
            id: "24_1_1", 
            name: "أساسيات علم الأدوية", 
            topic: "Pharmacology", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Pharmacokinetics", requirement: "دراسة كيف يمتص الجسم الدواء ويوزعه ويتخلص منه." },
              { text: "فهم الـ Pharmacodynamics", requirement: "دراسة تأثير الدواء على الجسم (Receptors)." }
            ], 
            resources: [
              { title: "Introduction to Pharmacology", url: "https://www.physio-pedia.com/Pharmacology_in_Physiotherapy" }
            ],
            tip: "فهم كيفية عمل الدواء يساعدك في توقع آثاره الجانبية." 
          },
          { 
            id: "24_1_2", 
            name: "مضادات الالتهاب غير الستيرويدية (NSAIDs)", 
            topic: "Pharmacology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ COX-1 vs COX-2 inhibitors", requirement: "فهم الفرق بين الأدوية مثل Ibuprofen و Celebrex." },
              { text: "الآثار الجانبية للـ NSAIDs", requirement: "دراسة تأثيرها على المعدة والكلى والقلب." }
            ], 
            resources: [
              { title: "NSAIDs Guide for Physios", url: "https://www.youtube.com/results?search_query=nsaids+explained+for+physiotherapists" }
            ],
            tip: "الـ NSAIDs قد تؤخر التئام الأنسجة إذا استخدمت بشكل مفرط في البداية." 
          },
          { 
            id: "24_1_3", 
            name: "الباراسيتامول (Acetaminophen)", 
            topic: "Pharmacology", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم آلية عمل الباراسيتامول", requirement: "دراسة لماذا يعتبر مسكناً للألم وليس مضاداً للالتهاب." },
              { text: "مخاطر الجرعة الزائدة", requirement: "فهم تأثيره السمي على الكبد." }
            ], 
            resources: [
              { title: "Acetaminophen Pharmacology", url: "https://www.youtube.com/results?search_query=acetaminophen+mechanism+of+action" }
            ],
            tip: "الباراسيتامول هو الخيار الأكثر أماناً للكثير من المرضى." 
          },
          { 
            id: "24_1_4", 
            name: "المسكنات الأفيونية (Opioids)", 
            topic: "Pharmacology", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة أنواع الـ Opioids", requirement: "فهم الفرق بين الـ Weak (Tramadol) والـ Strong (Morphine) opioids." },
              { text: "فهم الـ Opioid Crisis والادمان", requirement: "دراسة دور المعالج الطبيعي في تقليل الاعتماد على المسكنات." }
            ], 
            resources: [
              { title: "Opioids in Pain Management", url: "https://www.physio-pedia.com/Opioids" }
            ],
            tip: "العلاج الطبيعي هو البديل الأفضل للمسكنات الأفيونية في الآلام المزمنة." 
          },
          { 
            id: "24_1_5", 
            name: "الأدوية الموضعية (Topical Medications)", 
            topic: "Pharmacology", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة الـ Topical NSAIDs", requirement: "فهم مميزات الجل واللصقات في تقليل الآثار الجانبية العامة." },
              { text: "فهم الـ Capsaicin and Menthol", requirement: "دراسة كيفية عمل المبردات والمسخنات الموضعية." }
            ], 
            resources: [
              { title: "Topical Analgesics Guide", url: "https://www.youtube.com/results?search_query=topical+analgesics+for+physiotherapy" }
            ],
            tip: "الأدوية الموضعية خيار رائع للآلام السطحية والمفاصل الصغيرة." 
          },
          { 
            id: "24_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "مراجعة قائمة أدوية لمريض حقيقي", requirement: "تحديد المسكنات التي يتناولها وجرعاتها." },
              { text: "تثقيف مريض حول مخاطر الاستخدام المفرط للمسكنات", requirement: "التدرب على مهارات التواصل." }
            ], 
            resources: [
              { title: "Pharmacology Practical for Physios", url: "https://www.youtube.com/results?search_query=pharmacology+screening+physiotherapy" }
            ],
            tip: "اسأل المريض دائماً: 'ما هي الأدوية التي تتناولها بدون وصفة طبية؟'" 
          },
          { 
            id: "24_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أدوية الألم والالتهاب", requirement: "التأكد من فهم كيفية تأثيرها على برنامج العلاج." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "المعالج الواعي هو الذي يعرف ما يدخل جسم مريضه." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Corticosteroids & Muscle Relaxants", 
        days: [
          { 
            id: "24_2_1", 
            name: "الكورتيكوستيرويدات (Corticosteroids)", 
            topic: "Pharmacology", 
            badge: "السبت", 
            tasks: [
              { text: "فهم آلية عمل الكورتيزون", requirement: "دراسة كيف يثبط الجهاز المناعي ويقلل الالتهاب بقوة." },
              { text: "الفرق بين الـ Oral and Injected steroids", requirement: "فهم تأثير الحقن الموضعي على الأوتار." }
            ], 
            resources: [
              { title: "Corticosteroids in Orthopedics", url: "https://www.physio-pedia.com/Corticosteroids" }
            ],
            tip: "الحقن المتكرر للكورتيزون قد يضعف الأوتار ويزيد خطر التمزق." 
          },
          { 
            id: "24_2_2", 
            name: "باسط العضلات (Muscle Relaxants)", 
            topic: "Pharmacology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Centrally acting relaxants", requirement: "فهم كيف تؤثر على الجهاز العصبي وتسبب الخمول." },
              { text: "دراسة الـ Antispasticity agents", requirement: "فهم أدوية مثل Baclofen لحالات الشلل التشنجي." }
            ], 
            resources: [
              { title: "Muscle Relaxants Guide", url: "https://www.youtube.com/results?search_query=muscle+relaxants+explained+for+physiotherapists" }
            ],
            tip: "باسط العضلات قد يسبب الدوار، فكن حذراً عند تمرين المريض على التوازن." 
          },
          { 
            id: "24_2_3", 
            name: "أدوية هشاشة العظام", 
            topic: "Pharmacology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Bisphosphonates", requirement: "فهم كيف تمنع تآكل العظام." },
              { text: "دور الكالسيوم وفيتامين د", requirement: "دراسة الجرعات الموصى بها لصحة العظام." }
            ], 
            resources: [
              { title: "Osteoporosis Medications", url: "https://www.physio-pedia.com/Osteoporosis_Pharmacotherapy" }
            ],
            tip: "الأدوية تبني العظام، والتمارين (Weight-bearing) تقويها." 
          },
          { 
            id: "24_2_4", 
            name: "أدوية الروماتويد (DMARDs)", 
            topic: "Pharmacology", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Disease-Modifying Anti-Rheumatic Drugs", requirement: "دراسة أدوية مثل Methotrexate." },
              { text: "فهم الـ Biologics", requirement: "دراسة الأدوية الحديثة التي تستهدف بروتينات معينة في المناعة." }
            ], 
            resources: [
              { title: "DMARDs and Biologics Guide", url: "https://www.youtube.com/results?search_query=dmards+and+biologics+explained" }
            ],
            tip: "هذه الأدوية تغير مسار المرض، وليس فقط الأعراض." 
          },
          { 
            id: "24_2_5", 
            name: "أدوية النقرس (Gout)", 
            topic: "Pharmacology", 
            badge: "الأربعاء", 
            tasks: [
              { text: "أدوية النوبات الحادة (Colchicine)", requirement: "فهم كيفية تقليل الألم السريع في المفصل." },
              { text: "أدوية الوقاية (Allopurinol)", requirement: "فهم كيفية تقليل حمض اليوريك في الدم." }
            ], 
            resources: [
              { title: "Gout Medications Guide", url: "https://www.youtube.com/results?search_query=gout+medications+pharmacology" }
            ],
            tip: "النقرس هو 'ملك المفاصل'، والأدوية هي مفتاح السيطرة عليه." 
          },
          { 
            id: "24_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "البحث عن الآثار الجانبية لدواء Baclofen", requirement: "تحديد كيف يؤثر ذلك على جلسة العلاج الطبيعي." },
              { text: "تصميم نصيحة لمريض حول توقيت تناول الدواء قبل الجلسة", requirement: "لتحقيق أقصى استفادة من التمرين." }
            ], 
            resources: [
              { title: "Practical Pharmacology Case Study", url: "https://www.youtube.com/results?search_query=pharmacology+in+clinical+practice+physiotherapy" }
            ],
            tip: "توقيت الجلسة بعد تناول المسكن بـ 30-60 دقيقة قد يكون مثالياً." 
          },
          { 
            id: "24_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الكورتيزون وباسط العضلات وأدوية العظام", requirement: "التأكد من فهم تأثيراتها الجهازية." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "المعرفة الدوائية تحميك من الأخطاء المهنية." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Neuropathic Pain & Cardiovascular Drugs", 
        days: [
          { 
            id: "24_3_1", 
            name: "أدوية ألم الأعصاب (Neuropathic Pain)", 
            topic: "Pharmacology", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة الـ Gabapentinoids (Pregabalin/Gabapentin)", requirement: "فهم كيف تقلل من إشارات الألم في الأعصاب." },
              { text: "مضادات الاكتئاب للألم (Amitriptyline)", requirement: "دراسة دورها في تعديل الشعور بالألم المزمن." }
            ], 
            resources: [
              { title: "Neuropathic Pain Medications", url: "https://www.physio-pedia.com/Neuropathic_Pain_Medication" }
            ],
            tip: "ألم الأعصاب يحتاج أدوية مختلفة تماماً عن ألم العضلات." 
          },
          { 
            id: "24_3_2", 
            name: "أدوية الضغط والقلب وتأثيرها على التمرين", 
            topic: "Pharmacology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Beta-blockers", requirement: "فهم لماذا لا تزيد ضربات قلب هؤلاء المرضى مع المجهود." },
              { text: "دراسة الـ ACE inhibitors and Diuretics", requirement: "فهم مخاطر هبوط الضغط المفاجئ (Orthostatic hypotension)." }
            ], 
            resources: [
              { title: "Cardiovascular Drugs and Exercise", url: "https://www.physio-pedia.com/Cardiac_Medications" }
            ],
            tip: "استخدم مقياس RPE بدلاً من ضربات القلب لمرضى الـ Beta-blockers." 
          },
          { 
            id: "24_3_3", 
            name: "مضادات التجلط (Anticoagulants)", 
            topic: "Pharmacology", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Warfarin and Heparin", requirement: "فهم مخاطر النزيف والكدمات أثناء العلاج اليدوي." },
              { text: "فهم الـ NOACs الحديثة", requirement: "دراسة الأدوية الجديدة مثل Rivaroxaban." }
            ], 
            resources: [
              { title: "Anticoagulants Guide for Physios", url: "https://www.youtube.com/results?search_query=anticoagulants+explained+for+physiotherapists" }
            ],
            tip: "كن حذراً جداً عند استخدام الـ Deep tissue massage أو الـ Graston مع هؤلاء المرضى." 
          },
          { 
            id: "24_3_4", 
            name: "أدوية السكر (Diabetes Medications)", 
            topic: "Pharmacology", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دراسة الـ Insulin and Metformin", requirement: "فهم مخاطر الهبوط الحاد في السكر (Hypoglycemia) أثناء التمرين." },
              { text: "التعامل مع نوبة هبوط السكر", requirement: "ماذا تفعل إذا أغمي على المريض في الجلسة؟" }
            ], 
            resources: [
              { title: "Diabetes and Exercise Guide", url: "https://www.physio-pedia.com/Diabetes_and_Exercise" }
            ],
            tip: "دائماً احتفظ بقطعة حلوى أو عصير في عيادتك." 
          },
          { 
            id: "24_3_5", 
            name: "أدوية الجهاز التنفسي", 
            topic: "Pharmacology", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة الـ Bronchodilators (Ventolin)", requirement: "فهم كيفية استخدام البخاخ قبل تمارين التنفس." },
              { text: "دراسة الـ Inhaled Steroids", requirement: "فهم دورها في السيطرة على الربو." }
            ], 
            resources: [
              { title: "Respiratory Medications Guide", url: "https://www.physio-pedia.com/Respiratory_Pharmacology" }
            ],
            tip: "تأكد أن المريض أحضر بخاخه معه في الجلسة." 
          },
          { 
            id: "24_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "قياس ضغط مريض يتناول أدوية ضغط قبل وبعد التمرين", requirement: "ملاحظة التغيرات." },
              { text: "البحث عن التفاعلات الدوائية (Drug interactions) لمريض يتناول 5 أدوية فأكثر", requirement: "استخدام موقع Drugs.com." }
            ], 
            resources: [
              { title: "Cardiovascular Screening Practical", url: "https://www.youtube.com/results?search_query=cardiovascular+assessment+physiotherapy" }
            ],
            tip: "البيانات الحيوية لا تكذب." 
          },
          { 
            id: "24_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أدوية الأعصاب والقلب والسكر", requirement: "التأكد من فهم كيفية إدارة المخاطر." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الأمان أولاً، ثم العلاج." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Clinical Integration & Pharmacology Quiz", 
        days: [
          { 
            id: "24_4_1", 
            name: "التعرف على الـ Adverse Drug Reactions (ADRs)", 
            topic: "Pharmacology", 
            badge: "السبت", 
            tasks: [
              { text: "اكتشاف الحساسية الدوائية", requirement: "دراسة علامات الـ Anaphylaxis والطفح الجلدي." },
              { text: "التعرف على الـ Ototoxicity and Nephrotoxicity", requirement: "تأثير بعض الأدوية على السمع والكلى." }
            ], 
            resources: [
              { title: "Adverse Drug Reactions Guide", url: "https://www.youtube.com/results?search_query=adverse+drug+reactions+explained" }
            ],
            tip: "إذا ظهر عرض جديد ومفاجئ، فكر في الدواء." 
          },
          { 
            id: "24_4_2", 
            name: "الأدوية والوقاية من السقوط (Falls Prevention)", 
            topic: "Pharmacology", 
            badge: "الأحد", 
            tasks: [
              { text: "دراسة الـ Polypharmacy", requirement: "فهم كيف يزيد تناول أكثر من 5 أدوية من خطر السقوط عند كبار السن." },
              { text: "الأدوية التي تسبب الدوار (Dizziness)", requirement: "دراسة الـ Sedatives and Hypnotics." }
            ], 
            resources: [
              { title: "Polypharmacy and Falls", url: "https://www.physio-pedia.com/Polypharmacy_in_the_Elderly" }
            ],
            tip: "مراجعة الأدوية هي جزء أساسي من برنامج الوقاية من السقوط." 
          },
          { 
            id: "24_4_3", 
            name: "التواصل مع الطبيب حول الأدوية", 
            topic: "Pharmacology", 
            badge: "الاثنين", 
            tasks: [
              { text: "كيفية كتابة ملاحظة للطبيب عن أثر جانبي", requirement: "استخدام لغة طبية دقيقة ووصف الأعراض بوضوح." },
              { text: "فهم حدودك المهنية", requirement: "تذكر: أنت لا تصف الدواء ولا تغير جرعته، أنت فقط تراقب وتنصح." }
            ], 
            resources: [
              { title: "Interprofessional Communication Guide", url: "https://www.youtube.com/results?search_query=physiotherapist+doctor+communication" }
            ],
            tip: "التعاون مع الطبيب يضمن أفضل رعاية للمريض." 
          },
          { 
            id: "24_4_4", 
            name: "الأدوية في حالات الطوارئ بالعيادة", 
            topic: "Pharmacology", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "التعامل مع الـ Hypoglycemic shock", requirement: "خطوات الإسعاف الأولي." },
              { text: "التعامل مع الـ Cardiac arrest", requirement: "فهم دور الـ Epinephrine (للمعلومات العامة)." }
            ], 
            resources: [
              { title: "Emergency Situations in Clinic", url: "https://www.physio-pedia.com/First_Aid" }
            ],
            tip: "كن مستعداً دائماً للأسوأ، لتقدم الأفضل." 
          },
          { 
            id: "24_4_5", 
            name: "بناء قرار سريري مبني على الأدوية", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "حالة دراسية: مريض يتناول مسكنات قوية ولا يشعر بالتحسن", requirement: "كيف تعدل برنامجك؟" },
              { text: "حالة دراسية: مريض رياضي يتناول منشطات (Doping)", requirement: "فهم المخاطر الصحية والقانونية." }
            ], 
            resources: [
              { title: "Pharmacology Case Studies", url: "https://www.youtube.com/results?search_query=pharmacology+case+studies+physiotherapy" }
            ],
            tip: "الأدوية قد تخفي الألم، لكنها لا تعالج السبب." 
          },
          { 
            id: "24_4_6", 
            name: "تطبيق عملي نهائي (Quiz)", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "اختبار التعرف على 20 دواء شائع وآثارهم الجانبية", requirement: "تحقيق نسبة نجاح 90%." },
              { text: "شرح أثر دواء معين على التمرين لزميل", requirement: "التدرب على التبسيط." }
            ], 
            resources: [
              { title: "Pharmacology Final Quiz", url: "https://www.youtube.com/results?search_query=pharmacology+quiz+for+physiotherapy+students" }
            ],
            tip: "أنت الآن تمتلك المعرفة الدوائية اللازمة لممارسة آمنة!" 
          },
          { 
            id: "24_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الأدوية", requirement: "التأكد من إتقان فهم المسكنات، الكورتيزون، وأدوية الأمراض المزمنة." },
              { text: "راحة", requirement: "استعد لمرحلة الإتقان (Mastery)!" }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن معالجاً طبيعياً متكاملاً!" 
          }
        ] 
      }
    ] 
  },
  // Phase 5: Mastery (25-30)
  { 
    id: 24, 
    name: "شهر 25 — الحالات المعقدة والتشخيص التفريقي (Complex Cases & Differential Diagnosis)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Advanced Clinical Reasoning", 
        days: [
          { 
            id: "25_1_1", 
            name: "التشخيص التفريقي (Differential Diagnosis)", 
            topic: "Mastery", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Pattern Recognition", requirement: "دراسة كيفية التعرف على الأنماط المرضية بسرعة ودقة." },
              { text: "استبعاد الـ Red Flags المتقدمة", requirement: "دراسة حالات السرطان والعدوى التي قد تظهر كألم مفاصل." }
            ], 
            resources: [
              { title: "Differential Diagnosis in PT", url: "https://www.physio-pedia.com/Differential_Diagnosis" }
            ],
            tip: "فكر خارج الصندوق، لكن ابقَ داخل العلم." 
          },
          { 
            id: "25_1_2", 
            name: "آلام الظهر المعقدة (Complex Low Back Pain)", 
            topic: "Mastery", 
            badge: "الأحد", 
            tasks: [
              { text: "التعامل مع الـ Failed Back Surgery Syndrome", requirement: "دراسة كيفية تأهيل المرضى الذين لم تنجح جراحاتهم." },
              { text: "فهم الـ Central Sensitization", requirement: "دراسة لماذا يستمر الألم بعد التئام الأنسجة." }
            ], 
            resources: [
              { title: "Complex Low Back Pain Management", url: "https://www.youtube.com/results?search_query=complex+low+back+pain+physiotherapy" }
            ],
            tip: "في الحالات المزمنة، عالج الجهاز العصبي وليس فقط الظهر." 
          },
          { 
            id: "25_1_3", 
            name: "إصابات الكتف المتداخلة", 
            topic: "Mastery", 
            badge: "الاثنين", 
            tasks: [
              { text: "التمييز بين الـ Cervical Radiculopathy والـ Shoulder Impingement", requirement: "استخدام اختبارات مثل Spurling's test." },
              { text: "التعامل مع الـ Frozen Shoulder في مرضى السكر", requirement: "فهم التحديات الخاصة لهذه الفئة." }
            ], 
            resources: [
              { title: "Shoulder Differential Diagnosis", url: "https://www.youtube.com/results?search_query=shoulder+vs+cervical+pain+differential+diagnosis" }
            ],
            tip: "الألم في الكتف قد يكون أصله في الرقبة." 
          },
          { 
            id: "25_1_4", 
            name: "آلام الحوض والورك المعقدة", 
            topic: "Mastery", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "التشخيص التفريقي للـ Hip Pain", requirement: "التمييز بين الـ FAI, Labral tears, and Osteoarthritis." },
              { text: "فهم الـ Pelvic Floor dysfunction", requirement: "دراسة علاقة عضلات الحوض بآلام الظهر والورك." }
            ], 
            resources: [
              { title: "Hip and Pelvic Pain Mastery", url: "https://www.youtube.com/results?search_query=complex+hip+pain+differential+diagnosis" }
            ],
            tip: "الحوض هو مركز التوازن في الجسم." 
          },
          { 
            id: "25_1_5", 
            name: "الاضطرابات العصبية العضلية النادرة", 
            topic: "Mastery", 
            badge: "الأربعاء", 
            tasks: [
              { text: "التعرف على الـ Thoracic Outlet Syndrome (TOS)", requirement: "دراسة الاختبارات السريرية والتشخيص التفريقي." },
              { text: "فهم الـ Complex Regional Pain Syndrome (CRPS)", requirement: "دراسة كيفية التعامل مع هذا الاضطراب المؤلم." }
            ], 
            resources: [
              { title: "TOS and CRPS Guide", url: "https://www.physio-pedia.com/Complex_Regional_Pain_Syndrome" }
            ],
            tip: "الحالات النادرة تحتاج معالجاً دقيق الملاحظة." 
          },
          { 
            id: "25_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تحليل حالة دراسية معقدة (Case Study)", requirement: "كتابة قائمة بالتشخيصات المحتملة (Differential list)." },
              { text: "تطبيق اختبارات الاستبعاد (Ruling out) لزميل", requirement: "التأكد من دقة التكنيك." }
            ], 
            resources: [
              { title: "Clinical Reasoning Practical", url: "https://www.youtube.com/results?search_query=clinical+reasoning+case+study+physiotherapy" }
            ],
            tip: "التشخيص الصحيح هو نصف العلاج." 
          },
          { 
            id: "25_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة مبادئ التشخيص التفريقي", requirement: "التأكد من القدرة على التفكير المنهجي." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "المعلم هو الذي يتعلم من كل حالة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Multi-Joint & Systemic Involvement", 
        days: [
          { 
            id: "25_2_1", 
            name: "الأمراض الروماتيزمية وتأثيرها", 
            topic: "Mastery", 
            badge: "السبت", 
            tasks: [
              { text: "التعامل مع الـ Ankylosing Spondylitis", requirement: "دراسة تمارين الحفاظ على مرونة العمود الفقري." },
              { text: "فهم الـ Fibromyalgia", requirement: "دراسة كيفية بناء برنامج تمرين تدريجي لمرضى الألم المزمن." }
            ], 
            resources: [
              { title: "Rheumatology for Physios", url: "https://www.physio-pedia.com/Rheumatology" }
            ],
            tip: "في الأمراض المناعية، الحركة هي الحياة." 
          },
          { 
            id: "25_2_2", 
            name: "إصابات الـ Hypermobility (EDS)", 
            topic: "Mastery", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Ehlers-Danlos Syndrome", requirement: "دراسة كيفية تقوية المفاصل غير المستقرة." },
              { text: "تطبيق الـ Beighton Score", requirement: "تقييم مدى مرونة المفاصل الزائدة." }
            ], 
            resources: [
              { title: "Hypermobility Management", url: "https://www.physio-pedia.com/Hypermobility_Syndrome" }
            ],
            tip: "المرونة الزائدة تحتاج ثباتاً عضلياً أقوى." 
          },
          { 
            id: "25_2_3", 
            name: "التعامل مع الـ Multi-trauma", 
            topic: "Mastery", 
            badge: "الاثنين", 
            tasks: [
              { text: "تأهيل مريض مصاب بكسور متعددة", requirement: "دراسة كيفية ترتيب الأولويات في العلاج." },
              { text: "فهم الـ Weight-bearing restrictions", requirement: "التنسيق مع الجراح حول الأحمال المسموحة." }
            ], 
            resources: [
              { title: "Multi-trauma Rehabilitation", url: "https://www.youtube.com/results?search_query=polytrauma+rehabilitation+physiotherapy" }
            ],
            tip: "ابدأ بالمفصل الأكثر تأثيراً على الوظيفة." 
          },
          { 
            id: "25_2_4", 
            name: "الصداع المرتبط بالرقبة (Cervicogenic Headache)", 
            topic: "Mastery", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "التمييز بين الـ Migraine والـ Cervicogenic headache", requirement: "دراسة الأعراض المميزة لكل نوع." },
              { text: "تطبيق الـ Manual therapy للفقرات العنقية العليا", requirement: "تحسين حركة C1-C2 لتقليل الصداع." }
            ], 
            resources: [
              { title: "Cervicogenic Headache Guide", url: "https://www.physio-pedia.com/Cervicogenic_Headache" }
            ],
            tip: "علاج الرقبة قد ينهي سنوات من الصداع المزمن." 
          },
          { 
            id: "25_2_5", 
            name: "الدوخة والاتزان (Vestibular Rehab)", 
            topic: "Mastery", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم الـ BPPV", requirement: "دراسة كيفية تشخيص وعلاج دوخة الوضعية الحميدة." },
              { text: "تطبيق الـ Epley Maneuver", requirement: "التدرب على مناورة إعادة الحبيبات في الأذن الداخلية." }
            ], 
            resources: [
              { title: "Vestibular Rehabilitation Basics", url: "https://www.physio-pedia.com/Vestibular_Rehabilitation" }
            ],
            tip: "الدوخة قد تكون مشكلة في الأذن، وليس في الرقبة." 
          },
          { 
            id: "25_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق الـ Beighton Score لزميل", requirement: "تقييم مرونة المفاصل." },
              { text: "مشاهدة فيديو لمناورة Epley", requirement: "فهم الخطوات والزوايا الصحيحة." }
            ], 
            resources: [
              { title: "Vestibular Assessment Practical", url: "https://www.youtube.com/results?search_query=vestibular+assessment+practical+physiotherapy" }
            ],
            tip: "الدقة في المناورات هي سر النجاح." 
          },
          { 
            id: "25_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الحالات الجهازية والدوخة", requirement: "التأكد من فهم كيفية التعامل معها." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "المعالج الشامل يرى المريض ككل." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Psychological & Social Factors (BPS Model)", 
        days: [
          { 
            id: "25_3_1", 
            name: "النموذج النفسي الاجتماعي (Biopsychosocial)", 
            topic: "Mastery", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ Yellow Flags", requirement: "دراسة العوامل النفسية التي تعيق الشفاء (مثل الخوف من الحركة)." },
              { text: "فهم الـ Blue and Black flags", requirement: "دراسة العوامل المهنية والاجتماعية." }
            ], 
            resources: [
              { title: "Biopsychosocial Model in PT", url: "https://www.physio-pedia.com/Biopsychosocial_Model" }
            ],
            tip: "عقل المريض يؤثر على سرعة التئام أنسجته." 
          },
          { 
            id: "25_3_2", 
            name: "الخوف من الحركة (Kinesiophobia)", 
            topic: "Mastery", 
            badge: "الأحد", 
            tasks: [
              { text: "استخدام مقياس الـ TSK (Tampa Scale for Kinesiophobia)", requirement: "تقييم مدى خوف المريض من الإصابة مجدداً." },
              { text: "تطبيق الـ Graded Exposure", requirement: "دراسة كيفية تعريض المريض للحركات المخيفة تدريجياً." }
            ], 
            resources: [
              { title: "Kinesiophobia Management", url: "https://www.youtube.com/results?search_query=kinesiophobia+in+physiotherapy+explained" }
            ],
            tip: "طمأنة المريض هي جزء أساسي من العلاج." 
          },
          { 
            id: "25_3_3", 
            name: "التواصل التحفيزي (Motivational Interviewing)", 
            topic: "Mastery", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم تقنيات الـ OARS", requirement: "دراسة الأسئلة المفتوحة والتوكيد والاستماع الانعكاسي والتلخيص." },
              { text: "تحفيز المريض على الالتزام بالتمارين المنزلية", requirement: "دراسة كيفية تغيير سلوك المريض." }
            ], 
            resources: [
              { title: "Motivational Interviewing for Physios", url: "https://www.youtube.com/results?search_query=motivational+interviewing+for+physiotherapists" }
            ],
            tip: "لا تأمر المريض، بل اجعله يختار الشفاء." 
          },
          { 
            id: "25_3_4", 
            name: "التعامل مع المريض الصعب", 
            topic: "Mastery", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "إدارة التوقعات غير الواقعية", requirement: "كيف تشرح للمريض أن الشفاء يحتاج وقتاً؟" },
              { text: "التعامل مع المريض غير الملتزم", requirement: "فهم الأسباب الخفية وراء عدم الالتزام." }
            ], 
            resources: [
              { title: "Dealing with Difficult Patients", url: "https://www.youtube.com/results?search_query=managing+difficult+patients+physiotherapy" }
            ],
            tip: "الصبر والتعاطف هما أقوى أدواتك." 
          },
          { 
            id: "25_3_5", 
            name: "التثقيف حول الألم (Pain Neuroscience Education)", 
            topic: "Mastery", 
            badge: "الأربعاء", 
            tasks: [
              { text: "شرح فسيولوجيا الألم للمريض", requirement: "استخدام استعارات (Metaphors) لتبسيط كيفية عمل الجهاز العصبي." },
              { text: "فهم الـ Neuroplasticity", requirement: "دراسة كيف يمكن للدماغ أن 'يتعلم' الألم و'ينساه'." }
            ], 
            resources: [
              { title: "Pain Neuroscience Education Guide", url: "https://www.physio-pedia.com/Pain_Neuroscience_Education_(PNE)" }
            ],
            tip: "فهم الألم يقلل من الخوف منه." 
          },
          { 
            id: "25_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تمثيل دور (Role play) مع زميل لمريض خائف من الحركة", requirement: "استخدام تقنيات التواصل التحفيزي." },
              { text: "شرح 'لماذا يستمر الألم' لزميل بأسلوب مبسط", requirement: "التدرب على التثقيف." }
            ], 
            resources: [
              { title: "Communication Skills Practical", url: "https://www.youtube.com/results?search_query=physiotherapy+communication+skills+practical" }
            ],
            tip: "كلماتك قد تكون أقوى من يديك." 
          },
          { 
            id: "25_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة العوامل النفسية والاجتماعية", requirement: "التأكد من القدرة على دمجها في خطة العلاج." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "المعالج النفسي-الحركي هو مستقبل المهنة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Complex Case Management & Final Integration", 
        days: [
          { 
            id: "25_4_1", 
            name: "إدارة الحالات المزمنة (Chronic Pain Management)", 
            topic: "Mastery", 
            badge: "السبت", 
            tasks: [
              { text: "تصميم برنامج طويل المدى", requirement: "التركيز على الوظيفة وجودة الحياة بدلاً من الألم فقط." },
              { text: "تطبيق الـ Pacing strategies", requirement: "تعليم المريض كيف يوزع مجهوده لتجنب الانتكاسات (Flare-ups)." }
            ], 
            resources: [
              { title: "Chronic Pain Management Guide", url: "https://www.physio-pedia.com/Chronic_Pain" }
            ],
            tip: "الهدف هو جعل المريض مديراً لحالته، وليس معتمداً عليك." 
          },
          { 
            id: "25_4_2", 
            name: "التعامل مع الـ Red Flags في العيادة", 
            topic: "Mastery", 
            badge: "الأحد", 
            tasks: [
              { text: "خطة الطوارئ عند اكتشاف Red Flag", requirement: "كيفية تحويل المريض للطبيب المختص بسرعة واحترافية." },
              { text: "التواصل مع الطوارئ", requirement: "ماذا تقول في تقرير التحويل؟" }
            ], 
            resources: [
              { title: "Red Flags Screening Masterclass", url: "https://www.youtube.com/results?search_query=red+flags+screening+physiotherapy+masterclass" }
            ],
            tip: "لا تتردد أبداً في التحويل إذا شككت في وجود خطر." 
          },
          { 
            id: "25_4_3", 
            name: "اتخاذ القرار السريري في الحالات الغامضة", 
            topic: "Mastery", 
            badge: "الاثنين", 
            tasks: [
              { text: "استخدام الـ Clinical Prediction Rules (CPRs)", requirement: "دراسة القواعد التي تساعد في التنبؤ باستجابة المريض لعلاج معين." },
              { text: "فهم الـ Heuristics and Biases", requirement: "دراسة الأخطاء الشائعة في التفكير السريري وكيفية تجنبها." }
            ], 
            resources: [
              { title: "Clinical Decision Making Guide", url: "https://www.youtube.com/results?search_query=clinical+decision+making+physiotherapy" }
            ],
            tip: "كن واعياً بطريقة تفكيرك لتتجنب الأخطاء." 
          },
          { 
            id: "25_4_4", 
            name: "العمل ضمن فريق طبي (Multidisciplinary Team)", 
            topic: "Mastery", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "دور المعالج في الفريق الطبي", requirement: "التنسيق مع الطبيب، الممرض، والأخصائي النفسي." },
              { text: "كتابة تقارير التقدم (Progress reports) باحترافية", requirement: "استخدام لغة مفهومة لجميع التخصصات." }
            ], 
            resources: [
              { title: "Multidisciplinary Teamwork Guide", url: "https://www.youtube.com/results?search_query=multidisciplinary+team+in+rehabilitation" }
            ],
            tip: "الفريق القوي يضمن أفضل النتائج للمريض." 
          },
          { 
            id: "25_4_5", 
            name: "بناء بروتوكول علاج لحالة معقدة", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "اختيار حالة معقدة (مثلاً: مريض سكر، مدخن، خضع لـ 3 جراحات ظهر)", requirement: "كتابة خطة علاجية شاملة." },
              { text: "تحديد الأهداف الذكية (SMART Goals)", requirement: "التأكد من أن الأهداف قابلة للقياس والتحقيق." }
            ], 
            resources: [
              { title: "Complex Case Management Guide", url: "https://www.youtube.com/results?search_query=how+to+manage+complex+physiotherapy+cases" }
            ],
            tip: "الخطة الجيدة هي التي تتكيف مع تغيرات حالة المريض." 
          },
          { 
            id: "25_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "عرض حالة دراسية معقدة أمام زملائك", requirement: "الدفاع عن تشخيصك وخطتك العلاجية." },
              { text: "تلقي الملاحظات وتعديل الخطة", requirement: "التدرب على التواضع العلمي والتعلم المستمر." }
            ], 
            resources: [
              { title: "Final Case Presentation Practical", url: "https://www.youtube.com/results?search_query=physiotherapy+case+presentation+tips" }
            ],
            tip: "أنت الآن تمتلك العقلية التحليلية لخبير!" 
          },
          { 
            id: "25_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الحالات المعقدة", requirement: "التأكد من إتقان التشخيص التفريقي والنمو النفسي الاجتماعي." },
              { text: "راحة", requirement: "استعد لشهر البحث العلمي." }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن قادراً على حل أصعب الألغاز الطبية!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 25, 
    name: "شهر 26 — البحث العلمي والممارسة المبنية على الدليل (Scientific Research & EBP)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Introduction to EBP", 
        days: [
          { 
            id: "26_1_1", 
            name: "ما هي الممارسة المبنية على الدليل (EBP)؟", 
            topic: "Research", 
            badge: "السبت", 
            tasks: [
              { text: "فهم أركان الـ EBP الثلاثة", requirement: "دراسة التكامل بين الدليل العلمي، خبرة المعالج، وقيم المريض." },
              { text: "دراسة مستويات الدليل (Hierarchy of Evidence)", requirement: "فهم لماذا تعتبر الـ Systematic Reviews هي الأقوى." }
            ], 
            resources: [
              { title: "Introduction to EBP in Physiotherapy", url: "https://www.physio-pedia.com/Evidence_Based_Practice_(EBP)" }
            ],
            tip: "الدليل العلمي يوجهك، لكن خبرتك هي التي تطبقه." 
          },
          { 
            id: "26_1_2", 
            name: "صياغة السؤال البحثي (PICO)", 
            topic: "Research", 
            badge: "الأحد", 
            tasks: [
              { text: "تعلم نموذج الـ PICO", requirement: "فهم كيفية تحديد الـ Patient, Intervention, Comparison, and Outcome." },
              { text: "تحويل مشكلة سريرية إلى سؤال بحثي", requirement: "التدرب على صياغة أسئلة دقيقة." }
            ], 
            resources: [
              { title: "PICO Question Guide", url: "https://www.youtube.com/results?search_query=pico+question+physiotherapy+explained" }
            ],
            tip: "السؤال الصحيح هو بداية الوصول للإجابة الصحيحة." 
          },
          { 
            id: "26_1_3", 
            name: "البحث في قواعد البيانات (Searching)", 
            topic: "Research", 
            badge: "الاثنين", 
            tasks: [
              { text: "استخدام PubMed باحترافية", requirement: "تعلم الـ MeSH terms والـ Boolean operators (AND, OR, NOT)." },
              { text: "البحث في قاعدة بيانات PEDro", requirement: "فهم كيفية الوصول للأبحاث الخاصة بالعلاج الطبيعي فقط." }
            ], 
            resources: [
              { title: "PubMed Search Tutorial", url: "https://www.youtube.com/results?search_query=pubmed+search+tutorial+for+students" }
            ],
            tip: "قواعد البيانات هي كنز المعلومات، تعلم كيف تفتحه." 
          },
          { 
            id: "26_1_4", 
            name: "أنواع الدراسات البحثية", 
            topic: "Research", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ Randomized Controlled Trials (RCTs)", requirement: "دراسة المعيار الذهبي لاختبار العلاجات." },
              { text: "فهم الـ Systematic Reviews & Meta-analysis", requirement: "دراسة كيفية تلخيص نتائج أبحاث متعددة." }
            ], 
            resources: [
              { title: "Types of Research Studies", url: "https://www.physio-pedia.com/Hierarchy_of_Evidence" }
            ],
            tip: "كل نوع دراسة له دور في بناء المعرفة." 
          },
          { 
            id: "26_1_5", 
            name: "قراءة الأبحاث النوعية (Qualitative Research)", 
            topic: "Research", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم أهمية الأبحاث النوعية", requirement: "دراسة تجارب المرضى ومشاعرهم تجاه العلاج." },
              { text: "الفرق بين الكمي والنوعي", requirement: "فهم متى نستخدم الأرقام ومتى نستخدم الكلمات." }
            ], 
            resources: [
              { title: "Qualitative Research in Health", url: "https://www.youtube.com/results?search_query=qualitative+research+in+physiotherapy" }
            ],
            tip: "الأرقام تخبرك 'ماذا'، والكلمات تخبرك 'لماذا'." 
          },
          { 
            id: "26_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "صياغة سؤال PICO لحالة مريض ركبة", requirement: "تحديد جميع العناصر الأربعة." },
              { text: "إجراء بحث في PubMed واستخراج 3 أبحاث ذات صلة", requirement: "التأكد من حداثة الأبحاث (آخر 5 سنوات)." }
            ], 
            resources: [
              { title: "EBP Practical Session", url: "https://www.youtube.com/results?search_query=ebp+practical+physiotherapy" }
            ],
            tip: "البحث العلمي هو مهارة تتقنها بالممارسة." 
          },
          { 
            id: "26_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أساسيات الـ EBP والبحث", requirement: "التأكد من فهم كيفية الوصول للمعلومة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "العلم هو نور المعالج." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Critical Appraisal of Research", 
        days: [
          { 
            id: "26_2_1", 
            name: "النقد العلمي للأبحاث (Critical Appraisal)", 
            topic: "Research", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ CASP Checklists", requirement: "دراسة كيفية تقييم جودة البحث العلمي بشكل منهجي." },
              { text: "التعرف على الـ Bias (الانحياز)", requirement: "دراسة أنواع الانحياز في اختيار العينات أو تحليل النتائج." }
            ], 
            resources: [
              { title: "Critical Appraisal Tools", url: "https://casp-uk.net/casp-tools-checklists/" }
            ],
            tip: "ليس كل ما ينشر هو حقيقة مطلقة، تعلم كيف تنقد." 
          },
          { 
            id: "26_2_2", 
            name: "فهم الإحصاء الحيوي (Biostatistics) - الجزء 1", 
            topic: "Research", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ P-value", requirement: "دراسة متى تكون النتائج ذات دلالة إحصائية." },
              { text: "فهم الـ Confidence Intervals (CI)", requirement: "دراسة مدى دقة النتائج وتعميمها." }
            ], 
            resources: [
              { title: "Statistics for Clinicians", url: "https://www.youtube.com/results?search_query=statistics+for+physiotherapists+explained" }
            ],
            tip: "الإحصاء هو اللغة التي يتحدث بها العلم." 
          },
          { 
            id: "26_2_3", 
            name: "فهم الإحصاء الحيوي - الجزء 2", 
            topic: "Research", 
            badge: "الاثنين", 
            tasks: [
              { text: "فهم الـ Effect Size", requirement: "دراسة مدى قوة تأثير العلاج في الواقع." },
              { text: "فهم الـ NNT (Number Needed to Treat)", requirement: "دراسة كم مريضاً نحتاج لعلاجه لنحصل على نتيجة إيجابية واحدة." }
            ], 
            resources: [
              { title: "Effect Size and NNT Explained", url: "https://www.youtube.com/results?search_query=effect+size+and+nnt+explained" }
            ],
            tip: "الدلالة الإحصائية لا تعني دائماً أهمية سريرية." 
          },
          { 
            id: "26_2_4", 
            name: "نقد الـ Systematic Reviews", 
            topic: "Research", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ PRISMA guidelines", requirement: "دراسة المعايير التي يجب أن تتبعها المراجعات المنهجية." },
              { text: "قراءة الـ Forest Plot", requirement: "تعلم كيفية تفسير الرسوم البيانية في الـ Meta-analysis." }
            ], 
            resources: [
              { title: "How to read a Forest Plot", url: "https://www.youtube.com/results?search_query=how+to+read+a+forest+plot+explained" }
            ],
            tip: "الـ Forest Plot يختصر لك نتائج آلاف المرضى في رسمة واحدة." 
          },
          { 
            id: "26_2_5", 
            name: "تقييم الـ Clinical Practice Guidelines (CPGs)", 
            topic: "Research", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم كيفية بناء الـ CPGs", requirement: "دراسة التوصيات العالمية لعلاج حالات معينة (مثل آلام الظهر)." },
              { text: "استخدام أداة AGREE II", requirement: "تقييم جودة الدلائل الإرشادية." }
            ], 
            resources: [
              { title: "Clinical Practice Guidelines Guide", url: "https://www.physio-pedia.com/Clinical_Guidelines" }
            ],
            tip: "الدلائل الإرشادية هي بوصلتك في العيادة." 
          },
          { 
            id: "26_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "نقد بحث RCT باستخدام CASP checklist", requirement: "تحديد نقاط القوة والضعف في البحث." },
              { text: "تفسير Forest plot من مراجعة منهجية حديثة", requirement: "تحديد هل العلاج فعال أم لا." }
            ], 
            resources: [
              { title: "Critical Appraisal Practical", url: "https://www.youtube.com/results?search_query=critical+appraisal+practical+session" }
            ],
            tip: "النقد البناء هو أساس التطور العلمي." 
          },
          { 
            id: "26_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أدوات النقد والإحصاء", requirement: "التأكد من القدرة على تقييم جودة الأبحاث." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "العقل الناقد هو الذي لا يخدع بسهولة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Applying Evidence in Clinic", 
        days: [
          { 
            id: "26_3_1", 
            name: "تطبيق الدليل على المريض الفردي", 
            topic: "Research", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الـ External Validity", requirement: "دراسة هل نتائج البحث تنطبق على مريضي في العيادة؟" },
              { text: "موازنة الدليل مع رغبات المريض", requirement: "كيف تتصرف إذا رفض المريض علاجاً أثبت العلم فعاليته؟" }
            ], 
            resources: [
              { title: "Applying Evidence to Patients", url: "https://www.youtube.com/results?search_query=applying+ebp+in+clinical+practice" }
            ],
            tip: "المريض هو شريكك في القرار العلاجي." 
          },
          { 
            id: "26_3_2", 
            name: "قياس النتائج (Outcome Measures)", 
            topic: "Research", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ PROM (Patient Reported Outcome Measures)", requirement: "دراسة استبيانات مثل الـ DASH والـ OSWESTRY." },
              { text: "فهم الـ MCID (Minimal Clinically Important Difference)", requirement: "دراسة أقل تحسن يشعر به المريض فعلياً." }
            ], 
            resources: [
              { title: "Outcome Measures in PT", url: "https://www.physio-pedia.com/Outcome_Measures" }
            ],
            tip: "ما لا يمكن قياسه، لا يمكن تحسينه." 
          },
          { 
            id: "26_3_3", 
            name: "تحديث معلوماتك باستمرار", 
            topic: "Research", 
            badge: "الاثنين", 
            tasks: [
              { text: "الاشتراك في الـ Journal Alerts", requirement: "تعلم كيفية استقبال أحدث الأبحاث على إيميلك." },
              { text: "استخدام وسائل التواصل الاجتماعي للعلم", requirement: "متابعة الباحثين الموثوقين على Twitter و ResearchGate." }
            ], 
            resources: [
              { title: "Staying Up to Date in PT", url: "https://www.youtube.com/results?search_query=how+to+stay+up+to+date+with+physiotherapy+research" }
            ],
            tip: "العلم يتطور يومياً، لا تتوقف عن القراءة." 
          },
          { 
            id: "26_3_4", 
            name: "كتابة التقارير العلمية", 
            topic: "Research", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تعلم الـ Academic Writing", requirement: "دراسة كيفية كتابة حالة دراسية (Case Report) للنشر." },
              { text: "فهم الـ Ethics in Research", requirement: "دراسة أهمية الموافقة المستنيرة (Informed Consent)." }
            ], 
            resources: [
              { title: "Writing a Case Report", url: "https://www.physio-pedia.com/Writing_a_Case_Report" }
            ],
            tip: "شارك علمك مع العالم، فربما تنقذ حالة أخرى." 
          },
          { 
            id: "26_3_5", 
            name: "عرض الأبحاث للمرضى والزملاء", 
            topic: "Research", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تبسيط العلم للمريض (Science Communication)", requirement: "كيف تشرح نتائج بحث معقد لمريض غير متخصص؟" },
              { text: "تقديم الـ Journal Club", requirement: "دراسة كيفية عرض ونقاش بحث مع زملائك." }
            ], 
            resources: [
              { title: "Science Communication Tips", url: "https://www.youtube.com/results?search_query=science+communication+for+health+professionals" }
            ],
            tip: "العلم الذي لا يفهمه المريض لا يفيده." 
          },
          { 
            id: "26_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق استبيان Oswestry لمريض ظهر", requirement: "حساب النتيجة وتفسيرها." },
              { text: "كتابة ملخص لبحث حديث بأسلوب 'بوست' تعليمي", requirement: "التدرب على التبسيط." }
            ], 
            resources: [
              { title: "Outcome Measures Practical", url: "https://www.youtube.com/results?search_query=how+to+use+outcome+measures+physiotherapy" }
            ],
            tip: "النتائج الملموسة تزيد من ثقة المريض في علاجك." 
          },
          { 
            id: "26_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تطبيق الدليل وقياس النتائج", requirement: "التأكد من القدرة على دمج العلم في الممارسة اليومية." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الممارسة المبنية على الدليل هي ممارسة أخلاقية." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Designing Your Own Research", 
        days: [
          { 
            id: "26_4_1", 
            name: "أساسيات تصميم الدراسة البحثية", 
            topic: "Research", 
            badge: "السبت", 
            tasks: [
              { text: "اختيار منهجية البحث (Methodology)", requirement: "فهم الفرق بين الدراسات الوصفية والتجريبية." },
              { text: "تحديد العينة (Sampling)", requirement: "دراسة كيفية اختيار المشاركين في البحث." }
            ], 
            resources: [
              { title: "Research Methodology Basics", url: "https://www.youtube.com/results?search_query=research+methodology+for+health+students" }
            ],
            tip: "التصميم الجيد يوفر عليك الكثير من العناء في التحليل." 
          },
          { 
            id: "26_4_2", 
            name: "جمع وتحليل البيانات", 
            topic: "Research", 
            badge: "الأحد", 
            tasks: [
              { text: "أدوات جمع البيانات", requirement: "دراسة استخدام أجهزة القياس والاستبيانات." },
              { text: "مقدمة في برنامج SPSS أو Excel للتحليل", requirement: "فهم كيفية إدخال البيانات وعمل إحصاء وصفي." }
            ], 
            resources: [
              { title: "Data Analysis for Beginners", url: "https://www.youtube.com/results?search_query=data+analysis+in+health+research+tutorial" }
            ],
            tip: "نظافة البيانات هي سر دقة النتائج." 
          },
          { 
            id: "26_4_3", 
            name: "كتابة المقترح البحثي (Research Proposal)", 
            topic: "Research", 
            badge: "الاثنين", 
            tasks: [
              { text: "عناصر المقترح البحثي", requirement: "دراسة المقدمة، المشكلة، الأهداف، والمنهجية." },
              { text: "كتابة مراجعة للأدبيات (Literature Review)", requirement: "التدرب على تلخيص ما وصل إليه العلم في نقطة معينة." }
            ], 
            resources: [
              { title: "How to write a Research Proposal", url: "https://www.youtube.com/results?search_query=research+proposal+writing+tips" }
            ],
            tip: "المقترح هو وعدك العلمي للعالم." 
          },
          { 
            id: "26_4_4", 
            name: "أخلاقيات البحث العلمي (Ethics)", 
            topic: "Research", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم الـ IRB (Institutional Review Board)", requirement: "دراسة لماذا نحتاج موافقة أخلاقية قبل البدء." },
              { text: "حماية خصوصية المشاركين", requirement: "دراسة كيفية التعامل مع البيانات الشخصية." }
            ], 
            resources: [
              { title: "Research Ethics Guide", url: "https://www.youtube.com/results?search_query=ethics+in+medical+research+explained" }
            ],
            tip: "الأخلاق تسبق العلم دائماً." 
          },
          { 
            id: "26_4_5", 
            name: "النشر العلمي (Publication)", 
            topic: "Research", 
            badge: "الأربعاء", 
            tasks: [
              { text: "اختيار المجلة العلمية المناسبة", requirement: "فهم الـ Impact Factor والـ Open Access." },
              { text: "فهم عملية الـ Peer Review", requirement: "دراسة كيف يتم تقييم بحثك من قبل خبراء آخرين." }
            ], 
            resources: [
              { title: "Scientific Publishing Process", url: "https://www.youtube.com/results?search_query=how+to+publish+a+scientific+paper" }
            ],
            tip: "النشر هو تتويج لمجهودك البحثي." 
          },
          { 
            id: "26_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "كتابة مسودة لمقترح بحثي بسيط", requirement: "اختيار فكرة تهمك في العلاج الطبيعي." },
              { text: "عرض الفكرة أمام زملائك", requirement: "تلقي النقد العلمي." }
            ], 
            resources: [
              { title: "Research Proposal Practical", url: "https://www.youtube.com/results?search_query=research+proposal+presentation+tips" }
            ],
            tip: "أنت الآن تمتلك أدوات الباحث المحترف!" 
          },
          { 
            id: "26_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر البحث العلمي", requirement: "التأكد من إتقان مهارات الـ EBP والبحث والنقد." },
              { text: "راحة", requirement: "استعد لشهر اللاصق الطبي." }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن معالجاً باحثاً، وهذا هو قمة الاحتراف!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 26, 
    name: "شهر 27 — اللاصق الطبي (Kinesio Taping & Rigid Taping)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Foundations of Taping", 
        days: [
          { 
            id: "27_1_1", 
            name: "تاريخ وأنواع اللاصق الطبي", 
            topic: "Advanced", 
            badge: "السبت", 
            tasks: [
              { text: "فهم الفرق بين الـ Kinesio Tape والـ Rigid Tape", requirement: "دراسة خصائص كل نوع (المرونة، القوة، المادة اللاصقة)." },
              { text: "تاريخ الـ Kinesio Taping", requirement: "فهم فلسفة د. كينزو كاسي في ابتكار اللاصق." }
            ], 
            resources: [
              { title: "Introduction to Kinesio Taping", url: "https://www.physio-pedia.com/Kinesio_Taping" }
            ],
            tip: "اللاصق الطبي هو أداة مساعدة، وليس علاجاً سحرياً." 
          },
          { 
            id: "27_1_2", 
            name: "فسيولوجيا اللاصق الطبي", 
            topic: "Advanced", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم تأثير الـ Lifting effect", requirement: "دراسة كيف يرفع اللاصق الجلد لتقليل الضغط على مستقبلات الألم." },
              { text: "تأثير اللاصق على الدورة الدموية والليمفاوية", requirement: "فهم دور الـ Convolutions في تحسين التدفق." }
            ], 
            resources: [
              { title: "Physiology of Taping", url: "https://www.youtube.com/results?search_query=how+kinesio+tape+works+physiology" }
            ],
            tip: "اللاصق يعمل من خلال الجلد ليؤثر على ما تحته." 
          },
          { 
            id: "27_1_3", 
            name: "موانع الاستخدام واحتياطات الأمان", 
            topic: "Advanced", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة الـ Contraindications", requirement: "فهم متى يمنع وضع اللاصق (الجروح، الحساسية، السرطان)." },
              { text: "اختبار حساسية الجلد", requirement: "تعلم كيفية وضع قطعة صغيرة للاختبار قبل التطبيق الكامل." }
            ], 
            resources: [
              { title: "Taping Precautions and Safety", url: "https://www.youtube.com/results?search_query=kinesio+tape+contraindications" }
            ],
            tip: "سلامة الجلد أهم من وضع اللاصق." 
          },
          { 
            id: "27_1_4", 
            name: "أساسيات القص والتحضير", 
            topic: "Advanced", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تعلم أنواع القصات (I, Y, X, Fan, Web)", requirement: "فهم متى نستخدم كل قصة." },
              { text: "تحضير الجلد قبل اللصق", requirement: "أهمية التنظيف وإزالة الشعر لضمان الثبات." }
            ], 
            resources: [
              { title: "Kinesio Tape Cutting Techniques", url: "https://www.youtube.com/results?search_query=kinesio+tape+cutting+shapes" }
            ],
            tip: "القصة الصحيحة تضمن توزيعاً صحيحاً للشد." 
          },
          { 
            id: "27_1_5", 
            name: "مبادئ الشد (Tension Principles)", 
            topic: "Advanced", 
            badge: "الأربعاء", 
            tasks: [
              { text: "فهم درجات الشد (0% to 100%)", requirement: "دراسة متى نستخدم شد خفيف للليمفاوية وشد قوي للثبات." },
              { text: "أهمية الـ Anchors (البداية والنهاية)", requirement: "فهم لماذا يجب وضع البداية والنهاية بدون أي شد." }
            ], 
            resources: [
              { title: "Taping Tension Guide", url: "https://www.youtube.com/results?search_query=kinesio+tape+tension+levels+explained" }
            ],
            tip: "الشد الزائد عند الأطراف يسبب تهيج الجلد." 
          },
          { 
            id: "27_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "التدرب على قص الأشكال المختلفة (I, Y, Fan)", requirement: "التأكد من تدوير الزوايا (Rounding corners) لمنع التقشر." },
              { text: "تطبيق لاصق بسيط على الساعد بـ 25% شد", requirement: "التأكد من جودة الالتصاق." }
            ], 
            resources: [
              { title: "Taping Basics Practical", url: "https://www.youtube.com/results?search_query=kinesio+taping+basics+practical" }
            ],
            tip: "تدوير الزوايا يجعل اللاصق يدوم لفترة أطول." 
          },
          { 
            id: "27_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أساسيات ومبادئ اللصق", requirement: "التأكد من فهم كيفية التعامل مع المادة والجلد." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الإتقان يبدأ من الأساسيات." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Upper Body Taping", 
        days: [
          { 
            id: "27_2_1", 
            name: "لاصق الرقبة والكتف", 
            topic: "Advanced", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق لاصق لعضلة الـ Trapezius", requirement: "دراسة كيفية تقليل الشد العضلي في الرقبة." },
              { text: "لاصق ثبات الكتف (Shoulder Stability)", requirement: "دعم مفصل الكتف في حالات الـ Subluxation." }
            ], 
            resources: [
              { title: "Shoulder Taping Techniques", url: "https://www.youtube.com/results?search_query=kinesio+tape+for+shoulder+pain" }
            ],
            tip: "الوضع التشريحي أثناء اللصق يحدد النتيجة." 
          },
          { 
            id: "27_2_2", 
            name: "لاصق الـ Rotator Cuff والـ Impingement", 
            topic: "Advanced", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق لاصق لعضلة الـ Supraspinatus", requirement: "تقليل الضغط داخل المفصل." },
              { text: "لاصق تصحيح وضعية الـ Scapula", requirement: "تحسين ميكانيكا حركة لوح الكتف." }
            ], 
            resources: [
              { title: "Rotator Cuff Taping", url: "https://www.youtube.com/results?search_query=kinesio+tape+for+rotator+cuff" }
            ],
            tip: "اللاصق يذكر الدماغ بالوضعية الصحيحة (Proprioception)." 
          },
          { 
            id: "27_2_3", 
            name: "لاصق الكوع (Tennis & Golfer's Elbow)", 
            topic: "Advanced", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق لاصق الـ Lateral Epicondylitis", requirement: "تقليل الحمل على أوتار الساعد." },
              { text: "استخدام الـ Space correction technique", requirement: "وضع اللاصق فوق نقطة الألم مباشرة لتقليل الضغط." }
            ], 
            resources: [
              { title: "Elbow Taping Techniques", url: "https://www.youtube.com/results?search_query=kinesio+tape+for+tennis+elbow" }
            ],
            tip: "اللاصق يوفر راحة فورية للأوتار الملتهبة." 
          },
          { 
            id: "27_2_4", 
            name: "لاصق الرسغ واليد (Carpal Tunnel)", 
            topic: "Advanced", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق لاصق لدعم الرسغ", requirement: "تقليل الضغط على العصب الأوسط." },
              { text: "لاصق إصابات الأصابع (De Quervain's)", requirement: "تثبيت أوتار الإبهام." }
            ], 
            resources: [
              { title: "Wrist and Hand Taping", url: "https://www.youtube.com/results?search_query=kinesio+tape+for+carpal+tunnel" }
            ],
            tip: "في اليد، استخدم قطعاً صغيرة ودقيقة." 
          },
          { 
            id: "27_2_5", 
            name: "لاصق الظهر والفقرات الصدرية", 
            topic: "Advanced", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تطبيق لاصق لتحسين القوام (Postural correction)", requirement: "تذكير المريض بفرد الظهر." },
              { text: "لاصق لعضلات الـ Paraspinal", requirement: "تقليل الألم العضلي في الظهر." }
            ], 
            resources: [
              { title: "Back Taping Techniques", url: "https://www.youtube.com/results?search_query=kinesio+tape+for+posture+correction" }
            ],
            tip: "اللاصق هو 'مدرب' صامت للقوام." 
          },
          { 
            id: "27_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق لاصق الكتف لزميل", requirement: "التأكد من عدم وجود كرمشة في اللاصق." },
              { text: "تطبيق لاصق الكوع وتجربة الحركة", requirement: "التأكد من أن اللاصق لا يعيق الحركة الوظيفية." }
            ], 
            resources: [
              { title: "Upper Body Taping Practical", url: "https://www.youtube.com/results?search_query=upper+body+kinesio+taping+practical" }
            ],
            tip: "اللاصق يجب أن يشعر المريض بالراحة، لا بالتقييد." 
          },
          { 
            id: "27_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تطبيقات الطرف العلوي", requirement: "التأكد من إتقان تكنيكات الكتف والكوع والرسغ." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "اليد الماهرة هي التي تضع اللاصق بدقة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Lower Body Taping", 
        days: [
          { 
            id: "27_3_1", 
            name: "لاصق الظهر والفقرات القطنية", 
            topic: "Advanced", 
            badge: "السبت", 
            tasks: [
              { text: "تطبيق لاصق الـ Low Back Pain", requirement: "استخدام الـ H-shape أو الـ Star shape لتقليل الألم." },
              { text: "لاصق الـ Sacroiliac Joint (SIJ)", requirement: "توفير ثبات لمنطقة الحوض." }
            ], 
            resources: [
              { title: "Low Back Taping Techniques", url: "https://www.youtube.com/results?search_query=kinesio+tape+for+low+back+pain" }
            ],
            tip: "الشد في الظهر يحتاج مساحة كبيرة من اللاصق." 
          },
          { 
            id: "27_3_2", 
            name: "لاصق الركبة (Patellofemoral)", 
            topic: "Advanced", 
            badge: "الأحد", 
            tasks: [
              { text: "تطبيق لاصق الـ Patellar Tracking", requirement: "تعديل مسار الصابونة أثناء الحركة." },
              { text: "لاصق الـ Knee Stability (Collateral ligaments)", requirement: "دعم الأربطة الجانبية للركبة." }
            ], 
            resources: [
              { title: "Knee Taping Techniques", url: "https://www.youtube.com/results?search_query=kinesio+tape+for+knee+pain" }
            ],
            tip: "الركبة مفصل حركي جداً، تأكد من ثبات أطراف اللاصق." 
          },
          { 
            id: "27_3_3", 
            name: "لاصق الساق (Shin Splints & Calf)", 
            topic: "Advanced", 
            badge: "الاثنين", 
            tasks: [
              { text: "تطبيق لاصق الـ Shin Splints", requirement: "تقليل الحمل على عظمة الساق." },
              { text: "لاصق تمزق عضلة السمانة (Calf strain)", requirement: "دعم الألياف العضلية المصابة." }
            ], 
            resources: [
              { title: "Shin Splints Taping", url: "https://www.youtube.com/results?search_query=kinesio+tape+for+shin+splints" }
            ],
            tip: "اللاصق يقلل من الاهتزازات العضلية المؤلمة." 
          },
          { 
            id: "27_3_4", 
            name: "لاصق الكاحل والقدم (Ankle Sprain)", 
            topic: "Advanced", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تطبيق لاصق التواء الكاحل", requirement: "توفير ثبات ميكانيكي وحسي للمفصل." },
              { text: "لاصق الـ Plantar Fasciitis", requirement: "دعم قوس القدم وتقليل ألم الكعب." }
            ], 
            resources: [
              { title: "Ankle and Foot Taping", url: "https://www.youtube.com/results?search_query=kinesio+tape+for+ankle+sprain" }
            ],
            tip: "في الكاحل، قد نحتاج لدمج الـ Rigid tape مع الـ Kinesio tape." 
          },
          { 
            id: "27_3_5", 
            name: "لاصق الـ Lymphatic Drainage", 
            topic: "Advanced", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تطبيق الـ Fan cut للتورم", requirement: "دراسة كيفية توجيه السوائل نحو الغدد الليمفاوية." },
              { text: "لاصق الكدمات (Bruising)", requirement: "تسريع امتصاص التجمعات الدموية." }
            ], 
            resources: [
              { title: "Lymphatic Taping Guide", url: "https://www.youtube.com/results?search_query=kinesio+tape+for+swelling+and+edema" }
            ],
            tip: "الشد الصفر (0% tension) هو السر في التصريف الليمفاوي." 
          },
          { 
            id: "27_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق لاصق الركبة لزميل وتجربة الـ Squat", requirement: "ملاحظة الفرق في الشعور بالثبات." },
              { text: "تطبيق لاصق تورم الكاحل (Fan cut)", requirement: "التأكد من تداخل الشرائح بشكل صحيح." }
            ], 
            resources: [
              { title: "Lower Body Taping Practical", url: "https://www.youtube.com/results?search_query=lower+body+kinesio+taping+practical" }
            ],
            tip: "النتائج تظهر بوضوح في تقليل التورم خلال أيام." 
          },
          { 
            id: "27_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تطبيقات الطرف السفلي", requirement: "التأكد من إتقان تكنيكات الظهر والركبة والكاحل." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "القدم هي أساس الحركة، فادعمها جيداً." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Rigid Taping & Clinical Integration", 
        days: [
          { 
            id: "27_4_1", 
            name: "أساسيات الـ Rigid Taping (Athletic Tape)", 
            topic: "Advanced", 
            badge: "السبت", 
            tasks: [
              { text: "فهم دور الـ Rigid tape في التثبيت", requirement: "دراسة متى نحتاج لمنع الحركة تماماً (مثل بعد الكسور أو الالتواءات الشديدة)." },
              { text: "تعلم الـ Anchors, Stirrups, and Figure-8", requirement: "أساسيات تثبيت الكاحل باللاصق غير المرن." }
            ], 
            resources: [
              { title: "Rigid Taping Basics", url: "https://www.youtube.com/results?search_query=rigid+taping+techniques+physiotherapy" }
            ],
            tip: "الـ Rigid tape هو 'جبيرة' لاصقة." 
          },
          { 
            id: "27_4_2", 
            name: "لاصق الـ McConnell (للصابونة)", 
            topic: "Advanced", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم مبدأ McConnell taping", requirement: "استخدام اللاصق القوي لتصحيح وضع الصابونة بشكل ميكانيكي." },
              { text: "تطبيق الـ Underwrap", requirement: "أهمية حماية الجلد قبل وضع اللاصق القوي." }
            ], 
            resources: [
              { title: "McConnell Taping Guide", url: "https://www.youtube.com/results?search_query=mcconnell+taping+for+patellofemoral+pain" }
            ],
            tip: "هذا التكنيك فعال جداً في تقليل ألم الركبة أثناء صعود السلم." 
          },
          { 
            id: "27_4_3", 
            name: "لاصق الـ Mulligan (MWM Taping)", 
            topic: "Advanced", 
            badge: "الاثنين", 
            tasks: [
              { text: "دمج اللاصق مع الـ Mulligan concept", requirement: "الحفاظ على الـ Positional fault correction باللاصق." },
              { text: "تطبيق لاصق الكاحل (Mulligan style)", requirement: "الحفاظ على الـ Posterior glide للـ Talus." }
            ], 
            resources: [
              { title: "Mulligan Taping Techniques", url: "https://www.youtube.com/results?search_query=mulligan+taping+techniques" }
            ],
            tip: "اللاصق يثبت ما حققته بيدك في الجلسة." 
          },
          { 
            id: "27_4_4", 
            name: "إزالة اللاصق والعناية بالجلد", 
            topic: "Advanced", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "الطريقة الصحيحة لإزالة اللاصق", requirement: "تعلم كيفية نزعه بدون إيذاء الجلد (استخدام الزيوت)." },
              { text: "التعامل مع تهيج الجلد", requirement: "ماذا تفعل إذا حدث احمرار أو حكة للمريض؟" }
            ], 
            resources: [
              { title: "Safe Taping Removal", url: "https://www.youtube.com/results?search_query=how+to+remove+kinesio+tape+safely" }
            ],
            tip: "الإزالة الخاطئة قد تسبب جروحاً مجهرية في الجلد." 
          },
          { 
            id: "27_4_5", 
            name: "دمج اللاصق في خطة العلاج الشاملة", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "متى تضع اللاصق في الجلسة؟", requirement: "فهم أن اللاصق يوضع في نهاية الجلسة بعد التمارين والوسائل الأخرى." },
              { text: "تعليم المريض كيفية العناية باللاصق في البيت", requirement: "نصائح حول الاستحمام والنشاط." }
            ], 
            resources: [
              { title: "Clinical Integration of Taping", url: "https://www.youtube.com/results?search_query=integrating+taping+into+physiotherapy+treatment" }
            ],
            tip: "اللاصق يطيل أثر جلستك حتى الموعد القادم." 
          },
          { 
            id: "27_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق لاصق مركب لحالة (مثلاً: التواء كاحل مع تورم)", requirement: "دمج الـ Stability والـ Lymphatic techniques." },
              { text: "اختبار ثبات اللاصق مع المجهود الرياضي", requirement: "التأكد من جودة التطبيق." }
            ], 
            resources: [
              { title: "Final Taping Practical Video", url: "https://www.youtube.com/results?search_query=advanced+taping+practical+session" }
            ],
            tip: "أنت الآن تمتلك مهارة فنية تزيد من قيمة علاجك!" 
          },
          { 
            id: "27_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر اللاصق الطبي", requirement: "التأكد من إتقان الـ Kinesio and Rigid taping لجميع أجزاء الجسم." },
              { text: "راحة", requirement: "استعد لشهر التوازن والدهليز." }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن خبيراً في فن اللصق الطبي!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 27, 
    name: "شهر 28 — إعادة تأهيل التوازن والجهاز الدهليزي (Vestibular Rehabilitation)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Anatomy and Physiology of Balance", 
        days: [
          { 
            id: "28_1_1", 
            name: "تشريح الجهاز الدهليزي (Vestibular System)", 
            topic: "Specialized", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة الأذن الداخلية (Semicircular Canals, Otoliths)", requirement: "فهم كيفية استشعار الحركة الدورانية والخطية." },
              { text: "فهم العصب الثامن (Vestibulocochlear nerve)", requirement: "دراسة مسار الإشارات من الأذن إلى الدماغ." }
            ], 
            resources: [
              { title: "Anatomy of the Vestibular System", url: "https://www.physio-pedia.com/Vestibular_Anatomy" }
            ],
            tip: "التوازن هو سيمفونية بين الأذن والعين والجسم." 
          },
          { 
            id: "28_1_2", 
            name: "فسيولوجيا التوازن (VOR & VSR)", 
            topic: "Specialized", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم الـ Vestibulo-Ocular Reflex (VOR)", requirement: "دراسة كيف تحافظ العين على ثبات الصورة أثناء حركة الرأس." },
              { text: "فهم الـ Vestibulo-Spinal Reflex (VSR)", requirement: "دراسة كيف يحافظ الجسم على استقامته." }
            ], 
            resources: [
              { title: "VOR and VSR Explained", url: "https://www.youtube.com/results?search_query=vestibulo-ocular+reflex+explained" }
            ],
            tip: "الـ VOR هو أسرع منعكس في جسم الإنسان." 
          },
          { 
            id: "28_1_3", 
            name: "أنواع الدوار (Dizziness vs Vertigo)", 
            topic: "Specialized", 
            badge: "الاثنين", 
            tasks: [
              { text: "الفرق بين الـ Vertigo, Dizziness, and Disequilibrium", requirement: "تعلم كيفية وصف المريض لحالته بدقة." },
              { text: "الأسباب المركزية مقابل الطرفية (Central vs Peripheral)", requirement: "فهم الفرق بين مشكلة في الدماغ ومشكلة في الأذن." }
            ], 
            resources: [
              { title: "Types of Dizziness", url: "https://www.physio-pedia.com/Dizziness" }
            ],
            tip: "كلمة 'دوخة' غير كافية، ابحث عن الوصف الدقيق." 
          },
          { 
            id: "28_1_4", 
            name: "مرض الـ BPPV (دوار الوضعية الحميد)", 
            topic: "Specialized", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فهم ميكانيكا الـ Otoconia", requirement: "دراسة كيف تتحرك 'كريستالات' الأذن وتسبب الدوار." },
              { text: "الفرق بين الـ Canalithiasis والـ Cupulolithiasis", requirement: "فهم مدة الدوار وعلاقتها بنوع الإصابة." }
            ], 
            resources: [
              { title: "BPPV Explained", url: "https://www.youtube.com/results?search_query=bppv+pathophysiology+explained" }
            ],
            tip: "الـ BPPV هو السبب الأكثر شيوعاً للدوار الطرفي." 
          },
          { 
            id: "28_1_5", 
            name: "الأمراض الدهليزية الأخرى", 
            topic: "Specialized", 
            badge: "الأربعاء", 
            tasks: [
              { text: "دراسة مرض مينيير (Meniere's Disease)", requirement: "فهم أعراض الطنين، فقدان السمع، والدوار." },
              { text: "دراسة التهاب العصب الدهليزي (Vestibular Neuritis)", requirement: "فهم الدوار المفاجئ والمستمر." }
            ], 
            resources: [
              { title: "Common Vestibular Disorders", url: "https://www.physio-pedia.com/Vestibular_Disorders" }
            ],
            tip: "التاريخ المرضي هو مفتاح التشخيص في حالات الدوار." 
          },
          { 
            id: "28_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "رسم توضيحي للقنوات الهلالية الثلاث", requirement: "تحديد زوايا كل قناة في الرأس." },
              { text: "اختبار الـ VOR البسيط (Head Thrust Test)", requirement: "التدرب على مراقبة حركة العين." }
            ], 
            resources: [
              { title: "Vestibular Anatomy Practical", url: "https://www.youtube.com/results?search_query=vestibular+system+anatomy+3d" }
            ],
            tip: "تخيل القنوات في رأسك يساعدك على فهم المناورات لاحقاً." 
          },
          { 
            id: "28_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تشريح وفسيولوجيا التوازن", requirement: "التأكد من فهم كيفية عمل النظام قبل البدء في التقييم." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الأساس القوي يسهل عليك فهم الحالات المعقدة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Vestibular Assessment", 
        days: [
          { 
            id: "28_2_1", 
            name: "تقييم حركة العين (Oculomotor Exam)", 
            topic: "Specialized", 
            badge: "السبت", 
            tasks: [
              { text: "اختبار الـ Smooth Pursuit والـ Saccades", requirement: "دراسة كيفية تتبع العين للأهداف." },
              { text: "البحث عن الـ Nystagmus (رأرأة العين)", requirement: "تعلم كيفية تميز الرأرأة التلقائية والمستحثة." }
            ], 
            resources: [
              { title: "Oculomotor Examination", url: "https://www.youtube.com/results?search_query=oculomotor+exam+physiotherapy" }
            ],
            tip: "العين هي مرآة الجهاز الدهليزي." 
          },
          { 
            id: "28_2_2", 
            name: "مناورة Dix-Hallpike", 
            topic: "Specialized", 
            badge: "الأحد", 
            tasks: [
              { text: "تعلم خطوات مناورة Dix-Hallpike", requirement: "دراسة كيفية تشخيص الـ BPPV في القناة الخلفية." },
              { text: "تفسير نتائج المناورة", requirement: "فهم اتجاه الرأرأة (Up-beating, Torsional)." }
            ], 
            resources: [
              { title: "Dix-Hallpike Maneuver Guide", url: "https://www.youtube.com/results?search_query=dix-hallpike+maneuver+step+by+step" }
            ],
            tip: "هذه المناورة هي المعيار الذهبي لتشخيص الـ BPPV." 
          },
          { 
            id: "28_2_3", 
            name: "اختبار الـ Supine Roll Test", 
            topic: "Specialized", 
            badge: "الاثنين", 
            tasks: [
              { text: "تعلم خطوات الـ Roll Test", requirement: "دراسة كيفية تشخيص الـ BPPV في القناة الجانبية (Horizontal)." },
              { text: "الفرق بين الـ Geotropic والـ Apogeotropic nystagmus", requirement: "تحديد أي أذن هي المصابة." }
            ], 
            resources: [
              { title: "Supine Roll Test Tutorial", url: "https://www.youtube.com/results?search_query=supine+roll+test+for+horizontal+canal+bppv" }
            ],
            tip: "القناة الجانبية لها قواعد تشخيصية مختلفة قليلاً." 
          },
          { 
            id: "28_2_4", 
            name: "تقييم التوازن الثباتي (Static Balance)", 
            topic: "Specialized", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "اختبار الـ Romberg والـ Sharpened Romberg", requirement: "دراسة قدرة المريض على الوقوف مع غلق العينين." },
              { text: "اختبار الـ CTSIB (Foam and Dome)", requirement: "فهم أي نظام يعتمد عليه المريض (بصري، حسي، أو دهليزي)." }
            ], 
            resources: [
              { title: "Balance Assessment Tools", url: "https://www.physio-pedia.com/Balance_Assessment" }
            ],
            tip: "التوازن يتأثر بغياب الضوء أو عدم ثبات الأرض." 
          },
          { 
            id: "28_2_5", 
            name: "تقييم التوازن الحركي (Dynamic Balance)", 
            topic: "Specialized", 
            badge: "الأربعاء", 
            tasks: [
              { text: "اختبار الـ Dynamic Gait Index (DGI)", requirement: "دراسة المشي مع حركة الرأس وتغيير السرعة." },
              { text: "اختبار الـ Functional Gait Assessment (FGA)", requirement: "تقييم أكثر دقة للمشي في ظروف صعبة." }
            ], 
            resources: [
              { title: "Dynamic Gait Assessment", url: "https://www.youtube.com/results?search_query=dynamic+gait+index+physiotherapy" }
            ],
            tip: "المشي مع حركة الرأس هو أكبر تحدي لمريض الدوار." 
          },
          { 
            id: "28_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق Dix-Hallpike لزميل", requirement: "التأكد من سرعة الحركة وزاوية الرأس (45 درجة)." },
              { text: "تطبيق اختبار Romberg وملاحظة الـ Sway", requirement: "التدرب على حماية المريض من السقوط." }
            ], 
            resources: [
              { title: "Vestibular Assessment Practical", url: "https://www.youtube.com/results?search_query=vestibular+assessment+practical+session" }
            ],
            tip: "الأمان أولاً، كن دائماً بجانب المريض أثناء الاختبار." 
          },
          { 
            id: "28_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة تكنيكات التقييم والتشخيص", requirement: "التأكد من القدرة على تحديد نوع الدوار ومكانه." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "التشخيص الدقيق هو نصف العلاج." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — BPPV Treatment Maneuvers", 
        days: [
          { 
            id: "28_3_1", 
            name: "مناورة Epley (للقناة الخلفية)", 
            topic: "Specialized", 
            badge: "السبت", 
            tasks: [
              { text: "تعلم خطوات مناورة Epley", requirement: "دراسة كيفية إعادة الكريستالات لمكانها في القناة الخلفية." },
              { text: "أهمية التوقيت بين الخطوات", requirement: "فهم لماذا ننتظر 30-60 ثانية في كل وضعية." }
            ], 
            resources: [
              { title: "Epley Maneuver Tutorial", url: "https://www.youtube.com/results?search_query=epley+maneuver+step+by+step+physiotherapy" }
            ],
            tip: "مناورة واحدة صحيحة قد تنهي معاناة شهور للمريض." 
          },
          { 
            id: "28_3_2", 
            name: "مناورة Semont (Liberatory Maneuver)", 
            topic: "Specialized", 
            badge: "الأحد", 
            tasks: [
              { text: "تعلم خطوات مناورة Semont", requirement: "بديل لمناورة Epley، خاصة لمن يعانون من مشاكل في الرقبة." },
              { text: "فهم الـ Cupulolithiasis treatment", requirement: "دراسة متى تكون هذه المناورة هي الأفضل." }
            ], 
            resources: [
              { title: "Semont Maneuver Guide", url: "https://www.youtube.com/results?search_query=semont+maneuver+for+bppv" }
            ],
            tip: "السرعة في الانتقال بين الجانبين هي مفتاح نجاح Semont." 
          },
          { 
            id: "28_3_3", 
            name: "مناورات القناة الجانبية (BBQ Roll & Gufoni)", 
            topic: "Specialized", 
            badge: "الاثنين", 
            tasks: [
              { text: "تعلم الـ Lempert (BBQ) Roll", requirement: "دراسة الدوران 360 درجة لعلاج القناة الجانبية." },
              { text: "تعلم مناورة Gufoni", requirement: "دراسة التكنيك الأسرع لعلاج القناة الجانبية." }
            ], 
            resources: [
              { title: "Horizontal Canal Maneuvers", url: "https://www.youtube.com/results?search_query=bbq+roll+maneuver+and+gufoni" }
            ],
            tip: "القناة الجانبية تحتاج دقة في تحديد اتجاه الدوران." 
          },
          { 
            id: "28_3_4", 
            name: "مناورة Yacovino (للقناة الأمامية)", 
            topic: "Specialized", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تعلم خطوات مناورة Yacovino", requirement: "دراسة علاج القناة الأمامية (الأقل شيوعاً)." },
              { text: "التعرف على أعراض القناة الأمامية", requirement: "فهم الرأرأة المتجهة للأسفل (Down-beating)." }
            ], 
            resources: [
              { title: "Anterior Canal BPPV Treatment", url: "https://www.youtube.com/results?search_query=yacovino+maneuver+for+anterior+canal+bppv" }
            ],
            tip: "القناة الأمامية نادرة، لكن يجب أن تكون مستعداً لها." 
          },
          { 
            id: "28_3_5", 
            name: "تعليمات ما بعد المناورة", 
            topic: "Specialized", 
            badge: "الأربعاء", 
            tasks: [
              { text: "نصائح النوم والحركة بعد العلاج", requirement: "دراسة هل يحتاج المريض للنوم جالساً؟ (تحديثات العلم)." },
              { text: "توقع الـ Residual Dizziness", requirement: "فهم لماذا قد يشعر المريض بعدم اتزان بسيط بعد نجاح المناورة." }
            ], 
            resources: [
              { title: "Post-Maneuver Instructions", url: "https://www.youtube.com/results?search_query=instructions+after+bppv+maneuver" }
            ],
            tip: "طمأنة المريض جزء أساسي من نجاح العلاج." 
          },
          { 
            id: "28_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تطبيق مناورة Epley لزميل", requirement: "التأكد من الزوايا الصحيحة (45 درجة ثم 90 درجة)." },
              { text: "تطبيق الـ BBQ Roll وتخيل حركة الكريستالات", requirement: "فهم الميكانيكا الحيوية للمناورة." }
            ], 
            resources: [
              { title: "BPPV Treatment Practical", url: "https://www.youtube.com/results?search_query=bppv+treatment+maneuvers+practical" }
            ],
            tip: "المناورة هي 'هندسة' داخل الأذن، كن دقيقاً." 
          },
          { 
            id: "28_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة جميع مناورات علاج الـ BPPV", requirement: "التأكد من حفظ الخطوات لكل قناة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "أنت الآن تمتلك القدرة على تغيير حياة مريض في دقائق." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Vestibular Habituation & Adaptation", 
        days: [
          { 
            id: "28_4_1", 
            name: "تمارين الـ Adaptation (ثبات الرؤية)", 
            topic: "Specialized", 
            badge: "السبت", 
            tasks: [
              { text: "تمارين الـ X1 and X2 viewing", requirement: "دراسة كيفية تقوية الـ VOR من خلال تثبيت النظر مع حركة الرأس." },
              { text: "تدرج الصعوبة (السرعة، الخلفية)", requirement: "كيف تجعل التمرين أكثر تحدياً للمريض." }
            ], 
            resources: [
              { title: "Vestibular Adaptation Exercises", url: "https://www.youtube.com/results?search_query=vestibular+adaptation+exercises+x1+x2" }
            ],
            tip: "التكرار هو سر تأقلم الدماغ مع الإشارات الجديدة." 
          },
          { 
            id: "28_4_2", 
            name: "تمارين الـ Habituation (التعود)", 
            topic: "Specialized", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم مبدأ الـ Habituation", requirement: "تعريض المريض للحركات التي تسبب له الدوار بشكل متكرر لتقليل الحساسية." },
              { text: "استخدام الـ Motion Sensitivity Quotient (MSQ)", requirement: "تحديد الحركات المزعجة للمريض." }
            ], 
            resources: [
              { title: "Habituation Exercises Guide", url: "https://www.youtube.com/results?search_query=vestibular+habituation+exercises+physiotherapy" }
            ],
            tip: "في البداية قد يزداد الدوار، أخبر المريض أن هذا جزء من الشفاء." 
          },
          { 
            id: "28_4_3", 
            name: "تمارين الـ Substitution (التعويض)", 
            topic: "Specialized", 
            badge: "الاثنين", 
            tasks: [
              { text: "استخدام الأنظمة الأخرى للتعويض", requirement: "تقوية النظر والحس العميق لتعويض ضعف الأذن." },
              { text: "تمارين الـ Active Eye-Head movements", requirement: "تحسين التنسيق بين العين والرأس." }
            ], 
            resources: [
              { title: "Vestibular Substitution Exercises", url: "https://www.youtube.com/results?search_query=vestibular+substitution+exercises" }
            ],
            tip: "الدماغ مرن جداً، تعلم كيف تستغل هذه المرونة." 
          },
          { 
            id: "28_4_4", 
            name: "إعادة تأهيل التوازن المتقدمة", 
            topic: "Specialized", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تمارين التوازن على أسطح غير مستقرة", requirement: "استخدام الـ Foam, Bosu ball, and Balance board." },
              { text: "دمج المهام المزدوجة (Dual Tasking)", requirement: "المشي مع حل مسائل حسابية أو حمل أشياء." }
            ], 
            resources: [
              { title: "Advanced Balance Training", url: "https://www.youtube.com/results?search_query=advanced+vestibular+balance+exercises" }
            ],
            tip: "الحياة الواقعية مليئة بالمشتتات، درب مريضك عليها." 
          },
          { 
            id: "28_4_5", 
            name: "تصميم برنامج إعادة التأهيل الدهليزي (VRT)", 
            topic: "Clinical Reasoning", 
            badge: "الأربعاء", 
            tasks: [
              { text: "وضع أهداف ذكية (SMART Goals)", requirement: "تحديد أهداف وظيفية (مثل المشي في السوبر ماركت بدون دوار)." },
              { text: "تحديد مدة وعدد مرات التمرين", requirement: "فهم أن التمارين القصيرة والمتكررة أفضل من الطويلة." }
            ], 
            resources: [
              { title: "Designing a VRT Program", url: "https://www.physio-pedia.com/Vestibular_Rehabilitation" }
            ],
            tip: "البرنامج المنزلي هو العمود الفقري للتحسن." 
          },
          { 
            id: "28_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم جلسة كاملة لمريض يعاني من ضعف دهليزي طرفي", requirement: "دمج تمارين الـ VOR والتوازن." },
              { text: "شرح التمارين للمريض بوضوح", requirement: "التأكد من فهمه لكيفية أدائها في البيت." }
            ], 
            resources: [
              { title: "Final Vestibular Practical", url: "https://www.youtube.com/results?search_query=vestibular+rehab+full+session+example" }
            ],
            tip: "أنت الآن تمتلك مهارة نادرة ومطلوبة جداً!" 
          },
          { 
            id: "28_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر التوازن والدهليز", requirement: "التأكد من إتقان التقييم، علاج الـ BPPV، وتمارين التأهيل." },
              { text: "راحة", requirement: "استعد لشهر إدارة العيادات." }
            ], 
            resources: [],
            tip: "لقد أصبحت الآن معالجاً دهليزياً محترفاً، مبروك!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 28, 
    name: "شهر 29 — إدارة العيادات والتسويق المهني (Clinic Management & Marketing)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Clinic Operations and Ethics", 
        days: [
          { 
            id: "29_1_1", 
            name: "أساسيات تأسيس عيادة علاج طبيعي", 
            topic: "Professional", 
            badge: "السبت", 
            tasks: [
              { text: "دراسة المتطلبات القانونية والتراخيص", requirement: "فهم كيفية استخراج تراخيص العيادة في بلدك." },
              { text: "تصميم مساحة العيادة (Clinic Layout)", requirement: "دراسة توزيع الغرف والأجهزة لضمان انسيابية العمل وخصوصية المريض." }
            ], 
            resources: [
              { title: "Starting a Physical Therapy Clinic", url: "https://www.youtube.com/results?search_query=how+to+start+a+physical+therapy+clinic" }
            ],
            tip: "العيادة المنظمة تعطي انطباعاً بالاحترافية من أول لحظة." 
          },
          { 
            id: "29_1_2", 
            name: "إدارة المواعيد والسجلات (Documentation)", 
            topic: "Professional", 
            badge: "الأحد", 
            tasks: [
              { text: "استخدام أنظمة الـ EMR (Electronic Medical Records)", requirement: "دراسة برامج إدارة العيادات والتحول الرقمي." },
              { text: "أهمية التوثيق القانوني والطبي", requirement: "فهم كيف يحميك التوثيق الصحيح قانونياً." }
            ], 
            resources: [
              { title: "Documentation in Physiotherapy", url: "https://www.physio-pedia.com/Documentation" }
            ],
            tip: "إذا لم يتم توثيقه، فإنه لم يحدث." 
          },
          { 
            id: "29_1_3", 
            name: "أخلاقيات المهنة (Professional Ethics)", 
            topic: "Professional", 
            badge: "الاثنين", 
            tasks: [
              { text: "دراسة ميثاق أخلاقيات العلاج الطبيعي", requirement: "فهم حقوق المريض وواجبات المعالج." },
              { text: "التعامل مع الحالات الصعبة أخلاقياً", requirement: "كيف تتصرف في حالات تضارب المصالح أو الهدايا من المرضى." }
            ], 
            resources: [
              { title: "Ethics in Physiotherapy", url: "https://www.physio-pedia.com/Ethics" }
            ],
            tip: "سمعتك الأخلاقية هي أغلى ما تملك." 
          },
          { 
            id: "29_1_4", 
            name: "إدارة الفريق الطبي والإداري", 
            topic: "Professional", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "مهارات القيادة والتحفيز", requirement: "كيف تدير فريقاً من المعالجين المساعدين والسكرتارية." },
              { text: "توزيع المهام والمسؤوليات", requirement: "فهم الوصف الوظيفي لكل فرد في العيادة." }
            ], 
            resources: [
              { title: "Leadership in Healthcare", url: "https://www.youtube.com/results?search_query=leadership+for+physiotherapists" }
            ],
            tip: "القائد الناجح هو من يصنع قادة آخرين." 
          },
          { 
            id: "29_1_5", 
            name: "الجودة وسلامة المرضى", 
            topic: "Professional", 
            badge: "الأربعاء", 
            tasks: [
              { text: "معايير مكافحة العدوى في العيادة", requirement: "دراسة كيفية تعقيم الأجهزة والمكان باستمرار." },
              { text: "إدارة المخاطر (Risk Management)", requirement: "كيفية منع السقوط أو الإصابات داخل العيادة." }
            ], 
            resources: [
              { title: "Infection Control in PT Clinic", url: "https://www.youtube.com/results?search_query=infection+control+for+physiotherapists" }
            ],
            tip: "سلامة المريض هي الأولوية القصوى دائماً." 
          },
          { 
            id: "29_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم نموذج (Consent Form) لعيادتك", requirement: "تضمين جميع البنود القانونية والأخلاقية." },
              { text: "عمل قائمة مراجعة (Checklist) لنظافة العيادة", requirement: "التدرب على الرقابة الذاتية." }
            ], 
            resources: [
              { title: "Clinic Management Practical", url: "https://www.youtube.com/results?search_query=physical+therapy+clinic+management+tips" }
            ],
            tip: "التفاصيل الصغيرة هي التي تصنع الفارق الكبير." 
          },
          { 
            id: "29_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة أساسيات الإدارة والأخلاقيات", requirement: "التأكد من فهم كيفية بناء بيئة عمل احترافية." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "الإدارة الناجحة تضمن استمرارية النجاح الطبي." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Marketing and Branding", 
        days: [
          { 
            id: "29_2_1", 
            name: "بناء العلامة التجارية الشخصية (Personal Branding)", 
            topic: "Professional", 
            badge: "السبت", 
            tasks: [
              { text: "تحديد الـ Unique Selling Proposition (USP)", requirement: "ما الذي يميزك عن غيرك من المعالجين؟" },
              { text: "تصميم الهوية البصرية (Logo, Colors)", requirement: "فهم سيكولوجية الألوان في المجال الطبي." }
            ], 
            resources: [
              { title: "Personal Branding for Doctors", url: "https://www.youtube.com/results?search_query=personal+branding+for+healthcare+professionals" }
            ],
            tip: "أنت لست مجرد معالج، أنت علامة تجارية." 
          },
          { 
            id: "29_2_2", 
            name: "التسويق عبر وسائل التواصل الاجتماعي", 
            topic: "Professional", 
            badge: "الأحد", 
            tasks: [
              { text: "صناعة المحتوى التعليمي (Content Marketing)", requirement: "كيف تكتب منشورات تجذب المرضى وتثقفهم." },
              { text: "استخدام Instagram و TikTok باحترافية", requirement: "تعلم كيفية تصوير فيديوهات تمارين قصيرة وجذابة." }
            ], 
            resources: [
              { title: "Social Media Marketing for PTs", url: "https://www.youtube.com/results?search_query=social+media+marketing+for+physiotherapists" }
            ],
            tip: "المحتوى هو الملك، والقيمة هي التي تجذب المتابعين." 
          },
          { 
            id: "29_2_3", 
            name: "التسويق المحلي (Local SEO & Google Maps)", 
            topic: "Professional", 
            badge: "الاثنين", 
            tasks: [
              { text: "تحسين ظهور عيادتك على خرائط جوجل", requirement: "أهمية التقييمات (Reviews) والصور المحدثة." },
              { text: "التواصل مع المجتمع المحلي", requirement: "عمل ندوات في نوادي أو مدارس لزيادة الوعي." }
            ], 
            resources: [
              { title: "Google Maps Marketing for Clinics", url: "https://www.youtube.com/results?search_query=google+my+business+for+physiotherapy+clinics" }
            ],
            tip: "أغلب مرضاك يبحثون عنك في محيطهم القريب." 
          },
          { 
            id: "29_2_4", 
            name: "بناء شبكة علاقات (Networking)", 
            topic: "Professional", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "التواصل مع الأطباء المتخصصين", requirement: "كيف تبني علاقة إحالة (Referral) قوية مع جراحي العظام." },
              { text: "حضور المؤتمرات والفعاليات", requirement: "أهمية التواجد في الوسط العلمي والمهني." }
            ], 
            resources: [
              { title: "Networking for Healthcare Pros", url: "https://www.youtube.com/results?search_query=networking+tips+for+physiotherapists" }
            ],
            tip: "علاقاتك هي رأس مالك غير الملموس." 
          },
          { 
            id: "29_2_5", 
            name: "خدمة العملاء وتجربة المريض", 
            topic: "Professional", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تحسين رحلة المريض داخل العيادة", requirement: "من أول مكالمة تليفون حتى مغادرة العيادة." },
              { text: "التعامل مع شكاوى المرضى", requirement: "كيف تحول مريضاً غاضباً إلى مريض مخلص لعيادتك." }
            ], 
            resources: [
              { title: "Patient Experience in PT", url: "https://www.youtube.com/results?search_query=patient+experience+in+healthcare" }
            ],
            tip: "المريض الراضي هو أفضل وسيلة تسويق (Word of Mouth)." 
          },
          { 
            id: "29_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "كتابة خطة تسويقية بسيطة لعيادتك لـ 3 أشهر", requirement: "تحديد القنوات والميزانية والأهداف." },
              { text: "تصميم منشور تعليمي (Infographic) لحالة شائعة", requirement: "التدرب على التبسيط والجذب." }
            ], 
            resources: [
              { title: "Marketing Plan Practical", url: "https://www.youtube.com/results?search_query=marketing+plan+for+physiotherapy+clinic" }
            ],
            tip: "التسويق هو استثمار وليس مصاريف." 
          },
          { 
            id: "29_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة استراتيجيات التسويق والبراندينج", requirement: "التأكد من وضوح رؤيتك التسويقية." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "كن صادقاً في تسويقك، فالثقة هي أساس الطب." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Financial Management and Growth", 
        days: [
          { 
            id: "29_3_1", 
            name: "الإدارة المالية للعيادة", 
            topic: "Professional", 
            badge: "السبت", 
            tasks: [
              { text: "فهم التدفق النقدي (Cash Flow)", requirement: "دراسة كيفية موازنة المصاريف مع الإيرادات." },
              { text: "تحديد أسعار الجلسات", requirement: "كيف تسعر خدماتك بناءً على السوق والتكلفة والقيمة المضافة." }
            ], 
            resources: [
              { title: "Financial Management for PTs", url: "https://www.youtube.com/results?search_query=financial+management+for+physiotherapy+clinic" }
            ],
            tip: "النجاح المالي يضمن لك القدرة على شراء أجهزة أحدث." 
          },
          { 
            id: "29_3_2", 
            name: "التعامل مع شركات التأمين", 
            topic: "Professional", 
            badge: "الأحد", 
            tasks: [
              { text: "فهم عقود التأمين الطبي", requirement: "دراسة كيفية التعاقد مع الشركات وإجراءات الفوترة." },
              { text: "إدارة الرفض (Denials management)", requirement: "كيف تتعامل مع رفض شركات التأمين لصرف مستحقات الجلسات." }
            ], 
            resources: [
              { title: "Insurance Billing for PTs", url: "https://www.youtube.com/results?search_query=insurance+billing+for+physical+therapy" }
            ],
            tip: "التأمين يفتح لك باباً كبيراً من المرضى، فتعلم قواعده." 
          },
          { 
            id: "29_3_3", 
            name: "تحليل الأداء (KPIs)", 
            topic: "Professional", 
            badge: "الاثنين", 
            tasks: [
              { text: "تحديد مؤشرات الأداء الرئيسية", requirement: "دراسة معدل إلغاء المواعيد، معدل عودة المرضى، ومتوسط ربح الجلسة." },
              { text: "استخدام البيانات لاتخاذ القرارات", requirement: "متى تحتاج لتوظيف معالج جديد أو شراء جهاز جديد؟" }
            ], 
            resources: [
              { title: "KPIs for PT Clinics", url: "https://www.youtube.com/results?search_query=kpis+for+physiotherapy+clinic" }
            ],
            tip: "الأرقام لا تكذب، استمع لما تقوله لك بيانات عيادتك." 
          },
          { 
            id: "29_3_4", 
            name: "التوسع والنمو (Scaling)", 
            topic: "Professional", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "فتح فرع جديد أو توسيع العيادة", requirement: "دراسة الجدوى الاقتصادية للتوسع." },
              { text: "إضافة خدمات جديدة (مثل الجيم العلاجي أو التغذية)", requirement: "تنويع مصادر الدخل داخل العيادة." }
            ], 
            resources: [
              { title: "Scaling Your PT Practice", url: "https://www.youtube.com/results?search_query=how+to+scale+a+physiotherapy+business" }
            ],
            tip: "النمو المدروس هو النمو المستدام." 
          },
          { 
            id: "29_3_5", 
            name: "التكنولوجيا والابتكار في الإدارة", 
            topic: "Professional", 
            badge: "الأربعاء", 
            tasks: [
              { text: "استخدام الذكاء الاصطناعي في الإدارة", requirement: "دراسة كيف يمكن للـ AI تحسين المواعيد والرد على المرضى." },
              { text: "العلاج عن بعد (Telehealth)", requirement: "كيف تدير جلسات أونلاين وتجني منها ربحاً." }
            ], 
            resources: [
              { title: "Telehealth in Physiotherapy", url: "https://www.physio-pedia.com/Telehealth" }
            ],
            tip: "المستقبل لمن يتبنى التكنولوجيا مبكراً." 
          },
          { 
            id: "29_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "عمل جدول بيانات (Excel) لمتابعة دخل ومصاريف العيادة", requirement: "التدرب على الحسابات الأساسية." },
              { text: "تحليل حالة (Case Study) لعيادة متعثرة واقتراح حلول", requirement: "تطبيق مهارات حل المشكلات الإدارية." }
            ], 
            resources: [
              { title: "Financial Practical Session", url: "https://www.youtube.com/results?search_query=physiotherapy+business+finance+tutorial" }
            ],
            tip: "الإدارة المالية هي صمام أمان مشروعك." 
          },
          { 
            id: "29_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الإدارة المالية وخطط النمو", requirement: "التأكد من فهم الجانب التجاري للمهنة." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "المعالج الناجح هو أيضاً مدير ناجح." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Professional Development and Career Path", 
        days: [
          { 
            id: "29_4_1", 
            name: "التخطيط المهني طويل الأمد", 
            topic: "Professional", 
            badge: "السبت", 
            tasks: [
              { text: "رسم مسارك المهني لـ 5 و 10 سنوات", requirement: "أين تريد أن تصل؟ (دكتوراه، تخصص نادر، سلسلة عيادات)." },
              { text: "تحديد المهارات المطلوبة للوصول لهدفك", requirement: "ما هي الكورسات أو الشهادات التي تنقصك؟" }
            ], 
            resources: [
              { title: "Career Planning for PTs", url: "https://www.youtube.com/results?search_query=career+path+for+physiotherapists" }
            ],
            tip: "من لا يخطط للنجاح، يخطط للفشل." 
          },
          { 
            id: "29_4_2", 
            name: "التعليم الطبي المستمر (CPD)", 
            topic: "Professional", 
            badge: "الأحد", 
            tasks: [
              { text: "أهمية الـ CPD في الحفاظ على الترخيص", requirement: "دراسة عدد الساعات المطلوبة سنوياً في بلدك." },
              { text: "كيفية اختيار الكورسات الموثوقة", requirement: "الفرق بين الكورسات التجارية والعلمية المعتمدة." }
            ], 
            resources: [
              { title: "Continuous Professional Development", url: "https://www.physio-pedia.com/CPD" }
            ],
            tip: "العلم لا يتوقف عند التخرج، بل يبدأ بعده." 
          },
          { 
            id: "29_4_3", 
            name: "مهارات العرض والإلقاء (Presentation Skills)", 
            topic: "Professional", 
            badge: "الاثنين", 
            tasks: [
              { text: "كيف تصبح محاضراً في العلاج الطبيعي", requirement: "دراسة مهارات التحدث أمام الجمهور وتصميم العروض." },
              { text: "كتابة ملخصات للمؤتمرات (Abstracts)", requirement: "كيف تشارك في المؤتمرات الدولية." }
            ], 
            resources: [
              { title: "Public Speaking for Clinicians", url: "https://www.youtube.com/results?search_query=public+speaking+tips+for+healthcare+professionals" }
            ],
            tip: "قدرتك على نقل العلم تزيد من هيبتك المهنية." 
          },
          { 
            id: "29_4_4", 
            name: "التوازن بين العمل والحياة (Work-Life Balance)", 
            topic: "Professional", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "تجنب الاحتراق المهني (Burnout)", requirement: "دراسة علامات الإجهاد النفسي وكيفية التعامل معه." },
              { text: "تنظيم الوقت بين العيادة والمنزل والدراسة", requirement: "تعلم مهارات الـ Time Management." }
            ], 
            resources: [
              { title: "Avoiding Burnout in PT", url: "https://www.youtube.com/results?search_query=preventing+burnout+for+physiotherapists" }
            ],
            tip: "صحتك النفسية هي وقود عطائك لمرضاك." 
          },
          { 
            id: "29_4_5", 
            name: "بناء إرث مهني (Legacy)", 
            topic: "Professional", 
            badge: "الأربعاء", 
            tasks: [
              { text: "تدريب الأجيال الجديدة (Mentorship)", requirement: "كيف تصبح 'مينتور' لطلبة الامتياز والمعالجين الجدد." },
              { text: "المساهمة في تطوير المهنة", requirement: "الانضمام للنقابات والجمعيات العلمية." }
            ], 
            resources: [
              { title: "Mentorship in Physiotherapy", url: "https://www.youtube.com/results?search_query=mentorship+for+physiotherapists" }
            ],
            tip: "العلم زكاته نشره وتوريثه." 
          },
          { 
            id: "29_4_6", 
            name: "تطبيق عملي نهائي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تحديث الـ CV والـ LinkedIn الخاص بك", requirement: "إضافة كل المهارات والشهادات التي حصلت عليها في السنتين الماضيتين." },
              { text: "عمل عرض تقديمي (PPT) عن حالة نجاح في عيادتك", requirement: "التدرب على عرض النتائج." }
            ], 
            resources: [
              { title: "Professional Portfolio Practical", url: "https://www.youtube.com/results?search_query=physiotherapy+portfolio+guide" }
            ],
            tip: "أنت الآن جاهز للانطلاق كقائد في مجالك!" 
          },
          { 
            id: "29_4_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة شهر الإدارة والتطوير المهني", requirement: "التأكد من امتلاك عقلية رائد الأعمال والمعالج المحترف." },
              { text: "راحة", requirement: "استعد للشهر الأخير.. شهر التتويج!" }
            ], 
            resources: [],
            tip: "لقد قطعت شوطاً عظيماً، فخور بك جداً!" 
          }
        ] 
      }
    ] 
  },
  { 
    id: 29, 
    name: "شهر 30 — التتويج والمراجعة النهائية (Final Mastery & Graduation)", 
    weeks: [
      { 
        title: "الأسبوع 1 — Comprehensive Orthopedic Review", 
        days: [
          { 
            id: "30_1_1", 
            name: "مراجعة الطرف العلوي (Upper Limb Review)", 
            topic: "Mastery", 
            badge: "السبت", 
            tasks: [
              { text: "مراجعة تشخيص وعلاج الكتف والكوع والرسغ", requirement: "استرجاع أهم الـ Special tests والـ Manual techniques." },
              { text: "حل حالات دراسية معقدة للطرف العلوي", requirement: "التدرب على الربط بين المفاصل المختلفة." }
            ], 
            resources: [
              { title: "Upper Limb Mastery Review", url: "https://www.physio-pedia.com/Upper_Limb_Assessment" }
            ],
            tip: "الخبرة هي تكرار الأساسيات بذكاء." 
          },
          { 
            id: "30_1_2", 
            name: "مراجعة الطرف السفلي (Lower Limb Review)", 
            topic: "Mastery", 
            badge: "الأحد", 
            tasks: [
              { text: "مراجعة تشخيص وعلاج الحوض والركبة والكاحل", requirement: "التركيز على الـ Biomechanics والـ Gait analysis." },
              { text: "مراجعة بروتوكولات التأهيل بعد العمليات", requirement: "التأكد من حفظ الجداول الزمنية للتعافي." }
            ], 
            resources: [
              { title: "Lower Limb Mastery Review", url: "https://www.physio-pedia.com/Lower_Limb_Assessment" }
            ],
            tip: "الطرف السفلي هو وحدة حركية واحدة، لا تفصل بين مفاصلها." 
          },
          { 
            id: "30_1_3", 
            name: "مراجعة العمود الفقري (Spine Review)", 
            topic: "Mastery", 
            badge: "الاثنين", 
            tasks: [
              { text: "مراجعة الـ Cervical, Thoracic, and Lumbar spine", requirement: "التركيز على الـ Differential diagnosis والـ Red flags." },
              { text: "مراجعة تكنيكات الـ Manipulation والـ Mobilization", requirement: "التأكد من الأمان والدقة." }
            ], 
            resources: [
              { title: "Spine Mastery Review", url: "https://www.physio-pedia.com/Spinal_Assessment" }
            ],
            tip: "العمود الفقري هو عمود الصحة، فكن حذراً وماهراً." 
          },
          { 
            id: "30_1_4", 
            name: "مراجعة العلوم الأساسية (Basic Sciences)", 
            topic: "Mastery", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "مراجعة الـ Anatomy والـ Physiology", requirement: "ربط العلوم الأساسية بالتطبيقات السريرية." },
              { text: "مراجعة الـ Kinesiology والـ Biomechanics", requirement: "فهم القوى المؤثرة على الجسم." }
            ], 
            resources: [
              { title: "Basic Sciences for PTs", url: "https://www.youtube.com/results?search_query=physiotherapy+basic+sciences+review" }
            ],
            tip: "الأساس القوي هو ما يميز المعالج الخبير عن الهاوي." 
          },
          { 
            id: "30_1_5", 
            name: "مراجعة الوسائل العلاجية (Modalities & Exercise)", 
            topic: "Mastery", 
            badge: "الأربعاء", 
            tasks: [
              { text: "مراجعة الـ Electrotherapy والـ Manual Therapy", requirement: "متى تستخدم كل وسيلة ولماذا؟" },
              { text: "مراجعة مبادئ الـ Therapeutic Exercise", requirement: "التأكد من القدرة على وصف التمرين المناسب بالجرعة المناسبة." }
            ], 
            resources: [
              { title: "Therapeutic Modalities Review", url: "https://www.youtube.com/results?search_query=physiotherapy+modalities+review" }
            ],
            tip: "أدواتك كثيرة، فتعلم كيف تختار الأنسب لكل مريض." 
          },
          { 
            id: "30_1_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تقييم شامل لحالة وهمية (Full Assessment)", requirement: "من التاريخ المرضي حتى وضع خطة العلاج." },
              { text: "شرح الخطة للمريض (Role Play)", requirement: "التدرب على مهارات التواصل." }
            ], 
            resources: [
              { title: "Comprehensive Assessment Practical", url: "https://www.youtube.com/results?search_query=comprehensive+physiotherapy+assessment+example" }
            ],
            tip: "أنت الآن تجمع كل ما تعلمته في صورة واحدة." 
          },
          { 
            id: "30_1_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة الأسبوع الأول من المراجعة النهائية", requirement: "التأكد من استرجاع المعلومات الأساسية." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "المراجعة هي تثبيت للمعلومة في الذاكرة طويلة الأمد." 
          }
        ] 
      },
      { 
        title: "الأسبوع 2 — Specialized Topics Review", 
        days: [
          { 
            id: "30_2_1", 
            name: "مراجعة إصابات الملاعب (Sports Injuries)", 
            topic: "Mastery", 
            badge: "السبت", 
            tasks: [
              { text: "مراجعة الـ ACL, Meniscus, and Ankle Sprains", requirement: "التركيز على الـ Return to play criteria." },
              { text: "مراجعة الإسعافات الأولية في الملعب", requirement: "التأكد من سرعة البديهة في التعامل مع الإصابات الحادة." }
            ], 
            resources: [
              { title: "Sports PT Mastery Review", url: "https://www.physio-pedia.com/Sports_Physiotherapy" }
            ],
            tip: "الرياضي يحتاج سرعة وأمان في العودة للملعب." 
          },
          { 
            id: "30_2_2", 
            name: "مراجعة تأهيل الأعصاب (Neuro Rehab)", 
            topic: "Mastery", 
            badge: "الأحد", 
            tasks: [
              { text: "مراجعة الـ Stroke, MS, and Spinal Cord Injuries", requirement: "التركيز على الـ Neuroplasticity والـ Motor learning." },
              { text: "مراجعة الـ Gait training في حالات الأعصاب", requirement: "استخدام المساعدات الحركية المناسبة." }
            ], 
            resources: [
              { title: "Neuro PT Mastery Review", url: "https://www.physio-pedia.com/Neurology" }
            ],
            tip: "الأعصاب تحتاج صبراً وإبداعاً في العلاج." 
          },
          { 
            id: "30_2_3", 
            name: "مراجعة تأهيل الأطفال (Pediatric Rehab)", 
            topic: "Mastery", 
            badge: "الاثنين", 
            tasks: [
              { text: "مراجعة الـ Cerebral Palsy والـ Developmental delays", requirement: "التركيز على الـ Milestones واللعب العلاجي." },
              { text: "مراجعة الـ Orthopedic pediatrics (مثل الـ Scoliosis)", requirement: "فهم نمو العظام في الأطفال." }
            ], 
            resources: [
              { title: "Pediatric PT Mastery Review", url: "https://www.physio-pedia.com/Paediatrics" }
            ],
            tip: "علاج الأطفال هو فن التعامل مع البراءة." 
          },
          { 
            id: "30_2_4", 
            name: "مراجعة تأهيل المسنين (Geriatric Rehab)", 
            topic: "Mastery", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "مراجعة الـ Osteoporosis والـ Fall prevention", requirement: "التركيز على الأمان والاستقلالية." },
              { text: "التعامل مع الأمراض المزمنة المتعددة", requirement: "فهم تأثير الشيخوخة على أنظمة الجسم." }
            ], 
            resources: [
              { title: "Geriatric PT Mastery Review", url: "https://www.physio-pedia.com/Geriatrics" }
            ],
            tip: "المسن يحتاج كرامة واستقلالية في حركته." 
          },
          { 
            id: "30_2_5", 
            name: "مراجعة الحالات الخاصة (Women's Health & Cardiopulmonary)", 
            topic: "Mastery", 
            badge: "الأربعاء", 
            tasks: [
              { text: "مراجعة تأهيل صحة المرأة (Pelvic floor)", requirement: "فهم التغيرات أثناء الحمل وبعد الولادة." },
              { text: "مراجعة تأهيل القلب والصدر", requirement: "التركيز على الـ Breathing exercises والـ Aerobic capacity." }
            ], 
            resources: [
              { title: "Specialized PT Review", url: "https://www.physio-pedia.com/Cardiorespiratory" }
            ],
            tip: "المعالج الشامل هو من يفهم في كل التخصصات." 
          },
          { 
            id: "30_2_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "تصميم برنامج وقائي لفريق رياضي", requirement: "تحديد أهم التمارين لتقليل الإصابات الشائعة." },
              { text: "عمل جلسة تأهيل توازن لمسن", requirement: "التأكد من توفير بيئة آمنة." }
            ], 
            resources: [
              { title: "Specialized Practical Session", url: "https://www.youtube.com/results?search_query=specialized+physiotherapy+practical+examples" }
            ],
            tip: "التخصص هو تعمق في العلم، والشمولية هي اتساع في الرؤية." 
          },
          { 
            id: "30_2_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة التخصصات المختلفة", requirement: "التأكد من الإلمام بأساسيات كل تخصص." },
              { text: "راحة", requirement: "استراحة." }
            ], 
            resources: [],
            tip: "أنت الآن معالج ذو رؤية واسعة." 
          }
        ] 
      },
      { 
        title: "الأسبوع 3 — Clinical Reasoning and Decision Making", 
        days: [
          { 
            id: "30_3_1", 
            name: "حل الحالات المعقدة (Complex Case Solving)", 
            topic: "Mastery", 
            badge: "السبت", 
            tasks: [
              { text: "التعامل مع مريض يعاني من عدة إصابات", requirement: "كيف ترتب أولويات العلاج؟" },
              { text: "التفكير خارج الصندوق (Lateral Thinking)", requirement: "البحث عن أسباب غير واضحة للألم." }
            ], 
            resources: [
              { title: "Clinical Reasoning Mastery", url: "https://www.youtube.com/results?search_query=advanced+clinical+reasoning+physiotherapy" }
            ],
            tip: "العقل هو أقوى أداة علاجية تمتلكها." 
          },
          { 
            id: "30_3_2", 
            name: "إدارة التوقعات والنتائج (Outcome Management)", 
            topic: "Mastery", 
            badge: "الأحد", 
            tasks: [
              { text: "ماذا تفعل إذا لم يتحسن المريض؟", requirement: "دراسة متى يجب تغيير الخطة أو الإحالة لطبيب آخر." },
              { text: "الاحتفال بالنجاحات الصغيرة مع المريض", requirement: "أهمية الجانب النفسي في استكمال العلاج." }
            ], 
            resources: [
              { title: "Managing Patient Expectations", url: "https://www.youtube.com/results?search_query=managing+expectations+in+physiotherapy" }
            ],
            tip: "الصدق مع المريض يبني جسور الثقة." 
          },
          { 
            id: "30_3_3", 
            name: "العمل ضمن فريق متعدد التخصصات (MDT)", 
            topic: "Mastery", 
            badge: "الاثنين", 
            tasks: [
              { text: "كيف تتواصل مع الطبيب والجراح والمدرب", requirement: "لغة الحوار المهني المشترك." },
              { text: "دورك كمنسق لحالة المريض", requirement: "التأكد من أن الجميع يعمل لصالح المريض." }
            ], 
            resources: [
              { title: "Multidisciplinary Teamwork", url: "https://www.youtube.com/results?search_query=multidisciplinary+team+in+rehabilitation" }
            ],
            tip: "المريض هو مركز الدائرة، والجميع يدور حوله." 
          },
          { 
            id: "30_3_4", 
            name: "التحديث العلمي المستمر (Lifelong Learning)", 
            topic: "Mastery", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "كيف تظل خبيراً بعد انتهاء هذه الخطة؟", requirement: "وضع نظام للقراءة الأسبوعية للأبحاث الجديدة." },
              { text: "الاشتراك في المنصات العالمية", requirement: "مثل Physiopedia Plus أو منصات الكورسات المعتمدة." }
            ], 
            resources: [
              { title: "Lifelong Learning for PTs", url: "https://www.youtube.com/results?search_query=how+to+stay+updated+in+physiotherapy" }
            ],
            tip: "الخبير هو طالب علم لا يتوقف أبداً." 
          },
          { 
            id: "30_3_5", 
            name: "الابتكار في العلاج الطبيعي", 
            topic: "Mastery", 
            badge: "الأربعاء", 
            tasks: [
              { text: "استخدام التكنولوجيا الحديثة (VR, Robotics)", requirement: "فهم مستقبل المهنة وأين يتجه." },
              { text: "تطوير تكنيكاتك الخاصة بناءً على العلم", requirement: "كيف تضع بصمتك الخاصة في العلاج." }
            ], 
            resources: [
              { title: "Future of Physiotherapy", url: "https://www.youtube.com/results?search_query=future+of+physiotherapy+technology" }
            ],
            tip: "كن أنت من يصنع المستقبل، لا من ينتظره." 
          },
          { 
            id: "30_3_6", 
            name: "تطبيق عملي", 
            topic: "Practical", 
            badge: "الخميس", 
            tasks: [
              { text: "كتابة مقال علمي مبسط عن رحلتك التعليمية", requirement: "مشاركة ما تعلمته مع زملائك." },
              { text: "عمل 'مينتورينج' لمعالج أحدث منك", requirement: "التدرب على نقل الخبرة." }
            ], 
            resources: [
              { title: "Clinical Reasoning Practical", url: "https://www.youtube.com/results?search_query=clinical+reasoning+case+discussions" }
            ],
            tip: "أنت الآن مرجع لغيرك، فكن أهلاً للمسؤولية." 
          },
          { 
            id: "30_3_7", 
            name: "مراجعة وراحة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "مراجعة مهارات التفكير السريري", requirement: "التأكد من نضج عقليتك كخبير." },
              { text: "راحة", requirement: "استعد للأسبوع الأخير.. أسبوع التخرج!" }
            ], 
            resources: [],
            tip: "العقل الناضج هو سر النجاح المستمر." 
          }
        ] 
      },
      { 
        title: "الأسبوع 4 — Graduation and Future Vision", 
        days: [
          { 
            id: "30_4_1", 
            name: "تجميع الملف المهني (Portfolio)", 
            topic: "Mastery", 
            badge: "السبت", 
            tasks: [
              { text: "جمع كل الشهادات والإنجازات في ملف واحد", requirement: "تنظيم الملف ليكون جاهزاً للتقديم لأي وظيفة مرموقة." },
              { text: "كتابة فلسفتك الخاصة في العلاج", requirement: "ما الذي تؤمن به كمعالج خبير؟" }
            ], 
            resources: [
              { title: "Building a Professional Portfolio", url: "https://www.youtube.com/results?search_query=physiotherapy+professional+portfolio+examples" }
            ],
            tip: "ملفك هو مرآة مجهودك في السنتين ونصف الماضية." 
          },
          { 
            id: "30_4_2", 
            name: "الاستعداد للمقابلات والمناصب القيادية", 
            topic: "Mastery", 
            badge: "الأحد", 
            tasks: [
              { text: "التدرب على أسئلة المقابلات الفنية المعقدة", requirement: "كيف تظهر خبرتك في دقائق معدودة." },
              { text: "مهارات التفاوض على الراتب والمميزات", requirement: "اعرف قيمتك في السوق وطالب بها." }
            ], 
            resources: [
              { title: "Interview Tips for Senior PTs", url: "https://www.youtube.com/results?search_query=physiotherapy+job+interview+tips" }
            ],
            tip: "الثقة بالنفس تأتي من العلم الغزير." 
          },
          { 
            id: "30_4_3", 
            name: "رؤية المستقبل (Vision 2030)", 
            topic: "Mastery", 
            badge: "الاثنين", 
            tasks: [
              { text: "أين ترى نفسك بعد 5 سنوات من الآن؟", requirement: "كتابة خطة عمل واضحة للمرحلة القادمة." },
              { text: "تحديد التخصص الدقيق الذي ستبرع فيه", requirement: "كن الرقم واحد في تخصصك." }
            ], 
            resources: [
              { title: "Future Vision Planning", url: "https://www.youtube.com/results?search_query=strategic+planning+for+healthcare+professionals" }
            ],
            tip: "السماء هي حدود طموحك." 
          },
          { 
            id: "30_4_4", 
            name: "الاحتفال بالإنجاز", 
            topic: "Mastery", 
            badge: "الثلاثاء", 
            tasks: [
              { text: "مراجعة سريعة لكل ما تم إنجازه", requirement: "الفخر بالالتزام والاستمرارية." },
              { text: "مكافأة نفسك على هذا المجهود العظيم", requirement: "أنت تستحق الأفضل." }
            ], 
            resources: [],
            tip: "الرحلة كانت طويلة، لكن الوصول ممتع." 
          },
          { 
            id: "30_4_5", 
            name: "رسالة للأجيال القادمة", 
            topic: "Mastery", 
            badge: "الأربعاء", 
            tasks: [
              { text: "كتابة نصيحة لزميل يبدأ اليوم نفس الرحلة", requirement: "ما هي أهم الدروس التي تعلمتها؟" },
              { text: "نشر المعرفة والوعي", requirement: "كن منارة لغيرك." }
            ], 
            resources: [],
            tip: "خير الناس أنفعهم للناس." 
          },
          { 
            id: "30_4_6", 
            name: "يوم التخرج (Graduation Day)", 
            topic: "Mastery", 
            badge: "الخميس", 
            tasks: [
              { text: "أنت الآن PhysioMaster خبير!", requirement: "لقد أتممت 30 شهراً من العلم والعمل." },
              { text: "ابدأ رحلتك الحقيقية في عالم الاحتراف", requirement: "العالم ينتظر لمستك الشافية." }
            ], 
            resources: [],
            tip: "مبروك يا دكتور، أنت الآن فخر لمهنتك!" 
          },
          { 
            id: "30_4_7", 
            name: "بداية جديدة", 
            topic: "Review", 
            badge: "الجمعة", 
            tasks: [
              { text: "راحة أبدية من هذه الخطة", requirement: "استمتع بثمار تعبك." },
              { text: "انطلق!", requirement: "بالتوفيق في حياتك المهنية." }
            ], 
            resources: [],
            tip: "النهاية هي مجرد بداية لقصة نجاح أكبر." 
          }
        ] 
      }
    ] 
  }
];
