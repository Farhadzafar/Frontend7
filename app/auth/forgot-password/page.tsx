"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle password reset logic
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-md mx-auto px-4">
        <Card className="p-6 sm:p-8 bg-white shadow-xl">
          <div className="text-center mb-8">
            <Link
              href="/"
              className="text-2xl font-bold text-primary hover:opacity-90 transition-opacity"
            >
              IslamicQA
            </Link>
            <h1 className="text-2xl font-semibold mt-6 mb-2">Reset Password</h1>
            <p className="text-gray-600">
              Enter your email address and we'll send you instructions to reset
              your password
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Send Reset Instructions
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Check your email</h2>
              <p className="text-gray-600 mb-6">
                We've sent password reset instructions to {email}
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setSubmitted(false)}
              >
                Try another email
              </Button>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link
              href="/auth/sign-in"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sign In
            </Link>
          </div>
        </Card>
      </div>
    </main>
  );
}
