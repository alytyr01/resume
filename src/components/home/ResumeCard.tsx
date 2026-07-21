import { useState } from 'react';

interface ResumeCardProps {
  templateId: string;
  width: number;
  height: number;
}

export function ResumeCard({ templateId, width, height }: ResumeCardProps) {
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

  const imageSrc = templateId === 'creative' ? '/images/creative-resume.webp' : null;

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
      {imageSrc && (
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
      )}


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