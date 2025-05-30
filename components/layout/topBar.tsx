import { ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function TopBar() {
  return (
    <div className="  max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center py-2 text-sm border-b">
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Our Scholars
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center cursor-pointer group">
            <Globe className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors" />
            <span className="text-gray-600 group-hover:text-primary transition-colors">
              English
            </span>
            <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors" />
          </div>
          <div className="h-4 w-px bg-gray-200"></div>
          <Link href="/auth/sign-in">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button className="shadow-sm">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
