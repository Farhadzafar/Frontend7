"use client";
import ArticleCard from "@/components/Pages/Articles/articleCard";
import RecentArticlesSection from "@/components/Pages/Books/recentArticlesSection";
import React from "react";
import { articles2, recentArticles } from "@/public/data/index";
import Section from "@/components/ui/section";
import { ArticleCard2 } from "@/components/Pages/Articles/articleCard2design";
import { PageHeader } from "@/components/Pages/pageHeader";

export default function Page() {
  return (
    <Section>
      <div>
        <PageHeader
          title="All Articles"
          description="Access your bookmarked questions, articles, and resources"
          isviewMode={false}
          onSearch={(value) => console.log("Search:", value)}
          onSortChange={(value) => console.log("Sort By:", value)}
          onCategoryChange={(value) => console.log("Category:", value)}
        />
      </div>
      {/* Add your book content here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {recentArticles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>

      <div className="grid gap-8 mt-32">
        <h2 className="text-2xl font-bold">Research Papers</h2>
        <p className="mt-2">Explore our collection of research papers.</p>
        {/* Add your research paper content here */}
        {articles2.map((article) => (
          <ArticleCard2 key={article.id} article={article} />
        ))}
      </div>
    </Section>
  );
}
