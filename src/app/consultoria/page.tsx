import {
  GradientText,
  GlassCard,
  ShimmerButton,
  HeroWatermark,
} from "@/components/effects";
import Link from "next/link";
import {
  Check,
  Search,
  FileText,
  Settings,
  HeadphonesIcon,
  ArrowRight,
  Building2,
  TrendingUp,
  Clock,
  Target,
} from "lucide-react";

export const metadata = {
  title: "Eskadia Consultoría - Auditoría e implementación de procesos",
  description:
    "Analizamos tus procesos, diseñamos la solución tecnológica ideal e implementamos todo para que tu empresa funcione mejor. Sin que necesites equipo técnico.",
};

export default function ConsultoriaPage() {
  const phases = [
    {
      icon: Search,
      step: "Fase 1",
      title: "Auditoría de procesos",
      description:
        "Nos sumergimos en tu operación para entender cada proceso, identificar ineficiencias y detectar oportunidades de mejora.",
      deliverables: [
        "Mapa completo de procesos actuales",
        "Identificación de cuellos de botella",
        "Análisis de herramientas existentes",
        "Informe de oportunidades de mejora",
      ],
    },
    {
      icon: FileText,
      step: "Fase 2",
      title: "Diseño de la solución",
      description:
        "Diseñamos una propuesta técnica con las herramientas, integraciones y automatizaciones necesarias para resolver los problemas detectados.",
      deliverables: [
        "Arquitectura de la solución propuesta",
        "Selección de herramientas y tecnologías",
        "Plan de implementación con timeline",
        "Estimación de impacto y ROI",
      ],
    },
    {
      icon: Settings,
      step: "Fase 3",
      title: "Implementación",
      description:
        "Ponemos en marcha la solución: configuramos herramientas, creamos automatizaciones, integramos sistemas y migramos datos.",
      deliverables: [
        "Configuración de plataformas",
        "Automatizaciones con n8n",
        "Integraciones entre sistemas",
        "Migración de datos existentes",
      ],
    },
    {
      icon: HeadphonesIcon,
      step: "Fase 4",
      title: "Formación y acompañamiento",
      description:
        "Formamos a tu equipo para que domine las nuevas herramientas y te acompañamos durante la transición con soporte dedicado.",
      deliverables: [
        "Formación presencial u online",
        "Documentación personalizada",
        "Soporte post-implementación",
        "Revisiones de seguimiento",
      ],
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Ahorra tiempo",
      stat: "60%",
      description:
        "Reducción media del tiempo dedicado a tareas administrativas y repetitivas.",
    },
    {
      icon: TrendingUp,
      title: "Más productividad",
      stat: "3x",
      description:
        "Los equipos multiplican su capacidad operativa sin necesidad de contratar más personal.",
    },
    {
      icon: Target,
      title: "Menos errores",
      stat: "90%",
      description:
        "Reducción de errores humanos al automatizar procesos manuales y propensos a fallos.",
    },
    {
      icon: Building2,
      title: "Escalabilidad",
      stat: "∞",
      description:
        "Procesos que crecen con tu empresa sin necesidad de rehacer la infraestructura.",
    },
  ];

  const idealFor = [
    {
      title: "PYMEs en crecimiento",
      description:
        "Empresas que están creciendo y necesitan profesionalizar sus procesos antes de que el volumen les supere.",
    },
    {
      title: "Empresas sin equipo IT",
      description:
        "Organizaciones que no tienen departamento técnico interno y necesitan un partner tecnológico de confianza.",
    },
    {
      title: "Equipos desbordados",
      description:
        "Equipos que pierden horas en tareas manuales, copiar datos entre herramientas o generar informes a mano.",
    },
    {
      title: "Transición digital",
      description:
        "Empresas que trabajan con Excel, email y papel y quieren dar el salto a herramientas digitales conectadas.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 pt-10 pb-20">
        <HeroWatermark src="/logos/solo-k-512.svg" alt="Eskadia Consultoría" size={420} />
        <div className="relative z-10 text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <img src="/logos/logo-consultoria.svg" alt="Eskadia Consultoría" className="w-12 h-12" />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">
            <Search className="w-4 h-4" />
            Auditoría + Implementación
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold">
            <GradientText as="span" animated={true}>
              Tu empresa funciona,
            </GradientText>
            <br />
            nosotros la hacemos volar
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Analizamos tus procesos, detectamos lo que frena tu crecimiento y lo
            solucionamos con tecnología. Sin que necesites equipo técnico
            interno.
          </p>

          <div className="flex items-center justify-center gap-4">
            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block font-semibold"
              >
                Solicitar auditoría
              </Link>
            </ShimmerButton>

            <Link
              href="/about"
              className="px-8 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors inline-block"
            >
              Conocer al equipo
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-24 text-center">
          {benefits.map((benefit) => (
            <div key={benefit.title}>
              <span className="text-4xl font-bold text-primary mb-2 block">
                {benefit.stat}
              </span>
              <p className="font-semibold mb-1">{benefit.title}</p>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process / Phases */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText animated={false}>
              Nuestro proceso de consultoría
            </GradientText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un enfoque estructurado de principio a fin. Cada proyecto se
            presupuesta de forma individual según tus necesidades.
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <GlassCard key={phase.step} hover={true} glow={index === 2}>
              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        {phase.step}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>

                  <div className="bg-card/50 rounded-lg p-6">
                    <p className="font-semibold text-sm mb-4 text-primary">
                      Entregables:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {phase.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < phases.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <ArrowRight className="w-5 h-5 text-primary/30 rotate-90" />
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Ideal For */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText animated={false}>¿Es para tu empresa?</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            Nuestro servicio es ideal para estos perfiles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {idealFor.map((item) => (
            <GlassCard key={item.title} hover={true}>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Pricing note */}
      <section className="max-w-5xl mx-auto px-4 py-32">
        <GlassCard glow={true}>
          <div className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Presupuesto a medida
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada empresa es diferente. Por eso cada proyecto de consultoría se
              presupuesta de forma individual según el alcance, la complejidad y
              las herramientas necesarias. Cuéntanos tu caso y te preparamos
              una propuesta sin compromiso.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="p-4">
                <p className="text-2xl font-bold text-primary">24-48h</p>
                <p className="text-sm text-muted-foreground">
                  Tiempo de respuesta con propuesta
                </p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-primary">Sin compromiso</p>
                <p className="text-sm text-muted-foreground">
                  Auditoría inicial gratuita
                </p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-primary">Precio cerrado</p>
                <p className="text-sm text-muted-foreground">
                  Sabes lo que pagas antes de empezar
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 py-32 text-center">
        <GlassCard glow={true} animatedBorder={true}>
          <div className="p-16">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>
                ¿Listo para optimizar tu empresa?
              </GradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cuéntanos tu situación y te proponemos cómo mejorarla. Primera
              consulta gratuita y sin compromiso.
            </p>
            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/contact"
                className="px-12 py-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block text-lg font-semibold"
              >
                Solicitar consulta gratuita
              </Link>
            </ShimmerButton>
            <p className="text-sm text-muted-foreground mt-4">
              Respuesta en 24h · Sin compromiso · 100% personalizado
            </p>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
