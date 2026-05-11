'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Target, ShieldAlert, FileText, PackageCheck, Calculator, FileCheck, ArrowRight, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

const services = [
  {
    title: 'Strategic management',
    description: 'Comprehensive business strategy development and implementation.',
    icon: Target,
    href: '/services/strategic-management'
  },
  {
    title: 'Risk management',
    description: 'Identify, assess, and mitigate risks to protect your business.',
    icon: ShieldAlert,
    href: '/services/risk-management'
  },
  {
    title: 'Business plan development',
    description: 'Detailed, actionable business plans for startups and growth.',
    icon: FileText,
    href: '/services/business-plan-development'
  },
  {
    title: 'Stock control and management',
    description: 'Optimize inventory levels and track stock requirements efficiently.',
    icon: PackageCheck,
    href: '/services/stock-control-management'
  },
  {
    title: 'Accountancy service',
    description: 'Expert financial record keeping and management accounts.',
    icon: Calculator,
    href: '/services/accountancy-service'
  },
  {
    title: 'Audit and assurance',
    description: 'Independent compliance and financial assurance services.',
    icon: FileCheck,
    href: '/services/audit-and-assurance'
  }
];

const whyChooseUs = [
  { title: 'Proven Expertise', description: 'Decades of combined experience in corporate environments.' },
  { title: 'Tailored Solutions', description: "We don't believe in one-size-fits-all. Every strategy is customized." },
  { title: 'Focus on Growth', description: 'Our solutions are designed to scale your operations efficiently.' },
  { title: 'Transparent Process', description: 'Clear communication and reporting at every stage.' },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-[#0A192F] text-white py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Subtle background pattern/gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#112240] to-[#0A192F] z-0" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37] opacity-[0.03] blur-3xl rounded-bl-full z-0" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              Professional <span className="text-[#D4AF37]">Business</span> & Financial Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light">
              Helping You Plan, Manage & Grow With Confidence. We partner with SMEs and corporate organizations to navigate complex challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/quote"
                className="bg-[#D4AF37] text-[#0A192F] px-8 py-4 rounded font-bold hover:bg-[#E5C354] transition-colors text-center inline-flex items-center justify-center"
              >
                Get Consultation
              </Link>
              <a 
                href="https://wa.me/12345678900?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 bg-white/5 text-white px-8 py-4 rounded font-bold hover:bg-white/10 hover:border-slate-400 transition-colors text-center inline-flex items-center justify-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-slate-100">
                <Image 
                  src="/about.jpg" 
                  alt="Corporate consulting meeting" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#D4AF37] opacity-20 blur-2xl rounded-full" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A192F] mb-6">Structuring Businesses for Sustainable Success.</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                GoodPeople Corporate Consultancy Ltd specializes in providing top-tier strategy, risk management, and financial charting for growing businesses and startups. We bring corporate-level structure to SMEs, equipping them to compete and thrive in today&apos;s demanding market.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our approach is deeply analytical yet highly practical, ensuring that every plan we develop can be successfully executed by your team.
              </p>
              <Link href="/about" className="inline-flex items-center font-semibold text-[#0A192F] hover:text-[#D4AF37] transition-colors group">
                More about our company 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">Our Core Services</h2>
            <p className="text-slate-600">Expert guidance across critical business functions to ensure operational excellence and financial integrity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col"
                >
                  <div className="w-14 h-14 bg-blue-50 text-[#0A192F] rounded mb-6 flex items-center justify-center group-hover:bg-[#0A192F] group-hover:text-white transition-colors">
                    <Icon strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#0A192F] mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-1">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center text-sm font-semibold text-[#0A192F] hover:text-[#D4AF37] transition-colors mt-auto w-fit">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="bg-[#D4AF37] text-[#0A192F] px-8 py-3 rounded text-sm font-bold hover:bg-[#E5C354] transition-colors inline-block shadow-sm">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-[#0A192F] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Why Clients Trust Us</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We go beyond standard consultancy. We embed ourselves in your challenges and work relentlessly to design structures that yield measurable outcomes.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#D4AF37] w-6 h-6 shrink-0 mt-0.5 mr-4" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square lg:aspect-auto lg:h-full relative rounded-sm overflow-hidden border-l-8 border-b-8 border-[#D4AF37]">
                <Image 
                  src="https://picsum.photos/seed/whyus/800/800" 
                  alt="Business professionals collaborating" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#D4AF37] text-[#0A192F] relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Grow Your Business?</h2>
            <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto opacity-90">
              Schedule a consultation today to discuss how we can structure your business for its next phase of growth.
            </p>
            <Link 
              href="/quote"
              className="bg-white text-[#0A192F] px-10 py-5 rounded font-bold hover:bg-slate-100 transition-colors text-lg inline-flex shadow-xl shadow-black/10"
            >
              Request a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full text-[#D4AF37] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[#0A192F] mb-1">Call Us</h4>
              <p className="text-slate-500 text-sm opacity-80">+1 (234) 567-8900</p>
            </div>
            <div className="flex flex-col items-center relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10" />
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full text-[#D4AF37] mb-4 bg-white relative z-10 shadow-sm border border-slate-50">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[#0A192F] mb-1">Email Us</h4>
              <p className="text-slate-500 text-sm opacity-80">wamuritu@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full text-[#D4AF37] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[#0A192F] mb-1">Visit Us</h4>
              <p className="text-slate-500 text-sm opacity-80 max-w-xs text-center">BuruBuru Business complex next to cooperative Bank, Mumias South road, Nairobi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
