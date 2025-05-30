import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark, Download, GraduationCap } from "lucide-react";
import Image from "next/image";
import React from "react";

type ResearchCardProps = {
  paper: {
    title: string;
    author: string;
    category: string;
    published: string;
    institution: string;
    citations: number;
    pdfUrl?: string;
  };
};

export default function ResearchCard({ paper }: ResearchCardProps) {
  return (
    <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300">
      {/* Header Section */}
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {paper.category}
            </span>
            <span className="text-sm text-muted-foreground">
              {paper.published}
            </span>
          </div>
          <h3 className="text-xl font-semibold hover:text-primary transition-colors">
            {paper.title}
          </h3>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {paper.institution}
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-primary"
        >
          <Bookmark className="w-5 h-5" />
        </Button>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-2">
          <Image
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              paper.author
            )}&background=random`}
            alt={paper.author}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-medium">{paper.author}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {paper.citations} citations
          </span>
          {/* <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            <a href={paper.pdfUrl || "#"} download>
              Download PDF
            </a>
          </Button> */}
        </div>
      </div>
    </Card>
  );
}
