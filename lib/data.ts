import { Target, ShieldAlert, FileText, Calculator, FileCheck } from 'lucide-react';

export const services = [
  {
    id: 'strategy-management',
    title: 'Strategy Management',
    description: 'We help you chart a definitive course for your business. From market analysis to goal setting and execution framework, our strategy management service ensures your entire team is aligned and focused on growth.',
    benefits: ['Clear roadmap for growth', 'Competitive advantage identification', 'Resource optimization', 'Aligned team objectives'],
    icon: Target,
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    description: 'Protect your business from unforeseen threats. We identify structural, financial, and operational risks, providing you with mitigation strategies that safeguard your assets and reputation.',
    benefits: ['Proactive threat identification', 'Financial safeguarding', 'Regulatory compliance assurance', 'Business continuity planning'],
    icon: ShieldAlert,
  },
  {
    id: 'business-plans',
    title: 'Business Plan Development',
    description: 'Whether you are seeking investment or aiming to restructure, our extensive business plans provide a solid blueprint. We handle financial modeling, market research, and operational outlines.',
    benefits: ['Investor-ready documentation', 'Realistic financial modeling', 'Clear operational blueprint', 'Market positioning'],
    icon: FileText,
  },
  {
    id: 'accountancy',
    title: 'Accountancy Services',
    description: 'Keep your finances in perfect order. Our accountancy services range from daily bookkeeping to complex financial reporting, ensuring you always have a clear picture of your financial health.',
    benefits: ['Accurate financial data', 'Tax compliance preparation', 'Cash flow management', 'Expense tracking'],
    icon: Calculator,
  },
  {
    id: 'audits',
    title: 'Auditing & Assurance',
    description: 'Gain independent verification of your financial records. Our audit services build trust with stakeholders by ensuring transparency, accuracy, and adherence to standard accounting practices.',
    benefits: ['Stakeholder confidence', 'Internal control evaluation', 'Fraud prevention', 'Statutory compliance'],
    icon: FileCheck,
  }
];
