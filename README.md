# Eskadia - AI-liados de tu progreso

Website oficial de Eskadia construido con Next.js 14, TypeScript, Tailwind CSS y Framer Motion.

## Stack Tecnologico

- **Framework:** Next.js 14.2+ (App Router)
- **Lenguaje:** TypeScript 5.6+
- **Estilos:** Tailwind CSS 3.4+
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Fuentes:** DM Sans (cuerpo), Jura (titulos), Chakra Petch (codigo)
- **Chat:** Widget integrado con n8n

## Paleta de Colores (Deep Purple Theme)

- Background: `#0A0D14` (Negro azulado profundo)
- Primary: `#6366F1` (Indigo brillante)
- Secondary: `#A78BFA` (Lavanda)
- Accent: `#10B981` (Verde esmeralda)

## Instalacion

```bash
npm install
npm run dev
```

Abrir navegador en: http://localhost:3000

## Estructura del Proyecto

```
eskadia-web/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home
│   │   ├── crm/page.tsx          # Eskadia CRM
│   │   ├── automatizacion/page.tsx # Eskadia Automatizaciones
│   │   ├── consultoria/page.tsx  # Eskadia Consultoria
│   │   ├── pricing/page.tsx      # Precios
│   │   ├── about/page.tsx        # Nosotros
│   │   ├── api/chat/route.ts     # API del chat widget
│   │   ├── layout.tsx            # Layout global (fuentes, navbar, footer)
│   │   └── globals.css           # Estilos globales
│   ├── components/
│   │   ├── effects/              # GradientText, GlassCard, ShimmerButton, etc.
│   │   ├── layout/               # Navbar, Footer
│   │   └── chat/                 # Chat widget
│   └── lib/
│       └── utils.ts
├── public/
│   ├── logos/                    # SVGs de marca (Solo K, Eskadia Full)
│   ├── fonts/                    # DM Sans, Jura, Chakra Petch
│   └── data/                     # eskadia-content.json (contenido del chat)
├── tailwind.config.ts
└── n8n-workflow-*.json           # Workflows de n8n para el chat
```

## Productos

| Producto | Ruta | Descripcion |
|----------|------|-------------|
| Eskadia CRM | `/crm` | CRM con IA integrada, scoring de leads, automatizacion |
| Eskadia Automatizaciones | `/automatizacion` | Servicio a medida de automatizacion con n8n |
| Eskadia Consultoria | `/consultoria` | Auditoria de procesos + implementacion tecnologica |

## Logos SVG

- `solo-k-*.svg` - Icono K (tamanios: 16, 32, 48, 64, 96, 128, 180, 192, 512)
- `eskadia-full-blanco.svg` - Logo completo (texto blanco para fondo oscuro)
- `eskadia-full-oscuro.svg` - Logo completo (texto oscuro para fondo claro)

## Efectos Implementados

1. **DotGrid** - Background de puntos
2. **CursorSpotlight** - Spotlight que sigue el cursor
3. **GradientText** - Texto con gradiente animado
4. **MagneticButton** - Boton magnetico
5. **ShimmerButton** - Boton con brillo
6. **GlassCard** - Card con glassmorphism
7. **InfiniteScroll** - Ticker infinito
8. **NumberCounter** - Contador animado

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para produccion
npm start        # Servidor de produccion
npm run lint     # ESLint
```

## Proximos Pasos

- [ ] Supabase: autenticacion, base de datos, multimoneda
- [ ] Internacionalizacion (i18n) ingles
- [ ] Pagina de contacto
- [ ] Blog
- [ ] Optimizacion SEO

## Licencia

© 2025 Eskadia. Todos los derechos reservados.
