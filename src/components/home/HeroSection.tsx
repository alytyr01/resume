import { useState, useEffect } from 'react';
import { ResumeCard } from './ResumeCard';
import { Star } from 'lucide-react';

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
  const [cardScale, setCardScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 375) {
        setCardScale(0.85);
      } else if (width < 640) {
        setCardScale(0.9);
      } else if (width < 768) {
        setCardScale(0.95);
      } else {
        setCardScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          width: '100%',
        }}>
          <h1 className="hero-title" style={{
            fontSize: 'clamp(32px, 7vw, 64px)',
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
            gap: 'clamp(16px, 4vw, 28px)',
            paddingTop: 16,
            paddingBottom: 24,
            borderTop: '1px solid #F1F5F9',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory',
          }}>
            <div style={{ scrollSnapAlign: 'start' }}>
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
            <div style={{ scrollSnapAlign: 'start' }}>
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
            <div style={{ scrollSnapAlign: 'start' }}>
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
            <div style={{ scrollSnapAlign: 'start' }}>
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

        {/* Right Column - Cards */}
        <div className="hero-cards-col" style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible',
          marginTop: 48,
          width: '100%',
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '520px',
            height: 'auto',
            minHeight: `${600 * cardScale}px`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: `${32 * cardScale}px`,
            transform: `scale(${cardScale})`,
            transformOrigin: 'top center',
            marginBottom: `${-((600 - 200) * (1 - cardScale))}px`,
          }}>
            {/* First Card */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}>
              <ResumeCard templateId="modern" width={400 * cardScale} height={560 * cardScale} />
              <div style={{
                position: 'absolute',
                bottom: -16,
                left: 0,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(8px)',
                color: '#0f172a',
                padding: '8px 16px',
                borderRadius: '0px 8px 0px 8px',
                fontSize: 14,
                fontWeight: 700,
                zIndex: 10,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                letterSpacing: '-0.01em',
                borderTop: '2px solid #94A3B8',
                borderRight: '2px solid #94A3B8',
              }}>
                Free
              </div>
            </div>

            {/* Second Card */}
            <div style={{
              position: 'absolute',
              right: `${20 * cardScale}px`,
              top: `${140 * cardScale}px`,
            }}>
              <ResumeCard templateId="professional" width={280 * cardScale} height={392 * cardScale} />
              <div style={{
                position: 'absolute',
                bottom: -40,
                right: 12,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(8px)',
                color: '#0f172a',
                padding: '8px 16px',
                borderRadius: '8px 0px 8px 0px',
                fontSize: 14,
                fontWeight: 700,
                zIndex: 10,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                letterSpacing: '-0.01em',
                borderTop: '2px solid #94A3B8',
                borderLeft: '2px solid #94A3B8',
              }}>
                Template
              </div>
              <div style={{
                position: 'absolute',
                top: -60,
                right: 0,
                background: '#334155',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '8px 8px 0px 8px',
                fontSize: 15,
                fontWeight: 700,
                animation: 'fadeSlideIn 0.5s ease-out, bounce 2s ease-in-out infinite',
                zIndex: 10,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                letterSpacing: '-0.01em',
              }}>
                <Star style={{ width: 16, height: 16 }} />
                Accepted
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}