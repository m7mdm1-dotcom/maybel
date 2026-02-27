import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Product", href: "#product" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
  { name: "Integrations", href: "#integrations" },
  { name: "About", href: "#about" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-800/50">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="text-2xl font-bold tracking-tight text-white cursor-pointer">
              MAYBEL<span className="text-blue-500">.</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800/50">
            Login
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-blue-500/50">
            Book a Demo &rarr;
          </Button>
          <div className="pl-4 border-l border-slate-700 text-sm font-medium text-slate-500 flex gap-2">
            <span className="text-white cursor-pointer">EN</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">AR</span>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-950 border-slate-800 text-white">
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-slate-300 hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-slate-800 my-2" />
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">Book a Demo</Button>
                <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">Login</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
