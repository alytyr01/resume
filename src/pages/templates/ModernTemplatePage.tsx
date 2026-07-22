import { Navbar, Footer } from '@/components/home';
import { ModernTemplate } from '@/components/templates/ModernTemplate';
import { createPlaceholderResume } from '@/data/placeholderResume';
import { Layout, Sparkles, Palette, Briefcase, FileText, Crown, User, TrendingUp, Award, Target } from 'lucide-react';
import { useState } from 'react';

export function ModernTemplatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sampleResumes = [
    createPlaceholderResume(),
    createPlaceholderResume(),
    createPlaceholderResume(),
    createPlaceholderResume()
  ];
  const sampleCustoms = [
    { templateId: 'modern', primaryColor: '#60A5FA', accentColor: '#60A5FA', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'modern', primaryColor: '#34D399', accentColor: '#34D399', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'modern', primaryColor: '#F87171', accentColor: '#F87171', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'modern', primaryColor: '#A78BFA', accentColor: '#A78BFA', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
  ];

  const faqs = [
    {
      question: 'What is a modern resume template?',
      answer: 'A modern resume template features clean lines, contemporary typography, and strategic use of accent colors. It emphasizes readability and visual hierarchy while maintaining a professional appearance that stands out to recruiters.'
    },
    {
      question: 'Are modern templates customizable?',
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

  const features = [
    'Clean and minimal layout with modern typography',
    'Emphasis on skills and achievements',
    'Perfect for tech, design, and marketing roles',
    'Contemporary visual design with accent colors',
    'Customizable color schemes',
    'Professional yet creative appearance',
  ];

  const useCases = [
    'Software engineers and developers',
    'Digital marketers and SEO specialists',
    'UX/UI designers and product managers',
    'Startup employees and tech entrepreneurs',
    'Creative professionals and agencies',
    'Remote workers and digital nomads',
  ];

  const tips = [
    'Use a professional email address that includes your name',
    'Quantify achievements with metrics and numbers whenever possible',
    'Keep the resume to 1-2 pages maximum for optimal readability',
    'Use action verbs to describe your accomplishments',
    'Tailor your skills section to match the job requirements',
    'Include relevant projects that demonstrate your capabilities',
  ];

  return (
    <div style={{
      fontFamily: 'sans-serif',
      background: '#F8F9FA',
      color: '#111827',
      minHeight: '100vh',
      paddingTop: 100,
    }} className="page-wrapper">
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

      {/* Hero Section for Template */}
      <div className="hero-section" style={{
        background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)',
        padding: '80px 96px',
        marginBottom: 0,
        position: 'relative',
        overflowX: 'hidden',
      }}>
        <div className="hero-content" style={{
          display: 'flex',
          gap: 60,
          alignItems: 'center',
          maxWidth: '100%',
        }}>
          {/* Left side - Text content */}
          <div style={{ flex: 1, paddingRight: 20 }}>
            <h1 className="hero-title" style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              margin: '0 0 24px',
              color: '#0f172a',
            }}>
              Modern Resume Template
            </h1>

            <p className="hero-desc" style={{
              fontSize: 18,
              lineHeight: 2,
              color: '#475569',
              margin: '0 0 32px',
              maxWidth: 800,
            }}>
              Clean, modern design with a focus on readability and contemporary aesthetics. Perfect for tech professionals and creative roles who want to showcase their skills and experience in a visually appealing format that catches the eye of hiring managers.
            </p>
            <p className="hero-desc" style={{
              fontSize: 18,
              lineHeight: 2,
              color: '#475569',
              margin: '0 0 40px',
              maxWidth: 800,
            }}>
              Featuring bold section headers, clear visual hierarchy, and strategic accent colors, this template helps your resume stand out while maintaining a professional appearance that recruiters love.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
            }}>
              <div className="cta-buttons-row" style={{
                display: 'flex',
                gap: 12,
              }}>
                <a
                  href="/builder?template=modern"
                  className="cta-button"
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
                  className="cta-button"
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
                    <svg key={star} className="star-icon" width="24" height="24" viewBox="0 0 24 24">
                      <use href="/icons.svg#star-icon" />
                    </svg>
                  ))}
                </div>
                <span className="rating-text" style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#0f172a',
                }}>4.9</span>
                <span className="rating-text" style={{
                  fontSize: 18,
                  color: '#64748b',
                }}>(2.3k reviews)</span>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="hero-image" style={{
            flex: '0 0 400px',
            borderRadius: 14,
            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
            position: 'relative',
            maxWidth: '100%',
            overflow: 'hidden',
          }}>
            <img
              src="/images/resume1.webp"
              alt=""
              aria-hidden="true"
              className="hero-bg-image"
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
              className="hero-main-image"
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
          .hero-section { padding: 60px 48px !important; }
          .section-padding { padding: 0 48px 60px !important; }
          .about-section { padding: 60px 48px 0 !important; }
          .hero-title { font-size: 48px !important; }
          .hero-desc { font-size: 16px !important; }
          .section-title { font-size: 32px !important; }
          .cta-button { padding: 16px 32px !important; font-size: 16px !important; }
          .feature-card { padding: 24px !important; }
          .feature-icon { width: 48px !important; height: 48px !important; }
          .feature-icon svg { width: 24px !important; height: 24px !important; }
          .feature-title { font-size: 18px !important; }
          .feature-text { font-size: 14px !important; }
        }

        @media (max-width: 768px) {
           .page-wrapper { padding-top: 64px !important; }
           .hero-section { padding: 24px 16px 48px !important; overflow-x: hidden !important; }
           .hero-content { flex-direction: column !important; align-items: stretch !important; max-width: 100% !important; }
           .hero-image { flex: 0 0 auto !important; margin-top: 40px; margin-left: auto !important; margin-right: auto !important; width: 220px !important; max-width: 220px !important; overflow: visible !important; border-radius: 14px !important; position: relative !important; }
           .hero-image img[aria-hidden='true'] { position: absolute !important; left: -10px !important; top: auto !important; bottom: -20px !important; width: 55% !important; height: auto !important; opacity: 0.5 !important; z-index: 0 !important; }
           .hero-title { font-size: 40px !important; }
           .hero-desc { font-size: 15px !important; }
           .section-padding { padding: 0 16px 48px !important; }
           .about-section { padding: 48px 16px 0 !important; }
           .section-title { font-size: 28px !important; }
           .features-grid { grid-template-columns: 1fr !important; }
           .samples-grid { grid-template-columns: repeat(2, 1fr) !important; }
           .usecases-grid { grid-template-columns: 1fr !important; }
           .tips-grid { grid-template-columns: repeat(2, 1fr) !important; }
           .cta-button { padding: 14px 28px !important; font-size: 15px !important; }
           .star-icon { width: 20px !important; height: 20px !important; }
           .rating-text { font-size: 15px !important; }
           .feature-card { padding: 20px !important; }
           .feature-icon { width: 44px !important; height: 44px !important; }
           .feature-icon svg { width: 22px !important; height: 22px !important; }
           .feature-title { font-size: 17px !important; }
           .use-case-text { font-size: 15px !important; }
           .tip-text { font-size: 14px !important; }
         }

        @media (max-width: 480px) {
           .page-wrapper { padding-top: 56px !important; }
           .hero-section { padding: 20px 0 40px !important; margin-top: 8px !important; overflow-x: visible !important; }
           .hero-content { padding: 0 0 0 16px !important; }
           .hero-image { flex: 1 1 100% !important; margin-left: auto !important; margin-right: auto !important; border-radius: 14px !important; max-width: 260px !important; width: 100% !important; position: relative !important; overflow: visible !important; }
           .hero-image img[aria-hidden='true'] { position: absolute !important; left: -8px !important; top: auto !important; bottom: -16px !important; width: 50% !important; height: auto !important; opacity: 0.5 !important; z-index: 0 !important; }
           .hero-image img:not([aria-hidden='true']) { position: relative !important; z-index: 1 !important; }
           .hero-title { font-size: 32px !important; }
           .hero-desc { font-size: 14px !important; }
           .section-padding { padding: 0 16px 40px !important; }
           .about-section { padding: 40px 16px 0 !important; }
           .section-title { font-size: 24px !important; }
           .features-grid { grid-template-columns: 1fr !important; }
           .samples-grid { grid-template-columns: 1fr !important; }
           .tips-grid { grid-template-columns: 1fr !important; }
           .cta-button { padding: 14px 16px !important; font-size: 14px !important; width: 100% !important; justify-content: center !important; text-align: center !important; }
           .cta-buttons-row { flex-direction: column !important; gap: 12px !important; padding: 0 16px !important; margin: 0 -16px !important; }
           .star-icon { width: 18px !important; height: 18px !important; }
           .rating-text { font-size: 14px !important; }
           .feature-card { padding: 16px !important; }
           .feature-icon { width: 40px !important; height: 40px !important; }
           .feature-icon svg { width: 20px !important; height: 20px !important; }
           .feature-title { font-size: 16px !important; }
           .feature-text { font-size: 13px !important; }
           .use-case-text { font-size: 14px !important; }
           .tip-text { font-size: 13px !important; }
         }
      `}</style>

      {/* Features Section */}
      <div className="section-padding" style={{
        padding: '0 96px 60px',
      }}>
        <h2 className="section-title" style={{
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
          {features.map((feature, index) => {
            const icons = [
              <Sparkles key="icon1" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <Layout key="icon2" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <Palette key="icon3" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <Briefcase key="icon4" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <FileText key="icon5" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <Crown key="icon6" style={{ width: 28, height: 28, color: '#0f172a' }} />,
            ];
            return (
              <div key={index} className="feature-card" style={{
                background: '#fff',
                padding: 32,
                borderRadius: 16,
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 20,
              }}>
                <div className="feature-icon" style={{
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
                  <div className="feature-title" style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: 16,
                  }}>{feature}</div>
                  <p className="feature-text" style={{
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
      <div className="section-padding" style={{
        padding: '0 96px 60px',
      }}>
        <h2 className="section-title" style={{
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
                width: '100%',
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
      <div className="section-padding" style={{
        padding: '0 96px 60px',
      }}>
        <h2 className="section-title" style={{
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
                background: '#EEF2FF',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: 700,
                flexShrink: 0,
              }}>{index + 1}</span>
              <span className="use-case-text" style={{
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
      <div className="section-padding" style={{
        padding: '0 96px 80px',
      }}>
        <h2 className="section-title" style={{
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
              <span className="tip-text" style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: '#475569',
              }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section-padding" style={{
        padding: '0 96px 60px',
      }}>
        <h2 className="section-title" style={{
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