"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const API_ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users`;

// ====== Types ======
type User = {
  id: number;
  fullName: string;
  email: string;
  image: string;
  token: string;
  role: "admin" | "user";
  createdAt: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (
    fullName: string,
    email: string,
    password: string
  ) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ====== Provider ======
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed.user) setUser(parsed.user);
      } catch (e) {
        console.warn("Invalid user in localStorage");
      }
    }
    setIsLoading(false);
  }, []);

  // Handle route protections
  useEffect(() => {
    if (isLoading) return;

    const isAdminRoute = pathname.startsWith("/admin");
    const isAuthRoute = pathname.startsWith("/auth");

    if (!user && isAdminRoute) {
      toast({
        title: "Authentication required",
        description: "Please login to access this page",
        variant: "destructive",
      });
      router.push("/auth/sign-in");
    } else if (user && isAuthRoute) {
      router.push("/");
    }
  }, [user, pathname, isLoading, toast, router]);

  // ====== Actions ======

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_ENDPOINT}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        toast({
          title: "Login failed",
          description: errorData.message || "Invalid credentials",
          variant: "destructive",
        });
        return false;
      }

      const data = await res.json();
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data));

      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      router.push("/admin");
      return true;
    } catch (err) {
      console.error("Login error", err);
      toast({
        title: "Login failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (
    fullName: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_ENDPOINT}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        toast({
          title: "Signup failed",
          description: errorData.message || "Please try again",
          variant: "destructive",
        });
        return false;
      }

      toast({
        title: "Signup successful",
        description: "Account created. Please login.",
      });
      router.push("/auth/sign-in");
      return true;
    } catch (err) {
      console.error("Signup error", err);
      toast({
        title: "Signup failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    router.push("/auth/sign-in");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// ====== Hook ======
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
