import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, Calendar } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const CALENDAR_URL = "https://link.maybel.io/widget/booking/XNja6c2FvuiCvHyQa4KQ";

export default function Contact() {
  const { t } = useI18n();

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
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-bold text-slate-900">{t("contact.calendar.title")}</h3>
                </div>
                <p className="text-slate-500 text-sm mb-6">{t("contact.calendar.subtitle")}</p>
                <iframe
                  src={CALENDAR_URL}
                  className="w-full rounded-xl border-0"
                  style={{ minHeight: "500px", height: "70vh" }}
                  data-testid="calendar-iframe"
                  title="Book a call"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}