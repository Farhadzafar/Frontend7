"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Search,
  Command,
  Filter,
  TrendingUp,
  History,
  Tag,
  Clock,
  Star,
  Hash,
  Trash2,
  X,
} from "lucide-react";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdvancedSearch: () => void;
}

export function SearchDialog({
  isOpen,
  onClose,
  onAdvancedSearch,
}: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const categories = [
    { name: "Aqeedah", color: "bg-emerald-50 text-emerald-600" },
    { name: "Fiqh", color: "bg-blue-50 text-blue-600" },
    { name: "Hadith", color: "bg-purple-50 text-purple-600" },
    { name: "Quran", color: "bg-yellow-50 text-yellow-600" },
    { name: "Family", color: "bg-red-50 text-red-600" },
    { name: "Worship", color: "bg-pink-50 text-pink-600" },
  ];

  const popularSearches = [
    { query: "Prayer times calculation", count: "2.5K searches" },
    { query: "Fasting in Ramadan", count: "1.8K searches" },
    { query: "Zakat calculation", count: "1.2K searches" },
    { query: "Marriage in Islam", count: "950 searches" },
    { query: "Halal food guidelines", count: "800 searches" },
    { query: "Islamic inheritance", count: "750 searches" },
  ];

  const recentSearches = [
    { query: "Prayer times", timestamp: "2 hours ago" },
    { query: "Fasting rules", timestamp: "Yesterday" },
    { query: "Zakat calculation", timestamp: "2 days ago" },
    { query: "Islamic marriage", timestamp: "3 days ago" },
  ];

  const trendingTopics = [
    "Ramadan",
    "Prayer",
    "Zakat",
    "Marriage",
    "Halal",
    "Fiqh",
    "Quran",
    "Hadith",
  ];

  if (!isOpen) return null;

  return (
    <div className="h-screen overflow-auto fixed inset-0 bg-black/90 z-50 flex items-start justify-center pt-10 lg:pt-20">
      <div className="  bg-white w-full max-w-3xl rounded-xl shadow-2xl mx-4 overflow-x-hidden">
        {/* Search Header */}
        <div className="p-4 border-b relative">
          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="flex-1 bg-transparent border-none outline-none text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <div className="flex items-center gap-2">
              <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-white px-1.5 font-mono text-[10px] font-medium text-gray-500">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 divide-y md:divide-y-0 md:divide-x">
          {/* Left Panel - Categories */}
          <div className="md:col-span-2 p-4 bg-gray-50">
            <h3 className="text-sm font-semibold text-gray-500 mb-3">
              Categories
            </h3>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-white ${category.color}`}
                >
                  <Hash className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel - Search Content */}
          <div className="md:col-span-5 max-h-[60vh] overflow-y-auto">
            {/* Popular Searches */}
            <div className="p-4 border-b">
              <h3 className="text-sm font-semibold text-gray-500 flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4" />
                Popular Searches
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {popularSearches.map((item, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">{item.query}</span>
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-primary transition-colors">
                      {item.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-500 flex items-center gap-2">
                  <History className="w-4 h-4" />
                  Recent Searches
                </h3>
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  Clear All
                  <Trash2 className="w-3 h-3 ml-1" />
                </Button>
              </div>
              <div className="space-y-2">
                {recentSearches.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{item.query}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">
                        {item.timestamp}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-500 flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4" />
                Trending Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors"
                  >
                    #{topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <Command className="w-4 h-4" />
                Commands
              </button>
              <button
                className="flex items-center gap-1 hover:text-primary transition-colors"
                onClick={() => {
                  onClose();
                  onAdvancedSearch();
                }}
              >
                <Filter className="w-4 h-4" />
                Advanced Search
              </button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-500"
            >
              Press ESC to close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
