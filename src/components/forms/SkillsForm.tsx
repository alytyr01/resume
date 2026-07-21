import { useResumeStore } from '@/store/resumeStore';
import { Input, Button } from '@/components/ui';
import { GripVertical, Plus, Trash2 } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SkillItem({ id }: { id: string }) {
  const item = useResumeStore((s) => s.resume.skills.find((s) => s.id === id))!;
  const update = useResumeStore((s) => s.updateSkill);
  const remove = useResumeStore((s) => s.removeSkill);
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} className={`flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 ${isDragging ? 'opacity-50' : ''}`}>
      <button {...attributes} {...listeners} className="cursor-grab text-slate-500"><GripVertical className="h-4 w-4" /></button>
      <Input value={item.name} onChange={(e) => update(id, { name: e.target.value })} placeholder="Skill name" className="flex-1" />
      <div className="flex w-32 items-center gap-2">
        <input type="range" min={0} max={100} value={item.level} onChange={(e) => update(id, { level: Number(e.target.value) })} className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-indigo-600" />
        <span className="w-8 text-xs font-medium text-slate-600">{item.level}%</span>
      </div>
      <Button variant="ghost" size="icon" onClick={() => remove(id)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
    </div>
  );
}

export function SkillsForm() {
  const items = useResumeStore((s) => s.resume.skills);
  const add = useResumeStore((s) => s.addSkill);
  return (
    <div className="space-y-2">
      {items.map((item) => <SkillItem key={item.id} id={item.id} />)}
      <Button variant="outline" size="sm" onClick={add} className="w-full"><Plus className="mr-1 h-4 w-4" /> Add Skill</Button>
    </div>
  );
}
