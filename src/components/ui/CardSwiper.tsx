 import { useState, useRef } from 'react';
import { getTemplate } from '@/components/templates';
import { createPlaceholderResume } from '@/data/placeholderResume';
import type { Customization, ResumeData } from '@/types/resume';

const customizations: Customization[] = [
  { templateId: 'modern', primaryColor: '#2563EB', accentColor: '#2563EB', fontFamily: 'Inter', fontSize: 15, lineSpacing: 1.65, sectionSpacing: 36 },
  { templateId: 'minimal', primaryColor: '#059669', accentColor: '#059669', fontFamily: 'Inter', fontSize: 14, lineSpacing: 1.5, sectionSpacing: 28 },
  { templateId: 'professional', primaryColor: '#1E40AF', accentColor: '#1E40AF', fontFamily: 'Georgia', fontSize: 15, lineSpacing: 1.7, sectionSpacing: 40 },
  { templateId: 'ats', primaryColor: '#6D28D9', accentColor: '#6D28D9', fontFamily: 'Arial', fontSize: 14, lineSpacing: 1.6, sectionSpacing: 32 },
  { templateId: 'creative', primaryColor: '#DC2626', accentColor: '#DC2626', fontFamily: 'Inter', fontSize: 15, lineSpacing: 1.65, sectionSpacing: 36 },
];

interface CardData {
  resume: ResumeData;
  custom: Customization;
}

function createCardData(custom: Customization): CardData {
  return { resume: createPlaceholderResume(), custom };
}

function generateGroup(index: number): CardData[] {
  const start = (index * 2) % customizations.length;
  return [
    createCardData(customizations[start]),
    createCardData(customizations[(start + 1) % customizations.length]),
    createCardData(customizations[(start + 2) % customizations.length]),
    createCardData(customizations[(start + 3) % customizations.length]),
  ];
}

function CardContent({ data }: { data: CardData }) {
  const Template = getTemplate(data.custom.templateId);
  return (
    <div style={{
      transform: 'scale(0.18)',
      transformOrigin: 'top left',
      width: '555.55%',
    }}>
      <Template resume={data.resume} custom={data.custom} />
    </div>
  );
}

export function CardSwiper() {
  const [activeIndex] = useState(0);
  const [groups] = useState(() => [
    generateGroup(0),
    generateGroup(1),
    generateGroup(2),
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  const getStatus = (index: number) => {
    if (index === activeIndex) return 'active';
    if (index === activeIndex - 1 || (activeIndex === 0 && index === groups.length - 1)) return 'before';
    if (index === activeIndex + 1 || (activeIndex === groups.length - 1 && index === 0)) return 'after';
    return 'unknown';
  };


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div
        ref={containerRef}
        className="card-groups"
        style={{
          position: 'relative',
          width: '30vmin',
          height: '42vmin',
        }}
      >
        {groups.map((group, groupIndex) => {
          const status = getStatus(groupIndex);
          return (
            <div
              key={groupIndex}
              className="card-group"
              data-index={groupIndex}
              data-status={status}
              style={{
                position: 'absolute',
                aspectRatio: '5 / 7',
                width: '30vmin',
                transition: status === 'unknown' ? 'none' : 'transform 400ms ease',
                transform:
                  status === 'unknown' ? 'scale(0)' :
                  status === 'active' ? 'scale(1)' :
                  status === 'after' ? 'translateX(50%) scale(0)' :
                  status === 'before' ? 'translateX(-50%) scale(0)' :
                  status === 'becoming-active-from-after' ? 'translateX(50%) scale(0)' :
                  status === 'becoming-active-from-before' ? 'translateX(-50%) scale(0)' :
                  'scale(0)',
                transitionDelay: status === 'active' ? '300ms' : '0ms',
              }}
            >
              {[0, 1, 2, 3].flatMap((i) => [
                <div
                  key={`little-${i}`}
                  className="little-card card"
                  style={{
                    position: 'absolute',
                    width: '12vmin',
                    aspectRatio: '5 / 7',
                    borderRadius: '1vmin',
                    left: '50%',
                    top: '50%',
                    pointerEvents: 'none',
                    background: '#fff',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    transition: 'transform 800ms cubic-bezier(.05,.43,.25,.95), box-shadow 400ms ease',
                    zIndex: 1,
                  }}
                >
                  <CardContent data={group[i]} />
                </div>,
                <div
                  key={`big-${i}`}
                  className={`big-card card`}
                  style={{
                    position: 'absolute',
                    width: '30vmin',
                    aspectRatio: '5 / 7',
                    borderRadius: '1vmin',
                    background: '#fff',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    transition: 'transform 800ms cubic-bezier(.05,.43,.25,.95), box-shadow 400ms ease',
                  }}
                >
                  <CardContent data={group[i]} />
                </div>,
              ])}
              <div
                className="center-card card"
                style={{
                  position: 'absolute',
                  width: '32vmin',
                  aspectRatio: '5 / 7',
                  borderRadius: '1vmin',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -40%)',
                  pointerEvents: 'none',
                  background: '#fff',
                  border: '2px solid #4f46e5',
                  overflow: 'hidden',
                  zIndex: 10,
                  transition: 'transform 800ms cubic-bezier(.05,.43,.25,.95), box-shadow 400ms ease',
                }}
              >
                <CardContent data={group[0]} />
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .center-card {
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.15) !important;
        }
        .card {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        .little-card:nth-child(1) {
          transform: translate(200%, -160%) rotate(-15deg);
        }
        .little-card:nth-child(3) {
          transform: translate(160%, 170%) rotate(15deg);
        }
        .little-card:nth-child(5) {
          transform: translate(-200%, -170%) rotate(15deg);
        }
        .little-card:nth-child(7) {
          transform: translate(-280%, 140%) rotate(-15deg);
        }
        .big-card:nth-child(2) {
          transform: translate(-75%, 16%) rotate(-24deg);
        }
        .big-card:nth-child(4) {
          transform: translate(-25%, 8%) rotate(-8deg);
        }
        .big-card:nth-child(6) {
          transform: translate(25%, 8%) rotate(8deg);
        }
        .big-card:nth-child(8) {
          transform: translate(75%, 16%) rotate(24deg);
        }
      `}</style>
    </div>
  );
}