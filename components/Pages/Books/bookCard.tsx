import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import Section from "@/components/ui/section";
import { Download } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function BookCard({ book }: any) {
  return (
    <Card className="overflow-hidden group shadow-xl transition-all duration-300">
      <div className="relative h-48">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            Download
          </Button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Link href={`/books/${book.id}`}>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {book.title}
            </h3>
            <p className="text-gray-600 text-sm">{book.author}</p>
          </Link>
          <Button variant="ghost" size="icon">
            <Bookmark className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{book.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500" />
              {book.rating}
            </span>
            <span className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              {book.downloads}
            </span>
          </div>
          <span className="text-primary font-medium">{book.pages} pages</span>
        </div>
      </div>
    </Card>
  );
}
