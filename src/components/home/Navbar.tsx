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

const delayNavigation = (href: string) => {
  setTimeout(() => {
    window.location.href = href;
  }, 300);
};

export function Navbar({ dropdowns }: NavbarProps) {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.8)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #F3F4F6',
    }}>
      <div className="navbar-inner" style={{
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '100%',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 48px)' }}>
          <a href="/" onClick={(e) => { e.preventDefault(); delayNavigation('/'); }} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/logo.png"
              alt="CVora"
              className="navbar-logo"
              style={{ width: 64, height: 64, borderRadius: 16, objectFit: 'contain' }}
            />
          </a>
          <div className="navbar-divider" style={{ width: 1, height: 28, background: '#E2E8F0' }} />
          <div className="navbar-navlinks" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 36px)' }}>
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => document.getElementById('templates-dropdown')?.style && (document.getElementById('templates-dropdown')!.style.display = 'block')}
              onMouseLeave={() => document.getElementById('templates-dropdown')?.style && (document.getElementById('templates-dropdown')!.style.display = 'none')}
            >
              <a href="/templates" onClick={(e) => { e.preventDefault(); delayNavigation('/templates'); }} style={{ textDecoration: 'none', fontSize: 'clamp(13px, 1.5vw, 20px)', fontWeight: 500, color: '#475569', display: 'flex', alignItems: 'center', gap: 4 }}>
                Resume Templates <ChevronDown style={{ width: 18, height: 18 }} />
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
                    <a key={item.title} href={item.href} onClick={(e) => { e.preventDefault(); delayNavigation(item.href); }} style={{ textDecoration: 'none', color: '#0f172a', padding: '14px 10px', fontSize: 24, fontWeight: 700, display: 'flex', alignItems: 'flex-start', gap: 16, textAlign: 'left' }}>
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
              <a href="/career-levels" onClick={(e) => { e.preventDefault(); delayNavigation('/career-levels'); }} style={{ textDecoration: 'none', fontSize: 'clamp(13px, 1.5vw, 20px)', fontWeight: 500, color: '#475569', display: 'flex', alignItems: 'center', gap: 4 }}>
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
                    <a key={item.title} href={item.href} onClick={(e) => { e.preventDefault(); delayNavigation(item.href); }} style={{ textDecoration: 'none', color: '#0f172a', padding: '14px 10px', fontSize: 24, fontWeight: 700, display: 'flex', alignItems: 'flex-start', gap: 16, textAlign: 'left' }}>
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
            <a href="/contact" onClick={(e) => { e.preventDefault(); delayNavigation('/contact'); }} style={{ textDecoration: 'none', fontSize: 'clamp(13px, 1.5vw, 20px)', fontWeight: 500, color: '#475569', display: 'flex', alignItems: 'center', gap: 4 }}>Contact Us</a>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(6px, 1vw, 12px)' }}>
          <a href="/builder" onClick={(e) => { e.preventDefault(); delayNavigation('/builder'); }} style={{ textDecoration: 'none' }}>
            <Button
              className="navbar-cta-btn"
              style={{
                fontSize: 'clamp(13px, 1.5vw, 20px)',
                padding: '8px 14px',
                height: 'clamp(32px, 4vw, 44px)',
                borderRadius: 8,
                fontWeight: 600,
                lineHeight: 1,
                fontFamily: 'sans-serif',
                background: '#0f172a',
                border: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                whiteSpace: 'nowrap',
              }}
            >
              Get Started
            </Button>
          </a>
          <a href="/builder" onClick={(e) => { e.preventDefault(); delayNavigation('/builder'); }} className="navbar-cta-btn-signin" style={{ textDecoration: 'none', opacity: 0.5, pointerEvents: 'none' }}>
            <Button
              variant="outline"
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              style={{
                fontSize: 'clamp(13px, 1.5vw, 20px)',
                padding: '8px 14px',
                height: 'clamp(32px, 4vw, 44px)',
                borderRadius: 8,
                fontWeight: 500,
                lineHeight: 1,
                fontFamily: 'sans-serif',
                background: 'transparent',
                border: '1.5px solid #0f172a',
                color: '#0f172a',
                whiteSpace: 'nowrap',
              }}
            >
              Sign In
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}