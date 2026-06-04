import fs from 'fs';
import path from 'path';

const SEO_FILE = path.join(process.cwd(), 'seo.json');

export interface SeoSettings {
  title: string;
  description: string;
  keywords: string;
  logo: string;
  websiteUrl: string;
}

const defaultSeo: SeoSettings = {
  title: 'GoodPeople Corporate Consultancy Ltd | Professional Business & Financial Solutions',
  description: 'GoodPeople Corporate Consultancy Ltd helps you plan, manage & grow with confidence. Specializing in Strategy Management, Risk Management, Business Plans, Accountancy, and Audits.',
  keywords: 'Business consulting, Risk management services, Accountancy services, Business plan experts',
  logo: '/logo.jpeg',
  websiteUrl: 'https://example.com'
};

export function getSeoSettings(): SeoSettings {
  try {
    if (fs.existsSync(SEO_FILE)) {
      const data = fs.readFileSync(SEO_FILE, 'utf8');
      return JSON.parse(data) as SeoSettings;
    }
  } catch (error) {
    console.error('Error reading SEO file:', error);
  }
  return defaultSeo;
}

export function saveSeoSettings(settings: SeoSettings) {
  try {
    fs.writeFileSync(SEO_FILE, JSON.stringify(settings, null, 2), 'utf8');
    return { success: true };
  } catch (error) {
    console.error('Error writing SEO file:', error);
    return { success: false, error: 'Failed to save settings' };
  }
}
