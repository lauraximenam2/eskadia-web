import {
  GradientText,
  GlassCard,
  ShimmerButton,
  NumberCounter,
} from "@/components/effects";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  Award,
  Users,
  TrendingUp,
  Target,
} from "lucide-react";

export const metadata = {
  title: "Processia Academy - Learn Business Automation",
  description:
    "Master automation and AI with expert-led courses. Get certified and transform your career.",
};

export default function AcademyPage() {
  const courses = [
    {
      title: "Automation Fundamentals",
      description:
        "Learn the basics of workflow automation and process optimization.",
      duration: "8 hours",
      level: "Beginner",
      students: 1245,
      icon: BookOpen,
    },
    {
      title: "Advanced n8n Workflows",
      description:
        "Build complex automation workflows with n8n and integrate multiple tools.",
      duration: "12 hours",
      level: "Intermediate",
      students: 892,
      icon: TrendingUp,
    },
    {
      title: "AI Integration Mastery",
      description:
        "Integrate AI models into your workflows for intelligent automation.",
      duration: "10 hours",
      level: "Advanced",
      students: 654,
      icon: Target,
    },
    {
      title: "CRM Implementation",
      description:
        "Set up and customize Processia CRM for your specific business needs.",
      duration: "6 hours",
      level: "Beginner",
      students: 1567,
      icon: Users,
    },
    {
      title: "Data Analytics & Reporting",
      description:
        "Create powerful dashboards and automate reporting workflows.",
      duration: "9 hours",
      level: "Intermediate",
      students: 743,
      icon: TrendingUp,
    },
    {
      title: "Enterprise Automation",
      description:
        "Scale automation across your organization with best practices.",
      duration: "15 hours",
      level: "Advanced",
      students: 421,
      icon: Award,
    },
  ];

  const certifications = [
    {
      title: "Certified Automation Specialist",
      description:
        "Demonstrate your expertise in workflow automation and process optimization.",
      requirements: ["Complete 3 courses", "Pass final exam", "Build portfolio project"],
      badge: "CAS",
    },
    {
      title: "Advanced Integration Expert",
      description:
        "Prove your mastery of complex integrations and advanced automation patterns.",
      requirements: ["Complete 5 courses", "Pass advanced exam", "Complete capstone project"],
      badge: "AIE",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold">
            <GradientText as="span" animated={true}>
              Learn Automation
            </GradientText>
            <br />
            That Actually Makes Money
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the skills that companies are desperate to hire. Our
            hands-on courses teach you real automation workflows used by
            Fortune 500 companies.
          </p>

          <div className="flex items-center justify-center gap-4">
            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/academy/courses"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block font-semibold"
              >
                Browse Courses
              </Link>
            </ShimmerButton>

            <Link
              href="/academy/pricing"
              className="px-8 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors inline-block"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-24 text-center">
          <div>
            <NumberCounter
              value={5000}
              duration={2000}
              suffix="+"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Students Enrolled</p>
          </div>
          <div>
            <NumberCounter
              value={50}
              duration={2000}
              suffix="+"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Hours of Content</p>
          </div>
          <div>
            <NumberCounter
              value={95}
              duration={2000}
              suffix="%"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Completion Rate</p>
          </div>
          <div>
            <NumberCounter
              value={4.9}
              duration={2000}
              decimals={1}
              suffix="/5"
              className="text-4xl font-bold text-primary mb-2"
            />
            <p className="text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Popular Courses</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            Learn from industry experts and build real-world projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <GlassCard key={course.title} hover={true} glow={true}>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <course.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      course.level === "Beginner"
                        ? "bg-accent/20 text-accent"
                        : course.level === "Intermediate"
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary/20 text-secondary"
                    }`}
                  >
                    {course.level}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {course.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {course.students.toLocaleString()} students
                  </span>
                  <Link
                    href={`/academy/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary hover:text-primary-hover font-semibold text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/academy/courses"
            className="inline-block px-8 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors"
          >
            View All Courses
          </Link>
        </div>
      </section>

      {/* Certification Section */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Get Certified</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Earn industry-recognized certifications that prove your expertise
            and boost your career
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <GlassCard key={cert.title} hover={true} animatedBorder={true}>
              <div className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">
                      {cert.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {cert.requirements.map((req) => (
                      <li key={req} className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ShimmerButton
                  shimmerColor="rgba(99, 102, 241, 0.3)"
                  className="w-full"
                >
                  <button className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-semibold">
                    Start Certification Path
                  </button>
                </ShimmerButton>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Your Learning Journey</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            Follow a structured path from beginner to expert
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

          <div className="space-y-16">
            {[
              {
                step: 1,
                title: "Foundation",
                description: "Start with automation fundamentals and CRM basics",
                duration: "2-3 weeks",
              },
              {
                step: 2,
                title: "Intermediate",
                description: "Build complex workflows and integrate multiple tools",
                duration: "4-6 weeks",
              },
              {
                step: 3,
                title: "Advanced",
                description: "Master AI integration and enterprise automation",
                duration: "6-8 weeks",
              },
              {
                step: 4,
                title: "Certification",
                description: "Complete your capstone project and get certified",
                duration: "2-4 weeks",
              },
            ].map((phase, index) => (
              <div
                key={phase.step}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <GlassCard hover={true}>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold">
                          {phase.step}
                        </div>
                        <h3 className="text-2xl font-bold">{phase.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        {phase.description}
                      </p>
                      <p className="text-sm text-primary font-semibold">
                        Duration: {phase.duration}
                      </p>
                    </div>
                  </GlassCard>
                </div>
                <div className="hidden md:block w-8" />
                <div className="flex-1 hidden md:block" />
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
              <GradientText>Ready to Start Learning?</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students mastering automation and building
              valuable skills
            </p>
            <ShimmerButton shimmerColor="rgba(99, 102, 241, 0.3)">
              <Link
                href="/academy/enroll"
                className="px-12 py-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block text-lg font-semibold"
              >
                Enroll Now
              </Link>
            </ShimmerButton>
            <p className="text-sm text-muted-foreground mt-4">
              7-day money-back guarantee • Lifetime access
            </p>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
