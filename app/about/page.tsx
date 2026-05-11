import { motion } from 'motion/react';
import Image from 'next/image';
import { Target, Eye, ShieldCheck, Users, Briefcase, Award } from 'lucide-react';

const coreValues = [
  { icon: ShieldCheck, title: 'Integrity', description: 'Upholding the highest standards of financial and business ethics in all our dealings.' },
  { icon: Target, title: 'Precision', description: 'Delivering accurate, well-researched, and data-driven strategies.' },
  { icon: Users, title: 'Partnership', description: 'We treat your business as our own, fostering long-term relationships.' },
  { icon: Briefcase, title: 'Professionalism', description: 'Providing corporate-level service to businesses of all sizes.' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Header */}
      <section className="bg-[#0A192F] text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-slate-300 font-light">
            Discover the team and the philosophy driving GoodPeople Corporate Consultancy Ltd.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
              <Image 
                src="/about.jpg" 
                alt="Corporate office" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-[#0A192F] mb-6">Who We Are</h2>
              <div className="text-slate-600 space-y-4 leading-relaxed">
                <p>
                  GoodPeople Corporate Consultancy Ltd was founded on a simple premise: SMEs and growing businesses deserve access to the same caliber of structured, professional guidance as large corporations. 
                </p>
                <p>
                  We are a dedicated team of business strategists, risk analysts, and financial experts. Our collective experience spans across multiple industries, allowing us to bring a wealth of diverse insights to every client engagement.
                </p>
                <p>
             We do not just hand over a report and walk away. We partner with our clients to ensure our strategies, plans, and systems are embedded into their daily operations, driving real, sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-50 rounded border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#0A192F] text-white rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#0A192F] mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To equip businesses and startups with robust structures, clear strategies, and sound financial management, enabling them to operate efficiently and scale confidently.
              </p>
            </div>
            <div className="p-10 bg-slate-50 rounded border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#D4AF37] text-white rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#0A192F] mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the premier partner for SMEs worldwide, globally recognized for elevating business standards and fostering long-term corporate success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold text-[#0A192F] mb-4">Our Core Values</h2>
            <p className="text-slate-600 mb-12">These principles guide every recommendation we make and every strategy we build.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-8 border hover:border-[#D4AF37] transition-colors rounded text-center shadow-sm">
                  <Icon className="w-10 h-10 mx-auto text-[#D4AF37] mb-6" />
                  <h4 className="font-bold text-[#0A192F] text-lg mb-3">{value.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Trust */}
      <section className="py-20 bg-[#0A192F] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <Award className="w-16 h-16 text-[#D4AF37] mx-auto mb-8" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Why Clients Trust Us</h2>
          <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
            &quot;Trust is built on consistency. We deliver meticulous, objective, and highly actionable advice every single time.&quot;
          </p>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto opacity-50" />
        </div>
      </section>
    </div>
  );
}
