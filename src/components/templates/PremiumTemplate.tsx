import type { ResumeData, Customization } from '@/types/resume';

interface Props { resume: ResumeData; custom: Customization; }

export function PremiumTemplate({ resume, custom }: Props) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, references, sections } = resume;
  const visibleSections = sections.filter((s) => s.visible);

  const sectionOrder = ['summary', 'skills', 'projects', 'experience', 'education', 'certifications', 'languages', 'references'];
  const sectionLabels: Record<string, string> = {
    summary: 'Summary',
    skills: 'Technical Skills',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    certifications: 'Certifications',
    languages: 'Languages',
    references: 'References',
  };

  const renderSection = (id: string) => {
    switch (id) {
      case 'summary':
        return summary ? (
          <p style={{ fontSize: 15, lineHeight: 1.65, color: '#4B5563', margin: 0 }}>{summary}</p>
        ) : null;

      case 'skills':
        return skills.length > 0 ? (
          <div style={{ fontSize: 15, lineHeight: 1.65, color: '#4B5563' }}>
            {skills.map((s) => s.name).join(', ')}
          </div>
        ) : null;

      case 'projects':
        return projects.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {projects.map((proj) => (
              <div key={proj.id}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: '#111827' }}>{proj.name}</span>
                  {proj.tech && <span style={{ fontSize: 13, color: '#6B7280' }}>{proj.tech}</span>}
                </div>
                <p style={{ fontSize: 14, color: '#4B5563', margin: '4px 0 6px', lineHeight: 1.65 }}>{proj.description}</p>
                {proj.link && (
                  <div style={{ fontSize: 14, color: '#2563EB' }}>
                    <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer"
                      style={{ color: '#2563EB', textDecoration: 'none', transition: 'text-decoration 150ms ease' }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}>
                      {proj.link}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : null;

      case 'experience':
        return experience.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {experience.map((exp) => (
              <div key={exp.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <span style={{ fontSize: 15, fontWeight: 600, color: '#111827' }}>{exp.position}</span>
                    <span style={{ fontSize: 14, color: '#6B7280' }}> — {exp.company}</span>
                  </div>
                  <span style={{ fontSize: 13, color: '#6B7280', whiteSpace: 'nowrap' }}>
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                {exp.location && <div style={{ fontSize: 13, color: '#6B7280', margin: '2px 0 4px' }}>{exp.location}</div>}
                {exp.description && (
                  <div style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.65, margin: '4px 0 0', whiteSpace: 'pre-wrap' }}>{exp.description}</div>
                )}
              </div>
            ))}
          </div>
        ) : null;

      case 'education':
        return education.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {education.map((edu) => (
              <div key={edu.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <span style={{ fontSize: 15, fontWeight: 600, color: '#111827' }}>{edu.school}</span>
                    <span style={{ fontSize: 14, color: '#6B7280' }}> — {edu.degree} in {edu.field}</span>
                  </div>
                  <span style={{ fontSize: 13, color: '#6B7280' }}>{edu.year}</span>
                </div>
                {edu.description && <p style={{ fontSize: 14, color: '#4B5563', margin: '4px 0 0', lineHeight: 1.65 }}>{edu.description}</p>}
              </div>
            ))}
          </div>
        ) : null;

      case 'certifications':
        return certifications.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {certifications.map((cert) => (
              <div key={cert.id} style={{ fontSize: 14, color: '#4B5563' }}>
                <span style={{ fontWeight: 500 }}>{cert.name}</span> — {cert.issuer}
                <span style={{ color: '#6B7280' }}> ({cert.date})</span>
              </div>
            ))}
          </div>
        ) : null;

      case 'languages':
        return languages.length > 0 ? (
          <div style={{ fontSize: 14, color: '#4B5563' }}>
            {languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}
          </div>
        ) : null;

      case 'references':
        return references.length > 0 ? (
          <div style={{ fontSize: 14, color: '#4B5563' }}>
            {references.map((ref) => (
              <div key={ref.id} style={{ marginBottom: 4 }}>
                <span style={{ fontWeight: 500 }}>{ref.name}</span>
                {ref.company ? ` — ${ref.company}` : ''}
              </div>
            ))}
          </div>
        ) : null;

      default:
        // Custom sections
        const cs = resume.customSections.find((c) => c.id === id);
        if (!cs) return null;
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {cs.items.map((item) => (
              <div key={item.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: '#111827' }}>{item.title}</span>
                  {item.date && <span style={{ fontSize: 13, color: '#6B7280' }}>{item.date}</span>}
                </div>
                {item.subtitle && <div style={{ fontSize: 14, color: '#6B7280', margin: '2px 0' }}>{item.subtitle}</div>}
                {item.description && <p style={{ fontSize: 14, color: '#4B5563', margin: '4px 0 0', lineHeight: 1.65 }}>{item.description}</p>}
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div style={{
      fontFamily: custom.fontFamily || 'Inter',
      maxWidth: 820,
      margin: '0 auto',
      padding: '48px',
      background: '#FFFFFF',
      color: '#111827',
    }}>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <h1 style={{
          fontSize: 40,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          margin: 0,
          color: '#111827',
          lineHeight: 1.1,
        }}>
          {personal.fullName || 'Your Name'}
        </h1>
        <p style={{
          fontSize: 18,
          fontWeight: 500,
          color: '#4B5563',
          margin: '6px 0 14px',
        }}>
          {personal.jobTitle || 'Job Title'}
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0,
          fontSize: 14,
          color: '#6B7280',
        }}>
          {[
            personal.email,
            personal.github,
            personal.website,
            personal.linkedin,
            personal.phone,
            personal.location,
          ].filter(Boolean).map((item, i, arr) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{
                color: item?.includes('@') || item?.includes('linkedin') || item?.includes('github') || item?.includes('.')
                  ? '#2563EB'
                  : '#6B7280'
              }}>
                {item}
              </span>
              {i < arr.length - 1 && (
                <span style={{ color: '#E5E7EB', margin: '0 8px' }}>/</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Sections */}
      {sectionOrder.map((sectionId) => {
        const sectionMeta = visibleSections.find((s) => s.id === sectionId);
        if (!sectionMeta) return null;
        const content = renderSection(sectionId);
        if (!content) return null;

        return (
          <div key={sectionId} style={{ marginBottom: 36 }}>
            <div style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#6B7280',
              marginBottom: 12,
              paddingBottom: 8,
              borderBottom: '1px solid #E5E7EB',
            }}>
              {sectionLabels[sectionId] || sectionMeta.title}
            </div>
            {content}
          </div>
        );
      })}

      {/* Custom Sections */}
      {resume.customSections.map((cs) => {
        const meta = sections.find((s) => s.id === cs.id);
        if (!meta?.visible) return null;
        const content = renderSection(cs.id);
        if (!content) return null;
        return (
          <div key={cs.id} style={{ marginBottom: 36 }}>
            <div style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#6B7280',
              marginBottom: 12,
              paddingBottom: 8,
              borderBottom: '1px solid #E5E7EB',
            }}>
              {meta.title}
            </div>
            {content}
          </div>
        );
      })}
    </div>
  );
}