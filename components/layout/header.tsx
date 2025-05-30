"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Search,
  Bell,
  BookmarkIcon,
  UserCircle,
  Menu,
  X,
  HomeIcon,
  Book,
  MessageCircle,
  Users,
  BookOpen,
  MoreHorizontalIcon,
} from "lucide-react";
import TopBar from "./topBar";
import { AdvancedSearch, SearchButton, SearchDialog } from "../Features/search";
import path from "node:path";
import { useAuth } from "@/providers/auth-provider";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
  const { user } = useAuth(); // Assuming you have a useAuth hook to get the user info
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { href: "/answers", label: "Fatwas" },
    { href: "/books", label: "Books" },
    { href: "/articles", label: "Articles" },
    { href: "/ResearchPapers", label: "Researches" },
    { href: "/categories", label: "Categories" },
  ];
  const moreLinks = [
    { href: "/ask", label: "Ask a Question" },
    { href: "/about", label: "Videos" },
    { href: "/about", label: "Quran" },
    { href: "/about", label: "Images" },
    { href: "/about", label: "Prayer" },
    { href: "/about", label: "Zekate" },
  ];

  const mobileNavLinks = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/categories", label: "Categories", icon: Book },
    { href: "/ask", label: "Ask a Question", icon: MessageCircle },
    { href: "/answers", label: "All fatwa", icon: Users },
    { href: "/about", label: "About Us", icon: Users },
    { href: "/books", label: "Books", icon: BookOpen },
    { href: "/articles", label: "Articles", icon: BookOpen },
    { href: "/researchPapers", label: "Research", icon: BookOpen },
  ];

  return (
    <div
      className={` ${
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
      {/* <TopBar /> */}

      <header className=" w-full border-b sticky  top-0  bg-white/95 backdrop-blur-sm z-50">
        <nav className="max-w-6xl mx-auto px-4  ">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="text-2xl font-bold text-primary hover:opacity-90 transition-opacity"
              >
                IslamicQA
              </Link>
              <div className="hidden lg:flex gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="relative group">
                  <span className="text-gray-600 hover:text-primary cursor-pointer ">
                    <MoreHorizontalIcon />
                  </span>
                  <div className="w-44 absolute top-2 left-0 hidden group-hover:block  rounded-md mt-2 bg-white/95 backdrop-blur-sm z-[1000] overflow-hidden ">
                    <div className="mt-7 px-1 py-2">
                      {moreLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors ${
                            isActive(link.href)
                              ? "text-primary"
                              : "text-gray-600 hover:text-primary"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <SearchButton onClick={() => setIsSearchOpen(true)} />
              {user && (
                <div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary transition-colors relative"
                  >
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                      9
                    </span>
                  </Button>
                  <Link href="/saved">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-primary transition-colors"
                    >
                      <BookmarkIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div className="hidden lg:block h-8 w-px bg-gray-200"></div>
              {user ? (
                <Link href="/account">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <UserCircle className="h-5 w-5" />
                    <span>{user.fullName}</span>
                  </Button>
                </Link>
              ) : (
                <div className="hidden lg:flex gap-2">
                  <Link href="/auth/sign-in">
                    <Button className="w-full " variant="outline">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button className="w-full">Register</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 lg:hidden ">
            <div className="fixed inset-y-0 right-0 w-[80%] max-w-sm h-screen  shadow-xl  bg-white">
              <div className="flex justify-between items-center p-4 border-b">
                <span className="text-lg font-semibold text-primary">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="p-4 ">
                <div className="space-y-4">
                  {mobileNavLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center gap-2 transition-colors ${
                          isActive(link.href)
                            ? "text-primary"
                            : "text-gray-600 hover:text-primary"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        {link.label}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-8 pt-8 border-t">
                  <div className="space-y-4">
                    <Button className="w-full" variant="outline">
                      Sign In
                    </Button>
                    <Button className="w-full">Register</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onAdvancedSearch={() => {
          setIsSearchOpen(false);
          setIsAdvancedSearchOpen(true);
        }}
      />

      <AdvancedSearch
        isOpen={isAdvancedSearchOpen}
        onClose={() => setIsAdvancedSearchOpen(false)}
      />
    </div>
  );
}
