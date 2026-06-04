import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import Header from '@/components/Header';

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

import { getSeoSettings } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const seo = getSeoSettings();
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    metadataBase: seo.websiteUrl !== 'https://example.com' ? new URL(seo.websiteUrl) : undefined,
    icons: {
      icon: seo.logo,
      shortcut: seo.logo,
      apple: seo.logo,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}>
      <body className="font-sans text-slate-800 antialiased bg-white flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />

        <main className="flex-1 flex flex-col">
          {children}
        </main>

        <footer className="bg-[#0A192F] text-white pt-16 pb-8 border-t-[6px] border-[#D4AF37]">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="inline-block mb-6 relative h-16 w-56">
                <Image 
                  src="/logo.jpeg" 
                  alt="GoodPeople Corporate Consultancy Ltd" 
                  fill 
                  className="object-contain object-left"
                />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed">
                Helping you plan, manage & grow with confidence. Professional business and financial solutions for SMEs, startups, and corporate organizations.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-white tracking-tight">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">About Us</Link></li>
                <li><Link href="/services" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-white tracking-tight">Our Services</h4>
              <ul className="space-y-3">
                <li><Link href="/services/strategic-management" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Strategic planning & management</Link></li>
                <li><Link href="/services/risk-management" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Enterprise Risk Management</Link></li>
                <li><Link href="/services/stock-control-management" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Stock control and management</Link></li>
                <li><Link href="/services/accountancy-service" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Accounting and bookkeeping</Link></li>
                <li><Link href="/services/audit-and-assurance" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Audit and assurance</Link></li>
                <li><Link href="/services/business-intelligence" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Business Intelligence & Data Analytics</Link></li>
                <li><Link href="/services/tax-compliance" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Tax Advisory & Compliance</Link></li>
                <li><Link href="/services/business-research-and-trainings" className="text-slate-400 text-sm hover:text-[#D4AF37] transition-colors">Business Research and Trainings</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-white tracking-tight">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>Email: gpcorporate@gmail.com</li>
                <li>Phone: +1 (234) 567-8900</li>
                <li>Location: BuruBuru Business complex next to cooperative Bank, Mumias South road, Nairobi</li>
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
