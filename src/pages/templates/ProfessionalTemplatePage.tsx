import { Navbar, Footer } from '@/components/home';
import { ProfessionalTemplate } from '@/components/templates/ProfessionalTemplate';
import { createPlaceholderResume } from '@/data/placeholderResume';
import { Layout, Palette, Briefcase, FileText, Crown, Target, User, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';

export function ProfessionalTemplatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sampleResumes = [
    createPlaceholderResume(),
    createPlaceholderResume(),
    createPlaceholderResume(),
    createPlaceholderResume()
  ];
  const sampleCustoms = [
    { templateId: 'professional', primaryColor: '#0f172a', accentColor: '#334155', fontFamily: 'Georgia', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'professional', primaryColor: '#1e293b', accentColor: '#475569', fontFamily: 'Georgia', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'professional', primaryColor: '#334155', accentColor: '#64748b', fontFamily: 'Georgia', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'professional', primaryColor: '#475569', accentColor: '#94a3b8', fontFamily: 'Georgia', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
  ];

  const aboutSection = {
    heading: 'About Professional Resume Templates',
    paragraphs: [
      'Professional resume templates feature a corporate, formal style designed for executive and senior-level positions. These templates convey authority, stability, and professionalism through traditional layout and conservative design elements.',
      'The professional template emphasizes experience, leadership, and career progression. It uses a structured layout with clear section headers, emphasizing results and impact. The conservative color scheme and formal typography project reliability and competence.',
      'Professional templates are essential for finance, law, consulting, and corporate environments where formality and authority are valued. They work particularly well for senior positions where you need to demonstrate leadership and strategic impact.'
    ]
  };


  const faqs = [
    {
      question: 'What is a professional resume template?',
      answer: 'A professional resume template features a formal, corporate design with traditional layout and conservative styling. It emphasizes experience and leadership, making it ideal for executive and senior-level positions.'
    },
    {
      question: 'When should I use a professional resume template?',
      answer: 'Use professional templates for corporate positions, executive roles, law, finance, consulting, and government positions. They are also appropriate for traditional industries where formality and authority are highly valued.'
    },
    {
      question: 'What colors are appropriate for professional resumes?',
      answer: 'Stick to conservative colors like navy blue, dark gray, black, and white. Use color very sparingly, perhaps for headings or to highlight key achievements. Avoid bright or trendy colors that might appear unprofessional.'
    },
    {
      question: 'How should I format a professional resume?',
      answer: 'Use traditional fonts like Times New Roman, Georgia, or Arial. Maintain consistent formatting with clear section headers. Emphasize career progression and leadership experience. Keep the layout clean and structured.'
    },
    {
      question: 'Should professional resumes include a photo?',
      answer: 'In most corporate and professional settings, no. Unless applying for a role where appearance is relevant (executive positions in some countries, client-facing roles), focus on content and qualifications.'
    },
    {
      question: 'What makes a resume look professional?',
      answer: 'Clean formatting, conservative colors, traditional fonts, clear hierarchy, emphasis on achievements, and consistent styling throughout. Professional resumes project competence, reliability, and attention to detail.'
    },
  ];

  const features = [
    'Traditional corporate layout',
    'Formal and authoritative appearance',
    'Ideal for executive and senior roles',
    'Emphasis on experience and leadership',
    'Conservative color scheme',
    'Perfect for finance, law, and consulting',
  ];

  const useCases = [
    'C-level executives and directors',
    'Senior managers and department heads',
    'Consultants and advisors',
    'Lawyers and legal professionals',
    'Financial services professionals',
  ];

  const tips = [
    'Highlight leadership experience and achievements',
    'Use a classic, professional font',
    'Include executive summary at the top',
    'Show career progression clearly',
    'Emphasize results and impact',
    'Keep formatting conservative and traditional',
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
          { href: '/career-levels/entry', icon: <User style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Entry Level', description: 'Recent graduates' },
          { href: '/career-levels/mid', icon: <TrendingUp style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Mid Career', description: '5+ years experience' },
          { href: '/career-levels/executive', icon: <Award style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Executive', description: 'Senior leadership' },
        ],
      }} />
      
      {/* Hero Section */}
      <div className="hero-section template-hero" style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 4vw, 96px)',
        marginBottom: 0,
        position: 'relative',
      }}>
        <div className="hero-content" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(24px, 4vw, 60px)',
          alignItems: 'flex-start',
        }}>
          <div style={{ flex: 1, paddingRight: 0, width: '100%' }}>
            <h1 style={{
              fontSize: 'clamp(32px, 7vw, 64px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              margin: '0 0 24px',
              color: '#fff',
            }}>
              Professional Resume Template
            </h1>
            <p style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: 1.7,
              color: '#cbd5e1',
              margin: '0 0 20px',
              maxWidth: 'min(800px, 100%)',
            }}>
              Corporate, formal style designed for traditional industries and senior positions. Perfect for executives, managers, and professionals seeking to convey authority and credibility.
            </p>
            <p style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: 1.7,
              color: '#cbd5e1',
              margin: '0 0 32px',
              maxWidth: 'min(800px, 100%)',
            }}>
              Featuring a clean two-column header layout, professional typography, and structured sections that highlight your career progression and achievements in a format that resonates with corporate recruiters and hiring managers.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}>
              <div className="template-hero-buttons" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}>
                <a
                  href="/builder?template=professional"
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'clamp(14px, 3vw, 20px) clamp(20px, 3vw, 40px)',
                    fontSize: 'clamp(14px, 1.5vw, 18px)',
                    fontWeight: 600,
                    color: '#fff',
                    background: '#0f172a',
                    borderRadius: 8,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'sans-serif',
                    width: '100%',
                  }}
                >
                  Use This Template
                </a>
                <a
                  href="/templates"
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'clamp(14px, 3vw, 20px) clamp(20px, 3vw, 40px)',
                    fontSize: 'clamp(14px, 1.5vw, 18px)',
                    fontWeight: 500,
                    color: '#0f172a',
                    background: '#fff',
                    borderRadius: 8,
                    border: '1.5px solid #0f172a',
                    cursor: 'pointer',
                    fontFamily: 'sans-serif',
                    width: '100%',
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

          <div className="hero-image" style={{
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
              src="/images/professional-resume.webp"
              alt="Professional Resume Template"
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
              zIndex: 2,
            }}>
              professional
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
          .hero-section { padding: 60px 48px !important; }
          .section-padding { padding: 0 48px 60px !important; }
          .about-section { padding: 60px 48px 0 !important; }
        }

        @media (max-width: 768px) {
          .hero-section { padding: 48px 24px !important; }
          .hero-content { flex-direction: column !important; }
          .hero-image { flex: 1 1 100% !important; margin-top: 40px; }
          .section-padding { padding: 0 24px 48px !important; }
          .about-section { padding: 48px 24px 0 !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .samples-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .usecases-grid { grid-template-columns: 1fr !important; }
          .tips-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (max-width: 480px) {
          .hero-section { padding: 32px 16px !important; }
          .section-padding { padding: 0 16px 40px !important; }
          .about-section { padding: 40px 16px 0 !important; }
          .samples-grid { grid-template-columns: 1fr !important; }
          .tips-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="about-section" style={{ padding: '60px 96px 0' }}>
        <h2 style={{
          fontSize: 40,
          fontWeight: 700,
          margin: '0 0 32px',
          color: '#0f172a',
        }}>
          About Professional Resume Templates
        </h2>
        {aboutSection.paragraphs.map((para, index) => (
          <p key={index} style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: '#334155',
            margin: index < 2 ? '0 0 20px' : '0 0 60px',
          }}>
            {para}
          </p>
        ))}
      </div>

      <div className="section-padding" style={{ padding: '0 96px 60px' }}>
        <h2 style={{
          fontSize: 40,
          fontWeight: 700,
          margin: '0 0 32px',
          color: '#0f172a',
        }}>
          Key Features
        </h2>
        <div className="features-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {features.map((feature, index) => (
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
                background: '#E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                {index === 0 && <Layout style={{ width: 28, height: 28, color: '#0f172a' }} />}
                {index === 1 && <Layout style={{ width: 28, height: 28, color: '#0f172a' }} />}
                {index === 2 && <Palette style={{ width: 28, height: 28, color: '#0f172a' }} />}
                {index === 3 && <Briefcase style={{ width: 28, height: 28, color: '#0f172a' }} />}
                {index === 4 && <FileText style={{ width: 28, height: 28, color: '#0f172a' }} />}
                {index === 5 && <Crown style={{ width: 28, height: 28, color: '#0f172a' }} />}
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
                  This feature helps you project authority and professionalism, essential for senior and executive positions.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-padding" style={{ padding: '0 96px 60px' }}>
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
              <div style={{
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
                  <ProfessionalTemplate resume={sampleResume} custom={sampleCustoms[index]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-padding" style={{ padding: '0 96px 60px' }}>
        <h2 style={{
          fontSize: 40,
          fontWeight: 700,
          margin: '0 0 32px',
          color: '#0f172a',
        }}>
          Perfect For
        </h2>
        <div className="usecases-grid" style={{
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
                background: '#E2E8F0',
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

      <div className="section-padding" style={{ padding: '0 96px 80px' }}>
        <h2 style={{
          fontSize: 40,
          fontWeight: 700,
          margin: '0 0 32px',
          color: '#0f172a',
        }}>
          Pro Tips
        </h2>
        <div className="tips-grid" style={{
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

      <div className="section-padding" style={{ padding: '0 96px 60px' }}>
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