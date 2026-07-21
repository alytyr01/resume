import { useResumeStore } from '@/store/resumeStore';
import { Input, Textarea, Button } from '@/components/ui';
import { GripVertical, Plus, Trash2, Copy } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function EducationItem({ id, index }: { id: string; index: number }) {
  const item = useResumeStore((s) => s.resume.education.find((e) => e.id === id))!;
  const update = useResumeStore((s) => s.updateEducation);
  const remove = useResumeStore((s) => s.removeEducation);
  const duplicate = useResumeStore((s) => s.duplicateEducation);
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} className={`rounded-xl border border-slate-200 bg-white p-4 ${isDragging ? 'opacity-50 shadow-md' : ''}`}>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button {...attributes} {...listeners} className="cursor-grab text-slate-500 hover:text-slate-700">
            <GripVertical className="h-4 w-4" />
          </button>
          <span className="text-sm font-medium text-slate-600">Education #{index + 1}</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={() => duplicate(id)} title="Duplicate"><Copy className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" onClick={() => remove(id)} title="Remove"><Trash2 className="h-4 w-4 text-red-500" /></Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Input label="School" value={item.school} onChange={(e) => update(id, { school: e.target.value })} placeholder="California College of the Arts" />
        <Input label="Degree" value={item.degree} onChange={(e) => update(id, { degree: e.target.value })} placeholder="B.F.A." />
        <Input label="Field of Study" value={item.field} onChange={(e) => update(id, { field: e.target.value })} placeholder="Interaction Design" />
        <Input label="Year" value={item.year} onChange={(e) => update(id, { year: e.target.value })} placeholder="2017" />
        <Input label="Location" value={item.location} onChange={(e) => update(id, { location: e.target.value })} placeholder="San Francisco, CA" />
      </div>
      <Textarea label="Description (optional)" value={item.description} onChange={(e) => update(id, { description: e.target.value })} rows={2} className="mt-3" />
    </div>
  );
}

export function EducationForm() {
  const items = useResumeStore((s) => s.resume.education);
  const add = useResumeStore((s) => s.addEducation);
  return (
    <div className="space-y-3">
      {items.map((item, i) => <EducationItem key={item.id} id={item.id} index={i} />)}
      <Button variant="outline" size="sm" onClick={add} className="w-full"><Plus className="mr-1 h-4 w-4" /> Add Education</Button>
    </div>
  );
}
