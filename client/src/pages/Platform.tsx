import { GlobalCTA } from "@/components/GlobalCTA";
import { Layers, Zap, MessageSquare, Target, Calendar, CreditCard, Star, LineChart, Settings, Phone, Globe, Users, FileText, Bell, Shield, Smartphone, BarChart3, Workflow } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const coreFeatures: Record<string, { title: string; desc: string }[]> = {
  en: [
    { title: "CRM & Pipeline Management", desc: "Unlimited contacts, custom fields, multiple pipelines, drag & drop stages, task automation, lead scoring, round-robin distribution, source attribution." },
    { title: "Automation Engine", desc: "Trigger-based workflows, If/Else logic, time delays, conditional sequences, missed call auto-reply, reactivation campaigns, webhooks, and API actions. Runs 24/7." },
    { title: "Unified Messaging", desc: "WhatsApp integration, SMS two-way, Email campaigns, unified inbox, template library, personalization tokens, conversation assignment." },
    { title: "Funnels & Lead Capture", desc: "Landing page builder, funnel builder, forms, surveys, lead magnets, custom domains, pixel tracking, mobile optimization." },
    { title: "Booking & Scheduling", desc: "Online calendar, Google & Outlook sync, round-robin booking, confirmation flows, SMS reminders, reschedule automation." },
    { title: "Payments & Invoicing", desc: "Stripe subscriptions, one-time payments, payment links, invoice automation, failed payment reminders, revenue sync to CRM." },
    { title: "Reputation Management", desc: "Automated review requests, reputation pipeline, feedback filtering, reactivation flows, referral campaigns, Google review links." },
    { title: "Reporting & Analytics", desc: "Lead source reports, funnel conversion rates, pipeline value, sales team KPIs, revenue dashboards, weekly auto-summaries." },
    { title: "Done-For-You Setup", desc: "Full system setup, workflow architecture, pipeline design, funnel configuration, template customization, optimization sessions." },
  ],
  ar: [
    { title: "إدارة CRM وخطوط الأنابيب", desc: "جهات اتصال غير محدودة، حقول مخصصة، خطوط أنابيب متعددة، مراحل بالسحب والإفلات، أتمتة المهام، تسجيل العملاء، توزيع round-robin، تتبع المصادر." },
    { title: "محرك الأتمتة", desc: "سير عمل قائم على المحفزات، منطق If/Else، تأخيرات زمنية، تسلسلات شرطية، رد تلقائي على المكالمات الفائتة، حملات إعادة التنشيط، webhooks وإجراءات API. يعمل 24/7." },
    { title: "الرسائل الموحدة", desc: "تكامل واتساب، رسائل SMS ثنائية الاتجاه، حملات بريد إلكتروني، صندوق بريد موحد، مكتبة قوالب، رموز التخصيص، تعيين المحادثات." },
    { title: "القمع والتقاط العملاء", desc: "منشئ صفحات الهبوط، منشئ القمع، نماذج، استبيانات، مغناطيس العملاء، نطاقات مخصصة، تتبع البكسل، تحسين الجوال." },
    { title: "الحجز والجدولة", desc: "تقويم عبر الإنترنت، مزامنة Google و Outlook، حجز round-robin، تدفقات التأكيد، تذكيرات SMS، أتمتة إعادة الجدولة." },
    { title: "المدفوعات والفواتير", desc: "اشتراكات Stripe، مدفوعات لمرة واحدة، روابط الدفع، أتمتة الفواتير، تذكيرات الدفع الفاشل، مزامنة الإيرادات مع CRM." },
    { title: "إدارة السمعة", desc: "طلبات مراجعة آلية، خط أنابيب السمعة، تصفية التعليقات، تدفقات إعادة التنشيط، حملات الإحالة، روابط مراجعة Google." },
    { title: "التقارير والتحليلات", desc: "تقارير مصادر العملاء، معدلات تحويل القمع، قيمة خط الأنابيب، مؤشرات أداء فريق المبيعات، لوحات الإيرادات، ملخصات أسبوعية تلقائية." },
    { title: "إعداد جاهز لك", desc: "إعداد كامل للنظام، هيكلة سير العمل، تصميم خط الأنابيب، تكوين القمع، تخصيص القوالب، جلسات التحسين." },
  ],
};

