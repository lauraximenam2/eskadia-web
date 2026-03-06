import {
  GradientText,
  GlassCard,
  ShimmerButton,
  NumberCounter,
  HeroWatermark,
} from "@/components/effects";
import Link from "next/link";
import {
  Check,
  Workflow,
  Mail,
  BarChart3,
  ShoppingCart,
  Users,
  FileText,
  Zap,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Eskadia Automatizaciones - Automatización a medida con n8n",
  description:
    "Diseñamos e implementamos automatizaciones personalizadas para tu empresa. Eliminamos tareas repetitivas para que tu equipo se enfoque en lo que importa.",
};

export default function AutomatizacionesPage() {
  const useCases = [
    {
      icon: ShoppingCart,
      title: "Ventas y CRM",
      description:
        "Seguimiento automático de leads, emails personalizados según etapa del pipeline y alertas cuando un prospecto muestra interés.",
      examples: [
        "Enriquecimiento automático de contactos",
        "Secuencias de seguimiento por email",
        "Notificaciones de leads calientes",
        "Sincronización con tu CRM",
      ],
    },
    {
      icon: FileText,
      title: "Operaciones internas",
      description:
        "Facturación automática, onboarding de empleados, generación de informes y gestión de tareas sin intervención manual.",
      examples: [
        "Generación automática de facturas",
        "Flujos de onboarding de clientes",
        "Informes semanales automatizados",
        "Gestión de aprobaciones",
      ],
    },
    {
      icon: Mail,
      title: "Marketing",
      description:
        "Campañas automatizadas, segmentación inteligente y nurturing de leads que convierten sin esfuerzo manual.",
      examples: [
        "Campañas de email automatizadas",
        "Segmentación dinámica de audiencias",
        "Publicación en redes sociales",
        "Seguimiento de conversiones",
      ],
    },
    {
      icon: BarChart3,
      title: "Datos e informes",
      description:
        "Recopilación, transformación y visualización de datos de múltiples fuentes en dashboards unificados.",
      examples: [
        "Consolidación de datos multifuente",
        "Informes automáticos por email",
        "Alertas por KPIs críticos",
        "Sincronización entre plataformas",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Diagnóstico",
      description:
        "Analizamos tus procesos actuales, identificamos cuellos de botella y tareas repetitivas que se pueden automatizar.",
    },
    {
      step: "02",
      title: "Diseño",
      description:
        "Diseñamos la solución de automatización con flujos claros, integraciones necesarias y lógica de negocio específica para tu caso.",
    },
    {
      step: "03",
      title: "Implementación",
      description:
        "Construimos y configuramos las automatizaciones en n8n, conectamos tus herramientas y realizamos pruebas exhaustivas.",
    },
    {
      step: "04",
      title: "Entrega y soporte",
      description:
        "Desplegamos en producción, formamos a tu equipo y te acompañamos con soporte continuo para ajustes y mejoras.",
    },
  ];

  const integrations = [
    "Google Workspace",
    "Microsoft 365",
    "Slack",
    "HubSpot",
    "Stripe",
    "Notion",
    "Airtable",
    "Shopify",
    "WhatsApp Business",
    "Mailchimp",
    "Trello",
    "PostgreSQL",
  ];

  const plans = [
    {
      name: "Essentials",
      price: 490,
      period: "/mes",
      description: "Para empresas que empiezan a automatizar sus procesos",
      features: [
        "Hasta 5 flujos de automatización",
        "Integraciones básicas",
        "Soporte por email",
        "Revisión mensual",
        "Hasta 10.000 ejecuciones/mes",
      ],
      cta: "Empezar",
      highlighted: false,
    },
    {
      name: "Business",
      price: 990,
      period: "/mes",
      description: "Para equipos que necesitan automatización avanzada",
      features: [
        "Hasta 15 flujos de automatización",
        "Integraciones avanzadas + API",
        "Soporte prioritario",
        "Revisión quincenal",
        "Hasta 50.000 ejecuciones/mes",
        "Flujos condicionales complejos",
        "Dashboard de monitorización",
      ],
      cta: "Empezar",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "Para organizaciones con necesidades a medida",
      features: [
        "Flujos ilimitados",
        "Integraciones personalizadas",
        "Soporte dedicado 24/7",
        "Account manager asignado",
        "Ejecuciones ilimitadas",
        "Desarrollo a medida",
        "SLA garantizado",
        "Formación al equipo",
      ],
      cta: "Contactar",
      highlighted: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 pt-10 pb-20">
        <HeroWatermark src="/logos/solo-k-512.svg" alt="Eskadia Automatización" size={420} />
        <div className="relative z-10 text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <img src="/logos/logo-autimatizacion.svg" alt="Eskadia Automatización" className="w-12 h-12" />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">
            <Zap className="w-4 h-4" />
            Servicio de automatización a medida
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold">
            <GradientText as="span" animated={true}>
              Automatiza lo repetitivo,
            </GradientText>
            <br />
            enfócate en lo importante
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diseñamos e implementamos automatizaciones personalizadas con n8n
            para tu empresa. Sin que necesites equipo técnico. Nosotros nos
            encargamos de todo.
          </p>

          <div className="flex items-center justify-center gap-4">
            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block font-semibold"
              >
                Solicitar diagnóstico gratis
              </Link>
            </ShimmerButton>

            <Link
              href="/pricing"
              className="px-8 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors inline-block"
            >
              Ver precios
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 text-center">
          <div>
            <NumberCounter
              value={500}
              duration={2000}
              suffix="+"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Flujos implementados</p>
          </div>
          <div>
            <NumberCounter
              value={85}
              duration={2000}
              suffix="%"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Reducción de tareas manuales</p>
          </div>
          <div>
            <NumberCounter
              value={200}
              duration={2000}
              suffix="+"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Integraciones disponibles</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText animated={false}>¿Qué puedes automatizar?</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Si es repetitivo, se puede automatizar. Estos son los casos más
            frecuentes que implementamos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <GlassCard key={useCase.title} hover={true} glow={true}>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.examples.map((example) => (
                    <li key={example} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText animated={false}>Cómo trabajamos</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            Un proceso claro de principio a fin
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <div key={step.step} className="relative">
              <GlassCard hover={true}>
                <div className="p-6">
                  <span className="text-5xl font-bold text-primary/20">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </GlassCard>
              {index < process.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText animated={false}>
              Conectamos tus herramientas
            </GradientText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Integramos con las plataformas que ya usas. Si tiene API, lo
            conectamos.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((name) => (
            <GlassCard key={name} hover={true}>
              <div className="p-4 text-center">
                <p className="font-medium text-sm">{name}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Y más de 200 integraciones adicionales con n8n
        </p>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText animated={false}>Planes de automatización</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            Elige el plan que se adapte al volumen de tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <GlassCard
              key={plan.name}
              hover={true}
              glow={plan.highlighted}
              animatedBorder={plan.highlighted}
            >
              <div className="p-8">
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
                    Más popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  {plan.price ? (
                    <>
                      <span className="text-5xl font-bold">{plan.price}€</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold">A medida</span>
                  )}
                </div>
                <ShimmerButton
                  shimmerColor="rgba(99, 102, 241, 0.3)"
                  className="w-full"
                >
                  <Link
                    href="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center ${
                      plan.highlighted
                        ? "bg-primary text-white hover:bg-primary-hover"
                        : "border border-border hover:bg-card-hover"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </ShimmerButton>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Why n8n */}
      <section className="max-w-5xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText animated={false}>¿Por qué n8n?</GradientText>
          </h2>
        </div>

        <GlassCard glow={true}>
          <div className="p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Workflow className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Open Source</h3>
                <p className="text-sm text-muted-foreground">
                  Sin dependencia de proveedores. Tus automatizaciones son tuyas
                  y puedes alojarlas donde quieras.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Potente y flexible</h3>
                <p className="text-sm text-muted-foreground">
                  Lógica condicional avanzada, webhooks, código personalizado y
                  más de 400 nodos nativos.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Comunidad activa</h3>
                <p className="text-sm text-muted-foreground">
                  Respaldado por una comunidad global de miles de desarrolladores
                  y más de 900 integraciones.
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
                ¿Listo para dejar de hacer tareas repetitivas?
              </GradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cuéntanos qué procesos quieres automatizar y te preparamos un
              diagnóstico gratuito con propuesta personalizada.
            </p>
            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/contact"
                className="px-12 py-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block text-lg font-semibold"
              >
                Solicitar diagnóstico gratis
              </Link>
            </ShimmerButton>
            <p className="text-sm text-muted-foreground mt-4">
              Sin compromiso · Respuesta en 24h
            </p>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
