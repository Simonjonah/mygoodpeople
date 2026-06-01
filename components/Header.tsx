'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <div className="relative h-20 w-64 md:w-80 md:h-24">
            <Image 
              src="/logo.jpeg" 
              alt="GoodPeople Corporate Consultancy Ltd" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Nav */}
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
            className="bg-[#D4AF37] text-[#0A192F] px-6 py-2.5 rounded text-sm font-bold hover:bg-[#E5C354] transition-colors shadow-sm"
          >
            Request a Quote
          </Link>
        </nav>
        
        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-slate-200 absolute top-20 left-0 w-full"
          >
            <nav className="flex flex-col px-4 pt-2 pb-6 space-y-4 shadow-inner bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-slate-600 hover:text-[#D4AF37] transition-colors py-2 border-b border-slate-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/quote" 
                className="bg-[#D4AF37] text-[#0A192F] text-center px-6 py-3 rounded text-sm font-bold hover:bg-[#E5C354] transition-colors mt-4 inline-block w-full shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Request a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
