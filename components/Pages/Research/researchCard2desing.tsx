import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; // Assuming Button is coming from your UI library
import {
  Calendar,
  Bookmark,
  Eye,
  Download,
  Building2,
  CatIcon,
  BarChart,
} from "lucide-react";
import Link from "next/link";

const Tag = ({ tag }: { tag: string }) => (
  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
    #{tag}
  </span>
);

const AuthorInfo = ({ author }: { author: any }) => (
  <div className="flex items-center gap-4 mb-4">
    <img
      src={author.avatar}
      alt={author.name}
      className="w-10 h-10 rounded-full"
    />
    <div>
      <h4 className="font-medium">{author.name}</h4>
      <p className="text-sm text-gray-600">{author.role}</p>
    </div>
  </div>
);

const PaperStats = ({ paper }: { paper: any }) => (
  <div className="flex items-center gap-6">
    <div className="flex items-center gap-2">
      <Building2 className="w-4 h-4 text-gray-400" />
      <span className="text-sm text-gray-600">{paper.author.institution}</span>
    </div>
    <div className="flex items-center gap-2">
      <CatIcon className="w-4 h-4 text-gray-400" />
      <span className="text-sm text-gray-600">{paper.citations} citations</span>
    </div>
    <div className="flex items-center gap-2">
      <BarChart className="w-4 h-4 text-gray-400" />
      <span className="text-sm text-gray-600">
        IF: {paper.metrics.impactFactor}
      </span>
    </div>
  </div>
);

const ResearchCard2 = ({ paper }: { paper: any }) => (
  <Link href={`ResearchPapers/${paper.id}`} key={paper.id}>
    <Card className="p-6 hover:shadow-xl transition-all duration-300 group">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Cover Image */}
        <div className="lg:col-span-1">
          <div className="relative h-48 lg:h-full rounded-lg overflow-hidden">
            <img
              src={paper.coverImage}
              alt={paper.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  paper.status === "Published"
                    ? "bg-emerald-500/90 text-white"
                    : "bg-yellow-500/90 text-white"
                }`}
              >
                {paper.status}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {paper.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {paper.publishDate}
                  </span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {paper.title}
                </h3>
              </div>
              <Button variant="ghost" size="icon" className="shrink-0">
                <Bookmark className="w-5 h-5" />
              </Button>
            </div>

            {/* Author Info */}
            <AuthorInfo author={paper.author} />

            {/* Abstract */}
            <p className="text-gray-600 mb-4 line-clamp-2">{paper.abstract}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {paper.tags.map((tag: string, index: number) => (
                <Tag key={index} tag={tag} />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t">
            <PaperStats paper={paper} />

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {paper.views}
                </span>
                <span className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  {paper.downloads}
                </span>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Link>
);

export default ResearchCard2;
