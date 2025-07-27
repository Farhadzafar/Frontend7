"use client";
import BookPageClient from "@/components/Pages/Books/BookPageCleint";
import Section from "@/components/ui/section";
import { getLanguages } from "@/lib/data/articles";
import { getCategories, getSortOptions } from "@/lib/data/books";
import React from "react";

export default async function Page() {
  const categories = await getCategories();
  const languages = await getLanguages();
  const sortBy = await getSortOptions();

  return (
    <Section>
      <BookPageClient
        categories={categories}
        languages={languages}
        sortBy={sortBy}
      />
    </Section>
  );
}
