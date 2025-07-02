"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import BookCard from "./bookCard";
import { getAllBooks } from "@/lib/data/books"; // Make sure this accepts `sortBy`

const DEFAULT_PAGE = 1;
const PAGE_LIMIT = 12;

type FiltersCardProps = {
  categories: {
    id: string;
    ps: string;
    en: string;
    ar: string;
  }[];
  sortBy: { value: string; label: string }[];
  languages?: { name: string; code: string }[];
};

export default function BookPageClient({
  categories,
  sortBy,
  languages,
}: FiltersCardProps) {
  const [books, setBooks] = useState<any[]>([]);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedSortBy, setSelectedSortBy] = useState("recent");
  const [search, setSearch] = useState("");

  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchBooks = useCallback(
    async (pageToLoad = DEFAULT_PAGE, append = false) => {
      setLoading(true);
      try {
        const { books: fetchedBooks, hasMore: more } = await getAllBooks(
          pageToLoad,
          PAGE_LIMIT,
          {
            category: selectedCategory,
            language: selectedLanguage,
            sortBy: selectedSortBy,
            search,
          }
        );
        setBooks((prev) =>
          append ? [...prev, ...fetchedBooks] : fetchedBooks
        );
        setHasMore(more);
        setPage(pageToLoad);
      } catch (err) {
        console.error("❌ Error loading books:", err);
      } finally {
        setLoading(false);
      }
    },
    [search, selectedCategory, selectedLanguage, selectedSortBy]
  );

  useEffect(() => {
    fetchBooks(DEFAULT_PAGE);
  }, [fetchBooks]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        fetchBooks(page + 1, true);
      }
    });
    const sentinel = observerRef.current;
    if (sentinel) observer.observe(sentinel);
    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, [fetchBooks, loading, hasMore, page]);

  const handleFilterChange = () => {
    fetchBooks(DEFAULT_PAGE);
  };

  return (
    <div className="space-y-8 p-8">
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* 🔍 Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onBlur={handleFilterChange}
              placeholder="Search books by title..."
              className="pl-10"
            />
          </div>

          {/* 🧩 Filters */}
          <div className="flex gap-3 flex-wrap">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                handleFilterChange();
              }}
              className="rounded-md border-gray-300 shadow-sm"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.en.toLowerCase()}>
                  {cat.en}
                </option>
              ))}
            </select>

            {/* Language Filter */}
            <select
              value={selectedLanguage}
              onChange={(e) => {
                setSelectedLanguage(e.target.value);
                handleFilterChange();
              }}
              className="rounded-md border-gray-300 shadow-sm"
            >
              <option value="all">All Languages</option>
              {languages?.map((lang) => (
                <option key={lang.code} value={lang.code.toLowerCase()}>
                  {lang.name} ({lang.code})
                </option>
              ))}
            </select>

            {/* SortBy Filter (🆕 replaced status) */}
            <select
              value={selectedSortBy}
              onChange={(e) => {
                setSelectedSortBy(e.target.value);
                handleFilterChange();
              }}
              className="rounded-md border-gray-300 shadow-sm"
            >
              {sortBy.map((sort) => (
                <option key={sort.value} value={sort.value}>
                  {sort.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 📚 Book Grid */}
        {books.map((book, i) => (
          <BookCard book={book} key={book._id + i} />
        ))}
      </div>

      {/* 🔁 Infinite Scroll Target */}
      <div ref={observerRef} className="h-10" />

      {/* ⏳ Loading Indicator */}
      {loading && (
        <p className="text-center text-gray-500">Loading more books...</p>
      )}
      {!hasMore && !loading && (
        <p className="text-center text-gray-400">✅ No more books to load.</p>
      )}
    </div>
  );
}
