import { Target, ShieldAlert, FileText, PackageCheck, Calculator, FileCheck } from 'lucide-react';

export const services = [
  {
    id: 'strategic-management',
    title: 'Strategic Management',
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
    id: 'business-plan-development',
    title: 'Business Plan Development',
    description: 'Whether you are seeking investment or aiming to restructure, our extensive business plans provide a solid blueprint. We handle financial modeling, market research, and operational outlines.',
    benefits: ['Investor-ready documentation', 'Realistic financial modeling', 'Clear operational blueprint', 'Market positioning'],
    icon: FileText,
  },
  {
    id: 'stock-control-management',
    title: 'Stock Control and Management',
    description: 'Optimize your inventory levels to reduce costs and improve cash flow. We implement robust systems to track, manage, and forecast stock requirements efficiently.',
    benefits: ['Reduced holding costs', 'Minimized stockouts', 'Improved inventory turnover', 'Accurate demand forecasting'],
    icon: PackageCheck,
  },
  {
    id: 'accountancy-service',
    title: 'Accountancy Service',
    description: 'Keep your finances in perfect order. Our accountancy services range from daily bookkeeping to complex financial reporting, ensuring you always have a clear picture of your financial health.',
    benefits: ['Accurate financial data', 'Tax compliance preparation', 'Cash flow management', 'Expense tracking'],
    icon: Calculator,
  },
  {
    id: 'audit-and-assurance',
    title: 'Audit and Assurance',
    description: 'This includes both internal and external audits. Gain independent verification of your financial records to build trust with stakeholders by ensuring transparency, accuracy, and adherence to standard accounting practices.',
    benefits: ['Stakeholder confidence', 'Internal control evaluation', 'Fraud prevention', 'Statutory compliance'],
    icon: FileCheck,
  }
];
