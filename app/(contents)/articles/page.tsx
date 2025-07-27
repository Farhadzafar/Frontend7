"use client";
import ArticleCard from "@/components/Pages/Articles/articleCard";
import RecentArticlesSection from "@/components/Pages/Books/recentArticlesSection";
import React from "react";
import { articles2, recentArticles } from "@/public/data/index";
import Section from "@/components/ui/section";
import { ArticleCard2 } from "@/components/Pages/Articles/articleCard2design";
import { PageHeader } from "@/components/Pages/pageHeader";
import ArticlePageClient from "@/components/Pages/Articles/ArticlePageClient";
import { getCategories, getLanguages, getStatuses } from "@/lib/data/articles";

export default async function Page() {
  const categories = await getCategories();
  const languages = await getLanguages();
  const Statuses = await getStatuses();

  return (
    <Section>
      <div className="grid gap-8 mt-32">
        <h2 className="text-2xl font-bold">Research Papers</h2>
        <p className="mt-2">Explore our collection of research papers.</p>
        <ArticlePageClient
          categories={categories}
          languages={languages}
          statuses={Statuses}
        />
      </div>
    </Section>
  );
}
