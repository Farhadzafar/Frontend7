"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search,
  X,
  AlertCircle,
  MessageSquare,
  BookOpen,
  FileText,
  GraduationCap,
} from "lucide-react";

interface AdvancedSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdvancedSearch({ isOpen, onClose }: AdvancedSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [withVideo, setWithVideo] = useState(false);

  const categories = [
    { name: "Aqeedah", color: "bg-emerald-50 text-emerald-600" },
    { name: "Fiqh", color: "bg-blue-50 text-blue-600" },
    { name: "Hadith", color: "bg-purple-50 text-purple-600" },
    { name: "Quran", color: "bg-yellow-50 text-yellow-600" },
    { name: "Family", color: "bg-red-50 text-red-600" },
    { name: "Worship", color: "bg-pink-50 text-pink-600" },
  ];

  const languages = [
    "Arabic",
    "English",
    "Urdu",
    "French",
    "Turkish",
    "Indonesian",
  ];

  const contentTypes = [
    { icon: MessageSquare, label: "Questions & Answers", count: "50K+" },
    { icon: BookOpen, label: "Articles", count: "2.5K" },
    { icon: FileText, label: "Research Papers", count: "500+" },
    { icon: GraduationCap, label: "Scholar Insights", count: "1.2K" },
  ];

  if (!isOpen) return null;

  return (
    <div className="h-screen overflow-auto fixed inset-0 bg-black/90 z-[60] flex items-start justify-center pt-10">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl mx-4 overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-semibold">Advanced Search</h2>
            <p className="text-gray-500 text-sm mt-1">
              Refine your search with specific criteria
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search Query */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Query
              </label>
              <div className="relative">
                <Input
                  placeholder="Enter keywords..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Content Types */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Content Types
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {contentTypes.map((type, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/5 text-primary">
                        <type.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {type.label}
                        </p>
                        <p className="text-sm text-gray-500">{type.count}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categories
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                {categories.map((category, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer"
                  >
                    <Checkbox
                      checked={selectedCategories.includes(category.name)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedCategories([
                            ...selectedCategories,
                            category.name,
                          ]);
                        } else {
                          setSelectedCategories(
                            selectedCategories.filter(
                              (c) => c !== category.name
                            )
                          );
                        }
                      }}
                    />
                    <span className="text-sm">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Languages
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                {languages.map((language, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer"
                  >
                    <Checkbox
                      checked={selectedLanguages.includes(language)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedLanguages([
                            ...selectedLanguages,
                            language,
                          ]);
                        } else {
                          setSelectedLanguages(
                            selectedLanguages.filter((l) => l !== language)
                          );
                        }
                      }}
                    />
                    <span className="text-sm">{language}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Date Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="date"
                  value={dateRange.from}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, from: e.target.value })
                  }
                />
                <Input
                  type="date"
                  value={dateRange.to}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, to: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Additional Filters */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Filters
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={verifiedOnly}
                    onCheckedChange={(checked) =>
                      setVerifiedOnly(checked as boolean)
                    }
                  />
                  <span className="text-sm">Verified Scholar Answers Only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={withVideo}
                    onCheckedChange={(checked) =>
                      setWithVideo(checked as boolean)
                    }
                  />
                  <span className="text-sm">Include Video Responses</span>
                </label>
              </div>
            </div>
          </div>

          {/* Search Tips */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Search Tips
            </h3>
            <ul className="mt-2 space-y-1">
              <li className="text-sm text-blue-700">
                Use quotes for exact phrase matching: "prayer times"
              </li>
              <li className="text-sm text-blue-700">
                Use AND/OR operators: salah AND fasting
              </li>
              <li className="text-sm text-blue-700">
                Use - to exclude terms: prayer -times
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between p-6 bg-gray-50 border-t">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategories([]);
                setSelectedLanguages([]);
                setDateRange({ from: "", to: "" });
                setVerifiedOnly(false);
                setWithVideo(false);
              }}
            >
              Reset Filters
            </Button>
            <Button>
              Search
              <Search className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
