"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  SortAsc,
  Bookmark,
  MessageSquare,
  Eye,
  ThumbsUp,
  Clock,
  Tag,
  ChevronDown,
  CheckCircle,
  Grid,
  List,
  MoreVertical,
  Share2,
} from "lucide-react";

export default function SavedPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", count: 45 },
    { name: "Questions", count: 28 },
    { name: "Articles", count: 12 },
    { name: "Books", count: 5 },
  ];

  const savedItems = [
    {
      id: 1,
      type: "question",
      title: "What is the ruling on combining prayers while traveling?",
      excerpt:
        "Detailed explanation of the conditions and requirements for combining prayers during travel...",
      category: "Fiqh",
      scholar: "Sheikh Abdullah Ahmad",
      verified: true,
      stats: {
        answers: 4,
        views: 1256,
        likes: 89,
      },
      savedDate: "2 days ago",
      tags: ["Prayer", "Travel", "Fiqh"],
    },
    {
      id: 2,
      type: "article",
      title: "Understanding the Concept of Tawheed",
      excerpt:
        "A comprehensive guide to understanding the fundamental concept of Islamic monotheism...",
      category: "Aqeedah",
      author: "Dr. Sarah Mohammed",
      verified: true,
      stats: {
        views: 2341,
        likes: 156,
      },
      savedDate: "1 week ago",
      tags: ["Aqeedah", "Basics", "Faith"],
    },
    {
      id: 3,
      type: "question",
      title: "How to calculate Zakat on stocks and investments?",
      excerpt:
        "Detailed method for calculating Zakat on various types of investments and financial assets...",
      category: "Finance",
      scholar: "Dr. Ibrahim Hassan",
      verified: true,
      stats: {
        answers: 6,
        views: 3421,
        likes: 245,
      },
      savedDate: "2 weeks ago",
      tags: ["Zakat", "Finance", "Investment"],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Saved Items</h1>
            <p className="text-gray-600">
              Access your bookmarked questions, articles, and resources
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <div className="border rounded-lg p-1 flex gap-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Input placeholder="Search saved items..." className="pl-10" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>

          {showFilters && (
            <Card className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>Recently Saved</option>
                    <option>Most Viewed</option>
                    <option>Most Liked</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>All Categories</option>
                    <option>Questions</option>
                    <option>Articles</option>
                    <option>Videos</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <Input placeholder="Filter by tags..." />
                </div>
              </div>
            </Card>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <Card className="p-4 lg:col-span-1 h-fit">
            <h2 className="font-semibold mb-4">Categories</h2>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === category.name
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs opacity-80">{category.count}</span>
                </button>
              ))}
            </div>
          </Card>

          {/* Saved Items Grid/List */}
          <div className="lg:col-span-3">
            <div
              className={`grid gap-4 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {savedItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                            {item.category}
                          </span>
                          {item.verified && (
                            <span className="flex items-center gap-1 text-xs text-primary">
                              <CheckCircle className="w-3 h-3" />
                              Verified
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                      {item.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        {item.type === "question" && (
                          <>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              {item.stats.answers}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {item.stats.views}
                            </span>
                          </>
                        )}
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          {item.stats.likes}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Bookmark className="w-4 h-4" fill="currentColor" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
