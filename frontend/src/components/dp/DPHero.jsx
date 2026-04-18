const ArrowOneWay = () => (
  <div className="dp-arrow-track">
    <svg className="dp-arrow-mover" viewBox="0 0 180 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,10 L130,10 L130,160 L165,160 L90,260 L15,160 L50,160 Z" fill="#3A3835"/>
      {['O', 'N', 'E', 'W', 'A', 'Y'].map((letter, i) => (
        <text
          key={letter}
          x="90"
          y={60 + i * 20 + (i > 2 ? 5 : 0)}
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          fill="#C8C4BB"
          fontFamily="Inter, sans-serif"
          letterSpacing="3"
        >
          {letter}
        </text>
      ))}
    </svg>
  </div>
);

export const DPHero = () => (
  <section className="dp-hero">
    <div className="dp-hero-inner">
      <div className="hero-content">
        <h1 className="dp-title">
          Transformamos<br />la señalización<br />en una<br />
          <span className="highlight">experiencia<br />única.</span>
        </h1>
        <p className="dp-description">
          Fusionamos experiencia y vanguardia para orientar visualmente y conectar
          con las personas a través de un equilibrio entre estética y funcionalidad.
          Servicio integral desde el diseño creativo hasta la instalación final.
        </p>
      </div>

      <div className="dp-hero-right">
        <div className="dp-logo-center">
          <div className="dp-logo-large">
            d<span>+</span>p
          </div>
          <p className="dp-tagline">SEÑALÉTICA / WAYFINDING</p>
        </div>
      </div>
    </div>

    <ArrowOneWay />
  </section>
);
