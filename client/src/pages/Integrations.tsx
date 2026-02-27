import { GlobalCTA } from "@/components/GlobalCTA";
import { useI18n } from "@/lib/i18n";

const integrationsList = [
  "Meta Lead Forms", "Google Ads", "TikTok Leads", "LinkedIn Lead Gen",
  "WhatsApp API", "Twilio", "Stripe", "Google Calendar", "Outlook",
  "Zoom", "Zapier", "Make", "Webhooks", "Slack", "Google Sheets",
  "Shopify", "WooCommerce", "Google Tag Manager", "Meta Pixel",
  "Mailgun", "SendGrid", "Calendly", "Typeform", "Jotform",
  "Google My Business", "Yext", "CallRail", "LeadConnector",
  "ActiveCampaign", "HubSpot", "Salesforce", "Pipedrive",
  "QuickBooks", "Xero", "PayPal", "Square",
  "WordPress", "ClickFunnels", "Kajabi",
  "Pabbly Connect", "n8n", "IFTTT",
  "Google Analytics", "Hotjar", "Segment",
  "Intercom", "Drift", "LiveChat",
  "Ringcentral", "Vonage", "Plivo",
  "Custom API", "REST API", "GraphQL",
];

export default function Integrations() {
  const { t } = useI18n();

  return (
    <div className="pt-20 pb-0 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-100/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">{t("integrations.title")}</h1>
          <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
            {t("integrations.desc")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {integrationsList.map(tag => (
              <span key={tag} className="px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-full text-sm font-medium text-slate-700 hover:text-primary hover:border-primary/50 hover:bg-violet-50 cursor-default transition-all duration-300">
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