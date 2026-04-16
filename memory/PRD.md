# d+p | compugrafic - PRD

## Original Problem Statement
Construir página web para empresa de gran formato (Compugrafic) con departamento de señalética (D+P). La página debe estar dividida en dos secciones con toggle para cambiar entre ellas. Necesita formulario de contacto funcional.

## User Personas
- **Clientes retail**: Buscan soluciones de visual merchandising, fachadas comerciales
- **Arquitectos/Desarrolladores**: Necesitan servicios de señalética y wayfinding
- **Empresas**: Requieren marketing a gran escala e impresos

## Core Requirements (Static)
- [x] Landing page con dos secciones: Compugrafic y D+P
- [x] Toggle para cambiar entre secciones
- [x] Formulario de contacto funcional
- [x] Diseño responsive
- [x] Colores corporativos (naranja #E85D04, beige #F5F0E8)

## Architecture
- **Frontend**: React 19 + Tailwind CSS
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Hosting**: Emergent Platform

## What's Been Implemented (Jan 2026)
- [x] Homepage Compugrafic con hero, servicios, about, contacto
- [x] Sección D+P con hero, proceso 7 pasos, entregables
- [x] Toggle entre secciones (header y footer)
- [x] Formulario de contacto con validación de email
- [x] API POST/GET /api/contact
- [x] Diseño responsive móvil y desktop
- [x] Marquee banner con capacidades
- [x] Tipografía Playfair Display + Inter
- [x] **Galería de proyectos reales** con 4 imágenes (Tecnosur, Click&Collect, Display retail, Vivo47)
- [x] **Imágenes de fondo en tarjetas de servicios** 
- [x] **Sección proyecto destacado D+P** con imagen señalética "HOMBRE"

## Prioritized Backlog
### P0 (Completado)
- [x] Landing page funcional
- [x] Formulario de contacto

### P1 (Próximo)
- [ ] Galería de proyectos/portfolio
- [ ] Integración con email (envío de notificaciones)
- [ ] SEO optimization (meta tags, sitemap)

### P2 (Futuro)
- [ ] Panel admin para ver mensajes de contacto
- [ ] Integración WhatsApp Business
- [ ] Blog/Noticias
- [ ] Multi-idioma (EN/ES)

## Next Tasks
1. Agregar imágenes reales de proyectos
2. Configurar envío de emails al recibir contactos
3. Optimizar SEO
