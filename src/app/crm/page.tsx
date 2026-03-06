import {
  GradientText,
  GlassCard,
  ShimmerButton,
  NumberCounter,
  HeroWatermark,
} from "@/components/effects";
import Link from "next/link";
import { Check, X } from "lucide-react";

export const metadata = {
  title: "Eskadia CRM - Gestión de clientes con IA",
  description:
    "Transforma tus relaciones con clientes con automatización inteligente, analítica predictiva e integraciones sin fricciones.",
};

export default function CRMPage() {
  const features = [
    {
      title: "Puntuación inteligente de leads",
      description:
        "Algoritmos con IA que analizan el comportamiento y engagement de tus clientes para priorizar automáticamente los leads más valiosos.",
      benefits: [
        "Puntuación predictiva de leads",
        "Analítica de comportamiento",
        "Priorización automática",
        "Insights en tiempo real",
      ],
    },
    {
      title: "Vista unificada del cliente",
      description:
        "Obtén una visión completa 360° de cada interacción con el cliente a través de todos los canales en un dashboard intuitivo.",
      benefits: [
        "Seguimiento multicanal",
        "Historial de interacciones",
        "Campos de datos personalizados",
        "Línea temporal de actividad",
      ],
    },
    {
      title: "Flujos de trabajo automatizados",
      description:
        "Crea flujos de automatización sofisticados que responden a las acciones del cliente y activan el engagement adecuado en el momento preciso.",
      benefits: [
        "Constructor visual de flujos",
        "Lógica condicional",
        "Secuencias multipaso",
        "Analítica de rendimiento",
      ],
    },
    {
      title: "Integraciones inteligentes",
      description:
        "Conecta con más de 200 herramientas y plataformas a través de integraciones nativas o conexiones API personalizadas.",
      benefits: [
        "Integraciones nativas",
        "Acceso API personalizado",
        "Soporte de webhooks",
        "Sincronización en tiempo real",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 29,
      description: "Perfecto para equipos pequeños que empiezan",
      features: [
        "Hasta 1.000 contactos",
        "Automatización básica",
        "Soporte por email",
        "5 miembros del equipo",
        "10 integraciones",
      ],
      limitations: ["Sin acceso API", "Informes limitados"],
    },
    {
      name: "Professional",
      price: 99,
      description: "Para equipos en crecimiento que necesitan más",
      features: [
        "Hasta 10.000 contactos",
        "Automatización avanzada",
        "Soporte prioritario",
        "Miembros ilimitados",
        "50 integraciones",
        "Acceso API",
        "Informes personalizados",
      ],
      limitations: [],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: 299,
      description: "Para organizaciones grandes con necesidades específicas",
      features: [
        "Contactos ilimitados",
        "Automatización personalizada",
        "Soporte dedicado",
        "Miembros ilimitados",
        "Integraciones ilimitadas",
        "API avanzada",
        "Dashboards personalizados",
        "SSO y seguridad avanzada",
      ],
      limitations: [],
    },
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo lleva la configuración?",
      answer:
        "La mayoría de equipos están operativos en menos de 30 minutos. Nuestro asistente de onboarding te guía para importar contactos, conectar integraciones y crear tu primera automatización.",
    },
    {
      question: "¿Puedo migrar datos desde mi CRM actual?",
      answer:
        "¡Sí! Soportamos importación de datos desde las principales plataformas CRM como Salesforce, HubSpot y Pipedrive. Nuestro equipo de soporte puede ayudarte con la migración.",
    },
    {
      question: "¿Qué integraciones están disponibles?",
      answer:
        "Nos integramos con más de 200 herramientas incluyendo proveedores de email, calendarios, pasarelas de pago y plataformas de marketing. También puedes crear integraciones personalizadas con nuestra API.",
    },
    {
      question: "¿Mis datos están seguros?",
      answer:
        "Por supuesto. Usamos cifrado de nivel empresarial, auditorías de seguridad regulares y cumplimos con GDPR, SOC 2 e ISO 27001. Tus datos se respaldan diariamente.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 pt-10 pb-20">
        <HeroWatermark src="/logos/logo-crm.svg" alt="Eskadia CRM" size={340} />
        <div className="relative z-10 text-center space-y-8 mb-16">
          <div className="flex justify-center">
            {/*             <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <img src="/logos/logo-crm.svg" alt="Eskadia CRM" className="w-12 h-12" />
            </div> */}
          </div>
          <h1 className="text-6xl font-bold">
            <GradientText as="span" animated={true}>
              CRM con IA
            </GradientText>
            <br />
            que realmente funciona
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deja de pelear con CRMs complejos. Eskadia CRM usa IA para
            automatizar tareas tediosas, predecir necesidades de clientes y
            ayudar a tu equipo a cerrar más ventas.
          </p>

          <div className="flex items-center justify-center gap-4">
            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/get-started"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block font-semibold"
              >
                Prueba gratis
              </Link>
            </ShimmerButton>

            <Link
              href="/contact"
              className="px-8 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors inline-block"
            >
              Solicitar demo
            </Link>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="relative max-w-5xl mx-auto">
          <GlassCard glow={true} animatedBorder={true}>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-lg">Demo del producto</p>
            </div>
          </GlassCard>
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
            <p className="text-muted-foreground">Usuarios activos</p>
          </div>
          <div>
            <NumberCounter
              value={45}
              duration={2000}
              suffix="%"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Aumento medio en ventas</p>
          </div>
          <div>
            <NumberCounter
              value={200}
              duration={2000}
              suffix="+"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Integraciones</p>
          </div>
        </div>
      </section>

      {/* Features Section - Alternating Layout */}
      <section className="max-w-7xl mx-auto px-4 py-32 space-y-32">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
          >
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <h2 className="text-4xl font-bold mb-4">
                <GradientText animated={false}>{feature.title}</GradientText>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={index % 2 === 1 ? "md:order-1" : ""}>
              <GlassCard hover={true} glow={true}>
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Vista previa</p>
                </div>
              </GlassCard>
            </div>
          </div>
        ))}
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Precios simples y transparentes</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            Elige el plan que se adapte a tu equipo y necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
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
                  <span className="text-5xl font-bold">{plan.price}€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <ShimmerButton
                  shimmerColor="rgba(99, 102, 241, 0.3)"
                  className="w-full"
                >
                  <button
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${plan.highlighted
                      ? "bg-primary text-white hover:bg-primary-hover"
                      : "border border-border hover:bg-card-hover"
                      }`}
                  >
                    Empezar gratis
                  </button>
                </ShimmerButton>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation) => (
                    <li key={limitation} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {limitation}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Preguntas frecuentes</GradientText>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <GlassCard key={faq.question} hover={true}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 py-32 text-center">
        <GlassCard glow={true} animatedBorder={true}>
          <div className="p-16">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>¿Listo para transformar tus ventas?</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a las empresas que usan Eskadia CRM para cerrar más ventas
              y construir mejores relaciones con sus clientes.
            </p>
            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/get-started"
                className="px-12 py-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block text-lg font-semibold"
              >
                Prueba gratis 14 días
              </Link>
            </ShimmerButton>
            <p className="text-sm text-muted-foreground mt-4">
              Sin tarjeta de crédito · Cancela cuando quieras
            </p>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
