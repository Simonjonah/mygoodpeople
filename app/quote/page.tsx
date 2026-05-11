'use client';

import { useState } from 'react';
import { submitQuote } from '../actions';
import { services } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success?: boolean; message?: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const res = await submitQuote(formData);
    
    setResult(res);
    setIsSubmitting(false);

    if (res.success) {
      e.currentTarget.reset();
    }
  }

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-[#0A192F] text-white py-20 px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Request A Quote</h1>
        <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
          Let us know what you need. We provide customized solutions to fit your specific business requirements and goals.
        </p>
      </section>

      <section className="py-20 flex-1 relative -mt-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-white shadow-xl rounded-sm p-12 lg:p-16 border-t-[6px] border-[#D4AF37]">
            
            {result ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-[#0A192F] mb-4">Request Received</h3>
                <p className="text-slate-600 text-lg">{result.message}</p>
                <button 
                  onClick={() => setResult(null)}
                  className="mt-8 border border-[#0A192F] text-[#0A192F] px-8 py-3 rounded font-bold hover:bg-slate-50 transition-colors inline-block"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-2xl font-bold text-[#0A192F] mb-8 text-center">Tell us about your project</h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name *</label>
                      <input type="text" id="name" name="name" required className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Business Name *</label>
                      <input type="text" id="business" name="business" required className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service Needed *</label>
                      <select id="service" name="service" required className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors appearance-none" defaultValue="">
                        <option value="" disabled>Select a service</option>
                        {services.map(s => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                        <option value="multiple">Multiple Services</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Estimated Budget (Optional)</label>
                      <select id="budget" name="budget" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors appearance-none" defaultValue="">
                        <option value="" disabled>Select a range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message *</label>
                    <textarea id="message" name="message" rows={6} required placeholder="Please provide additional details about your company and your project goals..." className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"></textarea>
                  </div>
                  
                  <div className="text-center pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-[#0A192F] text-white px-12 py-4 rounded font-bold hover:bg-[#112240] transition-colors shadow-lg disabled:opacity-70 inline-flex items-center justify-center min-w-[240px] w-full md:w-auto"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                    <p className="text-xs text-slate-400 mt-6">By submitting this form, you agree to our privacy policy. We will never share your information.</p>
                  </div>
                </form>
              </>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}
