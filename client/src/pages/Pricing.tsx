import { GlobalCTA } from "@/components/GlobalCTA";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const plans: Record<string, { name: string; price: string; popular?: boolean; features: string[] }[]> = {
  en: [
    { name: "Launch", price: "97", features: ["Core CRM", "Basic automation (3 workflows)", "1 pipeline", "Booking system", "Email support"] },
    { name: "Growth", price: "149", popular: true, features: ["Everything in Launch", "Funnels", "Up to 10 automations", "WhatsApp & SMS sequences", "Basic dashboard"] },
    { name: "Pro", price: "249", features: ["Everything in Growth", "Up to 25 automations", "Reputation system", "Reactivation campaigns", "Priority support"] },
    { name: "Scale", price: "449", features: ["Everything in Pro", "Unlimited automations", "Advanced dashboards", "Advanced permissions", "Monthly optimization", "Dedicated support"] },
  ],
  ar: [
    { name: "إطلاق", price: "97", features: ["CRM الأساسي", "أتمتة أساسية (3 سير عمل)", "خط أنابيب واحد", "نظام الحجز", "دعم بالبريد الإلكتروني"] },
    { name: "نمو", price: "149", popular: true, features: ["كل شيء في إطلاق", "القمع", "حتى 10 أتمتات", "تسلسلات واتساب و SMS", "لوحة معلومات أساسية"] },
    { name: "احترافي", price: "249", features: ["كل شيء في نمو", "حتى 25 أتمتة", "نظام السمعة", "حملات إعادة التنشيط", "دعم أولوي"] },
    { name: "توسع", price: "449", features: ["كل شيء في احترافي", "أتمتات غير محدودة", "لوحات معلومات متقدمة", "صلاحيات متقدمة", "تحسين شهري", "دعم مخصص"] },
  ],
};

export default function Pricing() {
  const { t, lang } = useI18n();

  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-100/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-24 relative bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-3xl md:text-6xl font-bold text-slate-900 mb-4">{t("pricing.title")}</h1>
            <p className="text-xl text-slate-600 mb-2">{t("pricing.subtitle")}</p>
            <p className="text-primary font-semibold">{t("pricing.trial")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans[lang].map((plan) => (
              <div key={plan.name} className={`relative p-6 md:p-8 rounded-2xl flex flex-col bg-white ${plan.popular ? 'border-2 border-primary shadow-xl transform lg:-translate-y-2' : 'border border-slate-200 shadow-sm'}`}>
                {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-lg">{t("pricing.popular")}</div>}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                  <span className="text-slate-500">{t("pricing.mo")}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-primary text-white hover:bg-violet-700 shadow-md' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  {t("pricing.cta")}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </div>
  );
}