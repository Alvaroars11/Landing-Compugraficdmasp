const SERVICES = [
  {
    icon: '📋',
    title: 'Visual Merchandising',
    text: 'Desarrollamos estrategias visuales de alto impacto para puntos de venta, diseñando y produciendo materiales que guían la decisión de compra, refuerzan la identidad de marca y maximizan la experiencia del consumidor en el piso de venta.',
    items: [
      'Material de display y POP',
      'Banners y lonas comerciales',
      'Utilería efímera para temporadas',
      'Estilismo y ambientación de maniquíes',
      'Guías de montaje y planogramas',
    ],
  },
  {
    icon: '🏢',
    title: 'Fachadas Comerciales',
    text: 'Transformamos la imagen exterior de tu negocio integrando materiales de vanguardia, acabados premium y elementos volumétricos que comunican el posicionamiento de tu marca desde la primera impresión, generando diferenciación y presencia en el mercado.',
    items: [
      'Letras volumétricas iluminadas',
      'Revestimientos y texturas combinadas',
      'Lonas de alta resolución UV',
      'Cajas de luz y anuncios luminosos',
      'Aplicación de identidad visual en fachada',
    ],
  },
  {
    icon: '📊',
    title: 'Marketing a Gran Escala',
    text: 'Gestionamos de forma integral la producción de espacios comerciales y de exhibición, desde el concepto creativo hasta la instalación final. Nos encargamos de cada detalle para que tu marca se presente con la mayor profesionalidad en cualquier foro o exposición.',
    items: [
      'Diseño, fabricación e instalación de stands',
      'Showrooms y espacios de exhibición',
      'Producción para expos y ferias nacionales',
      'Cobertura en toda la República Mexicana',
      'Proyecto llave en mano',
    ],
  },
  {
    icon: '🖨️',
    title: 'Impresos Gran Formato',
    text: 'Producimos impresiones de gran formato con tecnología UV y solvente de última generación, garantizando colores precisos, alta definición y acabados duraderos. Cada pieza es una herramienta de comunicación que posiciona tu marca con contundencia visual.',
    items: [
      'Vallas, espectaculares y anuncios exteriores',
      'Banners, lonas y cenefas instore',
      'Cajas backlight de alta definición',
      'Foam boards y material rígido',
      'Impresión UV y solvente de alta resolución',
    ],
  },
];

export const CompugraficServices = () => (
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
        {SERVICES.map(service => (
          <div key={service.title} className="detail-card">
            <div className="detail-card-icon">{service.icon}</div>
            <h4 className="detail-card-title">{service.title}</h4>
            <p className="detail-card-text">{service.text}</p>
            <ul className="detail-card-list">
              {service.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
