import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { HomePage } from '@/pages/HomePage';
import { BuilderPage } from '@/pages/BuilderPage';
import { TemplatePage } from '@/pages/TemplatePage';
import { ModernTemplatePage } from '@/pages/templates/ModernTemplatePage';
import { MinimalTemplatePage } from '@/pages/templates/MinimalTemplatePage';
import { ProfessionalTemplatePage } from '@/pages/templates/ProfessionalTemplatePage';
import { ATSTemplatePage } from '@/pages/templates/ATSTemplatePage';
import { CreativeTemplatePage } from '@/pages/templates/CreativeTemplatePage';
import { PremiumTemplatePage } from '@/pages/templates/PremiumTemplatePage';
import { EntryLevelPage } from '@/pages/EntryLevelPage';
import { MidCareerPage } from '@/pages/MidCareerPage';
import { ExecutivePage } from '@/pages/ExecutivePage';
import { useThemeStore } from '@/store/themeStore';

function ThemeInitializer({ children }: { children: React.ReactNode }) {
  const applyTheme = useThemeStore((s) => s.applyTheme);
  useEffect(() => { applyTheme(); }, [applyTheme]);
  return <>{children}</>;
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeInitializer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/templates" element={<HomePage />} />
          <Route path="/templates/modern" element={<ModernTemplatePage />} />
          <Route path="/templates/minimal" element={<MinimalTemplatePage />} />
          <Route path="/templates/professional" element={<ProfessionalTemplatePage />} />
          <Route path="/templates/ats" element={<ATSTemplatePage />} />
          <Route path="/templates/creative" element={<CreativeTemplatePage />} />
          <Route path="/templates/premium" element={<PremiumTemplatePage />} />
          <Route path="/templates/:templateId" element={<TemplatePage />} />
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="/career-levels" element={<Navigate to="/career-levels/entry" replace />} />
          <Route path="/career-levels/entry" element={<EntryLevelPage />} />
          <Route path="/career-levels/mid" element={<MidCareerPage />} />
          <Route path="/career-levels/executive" element={<ExecutivePage />} />
        </Routes>
      </ThemeInitializer>
    </BrowserRouter>
  );
}
