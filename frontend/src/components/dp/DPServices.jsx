const SERVICES = [
  {
    n: 1,
    title: 'Wayfinding',
    text: 'Diseño de orientación que hace fluir cualquier espacio. Creamos sistemas visuales claros, intuitivos y accesibles que guían a cada persona por tu instalación, reducen la confusión y refuerzan la identidad de tu marca. Desde plazas, desarrollos verticales y horizontales, universidades, viales, hospitales, hoteles, escuelas, aeropuertos y más —cada solución se desarrolla a medida con un enfoque universal, estético y duradero.',
  },
  {
    n: 2,
    title: 'Fabricación',
    text: 'Manufactura propia con estándares de calidad y durabilidad. Producimos cada pieza con materiales y acabados seleccionados por proyecto, garantizando precisión dimensional, consistencia cromática y resistencia a las condiciones de uso.',
  },
  {
    n: 3,
    title: 'Instalación',
    text: 'Colocación profesional en sitio con equipo especializado y cobertura nacional. Coordinamos logística, tiempos de obra y montaje final para entregar cada proyecto listo para operar, con respaldo post-instalación.',
  },
];

export const DPServices = () => (
  <section className="dp-services-block" id="servicios" data-testid="dp-services-section">
    <div className="dp-services-inner">
      <span className="section-label">NUESTROS SERVICIOS</span>
      <h2 className="dp-services-title">
        Tres pilares que<br />garantizan resultados
      </h2>
      <p className="dp-services-subtitle">
        De principio a fin: concepto, manufactura e instalación bajo un mismo equipo.
      </p>

      <div className="dp-services-grid">
        {SERVICES.map(service => (
          <div key={service.title} className="dp-service-card">
            <span className="dp-service-number">{String(service.n).padStart(2, '0')}</span>
            <h3 className="dp-service-title">{service.title}</h3>
            <p className="dp-service-text">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
