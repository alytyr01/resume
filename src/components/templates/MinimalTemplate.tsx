import type { ResumeData, Customization } from '@/types/resume';

interface Props { resume: ResumeData; custom: Customization; }

export function MinimalTemplate({ resume, custom }: Props) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, references, sections } = resume;
  const visibleSections = sections.filter((s) => s.visible);
  const pColor = custom.primaryColor;

  return (
    <div style={{ fontFamily: custom.fontFamily || 'Inter', fontSize: custom.fontSize, lineHeight: custom.lineSpacing, color: '#1e293b', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 48px)' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(16px, 3vw, 24px)', borderBottom: `1px solid ${pColor}30`, paddingBottom: 'clamp(16px, 3vw, 24px)' }}>
        <h1 style={{ fontSize: 'clamp(20px, 4vw, 26px)', fontWeight: 300, margin: 0, letterSpacing: 'clamp(1px, 2vw, 2px)', textTransform: 'uppercase', color: '#0f172a' }}>{personal.fullName || 'Your Name'}</h1>
        <p style={{ fontSize: 'clamp(12px, 1.8vw, 14px)', color: '#64748b', margin: 'clamp(4px, 1vw, 6px) 0 clamp(6px, 1.5vw, 10px)', letterSpacing: 'clamp(0.5px, 1.5vw, 1px)' }}>{personal.jobTitle || 'Job Title'}</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'clamp(2px, 1vw, 4px) clamp(8px, 2vw, 16px)', fontSize: 'clamp(10px, 1.5vw, 11px)', color: '#94a3b8' }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.website && <span>{personal.website}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
          {personal.github && <span>{personal.github}</span>}
        </div>
      </div>

      {/* Summary */}
      {visibleSections.find((s) => s.id === 'summary') && summary && (
        <div style={{ marginBottom: custom.sectionSpacing }}>
          <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: 0, fontStyle: 'italic' }}>{summary}</p>
        </div>
      )}

      {/* Experience */}
      {visibleSections.find((s) => s.id === 'experience') && experience.length > 0 && (
        <div style={{ marginBottom: custom.sectionSpacing }}>
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1.5px)' }}>Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: 'clamp(10px, 2vw, 14px)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2px, 1vw, 4px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                  <div>
                    <strong style={{ fontSize: custom.fontSize }}>{exp.position}</strong>
                    <span style={{ color: '#64748b' }}> at {exp.company}</span>
                  </div>
                  <span style={{ fontSize: 11, color: '#94a3b8', whiteSpace: 'nowrap' }}>{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                {exp.location && <p style={{ fontSize: 12, color: '#64748b', margin: '2px 0 4px' }}>{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>}
                <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: 0, whiteSpace: 'pre-wrap' }}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {visibleSections.find((s) => s.id === 'education') && education.length > 0 && (
        <div style={{ marginBottom: custom.sectionSpacing }}>
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1.5px)' }}>Education</h2>
          {education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                  <div>
                    <strong>{edu.school}</strong>
                    {edu.location && <span style={{ color: '#94a3b8', fontSize: 11 }}> — {edu.location}</span>}
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
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1.5px)' }}>Skills</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2px, 1.5vw, 4px)' }}>
            {skills.map((s) => <span key={s.id} style={{ fontSize: custom.fontSize - 1, color: '#475569' }}>{s.name}</span>)}
          </div>
        </div>
      )}

      {/* Projects */}
      {visibleSections.find((s) => s.id === 'projects') && projects.length > 0 && (
        <div style={{ marginBottom: custom.sectionSpacing }}>
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1.5px)' }}>Projects</h2>
          {projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                  <strong>{proj.name}</strong>
                  {proj.tech && <span style={{ fontSize: 12, color: '#94a3b8' }}> — {proj.tech}</span>}
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
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1.5px)' }}>Certifications</h2>
          {certifications.map((cert) => (
            <div key={cert.id} style={{ fontSize: custom.fontSize - 1, marginBottom: 4 }}>{cert.name} — {cert.issuer} <span style={{ color: '#94a3b8' }}>({cert.date})</span></div>
          ))}
        </div>
      )}

      {/* Languages */}
      {visibleSections.find((s) => s.id === 'languages') && languages.length > 0 && (
        <div style={{ marginBottom: custom.sectionSpacing }}>
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1.5px)' }}>Languages</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2px, 1.5vw, 4px)' }}>
            {languages.map((l) => <span key={l.id} style={{ fontSize: custom.fontSize - 1 }}>{l.name} — {l.proficiency}</span>)}
          </div>
        </div>
      )}

      {/* References */}
      {visibleSections.find((s) => s.id === 'references') && references.length > 0 && (
        <div>
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1.5px)' }}>References</h2>
          {references.map((ref) => (
            <div key={ref.id} style={{ fontSize: custom.fontSize - 1, marginBottom: 4 }}>{ref.name}{ref.company ? ` — ${ref.company}` : ''}</div>
          ))}
        </div>
      )}

      {/* Custom Sections */}
      {resume.customSections.map((cs) => {
        const meta = sections.find((s) => s.id === cs.id);
        if (!meta?.visible) return null;
        return (
          <div key={cs.id} style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 'clamp(1px, 2vw, 1.5px)' }}>{cs.title}</h2>
            {cs.items.map((item) => (
              <div key={item.id} style={{ marginBottom: 'clamp(4px, 1.5vw, 6px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                    <strong>{item.title}</strong>
                    {item.subtitle && <span style={{ color: '#64748b' }}> — {item.subtitle}</span>}
                  </div>
                  {item.description && <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: '2px 0 0' }}>{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
