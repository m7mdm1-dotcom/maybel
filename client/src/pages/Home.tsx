import { Link } from "wouter";
import { ArrowRight, CheckCircle2, BarChart3, MessageSquare, Zap, Target, Calendar, CreditCard, Layers, LayoutDashboard, Settings, PhoneForwarded, Star, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "../assets/images/hero-light.png";
import dashboardImg from "../assets/images/dashboard-mockup.png";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-background overflow-hidden relative">
      
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative container mx-auto px-4 md:px-8 pt-16 pb-24 md:pt-32 md:pb-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            For UAE & MENA Businesses
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            We Build <br />
            <span className="text-gradient drop-shadow-sm">Revenue Engines</span>.
            <br /> Not Just Software.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            MAYBEL is a fully managed all-in-one CRM and automation platform built for growth-focused businesses in UAE & MENA. We design, structure, automate, and optimize your entire sales system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25">
              Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-white text-slate-700 border-slate-200 hover:bg-slate-50">
              See Plans
            </Button>
          </div>
        </div>
        
        <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl z-0" />
          <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-2xl bg-white">
            <img 
              src={heroImg} 
              alt="MAYBEL Growth System" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* WHAT IS MAYBEL */}
      <section id="about" className="relative py-24 border-y border-slate-100 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              MAYBEL is a structured growth infrastructure.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              It centralizes <span className="text-slate-900 font-semibold">Leads, Sales, Messaging, Booking, Payments, and Reporting</span> into one intelligent system that runs 24/7.
            </p>
            <div className="p-8 bg-slate-50 rounded-2xl inline-block mt-8 border border-slate-100">
               <p className="text-2xl font-semibold text-primary">
                We combine technology + implementation + automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE ACTUALLY DO */}
      <section className="py-24 relative bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                We build your system from scratch.
              </h2>
              <ul className="space-y-4 text-lg text-slate-700">
                {[
                  "Sales pipeline architecture",
                  "CRM configuration",
                  "Automated follow-up sequences",
                  "WhatsApp & SMS systems",
                  "Funnel & landing page setup",
                  "Booking optimization",
                  "Payment automation",
                  "Review & retention flows",
                  "KPI dashboards"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-slate-200">
                <p className="text-xl text-slate-600">This is not DIY software.</p>
                <p className="text-2xl font-bold text-slate-900 mt-2">This is Done-For-You Growth Infrastructure.</p>
              </div>
            </div>
            <div className="flex-1 w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative bg-white">
              <img src={dashboardImg} alt="MAYBEL Dashboard" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM (PRODUCT) */}
      <section id="platform" className="py-24 relative bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Platform Overview</h2>
            <p className="text-xl text-slate-600">MAYBEL connects every stage of your customer journey into one automated ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Layers, title: "CRM & Pipeline", 
                desc: "Unlimited contacts, custom fields, multiple pipelines, drag & drop stages, task automation, lead scoring, round-robin distribution, source attribution."
              },
              { 
                icon: Zap, title: "Automation Engine", 
                desc: "Trigger-based workflows, If/Else logic, time delays, conditional sequences, missed call auto-reply, reactivation campaigns, webhooks, and API actions. Runs 24/7."
              },
              { 
                icon: MessageSquare, title: "Messaging System", 
                desc: "WhatsApp integration, SMS two-way, Email campaigns, unified inbox, template library, personalization tokens, conversation assignment."
              },
              { 
                icon: Target, title: "Funnels & Lead Capture", 
                desc: "Landing page builder, funnel builder, forms, surveys, lead magnets, custom domains, pixel tracking, mobile optimization."
              },
              { 
                icon: Calendar, title: "Booking System", 
                desc: "Online calendar, Google & Outlook sync, round-robin booking, confirmation flows, SMS reminders, reschedule automation."
              },
              { 
                icon: CreditCard, title: "Payments", 
                desc: "Stripe subscriptions, one-time payments, payment links, invoice automation, failed payment reminders, revenue sync to CRM."
              },
              { 
                icon: Star, title: "Reputation & Retention", 
                desc: "Automated review requests, reputation pipeline, feedback filtering, reactivation flows, referral campaigns."
              },
              { 
                icon: LineChart, title: "Reporting & Analytics", 
                desc: "Lead source reports, funnel conversion rates, pipeline value, sales team KPIs, revenue dashboards, weekly summaries."
              },
              { 
                icon: Settings, title: "Implementation Included", 
                desc: "Full system setup, workflow architecture, pipeline design, funnel configuration, template customization, optimization sessions. We build it for you."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-slate-100 shadow-sm p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BUSINESSES CHOOSE MAYBEL & SOLUTIONS */}
      <section id="solutions" className="py-24 relative bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why Businesses Choose MAYBEL</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Faster Speed-to-Lead",
                  "Structured Sales Process",
                  "Fully Automated Follow-Up",
                  "No More Lost Leads",
                  "Unified Messaging Inbox",
                  "Clear Revenue Tracking",
                  "Scalable Team Permissions"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <Zap className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Built For</h2>
              <div className="flex flex-wrap gap-4">
                {[
                  "Agencies",
                  "Service Businesses",
                  "Clinics",
                  "Real Estate",
                  "Education",
                  "Consultants",
                  "Multi-location businesses"
                ].map((item, i) => (
                  <div key={i} className="px-6 py-3 bg-slate-800 rounded-full text-slate-200 font-medium border border-slate-700">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xl text-blue-400 font-semibold pt-4">
                MAYBEL adapts to your structure — not the opposite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 relative bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Pricing</h2>
            <p className="text-lg text-slate-600 mb-4">Annual discount available.</p>
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
                <Button className={`w-full ${plan.popular ? 'bg-primary text-white hover:bg-blue-700 shadow-md' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  Start Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="py-24 relative bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">API Ready Architecture.</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Meta Lead Forms", "Google Ads", "TikTok Leads", "LinkedIn Lead Gen", 
              "WhatsApp API", "Twilio", "Stripe", "Google Calendar", "Outlook", 
              "Zoom", "Zapier", "Make", "Webhooks", "Slack", "Google Sheets", 
              "Shopify", "WooCommerce", "Google Tag Manager", "Meta Pixel"
            ].map(tag => (
              <span key={tag} className="px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-full text-sm font-medium text-slate-700 hover:text-primary hover:border-primary/50 hover:bg-blue-50 cursor-default transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL CTA */}
      <section className="py-24 text-center relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-blue-50/50 blur-[100px] z-0" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-3xl border border-slate-200 shadow-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ready to build your automated growth infrastructure?</h2>
            <p className="text-xl text-slate-600 mb-10">Book a Demo and let MAYBEL structure your business.</p>
            <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 rounded-full transition-transform hover:scale-105">
              Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}