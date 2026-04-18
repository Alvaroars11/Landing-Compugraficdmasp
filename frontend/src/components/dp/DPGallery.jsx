import { IMAGES } from '../../data/images';

const OVERLAY_STYLE = { background: 'rgba(232, 57, 26, 0.65)' };

const PROJECTS = [
  { key: 'd1',  src: IMAGES.dp.navesIndustriales, alt: 'Naves Industriales - Tótem direccional',         category: 'Industrial',        title: 'Naves Industriales',         desc: 'Tótem direccional exterior',                    size: 'featured', test: 'dp-gallery-1' },
  { key: 'd2',  src: IMAGES.dp.bicicletas,        alt: 'Bicicletas - Señalización estacionamiento',      category: 'Habitacional',      title: 'Estacionamiento',            desc: 'Señalización vertical en muro',                 size: '',         test: 'dp-gallery-2' },
  { key: 'd3',  src: IMAGES.dp.banos,              alt: 'Señalización baños',                              category: 'Corporativo',       title: 'Sanitarios',                 desc: 'Señalización tipo bandera',                     size: '',         test: 'dp-gallery-3' },
  { key: 'd4',  src: IMAGES.dp.jardinBotanico,    alt: 'Jardín Botánico - Tótems de madera',             category: 'Espacios Públicos', title: 'Jardín Botánico',            desc: 'Sistema de tótems en madera',                   size: 'wide',     test: 'dp-gallery-4' },
  { key: 'd5',  src: IMAGES.dp.almacen,            alt: 'Almacén - Señalización de racks',                category: 'Industrial',        title: 'Almacén',                    desc: 'Señalización aérea de racks',                   size: 'wide',     test: 'dp-gallery-5', imgStyle: { objectPosition: 'center 35%' } },
  { key: 'd6',  src: IMAGES.dp.letraM,              alt: 'Letra volumétrica M - Nave industrial',          category: 'Industrial',        title: 'Identidad de Edificio',      desc: 'Letra volumétrica en nave industrial',          size: '',         test: 'dp-gallery-6', imgStyle: { objectPosition: 'center 30%' } },
  { key: 'd7',  src: IMAGES.dp.piso2,              alt: 'Piso 2 - Señalización hotelera',                 category: 'Hotelero',          title: 'Señalización por Nivel',     desc: 'Número volumétrico de piso',                    size: '',         test: 'dp-gallery-7' },
  { key: 'd8',  src: IMAGES.dp.worldHotels,        alt: 'WorldHotels Acueducto',                           category: 'Hotelero',          title: 'WorldHotels Acueducto',      desc: 'Fachada e identidad exterior',                  size: 'wide',     test: 'dp-gallery-8', imgStyle: { objectPosition: 'center 30%' } },
  { key: 'd9',  src: IMAGES.dp.pisoIluminado,     alt: 'Señalización de piso iluminada',                 category: 'Corporativo',       title: 'Señalización Sanitaria',     desc: 'Placa iluminada con LED',                       size: '',         test: 'dp-gallery-9' },
  { key: 'd10', src: IMAGES.dp.paloAlto,            alt: 'Palo Alto Italoamericano',                        category: 'Restaurantero',     title: 'Palo Alto',                  desc: 'Letras volumétricas en fachada',                size: '',         test: 'dp-gallery-10', imgStyle: { objectPosition: 'left center' } },
  { key: 'd11', src: IMAGES.dp.worldHotelsRoof,   alt: 'WorldHotels - Letrero en azotea',                category: 'Hotelero',          title: 'WorldHotels',                desc: 'Letras volumétricas en azotea',                 size: 'wide',     test: 'dp-gallery-11' },
  { key: 'd12', src: IMAGES.dp.miMacro,             alt: 'Mi Macro Periférico - Estación Los Conejos',     category: 'Movilidad Urbana',  title: 'Mi Macro Periférico',        desc: 'Estación Los Conejos - Wayfinding',             size: 'wide',     test: 'dp-gallery-12' },
];

export const DPGallery = () => (
  <section className="projects-gallery" id="proyectos-dp" data-testid="dp-projects-gallery">
    <div className="projects-inner">
      <span className="section-label">ALGUNOS PROYECTOS</span>
      <h2 className="section-title-dark">Señalética que<br />conecta espacios</h2>
      <p className="section-description-dark">
        Proyectos de señalización y wayfinding que integran funcionalidad,
        identidad de marca y experiencia del usuario.
      </p>

      <div className="gallery-grid-large">
        {PROJECTS.map(p => (
          <div key={p.key} className={`gallery-item ${p.size}`.trim()} data-testid={p.test}>
            <img src={p.src} alt={p.alt} style={p.imgStyle} />
            <div className="gallery-overlay" style={OVERLAY_STYLE}>
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
