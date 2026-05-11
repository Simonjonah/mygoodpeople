import Link from 'next/link';
import { Target, ShieldAlert, FileText, Calculator, FileCheck, ArrowRight } from 'lucide-react';

import { services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-[#0A192F] text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-slate-300 font-light">
            Comprehensive solutions designed to structure, protect, and grow your business.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-white rounded-sm shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
                <div className="bg-[#0A192F] text-white p-12 md:w-1/3 flex flex-col justify-center items-center text-center">
                  <Icon className="w-16 h-16 text-[#D4AF37] mb-6" strokeWidth={1.5} />
                  <h2 className="font-heading text-2xl font-bold">{service.title}</h2>
                </div>
                <div className="p-8 md:p-12 md:w-2/3 flex flex-col">
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div>
                    <h4 className="font-bold text-[#0A192F] mb-4 text-sm uppercase tracking-wider">Key Benefits</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-slate-600 text-sm">
                          <span className="text-[#D4AF37] mr-2 text-lg leading-none">•</span> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <Link 
                      href={`/services/${service.id}`}
                      className="inline-flex items-center text-sm font-bold text-[#0A192F] hover:text-[#D4AF37] transition-colors uppercase tracking-wider"
                    >
                      Request Service <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-[#0A192F] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-6 text-white">Need a custom solution?</h2>
          <p className="mb-8 max-w-2xl mx-auto font-medium text-slate-300">If your business requires a specialized blend of our services, we can create a tailored package for your specific needs.</p>
          <Link href="/quote" className="bg-[#D4AF37] text-[#0A192F] px-8 py-4 rounded font-bold hover:bg-[#E5C354] transition-colors inline-block shadow-lg">
            Discuss Your Requirements
          </Link>
        </div>
      </section>
    </div>
  );
}
