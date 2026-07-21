interface Feature {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
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
  );
}