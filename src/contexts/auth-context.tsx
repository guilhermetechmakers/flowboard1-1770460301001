import * as React from "react";

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string) => Promise<void>;
}

const AuthContext = React.createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      setUser({
        id: "1",
        email: "user@example.com",
        name: "Demo User",
      });
    }
    setIsLoading(false);
  }, []);

  const login = React.useCallback(async (email: string, _password: string) => {
    setIsLoading(true);
    try {
      localStorage.setItem("auth_token", "demo-token");
      setUser({
        id: "1",
        email,
        name: email.split("@")[0],
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = React.useCallback(() => {
    localStorage.removeItem("auth_token");
    setUser(null);
  }, []);

  const signup = React.useCallback(
    async (email: string, _password: string, name: string) => {
      setIsLoading(true);
      try {
        localStorage.setItem("auth_token", "demo-token");
        setUser({ id: "1", email, name });
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const value: AuthContextValue = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
