"use client";

import {
  GradientText,
  GlassCard,
  ShimmerButton,
} from "@/components/effects";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { useState } from "react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfecto para emprendedores y equipos pequeños",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "Hasta 1.000 contactos",
        "Automatizaciones básicas",
        "Soporte por email",
        "5 miembros del equipo",
        "10 integraciones",
        "App móvil",
        "Informes básicos",
      ],
      limitations: [
        "Sin acceso a API",
        "Sin marca personalizada",
        "Flujos de trabajo limitados",
      ],
      cta: "Prueba gratis",
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Para equipos en crecimiento que necesitan más potencia",
      monthlyPrice: 99,
      annualPrice: 82,
      features: [
        "Hasta 10.000 contactos",
        "Automatizaciones avanzadas",
        "Soporte prioritario",
        "Miembros ilimitados",
        "50 integraciones",
        "Acceso a API",
        "Informes personalizados",
        "Analítica avanzada",
        "Marca personalizada",
        "Account manager dedicado",
      ],
      limitations: [],
      cta: "Prueba gratis",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "Para organizaciones grandes con necesidades específicas",
      monthlyPrice: 299,
      annualPrice: 249,
      features: [
        "Contactos ilimitados",
        "Automatización personalizada",
        "Soporte dedicado 24/7",
        "Miembros ilimitados",
        "Integraciones ilimitadas",
        "API avanzada",
        "Dashboards personalizados",
        "SSO y seguridad avanzada",
        "SLA personalizado",
        "Formación y onboarding",
        "Solicitudes de funcionalidades prioritarias",
      ],
      limitations: [],
      cta: "Contactar ventas",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer:
        "¡Sí! Puedes subir o bajar de plan cuando quieras. Al subir, se te cobrará la diferencia proporcional. Al bajar, el crédito se aplicará a tu próximo ciclo de facturación.",
    },
    {
      question: "¿Qué métodos de pago aceptáis?",
      answer:
        "Aceptamos todas las tarjetas principales (Visa, MasterCard, American Express), PayPal, y para planes Enterprise también ofrecemos facturación.",
    },
    {
      question: "¿Hay prueba gratuita?",
      answer:
        "¡Sí! Todos los planes incluyen 14 días de prueba gratuita con acceso completo. No se requiere tarjeta de crédito para empezar.",
    },
    {
      question: "¿Qué pasa si supero mi límite de contactos?",
      answer:
        "Te notificaremos antes de llegar al límite. Puedes subir de plan o comprar capacidad adicional como complemento.",
    },
    {
      question: "¿Ofrecéis reembolsos?",
      answer:
        "Sí, ofrecemos garantía de devolución de 30 días. Si no estás satisfecho por cualquier motivo, te devolvemos el pago completo.",
    },
    {
      question: "¿Hay descuento para ONGs?",
      answer:
        "¡Sí! Ofrecemos un 50% de descuento para organizaciones sin ánimo de lucro registradas. Contacta con nuestro equipo de ventas con tu documentación.",
    },
    {
      question: "¿Qué incluye el soporte?",
      answer:
        "Starter: soporte por email (48h). Professional: email y chat prioritario (4h). Enterprise: soporte dedicado 24/7 con account manager.",
    },
  ];

  const calculateSavings = (monthlyPrice: number, annualPrice: number) => {
    const monthlyCost = monthlyPrice * 12;
    const annualCost = annualPrice * 12;
    const savings = monthlyCost - annualCost;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { savings, percentage };
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold">
            <GradientText as="span" animated={true}>
              Precios simples
            </GradientText>
            <br />
            que escalan contigo
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empieza gratis, escala sin complicaciones. Sin costes ocultos, sin
            sorpresas. Cancela cuando quieras.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <span
              className={`text-lg ${
                !isAnnual ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
            >
              Mensual
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-card border border-border rounded-full transition-colors hover:border-primary"
              aria-label="Cambiar periodo de facturación"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-primary rounded-full transition-transform ${
                  isAnnual ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-lg ${
                isAnnual ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
            >
              Anual
            </span>
            {isAnnual && (
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                Ahorra hasta un 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const { savings, percentage } = calculateSavings(
              plan.monthlyPrice,
              plan.annualPrice
            );

            return (
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
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">{price}€</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-accent mt-2">
                        Ahorra {savings}€/año ({percentage}% dto.)
                      </p>
                    )}
                    {!isAnnual && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Facturación mensual
                      </p>
                    )}
                    {isAnnual && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Facturación anual: {price * 12}€
                      </p>
                    )}
                  </div>

                  <ShimmerButton
                    shimmerColor="rgba(99, 102, 241, 0.3)"
                    className="w-full"
                  >
                    <Link
                      href={
                        plan.cta === "Contactar ventas"
                          ? "/contact"
                          : "/get-started"
                      }
                      className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center ${
                        plan.highlighted
                          ? "bg-primary text-white hover:bg-primary-hover"
                          : "border border-border hover:bg-card-hover"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </ShimmerButton>

                  <div className="mt-8 space-y-3">
                    <p className="font-semibold text-sm">
                      Todo incluido:
                    </p>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.length > 0 && (
                      <>
                        <p className="font-semibold text-sm pt-4">
                          No incluido:
                        </p>
                        {plan.limitations.map((limitation) => (
                          <div key={limitation} className="flex items-start gap-3">
                            <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {limitation}
                            </span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          Todos los planes incluyen 14 días de prueba gratis · Sin tarjeta de
          crédito · Cancela cuando quieras
        </p>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-5xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Comparar planes</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>

        <GlassCard>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Funcionalidad</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold">Professional</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Contactos", "1.000", "10.000", "Ilimitados"],
                  ["Miembros", "5", "Ilimitados", "Ilimitados"],
                  ["Integraciones", "10", "50", "Ilimitadas"],
                  ["Acceso API", "✗", "✓", "✓"],
                  ["Marca personalizada", "✗", "✓", "✓"],
                  ["Soporte prioritario", "✗", "✓", "✓"],
                  ["SSO", "✗", "✗", "✓"],
                  ["Manager dedicado", "✗", "✗", "✓"],
                ].map(([feature, starter, pro, enterprise]) => (
                  <tr key={feature} className="border-b border-border">
                    <td className="p-4 text-muted-foreground">{feature}</td>
                    <td className="p-4 text-center">{starter}</td>
                    <td className="p-4 text-center">{pro}</td>
                    <td className="p-4 text-center">{enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
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
              <GradientText>¿Listo para empezar?</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a las empresas que ya automatizan sus flujos de trabajo con
              Eskadia
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
              Sin tarjeta de crédito · Cancela cuando quieras · Garantía de
              devolución
            </p>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
