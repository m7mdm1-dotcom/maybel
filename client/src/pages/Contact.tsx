import { GlobalCTA } from "@/components/GlobalCTA";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">Contact Us</h1>
              <p className="text-xl text-slate-600">Ready to build your system? Send us a message.</p>
            </div>

            <form className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm" onSubmit={e => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="John Doe" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Company</label>
                <input type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Your Company LLC" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone</label>
                  <input type="tel" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="+971 50 123 4567" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea className="w-full h-32 p-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="How can we help you grow?"></textarea>
              </div>
              
              <Button type="submit" size="lg" className="w-full h-14 text-base bg-primary text-white hover:bg-blue-700 shadow-md">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}