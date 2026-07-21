import { useResumeStore } from '@/store/resumeStore';
import { Input, Textarea, Button } from '@/components/ui';
import { GripVertical, Plus, Trash2, Copy } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function ProjectItem({ id }: { id: string }) {
  const item = useResumeStore((s) => s.resume.projects.find((p) => p.id === id))!;
  const update = useResumeStore((s) => s.updateProject);
  const remove = useResumeStore((s) => s.removeProject);
  const duplicate = useResumeStore((s) => s.duplicateProject);
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} className={`rounded-xl border border-slate-200 bg-white p-4 ${isDragging ? 'opacity-50' : ''}`}>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button {...attributes} {...listeners} className="cursor-grab text-slate-500 hover:text-slate-700"><GripVertical className="h-4 w-4" /></button>
          <span className="text-sm font-medium text-slate-600">Project</span>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" onClick={() => duplicate(id)}><Copy className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" onClick={() => remove(id)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Input label="Project Name" value={item.name} onChange={(e) => update(id, { name: e.target.value })} placeholder="Aurora Design System" />
        <Input label="Link" value={item.link} onChange={(e) => update(id, { link: e.target.value })} placeholder="aurora-ds.dev" />
        <Input label="Technologies" value={item.tech} onChange={(e) => update(id, { tech: e.target.value })} placeholder="Figma, React, Storybook" className="sm:col-span-2" />
      </div>
      <Textarea label="Description" value={item.description} onChange={(e) => update(id, { description: e.target.value })} rows={2} className="mt-3" />
    </div>
  );
}

export function ProjectsForm() {
  const items = useResumeStore((s) => s.resume.projects);
  const add = useResumeStore((s) => s.addProject);
  return (
    <div className="space-y-3">
      {items.map((item) => <ProjectItem key={item.id} id={item.id} />)}
      <Button variant="outline" size="sm" onClick={add} className="w-full"><Plus className="mr-1 h-4 w-4" /> Add Project</Button>
    </div>
  );
}
