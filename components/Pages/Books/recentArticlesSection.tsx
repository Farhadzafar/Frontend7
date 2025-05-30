import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { recentArticles } from "@/public/data/index";
import ArticleCard from "@/components/Pages/Articles/articleCard";

export default function RecentArticlesSection() {
  return (
    <Section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Recent Articles</h2>
        <Button variant="ghost" className="gap-2">
          View All <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentArticles.slice(0, 3).map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </Section>
  );
}
