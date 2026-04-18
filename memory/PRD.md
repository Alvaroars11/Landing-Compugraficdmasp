# d+p | compugrafic - PRD

## Original Problem Statement
Construir página web para empresa de gran formato (Compugrafic) con departamento de señalética (D+P). La página debe estar dividida en dos secciones con toggle para cambiar entre ellas. Formulario de contacto funcional con envío de emails.

## User Personas
- **Clientes retail**: Buscan soluciones de visual merchandising, fachadas comerciales
- **Arquitectos/Desarrolladores**: Necesitan servicios de señalética y wayfinding
- **Empresas**: Requieren marketing a gran escala e impresos

## Architecture
- **Frontend**: React 19 + Custom CSS (modularizado)
- **Backend**: FastAPI (Python) + tests pytest
- **Database**: MongoDB
- **Email**: Web3Forms API
- **Hosting**: Emergent Platform + dominio compugraficdmasp.com (Wix DNS)

## Code Structure (post-refactor Feb 2026)
```
frontend/src/
├── App.js (57 líneas, contenedor)
├── App.css
├── data/images.js
├── components/
│   ├── Header.jsx, Footer.jsx, FloatingToggle.jsx
│   ├── MarqueeBanner.jsx, ContactSection.jsx
│   ├── compugrafic/ (Section, Hero, About, MissionVision, Services, Gallery)
│   └── dp/ (Section, Hero, About, MissionVision, Process, Deliverables, Sketches, Gallery)
backend/
├── server.py
└── tests/test_contact_api.py
```

## What's Been Implemented

### Compugrafic Section
- [x] Hero con fondo GoPost, título "Hacemos que las ideas sucedan", 4 tarjetas de servicio clickeables
- [x] Cenefa naranja con capacidades técnicas (25s loop seamless)
- [x] Quiénes Somos (sección naranja con stats 25+, 100%, MX, ∞)
- [x] Misión y Visión (dos columnas con línea naranja)
- [x] Nuestros Servicios (4 tarjetas detalladas)
- [x] Algunos Proyectos - collage 14 fotos reales
- [x] Formulario de contacto → ventas@compugrafic.com

### D+P Section
- [x] Hero con logo d+p, flecha ONE WAY animada, fondo beige
- [x] Hero móvil: watermark d+p + "SEÑALÉTICA / WAYFINDING" al pie
- [x] Quiénes Somos con foto señalética de fondo
- [x] Cenefa roja con tipos de señalética
- [x] Misión y Visión (dos columnas)
- [x] Proceso 7 etapas con nota de proyectos integrales
- [x] Entregables (sección oscura con grid)
- [x] Sketches/Tipologías (imagen isométrica)
- [x] Algunos Proyectos - collage 12 fotos reales
- [x] Formulario de contacto → dmasp.ventas@compugrafic.com

### Shared Features
- [x] Toggle flotante translúcido (Compugrafic/D+P)
- [x] Logo interactivo compugrafic | d+p (colores según sección activa)
- [x] Navbar con botones de switch entre secciones
- [x] Formulario de contacto con Web3Forms email integration
- [x] Footer con info@compugrafic.com
- [x] Diseño responsive
- [x] Menú hamburger móvil

## Recent Changes

### Feb 2026 — Refactor & polish
- [x] Marquee loop seamless (display flex + width max-content, 25s)
- [x] Logo d+p como watermark gigante detrás del texto en móvil
- [x] Toggle flotante con medidas fijas (140px) y sin cortarse
- [x] Refactor completo: App.js 1068→57 líneas, 18 componentes nuevos
- [x] Keys estables en marquee (cg-marquee-a/b, dp-marquee-a/b)
- [x] Datos extraídos a arrays iterables (servicios, pasos, proyectos, entregables)
- [x] Tests pytest para backend (/app/backend/tests/test_contact_api.py)

## Credentials
- Web3Forms API Key: d28f7e83-02f3-4dcd-bd9b-ffaa041b0e61 (en backend/.env)

## Prioritized Backlog

### P1 (Próximo)
- [ ] Agregar Google Analytics
- [ ] SEO optimization (meta tags, Open Graph, sitemap)

### P2 (Futuro)
- [ ] Panel admin para ver mensajes de contacto
- [ ] Integración WhatsApp Business
- [ ] Blog/Noticias
- [ ] Multi-idioma (EN/ES)
- [ ] Servicio email propio (SendGrid/Resend) si Web3Forms queda corto

### P3 (Seguridad/Hardening)
- [ ] Mover WEB3FORMS_KEY a secretos de deployment (no commit)
- [ ] Error handling más granular en /api/contact
