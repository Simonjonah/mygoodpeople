import { getSeoSettings } from '@/lib/seo';
import SeoForm from './SeoForm';
import { logout } from '../actions';
import { LogOut, Home, Settings } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage() {
  const seoSettings = getSeoSettings();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-[#0A192F] text-white py-4 px-6 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-3">
          <Settings className="text-[#D4AF37]" />
          <h1 className="text-xl font-bold tracking-wide">Admin Dashboard</h1>
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <Link href="/" className="flex items-center text-slate-300 hover:text-white transition-colors">
            <Home className="w-4 h-4 mr-2" />
            View Site
          </Link>
          <form action={logout}>
            <button type="submit" className="flex items-center text-slate-300 hover:text-white transition-colors">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </form>
        </div>
      </header>
      
      <main className="flex-1 p-6 lg:p-12 max-w-5xl mx-auto w-full">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-xl font-bold text-[#0A192F] mb-6 border-b border-slate-100 pb-4">SEO & Site Settings</h2>
          <SeoForm initialSettings={seoSettings} />
        </div>
      </main>
    </div>
  );
}
