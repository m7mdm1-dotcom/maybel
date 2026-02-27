import { GlobalCTA } from "@/components/GlobalCTA";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-100/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-24 relative bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">Pricing</h1>
            <p className="text-xl text-slate-600 mb-4">Annual discount available.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { name: "Launch", price: "97", features: ["Core CRM", "Basic automation (3 workflows)", "1 pipeline", "Booking system", "Email support"] },
              { name: "Growth", price: "149", popular: true, features: ["Everything in Launch", "Funnels", "Up to 10 automations", "WhatsApp & SMS sequences", "Basic dashboard"] },
              { name: "Pro", price: "249", features: ["Everything in Growth", "Up to 25 automations", "Reputation system", "Reactivation campaigns", "Priority support"] },
              { name: "Scale", price: "449", features: ["Everything in Pro", "Unlimited automations", "Advanced dashboards", "Advanced permissions", "Monthly optimization", "Dedicated support"] }
            ].map((plan) => (
              <div key={plan.name} className={`relative p-8 rounded-2xl flex flex-col bg-white ${plan.popular ? 'border-2 border-primary shadow-xl transform md:-translate-y-2' : 'border border-slate-200 shadow-sm'}`}>
                {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-lg">Most Popular</div>}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                  <span className="text-slate-500">/mo</span>
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
                  Start Now
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