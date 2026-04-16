import { useState, useEffect } from "react";
import "@/App.css";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Project Images
const IMAGES = {
  compugrafic: {
    // Tarjetas de servicios (hero)
    visualMerchandising: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/13bw6zwc_e2ce6ee1-bf52-4772-a31a-740cff29e843.jpg",
    fachadasComerciales: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/d75v2aw3_63c20153-8210-4195-9147-a3f9fdbb6517.jpg",
    marketingGranEscala: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/zaicytlt_987ed7dc-f65e-4a79-82f1-3226e0de0d48.jpg",
    impresosGranFormato: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/lnrdr06c_88eaedf2-085a-4ede-a818-a9ff8ada4160.JPG",
    // Galería de proyectos
    urreaStand: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/2ugmvrzf_IMG_8841.jpg",
    terminalZapopan: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/0zdxzzh6_f90c283e-9ce2-4b6d-abc8-76ec790c8923.jpg",
    valleImperial: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/1qkb6f09_514683bb-041b-46c8-b3ad-7d77f479ea45.JPG",
    puntoSur: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/l7tzhgi6_edd5ba9a-747c-4095-af0f-0afd52e7eb17.JPG",
    panamericanos: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/efng1og7_8522423918_f93c7f742a_w.jpg",
    pisaCentroDatos: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/4btsnqr9_8c38498c-3f81-4cea-820f-08fb32c3264e.JPG",
    sneakers: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/l9dm8p82_2b206da1-5ff1-4313-99c6-b2e5852888c3.jpg",
    electrolit: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/k5lywa4h_87bb4ac7-7b5b-4f40-9882-12fef68fce7f.JPG",
    caliente: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/tsg049wg_7e73d62d-0650-490b-b451-dca50faed90b.JPG",
    pympsa: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/oyalqo22_f11acaff-7b42-482f-8534-c313d290705c.JPG",
  },
  dp: {
    senaletica: "https://customer-assets.emergentagent.com/job_sitio-listo-1/artifacts/dsrfcfz1_30dfbbc9-f4cf-4a73-924b-3d4934a0928f.jpg",
  }
};

