import { DPHero } from './DPHero';
import { DPAbout } from './DPAbout';
import { DPMissionVision } from './DPMissionVision';
import { DPServices } from './DPServices';
import { DPSketches } from './DPSketches';
import { DPGallery } from './DPGallery';
import { MarqueeBanner } from '../MarqueeBanner';

const MARQUEE_ITEMS = [
  'INTERIOR', 'ARQUITECTÓNICA', 'VERTICAL', 'HABITACIONAL', 'HORIZONTAL',
  'DIRECCIONAL', 'IDENTIDAD', 'INDUSTRIAL', 'INFORMATIVA', 'NORMATIVA',
  'RESTRICTIVA', 'PREVENTIVA', 'BRAILLE',
];

export const DPSection = () => (
  <div className="section-transition" data-testid="dp-section">
    <DPHero />
    <DPAbout />
    <MarqueeBanner items={MARQUEE_ITEMS} variant="dp" />
    <DPMissionVision />
    <DPServices />
    <DPSketches />
    <DPGallery />
  </div>
);
