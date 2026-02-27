import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GlobalCTA() {
  return (
    <section className="py-16 text-center relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-violet-50/50 blur-[100px] z-0" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ready to build your automated growth infrastructure?</h2>
          <p className="text-lg text-slate-600 mb-2">Book a Demo and let MAYBEL structure your business.</p>
          <p className="text-sm text-primary font-semibold mb-6">Start with a 14-day free trial — no commitment required.</p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-violet-700 text-white shadow-md shadow-violet-500/25 rounded-full transition-transform hover:scale-105">
              Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}