# d+p | compugrafic - PRD

## Original Problem Statement
Construir página web para empresa de gran formato (Compugrafic) con departamento de señalética (D+P). La página debe estar dividida en dos secciones con toggle para cambiar entre ellas. Formulario de contacto funcional con envío de emails.

## User Personas
- **Clientes retail**: Buscan soluciones de visual merchandising, fachadas comerciales
- **Arquitectos/Desarrolladores**: Necesitan servicios de señalética y wayfinding
- **Empresas**: Requieren marketing a gran escala e impresos

## Architecture (post Feb 2026 — serverless)
- **Frontend**: React 19 + Custom CSS (modularizado, ~18 componentes)
- **Email**: Web3Forms API (llamada directa desde el browser, sin backend)
- **Hosting**: Emergent Platform + dominio compugraficdmasp.com (Wix DNS)
- **Backend**: **ELIMINADO** — ya no se usa MongoDB ni FastAPI

## Code Structure
```
frontend/src/
├── App.js (contenedor con splash selector)
├── App.css
├── data/images.js
├── components/
│   ├── Header.jsx, Footer.jsx, FloatingToggle.jsx
│   ├── SectionSelector.jsx (splash de entrada Compugrafic / D+P)
│   ├── MarqueeBanner.jsx
│   ├── ContactSection.jsx (Web3Forms direct)
│   ├── compugrafic/ (Section, Hero, About, MissionVision, Services, Gallery)
│   └── dp/ (Section, Hero, About, MissionVision, Process, Deliverables, Sketches, Gallery)
```

## What's Been Implemented

### Splash Selector (entrada)
- [x] Pantalla dividida 50/50 (Compugrafic / D+P) en desktop
- [x] Apilada vertical en móvil
- [x] Hover expande panel activo (1.2fr/0.8fr)
- [x] CTA con borde + relleno animado

### Compugrafic Section
- [x] Hero, cenefa naranja seamless 25s, Quiénes Somos, Misión/Visión
- [x] 4 servicios detallados, galería 14 fotos, formulario de contacto

### D+P Section
- [x] Hero con watermark d+p (móvil), flecha ONE WAY, Quiénes Somos
- [x] Cenefa roja con 13 tipos (BRAILLE incluido), Misión/Visión
- [x] Proceso 7 pasos, Entregables, Sketches, galería 12 fotos
- [x] Formulario de contacto

### Shared
- [x] Toggle flotante, navbar adaptativo, menú hamburger móvil
- [x] Footer info@compugrafic.com

## Contact Form (Web3Forms)
- **Access Key**: en `frontend/.env` → `REACT_APP_WEB3FORMS_KEY`
- **Llamada**: `POST https://api.web3forms.com/submit` usando `FormData` (sin preflight)
- **Routing**: sujeto y campo `destino` cambian según sección activa
- ⚠️ **IMPORTANTE**: Web3Forms bloquea subdominios de hosting gratuitos (`*.preview.emergentagent.com`) por spam. El formulario **solo funciona en producción (compugraficdmasp.com)**. Si se requiere pruebas antes de deploy, el usuario debe contactar a Web3Forms para whitelist del dominio de preview, o usar el plan PRO.

## Prioritized Backlog

### P1 (Próximo)
- [ ] Agregar Google Analytics
- [ ] SEO optimization (meta tags, Open Graph, sitemap)

### P2 (Futuro)
- [ ] Alternativa email (Resend/SendGrid) si Web3Forms tiene limitaciones
- [ ] Blog/Noticias
- [ ] Multi-idioma (EN/ES)
- [ ] WhatsApp Business flotante
