import type { ResumeData, Customization } from '@/types/resume';

interface Props { resume: ResumeData; custom: Customization; }

export function ATSTemplate({ resume, custom }: Props) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, references, sections } = resume;
  const visibleSections = sections.filter((s) => s.visible);
  const pColor = custom.primaryColor;

  const lineStyle = { border: 'none', borderTop: `1px solid ${pColor}40`, margin: '8px 0' };

  return (
    <div style={{ fontFamily: custom.fontFamily || 'Arial', fontSize: custom.fontSize, lineHeight: custom.lineSpacing, color: '#1e293b', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 48px)' }}>
      <h1 style={{ fontSize: 'clamp(20px, 4vw, 22px)', fontWeight: 700, margin: 0, color: '#0f172a' }}>{personal.fullName || 'Your Name'}</h1>
      <p style={{ fontSize: 'clamp(12px, 1.8vw, 13px)', color: '#475569', margin: 'clamp(2px, 1vw, 4px) 0 clamp(4px, 1.5vw, 6px)' }}>{personal.jobTitle || 'Job Title'}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(2px, 1vw, 2px) clamp(8px, 1.5vw, 12px)', fontSize: 'clamp(10px, 1.2vw, 11px)', color: '#64748b' }}>
        {[personal.email, personal.phone, personal.location, personal.website, personal.linkedin, personal.github].filter(Boolean).map((item, i, arr) => (
          <span key={i}>{item}{i < arr.length - 1 ? ' |' : ''}</span>
        ))}
      </div>
      <hr style={{ ...lineStyle, margin: 'clamp(6px, 1.5vw, 8px) 0' }} />

      {visibleSections.find((s) => s.id === 'summary') && summary && (
        <div style={{ marginBottom: custom.sectionSpacing }}>
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 6px', textTransform: 'uppercase' }}>Summary</h2>
          <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: 0 }}>{summary}</p>
        </div>
      )}

      {visibleSections.find((s) => s.id === 'experience') && experience.length > 0 && (
        <div style={{ marginBottom: custom.sectionSpacing }}>
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 8px', textTransform: 'uppercase' }}>Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: 'clamp(10px, 2vw, 12px)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2px, 1vw, 4px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                  <div>
                    <strong>{exp.position}</strong> <span style={{ color: '#64748b' }}>&mdash; {exp.company}</span>
                  </div>
                  <span style={{ fontSize: 11, color: '#94a3b8', whiteSpace: 'nowrap' }}>{exp.startDate} &mdash; {exp.current ? 'Present' : exp.endDate}{exp.location ? ` | ${exp.location}` : ''}</span>
                </div>
                <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: '4px 0 0', whiteSpace: 'pre-wrap' }}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {visibleSections.find((s) => s.id === 'education') && education.length > 0 && (
        <div style={{ marginBottom: custom.sectionSpacing }}>
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 6px', textTransform: 'uppercase' }}>Education</h2>
          {education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: 4 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                  <span><strong>{edu.school}</strong> &mdash; {edu.degree} in {edu.field}</span>
                  <span style={{ fontSize: 11, color: '#94a3b8' }}>({edu.year})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {visibleSections.find((s) => s.id === 'skills') && skills.length > 0 && (
        <div style={{ marginBottom: custom.sectionSpacing }}>
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 6px', textTransform: 'uppercase' }}>Skills</h2>
          <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: 0 }}>{skills.map((s) => s.name).join(', ')}</p>
        </div>
      )}

      {visibleSections.find((s) => s.id === 'projects') && projects.length > 0 && (
        <div style={{ marginBottom: custom.sectionSpacing }}>
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 6px', textTransform: 'uppercase' }}>Projects</h2>
          {projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                  <span><strong>{proj.name}</strong>{proj.tech ? ` \u2014 ${proj.tech}` : ''}</span>
                </div>
                <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: '2px 0 0' }}>{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {visibleSections.find((s) => s.id === 'certifications') && certifications.length > 0 && (
        <div style={{ marginBottom: custom.sectionSpacing }}>
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 6px', textTransform: 'uppercase' }}>Certifications</h2>
          {certifications.map((cert) => (
            <div key={cert.id} style={{ fontSize: custom.fontSize - 1, marginBottom: 'clamp(2px, 1.5vw, 4px)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                  <span>{cert.name} &mdash; {cert.issuer}</span>
                  <span style={{ color: '#94a3b8' }}>({cert.date})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {visibleSections.find((s) => s.id === 'languages') && languages.length > 0 && (
        <div style={{ marginBottom: custom.sectionSpacing }}>
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 6px', textTransform: 'uppercase' }}>Languages</h2>
          <div style={{ fontSize: custom.fontSize - 1 }}>{languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}</div>
        </div>
      )}

      {visibleSections.find((s) => s.id === 'references') && references.length > 0 && (
        <div>
          <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 6px', textTransform: 'uppercase' }}>References</h2>
          <div style={{ fontSize: custom.fontSize - 1 }}>Available upon request</div>
        </div>
      )}

      {resume.customSections.map((cs) => {
        const meta = sections.find((s) => s.id === cs.id);
        if (!meta?.visible) return null;
        return (
          <div key={cs.id} style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 'clamp(11px, 1.8vw, 13px)', fontWeight: 600, color: pColor, margin: '0 0 6px', textTransform: 'uppercase' }}>{cs.title}</h2>
            {cs.items.map((item) => (
              <div key={item.id} style={{ fontSize: custom.fontSize - 1, marginBottom: 'clamp(2px, 1.5vw, 4px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px' }}>
                    <span>{item.title}{item.subtitle ? ` \u2014 ${item.subtitle}` : ''}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
