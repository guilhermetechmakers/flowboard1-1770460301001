import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-2xl font-semibold text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-foreground-secondary">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-slate mt-12 max-w-none">
          <h2>Data collection</h2>
          <p>
            We collect information you provide directly, including account details,
            content you create, and usage data. We use this to provide and improve
            our services.
          </p>

          <h2>Retention</h2>
          <p>
            We retain your data for as long as your account is active. You may
            request deletion at any time.
          </p>

          <h2>Your rights</h2>
          <p>
            You have the right to access, correct, export, and delete your data.
            Contact our data protection officer for requests.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy inquiries: privacy@flowboard.example.com
          </p>
        </div>

        <Button variant="outline" className="mt-8" asChild>
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
