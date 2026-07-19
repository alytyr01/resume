import { Button } from '@/components/ui';
import { FileText, ArrowRight, Sparkles, Shield, Download, Eye, Star, Zap, BarChart3 } from 'lucide-react';
import { useResumeStore } from '@/store/resumeStore';
import { PremiumTemplate } from '@/components/templates/PremiumTemplate';
import type { Customization } from '@/types/resume';
import { useEffect, useState } from 'react';

const defaultCustom: Customization = {
  templateId: 'modern',
  primaryColor: '#2563EB',
  accentColor: '#2563EB',
  fontFamily: 'Inter',
  fontSize: 15,
  lineSpacing: 1.65,
  sectionSpacing: 36,
};

const stats = [
  { value: '50K+', label: 'Resumes Created' },
  { value: '4.9', label: 'User Rating' },
  { value: '85%', label: 'Interview Rate' },
  { value: 'Free', label: 'No Sign-Up' },
];

const features = [
  {
    icon: Eye,
    title: 'Live Preview',
    desc: 'See your resume update in real-time as you type. No more guesswork.',
  },
  {
    icon: Download,
    title: 'Export as PDF',
    desc: 'Download a pixel-perfect PDF optimized for ATS systems and recruiters.',
  },
  {
    icon: Shield,
    title: '100% Private',
    desc: 'Your data never leaves your device. Nothing is stored or uploaded.',
  },
  {
    icon: BarChart3,
    title: 'ATS-Friendly',
    desc: 'Built with ATS parsing in mind. Your resume will pass automated screening.',
  },
  {
    icon: Sparkles,
    title: 'Pro Templates',
    desc: 'Choose from multiple professionally designed templates for any industry.',
  },
  {
    icon: Star,
    title: 'Import & Export',
    desc: 'Save your progress as JSON and pick up where you left off anytime.',
  },
];

