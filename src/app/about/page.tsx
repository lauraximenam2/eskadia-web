import {
  GradientText,
  GlassCard,
  ShimmerButton,
  NumberCounter,
} from "@/components/effects";
import Link from "next/link";
import { Target, Zap, Users, Heart, TrendingUp, Shield } from "lucide-react";

export const metadata = {
  title: "Nosotros - Eskadia",
  description:
    "Conoce nuestra misión de democratizar la automatización y al equipo que construye el futuro de los procesos empresariales.",
};

export default function AboutPage() {
  const team = [
    {
      name: "María",
      role: "CEO y Co-Fundador",
      bio: "Consultor de automatización con más de 10 años ayudando a empresas a optimizar sus flujos de trabajo. Apasionado por hacer que la automatización empresarial sea accesible para todos.",
      image: "IG",
    },
    {
      name: "Pepe",
      role: "CTO y Co-Fundadora",
      bio: "Ingeniera y defensora del código abierto. Ha construido sistemas escalables para miles de usuarios. Cree que la IA debe potenciar las capacidades humanas, no reemplazarlas.",
      image: "LM",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Cliente primero",
      description:
        "Cada decisión que tomamos empieza preguntando: ¿esto ayuda a nuestros clientes a tener éxito? Construimos productos que nosotros mismos querríamos usar.",
    },
    {
      icon: Zap,
      title: "Velocidad",
      description:
        "Lanzamos rápido, aprendemos rápido e iteramos constantemente. La velocidad es una ventaja competitiva, pero la calidad no es negociable.",
    },
    {
      icon: Heart,
      title: "IA centrada en las personas",
      description:
        "La IA debe potenciar la creatividad y la toma de decisiones humana, no reemplazarla. Construimos herramientas que amplifican lo que las personas hacen mejor.",
    },
    {
      icon: Users,
      title: "Colaboración",
      description:
        "Las mejores ideas surgen de perspectivas diversas. Fomentamos la comunicación abierta y el debate constructivo.",
    },
    {
      icon: TrendingUp,
      title: "Mentalidad de crecimiento",
      description:
        "Abrazamos los desafíos como oportunidades para aprender. Cada error es feedback y cada obstáculo es una lección.",
    },
    {
      icon: Shield,
      title: "Confianza",
      description:
        "Manejamos tus datos con el máximo cuidado y transparencia. La seguridad y la privacidad no son funcionalidades, son cimientos.",
    },
  ];

  const milestones = [
    { year: "2023", event: "Fundación de la empresa" },
    { year: "2024", event: "Primeros 100 clientes" },
    { year: "2025", event: "Lanzamiento de Eskadia CRM" },
    { year: "2026", event: "Expansión y funcionalidades con IA" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold">
            <GradientText as="span" animated={true}>
              Construyendo el futuro
            </GradientText>
            <br />
            de la automatización empresarial
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creemos que toda empresa debería tener acceso a automatización de
            nivel empresarial, sin la complejidad ni el precio de las grandes
            soluciones.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-24 text-center">
          <div>
            <NumberCounter
              value={2023}
              duration={2000}
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Fundación</p>
          </div>
          <div>
            <NumberCounter
              value={10}
              duration={2000}
              suffix="+"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Miembros del equipo</p>
          </div>
          <div>
            <NumberCounter
              value={500}
              duration={2000}
              suffix="+"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Clientes satisfechos</p>
          </div>
          <div>
            <NumberCounter
              value={10000}
              duration={2000}
              suffix="+"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Tareas automatizadas</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Nuestra Misión</GradientText>
          </h2>
        </div>

        <GlassCard glow={true} animatedBorder={true}>
          <div className="p-12">
            <p className="text-2xl text-center leading-relaxed mb-8">
              Democratizar la automatización y la IA, haciendo herramientas
              potentes accesibles para empresas de todos los tamaños, para que
              los equipos puedan centrarse en lo que mejor hacen las personas:
              crear, innovar y construir relaciones.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Accesibilidad</h3>
                <p className="text-sm text-muted-foreground">
                  Funcionalidades empresariales a precios accesibles
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Simplicidad</h3>
                <p className="text-sm text-muted-foreground">
                  Herramientas potentes que cualquiera puede usar
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Impacto</h3>
                <p className="text-sm text-muted-foreground">
                  Ayudar a los equipos a trabajar en lo que importa
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Team Section */}
      <section className="max-w-5xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Conoce a los Fundadores</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            El equipo con la misión de transformar cómo trabajan las empresas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <GlassCard key={member.name} hover={true} glow={true}>
              <div className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-white">
                      {member.image}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold">{member.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Estamos buscando personas con talento para unirse a nuestra misión
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Nuestros Valores</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            Los principios que guían todo lo que hacemos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <GlassCard key={value.title} hover={true}>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Nuestro Camino</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            De una idea a una plataforma en crecimiento
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
              >
                <div className="flex-1 text-right">
                  {index % 2 === 0 && (
                    <GlassCard hover={true}>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          {milestone.year}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.event}
                        </p>
                      </div>
                    </GlassCard>
                  )}
                </div>

                <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                <div className="flex-1 text-left">
                  {index % 2 === 1 && (
                    <GlassCard hover={true}>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          {milestone.year}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.event}
                        </p>
                      </div>
                    </GlassCard>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 py-32 text-center">
        <GlassCard glow={true} animatedBorder={true}>
          <div className="p-16">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Acompáñanos en este camino</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ya seas cliente, partner o futuro miembro del equipo, nos
              encantaría saber de ti.
            </p>
            <div className="flex items-center justify-center gap-4">
              <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
                <Link
                  href="/get-started"
                  className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block font-semibold"
                >
                  Empezar gratis
                </Link>
              </ShimmerButton>
              <Link
                href="/contact"
                className="px-8 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors inline-block"
              >
                Contactar
              </Link>
            </div>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
