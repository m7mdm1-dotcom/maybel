import { Link } from "wouter";
import { ArrowRight, CheckCircle2, BarChart3, MessageSquare, Zap, Target, Calendar, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "../assets/images/hero-network.png";
import dashboardImg from "../assets/images/dashboard-mockup.png";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-[#0a0f1c] text-slate-50 overflow-hidden relative">
      
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-[-20%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative container mx-auto px-4 md:px-8 pt-16 pb-24 md:pt-32 md:pb-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-900/30 text-blue-300 border border-blue-700/30 mb-4 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse" />
            For UAE & MENA Businesses
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            We Build Your <br />
            <span className="text-gradient drop-shadow-sm">Entire Growth System</span>
            <br /> Not Just Software.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            MAYBEL is a managed all-in-one CRM, automation, messaging, funnel and booking platform. We build it for you, connect everything, and optimize it — so you focus on growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <Button size="lg" className="h-14 px-8 text-base bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-500/50">
              Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
              View Pricing
            </Button>
          </div>
        </div>
        
        <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl z-0" />
          <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-slate-700/50 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <img 
              src={heroImg} 
              alt="MAYBEL Growth System" 
              className="w-full h-full object-cover mix-blend-screen opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="about" className="relative py-24 border-y border-slate-800/50 bg-slate-900/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Turn chaos into systems.
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              MAYBEL is a done-for-you growth platform designed for businesses that need structure, automation, and clarity. We combine software, implementation, and automation expertise to create a working sales engine from day one.
            </p>
            <p className="text-2xl font-semibold text-blue-400 pt-4">
              We don’t just give you tools. We build your entire system.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD / PRODUCT */}
      <section id="product" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need to run sales and marketing.</h2>
            <p className="text-lg text-slate-400">From one centralized system, customized and built entirely for your business workflows.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "CRM & Pipeline Setup", desc: "Unlimited contacts, custom pipelines, auto stage movement, and lead scoring." },
              { icon: MessageSquare, title: "Smart Messaging", desc: "WhatsApp integration, SMS two-way, Email campaigns, and a unified inbox." },
              { icon: Zap, title: "Advanced Automation", desc: "Trigger workflows, If/Else logic, delay control, and custom webhooks." },
              { icon: Target, title: "Funnels & Landing Pages", desc: "High-converting forms, custom domains, and integrated tracking pixels." },
              { icon: Calendar, title: "Booking & Calendars", desc: "Calendar sync, round-robin routing, and automated no-show flows." },
              { icon: CreditCard, title: "Payments & Invoicing", desc: "Stripe integration, subscriptions, automated renewal reminders." }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 border border-blue-800/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-800/50 transition-all">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.15)] border border-slate-800 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent z-10" />
            <img src={dashboardImg} alt="MAYBEL Dashboard" className="w-full h-auto object-cover opacity-80" />
          </div>
        </div>
      </section>

      {/* SPECIAL FEATURES */}
      <section className="bg-slate-950/50 py-24 border-y border-slate-800/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                Powerful features tailored for MENA.
              </h2>
              <ul className="space-y-4">
                {[
                  "Missed Call Text-Back",
                  "Speed-to-Lead Automation",
                  "Multi-Language Ready (Arabic + English)",
                  "Unlimited Custom Fields",
                  "Role-Based Permissions",
                  "Revenue Tracking & KPI Dashboards"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-slate-300">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-400" /> API Ready Integrations
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Meta Lead Forms", "Google Ads", "WhatsApp API", "Stripe", "Zapier", "Shopify", "WooCommerce"].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:border-slate-500 cursor-default transition-colors">{tag}</span>
                ))}
                <span className="px-4 py-2 bg-blue-900/20 text-blue-400 border border-blue-800/30 rounded-full text-sm font-medium">+ Many more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, predictable pricing.</h2>
            <p className="text-lg text-slate-400">Choose the right stage for your business growth.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Launch", price: "97", features: ["CRM", "Basic automations (3)", "Booking calendar", "Email support"] },
              { name: "Growth", price: "149", popular: true, features: ["Everything in Launch", "Funnels", "Up to 10 automations", "WhatsApp/SMS sequences"] },
              { name: "Pro", price: "249", features: ["Everything in Growth", "25 automations", "Reputation system", "Reactivation flows", "Priority support"] },
              { name: "Scale", price: "449", features: ["Everything in Pro", "Unlimited automations", "Advanced dashboards", "Roles & permissions", "Monthly optimization"] }
            ].map((plan) => (
              <div key={plan.name} className={`relative p-8 rounded-2xl flex flex-col ${plan.popular ? 'glass-card border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.15)] transform md:-translate-y-2' : 'bg-slate-900/40 border border-slate-800'}`}>
                {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-lg">Most Popular</div>}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-slate-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                  Start Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 blur-[100px] z-0" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto glass-card p-12 md:p-16 rounded-3xl border border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.1)]">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to build a structured growth machine?</h2>
            <p className="text-xl text-slate-400 mb-10">Book a demo and we'll design your system tailored specifically to your sales process.</p>
            <Button size="lg" className="h-16 px-10 text-lg bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)] border border-blue-400/50 rounded-full transition-transform hover:scale-105">
              Book a Demo Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}