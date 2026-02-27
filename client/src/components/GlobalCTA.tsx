import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GlobalCTA() {
  return (
    <section className="py-24 text-center relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-blue-50/50 blur-[100px] z-0" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-3xl border border-slate-200 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ready to build your automated growth infrastructure?</h2>
          <p className="text-xl text-slate-600 mb-10">Book a Demo and let MAYBEL structure your business.</p>
          <Link href="/contact">
            <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 rounded-full transition-transform hover:scale-105">
              Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}