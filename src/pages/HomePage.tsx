import { useState, useEffect } from 'react';
import { Layout, FileText, Briefcase, Target, Palette, Crown, Star, ChevronDown, Eye, Download, Shield, BarChart3, Sparkles } from 'lucide-react';
import { Navbar, HeroSection, FeaturesSection, CTASection, Footer } from '@/components/home';
import type { Customization } from '@/types/resume';

const stats = [
  { value: '50K+', label: 'Resumes Created' },
  { value: '4.9', label: 'User Rating' },
  { value: '85%', label: 'Interview Rate' },
  { value: 'Free', label: 'No Sign-Up' },
];

const templateCustoms: Customization[] = [
  { templateId: 'modern', primaryColor: '#2563EB', accentColor: '#2563EB', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 },
  { templateId: 'minimal', primaryColor: '#059669', accentColor: '#059669', fontFamily: 'Inter', fontSize: 13, lineSpacing: 1.4, sectionSpacing: 24 },
  { templateId: 'professional', primaryColor: '#1E40AF', accentColor: '#1E40AF', fontFamily: 'Georgia', fontSize: 14, lineSpacing: 1.55, sectionSpacing: 30 },
  { templateId: 'ats', primaryColor: '#6D28D9', accentColor: '#6D28D9', fontFamily: 'Arial', fontSize: 13, lineSpacing: 1.45, sectionSpacing: 26 },
  { templateId: 'creative', primaryColor: '#DC2626', accentColor: '#DC2626', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 },
];

const features = [
  {
    icon: Eye,
    title: 'Live Preview',
    desc: 'See your resume update in real-time as you type. No more guesswork.',
  },
  {
    icon: Download,
    title: 'Export as PDF',
    desc: 'Download a pixel-perfect PDF optimized for ATS systems and recruiters.',
  },
  {
    icon: Shield,
    title: '100% Private',
    desc: 'Your data never leaves your device. Nothing is stored or uploaded.',
  },
  {
    icon: BarChart3,
    title: 'ATS-Friendly',
    desc: 'Built with ATS parsing in mind. Your resume will pass automated screening.',
  },
  {
    icon: Sparkles,
    title: 'Pro Templates',
    desc: 'Choose from multiple professionally designed templates for any industry.',
  },
  {
    icon: Star,
    title: 'Import & Export',
    desc: 'Save your progress as JSON and pick up where you left off anytime.',
  },
];

const dropdowns = {
  templates: [
    { href: '/templates/modern', icon: <Layout style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Modern', description: 'Clean, modern design' },
    { href: '/templates/minimal', icon: <FileText style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Minimal', description: 'Simple, elegant layout' },
    { href: '/templates/professional', icon: <Briefcase style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Professional', description: 'Corporate, formal style' },
    { href: '/templates/ats', icon: <Target style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'ATS', description: 'Optimized for screening' },
    { href: '/templates/creative', icon: <Palette style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Creative', description: 'Bold, eye-catching look' },
    { href: '/templates/premium', icon: <Crown style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Premium', description: 'Most popular choice' },
  ],
  examples: [
    { href: '/examples', icon: <Layout style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Entry Level', description: 'Recent graduates' },
    { href: '/examples', icon: <Briefcase style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Mid Career', description: '5+ years experience' },
    { href: '/examples', icon: <Star style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Executive', description: 'Senior leadership' },
  ],
};

export function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [startHover, setStartHover] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeSlideIn {
        from { opacity: 0; transform: translateY(-8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{
      fontFamily: 'sans-serif',
      background: '#F8F9FA',
      color: '#111827',
      minHeight: '100vh',
      overflowX: 'hidden',
    }}>
      <Navbar dropdowns={dropdowns} />
      <HeroSection onStartHover={setStartHover} startHover={startHover} />
      <div style={{
        padding: '0 96px',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          height: 1,
          background: 'linear-gradient(to right, transparent, #E2E8F0, transparent)',
        }} />
      </div>
      <FeaturesSection features={features} />
      <CTASection />
      <Footer />
    </div>
  );
}