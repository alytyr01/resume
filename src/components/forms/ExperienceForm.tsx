import { useResumeStore } from '@/store/resumeStore';
import { Input, Textarea, Button } from '@/components/ui';
import { GripVertical, Plus, Trash2, Copy } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function ExperienceItem({ id, index }: { id: string; index: number }) {
  const item = useResumeStore((s) => s.resume.experience.find((e) => e.id === id))!;
  const update = useResumeStore((s) => s.updateExperience);
  const remove = useResumeStore((s) => s.removeExperience);
  const duplicate = useResumeStore((s) => s.duplicateExperience);
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} className={`rounded-xl border border-slate-200 bg-white p-4 ${isDragging ? 'opacity-50 shadow-md' : ''}`}>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button {...attributes} {...listeners} className="cursor-grab text-slate-500 hover:text-slate-700">
            <GripVertical className="h-4 w-4" />
          </button>
          <span className="text-sm font-medium text-slate-600">Experience #{index + 1}</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={() => duplicate(id)} title="Duplicate">
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => remove(id)} title="Remove">
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Input label="Company" value={item.company} onChange={(e) => update(id, { company: e.target.value })} placeholder="Nimbus Technologies" />
        <Input label="Position" value={item.position} onChange={(e) => update(id, { position: e.target.value })} placeholder="Senior Product Designer" />
        <Input label="Location" value={item.location} onChange={(e) => update(id, { location: e.target.value })} placeholder="San Francisco, CA" />
        <div className="flex items-end gap-2">
          <Input label="Start Date" type="month" value={item.startDate} onChange={(e) => update(id, { startDate: e.target.value })} />
          {!item.current && <Input label="End Date" type="month" value={item.endDate} onChange={(e) => update(id, { endDate: e.target.value })} />}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input type="checkbox" checked={item.current} onChange={(e) => update(id, { current: e.target.checked, endDate: e.target.checked ? '' : item.endDate })} className="rounded border-slate-300" />
          I currently work here
        </label>
      </div>
      <Textarea label="Description" value={item.description} onChange={(e) => update(id, { description: e.target.value })} placeholder="Describe your responsibilities and achievements..." rows={3} className="mt-3" />
    </div>
  );
}

export function ExperienceForm() {
  const items = useResumeStore((s) => s.resume.experience);
  const add = useResumeStore((s) => s.addExperience);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <ExperienceItem key={item.id} id={item.id} index={i} />
      ))}
      <Button variant="outline" size="sm" onClick={add} className="w-full">
        <Plus className="mr-1 h-4 w-4" /> Add Experience
      </Button>
    </div>
  );
}
