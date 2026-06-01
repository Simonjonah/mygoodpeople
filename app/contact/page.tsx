'use client';

import { useState } from 'react';
import { submitContact } from '../actions';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success?: boolean; message?: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const res = await submitContact(formData);
    
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
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
          We are ready to assist you. Reach out to discuss how GoodPeople Corporate Consultancy Ltd can help structure your success.
        </p>
      </section>

      <section className="py-20 flex-1 relative -mt-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white shadow-xl rounded-sm overflow-hidden">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 bg-[#112240] text-white p-12">
              <h3 className="font-heading text-2xl font-bold mb-8">Contact Information</h3>
              <p className="text-slate-300 mb-12 text-sm leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#D4AF37] mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">Phone</h4>
                    <a href="tel:+12345678900" className="text-slate-300 text-sm hover:text-[#D4AF37]">+1 (234) 567-8900</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#D4AF37] mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">Email</h4>
                    <a href="mailto:gpcorporate@gmail.com" className="text-slate-300 text-sm hover:text-[#D4AF37]">gpcorporate@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#D4AF37] mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">Location</h4>
                    <span className="text-slate-300 text-sm leading-relaxed">BuruBuru Business complex next to cooperative Bank,<br/>Mumias South road, Nairobi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-12 lg:p-16">
              <h3 className="font-heading text-2xl font-bold text-[#0A192F] mb-8">Send us a message</h3>
              
              {result && (
                <div className={`p-4 rounded-sm mb-8 text-sm font-semibold ${result.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {result.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                    <input type="text" id="name" name="name" required className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" id="phone" name="phone" required className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#D4AF37] text-[#0A192F] px-8 py-4 rounded font-bold hover:bg-[#E5C354] transition-colors shadow-lg disabled:opacity-70 flex items-center justify-center min-w-[200px]"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="h-[400px] w-full bg-slate-300 relative">
        <iframe 
          src="https://maps.google.com/maps?q=BuruBuru%20Business%20complex,%20Mumias%20South%20road,%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </section>
    </div>
  );
}
