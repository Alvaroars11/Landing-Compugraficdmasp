import { CompugraficHero } from './CompugraficHero';
import { CompugraficAbout } from './CompugraficAbout';
import { CompugraficMissionVision } from './CompugraficMissionVision';
import { CompugraficServices } from './CompugraficServices';
import { CompugraficGallery } from './CompugraficGallery';
import { MarqueeBanner } from '../MarqueeBanner';

const MARQUEE_ITEMS = [
  'POP', 'ROUTER', 'IMPRESIÓN SOLVENTE', 'GRAN FORMATO', 'IMPRESIÓN UV',
  'RECORTE', 'PLOTTER', 'LAMINACIÓN', 'ESTRUCTURA', 'CANTEADO', 'ILUMINACIÓN',
];

export const CompugraficSection = () => (
  <div className="section-transition">
    <CompugraficHero />
    <MarqueeBanner items={MARQUEE_ITEMS} variant="cg" />
    <CompugraficAbout />
    <CompugraficMissionVision />
    <CompugraficServices />
    <CompugraficGallery />
  </div>
);
