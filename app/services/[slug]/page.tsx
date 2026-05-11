import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/lib/data';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-[#0A192F] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-[0.05] blur-3xl rounded-full" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <Link href="/services" className="inline-flex items-center text-[#D4AF37] text-sm hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <div className="flex items-center mb-6">
            <Icon className="w-12 h-12 text-[#D4AF37] mr-6" strokeWidth={1.5} />
            <h1 className="font-heading text-4xl md:text-5xl font-bold">{service.title}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none text-slate-600 mb-16">
            <p className="text-xl leading-relaxed text-[#0A192F] font-medium mb-8">
              {service.description}
            </p>
            <p>
              At GoodPeople Corporate Consultancy Ltd, we approach {service.title.toLowerCase()} with a meticulous and objective mindset. Our seasoned professionals work closely with your organization to ensure that every aspect of the service is tailored to your unique operational context and industry demands.
            </p>
            <p>
              Whether you are a startup needing foundational structure or an established SME looking to optimize processes, our comprehensive {service.title.toLowerCase()} suite offers the clarity and actionable insights required to succeed in a competitive landscape.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-8 rounded-sm mb-16">
            <h3 className="font-heading text-2xl font-bold text-[#0A192F] mb-6">Service Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle2 className="text-[#D4AF37] w-5 h-5 mt-0.5 mr-3 shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center p-12 bg-[#0A192F] text-white rounded-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-10 blur-xl rounded-full" />
             <h3 className="font-heading text-3xl font-bold mb-4">Ready to proceed?</h3>
             <p className="text-slate-300 mb-8 max-w-xl mx-auto">
               Secure our {service.title} services today. Let&apos;s discuss your specific needs and outline a customized plan of action.
             </p>
             <Link href={`/quote?service=${service.id}`} className="bg-[#D4AF37] text-[#0A192F] px-8 py-3 rounded font-bold hover:bg-[#E5C354] transition-colors inline-block relative z-10">
               Request Service
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
