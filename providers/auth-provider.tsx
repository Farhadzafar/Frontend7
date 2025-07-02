// context/AuthProvider.tsx
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

// ===== Types =====
type User = {
  id?: number;
  fullName?: string;
  email: string;
  image?: string;
  token?: string;
  role?: "admin" | "user";
  createdAt?: string;
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
  verifyEmail: (code: string) => Promise<boolean>;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ===== Provider =====
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed.user) setUser(parsed.user);
      } catch {
        console.warn("❌ Invalid user data in localStorage");
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const isAdminRoute = pathname.startsWith("/admin");
    const isAuthRoute = pathname.startsWith("/auth");

    if (!user?.email && isAdminRoute) {
      toast({
        title: "Authentication required",
        description: "Please login to access this page",
        variant: "destructive",
      });
      router.push("/auth/sign-in");
    }

    if (user && isAuthRoute) {
      router.push("/");
    }
  }, [user, pathname, isLoading, router, toast]);

  // ===== Login =====
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
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
      toast({ title: "Login successful", description: "Welcome back!" });
      router.push("/admin");
      return true;
    } catch (err) {
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

  // ===== Signup =====
  const signup = async (
    fullName: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    setIsLoading(true);
    try {
      // // Store the email temporarily for verification
      // setUser({ email }); // ✅ Email now available in context
      console.log(fullName, email, password);
      setUserEmail(email);
      const res = await fetch(`${API_ENDPOINT}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        toast({
          title: "Signup failed",
          description: errorData.message || "Please try again.",
          variant: "destructive",
        });
        return false;
      }

      toast({
        title: "Signup successful",
        description: "Please verify your email",
      });

      router.push("/auth/verify");
      return true;
    } catch (err) {
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

  // ===== Verify Email =====
  const verifyEmail = async (code: string): Promise<boolean> => {
    if (!userEmail) {
      toast({
        title: "Missing email",
        description: "No email found for verification.",
        variant: "destructive",
      });
      return false;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`${API_ENDPOINT}/verify-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          code,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        toast({
          title: "Verification failed",
          description: result.message || "Invalid code",
          variant: "destructive",
        });
        return false;
      }

      toast({
        title: "Email Verified",
        description: "Your email has been successfully verified.",
      });

      router.push("/auth/sign-in");
      return true;
    } catch (err) {
      toast({
        title: "Verification Error",
        description: "Something went wrong while verifying",
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
    <AuthContext.Provider
      value={{ user, login, signup, logout, verifyEmail, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ===== Hook =====
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
