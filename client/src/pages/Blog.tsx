import { GlobalCTA } from "@/components/GlobalCTA";

export default function Blog() {
  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-100/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">MAYBEL Blog</h1>
            <p className="text-xl text-slate-600">Systems, Automation & Growth Insights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Speed-to-Lead in MENA",
              "How to Build the Perfect Sales Pipeline",
              "WhatsApp Automation That Converts",
              "Reducing No-Shows with Smart Reminders",
              "Reactivating Old Leads for New Revenue",
              "Agency Scaling Strategies"
            ].map((title, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all cursor-pointer">
                <span className="text-sm font-semibold text-primary mb-3 block">Growth Insight</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">Learn how implementing structured automation and optimized CRM workflows can significantly boost your revenue and team efficiency.</p>
                <span className="text-primary font-medium hover:underline">Read Article &rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </div>
  );
}