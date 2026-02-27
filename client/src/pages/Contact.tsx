import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

const CALENDAR_URL = "https://link.maybel.io/widget/booking/XNja6c2FvuiCvHyQa4KQ";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });
  const [step, setStep] = useState<"form" | "calendar">("form");

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Something went wrong");
      }
      return res.json();
    },
    onSuccess: () => {
      setStep("calendar");
      window.open(CALENDAR_URL, "_blank");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-100/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column: Info */}
              <div className="space-y-12">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Let's build your growth engine.</h1>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Whether you need a complete CRM overhaul or automated WhatsApp workflows, our team is ready to design a system tailored to your exact needs.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                      <p className="text-slate-600 mb-2">Our friendly team is here to help.</p>
                      <a href="mailto:info@maybel.io" className="text-primary font-medium hover:underline">info@maybel.io</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Global Presence</h3>
                      <p className="text-slate-600">Supporting businesses remotely and efficiently, with a strong focus on high-speed markets.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Fast Response</h3>
                      <p className="text-slate-600">We practice what we preach. Expect a speedy reply to your inquiry.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form / Calendar redirect */}
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-2xl relative z-10">
                {step === "calendar" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900" data-testid="text-success-title">Details received!</h3>
                    <p className="text-slate-600 max-w-sm">
                      Your booking calendar should have opened in a new tab. If it didn't, click the button below to schedule your call.
                    </p>
                    <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-primary text-white hover:bg-violet-700 rounded-full px-8" data-testid="button-open-calendar">
                        <Calendar className="mr-2 h-5 w-5" /> Open Booking Calendar
                      </Button>
                    </a>
                    <button
                      onClick={() => { setStep("form"); setFormData({ firstName: "", lastName: "", company: "", email: "", message: "" }); }}
                      className="text-sm text-slate-500 hover:text-primary underline mt-2 cursor-pointer"
                      data-testid="button-start-over"
                    >
                      Start over
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Book your discovery call</h3>
                    <p className="text-slate-500 text-sm mb-8">Fill in your details below and you'll be redirected to pick a time that works for you.</p>
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">First Name</label>
                          <input
                            data-testid="input-first-name"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={e => setFormData(p => ({ ...p, firstName: e.target.value }))}
                            className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">Last Name</label>
                          <input
                            data-testid="input-last-name"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={e => setFormData(p => ({ ...p, lastName: e.target.value }))}
                            className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Company Name</label>
                        <input
                          data-testid="input-company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={e => setFormData(p => ({ ...p, company: e.target.value }))}
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white"
                          placeholder="Your Company LLC"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Work Email</label>
                        <input
                          data-testid="input-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white"
                          placeholder="john@company.com"
                        />
                      </div>

                      {mutation.isError && (
                        <p className="text-red-600 text-sm" data-testid="text-error">{mutation.error.message}</p>
                      )}
                      
                      <Button
                        data-testid="button-submit-contact"
                        type="submit"
                        size="lg"
                        disabled={mutation.isPending}
                        className="w-full h-14 text-base bg-primary text-white hover:bg-violet-700 shadow-lg shadow-primary/30 rounded-xl group disabled:opacity-60"
                      >
                        {mutation.isPending ? "Submitting..." : "Continue to Schedule"} <Calendar className="ml-2 w-5 h-5" />
                      </Button>
                      
                      <p className="text-xs text-slate-500 text-center mt-4">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}