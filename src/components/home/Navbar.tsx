import { Button } from '@/components/ui';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface NavbarProps {
  dropdowns: {
    templates: DropdownItem[];
    examples: DropdownItem[];
  };
}

export function Navbar({ dropdowns }: NavbarProps) {
  return (
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/logo.png"
              alt="CVora"
              style={{ width: 64, height: 64, borderRadius: 16, objectFit: 'contain' }}
            />
          </a>
          <div style={{ width: 1, height: 28, background: '#E2E8F0' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => document.getElementById('templates-dropdown')?.style && (document.getElementById('templates-dropdown')!.style.display = 'block')}
              onMouseLeave={() => document.getElementById('templates-dropdown')?.style && (document.getElementById('templates-dropdown')!.style.display = 'none')}
            >
              <a href="/templates" style={{ textDecoration: 'none', fontSize: 22, fontWeight: 600, color: '#475569', display: 'flex', alignItems: 'center', gap: 4, letterSpacing: '-0.01em' }}>
                Resume Templates <ChevronDown style={{ width: 20, height: 20 }} />
              </a>
              <div
                id="templates-dropdown"
                onMouseEnter={() => document.getElementById('templates-dropdown')?.style && (document.getElementById('templates-dropdown')!.style.display = 'block')}
                onMouseLeave={() => document.getElementById('templates-dropdown')?.style && (document.getElementById('templates-dropdown')!.style.display = 'none')}
                style={{
                  display: 'none',
                  position: 'absolute',
                  top: '100%',
                  left: '-20px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 16,
                  padding: 20,
                  minWidth: 900,
                  width: 900,
                  zIndex: 1000,
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                  {dropdowns.templates.map((item) => (
                    <a key={item.title} href={item.href} style={{ textDecoration: 'none', color: '#0f172a', padding: '14px 10px', fontSize: 24, fontWeight: 700, display: 'flex', alignItems: 'flex-start', gap: 16, textAlign: 'left' }}>
                      {item.icon}
                      <div>
                        <div style={{fontSize:20,fontWeight:700, lineHeight: 1.4, textAlign: 'left'}}>{item.title}</div>
                        <div style={{fontSize:15,fontWeight:400,color:'#94a3b8', lineHeight: 1.4, textAlign: 'left', whiteSpace: 'nowrap'}}>{item.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => document.getElementById('examples-dropdown')?.style && (document.getElementById('examples-dropdown')!.style.display = 'block')}
              onMouseLeave={() => document.getElementById('examples-dropdown')?.style && (document.getElementById('examples-dropdown')!.style.display = 'none')}
            >
              <a href="/career-levels" style={{ textDecoration: 'none', fontSize: 20, fontWeight: 500, color: '#475569', display: 'flex', alignItems: 'center', gap: 4 }}>
                Resume Examples <ChevronDown style={{ width: 18, height: 18 }} />
              </a>
              <div
                id="examples-dropdown"
                onMouseEnter={() => document.getElementById('examples-dropdown')?.style && (document.getElementById('examples-dropdown')!.style.display = 'block')}
                onMouseLeave={() => document.getElementById('examples-dropdown')?.style && (document.getElementById('examples-dropdown')!.style.display = 'none')}
                style={{
                  display: 'none',
                  position: 'absolute',
                  top: '100%',
                  left: '-20px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 16,
                  padding: 20,
                  minWidth: 900,
                  width: 900,
                  zIndex: 1000,
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                  {dropdowns.examples.map((item) => (
                    <a key={item.title} href={item.href} style={{ textDecoration: 'none', color: '#0f172a', padding: '14px 10px', fontSize: 24, fontWeight: 700, display: 'flex', alignItems: 'flex-start', gap: 16, textAlign: 'left' }}>
                      {item.icon}
                      <div>
                        <div style={{fontSize:20,fontWeight:700, lineHeight: 1.4, textAlign: 'left'}}>{item.title}</div>
                        <div style={{fontSize:15,fontWeight:400,color:'#94a3b8', lineHeight: 1.4, textAlign: 'left', whiteSpace: 'nowrap'}}>{item.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href="/contact" style={{ textDecoration: 'none', fontSize: 20, fontWeight: 500, color: '#475569', display: 'flex', alignItems: 'center', gap: 4 }}>Contact Us</a>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="/builder" style={{ textDecoration: 'none' }}>
            <Button
              style={{
                fontSize: 20,
                padding: '10px 20px',
                height: 44,
                borderRadius: 8,
                fontWeight: 500,
                lineHeight: 1,
                fontFamily: 'sans-serif',
                background: 'transparent',
                border: '1.5px solid #0f172a',
                color: '#0f172a',
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
  );
}