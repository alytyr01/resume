import type { ResumeData, Customization } from '@/types/resume';

interface Props { resume: ResumeData; custom: Customization; }

export function CreativeTemplate({ resume, custom }: Props) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, sections } = resume;
  const visibleSections = sections.filter((s) => s.visible);
  const pColor = custom.primaryColor;

  return (
    <div style={{ fontFamily: custom.fontFamily || 'Inter', fontSize: custom.fontSize, lineHeight: custom.lineSpacing, color: '#1e293b', display: 'flex', flexDirection: 'column', minHeight: 1123 }}>
      {/* Left sidebar */}
      <div style={{ width: '100%', background: `linear-gradient(180deg, ${pColor}, ${pColor}dd)`, color: '#fff', padding: 'clamp(24px, 4vw, 32px) clamp(16px, 4vw, 24px)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(16px, 3vw, 24px)' }}>
          {personal.photo ? (
            <img src={personal.photo} alt="Profile" style={{ width: 'clamp(60px, 10vw, 80px)', height: 'clamp(60px, 10vw, 80px)', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px', display: 'block', border: '2px solid rgba(255,255,255,0.3)' }} />
          ) : (
            <div style={{ width: 'clamp(60px, 10vw, 80px)', height: 'clamp(60px, 10vw, 80px)', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700 }}>
              {personal.fullName ? personal.fullName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'YN'}
            </div>
          )}
          <h1 style={{ fontSize: 'clamp(18px, 3vw, 20px)', fontWeight: 700, margin: 0 }}>{personal.fullName || 'Your Name'}</h1>
          <p style={{ fontSize: 'clamp(11px, 1.8vw, 12px)', opacity: 0.85, margin: 'clamp(2px, 1vw, 4px) 0 0' }}>{personal.jobTitle || 'Job Title'}</p>
        </div>

        <div style={{ fontSize: 'clamp(11px, 1.5vw, 12px)', lineHeight: 1.8, marginBottom: 'clamp(16px, 3vw, 20px)', display: 'flex', flexWrap: 'wrap', gap: 'clamp(4px, 1.5vw, 8px)' }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.website && <span>{personal.website}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
          {personal.github && <span>{personal.github}</span>}
        </div>

        {/* Skills in sidebar */}
        {visibleSections.find((s) => s.id === 'skills') && skills.length > 0 && (
          <div style={{ marginBottom: 'clamp(16px, 3vw, 20px)' }}>
            <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 12px)', fontWeight: 600, margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1.5px)', opacity: 0.8, color: '#94a3b8' }}>Skills</h2>
            {skills.map((s) => (
              <div key={s.id} style={{ marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'clamp(10px, 1.5vw, 11px)', marginBottom: 'clamp(2px, 1vw, 2px)' }}>
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div style={{ height: 'clamp(3px, 1vw, 4px)', background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}>
                  <div style={{ width: `${s.level}%`, height: '100%', background: '#fff', borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Languages in sidebar */}
        {visibleSections.find((s) => s.id === 'languages') && languages.length > 0 && (
          <div style={{ marginBottom: 'clamp(16px, 3vw, 20px)' }}>
            <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 12px)', fontWeight: 600, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1.5px)', opacity: 0.8, color: '#94a3b8' }}>Languages</h2>
            {languages.map((l) => (
              <div key={l.id} style={{ fontSize: 'clamp(10px, 1.5vw, 11px)', marginBottom: 'clamp(2px, 1vw, 4px)' }}>{l.name} — {l.proficiency}</div>
            ))}
          </div>
        )}

        {/* Certifications in sidebar */}
        {visibleSections.find((s) => s.id === 'certifications') && certifications.length > 0 && (
          <div>
            <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 12px)', fontWeight: 600, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1.5px)', opacity: 0.8, color: '#94a3b8' }}>Certifications</h2>
            {certifications.map((cert) => (
              <div key={cert.id} style={{ fontSize: 'clamp(10px, 1.5vw, 11px)', marginBottom: 'clamp(2px, 1vw, 4px)' }}>{cert.name}</div>
            ))}
          </div>
        )}
      </div>

      {/* Right content */}
      <div style={{ flex: 1, padding: 'clamp(20px, 4vw, 32px) clamp(16px, 4vw, 28px)' }}>
        {visibleSections.find((s) => s.id === 'summary') && summary && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: '#94a3b8', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1px)' }}>About</h2>
            <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: 0, lineHeight: custom.lineSpacing }}>{summary}</p>
          </div>
        )}

        {visibleSections.find((s) => s.id === 'experience') && experience.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: '#94a3b8', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1px)' }}>Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 'clamp(10px, 2vw, 14px)', borderLeft: `2px solid ${pColor}30`, paddingLeft: 'clamp(8px, 2vw, 12px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2px, 1vw, 4px)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                    <div>
                      <strong style={{ fontSize: custom.fontSize }}>{exp.position}</strong>
                    </div>
                    <span style={{ fontSize: 11, color: '#94a3b8', whiteSpace: 'nowrap' }}>{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  <p style={{ fontSize: 12, color: pColor, margin: 0 }}>{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
                  <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: 0, whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {visibleSections.find((s) => s.id === 'education') && education.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: '#94a3b8', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1px)' }}>Education</h2>
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                    <div>
                      <strong>{edu.school}</strong>
                    </div>
                    <span style={{ fontSize: 11, color: '#94a3b8' }}>{edu.year}</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#64748b', margin: 0 }}>{edu.degree} in {edu.field}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {visibleSections.find((s) => s.id === 'projects') && projects.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: '#94a3b8', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1px)' }}>Projects</h2>
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                    <div>
                      <strong>{proj.name}</strong>
                      {proj.tech && <span style={{ fontSize: 12, color: '#94a3b8' }}> — {proj.tech}</span>}
                    </div>
                  </div>
                  <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: '2px 0 0' }}>{proj.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {resume.customSections.map((cs) => {
          const meta = sections.find((s) => s.id === cs.id);
          if (!meta?.visible) return null;
          return (
            <div key={cs.id} style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: '#94a3b8', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1px)' }}>{cs.title}</h2>
              {cs.items.map((item) => (
                <div key={item.id} style={{ marginBottom: 'clamp(4px, 1.5vw, 6px)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                      <div>
                        <strong>{item.title}</strong>
                        {item.subtitle && <span style={{ color: '#64748b' }}> — {item.subtitle}</span>}
                      </div>
                    </div>
                    {item.description && <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: '2px 0 0' }}>{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
