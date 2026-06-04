import { Target, ShieldAlert, PackageCheck, Calculator, FileCheck, BarChart3, Scale, BookOpen } from 'lucide-react';

export const services = [
  {
    id: 'strategic-management',
    title: 'Strategic planning and management',
    description: 'We help you chart a definitive course for your business. From market analysis to goal setting and execution framework, our strategy management service ensures your entire team is aligned and focused on growth.',
    benefits: ['Clear roadmap for growth', 'Competitive advantage identification', 'Resource optimization', 'Aligned team objectives'],
    icon: Target,
  },
  {
    id: 'risk-management',
    title: 'Enterprise Risk Management',
    description: 'Protect your business from unforeseen threats. We identify structural, financial, and operational risks, providing you with mitigation strategies that safeguard your assets and reputation.',
    benefits: ['Proactive threat identification', 'Financial safeguarding', 'Regulatory compliance assurance', 'Business continuity planning'],
    icon: ShieldAlert,
  },
  {
    id: 'stock-control-management',
    title: 'Stock control and management',
    description: 'Optimize your inventory levels to reduce costs and improve cash flow. We implement robust systems to track, manage, and forecast stock requirements efficiently.',
    benefits: ['Reduced holding costs', 'Minimized stockouts', 'Improved inventory turnover', 'Accurate demand forecasting'],
    icon: PackageCheck,
  },
  {
    id: 'accountancy-service',
    title: 'Accounting and bookkeeping',
    description: 'Keep your finances in perfect order. Our accountancy services range from daily bookkeeping to complex financial reporting, ensuring you always have a clear picture of your financial health.',
    benefits: ['Accurate financial data', 'Tax compliance preparation', 'Cash flow management', 'Expense tracking'],
    icon: Calculator,
  },
  {
    id: 'audit-and-assurance',
    title: 'Audit and assurance',
    description: 'This includes both internal and external audits. Gain independent verification of your financial records to build trust with stakeholders by ensuring transparency, accuracy, and adherence to standard accounting practices.',
    benefits: ['Stakeholder confidence', 'Internal control evaluation', 'Fraud prevention', 'Statutory compliance'],
    icon: FileCheck,
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence & Data Analytics',
    description: 'Helping businesses turn financial and operational data into meaningful insights for smarter decision-making, improved performance, and better strategic planning.',
    benefits: ['Power BI dashboards', 'Excel automation and reporting', 'Data visualization', 'Financial trend analysis', 'KPI tracking dashboards'],
    icon: BarChart3,
  },
  {
    id: 'tax-compliance',
    title: 'Tax Advisory & Compliance',
    description: 'Offering reliable tax support services to help businesses remain compliant, reduce risks, and improve tax efficiency through proper planning and advisory.',
    benefits: ['Corporate and individual tax returns', 'Tax planning and strategy', 'VAT / sales tax compliance', 'PAYE and payroll tax support', 'Tax health checks', 'Tax dispute support and advisory'],
    icon: Scale,
  },
  {
    id: 'business-research-and-trainings',
    title: 'Business Research and Trainings',
    description: 'Empowering your workforce and informing your strategy through comprehensive market research, feasibility studies, and tailored corporate training programs.',
    benefits: ['Market research and analysis', 'Feasibility studies', 'Corporate training programs', 'Skills development and capacity building'],
    icon: BookOpen,
  }
];
