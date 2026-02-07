import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function DashboardAdminPage() {
  return (
    <div className="space-y-8 animate-in-up">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Admin</h1>
        <p className="mt-1 text-foreground-secondary">
          Organization controls, billing, and compliance
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Org overview</CardTitle>
            <CardDescription>Active users, boards, AI usage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-foreground-secondary">Active users</span>
              <span className="font-medium">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground-secondary">Total boards</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground-secondary">AI credits used</span>
              <span className="font-medium">1,240 / 5,000</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature flags</CardTitle>
            <CardDescription>Toggle AI features and integrations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label>AI suggestions</Label>
                <p className="text-sm text-foreground-secondary">
                  Enable AI agent for all projects
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Integrations</Label>
                <p className="text-sm text-foreground-secondary">
                  Allow third-party integrations
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User management</CardTitle>
          <CardDescription>Invite, roles, deactivate</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline">Invite user</Button>
          <p className="mt-4 text-sm text-foreground-secondary">
            User management table will be available here.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security & audit logs</CardTitle>
          <CardDescription>Download audit logs for compliance</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline">Download audit log</Button>
        </CardContent>
      </Card>
    </div>
  );
}
