import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatDate, truncateString } from "@/lib/utils";
import { Bookmark, Clock, ThumbsUp, Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Fatwa {
  _id: string;
  title: string;
  description: string;
  category?: {
    _id?: string;
    name?: string;
  };
  language: "ps" | "en" | "ar";
  madhab: string;
  status: "pending" | "assigned" | "submitted" | "published" | "rejected";
  views: number;
  likes?: string[];
  tags?: string[];
  createdAt: string;
  scholar?: {
    _id: string;
    fullName?: string;
  };
}

export default function FatwaCard({ fatwa }: { fatwa: Fatwa }) {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 rounded-2xl">
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {fatwa.category?.name ?? ""}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {formatDate(fatwa.createdAt)}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
              <Link href={`/answers/${fatwa._id}`}>{fatwa.title}</Link>
            </h3>

            <p className="text-gray-600 mb-4 line-clamp-3">
              {truncateString(fatwa.description, 120)}
              {/* {fatwa.description} */}
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-primary"
          >
            <Bookmark className="w-5 h-5" />
          </Button>
        </div>

        {/* Tags */}
        {fatwa.tags && fatwa.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {fatwa.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-2">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                fatwa.scholar?.fullName ?? "Scholar"
              )}&background=random`}
              alt={fatwa.scholar?.fullName ?? "Scholar"}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium">
              {fatwa.scholar?.fullName ?? "Unknown"}
            </span>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-1 hover:text-primary transition-colors">
              <Eye className="w-4 h-4" />
              <span className="text-sm">{fatwa.views}</span>
            </span>
            <span className="flex items-center gap-1 hover:text-primary transition-colors">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm">{fatwa.likes?.length ?? 0}</span>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
