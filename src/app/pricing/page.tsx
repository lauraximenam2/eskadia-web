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
      description: "Perfect for individuals and small teams",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "Up to 1,000 contacts",
        "Basic automation workflows",
        "Email support",
        "5 team members",
        "10 integrations",
        "Mobile app access",
        "Basic reporting",
      ],
      limitations: [
        "No API access",
        "No custom branding",
        "Limited workflow complexity",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      description: "For growing teams that need more power",
      monthlyPrice: 99,
      annualPrice: 82,
      features: [
        "Up to 10,000 contacts",
        "Advanced automation",
        "Priority support",
        "Unlimited team members",
        "50 integrations",
        "API access",
        "Custom reports",
        "Advanced analytics",
        "Custom branding",
        "Dedicated account manager",
      ],
      limitations: [],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      monthlyPrice: 299,
      annualPrice: 249,
      features: [
        "Unlimited contacts",
        "Custom automation",
        "24/7 dedicated support",
        "Unlimited team members",
        "Unlimited integrations",
        "Advanced API access",
        "Custom dashboards",
        "SSO & advanced security",
        "Custom SLA",
        "Training & onboarding",
        "Priority feature requests",
      ],
      limitations: [],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans at any time?",
      answer:
        "Yes! You can upgrade or downgrade your plan anytime. When upgrading, you'll be charged the prorated difference. When downgrading, the credit will be applied to your next billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and for Enterprise plans, we also offer invoice billing.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! All plans include a 14-day free trial with full access to features. No credit card required to start your trial.",
    },
    {
      question: "What happens when I exceed my contact limit?",
      answer:
        "We'll notify you before you reach your limit. You can either upgrade to a higher plan or purchase additional contact capacity as an add-on.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee. If you're not satisfied for any reason, we'll refund your payment in full.",
    },
    {
      question: "Can I get a discount for non-profits?",
      answer:
        "Yes! We offer a 50% discount for registered non-profit organizations. Contact our sales team with your non-profit documentation to apply.",
    },
    {
      question: "What's included in support?",
      answer:
        "Starter plans get email support (48h response), Professional gets priority email & chat support (4h response), and Enterprise gets 24/7 dedicated support with a dedicated account manager.",
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
              Simple Pricing
            </GradientText>
            <br />
            That Scales With You
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free, scale seamlessly. No hidden fees, no surprises. Cancel
            anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <span
              className={`text-lg ${
                !isAnnual ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-card border border-border rounded-full transition-colors hover:border-primary"
              aria-label="Toggle billing period"
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
              Annual
            </span>
            {isAnnual && (
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                Save up to 20%
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
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">${price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-accent mt-2">
                        Save ${savings}/year ({percentage}% off)
                      </p>
                    )}
                    {!isAnnual && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Billed monthly
                      </p>
                    )}
                    {isAnnual && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Billed annually at ${price * 12}
                      </p>
                    )}
                  </div>

                  <ShimmerButton
                    shimmerColor="rgba(99, 102, 241, 0.3)"
                    className="w-full"
                  >
                    <Link
                      href={
                        plan.cta === "Contact Sales"
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
                      Everything included:
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
                          Not included:
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
          All plans include 14-day free trial • No credit card required •
          Cancel anytime
        </p>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-5xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Compare Plans</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your needs
          </p>
        </div>

        <GlassCard>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold">Professional</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Contacts", "1,000", "10,000", "Unlimited"],
                  ["Team Members", "5", "Unlimited", "Unlimited"],
                  ["Integrations", "10", "50", "Unlimited"],
                  ["API Access", "✗", "✓", "✓"],
                  ["Custom Branding", "✗", "✓", "✓"],
                  ["Priority Support", "✗", "✓", "✓"],
                  ["SSO", "✗", "✗", "✓"],
                  ["Dedicated Manager", "✗", "✗", "✓"],
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
              <GradientText>Ready to Get Started?</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of teams automating their workflows with Processia
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
              No credit card required • Cancel anytime • Money-back guarantee
            </p>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
