"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Clock,
  Eye,
  CheckCircle,
  Flag,
  Send,
  ChevronDown,
  Globe,
  Printer,
  Download,
  Link as LinkIcon,
} from "lucide-react";

export default function QuestionDetail() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showFullAnswer, setShowFullAnswer] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Question Header */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                291409
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Published: 26-09-2019</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Eye className="w-4 h-4" />
                <span>5021 views</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-gray-500">
                <Globe className="w-4 h-4 mr-2" />
                EN
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <Printer className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Question</h2>
          <p className="text-gray-700 mb-6">
            We inherited some shares in telecommunications, and we used to
            receive the profits; we disposed of 10% of them, and kept the rest.
            Is what we did correct? We want to sell the shares and get rid of
            them, and we do not know what the capital was. The price of the
            shares has risen, so what should we do?
          </p>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <LinkIcon className="w-4 h-4" />
              Copy Link
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Answer Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-semibold mb-6">Answer</h2>

          <div className="prose max-w-none">
            <p className="text-xl mb-6">Praise be to Allah.</p>

            <div
              className={`relative ${
                !showFullAnswer && "max-h-[300px] overflow-hidden"
              }`}
            >
              <p className="mb-4">
                If the shares mentioned are mixed, because some of the company's
                activities are haraam, or because the company deals with ribaa
                when lending (by depositing money with them) or borrowing money,
                then what you must do is get rid of them by selling them, and it
                is not permissible to keep them and do what you have been doing
                to purify the earnings, because the prohibition does not extend
                only to consuming the haraam ribaa (interest);
              </p>

              {!showFullAnswer && (
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
              )}
            </div>

            {!showFullAnswer && (
              <div className="text-center mt-4">
                <Button
                  variant="ghost"
                  onClick={() => setShowFullAnswer(true)}
                  className="gap-2"
                >
                  Show More
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                className={`gap-2 ${
                  isLiked ? "text-primary" : "text-gray-500"
                }`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <ThumbsUp className="w-5 h-5" />
                Helpful
              </Button>
              <Button variant="ghost" className="gap-2 text-gray-500">
                <Flag className="w-5 h-5" />
                Report Error
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                Was this answer helpful?
              </span>
              <Button size="sm">Yes</Button>
              <Button size="sm" variant="outline">
                No
              </Button>
            </div>
          </div>
        </div>

        {/* Related Questions */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Related Questions</h3>
          <div className="space-y-4">
            {[
              "What is the ruling on buying shares in companies?",
              "Is it permissible to invest in telecommunications companies?",
              "How to calculate zakat on shares and investments?",
              "Ruling on trading in stocks and shares",
            ].map((question, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="text-gray-700 hover:text-primary transition-colors">
                  {question}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
