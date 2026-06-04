'use client';

import { useState } from 'react';
import { login } from '../actions';
import { ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    
    try {
      const result = await login(formData);
      if (result?.success) {
        router.push('/admin/dashboard');
        router.refresh(); // Refresh to apply middleware session state correctly
      } else if (result?.error) {
        setError(result.error);
        setIsLoading(false);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-slate-100 p-8 space-y-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-[#0A192F] rounded-full flex items-center justify-center text-[#D4AF37] mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Admin Login</h1>
          <p className="text-slate-500 text-sm text-center mt-2">
            Sign in to access the control panel
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded border border-red-100 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="username">Username</label>
            <input 
              id="username"
              name="username"
              type="text" 
              placeholder="admin"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="password">Password</label>
            <input 
              id="password"
              name="password"
              type="password"
              placeholder="password"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all"
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#D4AF37] hover:bg-[#B6962A] text-[#0A192F] font-bold py-3 px-4 rounded transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <p className="text-xs text-center text-slate-400 mt-6">
          Default credentials: admin / password
        </p>
      </div>
    </div>
  );
}
