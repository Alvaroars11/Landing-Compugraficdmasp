import { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const TOAST_DISPLAY_DURATION_MS = 4000;

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

    try {
      const response = await axios.post(`${API}/contact`, {
        ...formData,
        seccion: activeSection,
        destinoEmail: activeSection === 'dp' ? 'dmasp.ventas@compugrafic.com' : 'ventas@compugrafic.com'
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
            <a href="mailto:dmasp.ventas@compugrafic.com" className="contact-email">dmasp.ventas@compugrafic.com</a>
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
