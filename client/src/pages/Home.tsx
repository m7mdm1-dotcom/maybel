import { Link } from "wouter";
import { ArrowRight, CheckCircle2, BarChart3, MessageSquare, Zap, Target, Calendar, CreditCard, Settings, Layers, Shuffle, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlobalCTA } from "@/components/GlobalCTA";

import heroImg from "../assets/images/hero-light.png";
import dashboardImg from "../assets/images/dashboard-mockup.png";

export default function Home() {
  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative container mx-auto px-4 md:px-8 pt-16 pb-24 md:pt-32 md:pb-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            For Growth-Focused Businesses
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            We Build <br />
            <span className="text-gradient drop-shadow-sm">Revenue Engines</span>.
            <br /> Not Just Software.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            MAYBEL is a fully managed all-in-one CRM and automation platform. We design, structure, automate, and optimize your entire sales system so you can focus on closing deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 w-full sm:w-auto">
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-white text-slate-700 border-slate-200 hover:bg-slate-50 w-full sm:w-auto">
                See Plans
              </Button>
            </Link>
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
      <section className="relative py-24 border-y border-slate-100 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              A structured growth infrastructure.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Stop jumping between disconnected tools. MAYBEL centralizes your <span className="text-slate-900 font-semibold">Leads, Sales, Messaging, Booking, Payments, and Reporting</span> into one intelligent system that runs 24/7.
            </p>
            <div className="p-8 bg-slate-50 rounded-2xl inline-block mt-8 border border-slate-100 shadow-sm">
               <p className="text-2xl font-semibold text-primary">
                We combine world-class technology with hands-on implementation and automation strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DONE FOR YOU SECTION (New Content) */}
      <section className="py-24 relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Unique Approach</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">We don't just sell software.<br />We build it for you.</h2>
            <p className="text-xl text-slate-400">Most platforms give you a login and leave you to figure it out. We do the heavy lifting so your team can start selling on day one.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Map & Architect", desc: "We analyze your current sales process and design a custom pipeline architecture." },
              { step: "02", title: "Build & Integrate", desc: "We configure the CRM, connect your lead sources, and set up all necessary integrations." },
              { step: "03", title: "Automate", desc: "We build custom workflows for follow-ups, messaging, and internal alerts." },
              { step: "04", title: "Launch & Train", desc: "We hand over a fully functioning system and train your team to use it effectively." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors">
                <div className="text-5xl font-black text-slate-700/50 absolute top-4 right-6">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-4 mt-6 relative z-10">{item.title}</h3>
                <p className="text-slate-400 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTENDED FEATURES */}
      <section className="py-24 relative bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Everything your business needs to scale</h2>
            <p className="text-xl text-slate-600">All features included natively. No need for expensive third-party add-ons.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "Custom CRM Setup", desc: "Pipelines tailored to your exact sales process. Unlimited contacts and custom fields." },
              { icon: MessageSquare, title: "Omnichannel Messaging", desc: "WhatsApp API, SMS, Email, and social media DMs centralized in one unified inbox." },
              { icon: Zap, title: "Advanced Automation", desc: "Complex logic, delayed follow-ups, auto-stage movement, and missed-call text back." },
              { icon: Target, title: "High-Converting Funnels", desc: "Landing pages, forms, and surveys designed to capture and qualify leads automatically." },
              { icon: Calendar, title: "Smart Booking", desc: "Round-robin scheduling, Google/Outlook sync, and automated no-show sequences." },
              { icon: CreditCard, title: "Frictionless Payments", desc: "Invoicing, subscriptions, Stripe integration, and automated payment reminders." },
              { icon: Settings, title: "Role-Based Access", desc: "Granular permissions so your team only sees exactly what they need to see." },
              { icon: Shuffle, title: "Smart Lead Routing", desc: "Automatically assign leads to the right sales rep based on performance or rules." },
              { icon: Smartphone, title: "Mobile App Access", desc: "Manage your business, reply to leads, and move deals forward from anywhere." }
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-slate-100 shadow-sm p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                See exactly where your revenue comes from.
              </h2>
              <ul className="space-y-4 text-lg text-slate-700">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  Track Lead Sources & Campaign ROI
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  Monitor Sales Team KPIs
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  View Pipeline Value & Conversion Rates
                </li>
              </ul>
              <div className="pt-6">
                <Link href="/platform">
                  <Button className="bg-primary text-white hover:bg-blue-700">View All Features &rarr;</Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative bg-white">
              <img src={dashboardImg} alt="MAYBEL Dashboard Analysis" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <GlobalCTA />
    </div>
  );
}