const automationFeatures: Record<string, { title: string; desc: string }[]> = {
  en: [
    { title: "Trigger-Based Workflows", desc: "Automatically launch sequences when a lead fills a form, books a call, misses an appointment, or reaches a pipeline stage." },
    { title: "If/Else Conditional Logic", desc: "Branch workflows based on lead behavior, tags, custom fields, or engagement — ensuring each contact gets the right message." },
    { title: "Time Delays & Drip Sequences", desc: "Schedule follow-ups with precise timing. Wait minutes, hours, or days between each step in your sequence." },
    { title: "Missed Call Text-Back", desc: "Instantly send an automated SMS when a call is missed, keeping the lead engaged and opening a conversation." },
    { title: "Lead Reactivation Campaigns", desc: "Automatically re-engage cold leads after a set period with personalized messages to bring them back into the pipeline." },
    { title: "Auto Stage Movement", desc: "Move deals through your pipeline automatically based on actions taken — no manual drag and drop required." },
    { title: "Internal Notifications & Alerts", desc: "Notify your sales team via SMS, email, or push when a hot lead takes action or a deal needs attention." },
    { title: "Multi-Channel Sequences", desc: "Combine Email, SMS, WhatsApp, and voicemail drops into a single automated workflow for maximum reach." },
    { title: "Webhook & API Actions", desc: "Connect to any external system. Trigger custom actions, sync data, or push events to third-party platforms in real time." },
  ],
  ar: [
    { title: "سير عمل قائم على المحفزات", desc: "إطلاق تسلسلات تلقائياً عندما يملأ عميل نموذجاً، يحجز مكالمة، يفوت موعداً، أو يصل إلى مرحلة في خط الأنابيب." },
    { title: "منطق شرطي If/Else", desc: "تفريع سير العمل بناءً على سلوك العميل، العلامات، الحقول المخصصة، أو التفاعل — لضمان حصول كل جهة اتصال على الرسالة المناسبة." },
    { title: "تأخيرات زمنية وتسلسلات التنقيط", desc: "جدولة المتابعات بتوقيت دقيق. انتظر دقائق أو ساعات أو أيام بين كل خطوة في التسلسل." },
    { title: "رد نصي على المكالمات الفائتة", desc: "إرسال رسالة SMS آلية فوراً عند فقدان مكالمة، للحفاظ على تفاعل العميل وفتح محادثة." },
    { title: "حملات إعادة تنشيط العملاء", desc: "إعادة إشراك العملاء الباردين تلقائياً بعد فترة محددة برسائل مخصصة لإعادتهم إلى خط الأنابيب." },
    { title: "نقل تلقائي للمراحل", desc: "نقل الصفقات عبر خط الأنابيب تلقائياً بناءً على الإجراءات المتخذة — بدون سحب وإفلات يدوي." },
    { title: "إشعارات وتنبيهات داخلية", desc: "إخطار فريق المبيعات عبر SMS أو البريد أو الإشعارات عندما يتخذ عميل ساخن إجراءً أو تحتاج صفقة لاهتمام." },
    { title: "تسلسلات متعددة القنوات", desc: "دمج البريد و SMS والواتساب والرسائل الصوتية في سير عمل آلي واحد لأقصى وصول." },
    { title: "إجراءات Webhook و API", desc: "الاتصال بأي نظام خارجي. تشغيل إجراءات مخصصة، مزامنة البيانات، أو دفع الأحداث إلى منصات خارجية في الوقت الفعلي." },
  ],
};

const advancedFeatures: Record<string, { title: string; desc: string }[]> = {
  en: [
    { title: "Call Tracking & Recording", desc: "Track inbound and outbound calls, record conversations for quality assurance, auto-log call outcomes directly to the CRM pipeline." },
    { title: "Website & Funnel Builder", desc: "Full drag-and-drop website builder with custom domains, SSL, SEO settings, blog integration, and mobile-responsive templates." },
    { title: "Team & User Management", desc: "Role-based access control, team performance dashboards, activity logs, custom permissions per pipeline or feature." },
    { title: "Documents & Proposals", desc: "Create, send, and track proposals and contracts. E-signature support, template library, automated follow-ups on unsigned docs." },
    { title: "Smart Notifications", desc: "Real-time alerts for new leads, deal stage changes, missed calls, overdue tasks, and payment updates via push, SMS, or email." },
    { title: "Data Security & Compliance", desc: "GDPR-compliant data handling, encrypted storage, two-factor authentication, audit logs, and granular data export controls." },
    { title: "Mobile App", desc: "Full-featured mobile app for iOS and Android. Manage leads, respond to messages, update deals, and track performance on the go." },
    { title: "A/B Testing & Optimization", desc: "Split test landing pages, email subject lines, and automation sequences. Let data drive your decisions with built-in testing tools." },
    { title: "Workflow Templates", desc: "Pre-built automation templates for common use cases: onboarding, follow-ups, re-engagement, review requests, and appointment reminders." },
  ],
  ar: [
    { title: "تتبع وتسجيل المكالمات", desc: "تتبع المكالمات الواردة والصادرة، تسجيل المحادثات لضمان الجودة، تسجيل نتائج المكالمات تلقائياً في خط أنابيب CRM." },
    { title: "منشئ المواقع والقمع", desc: "منشئ مواقع بالسحب والإفلات مع نطاقات مخصصة، SSL، إعدادات SEO، تكامل المدونة، وقوالب متجاوبة مع الجوال." },
    { title: "إدارة الفريق والمستخدمين", desc: "التحكم في الوصول القائم على الأدوار، لوحات أداء الفريق، سجلات النشاط، صلاحيات مخصصة لكل خط أنابيب أو ميزة." },
    { title: "المستندات والعروض", desc: "إنشاء وإرسال وتتبع العروض والعقود. دعم التوقيع الإلكتروني، مكتبة قوالب، متابعات آلية للمستندات غير الموقعة." },
    { title: "إشعارات ذكية", desc: "تنبيهات فورية للعملاء الجدد، تغييرات مراحل الصفقات، المكالمات الفائتة، المهام المتأخرة، وتحديثات الدفع عبر الإشعارات أو SMS أو البريد." },
    { title: "أمان البيانات والامتثال", desc: "معالجة بيانات متوافقة مع GDPR، تخزين مشفر، مصادقة ثنائية، سجلات التدقيق، وضوابط تصدير البيانات الدقيقة." },
    { title: "تطبيق الجوال", desc: "تطبيق جوال كامل الميزات لـ iOS و Android. إدارة العملاء والرد على الرسائل وتحديث الصفقات وتتبع الأداء أثناء التنقل." },
    { title: "اختبار A/B والتحسين", desc: "اختبار صفحات الهبوط وعناوين البريد وتسلسلات الأتمتة. دع البيانات تقود قراراتك مع أدوات اختبار مدمجة." },
    { title: "قوالب سير العمل", desc: "قوالب أتمتة جاهزة لحالات الاستخدام الشائعة: الإعداد، المتابعات، إعادة التفاعل، طلبات المراجعة، وتذكيرات المواعيد." },
  ],
};

