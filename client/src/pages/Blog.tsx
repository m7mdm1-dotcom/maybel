import { GlobalCTA } from "@/components/GlobalCTA";
import { useI18n } from "@/lib/i18n";

const blogPosts: Record<string, { category: string; readMore: string; genericDesc: string; titles: string[] }> = {
  en: {
    category: "Growth Insight",
    readMore: "Read Article",
    genericDesc: "Learn how implementing structured automation and optimized CRM workflows can significantly boost your revenue and team efficiency.",
    titles: [
      "Speed-to-Lead in MENA",
      "How to Build the Perfect Sales Pipeline",
      "WhatsApp Automation That Converts",
      "Reducing No-Shows with Smart Reminders",
      "Reactivating Old Leads for New Revenue",
      "Agency Scaling Strategies",
    ],
  },
  ar: {
    category: "رؤى النمو",
    readMore: "اقرأ المقال",
    genericDesc: "تعلم كيف يمكن لتطبيق الأتمتة المنظمة وسير عمل CRM المحسّن أن يعزز إيراداتك وكفاءة فريقك بشكل كبير.",
    titles: [
      "سرعة الوصول للعملاء في الشرق الأوسط",
      "كيف تبني خط أنابيب المبيعات المثالي",
      "أتمتة واتساب التي تحقق التحويلات",
      "تقليل عدم الحضور بالتذكيرات الذكية",
      "إعادة تنشيط العملاء القدامى لإيرادات جديدة",
      "استراتيجيات توسيع الوكالات",
    ],
  },
};

export default function Blog() {
  const { lang } = useI18n();
  const data = blogPosts[lang];

  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-100/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
              {lang === "ar" ? "مدونة MAYBEL" : "MAYBEL Blog"}
            </h1>
            <p className="text-xl text-slate-600">
              {lang === "ar" ? "أنظمة، أتمتة ورؤى النمو" : "Systems, Automation & Growth Insights"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data.titles.map((title, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all cursor-pointer">
                <span className="text-sm font-semibold text-primary mb-3 block">{data.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">{data.genericDesc}</p>
                <span className="text-primary font-medium hover:underline">{data.readMore} &rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </div>
  );
}