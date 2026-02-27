import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, Calendar } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useI18n } from "@/lib/i18n";

const CALENDAR_URL = "https://link.maybel.io/widget/booking/XNja6c2FvuiCvHyQa4KQ";

export default function Contact() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
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
              <div className="space-y-12">
                <div>
                  <h1 className="text-3xl md:text-6xl font-bold text-slate-900 mb-6">{t("contact.title")}</h1>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    {t("contact.desc")}
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{t("contact.email.title")}</h3>
                      <p className="text-slate-600 mb-2">{t("contact.email.desc")}</p>
                      <a href="mailto:info@maybel.io" className="text-primary font-medium hover:underline">info@maybel.io</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{t("contact.global.title")}</h3>
                      <p className="text-slate-600">{t("contact.global.desc")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{t("contact.fast.title")}</h3>
                      <p className="text-slate-600">{t("contact.fast.desc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-2xl relative z-10">
                {step === "calendar" ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" /> {t("contact.calendar.title")}
                      </h3>
                      <button
                        onClick={() => { setStep("form"); setFormData({ firstName: "", lastName: "", company: "", phone: "", email: "", message: "" }); }}
                        className="text-sm text-slate-500 hover:text-primary underline cursor-pointer"
                        data-testid="button-start-over"
                      >
                        {t("contact.calendar.back")}
                      </button>
                    </div>
                    <iframe
                      src={CALENDAR_URL}
                      className="w-full rounded-xl border-0"
                      style={{ minHeight: "500px", height: "70vh" }}
                      data-testid="calendar-iframe"
                      title="Book a call"
                    />
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{t("contact.form.title")}</h3>
                    <p className="text-slate-500 text-sm mb-8">{t("contact.form.desc")}</p>
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">{t("contact.form.firstName")}</label>
                          <input
                            data-testid="input-first-name"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={e => setFormData(p => ({ ...p, firstName: e.target.value }))}
                            className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">{t("contact.form.lastName")}</label>
                          <input
                            data-testid="input-last-name"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={e => setFormData(p => ({ ...p, lastName: e.target.value }))}
                            className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">{t("contact.form.company")}</label>
                        <input
                          data-testid="input-company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={e => setFormData(p => ({ ...p, company: e.target.value }))}
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">{t("contact.form.phone")}</label>
                          <input
                            data-testid="input-phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                            className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">{t("contact.form.email")}</label>
                          <input
                            data-testid="input-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                            className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white"
                          />
                        </div>
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
                        {mutation.isPending ? t("contact.form.submitting") : t("contact.form.submit")} <Calendar className="ms-2 w-5 h-5" />
                      </Button>
                      
                      <p className="text-xs text-slate-500 text-center mt-4">
                        {t("contact.form.legal")}
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