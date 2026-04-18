export const CompugraficHero = () => (
  <section className="hero-wrapper">
    <section className="hero" data-testid="compugrafic-hero">
      <div className="hero-content">
        <p className="location">ZAPOPAN, JALISCO · MÉXICO</p>
        <h1 className="hero-title">
          <span className="watermark">compugrafic</span>
          Hacemos<br />que las<br />ideas<br />
          <span className="highlight">sucedan.</span>
        </h1>
        <p className="hero-description">
          Diseñamos, producimos y entregamos cada proyecto con el estándar más alto.
          Reactivos al ritmo del retail, siempre.
        </p>
        <div className="experience-badge">
          <span className="experience-number">25+</span>
          <span className="experience-text">AÑOS DE<br />EXPERIENCIA</span>
        </div>
      </div>

      <div className="services-grid">
        {[
          { id: 'visual', num: '01', title: <>Visual<br />Merchandising</>, cls: 'orange-1', test: 'service-visual' },
          { id: 'fachadas', num: '02', title: <>Fachadas<br />Comerciales</>, cls: 'orange-2', test: 'service-fachadas' },
          { id: 'marketing', num: '03', title: <>Marketing<br />Gran Escala</>, cls: 'orange-3', test: 'service-marketing' },
          { id: 'impresos', num: '04', title: <>Impresos<br />Gran Formato</>, cls: 'orange-4', test: 'service-impresos' },
        ].map(card => (
          <div
            key={card.id}
            className={`service-card ${card.cls}`}
            data-testid={card.test}
            onClick={() => document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="service-number">{card.num}</span>
            <h3 className="service-title">{card.title}</h3>
            <span className="service-arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  </section>
);
