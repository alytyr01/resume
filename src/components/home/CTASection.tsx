import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui';

export function CTASection() {
  return (
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
  );
}