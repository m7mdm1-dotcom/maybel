import { Link } from "wouter";
import { ArrowRight, CheckCircle2, BarChart3, MessageSquare, Zap, Target, Calendar, CreditCard, Settings, Shuffle, Smartphone, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlobalCTA } from "@/components/GlobalCTA";
import { useI18n } from "@/lib/i18n";

import dashboardImg from "../assets/images/dashboard-mockup.png";

const connectedItems: Record<string, string[]> = {
  en: ["Leads", "Sales", "Messaging", "Booking", "Payments", "Reporting"],
  ar: ["العملاء", "المبيعات", "الرسائل", "الحجوزات", "المدفوعات", "التقارير"],
};

export default function Home() {
  const { t, lang } = useI18n();

  const processSteps = [
    { step: "01", title: t("home.process.step1.title"), desc: t("home.process.step1.desc"), side: "left" },
    { step: "02", title: t("home.process.step2.title"), desc: t("home.process.step2.desc"), side: "right" },
    { step: "03", title: t("home.process.step3.title"), desc: t("home.process.step3.desc"), side: "left" },
    { step: "04", title: t("home.process.step4.title"), desc: t("home.process.step4.desc"), side: "right" },
  ];

  const features = [
    { icon: BarChart3, title: t("home.features.crm"), desc: t("home.features.crmDesc") },
    { icon: MessageSquare, title: t("home.features.messaging"), desc: t("home.features.messagingDesc") },
    { icon: Zap, title: t("home.features.automation"), desc: t("home.features.automationDesc") },
    { icon: Target, title: t("home.features.funnels"), desc: t("home.features.funnelsDesc") },
    { icon: Calendar, title: t("home.features.booking"), desc: t("home.features.bookingDesc") },
    { icon: CreditCard, title: t("home.features.payments"), desc: t("home.features.paymentsDesc") },
    { icon: Settings, title: t("home.features.access"), desc: t("home.features.accessDesc") },
    { icon: Shuffle, title: t("home.features.routing"), desc: t("home.features.routingDesc") },
    { icon: Smartphone, title: t("home.features.mobile"), desc: t("home.features.mobileDesc") },
  ];

  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/80 via-white to-white pointer-events-none" />
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-violet-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-150px] w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center max-w-4xl py-20">
          <h1 className="text-4xl sm:text-5xl md:text-[5rem] font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            {t("home.title1")}
            <span className="text-gradient">{t("home.titleHighlight")}</span>
            {t("home.title2").split("\n").map((line, i) => (
              <span key={i}>{i > 0 && <br />}{line}</span>
            ))}
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            {t("home.desc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-base bg-primary hover:bg-violet-700 text-white shadow-lg shadow-primary/25 rounded-full">
                {t("home.bookDemo")} <ArrowRight className="ms-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="h-14 px-10 text-base bg-white text-slate-700 border-slate-200 hover:bg-slate-50 rounded-full">
                {t("home.seePlans")}
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-slate-400 animate-in fade-in duration-700 delay-700">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> {t("home.trial")}</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> {t("home.noFees")}</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> {t("home.cancel")}</span>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t("home.connected.title")}
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              {t("home.connected.desc")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {connectedItems[lang].map((item) => (
              <div key={item} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group cursor-default">
                <p className="font-bold text-slate-900 group-hover:text-white transition-colors">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-primary">
              {t("home.connected.tagline")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">{t("home.process.badge")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t("home.process.title").split("\n").map((line, i) => (
                <span key={i}>{i > 0 && <br />}{line}</span>
              ))}
            </h2>
            <p className="text-lg text-slate-500">{t("home.process.desc")}</p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

            {processSteps.map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12 md:mb-16 last:mb-0 ${item.side === "right" ? "md:flex-row-reverse" : ""}`}>
                <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-white font-extrabold text-base md:text-lg flex items-center justify-center shadow-lg shadow-primary/30 shrink-0 order-first md:order-none">
                  {item.step}
                </div>

                <div className={`flex-1 w-full ${item.side === "right" ? "md:text-start" : "md:text-end"}`}>
                  <div className={`bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow w-full md:inline-block md:max-w-md ${item.side === "right" ? "" : "md:ms-auto"}`}>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t("home.features.title")}</h2>
            <p className="text-lg text-slate-500">{t("home.features.desc")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                {t("home.dashboard.title")}
              </h2>
              <ul className="space-y-5 text-lg text-slate-700">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  {t("home.dashboard.item1")}
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  {t("home.dashboard.item2")}
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  {t("home.dashboard.item3")}
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/platform">
                  <Button className="bg-primary text-white hover:bg-violet-700 rounded-full px-8">{t("home.dashboard.cta")} &rarr;</Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative bg-white">
              <img src={dashboardImg} alt="MAYBEL Dashboard Analysis" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <GlobalCTA />
    </div>
  );
}