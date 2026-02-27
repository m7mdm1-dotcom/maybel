import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Lang = "en" | "ar";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("maybel-lang") as Lang) || "en";
    }
    return "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("maybel-lang", l);
  };

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    const val = translations[lang]?.[key];
    return val ?? translations["en"]?.[key] ?? key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </I18nContext.Provider>
  );
}

const translations: Record<string, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.platform": "Platform",
    "nav.solutions": "Solutions",
    "nav.pricing": "Pricing",
    "nav.integrations": "Integrations",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.bookDemo": "Book a Demo",

    "home.badge": "Done-For-You Growth Systems",
    "home.title1": "We Build ",
    "home.titleHighlight": "Revenue Engines",
    "home.title2": ".\nNot Just Software.",
    "home.desc": "MAYBEL is a fully managed all-in-one CRM and automation platform. We design, structure, automate, and optimize your entire sales system so you can focus on closing deals.",
    "home.bookDemo": "Book a Demo",
    "home.seePlans": "See Plans",
    "home.trial": "14-day free trial",
    "home.noFees": "No setup fees",
    "home.cancel": "Cancel anytime",

    "home.connected.title": "One platform. Everything connected.",
    "home.connected.desc": "Stop jumping between disconnected tools. MAYBEL centralizes everything into one intelligent system that runs 24/7.",
    "home.connected.tagline": "We combine world-class technology with hands-on implementation and automation strategy.",

    "home.process.badge": "Our Process",
    "home.process.title": "We don't just sell software.\nWe build it for you.",
    "home.process.desc": "Most platforms give you a login and leave you to figure it out. We do the heavy lifting so your team can start selling on day one.",
    "home.process.step1.title": "Map & Architect",
    "home.process.step1.desc": "We analyze your current sales process and design a custom pipeline architecture tailored to your team.",
    "home.process.step2.title": "Build & Integrate",
    "home.process.step2.desc": "We configure the CRM, connect your lead sources, and set up all necessary integrations.",
    "home.process.step3.title": "Automate",
    "home.process.step3.desc": "We build custom workflows for follow-ups, messaging, and internal alerts so nothing falls through the cracks.",
    "home.process.step4.title": "Launch & Train",
    "home.process.step4.desc": "We hand over a fully functioning system and train your team to use it effectively from day one.",

    "home.features.title": "Everything your business needs to scale",
    "home.features.desc": "All features included natively. No need for expensive third-party add-ons.",
    "home.features.crm": "Custom CRM Setup",
    "home.features.crmDesc": "Pipelines tailored to your exact sales process. Unlimited contacts and custom fields.",
    "home.features.messaging": "Omnichannel Messaging",
    "home.features.messagingDesc": "WhatsApp API, SMS, Email, and social media DMs centralized in one unified inbox.",
    "home.features.automation": "Advanced Automation",
    "home.features.automationDesc": "Complex logic, delayed follow-ups, auto-stage movement, and missed-call text back.",
    "home.features.funnels": "High-Converting Funnels",
    "home.features.funnelsDesc": "Landing pages, forms, and surveys designed to capture and qualify leads automatically.",
    "home.features.booking": "Smart Booking",
    "home.features.bookingDesc": "Round-robin scheduling, Google/Outlook sync, and automated no-show sequences.",
    "home.features.payments": "Frictionless Payments",
    "home.features.paymentsDesc": "Invoicing, subscriptions, Stripe integration, and automated payment reminders.",
    "home.features.access": "Role-Based Access",
    "home.features.accessDesc": "Granular permissions so your team only sees exactly what they need to see.",
    "home.features.routing": "Smart Lead Routing",
    "home.features.routingDesc": "Automatically assign leads to the right sales rep based on performance or rules.",
    "home.features.mobile": "Mobile App Access",
    "home.features.mobileDesc": "Manage your business, reply to leads, and move deals forward from anywhere.",

    "home.dashboard.title": "See exactly where your revenue comes from.",
    "home.dashboard.item1": "Track Lead Sources & Campaign ROI",
    "home.dashboard.item2": "Monitor Sales Team KPIs",
    "home.dashboard.item3": "View Pipeline Value & Conversion Rates",
    "home.dashboard.cta": "View All Features",

    "cta.title": "Ready to build your automated growth infrastructure?",
    "cta.desc": "Book a Demo and let MAYBEL structure your business.",
    "cta.trial": "Start with a 14-day free trial — no commitment required.",
    "cta.button": "Book a Demo",

    "contact.title": "Let's build your growth engine.",
    "contact.desc": "Whether you need a complete CRM overhaul or automated WhatsApp workflows, our team is ready to design a system tailored to your exact needs.",
    "contact.email.title": "Email Us",
    "contact.email.desc": "Our friendly team is here to help.",
    "contact.global.title": "Global Presence",
    "contact.global.desc": "Supporting businesses remotely and efficiently, with a strong focus on high-speed markets.",
    "contact.fast.title": "Fast Response",
    "contact.fast.desc": "We practice what we preach. Expect a speedy reply to your inquiry.",
    "contact.calendar.heading": "Book your discovery call",
    "contact.calendar.subtitle": "Select your preferred time below and our team will prepare everything in advance.",
    "contact.calendar.bullet1": "30-minute focused strategy session",
    "contact.calendar.bullet2": "Tailored roadmap for your business",
    "contact.calendar.bullet3": "Zero obligation",

    "pricing.title": "Pricing",
    "pricing.subtitle": "Annual discount available.",
    "pricing.trial": "All plans include a 14-day free trial. No credit card required.",
    "pricing.cta": "Start 14-Day Free Trial",
    "pricing.popular": "Most Popular",
    "pricing.mo": "/mo",

    "about.badge": "About Us",
    "about.title1": "Building the infrastructure for ",
    "about.titleHighlight": "modern business growth",
    "about.desc": "We started MAYBEL because we saw too many great businesses struggling not with their product, but with chaotic, disconnected systems.",
    "about.problem.title": "The Problem with Modern SaaS",
    "about.problem.p1": "Most companies today suffer from \"software fatigue\". You have one tool for your CRM, another for email marketing, a different one for WhatsApp, and Zapier duct-taping them all together.",
    "about.problem.p2": "When these systems break, leads fall through the cracks, sales reps lose context, and revenue drops. Worse, most software companies just give you a login and expect you to build the architecture yourself.",
    "about.solution.title": "The MAYBEL Solution",
    "about.solution.unified": "One Unified Platform",
    "about.solution.unifiedDesc": "Every tool your sales and marketing team needs, natively built into one seamless dashboard.",
    "about.solution.done": "Done-For-You Setup",
    "about.solution.doneDesc": "We don't leave you alone. We architect, build, and optimize the system for your exact workflows.",
    "about.philosophy.title": "Our Philosophy",
    "about.philosophy.quote": "\"Growth shouldn't be chaotic. It should be structured, measurable, and highly automated.\"",
    "about.philosophy.speed": "Speed is Everything",
    "about.philosophy.speedDesc": "In high-speed markets, the business that responds first wins. Automation guarantees speed.",
    "about.philosophy.humanize": "Humanize the Close",
    "about.philosophy.humanizeDesc": "Automate the boring follow-ups so your sales team can focus on actual human conversations.",
    "about.philosophy.simplicity": "Simplicity Scales",
    "about.philosophy.simplicityDesc": "Complex systems break. We design elegant, simple workflows that scale as your business grows.",

    "solutions.badge": "Tailored For Your Industry",
    "solutions.title1": "Solutions built for ",
    "solutions.titleHighlight": "rapid growth.",
    "solutions.desc": "MAYBEL adapts to your structure — not the opposite. Discover how our fully managed infrastructure solves the exact challenges holding your business back.",
    "solutions.why.title": "Why Businesses Choose MAYBEL",
    "solutions.why.desc": "The core advantages of letting us build your automated revenue engine.",
    "solutions.industry.title": "Built For Your Industry",
    "solutions.industry.desc": "We design custom architectures based on the unique demands and customer journeys of your specific niche.",
    "solutions.industry.cta": "See tailored solution",

    "platform.badge": "Platform Overview",
    "platform.title1": "One platform.",
    "platform.titleHighlight": "Infinite possibilities",
    "platform.desc": "MAYBEL connects every stage of your customer journey into one automated ecosystem. Everything you need, nothing you don't.",
    "platform.core.title": "Core Platform Features",
    "platform.core.desc": "The essential tools that power your revenue engine.",
    "platform.automation.badge": "Automation",
    "platform.automation.title": "Automate everything. Miss nothing.",
    "platform.automation.desc": "From first touch to closed deal — build workflows that run your business 24/7 without manual effort.",
    "platform.advanced.title": "Advanced Capabilities",
    "platform.advanced.desc": "Go beyond the basics with enterprise-grade features built for scale.",
    "platform.more.title": "Even More Built-In",
    "platform.more.desc": "Everything else you'd normally pay extra for comes included.",

    "integrations.title": "API Ready Architecture.",
    "integrations.desc": "Connect MAYBEL with the tools you already use to build a seamless data flow across your entire business.",

    "footer.tagline1": "MAYBEL was created for founders who want structure instead of chaos.",
    "footer.tagline2": "In high-speed markets, businesses need systems — not disconnected tools.",
    "footer.tagline3": "We don't sell tools. We build growth infrastructure.",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.aboutUs": "About Us",
    "footer.platform": "Platform",
    "footer.pricing": "Pricing",
    "footer.blog": "Blog",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact",
    "footer.rights": "MAYBEL. All rights reserved.",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.platform": "المنصة",
    "nav.solutions": "الحلول",
    "nav.pricing": "الأسعار",
    "nav.integrations": "التكاملات",
    "nav.blog": "المدونة",
    "nav.about": "من نحن",
    "nav.contact": "تواصل معنا",
    "nav.login": "تسجيل الدخول",
    "nav.bookDemo": "احجز عرض تجريبي",

    "home.badge": "أنظمة نمو جاهزة لك",
    "home.title1": "نبني ",
    "home.titleHighlight": "محركات إيرادات",
    "home.title2": ".\nوليس مجرد برامج.",
    "home.desc": "MAYBEL هي منصة CRM وأتمتة متكاملة ومُدارة بالكامل. نصمم ونهيكل ونؤتمت ونحسّن نظام المبيعات بالكامل حتى تتمكن من التركيز على إتمام الصفقات.",
    "home.bookDemo": "احجز عرض تجريبي",
    "home.seePlans": "شاهد الخطط",
    "home.trial": "تجربة مجانية 14 يوم",
    "home.noFees": "بدون رسوم إعداد",
    "home.cancel": "إلغاء في أي وقت",

    "home.connected.title": "منصة واحدة. كل شيء متصل.",
    "home.connected.desc": "توقف عن التنقل بين الأدوات المنفصلة. MAYBEL يجمع كل شيء في نظام ذكي واحد يعمل على مدار الساعة.",
    "home.connected.tagline": "نجمع بين التكنولوجيا العالمية والتنفيذ العملي واستراتيجية الأتمتة.",

    "home.process.badge": "عمليتنا",
    "home.process.title": "نحن لا نبيع برامج فقط.\nنبنيها من أجلك.",
    "home.process.desc": "معظم المنصات تعطيك تسجيل دخول وتتركك تكتشف بنفسك. نحن نقوم بالعمل الشاق حتى يتمكن فريقك من البيع من اليوم الأول.",
    "home.process.step1.title": "التخطيط والهيكلة",
    "home.process.step1.desc": "نحلل عملية المبيعات الحالية ونصمم هيكل pipeline مخصص لفريقك.",
    "home.process.step2.title": "البناء والتكامل",
    "home.process.step2.desc": "نقوم بتهيئة CRM وربط مصادر العملاء المحتملين وإعداد جميع التكاملات اللازمة.",
    "home.process.step3.title": "الأتمتة",
    "home.process.step3.desc": "نبني سير عمل مخصص للمتابعات والرسائل والتنبيهات الداخلية حتى لا يفلت أي شيء.",
    "home.process.step4.title": "الإطلاق والتدريب",
    "home.process.step4.desc": "نسلم نظاماً يعمل بالكامل وندرب فريقك على استخدامه بفعالية من اليوم الأول.",

    "home.features.title": "كل ما يحتاجه عملك للنمو",
    "home.features.desc": "جميع الميزات مدمجة أصلاً. لا حاجة لإضافات خارجية مكلفة.",
    "home.features.crm": "إعداد CRM مخصص",
    "home.features.crmDesc": "خطوط أنابيب مصممة لعملية المبيعات الخاصة بك. جهات اتصال غير محدودة وحقول مخصصة.",
    "home.features.messaging": "رسائل متعددة القنوات",
    "home.features.messagingDesc": "واتساب API، رسائل SMS، بريد إلكتروني، ورسائل وسائل التواصل في صندوق بريد موحد.",
    "home.features.automation": "أتمتة متقدمة",
    "home.features.automationDesc": "منطق معقد، متابعات مؤجلة، نقل تلقائي للمراحل، ورد نصي على المكالمات الفائتة.",
    "home.features.funnels": "قمع تحويل عالي الأداء",
    "home.features.funnelsDesc": "صفحات هبوط ونماذج واستبيانات مصممة لالتقاط وتأهيل العملاء تلقائياً.",
    "home.features.booking": "حجز ذكي",
    "home.features.bookingDesc": "جدولة round-robin، مزامنة Google/Outlook، وتسلسلات عدم الحضور التلقائية.",
    "home.features.payments": "مدفوعات سلسة",
    "home.features.paymentsDesc": "فواتير واشتراكات وتكامل Stripe وتذكيرات دفع تلقائية.",
    "home.features.access": "وصول قائم على الأدوار",
    "home.features.accessDesc": "صلاحيات دقيقة حتى يرى فريقك فقط ما يحتاجه بالضبط.",
    "home.features.routing": "توجيه ذكي للعملاء",
    "home.features.routingDesc": "تعيين العملاء تلقائياً لمندوب المبيعات المناسب بناءً على الأداء أو القواعد.",
    "home.features.mobile": "تطبيق الجوال",
    "home.features.mobileDesc": "أدر عملك ورد على العملاء وحرّك الصفقات من أي مكان.",

    "home.dashboard.title": "شاهد بالضبط من أين تأتي إيراداتك.",
    "home.dashboard.item1": "تتبع مصادر العملاء وعائد الحملات",
    "home.dashboard.item2": "مراقبة مؤشرات أداء فريق المبيعات",
    "home.dashboard.item3": "عرض قيمة الأنبوب ومعدلات التحويل",
    "home.dashboard.cta": "عرض جميع الميزات",

    "cta.title": "مستعد لبناء بنيتك التحتية للنمو الآلي؟",
    "cta.desc": "احجز عرضاً تجريبياً ودع MAYBEL يهيكل عملك.",
    "cta.trial": "ابدأ بتجربة مجانية لمدة 14 يوماً — بدون التزام.",
    "cta.button": "احجز عرض تجريبي",

    "contact.title": "لنبني محرك نموك.",
    "contact.desc": "سواء كنت بحاجة إلى إعادة هيكلة CRM كاملة أو سير عمل واتساب مؤتمت، فريقنا جاهز لتصميم نظام مخصص لاحتياجاتك.",
    "contact.email.title": "راسلنا",
    "contact.email.desc": "فريقنا الودود هنا للمساعدة.",
    "contact.global.title": "حضور عالمي",
    "contact.global.desc": "ندعم الشركات عن بعد وبكفاءة، مع تركيز قوي على الأسواق سريعة النمو.",
    "contact.fast.title": "رد سريع",
    "contact.fast.desc": "نطبق ما نعلّمه. توقع رداً سريعاً على استفسارك.",
    "contact.calendar.heading": "احجز مكالمة الاستكشاف الخاصة بك",
    "contact.calendar.subtitle": "اختر الوقت المناسب لك أدناه وسيقوم فريقنا بتجهيز كل شيء مسبقاً.",
    "contact.calendar.bullet1": "جلسة استراتيجية مركزة لمدة 30 دقيقة",
    "contact.calendar.bullet2": "خارطة طريق مصممة لعملك",
    "contact.calendar.bullet3": "بدون أي التزام",

    "pricing.title": "الأسعار",
    "pricing.subtitle": "خصم سنوي متاح.",
    "pricing.trial": "جميع الخطط تشمل تجربة مجانية لمدة 14 يوماً. لا حاجة لبطاقة ائتمان.",
    "pricing.cta": "ابدأ تجربة 14 يوم مجانية",
    "pricing.popular": "الأكثر شعبية",
    "pricing.mo": "/شهرياً",

    "about.badge": "من نحن",
    "about.title1": "نبني البنية التحتية لـ",
    "about.titleHighlight": "نمو الأعمال الحديثة",
    "about.desc": "بدأنا MAYBEL لأننا رأينا الكثير من الشركات الرائعة تعاني ليس من منتجاتها، بل من أنظمة فوضوية ومنفصلة.",
    "about.problem.title": "مشكلة البرمجيات الحديثة",
    "about.problem.p1": "معظم الشركات اليوم تعاني من \"إرهاق البرمجيات\". أداة لـ CRM، وأخرى للتسويق بالبريد، وأخرى للواتساب، و Zapier يربطها ببعض.",
    "about.problem.p2": "عندما تتعطل هذه الأنظمة، يفلت العملاء، يفقد المندوبون السياق، وتنخفض الإيرادات. والأسوأ، معظم شركات البرمجيات تعطيك تسجيل دخول وتتوقع منك بناء الهيكل بنفسك.",
    "about.solution.title": "حل MAYBEL",
    "about.solution.unified": "منصة موحدة واحدة",
    "about.solution.unifiedDesc": "كل أداة يحتاجها فريق المبيعات والتسويق، مدمجة أصلاً في لوحة تحكم واحدة سلسة.",
    "about.solution.done": "إعداد جاهز لك",
    "about.solution.doneDesc": "لا نتركك وحدك. نصمم ونبني ونحسّن النظام لسير عملك بالضبط.",
    "about.philosophy.title": "فلسفتنا",
    "about.philosophy.quote": "\"النمو لا يجب أن يكون فوضوياً. يجب أن يكون منظماً وقابلاً للقياس ومؤتمتاً بدرجة عالية.\"",
    "about.philosophy.speed": "السرعة هي كل شيء",
    "about.philosophy.speedDesc": "في الأسواق السريعة، الشركة التي ترد أولاً تفوز. الأتمتة تضمن السرعة.",
    "about.philosophy.humanize": "إنسانية الإغلاق",
    "about.philosophy.humanizeDesc": "أتمتة المتابعات المملة حتى يركز فريق المبيعات على المحادثات الإنسانية الحقيقية.",
    "about.philosophy.simplicity": "البساطة تتوسع",
    "about.philosophy.simplicityDesc": "الأنظمة المعقدة تتعطل. نصمم سير عمل بسيط وأنيق يتوسع مع نمو عملك.",

    "solutions.badge": "مصممة لصناعتك",
    "solutions.title1": "حلول مصممة لـ",
    "solutions.titleHighlight": "النمو السريع.",
    "solutions.desc": "MAYBEL يتكيف مع هيكلك — وليس العكس. اكتشف كيف تحل بنيتنا المُدارة بالكامل التحديات التي تعيق عملك.",
    "solutions.why.title": "لماذا تختار الشركات MAYBEL",
    "solutions.why.desc": "المزايا الأساسية لتركنا نبني محرك إيراداتك الآلي.",
    "solutions.industry.title": "مصممة لصناعتك",
    "solutions.industry.desc": "نصمم هياكل مخصصة بناءً على المتطلبات الفريدة ورحلات العملاء لقطاعك المحدد.",
    "solutions.industry.cta": "شاهد الحل المخصص",

    "platform.badge": "نظرة عامة على المنصة",
    "platform.title1": "منصة واحدة.",
    "platform.titleHighlight": "إمكانيات لا نهائية",
    "platform.desc": "MAYBEL يربط كل مرحلة من رحلة عملائك في نظام بيئي آلي واحد. كل ما تحتاجه، لا شيء لا تحتاجه.",
    "platform.core.title": "ميزات المنصة الأساسية",
    "platform.core.desc": "الأدوات الأساسية التي تشغل محرك إيراداتك.",
    "platform.automation.badge": "الأتمتة",
    "platform.automation.title": "أتمت كل شيء. لا تفوّت شيئاً.",
    "platform.automation.desc": "من أول تواصل إلى إتمام الصفقة — ابنِ سير عمل يدير عملك على مدار الساعة بدون جهد يدوي.",
    "platform.advanced.title": "قدرات متقدمة",
    "platform.advanced.desc": "تجاوز الأساسيات مع ميزات بمستوى المؤسسات مصممة للتوسع.",
    "platform.more.title": "المزيد مدمج",
    "platform.more.desc": "كل شيء آخر ستدفع عادة إضافياً مقابله يأتي مشمولاً.",

    "integrations.title": "بنية جاهزة للربط.",
    "integrations.desc": "اربط MAYBEL بالأدوات التي تستخدمها بالفعل لبناء تدفق بيانات سلس عبر عملك بالكامل.",

    "footer.tagline1": "MAYBEL صُنع للمؤسسين الذين يريدون هيكلة بدلاً من الفوضى.",
    "footer.tagline2": "في الأسواق السريعة، تحتاج الشركات إلى أنظمة — وليس أدوات منفصلة.",
    "footer.tagline3": "لا نبيع أدوات. نبني بنية تحتية للنمو.",
    "footer.company": "الشركة",
    "footer.legal": "قانوني",
    "footer.aboutUs": "من نحن",
    "footer.platform": "المنصة",
    "footer.pricing": "الأسعار",
    "footer.blog": "المدونة",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.contact": "تواصل معنا",
    "footer.rights": "MAYBEL. جميع الحقوق محفوظة.",
  },
};