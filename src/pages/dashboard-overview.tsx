import { Link } from "react-router-dom";
import {
  FolderKanban,
  FileJson,
  Layout,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockProjects = [
  { id: "1", name: "Product Roadmap Q1", lastActivity: "2 hours ago", collaborators: 3 },
  { id: "2", name: "Research Synthesis", lastActivity: "5 hours ago", collaborators: 2 },
  { id: "3", name: "Design System Map", lastActivity: "1 day ago", collaborators: 4 },
];

const mockActivity = [
  { type: "comment", text: "Sarah commented on Node A", time: "10 min ago" },
  { type: "ai", text: "AI suggested 3 new connections", time: "1 hour ago" },
  { type: "edit", text: "You updated Research Board", time: "2 hours ago" },
];

const chartData = [
  { name: "Mon", nodes: 12, activity: 24 },
  { name: "Tue", nodes: 19, activity: 31 },
  { name: "Wed", nodes: 15, activity: 28 },
  { name: "Thu", nodes: 22, activity: 42 },
  { name: "Fri", nodes: 28, activity: 38 },
  { name: "Sat", nodes: 10, activity: 15 },
  { name: "Sun", nodes: 8, activity: 12 },
];

export function DashboardOverviewPage() {
  return (
    <div className="space-y-8 animate-in-up">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Overview</h1>
        <p className="mt-1 text-foreground-secondary">
          Your projects, activity, and quick actions
        </p>
      </div>

      {/* Quick actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick actions</CardTitle>
          <CardDescription>Get started quickly</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="primary" asChild>
            <Link to="/dashboard/board">
              <Layout className="h-4 w-4" />
              New Board
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/dashboard/import">
              <FileJson className="h-4 w-4" />
              Import
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/dashboard/templates">
              <FolderKanban className="h-4 w-4" />
              Templates
            </Link>
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Project grid */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent projects</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/projects">
                View all
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {mockProjects.map((project) => (
              <Link key={project.id} to={`/dashboard/board/${project.id}`}>
                <Card className="group cursor-pointer transition-all hover:shadow-card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <FolderKanban className="h-8 w-8 text-primary/70" />
                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <CardTitle className="text-base">{project.name}</CardTitle>
                    <CardDescription>
                      {project.lastActivity} · {project.collaborators} collaborators
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
            <CardDescription>Comments, AI suggestions, and edits</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {mockActivity.map((item, i) => (
                <li key={i} className="flex gap-3">
                  {item.type === "comment" && (
                    <MessageSquare className="h-4 w-4 shrink-0 text-foreground-secondary" />
                  )}
                  {item.type === "ai" && (
                    <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                  )}
                  {item.type === "edit" && (
                    <FolderKanban className="h-4 w-4 shrink-0 text-foreground-secondary" />
                  )}
                  <div>
                    <p className="text-sm">{item.text}</p>
                    <p className="text-xs text-foreground-secondary">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Activity this week</CardTitle>
          <CardDescription>Nodes created and edits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorNodes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgb(11, 99, 255)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="rgb(11, 99, 255)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid rgb(230, 233, 238)",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="nodes"
                  stroke="rgb(11, 99, 255)"
                  fillOpacity={1}
                  fill="url(#colorNodes)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
