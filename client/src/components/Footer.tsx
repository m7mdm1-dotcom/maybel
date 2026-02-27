export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <span className="text-2xl font-bold tracking-tight text-white">
              MAYBEL<span className="text-blue-500">.</span>
            </span>
            <div className="space-y-2">
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                MAYBEL was created for founders who want structure instead of chaos.
              </p>
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                In high-speed markets like UAE & MENA, businesses need systems — not disconnected tools.
              </p>
            </div>
            <p className="text-blue-400 font-medium text-sm">
              We don't sell tools. We build growth infrastructure.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#platform" className="hover:text-blue-400 transition-colors">Platform</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm grid grid-cols-1 md:grid-cols-3 gap-6">
          <p className="text-slate-500">© {new Date().getFullYear()} MAYBEL. All rights reserved.</p>
          
          <div className="text-xs text-slate-600 space-y-2">
            <p><strong>Privacy:</strong> MAYBEL collects limited data for service delivery and optimization. We apply security measures and respect data rights.</p>
            <p><strong>Terms:</strong> Subscriptions are billed monthly or annually. Users are responsible for account security.</p>
          </div>

          <div className="flex md:justify-end">
            <a href="mailto:support@maybel.io" className="text-slate-400 hover:text-white transition-colors">support@maybel.io</a>
          </div>
        </div>
      </div>
    </footer>
  );
}