import {
  GradientText,
  MagneticButton,
  ShimmerButton,
  GlassCard,
  InfiniteScroll,
  NumberCounter,
} from "@/components/effects";
import Link from "next/link";

export default function HomePage() {
  const logos = [
    "Acme Corp",
    "TechStart",
    "InnovateLabs",
    "DataFlow",
    "CloudSync",
    "AI Systems",
    "DevOps Pro",
    "SecureNet",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="text-center space-y-8">
          <GradientText as="h1" className="text-6xl font-bold" animated={true}>
            Welcome to Processia
          </GradientText>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build processes that scale. Not teams that don&apos;t. Experience
            AI-powered automation with stunning design.
          </p>

          <div className="flex items-center justify-center gap-4">
            <MagneticButton strength={20}>
              <Link
                href="/about"
                className="px-8 py-3 bg-card border border-border rounded-lg hover:bg-card-hover transition-colors inline-block"
              >
                Learn More
              </Link>
            </MagneticButton>

            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/get-started"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block"
              >
                Get Started
              </Link>
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* Social Proof - Infinite Scroll */}
      <section className="py-16 border-y border-border">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading companies
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
          <GradientText animated={false}>Powerful Features</GradientText>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Everything you need to automate your business processes and scale
          efficiently.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard hover={true} glow={true}>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI-Powered CRM</h3>
              <p className="text-muted-foreground">
                Intelligent customer relationship management with predictive
                analytics and automation.
              </p>
            </div>
          </GlassCard>

          <GlassCard hover={true} animatedBorder={true}>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Process Academy</h3>
              <p className="text-muted-foreground">
                Learn business automation with expert-led courses and hands-on
                projects.
              </p>
            </div>
          </GlassCard>

          <GlassCard hover={true} glow={true} animatedBorder={true}>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Workflow Automation
              </h3>
              <p className="text-muted-foreground">
                Build complex workflows visually with our intuitive drag-and-drop
                interface.
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
            <p className="text-muted-foreground">Uptime Guarantee</p>
          </div>

          <div>
            <NumberCounter
              value={10000}
              duration={2000}
              suffix="+"
              className="text-5xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Active Users</p>
          </div>

          <div>
            <NumberCounter
              value={24}
              duration={2000}
              suffix="/7"
              className="text-5xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Support Available</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 py-32 text-center">
        <GlassCard glow={true} animatedBorder={true}>
          <div className="p-16">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Ready to Get Started?</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of companies automating their processes with
              Processia.
            </p>
            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/get-started"
                className="px-12 py-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block text-lg font-semibold"
              >
                Start Free Trial
              </Link>
            </ShimmerButton>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
