import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui';
import { ChevronDown, Menu, X } from 'lucide-react';

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const templatesRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (templatesRef.current && !templatesRef.current.contains(e.target as Node) &&
          examplesRef.current && !examplesRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        overflow: 'visible',
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

          {/* Desktop nav links */}
          <div className="navbar-navlinks" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(8px, 2vw, 36px)',
          }}>
            {/* Templates dropdown */}
            <div
              ref={templatesRef}
              style={{ position: 'relative' }}
              onMouseEnter={() => setOpenDropdown('templates')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href="/templates"
                onClick={(e) => { e.preventDefault(); delayNavigation('/templates'); }}
                style={{ textDecoration: 'none', fontSize: 'clamp(13px, 1.5vw, 20px)', fontWeight: 500, color: '#475569', display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}
              >
                Resume Templates <ChevronDown style={{ width: 18, height: 18 }} />
              </a>
              <div
                style={{
                  display: openDropdown === 'templates' ? 'block' : 'none',
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
                  boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                  {dropdowns.templates.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); delayNavigation(item.href); }}
                      style={{ textDecoration: 'none', color: '#0f172a', padding: '14px 10px', fontSize: 24, fontWeight: 700, display: 'flex', alignItems: 'flex-start', gap: 16, textAlign: 'left', borderRadius: 8, transition: 'background 0.15s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#F8FAFC'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
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

            {/* Examples dropdown */}
            <div
              ref={examplesRef}
              style={{ position: 'relative' }}
              onMouseEnter={() => setOpenDropdown('examples')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href="/career-levels"
                onClick={(e) => { e.preventDefault(); delayNavigation('/career-levels'); }}
                style={{ textDecoration: 'none', fontSize: 'clamp(13px, 1.5vw, 20px)', fontWeight: 500, color: '#475569', display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}
              >
                Resume Examples <ChevronDown style={{ width: 18, height: 18 }} />
              </a>
              <div
                style={{
                  display: openDropdown === 'examples' ? 'block' : 'none',
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
                  boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                  {dropdowns.examples.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); delayNavigation(item.href); }}
                      style={{ textDecoration: 'none', color: '#0f172a', padding: '14px 10px', fontSize: 24, fontWeight: 700, display: 'flex', alignItems: 'flex-start', gap: 16, textAlign: 'left', borderRadius: 8, transition: 'background 0.15s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#F8FAFC'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
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
          {/* Desktop action buttons */}
          <div className="navbar-desktop-actions" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(6px, 1vw, 12px)' }}>
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

          {/* Hamburger menu button (mobile) */}
          <button
            className="navbar-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              color: '#0f172a',
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="navbar-mobile-menu"
        style={{
          display: mobileMenuOpen ? 'block' : 'none',
          position: 'fixed',
          top: '100%',
          left: 0,
          right: 0,
          bottom: 0,
          background: '#fff',
          zIndex: 100,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          padding: '24px 20px 40px',
          borderTop: '1px solid #E2E8F0',
          minHeight: 'calc(100vh - 100%)',
        }}
      >
        {/* Resume Templates Section */}
        <div style={{ marginBottom: 24 }}>
          <div
            onClick={() => setMobileDropdown(mobileDropdown === 'templates' ? null : 'templates')}
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
              cursor: 'pointer',
              borderBottom: '1px solid #F1F5F9',
            }}
          >
            Resume Templates
            <ChevronDown size={20} style={{
              transition: 'transform 0.2s ease',
              transform: mobileDropdown === 'templates' ? 'rotate(180deg)' : 'rotate(0deg)',
            }} />
          </div>
          <div style={{
            maxHeight: mobileDropdown === 'templates' ? '800px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease',
          }}>
            {dropdowns.templates.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); delayNavigation(item.href); }}
                style={{
                  textDecoration: 'none',
                  color: '#0f172a',
                  padding: '14px 12px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  borderRadius: 8,
                  marginTop: 4,
                }}
              >
                {item.icon}
                <div>
                  <div style={{fontSize: 16, fontWeight: 600, lineHeight: 1.3}}>{item.title}</div>
                  <div style={{fontSize: 13, color: '#94a3b8', marginTop: 2}}>{item.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Resume Examples Section */}
        <div style={{ marginBottom: 24 }}>
          <div
            onClick={() => setMobileDropdown(mobileDropdown === 'examples' ? null : 'examples')}
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
              cursor: 'pointer',
              borderBottom: '1px solid #F1F5F9',
            }}
          >
            Resume Examples
            <ChevronDown size={20} style={{
              transition: 'transform 0.2s ease',
              transform: mobileDropdown === 'examples' ? 'rotate(180deg)' : 'rotate(0deg)',
            }} />
          </div>
          <div style={{
            maxHeight: mobileDropdown === 'examples' ? '800px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease',
          }}>
            {dropdowns.examples.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); delayNavigation(item.href); }}
                style={{
                  textDecoration: 'none',
                  color: '#0f172a',
                  padding: '14px 12px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  borderRadius: 8,
                  marginTop: 4,
                }}
              >
                {item.icon}
                <div>
                  <div style={{fontSize: 16, fontWeight: 600, lineHeight: 1.3}}>{item.title}</div>
                  <div style={{fontSize: 13, color: '#94a3b8', marginTop: 2}}>{item.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <a
          href="/contact"
          onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); delayNavigation('/contact'); }}
          style={{
            textDecoration: 'none',
            fontSize: 18,
            fontWeight: 600,
            color: '#0f172a',
            display: 'block',
            padding: '12px 0',
            borderBottom: '1px solid #F1F5F9',
          }}
        >
          Contact Us
        </a>

        {/* Mobile CTA buttons */}
        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a
            href="/builder"
            onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); delayNavigation('/builder'); }}
            style={{
              textDecoration: 'none',
              display: 'block',
              width: '100%',
              padding: '16px 0',
              fontSize: 18,
              fontWeight: 600,
              color: '#fff',
              background: '#0f172a',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              textAlign: 'center',
              fontFamily: 'sans-serif',
            }}
          >
            Get Started
          </a>
          <a
            href="/builder"
            onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); delayNavigation('/builder'); }}
            style={{
              textDecoration: 'none',
              display: 'block',
              width: '100%',
              padding: '16px 0',
              fontSize: 18,
              fontWeight: 500,
              color: '#0f172a',
              background: '#fff',
              borderRadius: 8,
              border: '1.5px solid #0f172a',
              cursor: 'pointer',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              opacity: 0.5,
              pointerEvents: 'none',
            }}
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}