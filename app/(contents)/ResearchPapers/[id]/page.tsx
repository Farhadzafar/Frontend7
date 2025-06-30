"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Download,
  Share2,
  FileText,
  Link as LinkIcon,
  ArrowLeft,
  Eye,
  ChevronDown,
  ChevronUp,
  Globe,
  Presentation as Citation,
  Calendar,
  Building2,
  BarChart,
  BookmarkPlus,
  Mail,
  Printer,
  Flag,
} from "lucide-react";
import Link from "next/link";

export default function ResearchPaperDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [isAbstractExpanded, setIsAbstractExpanded] = useState(false);
  const [showCitation, setShowCitation] = useState(false);

  // Mock data - In a real app, fetch this based on params.id
  const paper = {
    title:
      "Contemporary Applications of Islamic Finance: A Comprehensive Analysis",
    abstract: `This research paper examines the modern applications of Islamic finance principles in contemporary financial markets. The study analyzes the compatibility of various financial instruments with Shariah law and their effectiveness in meeting the needs of Muslim investors and businesses.

The research methodology combines qualitative analysis of Shariah principles with quantitative assessment of financial performance data. Key areas of focus include:

1. Sukuk (Islamic bonds) structures and their market performance
2. Islamic banking products and services
3. Shariah-compliant investment vehicles
4. Fintech applications in Islamic finance
5. Regulatory frameworks and governance

The findings suggest that Islamic finance continues to evolve and adapt to modern financial needs while maintaining compliance with Shariah principles. The paper also identifies areas for potential innovation and development in the field.`,
    author: {
      name: "Dr. Sarah Mohammed",
      title: "Professor of Islamic Finance",
      institution: "Oxford Centre for Islamic Studies",
      email: "sarah.mohammed@oxford.example.com",
      bio: "Dr. Sarah Mohammed has over 15 years of experience in Islamic Finance research and has published numerous papers in leading academic journals. Her work focuses on the intersection of traditional Islamic financial principles and modern financial markets.",
      avatar:
        "https://ui-avatars.com/api/?name=Sarah+Mohammed&background=random",
    },
    metadata: {
      published: "February 15, 2024",
      doi: "10.1234/islamic.finance.2024",
      pages: 45,
      format: "PDF",
      language: "English",
      license: "Creative Commons Attribution 4.0",
      citations: 78,
      downloads: 2300,
      views: 5600,
    },
    keywords: [
      "Islamic Finance",
      "Shariah Compliance",
      "Sukuk",
      "Islamic Banking",
      "Financial Markets",
      "Fintech",
    ],
    citations: [
      {
        text: "Mohammed, S. (2024). Contemporary Applications of Islamic Finance: A Comprehensive Analysis. Journal of Islamic Finance, 15(2), 123-168.",
        format: "APA",
      },
      {
        text: "Mohammed, Sarah. 'Contemporary Applications of Islamic Finance: A Comprehensive Analysis.' Journal of Islamic Finance 15.2 (2024): 123-168.",
        format: "MLA",
      },
      {
        text: "Mohammed S. Contemporary Applications of Islamic Finance: A Comprehensive Analysis. J Islamic Finance. 2024;15(2):123-168.",
        format: "Chicago",
      },
    ],
    sections: [
      {
        title: "Introduction",
        content:
          "The field of Islamic finance has experienced significant growth...",
      },
      {
        title: "Literature Review",
        content: "Previous studies have examined various aspects...",
      },
      {
        title: "Methodology",
        content: "This research employs a mixed-methods approach...",
      },
      {
        title: "Results",
        content: "The analysis reveals several key findings...",
      },
      {
        title: "Discussion",
        content: "The implications of these findings suggest...",
      },
    ],
    relatedPapers: [
      {
        title: "Evolution of Islamic Banking Systems",
        author: "Dr. Ahmad Al-Razi",
        institution: "International Islamic University",
        citations: 45,
        year: "2023",
      },
      {
        title: "Fintech Innovation in Islamic Finance",
        author: "Prof. Aisha Rahman",
        institution: "Harvard University",
        citations: 62,
        year: "2024",
      },
      {
        title: "Shariah-Compliant Investment Strategies",
        author: "Dr. Mohammed Al-Bukhari",
        institution: "Islamic University of Madinah",
        citations: 34,
        year: "2023",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      {/* Back Button - Mobile */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 mb-4">
        <Button variant="ghost" className="gap-2" asChild>
          <Link href="/books">
            <ArrowLeft className="w-4 h-4" />
            Back to Research Papers
          </Link>
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Paper Header */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Research Paper
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {paper.metadata.published}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <FileText className="w-4 h-4" />
                  {paper.metadata.pages} pages
                </span>
              </div>

              <h1 className="text-3xl font-bold mb-6">{paper.title}</h1>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={paper.author.avatar}
                  alt={paper.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{paper.author.name}</h3>
                  <p className="text-sm text-gray-600">{paper.author.title}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building2 className="w-4 h-4" />
                    {paper.author.institution}
                  </div>
                </div>
              </div>

              {/* Paper Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-primary mb-1">
                    <Citation className="w-5 h-5" />
                    <span className="font-semibold">
                      {paper.metadata.citations}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Citations</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-primary mb-1">
                    <Download className="w-5 h-5" />
                    <span className="font-semibold">
                      {paper.metadata.downloads}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Downloads</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-primary mb-1">
                    <Eye className="w-5 h-5" />
                    <span className="font-semibold">
                      {paper.metadata.views}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Views</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-primary mb-1">
                    <Globe className="w-5 h-5" />
                    <span className="font-semibold">
                      {paper.metadata.language}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Language</p>
                </div>
              </div>
            </Card>

            {/* Abstract */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Abstract</h2>
              <div
                className={`relative ${
                  !isAbstractExpanded && "max-h-[200px] overflow-hidden"
                }`}
              >
                <div className="prose max-w-none">
                  {paper.abstract.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {!isAbstractExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
                )}
              </div>
              <Button
                variant="ghost"
                onClick={() => setIsAbstractExpanded(!isAbstractExpanded)}
                className="mt-4 gap-2"
              >
                {isAbstractExpanded ? (
                  <>
                    Show Less
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </Button>
            </Card>

            {/* Keywords */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Keywords</h2>
              <div className="flex flex-wrap gap-2">
                {paper.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Download & Actions */}
            <Card className="p-6">
              <Button className="w-full gap-2 mb-4">
                <Download className="w-4 h-4" />
                Download Paper
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button variant="outline" className="gap-2">
                  <BookmarkPlus className="w-4 h-4" />
                  Save
                </Button>
                <Button variant="outline" className="gap-2">
                  <Printer className="w-4 h-4" />
                  Print
                </Button>
                <Button variant="outline" className="gap-2">
                  <Flag className="w-4 h-4" />
                  Report
                </Button>
              </div>
            </Card>

            {/* Paper Details */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Paper Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">DOI</span>
                  <span className="font-medium">{paper.metadata.doi}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Published</span>
                  <span className="font-medium">
                    {paper.metadata.published}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Pages</span>
                  <span className="font-medium">{paper.metadata.pages}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Format</span>
                  <span className="font-medium">{paper.metadata.format}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">License</span>
                  <span className="font-medium">{paper.metadata.license}</span>
                </div>
              </div>
            </Card>

            {/* Related Papers */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Related Papers</h2>
              <div className="space-y-4">
                {paper.relatedPapers.map((relatedPaper, index) => (
                  <div key={index} className="group cursor-pointer">
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {relatedPaper.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {relatedPaper.author}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {relatedPaper.institution}
                      </span>
                      <span className="flex items-center gap-1">
                        <BarChart className="w-4 h-4" />
                        {relatedPaper.citations} citations
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
