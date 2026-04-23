import {
  Ruler,
  MoveRight,
  Smile,
  ShieldCheck,
  Eye,
  Palette,
  Accessibility,
  Award,
  Gem,
  Fingerprint,
  Wrench,
  MapPin,
  HardHat,
  Truck,
} from 'lucide-react';

const Pictogram = ({ Icon }) => (
  <div className="dp-picto">
    <Icon size={44} strokeWidth={1.3} />
  </div>
);

// ============ WAYFINDING ============
const WAYFINDING_PILLARS = [
  { id: 'diseno',    Icon: Ruler,        title: 'Diseño a medida',       text: 'Soluciones desarrolladas para las necesidades específicas de cada cliente, espacio y tipo de usuario.' },
  { id: 'flujo',     Icon: MoveRight,    title: 'Flujo eficiente',        text: 'Facilitamos el movimiento de personas en grandes complejos: hoteles, hospitales, universidades, plazas y más.' },
  { id: 'estres',    Icon: Smile,        title: 'Reducción de estrés',    text: 'Experiencia fluida que orienta con claridad, minimizando la confusión y la incertidumbre del usuario.' },
  { id: 'materiales', Icon: ShieldCheck, title: 'Materiales de calidad',  text: 'Insumos duraderos y acabados profesionales que garantizan la vida útil y vigencia del sistema.' },
];

const WAYFINDING_BENEFITS = [
  { id: 'facil',      Icon: Eye,            title: 'Fácil comprensión',       text: 'Señalización clara y concisa que reduce la confusión desde el primer contacto visual.' },
  { id: 'diseno2',    Icon: Palette,        title: 'Diseño',                   text: 'Visualmente atractivo y coherente con la identidad de tu marca.' },
  { id: 'accesible',  Icon: Accessibility,  title: 'Accesibilidad universal',  text: 'Experiencia mejorada para todos tus clientes y colaboradores, sin excepciones.' },
];

// ============ FABRICACIÓN ============
const FABRICACION_BENEFITS = [
  { id: 'experiencia', Icon: Award,        title: 'Experiencia y profesionalismo', text: 'Años perfeccionando técnicas de manufactura que garantizan resultados impecables en cada proyecto.' },
  { id: 'calidad',     Icon: Gem,          title: 'Calidad y durabilidad',          text: 'Materiales de alta calidad y métodos avanzados que resisten las condiciones ambientales más exigentes.' },
  { id: 'braille',     Icon: Fingerprint,  title: 'Señalética inclusiva (Braille)', text: 'Piezas personalizadas con Braille y sistemas táctiles que garantizan accesibilidad para todos los usuarios.' },
];

// ============ INSTALACIÓN ============
const INSTALACION_BENEFITS = [
  { id: 'equipo',   Icon: HardHat,  title: 'Equipo especializado',     text: 'Personal certificado con herramienta profesional que ejecuta cada montaje con precisión y seguridad.' },
  { id: 'nacional', Icon: MapPin,   title: 'Cobertura nacional',        text: 'Atendemos proyectos en toda la República Mexicana coordinando logística y tiempos de obra.' },
  { id: 'llave',    Icon: Wrench,   title: 'Proyecto llave en mano',    text: 'Coordinamos transporte, montaje y ajustes finales para entregar cada pieza lista para operar.' },
];

// ============ COMPONENTES ============
const ServiceHeader = ({ num, title, description }) => (
  <div className="dp-service-header">
    <span className="dp-service-num">{num}</span>
    <h3 className="dp-service-big-title">{title}</h3>
    <p className="dp-service-description">{description}</p>
  </div>
);

const PictogramGrid = ({ label, items, columns = 4 }) => (
  <div className="dp-picto-block">
    <span className="dp-picto-label">{label}</span>
    <div className={`dp-picto-grid dp-picto-grid-${columns}`}>
      {items.map(item => (
        <div key={item.id} className="dp-picto-item">
          <Pictogram Icon={item.Icon} />
          <h4 className="dp-picto-title">{item.title}</h4>
          <p className="dp-picto-text">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export const DPServices = () => (
  <section className="dp-services-extended" id="servicios" data-testid="dp-services-section">
    <div className="dp-services-extended-inner">
      <span className="section-label">NUESTROS SERVICIOS</span>
      <h2 className="dp-services-main-title">
        Tres pilares que<br />garantizan resultados
      </h2>
      <p className="dp-services-main-subtitle">
        Soluciones modulares de señalética, pensadas para adaptarse a la escala y alcance de cada proyecto.
      </p>

      {/* WAYFINDING */}
      <article className="dp-service-block" data-testid="service-wayfinding">
        <ServiceHeader
          num="01"
          title="Wayfinding"
          description="Diseño de orientación que hace fluir cualquier espacio. Creamos sistemas visuales claros, intuitivos y accesibles que guían a cada persona por tu instalación, reducen la confusión y refuerzan la identidad de tu marca. Desde plazas, desarrollos verticales y horizontales, universidades, viales, hospitales, hoteles, escuelas, aeropuertos y más —cada solución se desarrolla a medida con un enfoque universal, estético y duradero."
        />
        <PictogramGrid
          label="PERSONALIZACIÓN Y OPTIMIZACIÓN DE ESPACIOS"
          items={WAYFINDING_PILLARS}
          columns={4}
        />
        <PictogramGrid
          label="BENEFICIOS DEL WAYFINDING"
          items={WAYFINDING_BENEFITS}
          columns={3}
        />
      </article>

      {/* FABRICACIÓN */}
      <article className="dp-service-block" data-testid="service-fabricacion">
        <ServiceHeader
          num="02"
          title="Fabricación"
          description="Manufactura propia con estándares de calidad y durabilidad. Producimos cada pieza con materiales y acabados seleccionados por proyecto, garantizando precisión dimensional, consistencia cromática y resistencia a las condiciones de uso."
        />
        <PictogramGrid
          label="LO QUE NOS DISTINGUE"
          items={FABRICACION_BENEFITS}
          columns={3}
        />
      </article>

      {/* INSTALACIÓN */}
      <article className="dp-service-block" data-testid="service-instalacion">
        <ServiceHeader
          num="03"
          title="Instalación"
          description="Colocación profesional en sitio con equipo especializado y cobertura nacional. Coordinamos logística, tiempos de obra y montaje final para entregar cada proyecto listo para operar, con respaldo post-instalación."
        />
        <PictogramGrid
          label="COBERTURA Y SERVICIO"
          items={INSTALACION_BENEFITS}
          columns={3}
        />
      </article>
    </div>
  </section>
);
