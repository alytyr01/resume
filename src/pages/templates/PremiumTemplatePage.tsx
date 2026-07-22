import { Navbar, Footer } from '@/components/home';
import { PremiumTemplate } from '@/components/templates/PremiumTemplate';
import { createPlaceholderResume } from '@/data/placeholderResume';
import { Layout, Palette, FileText, Briefcase, Crown, Target, User, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';

export function PremiumTemplatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sampleResumes = [
    createPlaceholderResume(),
    createPlaceholderResume(),
    createPlaceholderResume(),
    createPlaceholderResume()
  ];
  const sampleCustoms = [
    { templateId: 'premium', primaryColor: '#0f172a', accentColor: '#334155', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'premium', primaryColor: '#1e293b', accentColor: '#475569', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'premium', primaryColor: '#334155', accentColor: '#64748b', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
    { templateId: 'premium', primaryColor: '#475569', accentColor: '#94a3b8', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 } as const,
  ];

  const heroDescription1 = 'Most popular choice with sophisticated styling and attention to detail. Perfect for making a lasting impression.';
  const heroDescription2 = 'Featuring premium design elements and excellent attention to detail, this template combines professionalism with style for the best presentation.';

  const aboutSection = {
    heading: 'About Premium Resume Templates',
    paragraphs: [
      'Premium resume templates represent the most popular choice among job seekers, featuring sophisticated styling and meticulous attention to detail. These templates combine professionalism with elegance to create a lasting impression on recruiters.',
      'The premium template uses refined typography, subtle design elements, and perfect spacing to convey quality and attention to detail. It balances modern aesthetics with traditional professionalism, making it suitable for any industry or career level.',
      'Premium templates are perfect for high-level positions, freelancers, consultants, and anyone who wants to make a strong first impression. The sophisticated design signals to employers that you care about quality and presentation.'
    ]
  };

  const faqs = [
    {
      question: 'What is a premium resume template?',
      answer: 'A premium resume template features sophisticated styling, attention to detail, and high-quality design elements. It combines professionalism with elegance to create a lasting impression and is our most popular choice among users.'
    },
    {
      question: 'When should I use a premium resume template?',
      answer: 'Premium templates are versatile and work for any industry or career level. They are particularly effective for senior-level positions, freelancers, consultants, and anyone who wants to make a strong, sophisticated first impression.'
    },
    {
      question: 'What makes a premium template different?',
      answer: 'Premium templates feature refined typography, subtle design elements, perfect spacing, and sophisticated color schemes. They use high-quality visual elements and balanced layouts that convey quality and attention to detail.'
    },
    {
      question: 'Should I use a premium template for any industry?',
      answer: 'Yes, premium templates are versatile enough for any industry. Their sophisticated design works particularly well for corporate positions, consulting, startups, sales, and business development roles where making a strong impression matters.'
    },
    {
      question: 'How can I maximize the impact of a premium template?',
      answer: 'Use premium paper for printing, ensure perfect alignment and spacing, include a professional headshot if appropriate, use elegant typography, and proofread meticulously. The premium template is designed to showcase your attention to detail.'
    },
    {
      question: 'Are premium templates worth the investment?',
      answer: 'Premium templates offer the best balance of professionalism and style. While free templates are available, premium templates provide superior design quality, better visual hierarchy, and a more polished presentation that can help you stand out.'
    },
  ];

  const features = [
    'Premium and sophisticated design',
    'Attention to detail in every element',
    'Perfect for high-level positions',
    'Combines professionalism with style',
    'Most popular among users',
    'Excellent for any industry',
  ];

  const useCases = [
    'Senior-level job applications',
    'Freelancers and consultants',
    'Startup founders and entrepreneurs',
    'Sales and business development',
    'Any role where you want to stand out',
  ];

  const tips = [
    'Invest in premium paper for printed versions',
    'Use subtle design elements that convey quality',
    'Ensure perfect alignment and spacing',
    'Include a professional headshot if appropriate',
    'Use elegant typography and color schemes',
    'Proofread meticulously to maintain premium feel',
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
      
      {/* Hero Section */}
      <div className="hero-section" style={{
        background: 'linear-gradient(135deg, #F8F9FA 0%, #E2E8F0 100%)',
        padding: '40px 96px',
        marginBottom: 0,
        position: 'relative',
        overflowX: 'hidden',
      }}>
        <div className="hero-content" style={{
          display: 'flex',
          gap: 60,
          alignItems: 'flex-start',
          maxWidth: '100%',
        }}>
          <div style={{ flex: 1, paddingRight: 20 }}>
            <h1 className="hero-title" style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              margin: '0 0 24px',
              color: '#0f172a',
            }}>
              Premium Resume Template
            </h1>
            <p className="hero-desc" style={{
              fontSize: 18,
              lineHeight: 2,
              color: '#475569',
              margin: '0 0 32px',
              maxWidth: 800,
            }}>
              {heroDescription1}
            </p>
            <p className="hero-desc" style={{
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
              <div className="cta-buttons-row" style={{
                display: 'flex',
                gap: 12,
              }}>
                <a
                  href="/builder?template=premium"
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
              src="/images/premium-resume.avif"
              alt="Premium Resume Template"
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
              premium
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
          .hero-section { padding: 40px 48px !important; }
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

      <div className="about-section" style={{ padding: '60px 96px 0' }}>
        <h2 className="section-title" style={{
          fontSize: 40,
          fontWeight: 700,
          margin: '0 0 32px',
          color: '#0f172a',
        }}>
          About Premium Resume Templates
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
          {features.map((feature, index) => (
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
                  This feature helps you create a resume that looks professional and polished, making a lasting impression on recruiters.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-padding" style={{ padding: '0 96px 60px' }}>
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
                  <PremiumTemplate resume={sampleResume} custom={sampleCustoms[index]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-padding" style={{ padding: '0 96px 60px' }}>
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
                background: '#E2E8F0',
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

      <div className="section-padding" style={{ padding: '0 96px 80px' }}>
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

      <div className="section-padding" style={{ padding: '0 96px 60px' }}>
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