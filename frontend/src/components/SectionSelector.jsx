export const SectionSelector = ({ onSelect }) => (
  <div className="section-selector" data-testid="section-selector">
    <button
      type="button"
      className="selector-panel selector-cg"
      onClick={() => onSelect('compugrafic')}
      data-testid="selector-compugrafic"
    >
      <div className="selector-content">
        <span className="selector-label">GRAN FORMATO · RETAIL</span>
        <h1 className="selector-logo">compugrafic</h1>
        <p className="selector-desc">
          Impresión en gran formato, visual merchandising,
          fachadas comerciales y marketing a gran escala.
        </p>
        <span className="selector-cta">
          ENTRAR <span className="selector-arrow">→</span>
        </span>
      </div>
    </button>

    <button
      type="button"
      className="selector-panel selector-dp"
      onClick={() => onSelect('dp')}
      data-testid="selector-dp"
    >
      <div className="selector-content">
        <span className="selector-label">SEÑALÉTICA · WAYFINDING</span>
        <h1 className="selector-logo">d<span>+</span>p</h1>
        <p className="selector-desc">
          Soluciones integrales de señalización y wayfinding
          desde el diseño creativo hasta la instalación final.
        </p>
        <span className="selector-cta">
          ENTRAR <span className="selector-arrow">→</span>
        </span>
      </div>
    </button>
  </div>
);
