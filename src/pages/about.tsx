import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HelpCircle,
  BookOpen,
  Video,
  MessageCircle,
} from "lucide-react";

export function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-hero font-semibold text-foreground">About & Help</h1>
        <p className="mt-4 text-xl text-foreground-secondary">
          Documentation and support resources for FlowBoard
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <HelpCircle className="h-10 w-10 text-primary" />
              <CardTitle>FAQ</CardTitle>
              <CardDescription>
                Common questions and answers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild>
                <Link to="/faq">View FAQ</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BookOpen className="h-10 w-10 text-primary" />
              <CardTitle>Getting started</CardTitle>
              <CardDescription>
                Guides to help you get up and running
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild>
                <Link to="/docs">View guides</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Video className="h-10 w-10 text-primary" />
              <CardTitle>Video tutorials</CardTitle>
              <CardDescription>
                Watch step-by-step tutorials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" disabled>
                Coming soon
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <MessageCircle className="h-10 w-10 text-primary" />
              <CardTitle>Contact support</CardTitle>
              <CardDescription>
                Get help from our team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
