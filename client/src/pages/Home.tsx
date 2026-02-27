import { Link } from "wouter";
import { ArrowRight, CheckCircle2, BarChart3, MessageSquare, Zap, Target, Calendar, CreditCard, Settings, Shuffle, Smartphone, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlobalCTA } from "@/components/GlobalCTA";

import dashboardImg from "../assets/images/dashboard-mockup.png";

export default function Home() {
  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/80 via-white to-white pointer-events-none" />
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-violet-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-150px] w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center max-w-4xl py-20">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Play className="w-3 h-3 mr-2 fill-primary" />
            Done-For-You Growth Systems
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-[5rem] font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            We Build{" "}
            <span className="text-gradient">Revenue Engines</span>.
            <br />
            Not Just Software.
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            MAYBEL is a fully managed all-in-one CRM and automation platform. We design, structure, automate, and optimize your entire sales system so you can focus on closing deals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-base bg-primary hover:bg-violet-700 text-white shadow-lg shadow-primary/25 rounded-full">
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="h-14 px-10 text-base bg-white text-slate-700 border-slate-200 hover:bg-slate-50 rounded-full">
                See Plans
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-400 animate-in fade-in duration-700 delay-700">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> 14-day free trial</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> No setup fees</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* WHAT IS MAYBEL */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              One platform. Everything connected.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Stop jumping between disconnected tools. MAYBEL centralizes everything into one intelligent system that runs 24/7.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Leads", "Sales", "Messaging", "Booking", "Payments", "Reporting"].map((item) => (
              <div key={item} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group cursor-default">
                <p className="font-bold text-slate-900 group-hover:text-white transition-colors">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-primary">
              We combine world-class technology with hands-on implementation and automation strategy.
            </p>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-24 relative bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              We don't just sell software.<br />We build it for you.
            </h2>
            <p className="text-lg text-slate-500">Most platforms give you a login and leave you to figure it out. We do the heavy lifting so your team can start selling on day one.</p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

            {[
              { step: "01", title: "Map & Architect", desc: "We analyze your current sales process and design a custom pipeline architecture tailored to your team.", side: "left" },
              { step: "02", title: "Build & Integrate", desc: "We configure the CRM, connect your lead sources, and set up all necessary integrations.", side: "right" },
              { step: "03", title: "Automate", desc: "We build custom workflows for follow-ups, messaging, and internal alerts so nothing falls through the cracks.", side: "left" },
              { step: "04", title: "Launch & Train", desc: "We hand over a fully functioning system and train your team to use it effectively from day one.", side: "right" }
            ].map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${item.side === "right" ? "md:flex-row-reverse" : ""}`}>
                <div className={`flex-1 ${item.side === "right" ? "md:text-left" : "md:text-right"}`}>
                  <div className={`bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow inline-block max-w-md ${item.side === "right" ? "" : "md:ml-auto"}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 w-14 h-14 rounded-full bg-primary text-white font-extrabold text-lg flex items-center justify-center shadow-lg shadow-primary/30 shrink-0">
                  {item.step}
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Everything your business needs to scale</h2>
            <p className="text-lg text-slate-500">All features included natively. No need for expensive third-party add-ons.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* DASHBOARD PREVIEW */}
      <section className="py-24 relative bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                See exactly where your revenue comes from.
              </h2>
              <ul className="space-y-5 text-lg text-slate-700">
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
              <div className="pt-4">
                <Link href="/platform">
                  <Button className="bg-primary text-white hover:bg-violet-700 rounded-full px-8">View All Features &rarr;</Button>
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