const bonusFeatures: Record<string, string[]> = {
  en: [
    "Email Marketing", "SMS Campaigns", "Social Media Planner", "Membership & Courses",
    "Affiliate Management", "Custom Domains", "Trigger Links", "Conditional Logic",
    "Lead Scoring", "Pipeline Automation", "Auto Lead Assignment", "Missed Call Text-Back",
    "Voicemail Drops", "Power Dialer", "Two-Way Texting", "Email Verification",
    "List Segmentation", "Tag Management", "Custom Webhooks", "API Access",
    "White-Label Options", "Multi-Location Support", "Custom Reporting", "Client Portal",
  ],
  ar: [
    "التسويق بالبريد الإلكتروني", "حملات SMS", "مخطط وسائل التواصل", "العضويات والدورات",
    "إدارة الشركاء", "نطاقات مخصصة", "روابط المحفزات", "المنطق الشرطي",
    "تسجيل العملاء", "أتمتة خط الأنابيب", "تعيين العملاء التلقائي", "رد نصي على المكالمات الفائتة",
    "رسائل صوتية", "طالب آلي", "رسائل نصية ثنائية الاتجاه", "التحقق من البريد",
    "تقسيم القوائم", "إدارة العلامات", "Webhooks مخصصة", "وصول API",
    "خيارات العلامة البيضاء", "دعم متعدد المواقع", "تقارير مخصصة", "بوابة العملاء",
  ],
};

const coreIcons = [Layers, Zap, MessageSquare, Target, Calendar, CreditCard, Star, LineChart, Settings];
const advancedIcons = [Phone, Globe, Users, FileText, Bell, Shield, Smartphone, BarChart3, Workflow];

export default function Platform() {
  const { t, lang } = useI18n();

  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">

      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/80 via-white to-white pointer-events-none" />
        <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center max-w-4xl py-20">
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-8">
            {t("platform.badge")}
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8">
            {t("platform.title1")}<br /><span className="text-gradient">{t("platform.titleHighlight")}</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {t("platform.desc")}
          </p>
        </div>
      </section>

      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t("platform.core.title")}</h2>
            <p className="text-lg text-slate-500">{t("platform.core.desc")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures[lang].map((feature, i) => {
              const Icon = coreIcons[i];
              return (
                <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-6">
              {t("platform.automation.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t("platform.automation.title")}</h2>
            <p className="text-lg text-slate-500">{t("platform.automation.desc")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationFeatures[lang].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t("platform.advanced.title")}</h2>
            <p className="text-lg text-slate-500">{t("platform.advanced.desc")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures[lang].map((feature, i) => {
              const Icon = advancedIcons[i];
              return (
                <div key={i} className="bg-white border border-slate-100 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t("platform.more.title")}</h2>
            <p className="text-lg text-slate-500">{t("platform.more.desc")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bonusFeatures[lang].map((item) => (
              <div key={item} className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group cursor-default">
                <p className="font-semibold text-sm text-slate-700 group-hover:text-white transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </div>
  );
}