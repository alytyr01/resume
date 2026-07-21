import { useResumeStore } from '@/store/resumeStore';
import { useUIStore } from '@/store/uiStore';
import { Button, Select, Input, Modal } from '@/components/ui';
import { templateInfo } from '@/components/templates';
import { Download, Printer, RotateCcw } from 'lucide-react';
import type { TemplateId } from '@/types/resume';

const fonts = [
  { value: 'Inter', label: 'Inter' },
  { value: 'Arial', label: 'Arial' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Times New Roman', label: 'Times New Roman' },
  { value: 'Courier New', label: 'Courier New' },
  { value: 'Calibri', label: 'Calibri' },
  { value: 'Helvetica', label: 'Helvetica' },
  { value: 'system-ui', label: 'System UI' },
];

export function SettingsPanel() {
  const customization = useResumeStore((s) => s.customization);
  const updateCustomization = useResumeStore((s) => s.updateCustomization);
  const resetResume = useResumeStore((s) => s.resetResume);
  const isOpen = useUIStore((s) => s.isSettingsOpen);
  const setOpen = useUIStore((s) => s.setSettingsOpen);

  const handlePrint = () => window.print();

  const handleExportPDF = () => {
    window.print();
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 12,
    fontWeight: 500,
    color: '#334155',
    marginBottom: 4,
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: 14,
    fontWeight: 600,
    color: '#0f172a',
    marginBottom: 12,
    paddingBottom: 6,
    borderBottom: '1px solid #F1F5F9',
  };

  return (
    <Modal open={isOpen} onClose={() => setOpen(false)} title="Settings & Customization">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Template */}
        <div>
          <h3 style={sectionTitleStyle}>Template</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
            {templateInfo.map((t) => (
              <button
                key={t.id}
                onClick={() => updateCustomization({ templateId: t.id as TemplateId })}
                style={{
                  borderRadius: 8,
                  border: `2px solid ${customization.templateId === t.id ? '#0f172a' : '#E2E8F0'}`,
                  padding: 8,
                  textAlign: 'left',
                  cursor: 'pointer',
                  background: customization.templateId === t.id ? '#F8FAFC' : '#fff',
                  transition: 'border-color 0.2s',
                  fontFamily: 'sans-serif',
                  color: '#0f172a',
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 600, color: '#0f172a', marginBottom: 1 }}>{t.name}</div>
                <div style={{ fontSize: 11, color: '#475569' }}>{t.description}</div>
              </button>
            ))}
          </div>
        </div>

         {/* Styling */}
         <div>
           <h3 style={sectionTitleStyle}>Styling</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
             <div>
               <label style={labelStyle}>Primary Color</label>
               <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                 <input
                   type="color"
                   value={customization.primaryColor}
                   onChange={(e) => updateCustomization({ primaryColor: e.target.value, accentColor: e.target.value })}
                   style={{
                     height: 36,
                     width: 36,
                     borderRadius: 8,
                     border: '1px solid #E2E8F0',
                     cursor: 'pointer',
                     padding: 0,
                   }}
                 />
                 <Input
                   value={customization.primaryColor}
                   onChange={(e) => updateCustomization({ primaryColor: e.target.value })}
                   style={{ flex: 1 }}
                 />
               </div>
             </div>
             <Select
               label="Font Family"
               options={fonts}
               value={customization.fontFamily}
               onChange={(e) => updateCustomization({ fontFamily: e.target.value })}
             />
             <Input
               label="Font Size (px)"
               type="number"
               min={10}
               max={20}
               value={customization.fontSize}
               onChange={(e) => updateCustomization({ fontSize: Number(e.target.value) })}
             />
             <Input
               label="Line Spacing"
               type="number"
               min={1}
               max={2.5}
               step={0.1}
               value={customization.lineSpacing}
               onChange={(e) => updateCustomization({ lineSpacing: Number(e.target.value) })}
             />
             <Input
               label="Section Spacing (px)"
               type="number"
               min={8}
               max={40}
               value={customization.sectionSpacing}
               onChange={(e) => updateCustomization({ sectionSpacing: Number(e.target.value) })}
             />
           </div>
         </div>

         {/* Actions */}
         <div>
           <h3 style={sectionTitleStyle}>Actions</h3>
           <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
             <Button variant="outline" size="sm" onClick={handleExportPDF} style={{ fontSize: 12, padding: '4px 8px', height: 28, color: '#0f172a', borderColor: '#cbd5e1' }}>
               <Download size={14} style={{ marginRight: 3 }} /> Download PDF
             </Button>
             <Button variant="outline" size="sm" onClick={handlePrint} style={{ fontSize: 12, padding: '4px 8px', height: 28, color: '#0f172a', borderColor: '#cbd5e1' }}>
               <Printer size={14} style={{ marginRight: 3 }} /> Print
             </Button>
             <Button variant="outline" size="sm" onClick={resetResume} style={{ fontSize: 12, padding: '4px 8px', height: 28, color: '#0f172a', borderColor: '#cbd5e1' }}>
               <RotateCcw size={14} style={{ marginRight: 3 }} /> Reset
             </Button>
           </div>
         </div>
      </div>
    </Modal>
  );
}