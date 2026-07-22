import { Navbar, Footer } from '@/components/home';
import { ModernTemplate } from '@/components/templates/ModernTemplate';
import { createPlaceholderResume } from '@/data/placeholderResume';
import { Layout, FileText, Briefcase, Target, Palette, Crown, Star, Sparkles, GraduationCap, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const delayNavigation = (navigate: ReturnType<typeof useNavigate>, href: string) => {
  setTimeout(() => {
    navigate(href);
  }, 300);
};

const templateData: Record<string, { title: string; description: string; features: string[]; useCases: string[]; tips: string[]; image: string }> = {
  modern: {
    title: 'Modern',
    description: 'Clean, modern design with a focus on readability and contemporary aesthetics. Perfect for tech professionals and creative roles.',
    image: '/images/resume1.webp',
    features: [
      'Clean and minimal layout with modern typography',
      'Emphasis on skills and achievements',
      'Perfect for tech, design, and marketing roles',
      'Contemporary visual design with accent colors',
      'Customizable color schemes',
      'Professional yet creative appearance',
    ],
    useCases: [
      'Software engineers and developers',
      'Digital marketers and SEO specialists',
      'UX/UI designers and product managers',
      'Startup employees and tech entrepreneurs',
      'Creative professionals and agencies',
      'Remote workers and digital nomads',
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
    description: 'ATS-optimized resume template designed to pass automated screening systems. Clean structure with standard formatting that ensures your resume gets seen by recruiters.',
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

export function TemplatePage() {
  const { templateId } = useParams<{ templateId: string }>();
  const navigate = useNavigate();
  const template = templateData[templateId || 'modern'] || templateData['modern'];
  const { title, features, useCases, tips } = template;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sampleResumes = [createPlaceholderResume(), createPlaceholderResume(), createPlaceholderResume(), createPlaceholderResume()];
  const sampleCustoms = [
    { templateId: 'modern', primaryColor: '#60A5FA', accentColor: '#60A5FA', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'modern', primaryColor: '#34D399', accentColor: '#34D399', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'modern', primaryColor: '#F87171', accentColor: '#F87171', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'modern', primaryColor: '#A78BFA', accentColor: '#A78BFA', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
  ];

  const isATS = title === 'ATS';
  
  const aboutSection = isATS ? {
    heading: 'About ATS Resume Templates',
    paragraphs: [
      'ATS resume templates are specifically designed to pass through Applicant Tracking Systems. These templates use clean, standard formatting that automated systems can easily parse, ensuring your resume reaches human recruiters.',
      'The ATS template prioritizes compatibility over creativity, using standard section headings, simple layouts, and keyword-friendly structures. This approach maximizes your chances of passing the initial automated screening that many large companies use.',
      'ATS templates are essential for applying to large corporations, government positions, and fortune 500 companies that receive thousands of applications. By using an ATS-optimized template, you ensure your qualifications are properly parsed and the chance of getting seen by hiring managers.'
    ]
  } : {
    heading: 'About Modern Resume Templates',
    paragraphs: [
      'Modern resume templates are designed with contemporary design principles that emphasize clean lines, strategic use of white space, and a focus on content hierarchy. These templates are perfect for today\'s job market where recruiters spend an average of just 7-8 seconds scanning each resume.',
      'The modern template style prioritizes readability and scannability while maintaining a professional appearance. Key elements include bold section headers, clear visual hierarchy, and strategic use of accent colors to draw attention to important information. This design philosophy ensures your resume not only looks great but also effectively communicates your value to potential employers.',
      'Modern templates are particularly effective for roles in technology, design, marketing, and other creative industries where a contemporary aesthetic is valued. They also work well for traditional roles, as the clean design conveys professionalism while the modern touches help your application stand out from more conventional resumes.'
    ]
  };

  const heroDescription1 = isATS 
    ? 'ATS-optimized design with standard formatting that passes automated screening systems. Perfect for corporate job applications and Fortune 500 companies.'
    : 'Clean, modern design with a focus on readability and contemporary aesthetics. Perfect for tech professionals and creative roles.';
  
  const heroDescription2 = isATS
    ? 'Featuring clean structure, standard section headings, and keyword-friendly layout, this template ensures your resume gets parsed correctly by automated systems and reaches human recruiters.'
    : 'Featuring bold section headers, clear visual hierarchy, and strategic accent colors, this template helps your resume stand out while maintaining a professional appearance that recruiters love.';

  const faqs = isATS ? [
    {
      question: 'What is an ATS resume template?',
      answer: 'An ATS resume template is specifically designed to pass through Applicant Tracking Systems. It uses clean, standard formatting with simple layouts and keyword-friendly structures that automated systems can easily parse.'
    },
    {
      question: 'Why is ATS optimization important?',
      answer: 'ATS optimization is crucial because many large companies, government agencies, and Fortune 500 organizations use automated screening systems. These systems scan thousands of resumes and filter out candidates based on keywords and formatting. An ATS-optimized template ensures your resume passes this initial screening.'
    },
    {
      question: 'What formatting should I avoid in ATS resumes?',
      answer: 'Avoid tables, columns, text boxes, graphics, and complex formatting. Stick to standard section headings like "Experience" and "Education". Use simple layouts without headers and footers for critical information. Use common fonts like Arial, Calibri, or Times New Roman.'
    },
    {
      question: 'How long should an ATS resume be?',
      answer: 'Keep it to 1-2 pages maximum. ATS systems prefer concise, well-organized content. Focus on relevant experience and keywords from the job description. Remove unnecessary elements that could confuse the parsing system.'
    },
    {
      question: 'Should I include keywords for ATS?',
      answer: 'Yes, include relevant keywords from the job description throughout your resume. Use standard industry terms and exact phrases from the posting. However, avoid keyword stuffing - use them naturally within your experience and skills sections.'
    },
    {
      question: 'What file format is best for ATS?',
      answer: 'Use standard file formats like PDF or Word (.docx). These formats maintain formatting while being easily readable by most ATS software. Avoid fancy formatting, and always proofread carefully to ensure proper parsing.'
    },
  ] : [
    {
      question: 'What is a modern resume template?',
      answer: 'A modern resume template features clean lines, contemporary typography, and strategic use of accent colors. It emphasizes readability and visual hierarchy while maintaining a professional appearance that stands out to recruiters.'
    },
    {
      question: 'Are modern resume templates customizable?',
      answer: 'Yes! Our modern templates are highly customizable. You can adjust accent colors, fonts, spacing, and layout to match your personal style while maintaining the modern aesthetic that helps you stand out.'
    },
    {
      question: 'What colors work best for a modern resume?',
      answer: 'Modern resumes typically use one or two accent colors strategically. Common choices include navy blue, teal, purple, or deep green. The key is to use color sparingly to highlight important elements without overwhelming the reader.'
    },
    {
      question: 'How long should a modern resume be?',
      answer: 'Ideally one page for early-career professionals and two pages maximum for those with extensive experience. Modern templates are designed to make efficient use of space while maintaining readability.'
    },
    {
      question: 'Should I include a photo on my modern resume?',
      answer: 'In most countries, no. Unless you\'re applying for a role where appearance is relevant (modeling, acting, etc.), it\'s best to focus on content and let your skills and experience speak for themselves.'
    },
    {
      question: 'What fonts are best for modern resumes?',
      answer: 'Sans-serif fonts like Inter, Roboto, or Open Sans work best for modern resumes. They provide excellent readability on both screen and print while maintaining a clean, contemporary look.'
    },
  ];

  return (
    <div style={{
      fontFamily: 'sans-serif',
      background: '#F8F9FA',
      color: '#111827',
      minHeight: '100vh',
      paddingTop: 100,
    }}>
      <Navbar dropdowns={{
        templates: [
          { href: `/templates/modern`, icon: <Layout style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Modern', description: 'Clean, modern design' },
          { href: `/templates/minimal`, icon: <FileText style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Minimal', description: 'Simple, elegant layout' },
          { href: `/templates/professional`, icon: <Briefcase style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Professional', description: 'Corporate, formal style' },
          { href: `/templates/ats`, icon: <Target style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'ATS', description: 'Optimized for screening' },
          { href: `/templates/creative`, icon: <Palette style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Creative', description: 'Bold, eye-catching look' },
          { href: `/templates/premium`, icon: <Crown style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Premium', description: 'Most popular choice' },
        ],
        examples: [
          { href: '/career-levels/entry', icon: <GraduationCap style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Entry Level', description: 'Recent graduates' },
          { href: '/career-levels/mid', icon: <TrendingUp style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Mid Career', description: '5+ years experience' },
          { href: '/career-levels/executive', icon: <Star style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Executive', description: 'Senior leadership' },
        ],
      }} />
      
      {/* Hero Section for Template */}
      <div style={{
        background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)',
        padding: '40px 96px',
        marginBottom: 0,
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          gap: 60,
          alignItems: 'flex-start',
        }}>
          {/* Left side - Text content */}
            <div style={{ flex: 1, paddingRight: 20 }}>
            <h1 style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              margin: '0 0 24px',
              color: '#0f172a',
            }}>
              {title} Resume Template
            </h1>
            
            <p style={{
              fontSize: 18,
              lineHeight: 2,
              color: '#475569',
              margin: '0 0 32px',
              maxWidth: 800,
            }}>
              {heroDescription1}
            </p>
            <p style={{
              fontSize: 18,
              lineHeight: 2,
              color: '#475569',
              margin: '0 0 40px',
              maxWidth: 800,
            }}>
              {heroDescription2}
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
            }}>
              <div style={{
                display: 'flex',
                gap: 12,
              }}>
                <a
                  href="/builder"
                  onClick={(e) => { e.preventDefault(); delayNavigation(navigate, '/builder'); }}
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '20px 40px',
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#fff',
                    background: '#0f172a',
                    borderRadius: 8,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'sans-serif',
                  }}
                >
                  Use This Template
                </a>
                <a
                  href="/templates"
                  onClick={(e) => { e.preventDefault(); delayNavigation(navigate, '/templates'); }}
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '20px 40px',
                    fontSize: 18,
                    fontWeight: 500,
                    color: '#0f172a',
                    background: '#fff',
                    borderRadius: 8,
                    border: '1.5px solid #0f172a',
                    cursor: 'pointer',
                    fontFamily: 'sans-serif',
                  }}
                >
                  Back to Templates
                </a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}>
                <div style={{
                  display: 'flex',
                  gap: 4,
                }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="24" height="24" viewBox="0 0 24 24">
                      <use href="/icons.svg#star-icon" />
                    </svg>
                  ))}
                </div>
                <span style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#0f172a',
                }}>4.9</span>
                <span style={{
                  fontSize: 18,
                  color: '#64748b',
                }}>(2.3k reviews)</span>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div style={{
            flex: '0 0 400px',
            borderRadius: 14,
            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
            position: 'relative',
          }}>
            <img
              src="/images/resume1.webp"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '60px',
                left: '-60px',
                width: '110%',
                height: 'auto',
                opacity: 0.5,
                zIndex: 0,
              }}
            />
            <img
              src="/images/modern-resume.png"
              alt="Modern Resume Template"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                position: 'relative',
                zIndex: 1,
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: -12,
              background: '#0f172a',
              color: '#fff',
              padding: '10px 16px',
              borderTopRightRadius: 0,
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 0,
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              animation: 'bounce 2s ease-in-out infinite',
            }}>
              modern
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .faq-answer {
          transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
        }

        @media (max-width: 1024px) {
          .samples-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (max-width: 768px) {
          .samples-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sample-resume-card { height: 350px !important; }
          .sample-resume-card > div { transform: scale(0.35) !important; }
        }

        @media (max-width: 480px) {
          .samples-grid { grid-template-columns: 1fr !important; }
          .sample-resume-card { height: 300px !important; }
          .sample-resume-card > div { transform: scale(0.3) !important; }
        }
      `}</style>

      {/* About Section */}
      <div style={{
        padding: '60px 96px 0',
      }}>
        <h2 style={{
          fontSize: 40,
          fontWeight: 700,
          margin: '0 0 32px',
          color: '#0f172a',
        }}>
          {aboutSection.heading}
        </h2>
        {aboutSection.paragraphs.map((para, index) => (
          <p style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: '#334155',
            margin: index < 2 ? '0 0 20px' : '0 0 60px',
          }}>
            {para}
          </p>
        ))}
      </div>

      {/* Features Section */}
      <div style={{
        padding: '0 96px 60px',
      }}>
        <h2 style={{
          fontSize: 40,
          fontWeight: 700,
          margin: '0 0 32px',
          color: '#0f172a',
        }}>
          Key Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {features.map((feature, index) => {
            const icons = [
              <Layout key="layout" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <Target key="target" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <Briefcase key="briefcase" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <FileText key="filetext" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <Palette key="palette" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <Sparkles key="sparkles" style={{ width: 28, height: 28, color: '#0f172a' }} />,
            ];
            return (
              <div key={index} style={{
                background: '#fff',
                padding: 32,
                borderRadius: 16,
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 20,
              }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: '#EEF2FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {icons[index % icons.length]}
                </div>
                <div>
                  <div style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: 16,
                  }}>{feature}</div>
                  <p style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: '#475569',
                    margin: 0,
                  }}>
                    This feature helps you create a professional and polished resume that stands out to recruiters and hiring managers in today's competitive job market.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sample Resumes Section */}
      <div style={{
        padding: '0 96px 60px',
      }}>
        <h2 style={{
          fontSize: 40,
          fontWeight: 700,
          margin: '0 0 32px',
          color: '#0f172a',
        }}>
          Sample Resumes
        </h2>
        <div className="samples-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 30,
        }}>
          {sampleResumes.map((sampleResume, index) => (
            <div key={index}>
              <div className="sample-resume-card" style={{
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                background: '#fff',
                overflow: 'hidden',
                aspectRatio: '8.5/11',
                position: 'relative',
                height: 500,
              }}>
                <div style={{
                  transform: 'scale(0.45)',
                  transformOrigin: 'top left',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '222%',
                  height: '222%',
                }}>
                  <ModernTemplate resume={sampleResume} custom={sampleCustoms[index]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div style={{
        padding: '0 96px 60px',
      }}>
        <h2 style={{
          fontSize: 40,
          fontWeight: 700,
          margin: '0 0 32px',
          color: '#0f172a',
        }}>
          Perfect For
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }}>
          {useCases.map((useCase, index) => (
            <div key={index} style={{
              background: '#fff',
              padding: '24px 28px',
              borderRadius: 14,
              border: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <span style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: '#EEF2FF',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: 700,
                flexShrink: 0,
              }}>{index + 1}</span>
              <span style={{
                fontSize: 18,
                color: '#334155',
                lineHeight: 1.6,
                fontWeight: 500,
              }}>{useCase}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div style={{
        padding: '0 96px 80px',
      }}>
        <h2 style={{
          fontSize: 40,
          fontWeight: 700,
          margin: '0 0 32px',
          color: '#0f172a',
        }}>
          Pro Tips
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {tips.map((tip, index) => (
            <div key={index} style={{
              background: '#fff',
              padding: 32,
              borderRadius: 16,
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 16,
            }}>
              <span style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: '#0f172a',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 700,
                flexShrink: 0,
              }}>{index + 1}</span>
              <span style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: '#475569',
              }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{
        padding: '0 96px 60px',
      }}>
        <h2 style={{
          fontSize: 40,
          fontWeight: 700,
          margin: '0 0 32px',
          color: '#0f172a',
        }}>
          Frequently Asked Questions
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{
              background: '#fff',
              borderRadius: 16,
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              overflow: 'hidden',
            }}>
              <div
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                style={{
                  padding: '24px 28px',
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#0f172a',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  userSelect: 'none',
                }}
              >
                <span>{faq.question}</span>
                <span style={{
                  color: '#64748b',
                  fontSize: 24,
                  lineHeight: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 24,
                  height: 24,
                  transition: 'transform 0.3s ease',
                  transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0deg)',
                }}>+</span>
              </div>
              <div className="faq-answer" style={{
                maxHeight: openFaq === index ? '200px' : '0',
                overflow: 'hidden',
                opacity: openFaq === index ? 1 : 0,
              }}>
                <p style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: '#475569',
                  margin: '0 24px 24px 24px',
                }}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}