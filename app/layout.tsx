import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/providers/auth-provider";
import TopBar from "@/components/layout/topBar";
import { LanguageProvider } from "@/providers/lang-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IslamicQA - Find Authentic Islamic Answers",
  description: "Access thousands of verified answers from qualified scholars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <LanguageProvider>
        <AuthProvider>
          <TopBar/>
          <Header />
          {children}
        </AuthProvider>
        <Toaster />
        <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
