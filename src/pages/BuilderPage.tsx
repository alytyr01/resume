import { useState, useEffect } from 'react';
import { useUIStore } from '@/store/uiStore';
import { SectionPanel } from '@/components/builder/SectionPanel';
import { ResumePreview } from '@/components/preview/ResumePreview';
import { SettingsPanel } from '@/components/settings/SettingsPanel';
import { FileText, Edit3, Settings, Maximize2, Minimize2, ArrowLeft } from 'lucide-react';

export function BuilderPage() {
  const isFullscreen = useUIStore((s) => s.isPreviewFullscreen);
  const toggleFullscreen = useUIStore((s) => s.togglePreviewFullscreen);
  const setSettingsOpen = useUIStore((s) => s.setSettingsOpen);
  const activeMobileView = useUIStore((s) => s.activeMobileView);
  const setActiveMobileView = useUIStore((s) => s.setActiveMobileView);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;

  const leftPanelWidth = isFullscreen ? '0%' : isMobile ? '100%' : '45%';
  const rightPanelWidth = isFullscreen ? '100%' : isMobile ? '100%' : '55%';

  const showLeft = !isFullscreen && (isMobile ? activeMobileView === 'form' : true);
  const showRight = isMobile ? activeMobileView === 'preview' : true;

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#F8F9FA',
      color: '#111827',
      fontFamily: 'sans-serif',
    }}>
      {/* Top bar */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 24px',
        background: '#fff',
        borderBottom: '1px solid #E2E8F0',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 17,
              fontWeight: 700,
              color: '#0f172a',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={18} color="#64748b" />
            <FileText size={18} color="#64748b" />
            <span>Resume Builder</span>
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Mobile view toggle */}
          {isMobile && (
            <div style={{
              display: 'flex',
              borderRadius: 8,
              border: '1px solid #E2E8F0',
              overflow: 'hidden',
            }}>
              <button
                onClick={() => setActiveMobileView('form')}
                style={{
                  padding: '6px 12px',
                  fontSize: 13,
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'sans-serif',
                  background: activeMobileView === 'form' ? '#0f172a' : '#fff',
                  color: activeMobileView === 'form' ? '#fff' : '#64748b',
                }}
              >
                <Edit3 size={15} />
              </button>
              <button
                onClick={() => setActiveMobileView('preview')}
                style={{
                  padding: '6px 12px',
                  fontSize: 13,
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'sans-serif',
                  background: activeMobileView === 'preview' ? '#0f172a' : '#fff',
                  color: activeMobileView === 'preview' ? '#fff' : '#64748b',
                }}
              >
                <FileText size={15} />
              </button>
            </div>
          )}
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Split view' : 'Full preview'}
            style={{
              padding: '6px',
              borderRadius: 8,
              border: '1px solid #E2E8F0',
              background: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748b',
            }}
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
          <button
            onClick={() => setSettingsOpen(true)}
            title="Settings"
            style={{
              padding: '6px',
              borderRadius: 8,
              border: '1px solid #E2E8F0',
              background: '#0f172a',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
            }}
          >
            <Settings size={16} />
          </button>
        </div>
      </header>

      {/* Main content */}
      <div style={{
        display: 'flex',
        flex: 1,
        overflow: 'hidden',
      }}>
        {/* Left panel - Form */}
        {showLeft && (
          <div style={{
            width: leftPanelWidth,
            overflowY: 'auto',
            borderRight: isFullscreen ? 'none' : '1px solid #E2E8F0',
            background: '#fff',
            flexShrink: 0,
          }}>
            <div style={{ padding: '20px 24px' }}>
              <SectionPanel />
            </div>
          </div>
        )}

        {/* Right panel - Preview */}
        {showRight && (
          <div style={{
            width: rightPanelWidth,
            overflowY: 'auto',
            background: '#F1F5F9',
            flex: 1,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '24px 16px',
            }}>
              <div style={{
                transform: 'scale(0.6)',
                transformOrigin: 'top center',
              }}
              className="sm:scale-[0.7] lg:scale-[0.8]"
              >
                <ResumePreview />
              </div>
            </div>
          </div>
        )}
      </div>

      <SettingsPanel />
    </div>
  );
}