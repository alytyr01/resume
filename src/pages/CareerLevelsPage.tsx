import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Briefcase, Crown, ArrowRight, CheckCircle } from 'lucide-react';

const careerLevels = [
  {
    id: 'entry',
    title: 'Entry Level',
    subtitle: 'Recent Graduates',
    icon: GraduationCap,
    description: 'Perfect for students and recent graduates starting their career journey. Our entry-level templates help you showcase your education, internships, and potential despite limited professional experience.',
    features: [
      'Focus on education and academic achievements',
      'Highlight relevant coursework and projects',
      'Emphasize transferable skills and internships',
      'Include volunteer work and extracurriculars',
      'Clean, professional layout that grows with you',
      'Optimized for ATS systems to get your foot in the door',
    ],
    color: '#3B82F6',
    bgColor: '#EFF6FF',
  },
  {
    id: 'mid',
    title: 'Mid Career',
    subtitle: '5+ Years Experience',
    icon: Briefcase,
    description: 'Showcase your growing expertise and professional achievements with our mid-career templates. Designed to highlight your career progression and demonstrate your value to potential employers.',
    features: [
      'Expand work experience section with achievements',
      'Highlight key accomplishments with metrics',
      'Include relevant certifications and training',
      'Demonstrate clear career progression',
      'Emphasize leadership and project management',
      'Balance experience with skills sections',
    ],
    color: '#10B981',
    bgColor: '#ECFDF5',
  },
  {
    id: 'executive',
    title: 'Executive',
    subtitle: 'Senior Leadership',
    icon: Crown,
    description: 'Position yourself as a strategic leader with a powerful executive resume. Our templates emphasize your leadership experience, strategic initiatives, and business impact for C-suite and senior management roles.',
    features: [
      'Emphasize executive leadership experience',
      'Showcase strategic initiatives and vision',
      'Highlight team management and development',
      'Demonstrate business impact and revenue growth',
      'Include board-level and C-suite accomplishments',
      'Sophisticated design that commands respect',
    ],
    color: '#8B5CF6',
    bgColor: '#F5F3FF',
  },
];

export function CareerLevelsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelectLevel = (levelId: string) => {
    navigate(`/career-levels/${levelId}`);
  };

  return (
    <div style={{
      fontFamily: 'sans-serif',
      background: '#F8F9FA',
      color: '#111827',
      minHeight: '100vh',
      overflowX: 'hidden',
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '80px 96px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 700,
          color: '#FFFFFF',
          marginBottom: '16px',
          lineHeight: 1.2,
        }}>Choose Your Career Level</h1>
        <p style={{
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.9)',
          maxWidth: '700px',
          margin: '0 auto',
        }}>
          Select the option that best describes your current career stage. We'll help you create a resume that highlights your unique experience and goals.
        </p>
      </div>


      {/* Additional Info Section */}
      <div style={{
        background: '#FFFFFF',
        padding: '60px 96px',
        borderTop: '1px solid #E2E8F0',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: '16px',
            color: '#111827',
          }}>Not sure which level to choose?</h2>
          <p style={{
            fontSize: '16px',
            color: '#6B7280',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            It's okay to start with any level and customize as needed. Our resume builder is flexible and adapts to your unique career story. You can always modify the template as your experience grows.
          </p>
        </div>
      </div>
    </div>
  );
}
