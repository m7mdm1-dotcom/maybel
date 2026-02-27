import { GlobalCTA } from "@/components/GlobalCTA";
import { Shield, Zap, Target, Users } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">

      {/* Hero Section - Full impact */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white pointer-events-none" />
        <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[-100px] w-[350px] h-[350px] bg-indigo-200/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center max-w-4xl py-20">
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-8">
            About Us
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8">
            Building the infrastructure for{" "}
            <span className="text-gradient">modern business growth</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We started MAYBEL because we saw too many great businesses struggling not with their product, but with chaotic, disconnected systems.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Problem with Modern SaaS</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Most companies today suffer from "software fatigue". You have one tool for your CRM, another for email marketing, a different one for WhatsApp, and Zapier duct-taping them all together.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                When these systems break, leads fall through the cracks, sales reps lose context, and revenue drops. Worse, most software companies just give you a login and expect you to build the architecture yourself.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">The MAYBEL Solution</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">One Unified Platform</h4>
                    <p className="text-slate-500 text-sm mt-1">Every tool your sales and marketing team needs, natively built into one seamless dashboard.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Done-For-You Setup</h4>
                    <p className="text-slate-500 text-sm mt-1">We don't leave you alone. We architect, build, and optimize the system for your exact workflows.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-24 relative bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Philosophy</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
              <p className="text-2xl font-medium text-slate-700 leading-relaxed italic max-w-2xl mx-auto">
                "Growth shouldn't be chaotic. It should be structured, measurable, and highly automated."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Speed is Everything", desc: "In high-speed markets, the business that responds first wins. Automation guarantees speed." },
                { icon: Users, title: "Humanize the Close", desc: "Automate the boring follow-ups so your sales team can focus on actual human conversations." },
                { icon: Target, title: "Simplicity Scales", desc: "Complex systems break. We design elegant, simple workflows that scale as your business grows." }
              ].map((item, i) => (
                <div key={i} className="bg-white text-center p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
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