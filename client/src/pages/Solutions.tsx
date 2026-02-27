import { GlobalCTA } from "@/components/GlobalCTA";
import { Zap } from "lucide-react";

export default function Solutions() {
  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-24 relative bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Solutions</h1>
          </div>

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

      <GlobalCTA />
    </div>
  );
}