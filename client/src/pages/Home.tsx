import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

      <GlobalCTA />
    </div>
  );
}