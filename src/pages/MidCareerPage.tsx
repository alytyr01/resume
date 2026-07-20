import { Navbar, Footer } from '@/components/home';
import { Briefcase, ArrowRight, CheckCircle, Star, Sparkles, Layout, Palette, FileText, Crown, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function MidCareerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();

  const heroDescription1 = 'Showcase your growing expertise and professional achievements with our mid-career templates. Designed to highlight your career progression and demonstrate your value to potential employers.';
  const heroDescription2 = 'With 5+ years of experience, your resume needs to emphasize accomplishments, leadership, and measurable impact. This template helps you stand out as a seasoned professional ready for the next level.';

  const faqs = [
    {
      question: 'What should a mid-career resume emphasize?',
      answer: 'A mid-career resume should emphasize professional achievements, quantifiable results, career progression, leadership experiences, and specialized skills. Focus on impact and outcomes rather than just listing responsibilities.'
    },
    {
      question: 'How long should a mid-career resume be?',
      answer: 'Two pages is standard for mid-career professionals. You have enough experience to warrant the extra space, but keep it concise and relevant. Focus on the last 10-15 years of experience unless earlier roles are particularly relevant.'
    },
    {
      question: 'How do I show career progression on my mid-career resume?',
      answer: 'List positions in reverse chronological order, highlight promotions and increasing responsibility, use metrics to show growth, and emphasize leadership roles. Consider adding a Career Highlights section at the top for quick visibility.'
    },
    {
      question: 'Should I include all my jobs on a mid-career resume?',
      answer: 'Focus on relevant positions from the last 10-15 years. Earlier roles can be condensed or omitted unless they provide relevant experience or demonstrate important career transitions.'
    },
    {
      question: 'How can I quantify achievements on my mid-career resume?',
      answer: 'Use numbers, percentages, and monetary values. For example: "Increased sales by 30%," "Managed a team of 12," "Reduced costs by $50K," "Led a project that delivered $2M in revenue."'
    },
    {
      question: 'Should I include certifications on my mid-career resume?',
      answer: 'Yes, include relevant certifications, professional development courses, and continuing education. They demonstrate commitment to growth and can differentiate you from other candidates with similar experience.'
    },
  ];

  const features = [
    'Expand work experience section with achievements',
    'Highlight key accomplishments with metrics',
    'Include relevant certifications and training',
    'Demonstrate clear career progression',
    'Emphasize leadership and project management',
    'Balance experience with skills sections',
  ];

  const useCases = [
    'Professionals with 5-15 years of experience',
    'Team leads and senior individual contributors',
    'Career advancement seekers',
    'Industry specialists and experts',
    'Professionals transitioning to new roles',
  ];

  const tips = [
    'Quantify achievements with numbers and percentages',
    'Show career progression and increasing responsibility',
    'Highlight leadership experiences and team management',
    'Include relevant certifications and professional development',
    'Focus on results and business impact',
    'Keep resume to 2 pages maximum',
  ];

  return (
    <div style={{
      fontFamily: 'sans-serif',
      background: '#F8F9FA',
      color: '#111827',
      minHeight: '100vh',
    }}>
      <Navbar dropdowns={{
        templates: [
          { href: `/templates/modern`, icon: <Sparkles style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Modern', description: 'Clean, modern design' },
          { href: `/templates/minimal`, icon: <Palette style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Minimal', description: 'Simple, elegant layout' },
          { href: `/templates/professional`, icon: <Briefcase style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Professional', description: 'Corporate, formal style' },
          { href: `/templates/ats`, icon: <FileText style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'ATS', description: 'Optimized for screening' },
          { href: `/templates/creative`, icon: <Layout style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Creative', description: 'Bold, eye-catching look' },
          { href: `/templates/premium`, icon: <Crown style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Premium', description: 'Most popular choice' },
        ],
        examples: [
          { href: '/career-levels/entry', icon: <GraduationCap style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Entry Level', description: 'Recent graduates' },
          { href: '/career-levels/mid', icon: <Briefcase style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Mid Career', description: '5+ years experience' },
          { href: '/career-levels/executive', icon: <Crown style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Executive', description: 'Senior leadership' },
        ],
      }} />

      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
        padding: '80px 96px',
        marginBottom: 0,
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          gap: 60,
          alignItems: 'flex-start',
          maxWidth: 1400,
          margin: '0 auto',
        }}>
          <div style={{ flex: 1, paddingRight: 20 }}>
            <h1 style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              margin: '0 0 24px',
              color: '#0f172a',
            }}>
              Mid Career Resume Template
            </h1>
            <p style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: '#475569',
              margin: '0 0 32px',
              maxWidth: 700,
            }}>
              {heroDescription1}
            </p>
            <p style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: '#475569',
              margin: '0 0 40px',
              maxWidth: 700,
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
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '16px 32px',
                    fontSize: 17,
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
                  href="/career-levels"
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '16px 32px',
                    fontSize: 17,
                    fontWeight: 500,
                    color: '#0f172a',
                    background: '#fff',
                    borderRadius: 8,
                    border: '1.5px solid #0f172a',
                    cursor: 'pointer',
                    fontFamily: 'sans-serif',
                  }}
                >
                  Back to Career Levels
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

          <div style={{
            flex: '0 0 300px',
            borderRadius: 14,
            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
            position: 'relative',
          }}>
            <div style={{
              width: '100%',
              height: 400,
              background: '#F8F9FA',
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Briefcase size={120} color="#10B981" />
            </div>
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
            }}>
              mid career
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
          About Mid Career Resumes
        </h2>
        <p style={{
          fontSize: 18,
          lineHeight: 1.8,
          color: '#334155',
          margin: '0 0 20px',
          maxWidth: 900,
        }}>
          {heroDescription1}
        </p>
        <p style={{
          fontSize: 18,
          lineHeight: 1.8,
          color: '#334155',
          margin: '0 0 60px',
          maxWidth: 900,
        }}>
          Mid-career resumes highlight your professional growth, measurable achievements, and evolving expertise. Our templates help you present a compelling case for advancement or new opportunities.
        </p>
      </div>

      {/* Key Features */}
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
              <Sparkles key="icon1" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <Layout key="icon2" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <Palette key="icon3" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <Briefcase key="icon4" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <FileText key="icon5" style={{ width: 28, height: 28, color: '#0f172a' }} />,
              <Crown key="icon6" style={{ width: 28, height: 28, color: '#0f172a' }} />,
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
                  background: '#ECFDF5',
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
                    This feature helps you showcase your professional growth and measurable impact.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Perfect For */}
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
                background: '#ECFDF5',
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

      {/* Pro Tips */}
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
                background: '#10B981',
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

      {/* CTA */}
      <div style={{
        padding: '0 96px 80px',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
          borderRadius: 20,
          padding: '60px 48px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: 36,
            fontWeight: 700,
            margin: '0 0 16px',
            color: '#0f172a',
          }}>
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: 16,
            color: '#475569',
            maxWidth: 600,
            margin: '0 auto 32px',
            lineHeight: 1.6,
          }}>
            Create your Mid Career resume now and showcase your professional achievements.
          </p>
          <a
            href="/builder"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '16px 36px',
              fontSize: 18,
              fontWeight: 600,
              color: '#fff',
              background: '#0f172a',
              borderRadius: 8,
            }}
          >
            Create My Resume <ArrowRight size={20} />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}