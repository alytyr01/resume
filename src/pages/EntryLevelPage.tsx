import { Navbar, Footer } from '@/components/home';
import { GraduationCap, ArrowRight, Star, Sparkles, Layout, Palette, Briefcase, FileText, Crown, Mail } from 'lucide-react';
import { useState } from 'react';
import { ModernTemplate } from '@/components/templates/ModernTemplate';
import { MinimalTemplate } from '@/components/templates/MinimalTemplate';
import { ProfessionalTemplate } from '@/components/templates/ProfessionalTemplate';
import { ATSTemplate } from '@/components/templates/ATSTemplate';
import { CreativeTemplate } from '@/components/templates/CreativeTemplate';
import type { TemplateId } from '@/types/resume';
import { createPlaceholderResume } from '@/data/placeholderResume';

export function EntryLevelPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is an entry-level resume?',
      answer: 'An entry-level resume is designed for individuals with limited professional experience, such as recent graduates, students, or career changers. It emphasizes education, skills, internships, and potential over extensive work history.'
    },
    {
      question: 'How long should an entry-level resume be?',
      answer: 'Keep your entry-level resume to one page. Focus on your most relevant qualifications, education, and experiences. Recruiters spend only a few seconds scanning each resume, so conciseness is key.'
    },
    {
      question: 'What should I put on my entry-level resume if I have no experience?',
      answer: 'Include education, relevant coursework, projects, internships, volunteer work, extracurricular activities, and transferable skills. Highlight any leadership roles, achievements, or academic honors that demonstrate your potential.'
    },
    {
      question: 'Should I include a career objective or summary?',
      answer: 'Yes, include a brief career objective or professional summary (2-3 lines) at the top of your resume. This helps recruiters understand what you are looking for and what you can bring to the role.'
    },
    {
      question: 'How can I make my entry-level resume stand out?',
      answer: 'Tailor your resume to each position, quantify achievements when possible, use keywords from the job description, highlight relevant coursework and projects, and ensure a clean, professional layout.'
    },
    {
      question: 'What format is best for an entry-level resume?',
      answer: 'Use a clean, professional format like chronological or combination. The chronological format works well if you have internships or part-time jobs, while the combination format can highlight skills if you have limited experience.'
    },
  ];

  const mostPopularResumes = [
    'Student Resume',
    'Internship Resume',
    'Fresh Graduate Resume',
    'Career Changer Resume',
    'Part-Time Job Resume',
  ];

  const resumeTips = [
    'Use a professional email address',
    'Quantify achievements from projects and coursework',
    'Include relevant coursework and academic projects',
    'Highlight transferable skills from extracurricular activities',
    'Tailor your resume to each specific job application',
    'Keep formatting clean and professional',
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
        background: 'linear-gradient(135deg, #EEF2FF 0%, #EFF6FF 100%)',
        padding: '80px 96px',
      }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: 800,
          marginBottom: 16,
          color: '#0f172a',
        }}>Entry Level Resume Examples and Templates for 2026</h1>
        
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
              alt="Entry Level Resume Template"
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
            'Top Entry Level Resume Examples',
            'Entry Level Resume Templates',
            'How to Write an Entry Level Resume',
            'Entry Level Resume Tips',
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
              e.currentTarget.style.background = '#EFF6FF';
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
                background: '#EFF6FF',
                color: '#3B82F6',
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
          Whether you're a recent graduate, career changer, or just starting your professional journey, a well-crafted entry-level resume is essential for landing your first job. Our templates are designed to highlight your education, skills, internships, and potential, even if you have limited professional experience. Create a resume that makes a strong first impression on recruiters.
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
            "A strong entry-level resume should focus on your potential and transferable skills. Even without extensive work history, you can showcase your academic achievements, projects, and enthusiasm to demonstrate your value to employers."
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

      {/* Most Popular Entry Level Resumes */}
      <div style={{
        padding: '0 96px 60px',
        background: '#fff',
      }}>
        <h2 style={{
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 40,
          color: '#0f172a',
        }}>Most Popular Entry Level Resumes</h2>

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

            return (
              <div
                key={index}
                style={{
                  background: '#F8F9FA',
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
                  borderTop: '1px solid #E2E8F0',
                }}>
                  <div style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: 4,
                  }}>{resume}</div>
                  <div style={{
                    fontSize: 14,
                    color: '#64748b',
                  }}>
                    View example resume and template
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
        }}>Entry Level Resume Tips</h2>
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
        background: 'linear-gradient(135deg, #EEF2FF 0%, #EFF6FF 100%)',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 16,
          color: '#0f172a',
        }}>Ready to Build Your Entry Level Resume?</h2>
        <p style={{
          fontSize: 18,
          color: '#475569',
          marginBottom: 32,
          lineHeight: 1.6,
        }}>
          Create a professional, ATS-friendly resume in minutes using our customizable templates.
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