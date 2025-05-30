"use client";

import { Filter, Grid, List, Search } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card } from "../ui/card";

// type ViewMode = "grid" | "list";

interface PageHeaderProps {
  title: string;
  description?: string;
  enableFilters?: boolean;
  onSearch?: (value: string) => void;
  onSortChange?: (value: string) => void;
  onCategoryChange?: (value: string) => void;
  isviewMode?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  enableFilters = true,
  onSearch,
  onSortChange,
  onCategoryChange,
  isviewMode = false,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch?.(value);
  };

  return (
    <>
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
          {description && <p className="text-gray-600">{description}</p>}
        </div>
        <div className="flex items-center gap-3">
          {enableFilters && (
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          )}
          {/* {onViewModeChange && (
            <div className="border rounded-lg p-1 flex gap-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => onViewModeChange("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => onViewModeChange("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          )} */}
        </div>
      </div>

      {/* Search */}
      <div className="mb-4 relative">
        <Input
          placeholder="Search saved items..."
          className="pl-10"
          value={search}
          onChange={handleSearch}
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
      </div>

      {/* Filters */}
      {showFilters && enableFilters && (
        <Card className="p-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                onChange={(e) => onSortChange?.(e.target.value)}
              >
                <option value="recent">Recently Saved</option>
                <option value="views">Most Viewed</option>
                <option value="likes">Most Liked</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                onChange={(e) => onCategoryChange?.(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="questions">Questions</option>
                <option value="articles">Articles</option>
                <option value="videos">Videos</option>
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
    </>
  );
};
