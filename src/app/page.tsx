import {
  GradientText,
  ShimmerButton,
  GlassCard,
  InfiniteScroll,
  NumberCounter,
  HeroWatermark,
} from "@/components/effects";
import Link from "next/link";

export default function HomePage() {
  const logos = [
    "Apollo.io",
    "n8n",
    "DeepSeek",
    "Vercel",
    "Stripe",
    "HubSpot",
    "Slack",
    "Notion",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Glow de fondo sutil */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[700px] rounded-full bg-primary/8 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-24">
          <HeroWatermark src="/logos/solo-k-512.svg" alt="Eskadia" size={340} />

          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-7">
            {/* Badge */}
            <div className="flex justify-center">
              <Link
                href="/crm"
                className="group inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-sm text-primary transition-colors hover:border-primary/50 hover:bg-primary/15"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Nuevo: Eskadia CRM con IA
                <span className="text-primary/50 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>

            {/* Heading */}
            <GradientText
              as="h1"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight pb-3"
              animated={true}
            >
              AI-liados de tu progreso
            </GradientText>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Automatización inteligente, CRM con IA y consultoría para
              empresas que quieren crecer sin límites.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
                <Link
                  href="/get-started"
                  className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block font-semibold"
                >
                  Empezar gratis
                </Link>
              </ShimmerButton>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
              >
                Ver cómo funciona
                <span className="text-xs opacity-60">↓</span>
              </Link>
            </div>

            {/* Social proof micro */}
            <p className="text-xs text-muted-foreground/60 pt-1">
              Sin tarjeta de crédito · Configura en minutos · Cancela cuando quieras
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof - Infinite Scroll */}
      <section className="border-y border-border/50 py-12">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/50 mb-8">
          Integrado con las herramientas que ya usas
        </p>
        <InfiniteScroll speed={30} pauseOnHover={true}>
          {logos.map((logo, i) => (
            <div
              key={i}
              className="px-10 py-3 text-base font-semibold text-foreground/30 hover:text-foreground/60 transition-colors"
            >
              {logo}
            </div>
          ))}
        </InfiniteScroll>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 py-28">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <GradientText animated={false}>Todo en un solo lugar</GradientText>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tres productos pensados para automatizar, gestionar y escalar
            tu negocio con inteligencia artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/crm" className="group block">
            <GlassCard hover={true} glow={true}>
              <div className="p-7 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <img
                    src="/logos/logo-crm.svg"
                    alt="CRM"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    Eskadia CRM
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    CRM con IA integrada. Enriquecimiento automático de datos,
                    redacción inteligente y automatización nativa.
                  </p>
                </div>
                <span className="text-xs text-primary/60 group-hover:text-primary transition-colors inline-flex items-center gap-1">
                  Saber más →
                </span>
              </div>
            </GlassCard>
          </Link>

          <Link href="/automatizacion" className="group block">
            <GlassCard hover={true} glow={true} animatedBorder={true}>
              <div className="p-7 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <img
                    src="/logos/logo-autimatizacion.svg"
                    alt="Automatización"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    Eskadia Automatizaciones
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Flujos de trabajo complejos sin código. Integraciones
                    con las herramientas que ya usas.
                  </p>
                </div>
                <span className="text-xs text-primary/60 group-hover:text-primary transition-colors inline-flex items-center gap-1">
                  Saber más →
                </span>
              </div>
            </GlassCard>
          </Link>

          <Link href="/consultoria" className="group block">
            <GlassCard hover={true} glow={true}>
              <div className="p-7 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <img
                    src="/logos/logo-consultoria.svg"
                    alt="Consultoría"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    Eskadia Consultoría
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Auditoría e implementación de procesos. Consultoría
                    técnica para transformar tu operación.
                  </p>
                </div>
                <span className="text-xs text-primary/60 group-hover:text-primary transition-colors inline-flex items-center gap-1">
                  Saber más →
                </span>
              </div>
            </GlassCard>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-1">
              <NumberCounter
                value={99.9}
                duration={2000}
                decimals={1}
                suffix="%"
                className="text-5xl font-bold text-primary"
              />
              <p className="text-sm text-muted-foreground">Disponibilidad garantizada</p>
            </div>
            <div className="space-y-1">
              <NumberCounter
                value={10000}
                duration={2000}
                suffix="+"
                className="text-5xl font-bold text-primary"
              />
              <p className="text-sm text-muted-foreground">Procesos automatizados</p>
            </div>
            <div className="space-y-1">
              <NumberCounter
                value={24}
                duration={2000}
                suffix="/7"
                className="text-5xl font-bold text-primary"
              />
              <p className="text-sm text-muted-foreground">Soporte disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-4 py-24">
        <GlassCard glow={true} animatedBorder={true}>
          <div className="relative p-12 sm:p-16 overflow-hidden text-center">
            {/* Decorative K watermark */}
            <img
              src="/logos/solo-k-512.svg"
              alt=""
              className="absolute right-[-30px] top-[-30px] h-48 w-48 opacity-[0.04] pointer-events-none select-none"
              aria-hidden="true"
            />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                <GradientText>¿Listo para transformar tu negocio?</GradientText>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Únete a las empresas que ya automatizan sus procesos con
                Eskadia. Empieza gratis hoy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
                  <Link
                    href="/get-started"
                    className="px-10 py-3.5 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block text-base font-semibold"
                  >
                    Comenzar ahora
                  </Link>
                </ShimmerButton>
                <Link
                  href="/about"
                  className="px-6 py-3.5 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Hablar con ventas →
                </Link>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
