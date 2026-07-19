import { Button } from '@/components/ui';
import { FileText, ArrowRight, Sparkles, Shield, Download, Eye, Star, BarChart3, ChevronDown, Flag } from 'lucide-react';
import { getTemplate } from '@/components/templates';
import { createPlaceholderResume } from '@/data/placeholderResume';
import type { Customization } from '@/types/resume';
import { useEffect, useState } from 'react';

const stats = [
  { value: '50K+', label: 'Resumes Created' },
  { value: '4.9', label: 'User Rating' },
  { value: '85%', label: 'Interview Rate' },
  { value: 'Free', label: 'No Sign-Up' },
];

const templateCustoms: Customization[] = [
  { templateId: 'modern', primaryColor: '#2563EB', accentColor: '#2563EB', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 },
  { templateId: 'minimal', primaryColor: '#059669', accentColor: '#059669', fontFamily: 'Inter', fontSize: 13, lineSpacing: 1.4, sectionSpacing: 24 },
  { templateId: 'professional', primaryColor: '#1E40AF', accentColor: '#1E40AF', fontFamily: 'Georgia', fontSize: 14, lineSpacing: 1.55, sectionSpacing: 30 },
  { templateId: 'ats', primaryColor: '#6D28D9', accentColor: '#6D28D9', fontFamily: 'Arial', fontSize: 13, lineSpacing: 1.45, sectionSpacing: 26 },
  { templateId: 'creative', primaryColor: '#DC2626', accentColor: '#DC2626', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 },
];

