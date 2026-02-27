import { GlobalCTA } from "@/components/GlobalCTA";
import { Shield, Zap, Target, Users } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Building the infrastructure for modern business growth.</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We started MAYBEL because we saw too many great businesses struggling not with their product, but with chaotic, disconnected systems.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 relative bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">The Problem with Modern SaaS</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Most companies today suffer from "software fatigue". You have one tool for your CRM, another for email marketing, a different one for WhatsApp, and Zapier duct-taping them all together.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                When these systems break, leads fall through the cracks, sales reps lose context, and revenue drops. Worse, most software companies just give you a login and expect you to build the architecture yourself.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">The MAYBEL Solution</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">One Unified Platform</h4>
                    <p className="text-slate-600 text-sm mt-1">Every tool your sales and marketing team needs, natively built into one seamless dashboard.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Done-For-You Setup</h4>
                    <p className="text-slate-600 text-sm mt-1">We don't leave you alone. We architect, build, and optimize the system for your exact workflows.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Philosophy</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
              <p className="text-2xl font-medium text-slate-800 leading-relaxed italic">
                "Growth shouldn't be chaotic. It should be structured, measurable, and highly automated."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="font-bold text-xl mb-3">Speed is Everything</h3>
                <p className="text-slate-600">In high-speed markets, the business that responds first wins. Automation guarantees speed.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="font-bold text-xl mb-3">Humanize the Close</h3>
                <p className="text-slate-600">Automate the boring follow-ups so your sales team can focus on actual human conversations.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="font-bold text-xl mb-3">Simplicity Scales</h3>
                <p className="text-slate-600">Complex systems break. We design elegant, simple workflows that scale as your business grows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GlobalCTA />
    </div>
  );
}