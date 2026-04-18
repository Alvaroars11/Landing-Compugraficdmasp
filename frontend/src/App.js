import { useState, useEffect } from "react";
import "@/App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingToggle } from "./components/FloatingToggle";
import { ContactSection } from "./components/ContactSection";
import { CompugraficSection } from "./components/compugrafic/CompugraficSection";
import { DPSection } from "./components/dp/DPSection";

function App() {
  const [activeSection, setActiveSection] = useState('compugrafic');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSwitchSection = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="App" data-testid="app-container">
      <Header
        activeSection={activeSection}
        onSwitchSection={handleSwitchSection}
        scrolled={scrolled}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onNavigate={handleNavigate}
      />

      <main>
        {activeSection === 'compugrafic' ? <CompugraficSection /> : <DPSection />}
        <ContactSection activeSection={activeSection} />
      </main>

      <FloatingToggle activeSection={activeSection} onChange={handleSwitchSection} />
      <Footer />
    </div>
  );
}

export default App;
