import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function LandingLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="font-semibold text-primary text-xl">
            FlowBoard
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              to="/about"
              className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/login"
              className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
            >
              Log in
            </Link>
            <Button variant="primary" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
