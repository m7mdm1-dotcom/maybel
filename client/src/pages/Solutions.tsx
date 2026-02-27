import { GlobalCTA } from "@/components/GlobalCTA";
import { Zap, ShieldCheck, TrendingUp, Users, Target, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";

import solutionsHero from "../assets/images/solutions-hero.png";

const whyItems: Record<string, { title: string; desc: string }[]> = {
  en: [
    { title: "Faster Speed-to-Lead", desc: "Instantly respond to inquiries across all channels, capturing prospects while their intent is highest." },
    { title: "Structured Sales Process", desc: "Eliminate guesswork with clear, defined pipeline stages that guide your reps to close." },
    { title: "Fully Automated Follow-Up", desc: "Never rely on manual memory. Systems nurture your prospects 24/7 until they are ready to buy." },
    { title: "No More Lost Leads", desc: "Every lead is tracked, tagged, and actively managed. Nothing falls through the cracks." },
    { title: "Unified Messaging Inbox", desc: "Combine WhatsApp, SMS, Email, and social DMs into one interface for seamless team collaboration." },
    { title: "Clear Revenue Tracking", desc: "Real-time dashboards show exactly where your money comes from and where it's getting stuck." },
  ],
  ar: [
    { title: "سرعة أعلى في الوصول للعملاء", desc: "الرد فوراً على الاستفسارات عبر جميع القنوات، التقاط العملاء المحتملين بينما نيتهم في أعلى مستوياتها." },
    { title: "عملية مبيعات منظمة", desc: "إزالة التخمين بمراحل خط أنابيب واضحة ومحددة ترشد مندوبيك للإغلاق." },
    { title: "متابعة مؤتمتة بالكامل", desc: "لا تعتمد على الذاكرة اليدوية. الأنظمة ترعى عملاءك المحتملين على مدار الساعة حتى يكونوا جاهزين للشراء." },
    { title: "لا مزيد من العملاء المفقودين", desc: "كل عميل يتم تتبعه ووسمه وإدارته بنشاط. لا شيء يفلت من بين الشقوق." },
    { title: "صندوق بريد رسائل موحد", desc: "دمج واتساب و SMS والبريد ورسائل وسائل التواصل في واجهة واحدة للتعاون السلس بين الفريق." },
    { title: "تتبع واضح للإيرادات", desc: "لوحات معلومات فورية تعرض بالضبط من أين تأتي أموالك وأين تتعطل." },
  ],
};

const industries: Record<string, { title: string; desc: string }[]> = {
  en: [
    { title: "Agencies", desc: "Manage client pipelines, automate onboarding, and prove ROI with transparent dashboards." },
    { title: "Service Businesses", desc: "Streamline booking, automate review requests, and send automated quote follow-ups." },
    { title: "Clinics & Healthcare", desc: "Reduce no-shows with smart SMS reminders and securely manage patient intake forms." },
    { title: "Real Estate", desc: "Instantly reply to property inquiries and automate long-term nurture campaigns for buyers." },
    { title: "Education & Coaching", desc: "Automate student enrollment, manage class schedules, and handle subscription payments." },
    { title: "Multi-location Businesses", desc: "Centralize data while maintaining localized permissions and routing leads geographically." },
  ],
  ar: [
    { title: "الوكالات", desc: "إدارة خطوط أنابيب العملاء، أتمتة الإعداد، وإثبات العائد على الاستثمار بلوحات معلومات شفافة." },
    { title: "شركات الخدمات", desc: "تبسيط الحجز، أتمتة طلبات المراجعة، وإرسال متابعات عروض الأسعار الآلية." },
    { title: "العيادات والرعاية الصحية", desc: "تقليل عدم الحضور بتذكيرات SMS ذكية وإدارة نماذج استقبال المرضى بأمان." },
    { title: "العقارات", desc: "الرد فوراً على استفسارات العقارات وأتمتة حملات الرعاية طويلة المدى للمشترين." },
    { title: "التعليم والتدريب", desc: "أتمتة تسجيل الطلاب، إدارة جداول الفصول، والتعامل مع مدفوعات الاشتراكات." },
    { title: "الشركات متعددة المواقع", desc: "مركزة البيانات مع الحفاظ على الصلاحيات المحلية وتوجيه العملاء جغرافياً." },
  ],
};

const whyIcons = [Zap, ShieldCheck, Rocket, Target, Users, TrendingUp];

export default function Solutions() {
  const { t, lang } = useI18n();

  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-100/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative container mx-auto px-4 md:px-8 pt-16 pb-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {t("solutions.badge")}
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            {t("solutions.title1")} <br />
            <span className="text-gradient drop-shadow-sm">{t("solutions.titleHighlight")}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            {t("solutions.desc")}
          </p>
        </div>
        
        <div className="flex-1 relative w-full aspect-video md:aspect-auto md:h-[500px] animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent rounded-full blur-3xl z-0" />
          <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-2xl bg-white">
            <img 
              src={solutionsHero} 
              alt="MAYBEL Solutions" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t("solutions.why.title")}</h2>
            <p className="text-xl text-slate-600">{t("solutions.why.desc")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyItems[lang].map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t("solutions.industry.title")}</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {t("solutions.industry.desc")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {industries[lang].map((industry, i) => (
                <div key={i} className="flex flex-col p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-violet-200 transition-colors group">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{industry.title}</h3>
                  <p className="text-slate-600 mb-6 flex-1">{industry.desc}</p>
                  <Link href="/contact">
                    <span className="inline-flex items-center text-primary font-semibold hover:underline cursor-pointer">
                      {t("solutions.industry.cta")} <ArrowRight className="ms-2 h-4 w-4" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GlobalCTA />
    </div>
  );
}