import { useState, useEffect } from 'react';

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const TOAST_DISPLAY_DURATION_MS = 4000;

const SECTION_CONFIG = {
  compugrafic: {
    subject: 'Nuevo contacto — Compugrafic (Gran Formato)',
    email: 'ventas@compugrafic.com',
    label: 'Compugrafic',
  },
  dp: {
    subject: 'Nuevo contacto — D+P (Señalética / Wayfinding)',
    email: 'dmasp.ventas@compugrafic.com',
    label: 'D+P',
  },
};

export const ContactSection = ({ activeSection }) => {
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

    const config = SECTION_CONFIG[activeSection] ?? SECTION_CONFIG.compugrafic;

    const body = new FormData();
    body.append('access_key', WEB3FORMS_KEY);
    body.append('subject', config.subject);
    body.append('from_name', `${formData.nombre} — ${config.label}`);
    body.append('name', formData.nombre);
    body.append('email', formData.email);
    body.append('empresa', formData.empresa || '—');
    body.append('seccion', config.label);
    body.append('destino', config.email);
    body.append('message', formData.mensaje);
    body.append('botcheck', '');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body,
      });

      const data = await response.json();

      if (data.success) {
        setToast({
          message: '¡Gracias! Tu mensaje fue enviado. Te contactaremos pronto.',
          type: 'success',
        });
        setFormData({ nombre: '', email: '', empresa: '', mensaje: '' });
      } else {
        setToast({
          message: data.message || 'Error al enviar mensaje. Intenta de nuevo.',
          type: 'error',
        });
      }
    } catch (error) {
      setToast({
        message: 'Error al enviar mensaje. Intenta de nuevo.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), TOAST_DISPLAY_DURATION_MS);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <section
      className={`contact-section ${activeSection === 'dp' ? 'dp-active-contact' : ''}`}
      id="contacto"
      data-testid="contact-section"
    >
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
          {activeSection === 'dp' ? (
            <>
              <a
                href="https://instagram.com/dmasp.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-email contact-instagram"
                data-testid="dp-instagram"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content' }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flexShrink: 0 }}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @dmasp.mx
              </a>
              <a href="mailto:dmasp.ventas@compugrafic.com" className="contact-email">dmasp.ventas@compugrafic.com</a>
            </>
          ) : (
            <a href="mailto:ventas@compugrafic.com" className="contact-email">ventas@compugrafic.com</a>
          )}
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
          {/* Honeypot anti-spam */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
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
        <div
          className={`toast ${toast.type} ${activeSection === 'dp' ? 'toast-dp' : ''}`.trim()}
          data-testid="toast-message"
        >
          {toast.message}
        </div>
      )}
    </section>
  );
};
