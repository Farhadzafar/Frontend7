import { BookAIcon, Grid } from "lucide-react";
import Link from "next/link";
import React from "react";

const links = [
  {
    name: "All",
    href: "/books/all",
    icon: <Grid className="h-4 w-4" />,
  },
  {
    name: "Books",
    href: "/books/books",
    icon: <BookAIcon className="h-4 w-4" />,
  },
  {
    name: "Blogs",
    href: "/books/blogs",
    icon: <BookAIcon className="h-4 w-4" />,
  },
  {
    name: "Research",
    href: "/books/research",
    icon: <BookAIcon className="h-4 w-4" />,
  },
];

export default function SideNavigation() {
  return (
    <aside className=" border-r border-primaryh-screen w-48 overflow-y-auto overflow-x-hidden ">
      <ul className="space-y-2 p-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
