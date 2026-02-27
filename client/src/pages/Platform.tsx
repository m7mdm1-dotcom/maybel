import { GlobalCTA } from "@/components/GlobalCTA";
import { Layers, Zap, MessageSquare, Target, Calendar, CreditCard, Star, LineChart, Settings } from "lucide-react";

export default function Platform() {
  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Platform Overview</h1>
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

      <GlobalCTA />
    </div>
  );
}