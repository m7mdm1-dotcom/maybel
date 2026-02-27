import { GlobalCTA } from "@/components/GlobalCTA";

export default function About() {
  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 text-center mb-12">About MAYBEL</h1>
            
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>MAYBEL was created for founders who want structure instead of chaos.</p>
              
              <p>In high-speed markets like UAE & MENA, businesses need systems — not disconnected tools.</p>
              
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 my-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our mission:</h3>
                <p className="text-xl text-primary font-medium">Transform operations into automated revenue systems.</p>
              </div>
              
              <p>We combine:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Technology</li>
                <li>Automation Strategy</li>
                <li>Process Design</li>
                <li>Execution</li>
              </ul>
              
              <p className="text-2xl font-bold text-slate-900 pt-8 border-t border-slate-100">
                We don't sell tools. <br/>
                <span className="text-primary">We build growth infrastructure.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <GlobalCTA />
    </div>
  );
}