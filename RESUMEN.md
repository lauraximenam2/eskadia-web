# RESUMEN DEL PROYECTO - ESKADIA WEB

## ESTADO ACTUAL

**Fecha:** 5 de marzo de 2026
**Estado:** Web completa en espanol, pendiente Supabase e i18n
**Idioma:** Espanol (unico por ahora, ingles pendiente)
**Build:** OK - Compila sin errores

---

## ARQUITECTURA

- **Next.js 14** con App Router
- **Tailwind CSS** con tema Deep Purple personalizado
- **Fuentes locales** via `next/font/local`:
  - DM Sans (cuerpo/texto general)
  - Jura (titulos h1-h6)
  - Chakra Petch (codigo/monospace)
- **Chat widget** conectado a n8n via API route `/api/chat`
- **SVGs de marca** en `public/logos/` (Solo K + Eskadia Full en blanco y oscuro)

---

## PAGINAS

| Ruta | Pagina | Contenido |
|------|--------|-----------|
| `/` | Home | Hero, social proof, 3 productos, stats, CTA |
| `/crm` | Eskadia CRM | Features, pricing (3 planes en EUR), FAQ |
| `/automatizacion` | Eskadia Automatizaciones | Casos de uso, proceso, integraciones, pricing (3 planes) |
| `/consultoria` | Eskadia Consultoria | 4 fases, entregables, perfiles ideales, presupuesto a medida |
| `/pricing` | Precios | Toggle mensual/anual, 3 planes en EUR, comparativa, FAQ |
| `/about` | Nosotros | Mision, equipo (Ivan + Laura), valores, timeline |
| `/api/chat` | API Chat | Edge runtime, conecta con n8n |

---

## PRODUCTOS (solo 3)

### 1. Eskadia CRM
- CRM con IA integrada
- Scoring de leads, vista 360, automatizaciones, integraciones
- Pricing: Starter 29EUR, Professional 99EUR, Enterprise 299EUR

### 2. Eskadia Automatizaciones
- Servicio a medida (no plataforma self-service)
- Motor: n8n
- Casos: ventas, operaciones, marketing, datos
- Proceso: Diagnostico > Diseno > Implementacion > Entrega
- Pricing: Essentials 490EUR, Business 990EUR, Enterprise a medida

### 3. Eskadia Consultoria
- Auditoria completa + implementacion
- 4 fases: Auditoria > Diseno > Implementacion > Formacion
- Presupuesto por proyecto (sin precios fijos en web)
- Publico: PYMEs y medianas-grandes sin equipo IT

---

## COMPONENTES CLAVE

### Layout
- **Navbar:** Logo SVG (eskadia-full-blanco.svg) + dropdown productos + Precios + Nosotros + CTAs
- **Footer:** Logo SVG + 4 columnas (Productos, Empresa, Recursos, Legal) + redes sociales

### Efectos
- GradientText, GlassCard, ShimmerButton, MagneticButton
- DotGrid, CursorSpotlight, InfiniteScroll, NumberCounter

### Chat Widget
- Burbuja flotante en esquina inferior derecha
- Conecta con n8n workflow via `/api/chat`
- Contenido contextual desde `public/data/eskadia-content.json`

---

## CONFIGURACION

### Tailwind (`tailwind.config.ts`)
- Colores: background, primary, secondary, accent, card, border, muted, destructive
- Fuentes: sans (DM Sans), heading (Jura), code/mono (Chakra Petch)
- Animaciones: shine, gradient-shift, scroll-left, fade-in-up, pulse-glow, rotate-border

### Fuentes (`src/app/layout.tsx`)
- Cargadas con `next/font/local` desde `public/fonts/`
- Variables CSS: `--font-dm-sans`, `--font-jura`, `--font-chakra-petch`
- h1-h6 usan Jura automaticamente via `globals.css`
- code/pre usan Chakra Petch automaticamente via `globals.css`

---

## PENDIENTE / PROXIMOS PASOS

### Supabase (siguiente prioridad)
- [ ] Autenticacion de usuarios
- [ ] Base de datos
- [ ] Multimoneda con tasas fijas manuales (ver seccion MULTIMONEDA abajo)
- [ ] Gestion de suscripciones

### Internacionalizacion
- [ ] Soporte ingles (idioma secundario)
- [ ] Deteccion automatica de idioma
- [ ] Traducciones de todo el contenido

### Paginas pendientes
- [ ] `/contact` - Pagina de contacto
- [ ] `/blog` - Blog
- [ ] `/get-started` - Registro / onboarding
- [ ] `/login` - Login

