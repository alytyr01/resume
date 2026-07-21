import { useResumeStore } from '@/store/resumeStore';
import { Input, Select, Button } from '@/components/ui';
import { Plus, Trash2 } from 'lucide-react';

const proficiencies = [
  { value: 'Native', label: 'Native' },
  { value: 'Fluent', label: 'Fluent' },
  { value: 'Professional', label: 'Professional' },
  { value: 'Conversational', label: 'Conversational' },
  { value: 'Basic', label: 'Basic' },
];

export function LanguagesForm() {
  const items = useResumeStore((s) => s.resume.languages);
  const add = useResumeStore((s) => s.addLanguage);
  const update = useResumeStore((s) => s.updateLanguage);
  const remove = useResumeStore((s) => s.removeLanguage);
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.id} className="flex items-end gap-2 rounded-lg border border-slate-200 bg-white p-3">
          <Input value={item.name} onChange={(e) => update(item.id, { name: e.target.value })} placeholder="Language" className="flex-1" />
          <Select options={proficiencies} value={item.proficiency} onChange={(e) => update(item.id, { proficiency: e.target.value })} className="w-40" />
          <Button variant="ghost" size="icon" onClick={() => remove(item.id)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={add} className="w-full"><Plus className="mr-1 h-4 w-4" /> Add Language</Button>
    </div>
  );
}
