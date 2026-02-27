import { GlobalCTA } from "@/components/GlobalCTA";

export default function Integrations() {
  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-12">API Ready Architecture.</h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Connect MAYBEL with the tools you already use to build a seamless data flow across your entire business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Meta Lead Forms", "Google Ads", "TikTok Leads", "LinkedIn Lead Gen", 
              "WhatsApp API", "Twilio", "Stripe", "Google Calendar", "Outlook", 
              "Zoom", "Zapier", "Make", "Webhooks", "Slack", "Google Sheets", 
              "Shopify", "WooCommerce", "Google Tag Manager", "Meta Pixel"
            ].map(tag => (
              <span key={tag} className="px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-full text-sm font-medium text-slate-700 hover:text-primary hover:border-primary/50 hover:bg-blue-50 cursor-default transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </div>
  );
}