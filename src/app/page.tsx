import {
  GradientText,
  MagneticButton,
  ShimmerButton,
  GlassCard,
  InfiniteScroll,
  NumberCounter,
} from "@/components/effects";
import Link from "next/link";
import Image from "next/image";

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
      <section className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/logos/eskadia-logo-light.png"
              alt="Eskadia"
              width={280}
              height={72}
              className="h-16 w-auto"
              priority
            />
          </div>

          <GradientText as="h1" className="text-6xl font-bold" animated={true}>
            AI-liados de tu progreso
          </GradientText>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automatizaci&oacute;n inteligente, CRM con IA y consultor&iacute;a
            para empresas que quieren escalar sin l&iacute;mites.
          </p>

          <div className="flex items-center justify-center gap-4">
            <MagneticButton strength={20}>
              <Link
                href="/about"
                className="px-8 py-3 bg-card border border-border rounded-lg hover:bg-card-hover transition-colors inline-block"
              >
                Conocer m&aacute;s
              </Link>
            </MagneticButton>

            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/get-started"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block"
              >
                Empezar gratis
              </Link>
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* Social Proof - Infinite Scroll */}
      <section className="py-16 border-y border-border">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Integraciones con las herramientas que ya usas
        </p>
        <InfiniteScroll speed={30} pauseOnHover={true}>
          {logos.map((logo, i) => (
            <div
              key={i}
              className="px-8 py-4 text-lg font-semibold text-foreground/60"
            >
              {logo}
            </div>
          ))}
        </InfiniteScroll>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <h2 className="text-4xl font-bold text-center mb-4">
          <GradientText animated={false}>Soluciones Inteligentes</GradientText>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Todo lo que necesitas para automatizar, gestionar y escalar tu negocio
          con inteligencia artificial.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard hover={true} glow={true}>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Eskadia CRM</h3>
              <p className="text-muted-foreground">
                CRM accionable con IA integrada. Enriquecimiento autom&aacute;tico
                de datos, redacci&oacute;n inteligente y automatizaci&oacute;n nativa.
              </p>
            </div>
          </GlassCard>

          <GlassCard hover={true} animatedBorder={true}>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Eskadia Academy</h3>
              <p className="text-muted-foreground">
                Aprende automatizaci&oacute;n empresarial con cursos pr&aacute;cticos,
                certificaciones y bootcamps sobre n8n, IA y m&aacute;s.
              </p>
            </div>
          </GlassCard>

          <GlassCard hover={true} glow={true} animatedBorder={true}>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Eskadia Automatizaci&oacute;n
              </h3>
              <p className="text-muted-foreground">
                Dise&ntilde;a flujos de trabajo complejos visualmente.
                Integraciones sin c&oacute;digo con las herramientas que ya usas.
              </p>
            </div>
          </GlassCard>

          <GlassCard hover={true} animatedBorder={true}>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Eskadia AI</h3>
              <p className="text-muted-foreground">
                Inteligencia artificial aplicada a tus procesos. An&aacute;lisis
                predictivo, asistentes virtuales y toma de decisiones inteligente.
              </p>
            </div>
          </GlassCard>

          <GlassCard hover={true} glow={true}>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Eskadia Consultor&iacute;a</h3>
              <p className="text-muted-foreground">
                Auditor&iacute;a e implementaci&oacute;n de procesos. Consultor&iacute;a
                t&eacute;cnica para transformar tu operaci&oacute;n con tecnolog&iacute;a.
              </p>
            </div>
          </GlassCard>

          <GlassCard hover={true} glow={true} animatedBorder={true}>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Eskadia Formaci&oacute;n</h3>
              <p className="text-muted-foreground">
                Capacitaci&oacute;n empresarial en automatizaci&oacute;n y herramientas
                digitales. Programas B2B personalizados para tu equipo.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-32 border-t border-border">
        <div className="grid md:grid-cols-3 gap-16 text-center">
          <div>
            <NumberCounter
              value={99.9}
              duration={2000}
              decimals={1}
              suffix="%"
              className="text-5xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Disponibilidad garantizada</p>
          </div>

          <div>
            <NumberCounter
              value={10000}
              duration={2000}
              suffix="+"
              className="text-5xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Procesos automatizados</p>
          </div>

          <div>
            <NumberCounter
              value={24}
              duration={2000}
              suffix="/7"
              className="text-5xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Soporte disponible</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 py-32 text-center">
        <GlassCard glow={true} animatedBorder={true}>
          <div className="p-16">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>&iquest;Listo para transformar tu negocio?</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              &Uacute;nete a las empresas que ya automatizan sus procesos con
              Eskadia. Empieza gratis hoy.
            </p>
            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/get-started"
                className="px-12 py-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block text-lg font-semibold"
              >
                Comenzar ahora
              </Link>
            </ShimmerButton>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
