import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider, useAuth } from "@/contexts/auth-context";
import { SidebarProvider } from "@/contexts/sidebar-context";
import { LandingLayout } from "@/components/layout/landing-layout";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

import { LandingPage } from "@/pages/landing";
import { LoginPage } from "@/pages/login";
import { SignupPage } from "@/pages/signup";
import { PasswordResetPage } from "@/pages/password-reset";
import { EmailVerificationPage } from "@/pages/email-verification";
import { AboutPage } from "@/pages/about";
import { PrivacyPage } from "@/pages/privacy";
import { TermsPage } from "@/pages/terms";
import { NotFoundPage } from "@/pages/not-found";
import { ServerErrorPage } from "@/pages/server-error";

import { DashboardOverviewPage } from "@/pages/dashboard-overview";
import { DashboardProjectsPage } from "@/pages/dashboard-projects";
import { DashboardAnalyticsPage } from "@/pages/dashboard-analytics";
import { DashboardUsersPage } from "@/pages/dashboard-users";
import { DashboardAdminPage } from "@/pages/dashboard-admin";
import { DashboardSettingsPage } from "@/pages/dashboard-settings";
import { DashboardProfilePage } from "@/pages/dashboard-profile";
import { DashboardTemplatesPage } from "@/pages/dashboard-templates";
import { DashboardImportPage } from "@/pages/dashboard-import";
import { BoardPage } from "@/pages/board";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Landing */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/demo" element={<Navigate to="/dashboard/board" replace />} />
      </Route>

      {/* Auth */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/password-reset" element={<PasswordResetPage />} />
      <Route path="/verify" element={<EmailVerificationPage />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <SidebarProvider>
              <DashboardLayout />
            </SidebarProvider>
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardOverviewPage />} />
        <Route path="projects" element={<DashboardProjectsPage />} />
        <Route path="projects/new" element={<Navigate to="/dashboard/board" replace />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="board/:id" element={<BoardPage />} />
        <Route path="analytics" element={<DashboardAnalyticsPage />} />
        <Route path="users" element={<DashboardUsersPage />} />
        <Route path="admin" element={<DashboardAdminPage />} />
        <Route path="settings" element={<DashboardSettingsPage />} />
        <Route path="profile" element={<DashboardProfilePage />} />
        <Route path="templates" element={<DashboardTemplatesPage />} />
        <Route path="import" element={<DashboardImportPage />} />
      </Route>

      {/* Errors */}
      <Route path="/500" element={<ServerErrorPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <Toaster position="top-right" richColors />
      </AuthProvider>
    </BrowserRouter>
  );
}
