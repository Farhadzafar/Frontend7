"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FatwaCard from "./fatwaCard";
import { getFatwas } from "@/lib/data/fatwa";

const DEFAULT_PAGE = 1;
const PAGE_LIMIT = 10;

type FiltersCardProps = {
  categories: {
    id: string;
    ps: string;
    en: string;
    ar: string;
  }[];
  sort: { value: string; label: string }[];
  languages?: { name: string; code: string }[];
};

export default function FatwasPageClient({
  categories,
  sort,
  languages = [],
}: FiltersCardProps) {
  const [fatwas, setFatwas] = useState<any[]>([]);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("recent");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState("");

  const observerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const fetchFatwas = useCallback(
    async (pageToLoad = DEFAULT_PAGE, append = false) => {
      setLoading(true);
      try {
        const { fatwas: fetchedFatwas, hasMore: more } = await getFatwas(
          pageToLoad,
          PAGE_LIMIT,
          {
            category: selectedCategory,
            language: selectedLanguage,
            sortBy: selectedSort,
            search,
          }
        );
        setFatwas((prev) =>
          append ? [...prev, ...fetchedFatwas] : fetchedFatwas
        );
        setHasMore(more);
        setPage(pageToLoad);
      } catch (err) {
        console.error("❌ Error loading fatwas:", err);
      } finally {
        setLoading(false);
      }
    },
    [search, selectedCategory, selectedLanguage, selectedSort]
  );

  // Fetch on filters/search
  useEffect(() => {
    fetchFatwas(DEFAULT_PAGE);
  }, [fetchFatwas]);

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        fetchFatwas(page + 1, true);
      }
    });

    const sentinel = observerRef.current;
    if (sentinel) observer.observe(sentinel);

    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, [fetchFatwas, loading, hasMore, page]);

  return (
    <div className="space-y-8 p-8">
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onBlur={() => fetchFatwas(DEFAULT_PAGE)}
              placeholder="Search fatwas by title..."
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3 flex-wrap">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>

            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                fetchFatwas(DEFAULT_PAGE);
              }}
              className="rounded-md border-gray-300 shadow-sm"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.en}
                </option>
              ))}
            </select>

            <select
              value={selectedLanguage}
              onChange={(e) => {
                setSelectedLanguage(e.target.value);
                fetchFatwas(DEFAULT_PAGE);
              }}
              className="rounded-md border-gray-300 shadow-sm"
            >
              <option value="all">All Languages</option>
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code.toLowerCase()}>
                  {lang.name} ({lang.code})
                </option>
              ))}
            </select>

            <select
              value={selectedSort}
              onChange={(e) => {
                setSelectedSort(e.target.value);
                fetchFatwas(DEFAULT_PAGE);
              }}
              className="rounded-md border-gray-300 shadow-sm"
            >
              <option value="all">Sort By</option>
              {sort.map((sort) => (
                <option key={sort.value} value={sort.value.toLowerCase()}>
                  {sort.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Fatwa Cards */}
      {fatwas.map((fatwa, i) => (
        <FatwaCard key={fatwa._id + i} fatwa={fatwa} />
      ))}

      {/* Infinite Scroll Observer */}
      <div ref={observerRef} className="h-10" />

      {/* Status messages */}
      {loading && (
        <p className="text-center text-gray-500">Loading more fatwas...</p>
      )}
      {!hasMore && !loading && (
        <p className="text-center text-gray-400">✅ No more fatwas to load.</p>
      )}
    </div>
  );
}
