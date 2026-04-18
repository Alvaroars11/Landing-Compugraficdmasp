export const DPAbout = () => (
  <section className="dp-quienes" id="nosotros" data-testid="dp-about-section">
    <div className="dp-quienes-inner">
      <div className="dp-quienes-left">
        <span className="dp-quienes-label">QUIÉNES SOMOS</span>
        <h2 className="dp-quienes-title">El departamento<br />especializado en<br /><em>Señalética y Wayfinding</em></h2>
        <p className="dp-quienes-text">
          Convertimos la señalización en una experiencia visual única. Nos
          enfocamos en soluciones integrales de señalética y wayfinding para
          proyectos a gran escala en los sectores hotelero, industrial, habitacional,
          corporativo, hospitalario, educativo y de movilidad vehicular.
        </p>
      </div>
      <div className="dp-quienes-right">
        <div className="dp-quienes-line"></div>
        <div className="dp-quienes-content">
          <span className="dp-quienes-sublabel">¿QUÉ NOS HACE DIFERENTES?</span>
          <p className="dp-quienes-subtext">Cubrimos el ciclo completo de cada proyecto:</p>
          <ul className="dp-quienes-list">
            <li>Planeación, diseño y desarrollo</li>
            <li>Manufactura</li>
            <li>Instalación en sitio</li>
          </ul>
          <p className="dp-quienes-subtext" style={{ marginTop: '2rem' }}>
            Creamos sistemas de comunicación visual que se integran
            perfectamente con el concepto arquitectónico y la identidad
            estética de cada desarrollo. No solo orientamos a las personas en
            el espacio — establecemos una conexión con ellas a través del
            equilibrio entre estética y funcionalidad.
          </p>
          <p className="dp-quienes-subtext" style={{ marginTop: '1.5rem' }}>
            Nuestra fortaleza es ofrecer un servicio que respeta la identidad
            de tu espacio, con manufactura que garantiza durabilidad y
            calidad en cada pieza.
          </p>
        </div>
      </div>
    </div>
  </section>
);
