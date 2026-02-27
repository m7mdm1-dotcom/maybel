import { Link } from "wouter";
import { ArrowRight, CheckCircle2, BarChart3, MessageSquare, Zap, Target, Calendar, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "../assets/images/hero-network.png";
import dashboardImg from "../assets/images/dashboard-mockup.png";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-background overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative container mx-auto px-4 md:px-8 pt-16 pb-24 md:pt-32 md:pb-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            For UAE & MENA Businesses
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            We Build Your <br />
            <span className="text-gradient">Entire Growth System</span>
            <br /> Not Just Software.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            MAYBEL is a managed all-in-one CRM, automation, messaging, funnel and booking platform. We build it for you, connect everything, and optimize it — so you focus on growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25">
              Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-white">
              View Pricing
            </Button>
          </div>
        </div>
        
        <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
          <img 
            src={heroImg} 
            alt="MAYBEL Growth System" 
            className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-white/50"
          />
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="about" className="bg-white py-24 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Turn chaos into systems.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              MAYBEL is a done-for-you growth platform designed for businesses that need structure, automation, and clarity. We combine software, implementation, and automation expertise to create a working sales engine from day one.
            </p>
            <p className="text-2xl font-semibold text-primary pt-4">
              We don’t just give you tools. We build your entire system.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD / PRODUCT */}
      <section id="product" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to run sales and marketing.</h2>
            <p className="text-lg text-slate-600">From one centralized system, customized and built entirely for your business workflows.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "CRM & Pipeline Setup", desc: "Unlimited contacts, custom pipelines, auto stage movement, and lead scoring." },
              { icon: MessageSquare, title: "Smart Messaging", desc: "WhatsApp integration, SMS two-way, Email campaigns, and a unified inbox." },
              { icon: Zap, title: "Advanced Automation", desc: "Trigger workflows, If/Else logic, delay control, and custom webhooks." },
              { icon: Target, title: "Funnels & Landing Pages", desc: "High-converting forms, custom domains, and integrated tracking pixels." },
              { icon: Calendar, title: "Booking & Calendars", desc: "Calendar sync, round-robin routing, and automated no-show flows." },
              { icon: CreditCard, title: "Payments & Invoicing", desc: "Stripe integration, subscriptions, automated renewal reminders." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img src={dashboardImg} alt="MAYBEL Dashboard" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* SPECIAL FEATURES */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
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
                    <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-6">API Ready Integrations</h3>
              <div className="flex flex-wrap gap-3">
                {["Meta Lead Forms", "Google Ads", "WhatsApp API", "Stripe", "Zapier", "Shopify", "WooCommerce"].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-slate-700 rounded-full text-sm font-medium">{tag}</span>
                ))}
                <span className="px-4 py-2 bg-slate-700/50 text-slate-400 rounded-full text-sm font-medium">+ Many more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, predictable pricing.</h2>
            <p className="text-lg text-slate-600">Choose the right stage for your business growth.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Launch", price: "97", features: ["CRM", "Basic automations (3)", "Booking calendar", "Email support"] },
              { name: "Growth", price: "149", popular: true, features: ["Everything in Launch", "Funnels", "Up to 10 automations", "WhatsApp/SMS sequences"] },
              { name: "Pro", price: "249", features: ["Everything in Growth", "25 automations", "Reputation system", "Reactivation flows", "Priority support"] },
              { name: "Scale", price: "449", features: ["Everything in Pro", "Unlimited automations", "Advanced dashboards", "Roles & permissions", "Monthly optimization"] }
            ].map((plan) => (
              <div key={plan.name} className={`relative p-8 rounded-2xl bg-white border ${plan.popular ? 'border-primary shadow-xl ring-1 ring-primary' : 'border-slate-200 shadow-sm'} flex flex-col`}>
                {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">Most Popular</div>}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                  <span className="text-slate-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-primary text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  Start Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ready to build a structured growth machine?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Book a demo and we'll design your system tailored specifically to your sales process.</p>
          <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-blue-700 text-white shadow-xl shadow-blue-500/25 rounded-full">
            Book a Demo Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

    </div>
  );
}