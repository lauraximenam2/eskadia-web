# Processia - Intelligent Automation Platform

Website oficial de Processia construido con Next.js 14, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 14.2+ (App Router)
- **Lenguaje:** TypeScript 5.6+
- **Estilos:** Tailwind CSS 3.4+
- **Componentes:** shadcn/ui
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Fuentes:** Geist Sans y Geist Mono

## 🎨 Paleta de Colores (Deep Purple Theme)

- Background: `#0A0D14` (Negro azulado profundo)
- Primary: `#6366F1` (Indigo brillante)
- Secondary: `#A78BFA` (Lavanda)
- Accent: `#10B981` (Verde esmeralda)

## 📦 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en desarrollo:
```bash
npm run dev
```

3. Abrir navegador en: http://localhost:3000

## 🏗️ Estructura del Proyecto

```
processia-web/
├── src/
│   ├── app/                  # Páginas y rutas (App Router)
│   ├── components/
│   │   ├── effects/         # Componentes con efectos modernos
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Secciones de páginas
│   │   └── ui/              # Componentes base (shadcn/ui)
│   └── lib/
│       ├── utils.ts         # Funciones útiles
│       └── animations.ts    # Variantes de Framer Motion
├── public/                   # Assets estáticos
└── tailwind.config.ts       # Configuración de Tailwind
```

## ✨ Efectos Implementados

1. **DotGrid** - Background de puntos (Linear style)
2. **CursorSpotlight** - Spotlight que sigue el cursor
3. **GradientText** - Texto con gradiente animado
4. **MagneticButton** - Botón magnetic (Stripe style)
5. **ShimmerButton** - Botón con brillo (Vercel style)
6. **GlassCard** - Card con glassmorphism
7. **InfiniteScroll** - Ticker infinito
8. **NumberCounter** - Contador animado
9. **ParallaxImage** - Imágenes con parallax

## 📝 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm start` - Inicia servidor de producción
- `npm run lint` - Ejecuta ESLint

## 🎯 Próximos Pasos

- [ ] Navbar y Footer
- [ ] Home Page completa
- [ ] Páginas CRM, Academy, Pricing, About
- [ ] Integración con CMS
- [ ] Optimización SEO

## 📄 Licencia

© 2025 Processia. Todos los derechos reservados.
