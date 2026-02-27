import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Platform", href: "/platform" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Integrations", href: "/integrations" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();

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

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span className={`text-sm font-medium cursor-pointer transition-colors ${
                location === link.href ? 'text-primary' : 'text-slate-600 hover:text-primary'
              }`}>
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="https://app.maybel.io" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-slate-600 hover:text-primary">
              Login
            </Button>
          </a>
          <Link href="/contact">
            <Button className="bg-primary text-white hover:bg-violet-700 shadow-md">
              Book a Demo
            </Button>
          </Link>
          <div className="pl-4 border-l border-slate-200 text-sm font-medium text-slate-400 flex gap-2">
            <span className="text-slate-800 cursor-pointer">EN</span>
            <span>|</span>
            <span className="hover:text-slate-800 cursor-pointer">AR</span>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-slate-800" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <div className="flex flex-col gap-6 mt-12 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <span className={`text-lg font-medium cursor-pointer ${
                      location === link.href ? 'text-primary' : 'text-slate-800'
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                ))}
                <div className="h-px bg-slate-100 my-2" />
                <Link href="/contact">
                  <Button className="w-full bg-primary text-white">Book a Demo</Button>
                </Link>
                <a href="https://app.maybel.io" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">Login</Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}