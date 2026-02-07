import { Link } from "react-router-dom";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServerErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4">
      <h1 className="text-6xl font-bold text-foreground">500</h1>
      <p className="mt-4 text-xl text-foreground-secondary">
        Something went wrong
      </p>
      <p className="mt-2 text-center text-foreground-secondary">
        We&apos;re sorry, but something went wrong on our end. Please try again.
      </p>
      <div className="mt-8 flex gap-4">
        <Button variant="outline" onClick={() => window.location.reload()}>
          <RefreshCw className="h-4 w-4" />
          Retry
        </Button>
        <Button variant="primary" asChild>
          <Link to="/">Go home</Link>
        </Button>
      </div>
      <p className="mt-8 text-sm text-foreground-secondary">
        Need help?{" "}
        <Link to="/contact" className="text-primary hover:underline">
          Contact support
        </Link>
      </p>
    </div>
  );
}
