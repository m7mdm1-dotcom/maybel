import { GlobalCTA } from "@/components/GlobalCTA";
import { Layers, Zap, MessageSquare, Target, Calendar, CreditCard, Star, LineChart, Settings, Phone, Globe, Users, FileText, Bell, Shield, Smartphone, BarChart3, Workflow } from "lucide-react";

export default function Platform() {
  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/80 via-white to-white pointer-events-none" />
        <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center max-w-4xl py-20">
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-8">
            Platform Overview
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8">
            One platform.<br /><span className="text-gradient">Infinite possibilities</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            MAYBEL connects every stage of your customer journey into one automated ecosystem. Everything you need, nothing you don't.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Platform Features</h2>
            <p className="text-lg text-slate-500">The essential tools that power your revenue engine.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Layers, title: "CRM & Pipeline Management", 
                desc: "Unlimited contacts, custom fields, multiple pipelines, drag & drop stages, task automation, lead scoring, round-robin distribution, source attribution."
              },
              { 
                icon: Zap, title: "Automation Engine", 
                desc: "Trigger-based workflows, If/Else logic, time delays, conditional sequences, missed call auto-reply, reactivation campaigns, webhooks, and API actions. Runs 24/7."
              },
              { 
                icon: MessageSquare, title: "Unified Messaging", 
                desc: "WhatsApp integration, SMS two-way, Email campaigns, unified inbox, template library, personalization tokens, conversation assignment."
              },
              { 
                icon: Target, title: "Funnels & Lead Capture", 
                desc: "Landing page builder, funnel builder, forms, surveys, lead magnets, custom domains, pixel tracking, mobile optimization."
              },
              { 
                icon: Calendar, title: "Booking & Scheduling", 
                desc: "Online calendar, Google & Outlook sync, round-robin booking, confirmation flows, SMS reminders, reschedule automation."
              },
              { 
                icon: CreditCard, title: "Payments & Invoicing", 
                desc: "Stripe subscriptions, one-time payments, payment links, invoice automation, failed payment reminders, revenue sync to CRM."
              },
              { 
                icon: Star, title: "Reputation Management", 
                desc: "Automated review requests, reputation pipeline, feedback filtering, reactivation flows, referral campaigns, Google review links."
              },
              { 
                icon: LineChart, title: "Reporting & Analytics", 
                desc: "Lead source reports, funnel conversion rates, pipeline value, sales team KPIs, revenue dashboards, weekly auto-summaries."
              },
              { 
                icon: Settings, title: "Done-For-You Setup", 
                desc: "Full system setup, workflow architecture, pipeline design, funnel configuration, template customization, optimization sessions."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-24 relative bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Advanced Capabilities</h2>
            <p className="text-lg text-slate-500">Go beyond the basics with enterprise-grade features built for scale.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Phone, title: "Call Tracking & Recording",
                desc: "Track inbound and outbound calls, record conversations for quality assurance, auto-log call outcomes directly to the CRM pipeline."
              },
              {
                icon: Globe, title: "Website & Funnel Builder",
                desc: "Full drag-and-drop website builder with custom domains, SSL, SEO settings, blog integration, and mobile-responsive templates."
              },
              {
                icon: Users, title: "Team & User Management",
                desc: "Role-based access control, team performance dashboards, activity logs, custom permissions per pipeline or feature."
              },
              {
                icon: FileText, title: "Documents & Proposals",
                desc: "Create, send, and track proposals and contracts. E-signature support, template library, automated follow-ups on unsigned docs."
              },
              {
                icon: Bell, title: "Smart Notifications",
                desc: "Real-time alerts for new leads, deal stage changes, missed calls, overdue tasks, and payment updates via push, SMS, or email."
              },
              {
                icon: Shield, title: "Data Security & Compliance",
                desc: "GDPR-compliant data handling, encrypted storage, two-factor authentication, audit logs, and granular data export controls."
              },
              {
                icon: Smartphone, title: "Mobile App",
                desc: "Full-featured mobile app for iOS and Android. Manage leads, respond to messages, update deals, and track performance on the go."
              },
              {
                icon: BarChart3, title: "A/B Testing & Optimization",
                desc: "Split test landing pages, email subject lines, and automation sequences. Let data drive your decisions with built-in testing tools."
              },
              {
                icon: Workflow, title: "Workflow Templates",
                desc: "Pre-built automation templates for common use cases: onboarding, follow-ups, re-engagement, review requests, and appointment reminders."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-slate-100 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Features */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Even More Built-In</h2>
            <p className="text-lg text-slate-500">Everything else you'd normally pay extra for comes included.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Email Marketing",
              "SMS Campaigns",
              "Social Media Planner",
              "Membership & Courses",
              "Affiliate Management",
              "Custom Domains",
              "Trigger Links",
              "Conditional Logic",
              "Lead Scoring",
              "Pipeline Automation",
              "Auto Lead Assignment",
              "Missed Call Text-Back",
              "Voicemail Drops",
              "Power Dialer",
              "Two-Way Texting",
              "Email Verification",
              "List Segmentation",
              "Tag Management",
              "Custom Webhooks",
              "API Access",
              "White-Label Options",
              "Multi-Location Support",
              "Custom Reporting",
              "Client Portal"
            ].map((item) => (
              <div key={item} className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group cursor-default">
                <p className="font-semibold text-sm text-slate-700 group-hover:text-white transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </div>
  );
}