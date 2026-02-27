export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <span className="text-2xl font-bold tracking-tight text-white">
              MAYBEL<span className="text-primary">.</span>
            </span>
            <p className="max-w-xs text-sm">
              We help businesses across UAE & MENA centralize their sales, messaging, and automation in one optimized platform.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#product" className="hover:text-white transition-colors">Product</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} MAYBEL. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:support@maybel.io" className="hover:text-white transition-colors">support@maybel.io</a>
          </div>
        </div>
      </div>
    </footer>
  );
}