export function HomePage() {
  const resume = useResumeStore((s) => s.resume);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      background: '#FFFFFF',
      color: '#111827',
      minHeight: '100vh',
      overflowX: 'hidden',
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #F3F4F6',
      }}>
        <div style={{
          padding: '16px 96px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <FileText style={{ width: 16, height: 16, color: '#fff' }} />
            </div>
            <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em' }}>ResumeForge</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="/builder" style={{ textDecoration: 'none' }}>
              <Button
                variant="ghost"
                style={{
                  fontSize: 14,
                  padding: '8px 16px',
                  height: 38,
                  borderRadius: 8,
                  fontWeight: 500,
                  lineHeight: 1,
                }}
              >
                Sign In
              </Button>
            </a>
            <a href="/builder" style={{ textDecoration: 'none' }}>
              <Button
                style={{
                  fontSize: 14,
                  padding: '8px 20px',
                  height: 38,
                  borderRadius: 8,
                  fontWeight: 600,
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  border: 'none',
                  boxShadow: '0 1px 3px rgba(79,70,229,0.3)',
                }}
              >
                Get Started Free
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Two Column Layout */}
      <div style={{
        padding: '0 96px',
        display: 'flex',
        alignItems: 'center',
        gap: 60,
        minHeight: 'calc(100vh - 73px)',
      }}>
        {/* Left Column - Text */}
        <div style={{
          flex: '0 0 520px',
          maxWidth: 520,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out',
        }}>
          {/* Trust badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 14px 6px 6px',
            borderRadius: 100,
            background: '#EEF2FF',
            marginBottom: 24,
            fontSize: 13,
            fontWeight: 500,
            color: '#4f46e5',
          }}>
            <span style={{
              padding: '2px 8px',
              borderRadius: 100,
              background: '#4f46e5',
              color: '#fff',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              New
            </span>
            ATS-optimized resume builder — try it free
          </div>

          <h1 style={{
            fontSize: 56,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            margin: '0 0 20px',
            color: '#0f172a',
          }}>
            Build a resume{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              that works
            </span>
            <br />
            as hard as you do
          </h1>
          <p style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: '#64748B',
            maxWidth: 480,
            margin: '0 0 36px',
          }}>
            A powerful yet minimal resume builder with live preview, 
            ATS-friendly output, and zero data tracking. 
            No sign-up required — start building in seconds.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 40 }}>
            <a href="/builder" style={{ textDecoration: 'none' }}>
              <Button
                size="lg"
                style={{
                  fontSize: 16,
                  padding: '14px 32px',
                  height: 'auto',
                  borderRadius: 10,
                  fontWeight: 600,
                  gap: 8,
                  background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  border: 'none',
                  boxShadow: '0 4px 14px rgba(79,70,229,0.4)',
                  transition: 'all 0.2s ease',
                }}
              >
                Start Building Free <ArrowRight style={{ width: 18, height: 18 }} />
              </Button>
            </a>
            <a href="/builder" style={{ textDecoration: 'none' }}>
              <Button
                variant="outline"
                size="lg"
                style={{
                  fontSize: 16,
                  padding: '14px 28px',
                  height: 'auto',
                  borderRadius: 10,
                  fontWeight: 500,
                  gap: 8,
                  border: '1.5px solid #E2E8F0',
                }}
              >
                View Demo <Eye style={{ width: 18, height: 18 }} />
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: 36,
            paddingTop: 24,
            borderTop: '1px solid #F1F5F9',
          }}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#0f172a',
                  letterSpacing: '-0.02em',
                }}>{stat.value}</div>
                <div style={{
                  fontSize: 13,
                  color: '#94A3B8',
                  fontWeight: 500,
                  marginTop: 2,
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Preview */}
        <div style={{
          flex: 1,
          minWidth: 0,
          maxHeight: 'calc(100vh - 120px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease-out 0.2s',
        }}>
          <div style={{
            position: 'relative',
          }}>
            {/* Decorative background */}
            <div style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-20px',
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Preview card */}
            <div style={{
              border: '1px solid #E2E8F0',
              borderRadius: 12,
              overflow: 'hidden',
              background: '#fff',
              boxShadow: '0 15px 30px -10px rgba(0,0,0,0.1)',
              position: 'relative',
              maxWidth: 380,
              maxHeight: 440,
            }}>
              {/* Mac-style dots */}
              <div style={{
                display: 'flex',
                gap: 5,
                padding: '8px 12px',
                borderBottom: '1px solid #F1F5F9',
                background: '#FAFAFA',
              }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#EF4444' }} />
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#F59E0B' }} />
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981' }} />
              </div>
              <div style={{
                transform: 'scale(0.28)',
                transformOrigin: 'top left',
                width: '357.14%',
              }}>
                <PremiumTemplate resume={resume} custom={defaultCustom} />
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute',
              bottom: -10,
              left: -10,
              background: '#fff',
              border: '1px solid #E2E8F0',
              borderRadius: 8,
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              boxShadow: '0 3px 10px rgba(0,0,0,0.06)',
            }}>
              <Zap style={{ width: 12, height: 12, color: '#4f46e5' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#0f172a' }}>ATS Score: 92/100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        padding: '0 96px',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          height: 1,
          background: 'linear-gradient(to right, transparent, #E2E8F0, transparent)',
        }} />
      </div>

      {/* Features Section */}
      <div style={{
        padding: '96px 0',
        background: '#F8FAFC',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 96px',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: 64,
          }}>
            <h2 style={{
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              color: '#0f172a',
              margin: '0 0 16px',
            }}>
              Everything you need to land{' '}
              <span style={{ color: '#4f46e5' }}>the interview</span>
            </h2>
            <p style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: '#64748B',
              maxWidth: 560,
              margin: '0 auto',
            }}>
              Built for job seekers who want a polished, professional resume without the hassle.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
          }}>
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  style={{
                    padding: 32,
                    borderRadius: 16,
                    background: '#fff',
                    border: '1px solid #F1F5F9',
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C7D2FE';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(79,70,229,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#F1F5F9';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: '#EEF2FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}>
                    <Icon style={{ width: 20, height: 20, color: '#4f46e5' }} />
                  </div>
                  <h3 style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#0f172a',
                    margin: '0 0 8px',
                    letterSpacing: '-0.01em',
                  }}>{feature.title}</h3>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: '#64748B',
                    margin: 0,
                  }}>{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 96px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            color: '#0f172a',
            margin: '0 0 16px',
          }}>
            Ready to build your{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              best resume
            </span>
            ?
          </h2>
          <p style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: '#64748B',
            maxWidth: 480,
            margin: '0 auto 36px',
          }}>
            No account needed. No credit card. Just a fast, beautiful resume builder.
          </p>
          <a href="/builder" style={{ textDecoration: 'none' }}>
            <Button
              size="lg"
              style={{
                fontSize: 16,
                padding: '14px 36px',
                height: 'auto',
                borderRadius: 10,
                fontWeight: 600,
                gap: 8,
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                border: 'none',
                boxShadow: '0 4px 14px rgba(79,70,229,0.4)',
              }}
            >
              Start Building Now <ArrowRight style={{ width: 18, height: 18 }} />
            </Button>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #F1F5F9',
        background: '#FAFAFA',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '24px 96px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 24,
              height: 24,
              borderRadius: 6,
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <FileText style={{ width: 12, height: 12, color: '#fff' }} />
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#0f172a' }}>ResumeForge</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <span style={{ fontSize: 13, color: '#94A3B8' }}>Privacy-first resume builder</span>
            <span style={{ fontSize: 13, color: '#CBD5E1' }}>&middot;</span>
            <span style={{ fontSize: 13, color: '#94A3B8' }}>React &middot; TypeScript</span>
          </div>
        </div>
      </footer>
    </div>
  );
}