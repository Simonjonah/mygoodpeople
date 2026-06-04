'use client';

import { useState } from 'react';
import { updateSeo } from '../actions';
import type { SeoSettings } from '@/lib/seo';
import { Save, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  initialSettings: SeoSettings;
}

export default function SeoForm({ initialSettings }: Props) {
  const router = useRouter();
  const [settings, setSettings] = useState<SeoSettings>(initialSettings);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);
    
    try {
      const result = await updateSeo(settings);
      if (result?.success) {
        setMessage({ type: 'success', text: 'Settings updated successfully' });
        router.refresh(); // Refresh to update server components reading SEO
      } else {
        setMessage({ type: 'error', text: result?.error || 'Failed to update settings' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An unexpected error occurred' });
    } finally {
      setIsSaving(false);
      setTimeout(() => setMessage(null), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {message && (
        <div className={`p-4 rounded flex items-center ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
          {message.type === 'success' && <CheckCircle className="w-5 h-5 mr-2" />}
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="title">
            Website Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={settings.title}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all"
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="description">
            Meta Description
          </label>
          <textarea
            id="description"
            name="description"
            value={settings.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all resize-none"
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="keywords">
            Meta Keywords (comma separated)
          </label>
          <input
            id="keywords"
            name="keywords"
            type="text"
            value={settings.keywords}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="logo">
            Logo URL / Path
          </label>
          <input
            id="logo"
            name="logo"
            type="text"
            value={settings.logo}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all"
          />
          <p className="text-xs text-slate-500 mt-1">Example: /logo.jpeg or https://...</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="websiteUrl">
            Website URL (Canonical base)
          </label>
          <input
            id="websiteUrl"
            name="websiteUrl"
            type="url"
            value={settings.websiteUrl}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all"
          />
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100 flex justify-end">
        <button
          type="submit"
          disabled={isSaving}
          className="bg-[#0A192F] hover:bg-[#112a4f] text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center disabled:opacity-70"
        >
          {isSaving ? (
            'Saving...'
          ) : (
            <>
              <Save className="w-5 h-5 mr-2" />
              Save Settings
            </>
          )}
        </button>
      </div>
    </form>
  );
}