// Compugrafic Section Component
const CompugraficSection = ({ onSwitchToDP, onContactClick }) => {
  return (
    <div className="section-transition">
      {/* Hero */}
      <section className="hero" data-testid="compugrafic-hero">
        <div className="hero-content">
          <p className="location">ZAPOPAN, JALISCO · MÉXICO</p>
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

      {/* 2. Quiénes Somos - Orange Section */}
      <section className="quienes-somos" id="nosotros" data-testid="about-section">
        <div className="quienes-inner">
          <div className="quienes-content">
            <span className="quienes-label">QUIÉNES SOMOS</span>
            <h2 className="quienes-title">Más de 25 años dentro del retail</h2>
            <p className="quienes-text">
              Empresa dedicada a la impresión y publicidad principalmente en gran
              formato de material de punto de venta, banners, lonas, vallas, anuncios y cajas
              de luz. Contamos con maquinaria de tecnología de punta para impresión de
              solvente y ultravioleta, especializados en alta definición y desarrollo de
              tecnología en aplicación a POP.
            </p>
            <p className="quienes-text">
              Nuestro fuerte espíritu de servir a los clientes nos hace estar reactivos al
              rápido movimiento del mundo del retail. Diseñamos, producimos y
              entregamos asegurándonos que cada proyecto cumpla con el estándar más
              alto posible.
            </p>
          </div>
          
          <div className="quienes-stats">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">AÑOS DE EXPERIENCIA</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">SERVICIO INTEGRAL</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">MX</span>
                <span className="stat-label">COBERTURA NACIONAL</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">&infin;</span>
                <span className="stat-label">COMPROMISO DE CALIDAD</span>
              </div>
            </div>
            <span className="stats-watermark">25</span>
          </div>
        </div>
        
        <div className="porque-naranja">
          <span className="porque-label">¿POR QUÉ EL NARANJA?</span>
          <p className="porque-text">
            El naranja es el color de la felicidad, la atracción, la creatividad, el
            entusiasmo, el estímulo, la fortaleza y la resistencia. Su visión produce la
            sensación de mayor aporte de oxígeno al cerebro, generando un efecto
            vigorizante y de estimulación de la actividad mental. Valores y energía que
            definen nuestra forma de trabajar y de conectar con cada cliente y cada
            proyecto.
          </p>
        </div>
      </section>

      {/* 3. Nuestros Servicios */}
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

      {/* 4. Nuestros Proyectos */}
      <section className="projects-gallery" id="proyectos" data-testid="projects-gallery">
        <div className="projects-inner">
          <span className="section-label">ALGUNOS PROYECTOS</span>
          <h2 className="section-title-dark">Proyectos que hablan<br />por nosotros</h2>
          <p className="section-description-dark">
            Cada proyecto es una oportunidad para demostrar nuestra capacidad de transformar
            ideas en realidades tangibles de alto impacto visual.
          </p>
          
          <div className="gallery-grid-large">
            <div className="gallery-item featured" data-testid="gallery-item-1">
              <img src={IMAGES.compugrafic.panamericanos} alt="Lona Panamericanos 2011 - Arcos del Milenio" />
              <div className="gallery-overlay">
                <span className="gallery-category">Impresos Gran Formato</span>
                <h4 className="gallery-title">Panamericanos 2011</h4>
                <p className="gallery-desc">Lona espectacular en edificio - Guadalajara</p>
              </div>
            </div>
            <div className="gallery-item" data-testid="gallery-item-2">
              <img src={IMAGES.compugrafic.urreaStand} alt="Stand URREA - Expo" />
              <div className="gallery-overlay">
                <span className="gallery-category">Marketing Gran Escala</span>
                <h4 className="gallery-title">URREA</h4>
                <p className="gallery-desc">Stand para exposición</p>
              </div>
            </div>
            <div className="gallery-item" data-testid="gallery-item-3">
              <img src={IMAGES.compugrafic.terminalZapopan} alt="Liverpool - Letrero iluminado" />
              <div className="gallery-overlay">
                <span className="gallery-category">Fachadas Comerciales</span>
                <h4 className="gallery-title">Liverpool</h4>
                <p className="gallery-desc">Letrero volumétrico iluminado</p>
              </div>
            </div>
            <div className="gallery-item" data-testid="gallery-item-4">
              <img src={IMAGES.compugrafic.fachadasComerciales} alt="Click & Collect - Letrero iluminado" />
              <div className="gallery-overlay">
                <span className="gallery-category">Fachadas Comerciales</span>
                <h4 className="gallery-title">Click & Collect</h4>
                <p className="gallery-desc">Letrero interior iluminado</p>
              </div>
            </div>
            <div className="gallery-item" data-testid="gallery-item-5">
              <img src={IMAGES.compugrafic.visualMerchandising} alt="Display Visual Merchandising" />
              <div className="gallery-overlay">
                <span className="gallery-category">Visual Merchandising</span>
                <h4 className="gallery-title">Display Retail</h4>
                <p className="gallery-desc">Material POP para tienda</p>
              </div>
            </div>
            <div className="gallery-item wide" data-testid="gallery-item-6">
              <img src={IMAGES.compugrafic.puntoSur} alt="Vallas Punto Sur" />
              <div className="gallery-overlay">
                <span className="gallery-category">Marketing Gran Escala</span>
                <h4 className="gallery-title">Punto Sur Apartments</h4>
                <p className="gallery-desc">Serie de vallas publicitarias</p>
              </div>
            </div>
            <div className="gallery-item" data-testid="gallery-item-7">
              <img src={IMAGES.compugrafic.valleImperial} alt="Banners Valle Imperial" />
              <div className="gallery-overlay">
                <span className="gallery-category">Impresos Gran Formato</span>
                <h4 className="gallery-title">Valle Imperial</h4>
                <p className="gallery-desc">Banners Maples</p>
              </div>
            </div>
            <div className="gallery-item" data-testid="gallery-item-8">
              <img src={IMAGES.compugrafic.impresosGranFormato} alt="Rotulación de Camper Tecnosur" />
              <div className="gallery-overlay">
                <span className="gallery-category">Impresos Gran Formato</span>
                <h4 className="gallery-title">Rotulación de Camper</h4>
                <p className="gallery-desc">Tecnosur</p>
              </div>
            </div>
            <div className="gallery-item wide" data-testid="gallery-item-9">
              <img src={IMAGES.compugrafic.marketingGranEscala} alt="Backdrop Vivo47" />
              <div className="gallery-overlay">
                <span className="gallery-category">Marketing Gran Escala</span>
                <h4 className="gallery-title">Vivo47</h4>
                <p className="gallery-desc">Backdrop para evento</p>
              </div>
            </div>
            <div className="gallery-item" data-testid="gallery-item-10">
              <img src={IMAGES.compugrafic.pisaCentroDatos} alt="PiSA Centro de Datos - Mural" />
              <div className="gallery-overlay">
                <span className="gallery-category">Visual Merchandising</span>
                <h4 className="gallery-title">PiSA Centro de Datos</h4>
                <p className="gallery-desc">Mural corporativo</p>
              </div>
            </div>
            <div className="gallery-item" data-testid="gallery-item-11">
              <img src={IMAGES.compugrafic.sneakers} alt="Sneakers - Letrero iluminado" />
              <div className="gallery-overlay">
                <span className="gallery-category">Fachadas Comerciales</span>
                <h4 className="gallery-title">Sneakers</h4>
                <p className="gallery-desc">Letrero neón iluminado</p>
              </div>
            </div>
            <div className="gallery-item wide" data-testid="gallery-item-12">
              <img src={IMAGES.compugrafic.electrolit} alt="Electrolit - Rotulación de trailer" />
              <div className="gallery-overlay">
                <span className="gallery-category">Impresos Gran Formato</span>
                <h4 className="gallery-title">Electrolit</h4>
                <p className="gallery-desc">Rotulación de trailer</p>
              </div>
            </div>
            <div className="gallery-item" data-testid="gallery-item-13" style={{ background: '#f0f0f0' }}>
              <img src={IMAGES.compugrafic.caliente} alt="Caliente.mx - Letrero iluminado" style={{ objectFit: 'contain', padding: '0.5rem' }} />
              <div className="gallery-overlay">
                <span className="gallery-category">Fachadas Comerciales</span>
                <h4 className="gallery-title">Caliente.mx</h4>
                <p className="gallery-desc">Caja de luz</p>
              </div>
            </div>
            <div className="gallery-item" data-testid="gallery-item-14">
              <img src={IMAGES.compugrafic.pympsa} alt="PyMPSA - Letras volumétricas" />
              <div className="gallery-overlay">
                <span className="gallery-category">Fachadas Comerciales</span>
                <h4 className="gallery-title">PyMPSA</h4>
                <p className="gallery-desc">Letras volumétricas</p>
              </div>
            </div>
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
          
          <div className="dp-hero-right">
            <div className="dp-logo-center">
              <div className="dp-logo-large">
                d<span>+</span>p
              </div>
              <p className="dp-tagline">SEÑALÉTICA / WAYFINDING</p>
            </div>
            <div className="dp-grid-pictogram">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Dense grid lines */}
                {[...Array(17)].map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 12.5} x2="200" y2={i * 12.5} stroke="#9E9A93" strokeWidth="0.5" opacity="0.35"/>
                ))}
                {[...Array(17)].map((_, i) => (
                  <line key={`v${i}`} x1={i * 12.5} y1="0" x2={i * 12.5} y2="200" stroke="#9E9A93" strokeWidth="0.5" opacity="0.35"/>
                ))}
                {/* Red accent blocks - larger like reference */}
                <rect x="0" y="25" width="37.5" height="25" fill="#E8391A" opacity="0.2"/>
                <rect x="62.5" y="12.5" width="25" height="12.5" fill="#E8391A" opacity="0.15"/>
                <rect x="87.5" y="50" width="37.5" height="37.5" fill="#E8391A" opacity="0.18"/>
                <rect x="150" y="0" width="25" height="12.5" fill="#E8391A" opacity="0.12"/>
                <rect x="0" y="150" width="37.5" height="37.5" fill="#E8391A" opacity="0.2"/>
                <rect x="162.5" y="137.5" width="37.5" height="25" fill="#E8391A" opacity="0.18"/>
                {/* Walking stick figure - matching reference */}
                <g className="walking-figure">
                  {/* Head - filled solid */}
                  <circle cx="100" cy="32" r="14" fill="#8A8580" opacity="0.7"/>
                  {/* Neck + Torso - thick stroke */}
                  <line x1="100" y1="46" x2="100" y2="105" stroke="#8A8580" strokeWidth="5" strokeLinecap="round" opacity="0.7"/>
                  {/* Left arm - down close to body */}
                  <g className="walk-arm-l-group">
                    <line x1="100" y1="60" x2="88" y2="95" stroke="#8A8580" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
                  </g>
                  {/* Right arm - down close to body */}
                  <g className="walk-arm-r-group">
                    <line x1="100" y1="60" x2="112" y2="95" stroke="#8A8580" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
                  </g>
                  {/* Left leg - stride */}
                  <g className="walk-leg-l-group">
                    <line x1="100" y1="105" x2="80" y2="170" stroke="#8A8580" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
                  </g>
                  {/* Right leg - stride */}
                  <g className="walk-leg-r-group">
                    <line x1="100" y1="105" x2="120" y2="170" stroke="#8A8580" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* D+P Project Showcase */}
      <section className="dp-showcase" data-testid="dp-showcase">
        <div className="dp-showcase-inner">
          <div className="dp-showcase-image">
            <img src={IMAGES.dp.senaletica} alt="Señalética HOMBRE - Letrero iluminado" />
          </div>
          <div className="dp-showcase-content">
            <span className="section-label">PROYECTO DESTACADO</span>
            <h3 className="dp-showcase-title">Señalética Iluminada</h3>
            <p className="dp-showcase-text">
              Diseño y fabricación de señalética con iluminación LED integrada. 
              Combinamos materiales como OSB y acrílico para crear piezas únicas 
              que destacan en cualquier espacio comercial.
            </p>
            <ul className="dp-showcase-list">
              <li>Diseño personalizado</li>
              <li>Iluminación LED de bajo consumo</li>
              <li>Materiales sustentables</li>
              <li>Instalación profesional</li>
            </ul>
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
        <div className="logo-toggle">
          <button 
            className={`logo-btn ${activeSection === 'compugrafic' ? 'logo-active-cg' : ''}`}
            onClick={() => { setActiveSection('compugrafic'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            data-testid="logo-compugrafic"
          >
            compugrafic
          </button>
          <span className="logo-divider">|</span>
          <button 
            className={`logo-btn ${activeSection === 'dp' ? 'logo-active-dp' : ''}`}
            onClick={() => { setActiveSection('dp'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            data-testid="logo-dp"
          >
            d+p
          </button>
        </div>
        
        <nav className="nav-links">
          {activeSection === 'compugrafic' ? (
            <>
              <a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }} className="nav-link">NOSOTROS</a>
              <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }} className="nav-link">SERVICIOS</a>
              <a href="#proyectos" onClick={(e) => { e.preventDefault(); scrollToSection('proyectos'); }} className="nav-link">PROYECTOS</a>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }} className="nav-link">CONTACTO</a>
            </>
          ) : (
            <>
              <a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }} className="nav-link">QUIÉNES SOMOS</a>
              <a href="#proceso" onClick={(e) => { e.preventDefault(); scrollToSection('proceso'); }} className="nav-link">PROCESO</a>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }} className="nav-link">CONTACTO</a>
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

      {/* Floating Toggle - always visible */}
      <div className="floating-toggle" data-testid="floating-toggle">
        <button 
          className={`floating-toggle-btn ${activeSection === 'compugrafic' ? 'active' : ''}`}
          onClick={() => { setActiveSection('compugrafic'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          data-testid="footer-toggle-compugrafic"
        >
          Compugrafic<br /><small>GRAN FORMATO</small>
        </button>
        <button 
          className={`floating-toggle-btn ${activeSection === 'dp' ? 'dp-active' : ''}`}
          onClick={() => { setActiveSection('dp'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          data-testid="footer-toggle-dp"
        >
          d+p<br /><small>SEÑALÉTICA / WAYFINDING</small>
        </button>
      </div>

      {/* Footer */}
      <footer className="footer" data-testid="footer">
        <div className="footer-left">
          compugrafic | d+p · Zapopan, Jalisco
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
