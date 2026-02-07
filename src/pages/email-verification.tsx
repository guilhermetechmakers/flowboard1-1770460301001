import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

export function EmailVerificationPage() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") ?? "success";

  const isSuccess = status === "success";

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          {isSuccess ? (
            <CheckCircle className="mx-auto h-16 w-16 text-accent" />
          ) : (
            <XCircle className="mx-auto h-16 w-16 text-destructive" />
          )}
          <CardTitle>
            {isSuccess ? "Email verified" : "Verification failed"}
          </CardTitle>
          <CardDescription>
            {isSuccess
              ? "Your email has been verified. You can now access your account."
              : "The verification link may have expired or is invalid."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isSuccess && (
            <Button variant="outline" className="w-full" disabled>
              Resend verification
            </Button>
          )}
          <Button className="w-full" asChild>
            <Link to="/dashboard">Continue to dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
