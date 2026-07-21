import { Star } from 'lucide-react';
import { ResumeCard } from './ResumeCard';

const delayNavigation = (href: string) => {
  setTimeout(() => {
    window.location.href = href;
  }, 300);
};

interface HeroSectionProps {
  onStartHover: (hover: boolean) => void;
  startHover: boolean;
}

export function HeroSection({ onStartHover, startHover }: HeroSectionProps) {
  return (
    <div className="hero-section" style={{
      padding: '60px 16px 0',
      minHeight: 'calc(100vh - 73px)',
    }}>
      <div className="hero-layout" style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 0,
        marginLeft: 'auto',
        flexDirection: 'column',
      }}>
        {/* Left Column - Text */}
        <div className="hero-text-col" style={{
          flex: '0 1 100%',
          maxWidth: 'min(760px, 100%)',
          marginLeft: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }}>
          <h1 className="hero-title" style={{
            fontSize: 'clamp(28px, 6vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            margin: '0 0 12px',
            color: '#0f172a',
            maxWidth: 'min(760px, 100%)',
          }}>
            Build a resume that gets{' '}
            <span style={{
              color: '#0d9488',
            }}>
              noticed by recruiters.
            </span>
          </h1>
          <p className="hero-subtitle" style={{
            fontSize: 'clamp(15px, 2vw, 20px)',
            lineHeight: 1.7,
            color: '#64748B',
            maxWidth: 'min(760px, 100%)',
            margin: '0 0 12px',
          }}>
            Struggling with messy, inconsistent resumes and time-consuming manual formatting?
          </p>
          <p className="hero-subtitle" style={{
            fontSize: 'clamp(15px, 2vw, 20px)',
            lineHeight: 1.7,
            color: '#64748B',
            maxWidth: 'min(760px, 100%)',
            margin: '0 0 16px',
          }}>
            ResumeForge helps you rapidly create polished, professional resumes that impress recruiters and win more interviews.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta" style={{
            display: 'flex',
            gap: 'clamp(8px, 1.5vw, 12px)',
            marginBottom: 16,
            flexWrap: 'wrap',
          }}>
            <a
              href="/builder"
              onClick={(e) => { e.preventDefault(); delayNavigation('/builder'); }}
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(12px, 2vw, 20px) clamp(20px, 3vw, 40px)',
                fontSize: 'clamp(14px, 1.5vw, 17px)',
                fontWeight: 600,
                color: '#fff',
                background: startHover ? '#334155' : '#0f172a',
                borderRadius: 10,
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
                fontFamily: 'sans-serif',
                transition: 'background 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={() => onStartHover(true)}
              onMouseLeave={() => onStartHover(false)}
            >
              Create my resume
            </a>
            <a
              href="/builder"
              onClick={(e) => { e.preventDefault(); delayNavigation('/builder'); }}
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(12px, 2vw, 20px) clamp(20px, 3vw, 36px)',
                fontSize: 'clamp(14px, 1.5vw, 17px)',
                fontWeight: 500,
                color: '#0f172a',
                background: '#fff',
                borderRadius: 10,
                border: '1.5px solid #0f172a',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
                fontFamily: 'sans-serif',
                whiteSpace: 'nowrap',
              }}
            >
              Book Demo
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={{
            display: 'flex',
            gap: 'clamp(32px, 5vw, 28px)',
            paddingTop: 16,
            paddingBottom: 24,
            borderTop: '1px solid #F1F5F9',
            flexWrap: 'wrap',
          }}>
            <div>
              <div style={{
                fontSize: 'clamp(16px, 2vw, 22px)',
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-0.02em',
              }}>50K+</div>
              <div style={{
                fontSize: 'clamp(11px, 1.2vw, 13px)',
                color: '#94A3B8',
                fontWeight: 500,
                marginTop: 2,
              }}>Resumes Created</div>
            </div>
            <div>
              <div style={{
                fontSize: 'clamp(16px, 2vw, 22px)',
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-0.02em',
              }}>4.9</div>
              <div style={{
                fontSize: 'clamp(11px, 1.2vw, 13px)',
                color: '#94A3B8',
                fontWeight: 500,
                marginTop: 2,
              }}>User Rating</div>
            </div>
            <div>
              <div style={{
                fontSize: 'clamp(16px, 2vw, 22px)',
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-0.02em',
              }}>85%</div>
              <div style={{
                fontSize: 'clamp(11px, 1.2vw, 13px)',
                color: '#94A3B8',
                fontWeight: 500,
                marginTop: 2,
              }}>Interview Rate</div>
            </div>
            <div>
              <div style={{
                fontSize: 'clamp(16px, 2vw, 22px)',
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-0.02em',
              }}>Start for Free</div>
              <div style={{
                fontSize: 'clamp(11px, 1.2vw, 13px)',
                color: '#94A3B8',
                fontWeight: 500,
                marginTop: 2,
              }}>No Credit Card</div>
            </div>
          </div>
        </div>

        {/* Right Column - Two overlapping cards (below text on mobile, side on desktop) */}
        <div className="hero-cards-col" style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible',
          marginTop: 32,
          width: '100%',
        }}>
          <div style={{
            position: 'relative',
            width: 'min(520px, 100%)',
            height: 'min(620px, 80vw)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ position: 'absolute', left: 0, top: 0, zIndex: 1 }}>
              <div className="hero-card-main">
                <ResumeCard templateId="modern" width={400} height={560} />
              </div>
              <div style={{
                position: 'absolute',
                bottom: 20,
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
              <div className="hero-card-secondary">
                <ResumeCard templateId="professional" width={280} height={392} />
              </div>
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
                <Star style={{ width: 18, height: 18 }} />
                Accepted
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}