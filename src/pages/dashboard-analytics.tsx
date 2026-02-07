import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const barData = [
  { name: "Mon", boards: 4, nodes: 24 },
  { name: "Tue", boards: 3, nodes: 18 },
  { name: "Wed", boards: 6, nodes: 42 },
  { name: "Thu", boards: 5, nodes: 31 },
  { name: "Fri", boards: 8, nodes: 56 },
];

const pieData = [
  { name: "Text", value: 35, color: "rgb(11, 99, 255)" },
  { name: "Task", value: 25, color: "rgb(23, 185, 120)" },
  { name: "Link", value: 20, color: "rgb(255, 176, 32)" },
  { name: "Other", value: 20, color: "rgb(90, 106, 120)" },
];

export function DashboardAnalyticsPage() {
  return (
    <div className="space-y-8 animate-in-up">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Analytics</h1>
        <p className="mt-1 text-foreground-secondary">
          Usage and activity insights
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-foreground-secondary">
              Active boards
            </CardTitle>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
              <p className="text-xs text-accent">+2 from last week</p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-foreground-secondary">
              Total nodes
            </CardTitle>
            <CardContent>
              <p className="text-3xl font-bold">187</p>
              <p className="text-xs text-accent">+24 from last week</p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-foreground-secondary">
              AI credits used
            </CardTitle>
            <CardContent>
              <p className="text-3xl font-bold">450</p>
              <p className="text-xs text-foreground-secondary">of 1000 this month</p>
            </CardContent>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Activity this week</CardTitle>
            <CardDescription>Boards and nodes created</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="boards" fill="rgb(11, 99, 255)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="nodes" fill="rgb(23, 185, 120)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Node types</CardTitle>
            <CardDescription>Distribution across your boards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
