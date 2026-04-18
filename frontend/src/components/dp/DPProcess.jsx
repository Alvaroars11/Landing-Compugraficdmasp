const STEPS = [
  { n: 1, title: 'Diagnóstico Estratégico',        text: 'Entendemos tus objetivos y retos operativos para alinear función con visión estética.' },
  { n: 2, title: 'Integración de ADN de Marca',    text: 'Analizamos tu identidad visual para que cada elemento sea extensión coherente de tu marca.' },
  { n: 3, title: 'Análisis de Flujos',              text: 'Estudiamos la distribución física, recorridos naturales y puntos de decisión crítica.' },
  { n: 4, title: 'Sembrado Estratégico',            text: 'Ubicamos cada pieza en el plano con precisión para garantizar orientación continua.' },
  { n: 5, title: 'Definición de Tipologías',        text: 'Tótems exteriores, directorios, identificadores de destino y normativa de Protección Civil.' },
  { n: 6, title: 'Cuantificación y Alcance',        text: 'Volumetría precisa de todos los elementos, con control total sobre producción y presupuesto.' },
  { n: 7, title: 'Diseño Técnico-Creativo',         text: 'Materialidad, ergonomía visual, dimensionamiento y detalles constructivos finales.' },
];

export const DPProcess = () => (
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
      <p className="process-note">
        Este proceso aplica para proyectos integrales que inician desde cero.
        Si tu proyecto ya cuenta con un diseño definido y únicamente requieres
        fabricación e instalación, ¡contáctanos
        para una cotización directa!
      </p>

      <div className="process-steps">
        {STEPS.map(step => (
          <div key={step.n} className="process-step">
            <span className="step-number">{step.n}</span>
            <h4 className="step-title">{step.title}</h4>
            <p className="step-text">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
