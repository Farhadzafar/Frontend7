// app/answers/[id]/QuestionDetailClient.tsx or FatwaDetailClient.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Clock,
  Eye,
  Flag,
  ChevronDown,
  Globe,
  Printer,
  Download,
  Link as LinkIcon,
} from "lucide-react";
import { Fatwa } from "@/types/fatwa";

export default function FatwaDetailClient({ fatwa }: { fatwa: any }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(true);
  const [showFullAnswer, setShowFullAnswer] = useState(false);
  console.log("🤣🤣🤣🤣", fatwa);

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                {fatwa.category}
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Published: {new Date(fatwa.createdAt).toLocaleDateString()}
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {fatwa.views} views
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Globe className="w-4 h-4" /> EN
              </Button>
              <Button variant="ghost" size="sm">
                <Printer className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Question</h2>
          <p className="text-gray-700">{fatwa.question}</p>

          <div className="mt-4 flex gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <LinkIcon className="w-4 h-4" /> Copy Link
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" /> Share
            </Button>
          </div>
        </div>

        {/* Answer */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-semibold mb-4">Answer</h2>
          <p className="text-xl mb-6">Praise be to Allah.</p>
          <div className="text-gray-700 whitespace-pre-line">
            {showFullAnswer
              ? fatwa.description
              : fatwa.description.slice(0, 300)}
            {!showFullAnswer && fatwa.description.length > 300 && (
              <div className="text-center mt-4">
                <Button variant="ghost" onClick={() => setShowFullAnswer(true)}>
                  Show More <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Feedback */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Button
                variant="ghost"
                className={`gap-2 ${
                  isLiked ? "text-primary" : "text-gray-500"
                }`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <ThumbsUp className="w-5 h-5" /> Helpful
              </Button>
              <Button variant="ghost" className="gap-2 text-gray-500">
                <Flag className="w-5 h-5" /> Report Error
              </Button>
            </div>
            <div className="flex gap-2 text-sm text-gray-600">
              Was this answer helpful?
              <Button size="sm">Yes</Button>
              <Button size="sm" variant="outline">
                No
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
