import type { ResumeData, Customization } from '@/types/resume';

interface Props { resume: ResumeData; custom: Customization; }

export function CreativeTemplate({ resume, custom }: Props) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, sections } = resume;
  const visibleSections = sections.filter((s) => s.visible);
  const pColor = custom.primaryColor;

  return (
    <div style={{ fontFamily: custom.fontFamily || 'Inter', fontSize: custom.fontSize, lineHeight: custom.lineSpacing, color: '#1e293b', display: 'flex', minHeight: 1123 }}>
      {/* Left sidebar */}
      <div style={{ width: '35%', background: `linear-gradient(180deg, ${pColor}, ${pColor}dd)`, color: '#fff', padding: '32px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          {personal.photo ? (
            <img src={personal.photo} alt="Profile" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px', display: 'block', border: '2px solid rgba(255,255,255,0.3)' }} />
          ) : (
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 700 }}>
              {personal.fullName ? personal.fullName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'YN'}
            </div>
          )}
          <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{personal.fullName || 'Your Name'}</h1>
          <p style={{ fontSize: 12, opacity: 0.85, margin: '4px 0 0' }}>{personal.jobTitle || 'Job Title'}</p>
        </div>

        <div style={{ fontSize: 11, lineHeight: 2, marginBottom: 20 }}>
          {personal.email && <div>{personal.email}</div>}
          {personal.phone && <div>{personal.phone}</div>}
          {personal.location && <div>{personal.location}</div>}
          {personal.website && <div>{personal.website}</div>}
          {personal.linkedin && <div>{personal.linkedin}</div>}
          {personal.github && <div>{personal.github}</div>}
        </div>

        {/* Skills in sidebar */}
        {visibleSections.find((s) => s.id === 'skills') && skills.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: 12, fontWeight: 600, margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 1.5, opacity: 0.8, color: '#94a3b8' }}>Skills</h2>
            {skills.map((s) => (
              <div key={s.id} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 2 }}>
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div style={{ height: 4, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}>
                  <div style={{ width: `${s.level}%`, height: '100%', background: '#fff', borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Languages in sidebar */}
        {visibleSections.find((s) => s.id === 'languages') && languages.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: 12, fontWeight: 600, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: 1.5, opacity: 0.8, color: '#94a3b8' }}>Languages</h2>
            {languages.map((l) => (
              <div key={l.id} style={{ fontSize: 11, marginBottom: 4 }}>{l.name} — {l.proficiency}</div>
            ))}
          </div>
        )}

        {/* Certifications in sidebar */}
        {visibleSections.find((s) => s.id === 'certifications') && certifications.length > 0 && (
          <div>
            <h2 style={{ fontSize: 12, fontWeight: 600, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: 1.5, opacity: 0.8, color: '#94a3b8' }}>Certifications</h2>
            {certifications.map((cert) => (
              <div key={cert.id} style={{ fontSize: 11, marginBottom: 4 }}>{cert.name}</div>
            ))}
          </div>
        )}
      </div>

      {/* Right content */}
      <div style={{ flex: 1, padding: '32px 28px' }}>
        {visibleSections.find((s) => s.id === 'summary') && summary && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: '#94a3b8', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: 1 }}>About</h2>
            <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: 0, lineHeight: custom.lineSpacing }}>{summary}</p>
          </div>
        )}

        {visibleSections.find((s) => s.id === 'experience') && experience.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: '#94a3b8', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 1 }}>Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 14, borderLeft: `2px solid ${pColor}30`, paddingLeft: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: custom.fontSize }}>{exp.position}</strong>
                  <span style={{ fontSize: 11, color: '#94a3b8' }}>{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <p style={{ fontSize: 12, color: pColor, margin: '2px 0 4px' }}>{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
                <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: 0, whiteSpace: 'pre-wrap' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {visibleSections.find((s) => s.id === 'education') && education.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: '#94a3b8', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 1 }}>Education</h2>
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong>{edu.school}</strong>
                  <span style={{ fontSize: 11, color: '#94a3b8' }}>{edu.year}</span>
                </div>
                <p style={{ fontSize: 12, color: '#64748b', margin: 0 }}>{edu.degree} in {edu.field}</p>
              </div>
            ))}
          </div>
        )}

        {visibleSections.find((s) => s.id === 'projects') && projects.length > 0 && (
          <div style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: '#94a3b8', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 1 }}>Projects</h2>
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: 8 }}>
                <strong>{proj.name}</strong>
                {proj.tech && <span style={{ fontSize: 12, color: '#94a3b8' }}> — {proj.tech}</span>}
                <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: '2px 0 0' }}>{proj.description}</p>
              </div>
            ))}
          </div>
        )}

        {resume.customSections.map((cs) => {
          const meta = sections.find((s) => s.id === cs.id);
          if (!meta?.visible) return null;
          return (
            <div key={cs.id} style={{ marginBottom: custom.sectionSpacing }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: '#94a3b8', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: 1 }}>{cs.title}</h2>
              {cs.items.map((item) => (
                <div key={item.id} style={{ marginBottom: 6 }}>
                  <strong>{item.title}</strong>
                  {item.subtitle && <span style={{ color: '#64748b' }}> — {item.subtitle}</span>}
                  {item.description && <p style={{ fontSize: custom.fontSize - 1, color: '#475569', margin: '2px 0 0' }}>{item.description}</p>}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
