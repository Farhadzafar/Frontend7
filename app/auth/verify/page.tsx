"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const VerifyPage = () => {
  const [code, setCode] = useState(null);
  return (
    <div>
      <div className="flex flex-col items-center mt-24">
        <h2 className="text-2xl font-semibold mb-4">Verify Your Email</h2>
        <p className="text-center mb-4">
          We have sent a verification link to your email address. <br />
          Please check your inbox and click the link to verify your account.
        </p>
        <p className="text-center">
          Didn&apos;t receive the email? Check your spam folder or&nbsp;
          <a
            href="/auth/resend-verification"
            className="text-blue-600 hover:underline"
          >
            resend verification email
          </a>
          .
        </p>
      </div>

      <form className=" my-14  flex flex-col justify-center mt-8 gap-5 items-center ">
        <Input
          type="number"
          placeholder="Enter verification code"
          className="w-64"
        />
        <Button className="w-48">Verify</Button>
      </form>
    </div>
  );
};

export default VerifyPage;
