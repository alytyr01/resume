import { useResumeStore } from '@/store/resumeStore';
import { useUIStore } from '@/store/uiStore';
import { Card, CardTitle, CardContent, Button } from '@/components/ui';
import { PersonalInfoForm } from '@/components/forms/PersonalInfoForm';
import { SummaryForm } from '@/components/forms/SummaryForm';
import { ExperienceForm } from '@/components/forms/ExperienceForm';
import { EducationForm } from '@/components/forms/EducationForm';
import { SkillsForm } from '@/components/forms/SkillsForm';
import { ProjectsForm } from '@/components/forms/ProjectsForm';
import { CertificationsForm } from '@/components/forms/CertificationsForm';
import { LanguagesForm } from '@/components/forms/LanguagesForm';
import { ReferencesForm } from '@/components/forms/ReferencesForm';
import { CustomSectionForm } from '@/components/forms/CustomSectionForm';
import { ChevronDown, ChevronRight, Eye, EyeOff, Plus, GripVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, type DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

function SortableSection({ id, index }: { id: string; index: number }) {
  const section = useResumeStore((s) => s.resume.sections.find((sec) => sec.id === id))!;
  const toggleCollapse = useResumeStore((s) => s.toggleSectionCollapse);
  const toggleVisibility = useResumeStore((s) => s.toggleSectionVisibility);
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  const renderForm = () => {
    switch (section.type) {
      case 'personal': return <PersonalInfoForm />;
      case 'summary': return <SummaryForm />;
      case 'experience': return <ExperienceForm />;
      case 'education': return <EducationForm />;
      case 'skills': return <SkillsForm />;
      case 'projects': return <ProjectsForm />;
      case 'certifications': return <CertificationsForm />;
      case 'languages': return <LanguagesForm />;
      case 'references': return <ReferencesForm />;
      case 'custom': return <CustomSectionForm sectionId={section.id} />;
      default: return null;
    }
  };

  return (
    <div ref={setNodeRef} style={{ ...style, opacity: isDragging ? 0.5 : 1 }}>
      <Card>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            borderBottom: '1px solid #F1F5F9',
            background: '#F8FAFC',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button {...attributes} {...listeners} style={{
                cursor: 'grab',
                color: '#475569',
                background: 'none',
                border: 'none',
                padding: 0,
                display: 'flex',
              }}>
                <GripVertical size={16} />
              </button>
              <CardTitle style={{ fontSize: 14, color: '#0f172a' }}>{section.title}</CardTitle>
            </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <button
              onClick={() => toggleVisibility(id)}
              title={section.visible ? 'Hide' : 'Show'}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
                display: 'flex',
                color: section.visible ? '#334155' : '#94A3B8',
              }}
            >
              {section.visible ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
            <button
              onClick={() => toggleCollapse(id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
                display: 'flex',
                color: '#334155',
              }}
            >
              {section.collapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {!section.collapsed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CardContent style={{ paddingTop: 16 }}>{renderForm()}</CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}

export function SectionPanel() {
  const sections = useResumeStore((s) => s.resume.sections);
  const reorderSections = useResumeStore((s) => s.reorderSections);
  const addCustomSection = useResumeStore((s) => s.addCustomSection);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over.id);
      reorderSections(oldIndex, newIndex);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]}>
        <SortableContext items={sections.map((s) => s.id)} strategy={verticalListSortingStrategy}>
          {sections.map((section, i) => (
            <SortableSection key={section.id} id={section.id} index={i} />
          ))}
        </SortableContext>
      </DndContext>
      <Button variant="outline" size="sm" onClick={addCustomSection} style={{ width: '100%' }}>
        <Plus size={16} style={{ marginRight: 4 }} /> Add Custom Section
      </Button>
    </div>
  );
}