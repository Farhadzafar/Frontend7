// import React from "react";

// const VerifyPage = () => (
//   <div className="flex flex-col items-center mt-24">
//     <h2 className="text-2xl font-semibold mb-4">Verify Your Email</h2>
//     <p className="text-center mb-4">
//       We have sent a verification link to your email address. <br />
//       Please check your inbox and click the link to verify your account.
//     </p>
//     <p className="text-center">
//       Didn&apos;t receive the email? Check your spam folder or&nbsp;
//       <a
//         href="/auth/resend-verification"
//         className="text-blue-600 hover:underline"
//       >
//         resend verification email
//       </a>
//       .
//     </p>
//   </div>
// );

// export default VerifyPage;

"use client";

import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function VerifyEmailPage() {
  const { verifyEmail } = useAuth();
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await verifyEmail(code);
    if (!success) {
      toast({
        title: "Verification failed",
        description: "Please make sure your email and code are correct.",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md p-6 space-y-6 shadow-md bg-white">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Verify Your Email</h1>
          <p className="text-sm text-gray-500">
            Please check your email for the 4-digit code and enter it below.
          </p>
        </div>

        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Verification Code
            </label>
            <Input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              pattern="\d{4}"
              placeholder="1234"
              maxLength={4}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Verifying...
              </span>
            ) : (
              "Verify Email"
            )}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Didn’t receive a code?{" "}
          <span className="text-primary underline cursor-pointer">Resend</span>
        </p>
      </Card>
    </main>
  );
}
