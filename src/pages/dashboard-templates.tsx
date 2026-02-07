import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FolderKanban } from "lucide-react";

const mockTemplates = [
  { id: "1", name: "Product Roadmap", category: "Product", description: "Plan features and milestones" },
  { id: "2", name: "Research Synthesis", category: "Research", description: "Organize findings and insights" },
  { id: "3", name: "Project Kickoff", category: "Project", description: "Team alignment and goals" },
];

export function DashboardTemplatesPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-8 animate-in-up">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Templates</h1>
        <p className="mt-1 text-foreground-secondary">
          Starter boards and onboarding examples
        </p>
      </div>

      <Input
        placeholder="Search templates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-md"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockTemplates.map((template) => (
          <Card
            key={template.id}
            className="overflow-hidden transition-all hover:shadow-card-hover"
          >
            <div className="aspect-video bg-surface flex items-center justify-center">
              <FolderKanban className="h-12 w-12 text-primary/40" />
            </div>
            <CardHeader>
              <CardTitle className="text-base">{template.name}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
              <span className="text-xs text-foreground-secondary">
                {template.category}
              </span>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" asChild>
                <Link to={`/dashboard/board?template=${template.id}`}>
                  Apply template
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
