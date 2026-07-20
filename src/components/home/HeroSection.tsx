import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui';
import { ChevronDown, FileText, Star, BarChart3, Sparkles, Shield, Download, Eye } from 'lucide-react';
import { ResumeCard } from './ResumeCard';

interface HeroSectionProps {
  onStartHover: (hover: boolean) => void;
  startHover: boolean;
}

export function HeroSection({ onStartHover, startHover }: HeroSectionProps) {
  return (
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
              onMouseEnter={() => onStartHover(true)}
              onMouseLeave={() => onStartHover(false)}
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
            <div>
              <div style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-0.02em',
              }}>50K+</div>
              <div style={{
                fontSize: 13,
                color: '#94A3B8',
                fontWeight: 500,
                marginTop: 2,
              }}>Resumes Created</div>
            </div>
            <div>
              <div style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-0.02em',
              }}>4.9</div>
              <div style={{
                fontSize: 13,
                color: '#94A3B8',
                fontWeight: 500,
                marginTop: 2,
              }}>User Rating</div>
            </div>
            <div>
              <div style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-0.02em',
              }}>85%</div>
              <div style={{
                fontSize: 13,
                color: '#94A3B8',
                fontWeight: 500,
                marginTop: 2,
              }}>Interview Rate</div>
            </div>
            <div>
              <div style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-0.02em',
              }}>Free</div>
              <div style={{
                fontSize: 13,
                color: '#94A3B8',
                fontWeight: 500,
                marginTop: 2,
              }}>No Sign-Up</div>
            </div>
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