import { useResumeStore } from '@/store/resumeStore';
import { Input } from '@/components/ui';

export function PersonalInfoForm() {
  const personal = useResumeStore((s) => s.resume.personal);
  const customization = useResumeStore((s) => s.customization);
  const updatePersonal = useResumeStore((s) => s.updatePersonal);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      updatePersonal({ photo: (ev.target?.result as string) || '' });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {customization.templateId === 'creative' && (
        <div className="sm:col-span-2">
          <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#334155', marginBottom: 4 }}>Resume Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} style={{ fontSize: 13 }} />
          {personal.photo && (
            <div style={{ marginTop: 4 }}>
              <img src={personal.photo} alt="Profile" style={{ width: '100%', maxWidth: 200, borderRadius: 8, border: '1px solid #E2E8F0' }} />
            </div>
          )}
        </div>
      )}
      <Input label="Full Name" value={personal.fullName} onChange={(e) => updatePersonal({ fullName: e.target.value })} placeholder="Ava Sterling" />
      <Input label="Job Title" value={personal.jobTitle} onChange={(e) => updatePersonal({ jobTitle: e.target.value })} placeholder="Senior Product Designer" />
      <Input label="Email" type="email" value={personal.email} onChange={(e) => updatePersonal({ email: e.target.value })} placeholder="ava@email.com" />
      <Input label="Phone" type="tel" value={personal.phone} onChange={(e) => updatePersonal({ phone: e.target.value })} placeholder="+1 (555) 123-4567" />
      <Input label="Location" value={personal.location} onChange={(e) => updatePersonal({ location: e.target.value })} placeholder="San Francisco, CA" />
      <Input label="Website" value={personal.website} onChange={(e) => updatePersonal({ website: e.target.value })} placeholder="avasterling.design" />
      <Input label="LinkedIn" value={personal.linkedin} onChange={(e) => updatePersonal({ linkedin: e.target.value })} placeholder="linkedin.com/in/avasterling" />
      <Input label="GitHub" value={personal.github} onChange={(e) => updatePersonal({ github: e.target.value })} placeholder="github.com/avasterling" />
    </div>
  );
}
