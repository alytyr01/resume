import { Navbar } from '@/components/home';
import { ModernTemplate } from '@/components/templates/ModernTemplate';
import { createPlaceholderResume } from '@/data/placeholderResume';
import { Layout, FileText, Briefcase, Target, Palette, Crown, Star } from 'lucide-react';

interface TemplatePageProps {
  title: string;
  description: string;
  features: string[];
  useCases: string[];
  tips: string[];
  image: string;
}

export function TemplatePage({ title, description, features, useCases, tips, image }: TemplatePageProps) {
  const sampleResume = createPlaceholderResume();

  return (
    <div style={{
      fontFamily: 'sans-serif',
      background: '#F8F9FA',
      color: '#111827',
      minHeight: '100vh',
    }}>
      <Navbar dropdowns={{
        templates: [
          { href: '/templates/modern', icon: <Layout style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Modern', description: 'Clean, modern design' },
          { href: '/templates/minimal', icon: <FileText style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Minimal', description: 'Simple, elegant layout' },
          { href: '/templates/professional', icon: <Briefcase style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Professional', description: 'Corporate, formal style' },
          { href: '/templates/ats', icon: <Target style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'ATS', description: 'Optimized for screening' },
          { href: '/templates/creative', icon: <Palette style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Creative', description: 'Bold, eye-catching look' },
          { href: '/templates/premium', icon: <Crown style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Premium', description: 'Most popular choice' },
        ],
        examples: [
          { href: '/examples', icon: <Layout style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Entry Level', description: 'Recent graduates' },
          { href: '/examples', icon: <Briefcase style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Mid Career', description: '5+ years experience' },
          { href: '/examples', icon: <Star style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Executive', description: 'Senior leadership' },
        ],
      }} />
      
      {/* Hero Section for Template */}
      <div style={{
        background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)',
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
          {/* Left side - Text content */}
          <div style={{
            flex: 1,
            paddingRight: 20,
          }}>
            <div style={{
              fontSize: 14,
              color: '#64748b',
              marginBottom: 12,
            }}>
              <a href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</a>
              <span style={{ margin: '0 8px' }}>/</span>
              <span>Modern Resume Examples</span>
            </div>
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
              lineHeight: 1.6,
              color: '#475569',
              margin: '0 0 32px',
              maxWidth: 700,
            }}>
              Clean, modern design with a focus on readability and contemporary aesthetics. Perfect for tech professionals and creative roles.
            </p>
            <p style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: '#475569',
              margin: '0 0 40px',
              maxWidth: 700,
            }}>
              Featuring bold section headers, clear visual hierarchy, and strategic accent colors, this template helps your resume stand out while maintaining a professional appearance that recruiters love.
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
                  href="/templates"
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
            flex: '0 0 300px',
            borderRadius: 14,
            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
            position: 'relative',
          }}>
            <img
              src="/images/modern-resume.png"
              alt="Modern Resume Template"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
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
      `}</style>

      {/* About Modern Resume Section */}
      <div style={{
        padding: '60px 96px',
      }}>
        <h2 style={{
          fontSize: 40,
          fontWeight: 700,
          margin: '0 0 32px',
          color: '#0f172a',
        }}>
          About Modern Resume Templates
        </h2>
        <div style={{
          background: '#fff',
          padding: 40,
          borderRadius: 16,
          border: '1px solid #E2E8F0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}>
          <p style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: '#334155',
            margin: '0 0 20px',
          }}>
            Modern resume templates are designed with contemporary design principles that emphasize clean lines, strategic use of white space, and a focus on content hierarchy. These templates are perfect for today's job market where recruiters spend an average of just 7-8 seconds scanning each resume.
          </p>
          <p style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: '#334155',
            margin: '0 0 20px',
          }}>
            The modern template style prioritizes readability and scannability while maintaining a professional appearance. Key elements include bold section headers, clear visual hierarchy, and strategic use of accent colors to draw attention to important information. This design philosophy ensures your resume not only looks great but also effectively communicates your value to potential employers.
          </p>
          <p style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: '#334155',
            margin: 0,
          }}>
            Modern templates are particularly effective for roles in technology, design, marketing, and other creative industries where a contemporary aesthetic is valued. They also work well for traditional roles, as the clean design conveys professionalism while the modern touches help your application stand out from more conventional resumes.
          </p>
        </div>
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
          {features.map((feature, index) => (
            <div key={index} style={{
              background: '#fff',
              padding: 32,
              borderRadius: 16,
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
            }}>
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
          ))}
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 30,
        }}>
          {[1, 2, 3, 4].map((num) => (
            <div key={num} style={{
              background: '#fff',
              padding: 20,
              borderRadius: 16,
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
            }}>
              <div style={{
                borderRadius: 12,
                overflow: 'hidden',
                marginBottom: 16,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}>
                <img
                  src={image}
                  alt={`${title} Sample ${num}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
              <h3 style={{
                fontSize: 20,
                fontWeight: 700,
                margin: '0 0 10px',
                color: '#0f172a',
              }}>
                Example {num}
              </h3>
              <p style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: '#64748B',
                margin: 0,
              }}>
                Professionally crafted {title.toLowerCase()} resume example.
              </p>
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
                color: '#4f46e5',
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
          background: '#fff',
          padding: 48,
          borderRadius: 20,
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
        }}>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}>
            {tips.map((tip, index) => (
              <li key={index} style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: '#475569',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 18,
              }}>
                <span style={{
                  color: '#0d9488',
                  fontWeight: 700,
                  fontSize: 24,
                  flexShrink: 0,
                }}>•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={{
        padding: '0 96px 40px',
      }}>
        <div style={{
          fontSize: 14,
          color: '#64748b',
          borderBottom: '2px solid #64748b',
          paddingBottom: 10,
          display: 'inline-block',
        }}>
          <a href="/" style={{ color: '#64748b', textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '3px' }}>Home</a>
          <span style={{ margin: '0 8px', textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '3px' }}>/</span>
          <span style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '3px' }}>Modern Resume Examples</span>
        </div>
      </div>
    </div>
  );
}
