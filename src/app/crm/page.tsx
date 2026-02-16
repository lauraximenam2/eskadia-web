import {
  GradientText,
  GlassCard,
  ShimmerButton,
  NumberCounter,
} from "@/components/effects";
import Link from "next/link";
import { Check, X } from "lucide-react";

export const metadata = {
  title: "Processia CRM - AI-Powered Customer Management",
  description:
    "Transform your customer relationships with intelligent automation, predictive analytics, and seamless integrations.",
};

export default function CRMPage() {
  const features = [
    {
      title: "Intelligent Lead Scoring",
      description:
        "AI-powered algorithms analyze customer behavior and engagement to automatically prioritize your most valuable leads.",
      benefits: [
        "Predictive lead scoring",
        "Behavioral analytics",
        "Automated prioritization",
        "Real-time insights",
      ],
    },
    {
      title: "Unified Customer View",
      description:
        "Get a complete 360° view of every customer interaction across all channels in one intuitive dashboard.",
      benefits: [
        "Cross-channel tracking",
        "Interaction history",
        "Custom data fields",
        "Activity timeline",
      ],
    },
    {
      title: "Automated Workflows",
      description:
        "Build sophisticated automation flows that respond to customer actions and trigger the right engagement at the right time.",
      benefits: [
        "Visual workflow builder",
        "Conditional logic",
        "Multi-step sequences",
        "Performance analytics",
      ],
    },
    {
      title: "Smart Integrations",
      description:
        "Connect with 200+ tools and platforms through native integrations or custom API connections.",
      benefits: [
        "Native integrations",
        "Custom API access",
        "Webhook support",
        "Real-time sync",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 29,
      description: "Perfect for small teams getting started",
      features: [
        "Up to 1,000 contacts",
        "Basic automation",
        "Email support",
        "5 team members",
        "10 integrations",
      ],
      limitations: ["No API access", "Limited reports"],
    },
    {
      name: "Professional",
      price: 99,
      description: "For growing teams that need more power",
      features: [
        "Up to 10,000 contacts",
        "Advanced automation",
        "Priority support",
        "Unlimited team members",
        "50 integrations",
        "API access",
        "Custom reports",
      ],
      limitations: [],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: 299,
      description: "For large organizations with custom needs",
      features: [
        "Unlimited contacts",
        "Custom automation",
        "Dedicated support",
        "Unlimited team members",
        "Unlimited integrations",
        "Advanced API access",
        "Custom dashboards",
        "SSO & advanced security",
      ],
      limitations: [],
    },
  ];

  const faqs = [
    {
      question: "How long does it take to set up?",
      answer:
        "Most teams are up and running in under 30 minutes. Our onboarding wizard guides you through importing contacts, connecting integrations, and building your first automation.",
    },
    {
      question: "Can I migrate data from my current CRM?",
      answer:
        "Yes! We support data import from all major CRM platforms including Salesforce, HubSpot, and Pipedrive. Our support team can help ensure a smooth migration.",
    },
    {
      question: "What integrations are available?",
      answer:
        "We integrate with 200+ tools including email providers, calendars, payment processors, and marketing platforms. You can also build custom integrations using our API.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with GDPR, SOC 2, and ISO 27001 standards. Your data is backed up daily.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-6xl font-bold">
            <GradientText as="span" animated={true}>
              AI-Powered CRM
            </GradientText>
            <br />
            That Actually Works
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop fighting with complex CRM systems. Processia CRM uses AI to
            automate tedious tasks, predict customer needs, and help your team
            close more deals.
          </p>

          <div className="flex items-center justify-center gap-4">
            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/get-started"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block font-semibold"
              >
                Start Free Trial
              </Link>
            </ShimmerButton>

            <Link
              href="/demo"
              className="px-8 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors inline-block"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="relative max-w-5xl mx-auto">
          <GlassCard glow={true} animatedBorder={true}>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                title="Processia CRM Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </GlassCard>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 text-center">
          <div>
            <NumberCounter
              value={10000}
              duration={2000}
              suffix="+"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Active Users</p>
          </div>
          <div>
            <NumberCounter
              value={45}
              duration={2000}
              suffix="%"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Average Sales Increase</p>
          </div>
          <div>
            <NumberCounter
              value={200}
              duration={2000}
              suffix="+"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Integrations</p>
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
                  <p className="text-muted-foreground">Feature Preview</p>
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
            <GradientText>Simple, Transparent Pricing</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your team size and needs
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
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
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
                    Get Started
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
            <GradientText>Frequently Asked Questions</GradientText>
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
              <GradientText>Ready to Transform Your Sales?</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of teams using Processia CRM to close more deals
              and build better customer relationships.
            </p>
            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/get-started"
                className="px-12 py-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block text-lg font-semibold"
              >
                Start Free 14-Day Trial
              </Link>
            </ShimmerButton>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Cancel anytime
            </p>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
