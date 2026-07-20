import { Navbar, Footer } from '@/components/home';
import { Crown, ArrowRight, CheckCircle, Star, Sparkles, Layout, Palette, FileText, Briefcase, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ExecutivePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();

  const heroDescription1 = 'Position yourself as a strategic leader with a powerful executive resume. Our templates emphasize your leadership experience, strategic initiatives, and business impact for C-suite and senior management roles.';
  const heroDescription2 = 'Designed for senior leadership positions, this template showcases your executive presence, board-level accomplishments, and measurable business impact to command attention from top-tier recruiters.';

  const faqs = [
    {
      question: 'What should an executive resume emphasize?',
      answer: 'An executive resume should emphasize strategic leadership, business impact, revenue growth, board-level accomplishments, and executive presence. Focus on high-level initiatives, major decisions, and quantifiable organizational impact.'
    },
    {
      question: 'How long should an executive resume be?',
      answer: 'Two pages is standard for executives. You need enough space to showcase your career achievements and leadership impact, but keep it concise and focused on the most significant accomplishments and value you have delivered.'
    },
    {
      question: 'Should I include a photo on my executive resume?',
      answer: 'In most corporate and professional settings, no. Focus on content and qualifications. However, in some countries or client-facing executive roles, a professional headshot may be appropriate. Consider cultural norms and industry standards.'
    },
    {
      question: 'How do I demonstrate business impact on an executive resume?',
      answer: 'Use metrics and KPIs to quantify your impact: revenue growth, cost savings, market expansion, team scaling, successful IPOs or mergers, and strategic initiatives. Frame achievements in terms of organizational success.'
    },
    {
      question: 'What makes an executive resume different from other resumes?',
      answer: 'Executive resumes focus on strategic impact, leadership presence, and board-level accomplishments. They use more sophisticated language, emphasize decision-making and vision, and often include an executive summary at the top.'
    },
    {
      question: 'Should I list all my positions on an executive resume?',
      answer: 'No, focus on the most relevant and recent 10-15 years. Condense earlier roles or omit them unless they are particularly relevant. Emphasize positions that demonstrate progression to increasing levels of leadership and responsibility.'
    },
  ];

  const features = [
    'Emphasize executive leadership experience',
    'Showcase strategic initiatives and vision',
    'Highlight team management and development',
    'Demonstrate business impact and revenue growth',
    'Include board-level and C-suite accomplishments',
    'Sophisticated design that commands respect',
  ];

  const useCases = [
    'C-level executives (CEO, CFO, CTO, COO)',
    'Vice presidents and directors',
    'Senior managers and department heads',
    'Board members and senior advisors',
    'Consultants and senior partners',
  ];

  const tips = [
    'Lead with an executive summary highlighting your value proposition',
    'Quantify business impact with revenue, growth, and cost metrics',
    'Emphasize strategic leadership and decision-making',
    'Include board presentations and high-level initiatives',
    'Show global or cross-functional leadership experience',
    'Use conservative, authoritative design elements',
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
        background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
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
              Executive Resume Template
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
              <Crown size={120} color="#8B5CF6" />
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
              executive
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
          About Executive Resumes
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
          Executive resumes are crafted for C-suite and senior leadership roles, focusing on strategic vision, organizational transformation, and board-level achievements. Our templates project the authority and sophistication needed for top-tier positions.
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
                  background: '#F5F3FF',
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
                    This feature helps you project executive presence and demonstrate strategic leadership capabilities.
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
                background: '#F5F3FF',
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
                background: '#8B5CF6',
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
          background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
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
            Create your Executive resume now and showcase your strategic leadership and business impact.
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