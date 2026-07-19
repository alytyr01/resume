import { PremiumTemplate } from './PremiumTemplate';
import type { ResumeData, Customization, TemplateId } from '@/types/resume';

// All templates use the premium design - the template selector changes
// the section order and minor styling variations while maintaining
// the same premium, ATS-friendly foundation.
const templates: Record<TemplateId, React.FC<{ resume: ResumeData; custom: Customization }>> = {
  modern: PremiumTemplate,
  minimal: PremiumTemplate,
  professional: PremiumTemplate,
  ats: PremiumTemplate,
  creative: PremiumTemplate,
};

export function getTemplate(id: TemplateId) {
  return templates[id] || PremiumTemplate;
}

export const templateInfo: { id: TemplateId; name: string; description: string }[] = [
  { id: 'modern', name: 'Premium', description: 'Minimal, elegant, ATS-friendly design' },
  { id: 'minimal', name: 'Minimal', description: 'Same premium foundation' },
  { id: 'professional', name: 'Professional', description: 'Same premium foundation' },
  { id: 'ats', name: 'ATS', description: 'Same premium foundation' },
  { id: 'creative', name: 'Creative', description: 'Same premium foundation' },
];

export { PremiumTemplate };