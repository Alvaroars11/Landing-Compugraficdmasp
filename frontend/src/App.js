import { useState, useEffect } from "react";
import "@/App.css";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Compugrafic Section Component
const CompugraficSection = ({ onSwitchToDP, onContactClick }) => {
  return (
    <div className="section-transition">
      {/* Hero */}
      <section className="hero" data-testid="compugrafic-hero">
        <div className="hero-content">
          <p className="location">GUADALAJARA, JALISCO · MÉXICO</p>
          <h1 className="hero-title">
            <span className="watermark">compugrafic</span>
            Hacemos<br />que las<br />ideas<br />
            <span className="highlight">sucedan.</span>
          </h1>
          <p className="hero-description">
            Diseñamos, producimos y entregamos cada proyecto con el estándar más alto. 
            Reactivos al ritmo del retail, siempre.
          </p>
          <div className="experience-badge">
            <span className="experience-number">25+</span>
            <span className="experience-text">AÑOS DE<br />EXPERIENCIA</span>
          </div>
        </div>
        
        <div className="services-grid">
          <div className="service-card orange-1" data-testid="service-visual">
            <span className="service-number">01</span>
            <h3 className="service-title">Visual<br />Merchandising</h3>
            <span className="service-arrow">→</span>
          </div>
          <div className="service-card orange-2" data-testid="service-fachadas">
            <span className="service-number">02</span>
            <h3 className="service-title">Fachadas<br />Comerciales</h3>
            <span className="service-arrow">→</span>
          </div>
          <div className="service-card orange-3" data-testid="service-marketing">
            <span className="service-number">03</span>
            <h3 className="service-title">Marketing<br />Gran Escala</h3>
            <span className="service-arrow">→</span>
          </div>
          <div className="service-card orange-4" data-testid="service-impresos">
            <span className="service-number">04</span>
            <h3 className="service-title">Impresos<br />Gran Formato</h3>
            <span className="service-arrow">→</span>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="marquee-banner">
        <div className="marquee-content">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex' }}>
              <span className="marquee-item">POP</span>
              <span className="marquee-item">ROUTER</span>
              <span className="marquee-item">IMPRESIÓN SOLVENTE</span>
              <span className="marquee-item">GRAN FORMATO</span>
              <span className="marquee-item">IMPRESIÓN UV</span>
              <span className="marquee-item">RECORTE</span>
              <span className="marquee-item">PLOTTER</span>
              <span className="marquee-item">LAMINACIÓN</span>
              <span className="marquee-item">ESTRUCTURA</span>
              <span className="marquee-item">CANTEADO</span>
              <span className="marquee-item">ILUMINACIÓN</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Detail */}
      <section className="services-detail" id="servicios" data-testid="services-section">
        <div className="services-detail-inner">
          <span className="section-label">NUESTROS SERVICIOS</span>
          <h2 className="section-title">
            Soluciones que mejoran<br />el impacto de tu marca
          </h2>
          <p className="section-description">
            Constantemente desarrollamos y enfocamos nuestro servicio para asegurar
            que cada proyecto sea diseñado, producido y entregado con el más alto
            estándar posible.
          </p>
          
          <div className="services-cards">
            <div className="detail-card">
              <div className="detail-card-icon">📋</div>
              <h4 className="detail-card-title">Visual Merchandising</h4>
              <p className="detail-card-text">
                Desarrollamos estrategias visuales de alto impacto para puntos de venta,
                diseñando y produciendo materiales que guían la decisión de compra.
              </p>
              <ul className="detail-card-list">
                <li>Material de display y POP</li>
                <li>Banners y lonas comerciales</li>
                <li>Utilería efímera para temporadas</li>
              </ul>
            </div>
            
            <div className="detail-card">
              <div className="detail-card-icon">🏢</div>
              <h4 className="detail-card-title">Fachadas Comerciales</h4>
              <p className="detail-card-text">
                Transformamos la imagen exterior de tu negocio integrando materiales
                de vanguardia, acabados premium y elementos volumétricos.
              </p>
              <ul className="detail-card-list">
                <li>Letras volumétricas iluminadas</li>
                <li>Revestimientos y texturas combinadas</li>
                <li>Lonas de alta resolución UV</li>
              </ul>
            </div>
            
            <div className="detail-card">
              <div className="detail-card-icon">📊</div>
              <h4 className="detail-card-title">Marketing a Gran Escala</h4>
              <p className="detail-card-text">
                Gestionamos de forma integral la producción de espacios comerciales
                y de exhibición, desde el concepto creativo hasta la instalación final.
              </p>
              <ul className="detail-card-list">
                <li>Showrooms y espacios de exhibición</li>
                <li>Producción para expos y ferias</li>
                <li>Cobertura en toda la República</li>
              </ul>
            </div>
            
            <div className="detail-card">
              <div className="detail-card-icon">🖨️</div>
              <h4 className="detail-card-title">Impresos Gran Formato</h4>
              <p className="detail-card-text">
                Producimos impresiones de gran formato con tecnología UV y solvente
                de última generación, garantizando colores precisos y alta definición.
              </p>
              <ul className="detail-card-list">
                <li>Vinilos, espectaculares y anuncios</li>
                <li>Banners, lonas y cenefas interior</li>
                <li>Foam boards y material rígido</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="nosotros" data-testid="about-section">
        <div className="about-inner">
          <div className="about-card">
            <span className="about-label">MISIÓN</span>
            <h3 className="about-title">Calidad en cada proceso</h3>
            <p className="about-text">
              Proporcionar al mercado nacional productos de comunicación gráfica,
              buscando de manera continua y permanente la calidad en nuestros
              procesos, capital humano capacitado, tecnología de punta y la mejor
              maquinaria; brindando el servicio que satisfaga las necesidades de
              nuestros clientes tanto internos como externos.
            </p>
          </div>
          
          <div className="about-card">
            <span className="about-label">VISIÓN</span>
            <h3 className="about-title">Líderes en Latinoamérica</h3>
            <p className="about-text">
              Ser la empresa con mejor tecnología y más prestigiada de Latinoamérica
              en nuestro ramo, entrando de lleno a un mercado de alta definición y alta
              resolución en gran formato, adquiriendo maquinaria de punta para dar
              una semejanza de la realidad a través de impresiones de calidad,
              seleccionando y desarrollando personal de excelencia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// D+P Section Component
const DPSection = ({ onSwitchToCompugrafic, onContactClick }) => {
  return (
    <div className="section-transition" data-testid="dp-section">
      {/* D+P Hero */}
      <section className="dp-hero">
        <div className="dp-hero-inner">
          <div className="hero-content">
            <h1 className="dp-title">
              Transformamos<br />la señalización<br />en una<br />
              <span className="highlight">experiencia<br />única.</span>
            </h1>
            <p className="dp-description">
              Fusionamos experiencia y vanguardia para orientar visualmente y conectar
              con las personas a través de un equilibrio entre estética y funcionalidad.
              Servicio integral desde el diseño creativo hasta la instalación final.
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div className="dp-logo-large">
              d<span>+</span>p
            </div>
            <p className="dp-tagline">SEÑALÉTICA / WAYFINDING</p>
          </div>
        </div>
      </section>

      {/* About D+P */}
      <section className="about-section">
        <div className="about-inner">
          <div className="about-card">
            <span className="about-label">QUIÉNES SOMOS</span>
            <h3 className="about-title">El departamento especializado en Señalética y Wayfinding</h3>
            <p className="about-text">
              Convertimos la señalización en una experiencia visual única. Nos
              enfocamos en soluciones integrales de señalética y wayfinding para
              proyectos a gran escala en los sectores hotelero, restaurantero,
              corporativo, hospitalario, educativo y de movilidad urbana.
            </p>
          </div>
          
          <div className="about-card" style={{ background: 'var(--dp-red)', color: 'white' }}>
            <span className="about-label" style={{ color: 'rgba(255,255,255,0.7)' }}>¿QUÉ NOS HACE DIFERENTES?</span>
            <p className="about-text" style={{ color: 'white', marginBottom: '1.5rem' }}>
              Cubrimos el ciclo completo de cada proyecto:
            </p>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', lineHeight: '2' }}>
              <li>→ Planeación, diseño y desarrollo</li>
              <li>→ Manufactura</li>
              <li>→ Instalación en sitio</li>
            </ul>
            <p className="about-text" style={{ color: 'rgba(255,255,255,0.9)', marginTop: '1.5rem' }}>
              Creamos sistemas de comunicación visual que se integran
              perfectamente con el concepto arquitectónico y la identidad
              de marca.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" id="proceso" data-testid="process-section">
        <div className="process-inner">
          <span className="section-label">PROCESO</span>
          <h2 className="process-title">
            Desarrollo del proyecto<br />ejecutivo de señalización
          </h2>
          <p className="process-subtitle">
            Un proceso estructurado en 7 etapas que garantiza resultados precisos,
            durables y alineados a la identidad de tu espacio.
          </p>
          
          <div className="process-steps">
            <div className="process-step">
              <span className="step-number">1</span>
              <h4 className="step-title">Diagnóstico Estratégico</h4>
              <p className="step-text">Entendemos tus objetivos y retos operativos para alinear función con visión estética.</p>
            </div>
            <div className="process-step">
              <span className="step-number">2</span>
              <h4 className="step-title">Integración de ADN de Marca</h4>
              <p className="step-text">Analizamos tu identidad visual para que cada elemento sea extensión coherente de tu marca.</p>
            </div>
            <div className="process-step">
              <span className="step-number">3</span>
              <h4 className="step-title">Análisis de Flujos</h4>
              <p className="step-text">Estudiamos la distribución física, recorridos naturales y puntos de decisión crítica.</p>
            </div>
            <div className="process-step">
              <span className="step-number">4</span>
              <h4 className="step-title">Sembrado Estratégico</h4>
              <p className="step-text">Ubicamos cada pieza en el plano con precisión para garantizar orientación continua.</p>
            </div>
            <div className="process-step">
              <span className="step-number">5</span>
              <h4 className="step-title">Definición de Tipologías</h4>
              <p className="step-text">Tótems exteriores, directorios, identificadores de destino y normativa de Protección Civil.</p>
            </div>
            <div className="process-step">
              <span className="step-number">6</span>
              <h4 className="step-title">Cuantificación y Alcance</h4>
              <p className="step-text">Volumetría precisa de todos los elementos, con control total sobre producción y presupuesto.</p>
            </div>
            <div className="process-step">
              <span className="step-number">7</span>
              <h4 className="step-title">Diseño Técnico-Creativo</h4>
              <p className="step-text">Materialidad, ergonomía visual, dimensionamiento y detalles constructivos finales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="deliverables-section" data-testid="deliverables-section">
        <div className="deliverables-inner">
          <div>
            <span className="section-label">ENTREGABLES</span>
            <h2 className="deliverables-title">Proyecto Ejecutivo de<br />Señalización</h2>
            <p className="deliverables-text">
              Cada proyecto se entrega con documentación completa: manual digital,
              archivos editables en tamaño real, sembrado en planos arquitectónicos,
              cuantificación por etapas y cotización de fabricación e instalación.
            </p>
          </div>
          
          <div className="deliverables-grid">
            <div className="deliverable-item">
              <span className="deliverable-format">PDF</span>
              <h4 className="deliverable-name">Manual Digital</h4>
              <p className="deliverable-desc">Especificaciones técnicas, materialidad, dimensiones y diseño final.</p>
            </div>
            <div className="deliverable-item">
              <span className="deliverable-format">PDF editable</span>
              <h4 className="deliverable-name">Archivos Editables</h4>
              <p className="deliverable-desc">En tamaño real para producción directa.</p>
            </div>
            <div className="deliverable-item">
              <span className="deliverable-format">PDF · DWG</span>
              <h4 className="deliverable-name">Sembrado</h4>
              <p className="deliverable-desc">Ubicación precisa de señalización en planos arquitectónicos.</p>
            </div>
            <div className="deliverable-item">
              <span className="deliverable-format">PDF · XLS</span>
              <h4 className="deliverable-name">Cuantificación</h4>
              <p className="deliverable-desc">Estimación por área y/o etapas de proyecto.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Section Component
const ContactSection = ({ activeSection }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post(`${API}/contact`, {
        ...formData,
        seccion: activeSection
      });
      
      setToast({ message: response.data.message, type: 'success' });
      setFormData({ nombre: '', email: '', empresa: '', mensaje: '' });
    } catch (error) {
      setToast({ 
        message: 'Error al enviar mensaje. Intenta de nuevo.', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <section className="contact-section" id="contacto" data-testid="contact-section">
      <div className="contact-inner">
        <div className="contact-info">
          <span className="section-label">CONTACTO</span>
          <h2 className="contact-title">Hablemos de tu proyecto</h2>
          <div className="contact-address">
            <p>Av. Abedules 227, Unidad México</p>
            <p>CP 45120 · Zapopan, Jalisco</p>
          </div>
          <a href="tel:+523338131707" className="contact-phone">(33) 3813 1707</a>
          <a href="tel:+523338131593" className="contact-phone">(33) 3813 1593</a>
          <br />
          <a href="mailto:operaciones@compugrafic.com" className="contact-email">operaciones@compugrafic.com</a>
          <a href="mailto:drodriguez@compugrafic.com" className="contact-email">drodriguez@compugrafic.com</a>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit} data-testid="contact-form">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="form-input"
            value={formData.nombre}
            onChange={handleChange}
            required
            data-testid="input-nombre"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
            data-testid="input-email"
          />
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            className="form-input"
            value={formData.empresa}
            onChange={handleChange}
            data-testid="input-empresa"
          />
          <textarea
            name="mensaje"
            placeholder="Cuéntanos sobre tu proyecto..."
            className="form-input form-textarea"
            value={formData.mensaje}
            onChange={handleChange}
            required
            data-testid="input-mensaje"
          />
          <button 
            type="submit" 
            className="form-button"
            disabled={loading}
            data-testid="submit-btn"
          >
            {loading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>
      
      {toast && (
        <div className={`toast ${toast.type}`} data-testid="toast-message">
          {toast.message}
        </div>
      )}
    </section>
  );
};

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('compugrafic');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App" data-testid="app-container">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''} ${activeSection === 'dp' ? 'dp-mode' : ''}`} data-testid="header">
        <a href="/" className="logo">
          d+p <span>| compugrafic</span>
        </a>
        
        <nav className="nav-links">
          {activeSection === 'compugrafic' ? (
            <>
              <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }} className="nav-link">SERVICIOS</a>
              <a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }} className="nav-link">NOSOTROS</a>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }} className="nav-link">CONTACTO</a>
              <button onClick={() => setActiveSection('dp')} className="nav-link dp-toggle" data-testid="switch-to-dp">
                D+P →
              </button>
            </>
          ) : (
            <>
              <a href="#proceso" onClick={(e) => { e.preventDefault(); scrollToSection('proceso'); }} className="nav-link">PROCESO</a>
              <a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }} className="nav-link">QUIÉNES SOMOS</a>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }} className="nav-link">CONTACTO</a>
              <button onClick={() => setActiveSection('compugrafic')} className="nav-link dp-toggle" data-testid="switch-to-compugrafic">
                ← COMPUGRAFIC
              </button>
            </>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {activeSection === 'compugrafic' ? (
          <CompugraficSection 
            onSwitchToDP={() => setActiveSection('dp')}
            onContactClick={() => scrollToSection('contacto')}
          />
        ) : (
          <DPSection 
            onSwitchToCompugrafic={() => setActiveSection('compugrafic')}
            onContactClick={() => scrollToSection('contacto')}
          />
        )}
        
        {/* Contact Section - shared between both */}
        <ContactSection activeSection={activeSection} />
      </main>

      {/* Footer */}
      <footer className="footer" data-testid="footer">
        <div className="footer-left">
          d+p | compugrafic · Zapopan, Jalisco
        </div>
        
        <div className="footer-toggle">
          <button 
            className={`toggle-btn ${activeSection === 'compugrafic' ? 'active' : ''}`}
            onClick={() => { setActiveSection('compugrafic'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            data-testid="footer-toggle-compugrafic"
          >
            Compugrafic<br /><small>GRAN FORMATO</small>
          </button>
          <button 
            className={`toggle-btn ${activeSection === 'dp' ? 'dp-active' : ''}`}
            onClick={() => { setActiveSection('dp'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            data-testid="footer-toggle-dp"
          >
            d+p<br /><small>SEÑALÉTICA / WAYFINDING</small>
          </button>
        </div>
        
        <div className="footer-right">
          <p>(33) 3813 1707</p>
          <a href="mailto:operaciones@compugrafic.com">operaciones@compugrafic.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
