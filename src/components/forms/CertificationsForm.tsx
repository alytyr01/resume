import { useResumeStore } from '@/store/resumeStore';
import { Input, Button } from '@/components/ui';
import { Plus, Trash2 } from 'lucide-react';

export function CertificationsForm() {
  const items = useResumeStore((s) => s.resume.certifications);
  const add = useResumeStore((s) => s.addCertification);
  const update = useResumeStore((s) => s.updateCertification);
  const remove = useResumeStore((s) => s.removeCertification);
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Input label="Name" value={item.name} onChange={(e) => update(item.id, { name: e.target.value })} placeholder="Certified UX Design Professional" />
            <Input label="Issuer" value={item.issuer} onChange={(e) => update(item.id, { issuer: e.target.value })} placeholder="Google" />
            <div className="flex items-end gap-2">
              <Input label="Date" value={item.date} onChange={(e) => update(item.id, { date: e.target.value })} placeholder="2022" />
              <Button variant="ghost" size="icon" onClick={() => remove(item.id)} className="mb-0.5"><Trash2 className="h-4 w-4 text-red-500" /></Button>
            </div>
          </div>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={add} className="w-full"><Plus className="mr-1 h-4 w-4" /> Add Certification</Button>
    </div>
  );
}
