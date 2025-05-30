import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bookmark, Clock, MessageSquare, ThumbsUp, Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

interface FatwaCardProps {
  id: string;
  category: string;
  time: string;
  title: string;
  excerpt: string;
  tags: string[];
  scholarName: string;
  avatarUrl?: string;
  views: number;
  likes: number;
}

export default function FatwaCard({
  id,
  category,
  time,
  title,
  excerpt,
  tags,
  scholarName,
  avatarUrl,
  views,
  likes,
}: FatwaCardProps) {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 rounded-2xl">
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {category}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {time}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
              <Link href={`/answers/${id}`}>{title}</Link>
            </h3>

            <p className="text-gray-600 mb-4">{excerpt}</p>
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
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-2">
            <img
              src={
                avatarUrl ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  scholarName
                )}&background=random`
              }
              alt={scholarName}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium">{scholarName}</span>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-1 hover:text-primary transition-colors">
              <Eye className="w-4 h-4" />
              <span className="text-sm">{views}</span>
            </span>
            <span className="flex items-center gap-1 hover:text-primary transition-colors">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm">{likes}</span>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
