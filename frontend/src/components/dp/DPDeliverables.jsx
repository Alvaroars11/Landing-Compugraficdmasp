const DELIVERABLES = [
  { title: 'Manual Digital',                              format: 'PDF',            text: 'Especificaciones técnicas, materialidad, dimensiones, cuantificación y diseño final aprobado por cliente.' },
  { title: 'Archivos Editables',                           format: 'PDF editable',   text: 'En tamaño real para producción directa.' },
  { title: 'Sembrado',                                     format: 'PDF · DWG',      text: 'Ubicación precisa de señalización en planos arquitectónicos.' },
  { title: 'Cuantificación',                               format: 'PDF · XLS',      text: 'Estimación por área y/o etapas de proyecto.' },
  { title: 'Cotización de Fabricación e Instalación',      format: 'PDF',            text: 'Basada en el proyecto ejecutivo aprobado.', full: true },
];

export const DPDeliverables = () => (
  <section className="dp-deliverables" id="entregables" data-testid="deliverables-section">
    <div className="dp-deliverables-inner">
      <div className="dp-deliverables-left">
        <span className="dp-del-label">ENTREGABLES</span>
        <h2 className="dp-del-title">Proyecto Ejecutivo de<br />Señalización</h2>
        <p className="dp-del-text">
          Cada proyecto se entrega con documentación completa: manual digital,
          archivos editables en tamaño real, sembrado en planos arquitectónicos,
          cuantificación por etapas y cotización de fabricación e instalación.
        </p>

        <div className="dp-del-reqs">
          <span className="dp-del-reqs-label">REQUERIMIENTOS DEL CLIENTE</span>
          <p className="dp-del-text">
            Planos arquitectónicos / renders actualizados · Sistema contra incendios ·
            Manual de marca (branding, tipografía, lineamientos de diseño).
          </p>
        </div>
      </div>

      <div className="dp-deliverables-right">
        <div className="dp-del-grid">
          {DELIVERABLES.map(d => (
            <div key={d.title} className={`dp-del-item ${d.full ? 'dp-del-item-full' : ''}`.trim()}>
              <h4 className="dp-del-item-title">{d.title}</h4>
              <span className="dp-del-format">{d.format}</span>
              <p className="dp-del-item-text">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
