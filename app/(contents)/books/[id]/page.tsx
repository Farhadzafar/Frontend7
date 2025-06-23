"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Download,
  Star,
  Share2,
  Bookmark,
  Clock,
  User,
  GraduationCap,
  FileText,
  Globe,
  ArrowLeft,
  Heart,
  MessageSquare,
  Eye,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Mock data - In a real app, fetch this based on params.id
  const book = {
    title: "The Sealed Nectar",
    subtitle: "Biography of the Noble Prophet ﷺ",
    author: "Safiur Rahman Mubarakpuri",
    coverImage:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2776&auto=format&fit=crop",
    category: "Biography",
    status: "Published",
    rating: 4.9,
    totalRatings: 1250,
    downloads: 12500,
    pages: 559,
    language: "English",
    publisher: "Dar-us-Salam Publications",
    publishDate: "2002",
    isbn: "9789960899558",
    description: `"The Sealed Nectar" (Ar-Raheeq Al-Makhtum) is a comprehensive biography of the Noble Prophet Muhammad ﷺ. This book was written by Safiur Rahman Mubarakpuri and won first prize in a worldwide competition on the biography of the Prophet ﷺ held by the Muslim World League.

The book provides detailed insights into:
• The lineage of Prophet Muhammad ﷺ
• The condition of Arabia before Islam
• The early life of the Prophet ﷺ
• The beginning of revelation
• The Makkan period of prophethood
• The migration to Madinah
• The establishment of the Islamic state
• The various battles and expeditions
• The spread of Islam
• The farewell pilgrimage

This masterpiece has been translated into various languages and is considered one of the most authentic and comprehensive biographies of the Prophet Muhammad ﷺ available in the English language.`,
    topics: [
      "Prophet's Biography",
      "Islamic History",
      "Seerah",
      "Prophetic Traditions",
      "Early Islam",
      "Makkah Period",
      "Madinah Period",
    ],
    features: [
      {
        icon: FileText,
        title: "Comprehensive Content",
        description:
          "Detailed coverage of the Prophet's life from birth to death",
      },
      {
        icon: GraduationCap,
        title: "Academic Excellence",
        description: "Award-winning research and authentic sources",
      },
      {
        icon: Globe,
        title: "Multiple Translations",
        description: "Available in various languages",
      },
      {
        icon: BookOpen,
        title: "Educational Value",
        description: "Perfect for students and scholars alike",
      },
    ],
    relatedBooks: [
      {
        title: "Muhammad: His Life Based on the Earliest Sources",
        author: "Martin Lings",
        cover:
          "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=2940&auto=format&fit=crop",
        rating: 4.8,
      },
      {
        title: "In the Footsteps of the Prophet",
        author: "Tariq Ramadan",
        cover:
          "https://images.unsplash.com/photo-1606819717115-9159c900370b?q=80&w=2940&auto=format&fit=crop",
        rating: 4.7,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      {/* Back Button - Mobile */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 mb-4">
        <Button variant="ghost" className="gap-2" asChild>
          <Link href="/books">
            <ArrowLeft className="w-4 h-4" />
            Back to Books
          </Link>
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Book Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Book Header */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Cover Image */}
                <div className="w-full md:w-48 lg:w-64 aspect-[3/4] rounded-lg overflow-hidden">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Book Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {book.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        book.status === "Published"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-yellow-50 text-yellow-600"
                      }`}
                    >
                      {book.status}
                    </span>
                  </div>

                  <h1 className="text-2xl lg:text-3xl font-bold mb-2">
                    {book.title}
                  </h1>
                  <p className="text-gray-600 text-lg mb-4">{book.subtitle}</p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-semibold">{book.rating}</span>
                      <span className="text-gray-500">
                        ({book.totalRatings} ratings)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Download className="w-5 h-5" />
                      <span>{book.downloads.toLocaleString()} downloads</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-gray-500">Author</p>
                      <p className="font-medium">{book.author}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Publisher</p>
                      <p className="font-medium">{book.publisher}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Pages</p>
                      <p className="font-medium">{book.pages}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Language</p>
                      <p className="font-medium">{book.language}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button className="gap-2">
                      <Download className="w-4 h-4" />
                      Download Book
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Bookmark className="w-4 h-4" />
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">About this Book</h2>
              <div
                className={`relative ${
                  !isDescriptionExpanded && "max-h-[200px] overflow-hidden"
                }`}
              >
                <div className="prose max-w-none">
                  {book.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {!isDescriptionExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
                )}
              </div>
              <Button
                variant="ghost"
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="mt-4 gap-2"
              >
                {isDescriptionExpanded ? (
                  <>
                    Show Less
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </Button>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Topics */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Topics Covered</h2>
              <div className="flex flex-wrap gap-2">
                {book.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </Card>

            {/* Book Details */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Book Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">ISBN</span>
                  <span className="font-medium">{book.isbn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Publication Date</span>
                  <span className="font-medium">{book.publishDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pages</span>
                  <span className="font-medium">{book.pages}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Language</span>
                  <span className="font-medium">{book.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Publisher</span>
                  <span className="font-medium">{book.publisher}</span>
                </div>
              </div>
            </Card>

            {/* Related Books */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Related Books</h2>
              <div className="space-y-4">
                {book.relatedBooks.map((relatedBook, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <img
                      src={relatedBook.cover}
                      alt={relatedBook.title}
                      className="w-16 aspect-[3/4] rounded object-cover"
                    />
                    <div>
                      <h3 className="font-medium group-hover:text-primary transition-colors">
                        {relatedBook.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {relatedBook.author}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm">{relatedBook.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
