import ResearchCard from "@/components/Pages/Research/researchCard";
import ResearchCard2 from "@/components/Pages/Research/researchCard2desing";
import Section from "@/components/ui/section";
import { researchPapers, researchPapers2 } from "@/public/data";
import { Mina } from "next/font/google";
import React from "react";

export default function page() {
  return (
    <Section>
      <div className="flex flex-col items-start h-full mb-8">
        <h1 className="text-3xl font-bold">Research Papers</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our collection of research papers on various Islamic topics.
        </p>
      </div>
      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {researchPapers.map((paper) => (
          <ResearchCard key={paper.title} paper={paper} />
        ))}
      </main>

      <div className="flex flex-col items-start h-full mb-8 mt-48 gap-8">
        <hr />
        {researchPapers2.map((paper) => (
          <ResearchCard2 key={paper.title} paper={paper} />
        ))}
      </div>
    </Section>
  );
}
