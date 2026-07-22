import type { ResumeData, Customization } from '@/types/resume';

interface Props { resume: ResumeData; custom: Customization; }

export function ProfessionalTemplate({ resume, custom }: Props) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, references, sections } = resume;
  const visibleSections = sections.filter((s) => s.visible);
  const pColor = custom.primaryColor;

  return (
    <div style={{ fontFamily: custom.fontFamily || 'Inter', fontSize: custom.fontSize, lineHeight: custom.lineSpacing, color: '#1e293b' }}>
      {/* Two-column header */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: 'clamp(20px, 4vw, 32px) clamp(16px, 4vw, 36px)', borderBottom: `3px solid ${pColor}`, marginBottom: custom.sectionSpacing, gap: 'clamp(8px, 2vw, 12px)' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: 700, margin: 0, color: '#0f172a' }}>{personal.fullName || 'Your Name'}</h1>
          <p style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: '#64748b', margin: 'clamp(2px, 1vw, 4px) 0 0' }}>{personal.jobTitle || 'Job Title'}</p>
        </div>
        <div style={{ textAlign: 'left', fontSize: 'clamp(11px, 1.5vw, 12px)', color: '#64748b', lineHeight: 1.8, display: 'flex', flexWrap: 'wrap', gap: 'clamp(4px, 1.5vw, 12px)' }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.website && <span>{personal.website}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
          {personal.github && <span>{personal.github}</span>}
        </div>
      </div>

      <div style={{ padding: `0 clamp(16px, 4vw, 36px) clamp(16px, 4vw, 36px)` }}>
        {/* Summary */}
        {visibleSections.find((s) => s.id === 'summary') && summary && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: pColor, margin: '0 0 8px', borderBottom: `1px solid ${pColor}20`, paddingBottom: 'clamp(2px, 1vw, 4px)' }}>Professional Summary</h2>
            <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: 0 }}>{summary}</p>
          </div>
        )}

        {/* Experience */}
        {visibleSections.find((s) => s.id === 'experience') && experience.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: pColor, margin: '0 0 10px', borderBottom: `1px solid ${pColor}20`, paddingBottom: 'clamp(2px, 1vw, 4px)' }}>Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 'clamp(10px, 2vw, 14px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2px, 1vw, 4px)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                    <div>
                      <strong>{exp.position}</strong><span style={{ color: '#64748b' }}> | {exp.company}</span>
                    </div>
                    <span style={{ fontSize: 11, color: '#94a3b8', whiteSpace: 'nowrap' }}>{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  {exp.location && <p style={{ fontSize: 11, color: '#94a3b8', margin: '2px 0 4px' }}>{exp.location}</p>}
                  <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: 0, whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {visibleSections.find((s) => s.id === 'education') && education.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: pColor, margin: '0 0 10px', borderBottom: `1px solid ${pColor}20`, paddingBottom: 'clamp(2px, 1vw, 4px)' }}>Education</h2>
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

        {/* Skills */}
        {visibleSections.find((s) => s.id === 'skills') && skills.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: pColor, margin: '0 0 8px', borderBottom: `1px solid ${pColor}20`, paddingBottom: 'clamp(2px, 1vw, 4px)' }}>Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(4px, 2vw, 6px)' }}>
              {skills.map((s) => (
                <span key={s.id} style={{ background: '#f1f5f9', padding: '3px 10px', borderRadius: 4, fontSize: custom.fontSize - 1, color: '#334155' }}>{s.name}</span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {visibleSections.find((s) => s.id === 'projects') && projects.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: pColor, margin: '0 0 8px', borderBottom: `1px solid ${pColor}20`, paddingBottom: 'clamp(2px, 1vw, 4px)' }}>Projects</h2>
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

        {/* Certifications */}
        {visibleSections.find((s) => s.id === 'certifications') && certifications.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: pColor, margin: '0 0 8px', borderBottom: `1px solid ${pColor}20`, paddingBottom: 'clamp(2px, 1vw, 4px)' }}>Certifications</h2>
            {certifications.map((cert) => (
              <div key={cert.id} style={{ fontSize: custom.fontSize - 1, marginBottom: 'clamp(2px, 1.5vw, 4px)' }}>{cert.name} — {cert.issuer} ({cert.date})</div>
            ))}
          </div>
        )}

        {/* Languages */}
        {visibleSections.find((s) => s.id === 'languages') && languages.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: pColor, margin: '0 0 8px', borderBottom: `1px solid ${pColor}20`, paddingBottom: 'clamp(2px, 1vw, 4px)' }}>Languages</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2px, 1.5vw, 4px)' }}>
              {languages.map((l) => <span key={l.id} style={{ fontSize: custom.fontSize - 1 }}>{l.name} — {l.proficiency}</span>)}
            </div>
          </div>
        )}

        {/* References */}
        {visibleSections.find((s) => s.id === 'references') && references.length > 0 && (
          <div>
            <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: pColor, margin: '0 0 8px', borderBottom: `1px solid ${pColor}20`, paddingBottom: 'clamp(2px, 1vw, 4px)' }}>References</h2>
            {references.map((ref) => (
              <div key={ref.id} style={{ fontSize: custom.fontSize - 1, marginBottom: 'clamp(2px, 1.5vw, 4px)' }}>{ref.name}{ref.company ? ` — ${ref.company}` : ''}</div>
            ))}
          </div>
        )}

        {/* Custom Sections */}
        {resume.customSections.map((cs) => {
          const meta = sections.find((s) => s.id === cs.id);
          if (!meta?.visible) return null;
          return (
            <div key={cs.id} style={{ marginBottom: custom.sectionSpacing }}>
              <h2 style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, color: pColor, margin: '0 0 8px', borderBottom: `1px solid ${pColor}20`, paddingBottom: 'clamp(2px, 1vw, 4px)' }}>{cs.title}</h2>
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
