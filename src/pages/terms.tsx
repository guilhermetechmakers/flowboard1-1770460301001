import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-2xl font-semibold text-foreground">Terms of Service</h1>
        <p className="mt-2 text-foreground-secondary">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-slate mt-12 max-w-none">
          <h2>Acceptable use</h2>
          <p>
            You agree to use FlowBoard in compliance with applicable laws and
            to not misuse the service for harmful or illegal purposes.
          </p>

          <h2>Liability</h2>
          <p>
            FlowBoard is provided &quot;as is&quot;. We are not liable for
            indirect or consequential damages arising from use of the service.
          </p>

          <h2>Versioning</h2>
          <p>
            We may update these terms. Continued use after changes constitutes
            acceptance. Archived versions are available on request.
          </p>
        </div>

        <Button variant="outline" className="mt-8" asChild>
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
