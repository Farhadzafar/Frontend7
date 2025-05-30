"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={` bg-gray-900 text-white py-16 ${
        pathname === "/auth/register" ||
        pathname === "/auth/sign-in" ||
        pathname === "/admin" ||
        pathname === "/admin/users" ||
        pathname === "/admin/questions" ||
        pathname === "/admin/questions/upload" ||
        pathname === "/admin/content" ||
        pathname === "/admin/settings"
          ? "hidden"
          : "block"
      }`}
    >
      <div className="questions max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p className="text-gray-400">
            Providing authentic Islamic knowledge based on Quran and Sunnah,
            verified by qualified scholars.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Aqeedah
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Fiqh
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Hadith
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Family
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to receive updates and new answers.
          </p>
          <div className="space-y-4">
            <Input
              placeholder="Your email"
              className="bg-gray-800 border-gray-700"
            />
            <Button className="w-full">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © 2024 IslamicQA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
