import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, FolderKanban, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
const mockProjects = [
  {
    id: "1",
    name: "Product Roadmap Q1",
    lastActivity: "2 hours ago",
    collaborators: ["JD", "SK", "AM"],
  },
  {
    id: "2",
    name: "Research Synthesis",
    lastActivity: "5 hours ago",
    collaborators: ["JD", "SK"],
  },
  {
    id: "3",
    name: "Design System Map",
    lastActivity: "1 day ago",
    collaborators: ["JD", "SK", "AM", "PL"],
  },
];

export function DashboardProjectsPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-8 animate-in-up">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Projects</h1>
          <p className="mt-1 text-foreground-secondary">
            Create and manage your boards
          </p>
        </div>
        <Button variant="primary" asChild>
          <Link to="/dashboard/board">
            <Plus className="h-4 w-4" />
            New Project
          </Link>
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-secondary" />
        <Input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <Card
            key={project.id}
            className="group overflow-hidden transition-all hover:shadow-card-hover"
          >
            <Link to={`/dashboard/board/${project.id}`}>
              <div className="aspect-video bg-surface flex items-center justify-center">
                <FolderKanban className="h-12 w-12 text-primary/40" />
              </div>
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div>
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-foreground-secondary">
                    {project.lastActivity}
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
            </Link>
            <CardContent className="pt-0">
              <div className="flex -space-x-2">
                {project.collaborators.map((initials) => (
                  <Avatar
                    key={initials}
                    className="h-6 w-6 border-2 border-background"
                  >
                    <AvatarFallback className="text-xs">{initials}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
