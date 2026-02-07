import { Link } from "react-router-dom";
import {
  Sparkles,
  Layout,
  Users,
  Plug,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "AI Agent",
    description:
      "Context-aware AI that summarizes, proposes next steps, detects gaps, and generates content for your boards.",
  },
  {
    icon: Layout,
    title: "Visual Board",
    description:
      "Infinite canvas for organizing ideas, research, data, and workflows as connected flowchart nodes.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Real-time presence, cursors, comments, and assignments. Work together seamlessly.",
  },
  {
    icon: Plug,
    title: "Integrations",
    description:
      "Connect with Google Drive, Notion, Slack, GitHub and more. Your tools, unified.",
  },
];

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals and small teams",
    features: ["3 boards", "2 collaborators", "Basic AI", "Community support"],
  },
  {
    name: "Pro",
    price: "$15",
    period: "/mo",
    description: "For growing teams",
    features: [
      "Unlimited boards",
      "10 collaborators",
      "Advanced AI",
      "Priority support",
      "Export to PDF",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations",
    features: [
      "Everything in Pro",
      "SSO/SAML",
      "Dedicated support",
      "Custom integrations",
      "Audit logs",
    ],
  },
];

export function LandingPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-hero font-semibold tracking-tight text-foreground animate-in-up">
              AI-Assisted Visual Boards for Teams
            </h1>
            <p className="mt-6 text-xl text-foreground-secondary animate-in-up" style={{ animationDelay: "0.1s" }}>
              Organize ideas, research, data, and workflows as connected nodes.
              Your context-aware AI agent summarizes, proposes, and generates.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 animate-in-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="primary" size="lg" asChild>
                <Link to="/signup">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-muted bg-surface px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground">
              Everything you need to map and grow
            </h2>
            <p className="mt-4 text-foreground-secondary">
              FlowBoard combines visual mapping with AI assistance for product teams, researchers, and enterprises.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="group transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-card bg-primary/10 text-primary group-hover:bg-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo embed placeholder */}
      <section className="border-t border-muted px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground">
              See it in action
            </h2>
            <p className="mt-4 text-foreground-secondary">
              Explore a read-only sample board to experience the FlowBoard interface.
            </p>
          </div>
          <div className="mt-12 rounded-card border border-muted bg-surface p-8 shadow-card">
            <div className="aspect-video flex items-center justify-center rounded-input bg-muted/50 text-foreground-secondary">
              <div className="text-center">
                <Layout className="mx-auto h-16 w-16 opacity-50" />
                <p className="mt-2">Live demo embed</p>
                <Button variant="outline" size="sm" className="mt-4" asChild>
                  <Link to="/demo">Open Demo Board</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-muted bg-surface px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-foreground-secondary">
              Start free, upgrade when you need more.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative flex flex-col ${
                  tier.highlight
                    ? "border-primary shadow-glow ring-2 ring-primary/20"
                    : ""
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    {tier.period && (
                      <span className="text-foreground-secondary">{tier.period}</span>
                    )}
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.highlight ? "primary" : "outline"}
                    className="mt-6 w-full"
                    asChild
                  >
                    <Link to="/signup">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="border-t border-muted px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground">
              Trusted by teams everywhere
            </h2>
            <p className="mt-4 text-foreground-secondary">
              Join product teams, researchers, and enterprises using FlowBoard.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-12 opacity-60">
            {["Acme", "Globex", "Initech", "Umbrella", "Wayne"].map((name) => (
              <div
                key={name}
                className="text-xl font-semibold text-foreground-secondary"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-muted bg-surface px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="font-semibold text-primary">FlowBoard</div>
            <nav className="flex flex-wrap gap-6 text-sm text-foreground-secondary">
              <Link to="/terms" className="hover:text-foreground">
                Terms
              </Link>
              <Link to="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link to="/docs" className="hover:text-foreground">
                Docs
              </Link>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>
          <p className="mt-8 text-center text-xs text-foreground-secondary">
            © {new Date().getFullYear()} FlowBoard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
