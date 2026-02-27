import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useI18n } from "@/lib/i18n";

const navKeys = [
  { key: "nav.home", href: "/" },
  { key: "nav.platform", href: "/platform" },
  { key: "nav.solutions", href: "/solutions" },
  { key: "nav.pricing", href: "/pricing" },
  { key: "nav.integrations", href: "/integrations" },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.about", href: "/about" },
  { key: "nav.contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang, setLang } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/20">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="text-2xl font-bold tracking-tight text-primary cursor-pointer">
              MAYBEL<span className="text-violet-500">.</span>
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {navKeys.map((link) => (
            <Link key={link.key} href={link.href}>
              <span className={`text-sm font-medium cursor-pointer transition-colors ${
                location === link.href ? 'text-primary' : 'text-slate-600 hover:text-primary'
              }`}>
                {t(link.key)}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="https://app.maybel.io" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-slate-600 hover:text-primary">
              {t("nav.login")}
            </Button>
          </a>
          <Link href="/contact">
            <Button className="bg-primary text-white hover:bg-violet-700 shadow-md">
              {t("nav.bookDemo")}
            </Button>
          </Link>
          <div className="ps-4 border-s border-slate-200 text-sm font-medium text-slate-400 flex gap-2">
            <button
              onClick={() => setLang("en")}
              className={`cursor-pointer transition-colors ${lang === "en" ? "text-slate-800 font-bold" : "hover:text-slate-800"}`}
              data-testid="button-lang-en"
            >
              EN
            </button>
            <span>|</span>
            <button
              onClick={() => setLang("ar")}
              className={`cursor-pointer transition-colors ${lang === "ar" ? "text-slate-800 font-bold" : "hover:text-slate-800"}`}
              data-testid="button-lang-ar"
            >
              AR
            </button>
          </div>
        </div>

        <div className="lg:hidden flex items-center">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-slate-800" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <div className="flex flex-col gap-6 mt-12 overflow-y-auto">
                {navKeys.map((link) => (
                  <Link key={link.key} href={link.href} onClick={() => setMobileOpen(false)}>
                    <span className={`text-lg font-medium cursor-pointer ${
                      location === link.href ? 'text-primary' : 'text-slate-800'
                    }`}>
                      {t(link.key)}
                    </span>
                  </Link>
                ))}
                <div className="h-px bg-slate-100 my-2" />
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-primary text-white">{t("nav.bookDemo")}</Button>
                </Link>
                <a href="https://app.maybel.io" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">{t("nav.login")}</Button>
                </a>
                <div className="flex gap-4 justify-center text-sm font-medium text-slate-400">
                  <button
                    onClick={() => setLang("en")}
                    className={`cursor-pointer ${lang === "en" ? "text-slate-800 font-bold" : ""}`}
                  >
                    EN
                  </button>
                  <span>|</span>
                  <button
                    onClick={() => setLang("ar")}
                    className={`cursor-pointer ${lang === "ar" ? "text-slate-800 font-bold" : ""}`}
                  >
                    AR
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}