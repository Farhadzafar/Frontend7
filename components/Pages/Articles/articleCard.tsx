import { Card, CardContent } from "@/components/ui/card";
import { Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: string;
  image?: string;
  category?: string;
  title: string;
  author?: string;
  readTime?: string;
  views?: number;
  date?: string;
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="group overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-lg">
      {article.image && (
        <div className="relative h-48 w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {article.category && (
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur rounded-full">
              {article.category}
            </span>
          )}
        </div>
      )}

      <CardContent className="p-6 space-y-3">
        <Link href={`/articles/${article.id}`}>
          <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>

        {article.author && (
          <p className="text-sm text-muted-foreground">By {article.author}</p>
        )}

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            {article.readTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            )}
            {typeof article.views === "number" && (
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {article.views}
              </span>
            )}
          </div>
          {article.date && <span>{article.date}</span>}
        </div>
      </CardContent>
    </Card>
  );
}
