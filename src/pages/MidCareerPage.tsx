import { Navbar, Footer } from '@/components/home';
import { Briefcase, ArrowRight, Star, Sparkles, Layout, Palette, FileText, Crown, GraduationCap, Mail, TrendingUp, Award, Rocket } from 'lucide-react';
import { useState } from 'react';
import { ModernTemplate } from '@/components/templates/ModernTemplate';
import { MinimalTemplate } from '@/components/templates/MinimalTemplate';
import { ProfessionalTemplate } from '@/components/templates/ProfessionalTemplate';
import { ATSTemplate } from '@/components/templates/ATSTemplate';
import { CreativeTemplate } from '@/components/templates/CreativeTemplate';
import type { TemplateId } from '@/types/resume';
import { createPlaceholderResume } from '@/data/placeholderResume';

export function MidCareerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is a mid-career resume?',
      answer: 'A mid-career resume is designed for professionals with 5-15 years of experience. It emphasizes career progression, measurable achievements, leadership experience, and specialized expertise rather than just listing job responsibilities.'
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

  const mostPopularResumes = [
    'Senior Manager Resume',
    'Project Lead Resume',
    'Department Head Resume',
    'Technical Expert Resume',
    'Career Advancement Resume',
  ];

  const resumeTips = [
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
      paddingTop: 100,
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
      }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: 800,
          marginBottom: 16,
          color: '#0f172a',
        }}>Mid Career Resume Examples and Templates for 2026</h1>
        
        <div style={{
          display: 'flex',
          gap: 40,
          alignItems: 'flex-start',
          marginTop: 40,
        }}>
          {/* Template Image */}
          <div style={{
            width: 300,
            height: 400,
            borderRadius: 14,
            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
            background: '#fff',
            padding: 16,
            boxSizing: 'border-box',
            position: 'relative',
            cursor: 'pointer',
            overflow: 'hidden',
            flex: '0 0 auto',
          }}>
            <img
              src="/images/resume1.webp"
              alt="Mid Career Resume Template"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: 10,
                display: 'block',
              }}
            />
          </div>

          {/* Author Info */}
          <div style={{ flex: 1 }}>
            <p style={{
              fontSize: 14,
              color: '#64748b',
              marginBottom: 8,
            }}>Last Updated: March 21, 2026</p>
            <h2 style={{
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 16,
              color: '#0f172a',
            }}>Jacob Meade</h2>
            <p style={{
              fontSize: 16,
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: 8,
            }}>
              By Jacob Meade, Certified Professional Resume Writer (CPRW, ACRW)
            </p>
            <p style={{
              fontSize: 16,
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: 8,
            }}>
              Reviewed by Stacie Haller, Chief Career Advisor
            </p>

            <div style={{
              display: 'flex',
              gap: 12,
              marginTop: 32,
              marginBottom: 32,
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
                }}
              >
                Build My Resume
              </a>
              <a
                href="/builder"
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
                }}
              >
                Book Demo
              </a>
            </div>

            <p style={{
              fontSize: 16,
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: 700,
            }}>
              Every sample is created and approved by our team of Certified Professional Resume Writers. Our writers hold certifications from leading industry organizations and have years of experience in recruitment, career coaching, and resume writing. We continuously update our samples based on the latest hiring trends and employer expectations to ensure you have the best resources for your job search.
            </p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div style={{
        padding: '60px 96px 0',
        background: '#fff',
        borderTop: '1px solid #E2E8F0',
      }}>
        <h2 style={{
          fontSize: 32,
          fontWeight: 700,
          marginBottom: 32,
          color: '#0f172a',
        }}>Table of Contents</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          border: '1px solid #E2E8F0',
          borderRadius: 12,
          overflow: 'hidden',
        }}>
          {[
            'Top Mid Career Resume Examples',
            'Mid Career Resume Templates',
            'How to Write a Mid Career Resume',
            'Mid Career Resume Tips',
            'Common Mistakes to Avoid',
            'Frequently Asked Questions',
          ].map((item, index) => (
            <div key={index} style={{
              padding: '24px 28px',
              borderBottom: index < 3 ? '1px solid #E2E8F0' : 'none',
              borderRight: index % 3 !== 2 ? '1px solid #E2E8F0' : 'none',
              fontSize: 16,
              color: '#334155',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ECFDF5';
              e.currentTarget.style.color = '#0f172a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#334155';
            }}
            >
              <span style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: '#ECFDF5',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 13,
                fontWeight: 700,
                flexShrink: 0,
              }}>{index + 1}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <div style={{
        padding: '60px 96px',
        background: '#F8F9FA',
      }}>
        <div style={{
          display: 'flex',
          gap: 12,
          marginBottom: 32,
        }}>
          <a href="https://www.linkedin.com" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: '1px solid #E2E8F0', color: '#0f172a', fontSize: 14, fontWeight: 700 }}>in</a>
          <a href="https://twitter.com" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: '1px solid #E2E8F0', color: '#0f172a', fontSize: 14, fontWeight: 700 }}>X</a>
          <a href="https://www.facebook.com" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: '1px solid #E2E8F0', color: '#0f172a', fontSize: 14, fontWeight: 700 }}>f</a>
          <a href="mailto:share@example.com" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', background: '#fff', border: '1px solid #E2E8F0', color: '#0f172a' }}>
            <Mail size={20} />
          </a>
        </div>

        <p style={{
          fontSize: 18,
          lineHeight: 1.8,
          color: '#334155',
          maxWidth: 900,
          marginBottom: 32,
        }}>
          Whether you're looking to advance in your current field, transition to a new role, or take on greater leadership responsibilities, a well-crafted mid-career resume is essential for showcasing your professional growth. Our templates are designed to highlight your career progression, measurable achievements, and specialized expertise. Create a resume that demonstrates your value and positions you for the next step in your career.
        </p>

        <div style={{
          background: '#fff',
          padding: 32,
          borderRadius: 12,
          border: '1px solid #E2E8F0',
          marginBottom: 32,
        }}>
          <p style={{
            fontSize: 16,
            fontStyle: 'italic',
            color: '#475569',
            lineHeight: 1.7,
            marginBottom: 16,
          }}>
            "A strong mid-career resume should focus on your professional achievements and the impact you've made. Employers want to see how you've grown, what you've accomplished, and how you can bring that value to their organization. Quantify your results and tell a compelling story of your career progression."
          </p>
          <p style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#0f172a',
            margin: 0,
          }}>Carolyn Kleiman</p>
          <p style={{
            fontSize: 14,
            color: '#475569',
            margin: 0,
          }}>Professional Resume Writer</p>
        </div>
      </div>

      {/* Most Popular Mid Career Resumes */}
      <div style={{
        padding: '0 96px 60px',
        background: '#fff',
      }}>
        <h2 style={{
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 40,
          color: '#0f172a',
        }}>Most Popular Mid Career Resumes</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {mostPopularResumes.map((resume, index) => {
            const sampleResume = createPlaceholderResume();
            const templateConfigs: { templateId: TemplateId; template: React.FC<any>; primaryColor: string; accentColor: string; fontFamily: string; fontSize: number; lineSpacing: number; sectionSpacing: number }[] = [
              { templateId: 'modern' as TemplateId, template: ModernTemplate, primaryColor: '#60A5FA', accentColor: '#60A5FA', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 },
              { templateId: 'minimal' as TemplateId, template: MinimalTemplate, primaryColor: '#059669', accentColor: '#059669', fontFamily: 'Inter', fontSize: 13, lineSpacing: 1.4, sectionSpacing: 24 },
              { templateId: 'professional' as TemplateId, template: ProfessionalTemplate, primaryColor: '#1E40AF', accentColor: '#1E40AF', fontFamily: 'Georgia', fontSize: 14, lineSpacing: 1.55, sectionSpacing: 30 },
              { templateId: 'ats' as TemplateId, template: ATSTemplate, primaryColor: '#6D28D9', accentColor: '#6D28D9', fontFamily: 'Arial', fontSize: 13, lineSpacing: 1.45, sectionSpacing: 26 },
              { templateId: 'creative' as TemplateId, template: CreativeTemplate, primaryColor: '#DC2626', accentColor: '#DC2626', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 },
            ];
            const config = templateConfigs[index % 5];
            const TemplateComponent = config.template;
            const descriptions = [
              'For experienced managers seeking senior roles with a proven track record of team leadership and business growth.',
              'For professionals who have led cross-functional teams and delivered complex projects on time and within budget.',
              'For experienced leaders who have managed departments, driven strategy, and delivered measurable organizational impact.',
              'For specialists with deep expertise who want to highlight certifications, technical skills, and industry knowledge.',
              'For professionals ready to move up, showcasing promotions, expanded responsibilities, and career growth trajectory.',
            ];

            return (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  border: '1px solid #E2E8F0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  height: 400,
                  background: '#fff',
                  position: 'relative',
                  overflow: 'hidden',
                  borderBottom: '1px solid #E2E8F0',
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
                    <TemplateComponent resume={sampleResume} custom={config} />
                  </div>
                </div>
                <div style={{
                  padding: '20px 24px',
                  background: '#fff',
                }}>
                  <div style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: 8,
                  }}>{resume}</div>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: '#475569',
                    margin: '0 0 12px',
                  }}>
                    {descriptions[index]}
                  </p>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    color: '#10B981',
                    fontWeight: 600,
                    fontSize: 14,
                  }}>
                    View Example <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Resume Tips */}
      <div style={{
        padding: '0 96px 60px',
        background: '#F8F9FA',
      }}>
        <h2 style={{
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 40,
          color: '#0f172a',
        }}>Mid Career Resume Tips</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }}>
          {resumeTips.map((tip, index) => (
            <div key={index} style={{
              background: '#fff',
              padding: 24,
              borderRadius: 12,
              border: '1px solid #E2E8F0',
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
                color: '#334155',
              }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{
        padding: '0 96px 60px',
        background: '#fff',
      }}>
        <h2 style={{
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 40,
          color: '#0f172a',
        }}>Frequently Asked Questions</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{
              background: '#F8F9FA',
              borderRadius: 12,
              border: '1px solid #E2E8F0',
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
              <div style={{
                maxHeight: openFaq === index ? '200px' : '0',
                overflow: 'hidden',
                opacity: openFaq === index ? 1 : 0,
                transition: 'all 0.3s ease',
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

      {/* CTA Section */}
      <div style={{
        padding: '80px 96px',
        background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 16,
          color: '#0f172a',
        }}>Ready to Build Your Mid Career Resume?</h2>
        <p style={{
          fontSize: 18,
          color: '#475569',
          marginBottom: 32,
          lineHeight: 1.6,
        }}>
          Create a professional, ATS-friendly resume that showcases your career progression and achievements using our customizable templates.
        </p>
        <a
          href="/builder"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            padding: '16px 36px',
            fontSize: 18,
            fontWeight: 600,
            color: '#fff',
            background: '#0f172a',
            borderRadius: 8,
          }}
        >
          Build My Resume
        </a>
      </div>

      <Footer />
    </div>
  );
}