### Mejoras
- [ ] SEO: meta tags, sitemap, robots.txt
- [ ] Imagenes reales en secciones de features
- [ ] Video demo en pagina CRM
- [ ] Formulario de contacto funcional

---

## COMANDOS

```bash
npm run dev          # Desarrollo
npm run build        # Build produccion
npm start            # Servidor produccion
npm run lint         # ESLint

# Actualizar repo
git add . && git commit -m "descripcion" && git push
```

---

## MULTIMONEDA - DISENO DECIDIDO

### Enfoque: Tasas fijas manuales (NO API en vivo)
El usuario (admin) controla las tasas manualmente desde Supabase. Los precios no fluctuan automaticamente.

### Tabla Supabase: `currencies`
```
id              UUID (PK)
code            TEXT UNIQUE     -- "USD", "EUR", "MXN", etc.
name            TEXT            -- "Dolar estadounidense", "Euro", etc.
symbol          TEXT            -- "US$", "€", "MXN $", etc.
position        TEXT            -- "left" o "right" (simbolo antes o despues del precio)
rate            DECIMAL         -- Tasa de conversion desde moneda base (ej: 1.0 para USD)
decimals        INTEGER         -- Numero de decimales (0 para CLP/PYG, 2 para EUR/USD)
thousand_sep    TEXT            -- Separador de miles ("." o ",")
decimal_sep     TEXT            -- Separador decimal ("," o ".")
is_default      BOOLEAN         -- Solo una moneda default (true)
is_hidden       BOOLEAN         -- Ocultar moneda del selector
flag_emoji      TEXT            -- Emoji de bandera (opcional)
updated_at      TIMESTAMPTZ     -- Cuando se actualizo la tasa por ultima vez
```

### Monedas planificadas (basado en el plugin WP del usuario)
| Codigo | Moneda | Tasa aprox | Simbolo | Decimales |
|--------|--------|-----------|---------|-----------|
| USD | Dolar EEUU | 1 (base) | US$ | 2 |
| EUR | Euro | 1.2 | € | 2 |
| GBP | Libra esterlina | 1 | £ | 2 |
| MXN | Peso mexicano | 22 | MXN $ | 0 |
| ARS | Peso argentino | 1400 | ARS $ | 0 |
| CLP | Peso chileno | 1000 | CLP $ | 0 |
| COP | Peso colombiano | 4000 | COP $ | 0 |
| BRL | Real brasileno | 6 | R$ | 2 |
| PEN | Sol peruano | 4 | S/ | 2 |
| CAD | Dolar canadiense | 1.4 | CAD $ | 2 |
| AUD | Dolar australiano | 1.6 | AUD $ | 2 |
| CHF | Franco suizo | 1 | Fr. | 2 |
| CRC | Colon costarricense | 500 | ₡ | 0 |
| DOP | Peso dominicano | 60 | RD$ | 0 |
| GTQ | Quetzal guatemalteco | 8 | Q | 0 |
| HNL | Lempira hondureno | 25 | L | 0 |
| NIO | Cordoba nicaraguense | 35 | C$ | 0 |
| PYG | Guarani paraguayo | 8000 | Gs | 0 |
| UYU | Peso uruguayo | 40 | UYU $ | 0 |
| BOB | Boliviano | 7 | Bs | 2 |

### Tabla Supabase: `plan_prices`
```
id              UUID (PK)
plan_id         UUID (FK plans)
currency_code   TEXT (FK currencies.code)
monthly_price   DECIMAL
annual_price    DECIMAL
```

### Logica en frontend
1. Detectar moneda del usuario: perfil Supabase > locale navegador > default (USD)
2. Hook `useCurrency()` devuelve moneda activa + funcion de formato
3. Componentes de pricing llaman a `formatPrice(amount, currency)` que usa `Intl.NumberFormat`
4. Selector de moneda visible en navbar o paginas de pricing

### Logica en admin
- Panel en Supabase (o dashboard propio) para editar tasas
- El admin actualiza `rate` en la tabla `currencies` cuando quiera
- Los precios del frontend se recalculan automaticamente con la nueva tasa

---

## NOTAS TECNICAS

- Los SVGs con espacios en nombre estan copiados a versiones web-friendly (ej: `Solo K 32.svg` → `solo-k-32.svg`)
- El paquete `geist` ya no se usa (reemplazado por fuentes locales)
- La pagina `/academy` fue eliminada
- Pricing en EUR (euros) actualmente, pendiente multimoneda con Supabase
- Cliente ideal: PYMEs y medianas-grandes sin equipo informatico interno
- Los precios base se almacenaran en USD en Supabase y se convertiran con tasas fijas
