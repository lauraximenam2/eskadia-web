import {
  GradientText,
  GlassCard,
  ShimmerButton,
  NumberCounter,
} from "@/components/effects";
import Link from "next/link";
import { Target, Zap, Users, Heart, TrendingUp, Shield } from "lucide-react";

export const metadata = {
  title: "About Eskadia - Our Mission & Team",
  description:
    "Learn about our mission to democratize automation and meet the team building the future of business processes.",
};

export default function AboutPage() {
  const team = [
    {
      name: "Iván Gaitero",
      role: "CEO & Co-Founder",
      bio: "Former automation consultant with 10+ years helping Fortune 500 companies optimize their workflows. Passionate about making enterprise-grade automation accessible to everyone.",
      image: "SC",
    },
    {
      name: "Laura Martínez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer and open-source advocate. Built scalable systems for millions of users. Believes AI should augment human capabilities, not replace them.",
      image: "MR",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Customer-First",
      description:
        "Every decision we make starts with asking: does this help our customers succeed? We build products we'd want to use ourselves.",
    },
    {
      icon: Zap,
      title: "Move Fast",
      description:
        "We ship quickly, learn rapidly, and iterate constantly. Speed is a competitive advantage, but quality is non-negotiable.",
    },
    {
      icon: Heart,
      title: "Human-Centered AI",
      description:
        "AI should enhance human creativity and decision-making, not replace it. We build tools that amplify what people do best.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description:
        "The best ideas come from diverse perspectives. We foster open communication and encourage healthy debate.",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description:
        "We embrace challenges as opportunities to learn. Failure is feedback, and every setback is a lesson in disguise.",
    },
    {
      icon: Shield,
      title: "Trustworthy",
      description:
        "We handle your data with the utmost care and transparency. Security and privacy aren't features—they're foundations.",
    },
  ];

  const milestones = [
    { year: "2021", event: "Company founded" },
    { year: "2022", event: "First 1,000 customers" },
    { year: "2023", event: "Series A funding" },
    { year: "2024", event: "10,000+ active users" },
    { year: "2025", event: "International expansion" },
    { year: "2026", event: "AI-powered features launch" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold">
            <GradientText as="span" animated={true}>
              Building the Future
            </GradientText>
            <br />
            of Business Automation
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe every business should have access to enterprise-grade
            automation—without the enterprise complexity or price tag.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-24 text-center">
          <div>
            <NumberCounter
              value={2021}
              duration={2000}
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Founded</p>
          </div>
          <div>
            <NumberCounter
              value={50}
              duration={2000}
              suffix="+"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Team Members</p>
          </div>
          <div>
            <NumberCounter
              value={10000}
              duration={2000}
              suffix="+"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div>
            <NumberCounter
              value={25}
              duration={2000}
              suffix="M+"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Tasks Automated</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Our Mission</GradientText>
          </h2>
        </div>

        <GlassCard glow={true} animatedBorder={true}>
          <div className="p-12">
            <p className="text-2xl text-center leading-relaxed mb-8">
              To democratize automation and AI, making powerful tools accessible
              to businesses of all sizes—so teams can focus on what humans do
              best: creating, innovating, and building relationships.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise features at startup prices
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Simplicity</h3>
                <p className="text-sm text-muted-foreground">
                  Powerful tools that anyone can use
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Help teams work on what matters
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
            <GradientText>Meet the Founders</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            The team on a mission to transform how businesses work
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
            We&apos;re hiring talented people to join our mission
          </p>
          <Link
            href="/careers"
            className="inline-block px-8 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Our Values</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            The principles that guide everything we do
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
            <GradientText>Our Journey</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            From a simple idea to a growing platform
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
              <GradientText>Join Us on This Journey</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a customer, partner, or future team
              member—we&apos;d love to hear from you.
            </p>
            <div className="flex items-center justify-center gap-4">
              <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
                <Link
                  href="/get-started"
                  className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block font-semibold"
                >
                  Get Started
                </Link>
              </ShimmerButton>
              <Link
                href="/contact"
                className="px-8 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
