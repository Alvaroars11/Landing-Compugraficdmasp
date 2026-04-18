# d+p | compugrafic - PRD

## Original Problem Statement
Construir página web para empresa de gran formato (Compugrafic) con departamento de señalética (D+P). La página debe estar dividida en dos secciones con toggle para cambiar entre ellas. Formulario de contacto funcional con envío de emails.

## User Personas
- **Clientes retail**: Buscan soluciones de visual merchandising, fachadas comerciales
- **Arquitectos/Desarrolladores**: Necesitan servicios de señalética y wayfinding
- **Empresas**: Requieren marketing a gran escala e impresos

## Architecture
- **Frontend**: React 19 + Custom CSS
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Email**: Web3Forms API
- **Hosting**: Emergent Platform

## What's Been Implemented (Jan 2026)

### Compugrafic Section
- [x] Hero con fondo GoPost, título "Hacemos que las ideas sucedan", 4 tarjetas de servicio clickeables
- [x] Cenefa naranja con capacidades técnicas
- [x] Quiénes Somos (sección naranja con stats 25+, 100%, MX, ∞)
- [x] Misión y Visión (dos columnas con línea naranja)
- [x] Nuestros Servicios (4 tarjetas detalladas)
- [x] Algunos Proyectos - collage 14 fotos reales (Panamericanos, URREA, Liverpool, Click&Collect, Display Retail, Punto Sur, Valle Imperial, Tecnosur, Vivo47, PiSA, Sneakers, Electrolit, Caliente, PyMPSA)
- [x] Formulario de contacto → ventas@compugrafic.com

### D+P Section
- [x] Hero con logo d+p, flecha ONE WAY animada, fondo beige
- [x] Quiénes Somos con foto señalética de fondo
- [x] Cenefa roja con tipos de señalética
- [x] Misión y Visión (dos columnas)
- [x] Proceso 7 etapas con nota de proyectos integrales
- [x] Entregables (sección oscura con grid)
- [x] Sketches/Tipologías (imagen isométrica de señalética)
- [x] Algunos Proyectos - collage 12 fotos reales (Naves Industriales, Estacionamiento, Sanitarios, Jardín Botánico, Almacén, Identidad Edificio, Piso 2, WorldHotels, Señalización Sanitaria, Palo Alto, WorldHotels Roof, Mi Macro)
- [x] Formulario de contacto → dmasp.ventas@compugrafic.com

### Shared Features
- [x] Toggle flotante translúcido (Compugrafic/D+P)
- [x] Logo interactivo compugrafic | d+p (colores según sección activa)
- [x] Navbar con botones de switch entre secciones
- [x] Formulario de contacto con Web3Forms email integration
- [x] Footer con info@compugrafic.com
- [x] Diseño responsive

## Recent Changes (Feb 2026)
- [x] Fix marquee/cenefa loop seamless: cambio de `inline-flex` a `flex` con `width: max-content`. Elimina el salto visible al reiniciar el loop mediante sub-pixel precision en el `translate(-50%)`.

## Credentials
- Web3Forms API Key: d28f7e83-02f3-4dcd-bd9b-ffaa041b0e61

## Prioritized Backlog
### P1 (Próximo)
- [ ] Mejorar navegación móvil (links se sobreponen en pantallas pequeñas)
- [ ] SEO optimization (meta tags, sitemap, Open Graph)
- [ ] Agregar Google Analytics

### P2 (Futuro)
- [ ] Panel admin para ver mensajes de contacto
- [ ] Integración WhatsApp Business
- [ ] Blog/Noticias
- [ ] Multi-idioma (EN/ES)
