import type { ResumeData, Customization } from '@/types/resume';

interface Props {
  resume: ResumeData;
  custom: Customization;
}

export function ModernTemplate({ resume, custom }: Props) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, references, sections } = resume;
  const visibleSections = sections.filter((s) => s.visible);
  const pColor = custom.primaryColor;

  return (
    <div style={{ fontFamily: custom.fontFamily || 'Inter', fontSize: custom.fontSize, lineHeight: custom.lineSpacing, color: '#1e293b' }}>
      {/* Header */}
      <div style={{ background: pColor, color: '#fff', padding: 'clamp(24px, 4vw, 32px) clamp(16px, 4vw, 36px)' }}>
        <h1 style={{ fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>{personal.fullName || 'Your Name'}</h1>
        <p style={{ fontSize: 'clamp(13px, 2vw, 16px)', margin: '4px 0 0', opacity: 0.9 }}>{personal.jobTitle || 'Job Title'}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(8px, 2vw, 12px)', marginTop: 'clamp(8px, 2vw, 12px)', fontSize: 'clamp(11px, 1.5vw, 12px)', opacity: 0.85 }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.website && <span>{personal.website}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
          {personal.github && <span>{personal.github}</span>}
        </div>
      </div>

      <div style={{ padding: `clamp(16px, 3vw, ${custom.sectionSpacing}px) clamp(16px, 4vw, 36px) clamp(16px, 4vw, 36px)` }}>
        {/* Summary */}
        {visibleSections.find((s) => s.id === 'summary') && summary && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 600, color: '#0f172a', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: 'clamp(0.5px, 1vw, 1px)' }}>Summary</h2>
            <p style={{ fontSize: custom.fontSize, lineHeight: custom.lineSpacing, color: '#475569', margin: 0 }}>{summary}</p>
          </div>
        )}

        {/* Experience */}
        {visibleSections.find((s) => s.id === 'experience') && experience.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 600, color: '#0f172a', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 'clamp(0.5px, 1vw, 1px)' }}>Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 'clamp(12px, 2vw, 16px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2px, 1vw, 4px)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                    <div>
                      <strong style={{ fontSize: custom.fontSize + 1 }}>{exp.position}</strong>
                      <span style={{ color: '#64748b' }}> at {exp.company}</span>
                    </div>
                    <span style={{ fontSize: 12, color: '#94a3b8', whiteSpace: 'nowrap' }}>
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  {exp.location && <p style={{ fontSize: 12, color: '#94a3b8', margin: '2px 0 4px' }}>{exp.location}</p>}
                  <p style={{ fontSize: custom.fontSize - 1, lineHeight: custom.lineSpacing, color: '#475569', margin: 0, whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {visibleSections.find((s) => s.id === 'education') && education.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 600, color: '#0f172a', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 'clamp(0.5px, 1vw, 1px)' }}>Education</h2>
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                    <div>
                      <strong>{edu.school}</strong>
                      {edu.location && <span style={{ color: '#94a3b8', fontSize: 12 }}> — {edu.location}</span>}
                    </div>
                    <span style={{ fontSize: 12, color: '#94a3b8' }}>{edu.year}</span>
                  </div>
                  <p style={{ fontSize: custom.fontSize - 1, color: '#64748b', margin: 0 }}>{edu.degree} in {edu.field}</p>
                  {edu.description && <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: 0 }}>{edu.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {visibleSections.find((s) => s.id === 'skills') && skills.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 600, color: '#0f172a', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 'clamp(0.5px, 1vw, 1px)' }}>Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(4px, 2vw, 8px)' }}>
              {skills.map((skill) => (
                <span key={skill.id} style={{ background: '#f1f5f9', color: '#475569', padding: '4px 12px', fontSize: custom.fontSize - 1 }}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {visibleSections.find((s) => s.id === 'projects') && projects.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 600, color: '#0f172a', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 'clamp(0.5px, 1vw, 1px)' }}>Projects</h2>
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                    <strong>{proj.name}</strong>
                    {proj.link && <span style={{ fontSize: 12, color: '#64748b' }}>{proj.link}</span>}
                  </div>
                  {proj.tech && <p style={{ fontSize: 12, color: '#94a3b8', margin: '2px 0' }}>{proj.tech}</p>}
                  <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: 0 }}>{proj.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {visibleSections.find((s) => s.id === 'certifications') && certifications.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 600, color: '#0f172a', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 'clamp(0.5px, 1vw, 1px)' }}>Certifications</h2>
            {certifications.map((cert) => (
              <div key={cert.id} style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 'clamp(4px, 1.5vw, 6px)' }}>
                <span><strong>{cert.name}</strong> — {cert.issuer}</span>
                <span style={{ fontSize: 12, color: '#94a3b8' }}>{cert.date}</span>
              </div>
            ))}
          </div>
        )}

        {/* Languages */}
        {visibleSections.find((s) => s.id === 'languages') && languages.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 600, color: '#0f172a', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 'clamp(0.5px, 1vw, 1px)' }}>Languages</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 1.5vw, 8px)' }}>
              {languages.map((lang) => (
                <span key={lang.id} style={{ fontSize: custom.fontSize - 1 }}><strong>{lang.name}</strong> — {lang.proficiency}</span>
              ))}
            </div>
          </div>
        )}

        {/* References */}
        {visibleSections.find((s) => s.id === 'references') && references.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 600, color: '#0f172a', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 'clamp(0.5px, 1vw, 1px)' }}>References</h2>
            {references.map((ref) => (
              <div key={ref.id} style={{ marginBottom: 'clamp(4px, 1.5vw, 8px)', fontSize: custom.fontSize - 1 }}>
                <strong>{ref.name}</strong>
                {ref.company && <span style={{ color: '#64748b' }}> — {ref.company}</span>}
                <p style={{ fontSize: 12, color: '#94a3b8', margin: 0 }}>{ref.email} {ref.phone && `| ${ref.phone}`}</p>
              </div>
            ))}
          </div>
        )}

        {/* Custom Sections */}
        {resume.customSections.map((cs) => {
          const meta = sections.find((s) => s.id === cs.id);
          if (!meta?.visible) return null;
          return (
            <div key={cs.id} style={{ marginBottom: custom.sectionSpacing }}>
              <h2 style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 600, color: '#0f172a', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 'clamp(0.5px, 1vw, 1px)' }}>{cs.title}</h2>
              {cs.items.map((item) => (
                <div key={item.id} style={{ marginBottom: 'clamp(6px, 2vw, 10px)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                      <strong>{item.title}</strong>
                      {item.date && <span style={{ fontSize: 12, color: '#94a3b8' }}>{item.date}</span>}
                    </div>
                    {item.subtitle && <p style={{ fontSize: 12, color: '#64748b', margin: '2px 0' }}>{item.subtitle}</p>}
                    {item.description && <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: 0 }}>{item.description}</p>}
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
