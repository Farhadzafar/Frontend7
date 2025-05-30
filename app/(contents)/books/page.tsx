"use client";
// this use client should be to using in the page
import FeatuersBookSection from "@/components/Pages/Books/featuersBookSection";
import { PageHeader } from "@/components/Pages/pageHeader";
import Section from "@/components/ui/section";
import React from "react";

export default function Page() {
  return (
    <Section>
      <div>
        <PageHeader
          title="All Books"
          description="Access your bookmarked questions, articles, and resources"
          isviewMode={false}
          onSearch={(value) => console.log("Search:", value)}
          onSortChange={(value) => console.log("Sort By:", value)}
          onCategoryChange={(value) => console.log("Category:", value)}
        />
      </div>
      <FeatuersBookSection />
    </Section>
  );
}
