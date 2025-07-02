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
import { AdvancedSearch, SearchButton, SearchDialog } from "../Features/search";
import { useAuth } from "@/providers/auth-provider";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
  const { user } = useAuth();
  const pathname = usePathname();

  const isAuthPage =
    pathname === "/auth/register" ||
    pathname === "/auth/sign-in" ||
    pathname === "/auth/verify";
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
    { href: "/videos", label: "Videos" },
    { href: "/quran", label: "Quran" },
    { href: "/images", label: "Images" },
    { href: "/prayer", label: "Prayer" },
    { href: "/zekat", label: "Zekat" },
  ];

  const mobileNavLinks = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/categories", label: "Categories", icon: Book },
    { href: "/ask", label: "Ask a Question", icon: MessageCircle },
    { href: "/answers", label: "All Fatwa", icon: Users },
    { href: "/videos", label: "Videos", icon: Users },
    { href: "/books", label: "Books", icon: BookOpen },
    { href: "/articles", label: "Articles", icon: BookOpen },
    { href: "/researchPapers", label: "Research", icon: BookOpen },
  ];

  if (isAuthPage) return null;

  return (
    <div className="sticky top-0 z-50">
      <header className="w-full border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <nav className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Links */}
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
                  <span className="text-gray-600 hover:text-primary cursor-pointer">
                    <MoreHorizontalIcon />
                  </span>
                  <div className="w-44 absolute top-2 left-0 hidden group-hover:block rounded-md mt-2 bg-white/95 backdrop-blur-sm z-[1000] overflow-hidden">
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

            {/* Actions */}
            <div className="flex items-center gap-4">
              <SearchButton onClick={() => setIsSearchOpen(true)} />
              {user && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary relative"
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
                      className="hover:text-primary"
                    >
                      <BookmarkIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                </>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div className="hidden lg:block h-8 w-px bg-gray-200"></div>
              {user ? (
                <Link href="/account">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <UserCircle className="h-5 w-5" />
                    <span>{user.fullName}</span>
                  </Button>
                </Link>
              ) : (
                <div className="hidden lg:flex gap-2">
                  <Link href="/auth/sign-in">
                    <Button variant="outline">Sign In</Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button>Register</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 lg:hidden z-[999]">
            <div className="fixed inset-y-0 right-0 w-[80%] max-w-sm h-screen bg-white shadow-xl">
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
              <div className="p-4 space-y-4">
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

                <div className="mt-8 pt-8 border-t space-y-4">
                  <Link href="/auth/sign-in">
                    <Button className="w-full" variant="outline">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button className="w-full">Register</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search & Advanced Search */}
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
