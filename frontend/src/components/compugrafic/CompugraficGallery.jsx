import { IMAGES } from '../../data/images';

const PROJECTS = [
  { key: 'p1',  src: IMAGES.compugrafic.panamericanos,        alt: 'Lona Panamericanos 2011 - Arcos del Milenio',  category: 'Impresos Gran Formato',    title: 'Panamericanos 2011',    desc: 'Lona espectacular en edificio - Guadalajara', size: 'featured', test: 'gallery-item-1' },
  { key: 'p2',  src: IMAGES.compugrafic.urreaStand,           alt: 'Stand URREA - Expo',                            category: 'Marketing Gran Escala',   title: 'URREA',                 desc: 'Stand para exposición',                        size: '',         test: 'gallery-item-2' },
  { key: 'p3',  src: IMAGES.compugrafic.terminalZapopan,      alt: 'Liverpool - Letrero iluminado',                 category: 'Fachadas Comerciales',    title: 'Liverpool',             desc: 'Letrero volumétrico iluminado',                size: '',         test: 'gallery-item-3' },
  { key: 'p4',  src: IMAGES.compugrafic.fachadasComerciales,  alt: 'Click & Collect - Letrero iluminado',           category: 'Fachadas Comerciales',    title: 'Click & Collect',       desc: 'Letrero interior iluminado',                   size: '',         test: 'gallery-item-4' },
  { key: 'p5',  src: IMAGES.compugrafic.visualMerchandising,  alt: 'Display Visual Merchandising',                  category: 'Visual Merchandising',    title: 'Display Retail',        desc: 'Material POP para tienda',                     size: '',         test: 'gallery-item-5' },
  { key: 'p6',  src: IMAGES.compugrafic.puntoSur,             alt: 'Vallas Punto Sur',                              category: 'Marketing Gran Escala',   title: 'Punto Sur Apartments',  desc: 'Serie de vallas publicitarias',                size: 'wide',     test: 'gallery-item-6' },
  { key: 'p7',  src: IMAGES.compugrafic.valleImperial,        alt: 'Banners Valle Imperial',                        category: 'Impresos Gran Formato',   title: 'Valle Imperial',        desc: 'Banners Maples',                                size: '',         test: 'gallery-item-7' },
  { key: 'p8',  src: IMAGES.compugrafic.impresosGranFormato,  alt: 'Rotulación de Camper Tecnosur',                 category: 'Impresos Gran Formato',   title: 'Rotulación de Camper',  desc: 'Tecnosur',                                      size: '',         test: 'gallery-item-8' },
  { key: 'p9',  src: IMAGES.compugrafic.marketingGranEscala,  alt: 'Backdrop Vivo47',                               category: 'Marketing Gran Escala',   title: 'Vivo47',                desc: 'Backdrop para evento',                         size: 'wide',     test: 'gallery-item-9' },
  { key: 'p10', src: IMAGES.compugrafic.pisaCentroDatos,      alt: 'PiSA Centro de Datos - Mural',                  category: 'Visual Merchandising',    title: 'PiSA Centro de Datos',  desc: 'Mural corporativo',                            size: '',         test: 'gallery-item-10' },
  { key: 'p11', src: IMAGES.compugrafic.sneakers,             alt: 'Sneakers - Letrero iluminado',                  category: 'Fachadas Comerciales',    title: 'Sneakers',              desc: 'Letrero neón iluminado',                       size: '',         test: 'gallery-item-11' },
  { key: 'p12', src: IMAGES.compugrafic.electrolit,           alt: 'Electrolit - Rotulación de trailer',            category: 'Impresos Gran Formato',   title: 'Electrolit',            desc: 'Rotulación de trailer',                        size: 'wide',     test: 'gallery-item-12' },
  { key: 'p13', src: IMAGES.compugrafic.caliente,             alt: 'Caliente.mx - Letrero iluminado',               category: 'Fachadas Comerciales',    title: 'Caliente.mx',           desc: 'Caja de luz',                                   size: '',         test: 'gallery-item-13', bg: '#f0f0f0', imgStyle: { objectFit: 'contain', padding: '0.5rem' } },
  { key: 'p14', src: IMAGES.compugrafic.pympsa,               alt: 'PyMPSA - Letras volumétricas',                  category: 'Fachadas Comerciales',    title: 'PyMPSA',                desc: 'Letras volumétricas',                          size: '',         test: 'gallery-item-14' },
];

export const CompugraficGallery = () => (
  <section className="projects-gallery" id="proyectos" data-testid="projects-gallery">
    <div className="projects-inner">
      <span className="section-label">ALGUNOS PROYECTOS</span>
      <h2 className="section-title-dark">Proyectos que hablan<br />por nosotros</h2>
      <p className="section-description-dark">
        Cada proyecto es una oportunidad para demostrar nuestra capacidad de transformar
        ideas en realidades tangibles de alto impacto visual.
      </p>

      <div className="gallery-grid-large">
        {PROJECTS.map(p => (
          <div
            key={p.key}
            className={`gallery-item ${p.size}`.trim()}
            data-testid={p.test}
            style={p.bg ? { background: p.bg } : undefined}
          >
            <img src={p.src} alt={p.alt} style={p.imgStyle} />
            <div className="gallery-overlay">
              <span className="gallery-category">{p.category}</span>
              <h4 className="gallery-title">{p.title}</h4>
              <p className="gallery-desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
