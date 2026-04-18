export const FloatingToggle = ({ activeSection, onChange }) => (
  <div className="floating-toggle" data-testid="floating-toggle">
    <button
      className={`floating-toggle-btn ${activeSection === 'compugrafic' ? 'active' : ''}`}
      onClick={() => onChange('compugrafic')}
      data-testid="footer-toggle-compugrafic"
    >
      Compugrafic<br /><small>GRAN FORMATO</small>
    </button>
    <button
      className={`floating-toggle-btn ${activeSection === 'dp' ? 'dp-active' : ''}`}
      onClick={() => onChange('dp')}
      data-testid="footer-toggle-dp"
    >
      d+p<br /><small>SEÑALÉTICA / WAYFINDING</small>
    </button>
  </div>
);
