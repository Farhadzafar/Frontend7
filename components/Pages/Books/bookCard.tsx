import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import Section from "@/components/ui/section";
import { Download } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { truncateString } from "@/lib/utils";
interface Book {
  _id?: string;
  title: string;
  author: string;
  category: string;
  coverImageUrl: string;
  description: string;
  fileLink: string;
  fileSizeMB: number;
  language: string;
  pageCount: number;
  rating: number;
  createdAt: string;
  uploadedBy?: string | null;
  downloads?: number;
}

export default function BookCard({ book }: { book: Book }) {
  const imageUrl = book.coverImageUrl?.startsWith("http")
    ? book.coverImageUrl
    : book.coverImageUrl && process.env.NEXT_PUBLIC_API_ENDPOINT
    ? `${process.env.NEXT_PUBLIC_API_ENDPOINT}${book.coverImageUrl.replace(
        "/public",
        ""
      )}`
    : null;
  return (
    <Card className="overflow-hidden group shadow-xl transition-all duration-300 ">
      <div className="relative h-48">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={book.title || "Book Cover"}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400 object-cover group-hover:scale-105 transition-transform duration-300">
            No Cover Image
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
          {book?.fileLink && (
            <a
              href={`${
                process.env.NEXT_PUBLIC_API_ENDPOINT
              }${book.fileLink.replace("/public", "")}`}
              target="_blank"
              rel="noreferrer"
            >
              <Button className="gap-2">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </a>
          )}
          <Link href={`/books/${book._id}`}>
            <Button size="sm" variant="outline" className="gap-2">
              {/* <Download className="w-4 h-4" /> */}
              <ExternalLink className="w-4 h-4" />
              Detiles
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Link href={`/books/${book._id}`}>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {truncateString(book.title, 35)}
            </h3>
            <p className="text-gray-600 text-sm">{book.author}</p>
          </Link>
        </div>
        <p className="text-gray-600 mb-4 text-sm">
          {truncateString(book.description, 110)}
        </p>
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
          <span className="text-primary font-medium">
            {book.pageCount} pages
          </span>
        </div>
      </div>
    </Card>
  );
}
