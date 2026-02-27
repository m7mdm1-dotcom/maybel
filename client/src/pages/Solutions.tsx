import { GlobalCTA } from "@/components/GlobalCTA";
import { Zap, ShieldCheck, TrendingUp, Users, Target, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import solutionsHero from "../assets/images/solutions-hero.png";

export default function Solutions() {
  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-100/50 rounded-full blur-[120px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative container mx-auto px-4 md:px-8 pt-16 pb-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Tailored For Your Industry
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            Solutions built for <br />
            <span className="text-gradient drop-shadow-sm">rapid growth.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            MAYBEL adapts to your structure — not the opposite. Discover how our fully managed infrastructure solves the exact challenges holding your business back.
          </p>
        </div>
        
        <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[500px] animate-in fade-in zoom-in duration-1000 delay-300">
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

      {/* WHY CHOOSE MAYBEL */}
      <section className="py-24 relative bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Businesses Choose MAYBEL</h2>
            <p className="text-xl text-slate-600">The core advantages of letting us build your automated revenue engine.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Faster Speed-to-Lead", desc: "Instantly respond to inquiries across all channels, capturing prospects while their intent is highest." },
              { icon: ShieldCheck, title: "Structured Sales Process", desc: "Eliminate guesswork with clear, defined pipeline stages that guide your reps to close." },
              { icon: Rocket, title: "Fully Automated Follow-Up", desc: "Never rely on manual memory. Systems nurture your prospects 24/7 until they are ready to buy." },
              { icon: Target, title: "No More Lost Leads", desc: "Every lead is tracked, tagged, and actively managed. Nothing falls through the cracks." },
              { icon: Users, title: "Unified Messaging Inbox", desc: "Combine WhatsApp, SMS, Email, and social DMs into one interface for seamless team collaboration." },
              { icon: TrendingUp, title: "Clear Revenue Tracking", desc: "Real-time dashboards show exactly where your money comes from and where it's getting stuck." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES / BUILT FOR */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Built For Your Industry</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We design custom architectures based on the unique demands and customer journeys of your specific niche.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Agencies", desc: "Manage client pipelines, automate onboarding, and prove ROI with transparent dashboards." },
                { title: "Service Businesses", desc: "Streamline booking, automate review requests, and send automated quote follow-ups." },
                { title: "Clinics & Healthcare", desc: "Reduce no-shows with smart SMS reminders and securely manage patient intake forms." },
                { title: "Real Estate", desc: "Instantly reply to property inquiries and automate long-term nurture campaigns for buyers." },
                { title: "Education & Coaching", desc: "Automate student enrollment, manage class schedules, and handle subscription payments." },
                { title: "Multi-location Businesses", desc: "Centralize data while maintaining localized permissions and routing leads geographically." }
              ].map((industry, i) => (
                <div key={i} className="flex flex-col p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-violet-200 transition-colors group">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{industry.title}</h3>
                  <p className="text-slate-600 mb-6 flex-1">{industry.desc}</p>
                  <Link href="/contact">
                    <span className="inline-flex items-center text-primary font-semibold hover:underline cursor-pointer">
                      See tailored solution <ArrowRight className="ml-2 h-4 w-4" />
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