function ResumeCard({ templateId, width, height }: { templateId: string; width: number; height: number }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const imageSrc = templateId === 'professional' ? '/images/resume2.png' : '/images/resume1.webp';

  return (
    <div
      style={{
        width,
        height,
        borderRadius: 24,
        background: 'rgba(255, 255, 255, 0.35)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: '0 24px 64px rgba(30, 41, 59, 0.45)',
        overflow: 'visible',
        padding: 16,
        boxSizing: 'border-box',
        position: 'relative',
        cursor: 'pointer',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageSrc}
        alt={`${templateId} template`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: 16,
          display: 'block',
        }}
      />


      {showTooltip && (
        <div style={{
          position: 'fixed',
          left: tooltipPos.x,
          top: tooltipPos.y,
          transform: 'translate(-50%, -100%)',
          background: '#0f172a',
          color: '#fff',
          padding: '6px 12px',
          borderRadius: 6,
          fontSize: 13,
          fontWeight: 600,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          letterSpacing: '-0.01em',
        }}>
          {templateId.charAt(0).toUpperCase() + templateId.slice(1)} Template
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid #0f172a',
          }} />
        </div>
      )}
    </div>
  );
}

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
  const [isVisible, setIsVisible] = useState(false);
  const [startHover, setStartHover] = useState(false);
  const [getStartedHover, setGetStartedHover] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeSlideIn {
        from { opacity: 0; transform: translateY(-8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{
      fontFamily: 'sans-serif',
      background: '#F8F9FA',
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
          padding: '20px 96px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img
                src="/images/logo.png"
                alt="ResumeForge"
                style={{ width: 64, height: 64, borderRadius: 12, objectFit: 'contain' }}
              />
            </div>
            <div style={{ width: 1, height: 24, background: '#E2E8F0' }} />
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => document.getElementById('templates-dropdown')?.style && (document.getElementById('templates-dropdown')!.style.display = 'block')}
              onMouseLeave={() => setTimeout(() => { if (!document.getElementById('templates-dropdown')?.matches(':hover')) { document.getElementById('templates-dropdown')!.style.display = 'none'; } }, 100)}
            >
              <a href="/templates" style={{ textDecoration: 'none', fontSize: 20, fontWeight: 500, color: '#475569', display: 'flex', alignItems: 'center', gap: 4 }}>
                Resume Templates <ChevronDown style={{ width: 18, height: 18 }} />
              </a>
              <div
                id="templates-dropdown"
                style={{
                  display: 'none',
                  position: 'absolute',
                  top: '100%',
                  left: '-20px',
                  background: '#fff',
                  border: '1px solid #E2E8F0',
                  borderRadius: 12,
                  padding: '12px 0',
                  minWidth: 200,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  zIndex: 1000,
                }}
              >
                <a href="/templates" style={{ textDecoration: 'none', color: '#1e293b', padding: '8px 20px', display: 'block', fontSize: 15, fontWeight: 500 }} onMouseEnter={() => { document.getElementById('templates-dropdown')!.style.display = 'block'; }} onMouseLeave={() => { document.getElementById('templates-dropdown')!.style.display = 'none'; }}>Modern Template</a>
                <a href="/templates" style={{ textDecoration: 'none', color: '#1e293b', padding: '8px 20px', display: 'block', fontSize: 15, fontWeight: 500 }} onMouseEnter={() => { document.getElementById('templates-dropdown')!.style.display = 'block'; }} onMouseLeave={() => { document.getElementById('templates-dropdown')!.style.display = 'none'; }}>Minimal Template</a>
                <a href="/templates" style={{ textDecoration: 'none', color: '#1e293b', padding: '8px 20px', display: 'block', fontSize: 15, fontWeight: 500 }} onMouseEnter={() => { document.getElementById('templates-dropdown')!.style.display = 'block'; }} onMouseLeave={() => { document.getElementById('templates-dropdown')!.style.display = 'none'; }}>Professional Template</a>
                <a href="/templates" style={{ textDecoration: 'none', color: '#1e293b', padding: '8px 20px', display: 'block', fontSize: 15, fontWeight: 500 }} onMouseEnter={() => { document.getElementById('templates-dropdown')!.style.display = 'block'; }} onMouseLeave={() => { document.getElementById('templates-dropdown')!.style.display = 'none'; }}>ATS Template</a>
                <a href="/templates" style={{ textDecoration: 'none', color: '#1e293b', padding: '8px 20px', display: 'block', fontSize: 15, fontWeight: 500 }} onMouseEnter={() => { document.getElementById('templates-dropdown')!.style.display = 'block'; }} onMouseLeave={() => { document.getElementById('templates-dropdown')!.style.display = 'none'; }}>Creative Template</a>
              </div>
            </div>
            <a href="/examples" style={{ textDecoration: 'none', fontSize: 20, fontWeight: 500, color: '#475569', display: 'flex', alignItems: 'center', gap: 4 }}>Resume Examples <ChevronDown style={{ width: 18, height: 18 }} /></a>
            <a href="/faq" style={{ textDecoration: 'none', fontSize: 20, fontWeight: 500, color: '#475569', display: 'flex', alignItems: 'center', gap: 4 }}>FAQ <ChevronDown style={{ width: 18, height: 18 }} /></a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="/builder" style={{ textDecoration: 'none' }}>
              <Button
                variant="ghost"
                style={{
                  fontSize: 20,
                  padding: '10px 20px',
                  height: 44,
                  borderRadius: 8,
                  fontWeight: 500,
                  lineHeight: 1,
                  fontFamily: 'sans-serif',
                }}
              >
                Sign In
              </Button>
            </a>
            <a href="/builder" style={{ textDecoration: 'none' }}>
              <Button
                style={{
                  fontSize: 20,
                  padding: '10px 24px',
                  height: 44,
                  borderRadius: 8,
                  fontWeight: 600,
                  lineHeight: 1,
                  fontFamily: 'sans-serif',
                  background: '#0f172a',
                  border: 'none',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                }}
              >
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Two Column Layout */}
      <div style={{
        padding: '120px 96px 0',
        minHeight: 'calc(100vh - 73px)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 0,
          marginLeft: 'auto',
        }}>
        {/* Left Column - Text */}
        <div style={{
          flex: '0 0 760px',
          maxWidth: 760,
          marginLeft: 80,
          paddingLeft: 0,
          paddingRight: 20,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out',
        }}>
          <h1 style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            margin: '0 0 12px',
            color: '#0f172a',
            maxWidth: 760,
          }}>
            Build a resume that gets{' '}
            <span style={{
              color: '#0d9488',
            }}>
              noticed by recruiters.
            </span>
          </h1>
          <p style={{
            fontSize: 20,
            lineHeight: 1.7,
            color: '#64748B',
            maxWidth: 760,
            margin: '0 0 16px',
          }}>
            Struggling with messy, inconsistent resumes and time-consuming manual formatting?
          </p>
          <p style={{
            fontSize: 20,
            lineHeight: 1.7,
            color: '#64748B',
            maxWidth: 760,
            margin: '0 0 16px',
          }}>
            ResumeForge helps you rapidly create polished, professional resumes that impress recruiters and win more interviews.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            <a
              href="/builder"
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '20px 40px',
                fontSize: 17,
                fontWeight: 600,
                color: '#fff',
                background: startHover ? '#334155' : '#0f172a',
                borderRadius: 10,
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
                fontFamily: 'sans-serif',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={() => setStartHover(true)}
              onMouseLeave={() => setStartHover(false)}
            >
              Start Free Trial
            </a>
            <a
              href="/builder"
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '20px 36px',
                fontSize: 17,
                fontWeight: 500,
                color: '#0f172a',
                background: '#fff',
                borderRadius: 10,
                border: '1.5px solid #0f172a',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
                fontFamily: 'sans-serif',
              }}
            >
              Book Demo
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: 28,
            paddingTop: 16,
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

        {/* Right Column - Two overlapping cards */}
        <div style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          paddingLeft: 20,
          marginRight: 70,
          overflow: 'visible',
        }}>
          <div style={{ position: 'relative', width: 520, height: 620, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, zIndex: 1 }}>
              <ResumeCard templateId="modern" width={400} height={560} />
              <div style={{
                position: 'absolute',
                bottom:  20,
                left: -30,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(8px)',
                color: '#0f172a',
                padding: '10px 18px',
                borderRadius: '0px 8px 0px 8px',
                fontSize: 15,
                fontWeight: 700,
                zIndex: 10,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                letterSpacing: '-0.01em',
                borderTop: '2px solid #94A3B8',
                borderRight: '2px solid #94A3B8',
                borderBottom: 'none',
                borderLeft: 'none',
              }}>
                Free
              </div>
            </div>
            <div style={{ position: 'absolute', right: 0, top: 140, zIndex: 2 }}>
              <ResumeCard templateId="professional" width={280} height={392} />
              <div style={{
                position: 'absolute',
                bottom: -40,
                right: 12,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(8px)',
                color: '#0f172a',
                padding: '10px 18px',
                borderRadius: '8px 0px 8px 0px',
                fontSize: 15,
                fontWeight: 700,
                zIndex: 10,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                letterSpacing: '-0.01em',
                borderTop: '2px solid #94A3B8',
                borderLeft: '2px solid #94A3B8',
                borderBottom: 'none',
                borderRight: 'none',
              }}>
                Template
              </div>
              <div style={{
                position: 'absolute',
                top: -80,
                right: -10,
                background: '#334155',
                color: '#fff',
                padding: '10px 18px',
                borderRadius: '8px 8px 0px 8px',
                fontSize: 17,
                fontWeight: 700,
                animation: 'fadeSlideIn 0.5s ease-out, bounce 2s ease-in-out infinite',
                zIndex: 10,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                letterSpacing: '-0.01em',
              }}>
                <Flag style={{ width: 18, height: 18 }} />
                Accepted
              </div>
            </div>
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
                fontFamily: 'sans-serif',
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                border: 'none',
                boxShadow: '0 4px 14px rgba(79,70,229,0.4)',
              }}
            >
              Start Free Trial <ArrowRight style={{ width: 18, height: 18 }} />
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
            <img
              src="/images/logo.png"
              alt="ResumeForge"
              style={{ width: 48, height: 48, borderRadius: 10, objectFit: 'contain' }}
            />
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