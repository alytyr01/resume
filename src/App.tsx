import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { BuilderPage } from '@/pages/BuilderPage';
import { TemplatePage } from '@/pages/TemplatePage';
import { useThemeStore } from '@/store/themeStore';

function ThemeInitializer({ children }: { children: React.ReactNode }) {
  const applyTheme = useThemeStore((s) => s.applyTheme);
  useEffect(() => { applyTheme(); }, [applyTheme]);
  return <>{children}</>;
}

const templateData: Record<string, { title: string; description: string; features: string[]; useCases: string[]; tips: string[]; image: string }> = {
  modern: {
    title: 'Modern',
    description: 'Clean, modern design with a focus on readability and contemporary aesthetics. Perfect for tech professionals and creative roles.',
    image: '/images/resume1.webp',
    features: [
      'Clean and minimal layout with modern typography',
      'Emphasis on skills and achievements',
      'Perfect for tech, design, and marketing roles',
      'ATS-friendly formatting',
      'Customizable accent colors',
      'Professional yet creative appearance',
    ],
    useCases: [
      'Software engineers and developers',
      'Digital marketers and SEO specialists',
      'UX/UI designers and product managers',
      'Startup employees and tech entrepreneurs',
      'Creative professionals and agencies',
    ],
    tips: [
      'Use a professional email address that includes your name',
      'Quantify achievements with metrics and numbers whenever possible',
      'Keep the resume to 1-2 pages maximum for optimal readability',
      'Use action verbs to describe your accomplishments',
      'Tailor your skills section to match the job requirements',
      'Include relevant projects that demonstrate your capabilities',
    ],
  },
  minimal: {
    title: 'Minimal',
    description: 'Simple, elegant layout that lets your experience take center stage. Ideal for traditional industries and formal positions.',
    image: '/images/resume1.webp',
    features: [
      'Ultra-clean design with maximum white space',
      'Focus on content over decoration',
      'Suitable for conservative industries',
      'Easy to read and scan quickly',
      'Timeless professional appearance',
      'Minimal distractions for recruiters',
    ],
    useCases: [
      'Finance and banking professionals',
      'Legal advisors and consultants',
      'Healthcare administrators',
      'Academics and researchers',
      'Government and public sector',
    ],
    tips: [
      'Use a traditional font like Times New Roman or Georgia',
      'Stick to black and white color scheme',
      'Ensure consistent formatting throughout',
      'Use bullet points for easy scanning',
      'Focus on achievements rather than responsibilities',
      'Keep design elements to an absolute minimum',
    ],
  },
  professional: {
    title: 'Professional',
    description: 'Corporate, formal style designed for executive and senior-level positions. Conveys authority and professionalism.',
    image: '/images/resume2.png',
    features: [
      'Traditional corporate layout',
      'Formal and authoritative appearance',
      'Ideal for executive and senior roles',
      'Emphasis on experience and leadership',
      'Conservative color scheme',
      'Perfect for finance, law, and consulting',
    ],
    useCases: [
      'C-level executives and directors',
      'Senior managers and department heads',
      'Consultants and advisors',
      'Lawyers and legal professionals',
      'Financial services professionals',
    ],
    tips: [
      'Highlight leadership experience and achievements',
      'Use a classic, professional font',
      'Include executive summary at the top',
      'Show career progression clearly',
      'Emphasize results and impact',
      'Keep formatting conservative and traditional',
    ],
  },
  ats: {
    title: 'ATS',
    description: 'Optimized for screening with clean structure and standard formatting. Ensures your resume passes automated parsing systems.',
    image: '/images/resume1.webp',
    features: [
      'Optimized for Applicant Tracking Systems',
      'Standard section headings for easy parsing',
      'No complex formatting or graphics',
      'Keyword-friendly structure',
      'High compatibility with all ATS software',
      'Increases chances of passing initial screening',
    ],
    useCases: [
      'Large corporate job applications',
      'Government positions',
      'Fortune 500 companies',
      'Online job board submissions',
      'Any role requiring ATS screening',
    ],
    tips: [
      'Use standard section headings like "Experience" and "Education"',
      'Avoid tables, columns, and text boxes',
      'Include keywords from the job description',
      'Use common file formats like PDF or Word',
      'Don\'t use headers and footers for critical information',
      'Test your resume with ATS simulators before submitting',
    ],
  },
  creative: {
    title: 'Creative',
    description: 'Bold, eye-catching look for designers, artists, and creative professionals. Showcases your unique personality and style.',
    image: '/images/resume1.webp',
    features: [
      'Bold and distinctive visual design',
      'Perfect for creative industries',
      'Shows personality and creativity',
      'Unique layout that stands out',
      'Great for designers and artists',
      'Memorable presentation',
    ],
    useCases: [
      'Graphic designers and illustrators',
      'Marketing and advertising professionals',
      'Web designers and developers',
      'Photographers and videographers',
      'Creative directors and artists',
    ],
    tips: [
      'Showcase your portfolio alongside the resume',
      'Use color strategically to highlight key sections',
      'Include links to your online portfolio or Behance',
      'Let your personality shine through the design',
      'Balance creativity with readability',
      'Use unique but professional fonts',
    ],
  },
  premium: {
    title: 'Premium',
    description: 'Most popular choice with sophisticated styling and attention to detail. Perfect for making a lasting impression.',
    image: '/images/resume1.webp',
    features: [
      'Premium and sophisticated design',
      'Attention to detail in every element',
      'Perfect for high-level positions',
      'Combines professionalism with style',
      'Most popular among users',
      'Excellent for any industry',
    ],
    useCases: [
      'Senior-level job applications',
      'Freelancers and consultants',
      'Startup founders and entrepreneurs',
      'Sales and business development',
      'Any role where you want to stand out',
    ],
    tips: [
      'Invest in premium paper for printed versions',
      'Use subtle design elements that convey quality',
      'Ensure perfect alignment and spacing',
      'Include a professional headshot if appropriate',
      'Use elegant typography and color schemes',
      'Proofread meticulously to maintain premium feel',
    ],
  },
};

function TemplatePageWrapper() {
  const { templateId } = useParams<{ templateId: string }>();
  const template = templateData[templateId || 'modern'] || templateData['modern'];

  return <TemplatePage {...template} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeInitializer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/templates" element={<HomePage />} />
          <Route path="/templates/:templateId" element={<TemplatePageWrapper />} />
          <Route path="/builder" element={<BuilderPage />} />
        </Routes>
      </ThemeInitializer>
    </BrowserRouter>
  );
}
