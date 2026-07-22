import { Navbar, Footer } from '@/components/home';
import { MinimalTemplate } from '@/components/templates/MinimalTemplate';
import { createPlaceholderResume } from '@/data/placeholderResume';
import { Layout, Palette, Briefcase, FileText, Crown, Target, User, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';

export function MinimalTemplatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sampleResumes = [
    createPlaceholderResume(),
    createPlaceholderResume(),
    createPlaceholderResume(),
    createPlaceholderResume()
  ];
  const sampleCustoms = [
    { templateId: 'minimal', primaryColor: '#0f172a', accentColor: '#0f172a', fontFamily: 'Georgia', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'minimal', primaryColor: '#334155', accentColor: '#334155', fontFamily: 'Georgia', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'minimal', primaryColor: '#475569', accentColor: '#475569', fontFamily: 'Georgia', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'minimal', primaryColor: '#64748b', accentColor: '#64748b', fontFamily: 'Georgia', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
  ];

  const aboutSection = {
    heading: 'About Minimal Resume Templates',
    paragraphs: [
      'Minimal resume templates focus on simplicity and elegance, letting your experience take center stage without unnecessary design elements. This approach is ideal for traditional industries where a conservative, clean layout is preferred.',
      'The minimal template uses maximum white space, clear typography, and a straightforward layout to ensure your content is easily scannable. By removing decorative elements, these templates ensure that recruiters focus entirely on your qualifications and achievements.',
      'Minimal templates are perfect for finance, law, healthcare, and other conservative industries where professionalism and formality are paramount. They also work well for academics and researchers who want to present their credentials without visual distractions.'
    ]
  };

  const heroDescription1 = 'Simple, elegant layout that lets your experience take center stage. Ideal for traditional industries and formal positions.';
  const heroDescription2 = 'Featuring ultra-clean design with maximum white space, this template ensures your qualifications speak for themselves without unnecessary distractions.';

  const faqs = [
    {
      question: 'What is a minimal resume template?',
      answer: 'A minimal resume template features a simple, elegant design with maximum white space and no decorative elements. It focuses entirely on your content and qualifications, making it perfect for traditional industries.'
    },
    {
      question: 'When should I use a minimal resume template?',
      answer: 'Use minimal templates for traditional industries like finance, law, healthcare, and government positions. They are also ideal for conservative companies and roles where formality and professionalism are highly valued.'
    },
    {
      question: 'What fonts work best for minimal resumes?',
      answer: 'Traditional serif fonts like Times New Roman, Georgia, or Garamond work best for minimal resumes. For a slightly modern touch, you can use sans-serif fonts like Arial or Calibri while maintaining the clean, simple layout.'
    },
    {
      question: 'Should minimal resumes include colors?',
      answer: 'Minimal resumes typically use black and white or very subtle gray tones. If you want to add color, use it sparingly - perhaps a dark navy or charcoal for headings only. Avoid bright or multiple colors.'
    },
    {
      question: 'How long should a minimal resume be?',
      answer: 'Keep minimalist resumes to 1-2 pages, with one page preferred for early-career professionals. The clean layout makes it easy to maintain readability while keeping content concise and impactful.'
    },
    {
      question: 'Can minimal templates be creative?',
      answer: 'Minimal templates prioritize substance over style, but you can still show creativity through strong action verbs, quantified achievements, and a compelling professional summary. Let your accomplishments be the standout element.'
    },
  ];

  const features = [
    'Ultra-clean design with maximum white space',
    'Focus on content over decoration',
    'Suitable for conservative industries',
    'Easy to read and scan quickly',
    'Timeless professional appearance',
    'Minimal distractions for recruiters',
  ];

  const useCases = [
    'Finance and banking professionals',
    'Legal advisors and consultants',
    'Healthcare administrators',
    'Academics and researchers',
    'Government and public sector',
  ];

  const tips = [
    'Use a traditional font like Times New Roman or Georgia',
    'Stick to black and white color scheme',
    'Ensure consistent formatting throughout',
    'Use bullet points for easy scanning',
    'Focus on achievements rather than responsibilities',
    'Keep design elements to an absolute minimum',
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
        background: 'linear-gradient(135deg, #E2E8F0 0%, #F1F5F9 100%)',
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
              color: '#0f172a',
            }}>
              Minimal Resume Template
            </h1>
            <p style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: 1.7,
              color: '#475569',
              margin: '0 0 20px',
              maxWidth: 'min(800px, 100%)',
            }}>
              {heroDescription1}
            </p>
            <p style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: 1.7,
              color: '#475569',
              margin: '0 0 32px',
              maxWidth: 'min(800px, 100%)',
            }}>
              {heroDescription2}
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
                  href="/builder?template=minimal"
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
                  fontSize: 'clamp(16px, 1.5vw, 18px)',
                  fontWeight: 600,
                  color: '#0f172a',
                }}>4.9</span>
                <span style={{
                  fontSize: 'clamp(16px, 1.5vw, 18px)',
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
            width: '100%',
            maxWidth: '500px',
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
              src="/images/minimal-resume.webp"
              alt="Minimal Resume Template"
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
              minimal
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .faq-answer { transition: max-height 0.3s ease-out, opacity 0.3s ease-out; }
        .template-section { padding: 60px 96px; }
        @media (max-width: 1024px) { .template-section { padding: 48px 48px 60px; } }
        @media (max-width: 768px) { .template-section { padding: 32px 24px 48px; } }
        @media (max-width: 480px) { .template-section { padding: 24px 16px 40px; } }
      `}</style>

      <div className="template-section" style={{ background: '#fff' }}>
        <h2 style={{
          fontSize: 'clamp(24px, 5vw, 40px)',
          fontWeight: 700,
          margin: '0 0 24px',
          color: '#0f172a',
        }}>
          About Minimal Resume Templates
        </h2>
        {aboutSection.paragraphs.map((para, index) => (
          <p key={index} style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            lineHeight: 1.7,
            color: '#334155',
            margin: index < 2 ? '0 0 16px' : '0 0 40px',
          }}>
            {para}
          </p>
        ))}
      </div>

      <div className="template-section" style={{ background: '#fff' }}>
        <h2 style={{
          fontSize: 'clamp(24px, 5vw, 40px)',
          fontWeight: 700,
          margin: '0 0 24px',
          color: '#0f172a',
        }}>
          Key Features
        </h2>
        <div className="features-grid template-grid-3" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(12px, 2vw, 24px)',
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: '#fff',
              padding: 'clamp(16px, 3vw, 32px)',
              borderRadius: 16,
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'clamp(12px, 2vw, 20px)',
            }}>
              <div style={{
                width: 'clamp(40px, 6vw, 56px)',
                height: 'clamp(40px, 6vw, 56px)',
                borderRadius: 14,
                background: '#F1F5F9',
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
                  fontSize: 'clamp(16px, 2vw, 22px)',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: 12,
                }}>{feature}</div>
                <p style={{
                  fontSize: 'clamp(13px, 1.5vw, 16px)',
                  lineHeight: 1.7,
                  color: '#475569',
                  margin: 0,
                }}>
                  This feature helps you create a clean, professional resume that focuses on what matters most - your experience and qualifications.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="template-section" style={{ background: '#F8F9FA' }}>
        <h2 style={{
          fontSize: 'clamp(24px, 5vw, 40px)',
          fontWeight: 700,
          margin: '0 0 24px',
          color: '#0f172a',
        }}>
          Sample Resumes
        </h2>
        <div className="samples-grid template-grid-2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(12px, 2vw, 30px)',
        }}>
          {sampleResumes.map((sampleResume, index) => (
            <div key={index}>
              <div className="resume-sample-card" style={{
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                background: '#fff',
                overflow: 'hidden',
                aspectRatio: '8.5/11',
                position: 'relative',
                height: 'clamp(300px, 50vw, 500px)',
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
                  <MinimalTemplate resume={sampleResume} custom={sampleCustoms[index]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="template-section" style={{ background: '#fff' }}>
        <h2 style={{
          fontSize: 'clamp(24px, 5vw, 40px)',
          fontWeight: 700,
          margin: '0 0 24px',
          color: '#0f172a',
        }}>
          Perfect For
        </h2>
        <div className="usecases-grid template-grid-2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(12px, 2vw, 20px)',
        }}>
          {useCases.map((useCase, index) => (
            <div key={index} style={{
              background: '#fff',
              padding: 'clamp(16px, 3vw, 24px) clamp(16px, 3vw, 28px)',
              borderRadius: 14,
              border: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(10px, 2vw, 16px)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <span style={{
                width: 'clamp(36px, 6vw, 44px)',
                height: 'clamp(36px, 6vw, 44px)',
                borderRadius: '50%',
                background: '#F1F5F9',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: 700,
                flexShrink: 0,
              }}>{index + 1}</span>
              <span style={{
                fontSize: 'clamp(14px, 1.8vw, 18px)',
                color: '#334155',
                lineHeight: 1.6,
                fontWeight: 500,
              }}>{useCase}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="template-section" style={{ background: '#F8F9FA' }}>
        <h2 style={{
          fontSize: 'clamp(24px, 5vw, 40px)',
          fontWeight: 700,
          margin: '0 0 24px',
          color: '#0f172a',
        }}>
          Pro Tips
        </h2>
        <div className="tips-grid template-grid-3" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(12px, 2vw, 24px)',
        }}>
          {tips.map((tip, index) => (
            <div key={index} style={{
              background: '#fff',
              padding: 'clamp(16px, 3vw, 32px)',
              borderRadius: 16,
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'clamp(10px, 2vw, 16px)',
            }}>
              <span style={{
                width: 'clamp(28px, 4vw, 32px)',
                height: 'clamp(28px, 4vw, 32px)',
                borderRadius: '50%',
                background: '#0f172a',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                fontWeight: 700,
                flexShrink: 0,
              }}>{index + 1}</span>
              <span style={{
                fontSize: 'clamp(13px, 1.5vw, 16px)',
                lineHeight: 1.6,
                color: '#475569',
              }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="template-section" style={{ background: '#fff' }}>
        <h2 style={{
          fontSize: 'clamp(24px, 5vw, 40px)',
          fontWeight: 700,
          margin: '0 0 24px',
          color: '#0f172a',
        }}>
          Frequently Asked Questions
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(8px, 1.5vw, 16px)',
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
                  padding: 'clamp(16px, 3vw, 24px) clamp(16px, 3vw, 28px)',
                  fontSize: 'clamp(14px, 1.8vw, 18px)',
                  fontWeight: 600,
                  color: '#0f172a',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  userSelect: 'none',
                }}
              >
                <span style={{ flex: 1, paddingRight: 10 }}>{faq.question}</span>
                <span style={{
                  color: '#64748b',
                  fontSize: 'clamp(18px, 2vw, 24px)',
                  lineHeight: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'clamp(20px, 3vw, 24px)',
                  height: 'clamp(20px, 3vw, 24px)',
                  transition: 'transform 0.3s ease',
                  transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  flexShrink: 0,
                }}>+</span>
              </div>
              <div className="faq-answer" style={{
                maxHeight: openFaq === index ? '500px' : '0',
                overflow: 'hidden',
                opacity: openFaq === index ? 1 : 0,
              }}>
                <p style={{
                  fontSize: 'clamp(13px, 1.5vw, 16px)',
                  lineHeight: 1.7,
                  color: '#475569',
                  margin: '0 clamp(12px, 2vw, 24px) clamp(12px, 2vw, 24px)',
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
