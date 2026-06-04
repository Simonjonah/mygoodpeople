'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { saveSeoSettings, SeoSettings } from '@/lib/seo';

// Extremely basic hardcoded auth for demonstration
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password'; 

export async function login(formData: FormData) {
  const username = formData.get('username');
  const password = formData.get('password');

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set('admin_auth', 'true', { 
      path: '/' 
    });
    return { success: true };
  } else {
    return { success: false, error: 'Invalid credentials' };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_auth');
  redirect('/admin/login');
}

export async function updateSeo(settings: SeoSettings) {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('admin_auth');
  
  if (!authCookie || authCookie.value !== 'true') {
    return { success: false, error: 'Unauthorized' };
  }

  const result = saveSeoSettings(settings);
  return result;
}
