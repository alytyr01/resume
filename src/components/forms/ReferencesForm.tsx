import { useResumeStore } from '@/store/resumeStore';
import { Input, Button } from '@/components/ui';
import { Plus, Trash2 } from 'lucide-react';

export function ReferencesForm() {
  const items = useResumeStore((s) => s.resume.references);
  const add = useResumeStore((s) => s.addReference);
  const update = useResumeStore((s) => s.updateReference);
  const remove = useResumeStore((s) => s.removeReference);
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Input label="Name" value={item.name} onChange={(e) => update(item.id, { name: e.target.value })} placeholder="James Park" />
            <Input label="Company" value={item.company} onChange={(e) => update(item.id, { company: e.target.value })} placeholder="Nimbus Technologies" />
            <Input label="Phone" value={item.phone} onChange={(e) => update(item.id, { phone: e.target.value })} placeholder="+1 (555) 987-6543" />
            <div className="flex items-end gap-2">
              <Input label="Email" value={item.email} onChange={(e) => update(item.id, { email: e.target.value })} placeholder="james.park@email.com" />
              <Button variant="ghost" size="icon" onClick={() => remove(item.id)} className="mb-0.5"><Trash2 className="h-4 w-4 text-red-500" /></Button>
            </div>
          </div>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={add} className="w-full"><Plus className="mr-1 h-4 w-4" /> Add Reference</Button>
    </div>
  );
}
