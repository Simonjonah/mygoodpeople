import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GoodPeople Corporate Consultancy Ltd | Professional Business & Financial Solutions',
  description: 'GoodPeople Corporate Consultancy Ltd helps you plan, manage & grow with confidence. Specializing in Strategy Management, Risk Management, Business Plans, Accountancy, and Audits.',
  keywords: 'Business consulting, Risk management services, Accountancy services, Business plan experts',
};

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}>
      <body className="font-sans text-slate-800 antialiased bg-white flex flex-col min-h-screen" suppressHydrationWarning>
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200">
          <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="flex flex-col">
              <span className="font-heading font-bold text-2xl text-[#0A192F] leading-none tracking-tight">GoodPeople</span>
              <span className="text-[10px] text-[#D4AF37] font-semibold tracking-wider uppercase mt-1">Corporate Consultancy</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-[#D4AF37] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/quote" 
                className="bg-[#0A192F] text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-[#112240] transition-colors"
              >
                Request a Quote
              </Link>
            </nav>
            
            <button className="md:hidden p-2 text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </header>

        <main className="flex-1 flex flex-col">
          {children}
        </main>

        <footer className="bg-[#0A192F] text-white pt-16 pb-8 border-t-[6px] border-[#D4AF37]">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="flex flex-col mb-6">
                <span className="font-heading font-bold text-2xl text-white leading-none tracking-tight">GoodPeople</span>
                <span className="text-[10px] text-[#D4AF37] font-semibold tracking-wider uppercase mt-1">Corporate Consultancy</span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed">
                Helping you plan, manage & grow with confidence. Professional business and financial solutions for SMEs, startups, and corporate organizations.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-white tracking-tight">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-white tracking-tight">Our Services</h4>
              <ul className="space-y-3">
                <li><Link href="/services/strategy-management" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Strategy Management</Link></li>
                <li><Link href="/services/risk-management" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Risk Management</Link></li>
                <li><Link href="/services/business-plans" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Business Plans</Link></li>
                <li><Link href="/services/accountancy" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Accountancy</Link></li>
                <li><Link href="/services/audits" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Auditing & Assurance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-white tracking-tight">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>Email: wamuritu@gmail.com</li>
                <li>Phone: +1 (234) 567-8900</li>
                <li>Location: Financial District, 123 Business Blvd</li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} GoodPeople Corporate Consultancy Ltd. All rights reserved.
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/12345678900?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20services" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={32} />
        </a>
      </body>
    </html>
  );
}
