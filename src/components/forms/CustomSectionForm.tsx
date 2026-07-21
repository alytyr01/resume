import { useResumeStore } from '@/store/resumeStore';
import { Input, Textarea, Button } from '@/components/ui';
import { Plus, Trash2 } from 'lucide-react';

export function CustomSectionForm({ sectionId }: { sectionId: string }) {
  const section = useResumeStore((s) => s.resume.customSections.find((c) => c.id === sectionId))!;
  const updateTitle = useResumeStore((s) => s.updateCustomSectionTitle);
  const addEntry = useResumeStore((s) => s.addCustomEntry);
  const updateEntry = useResumeStore((s) => s.updateCustomEntry);
  const removeEntry = useResumeStore((s) => s.removeCustomEntry);
  const removeSection = useResumeStore((s) => s.removeCustomSection);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Input value={section.title} onChange={(e) => updateTitle(sectionId, e.target.value)} className="flex-1 font-medium" />
        <Button variant="ghost" size="icon" onClick={() => removeSection(sectionId)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
      </div>
      {section.items.map((entry) => (
        <div key={entry.id} className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Input label="Title" value={entry.title} onChange={(e) => updateEntry(sectionId, entry.id, { title: e.target.value })} placeholder="Title" />
            <Input label="Subtitle" value={entry.subtitle} onChange={(e) => updateEntry(sectionId, entry.id, { subtitle: e.target.value })} placeholder="Subtitle" />
            <Input label="Date" value={entry.date} onChange={(e) => updateEntry(sectionId, entry.id, { date: e.target.value })} placeholder="Date" />
          </div>
          <Textarea label="Description" value={entry.description} onChange={(e) => updateEntry(sectionId, entry.id, { description: e.target.value })} rows={2} className="mt-3" />
          <Button variant="ghost" size="sm" onClick={() => removeEntry(sectionId, entry.id)} className="mt-2 text-red-500">
            <Trash2 className="mr-1 h-3 w-3" /> Remove Entry
          </Button>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={() => addEntry(sectionId)} className="w-full"><Plus className="mr-1 h-4 w-4" /> Add Entry</Button>
    </div>
  );
}
