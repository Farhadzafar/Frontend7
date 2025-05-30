"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Share2,
  Bookmark,
  Clock,
  User,
  Heart,
  MessageSquare,
  Eye,
  Calendar,
  ArrowLeft,
  ThumbsUp,
  Tag,
  Link as LinkIcon,
  Printer,
  Download,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function ArticleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  // Mock data - In a real app, fetch this based on params.id
  const article = {
    title: "Understanding the Importance of Tawheed in Modern Times",
    subtitle: "A Comprehensive Guide to Islamic Monotheism",
    author: {
      name: "Dr. Abdullah Muhammad",
      title: "Professor of Islamic Studies",
      institution: "International Islamic University",
      avatar:
        "https://ui-avatars.com/api/?name=Abdullah+Muhammad&background=random",
      bio: "Dr. Abdullah Muhammad has over 20 years of experience in Islamic Studies and has authored numerous books on Islamic theology.",
    },
    category: "Aqeedah",
    publishDate: "February 15, 2024",
    readTime: "12 min read",
    views: 1234,
    likes: 567,
    shares: 89,
    image:
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=2940&auto=format&fit=crop",
    content: `Tawheed, the concept of Islamic monotheism, stands as the cornerstone of Islamic faith and practice. In our modern world, understanding and implementing this fundamental principle has become more crucial than ever.

The Concept of Tawheed:
Tawheed refers to the absolute oneness of Allah (God) in His essence, attributes, and actions. It encompasses three main categories:

1. Tawheed ar-Rububiyyah (Oneness of Lordship):
• Believing that Allah alone is the Creator of everything
• Acknowledging His complete control over all affairs
• Recognizing His sustenance of all creation

2. Tawheed al-Uluhiyyah (Oneness of Worship):
• Directing all acts of worship solely to Allah
• Avoiding any form of polytheism or idolatry
• Understanding the proper means of approaching Allah

3. Tawheed al-Asma was-Sifat (Oneness of Names and Attributes):
• Affirming Allah's names and attributes as mentioned in the Quran and Sunnah
• Avoiding any distortion or denial of these attributes
• Understanding these attributes in their proper context

Modern Challenges to Tawheed:
In our contemporary world, Muslims face various challenges to maintaining pure monotheism:

• Materialism and consumerism
• Scientific skepticism
• Cultural influences
• Modern forms of shirk (polytheism)
• Secular ideologies

Practical Implementation:
Understanding Tawheed should reflect in our daily lives through:

1. Worship practices
2. Decision-making
3. Social interactions
4. Economic activities
5. Personal development

The Impact of Tawheed:
When properly understood and implemented, Tawheed has profound effects on:

• Individual character
• Family structure
• Social harmony
• Economic justice
• Environmental consciousness`,
    topics: [
      "Aqeedah",
      "Islamic Theology",
      "Monotheism",
      "Modern Islam",
      "Islamic Studies",
      "Faith",
      "Belief",
    ],
    references: [
      {
        title: "Kitab at-Tawheed",
        author: "Muhammad ibn Abdul-Wahhab",
        type: "Book",
      },
      {
        title: "The Fundamentals of Tawheed",
        author: "Abu Ameenah Bilal Philips",
        type: "Research Paper",
      },
      {
        title: "Understanding Islamic Monotheism",
        author: "Dr. Yasir Qadhi",
        type: "Academic Article",
      },
    ],
    relatedArticles: [
      {
        title: "The Scientific Miracles in the Quran",
        author: "Prof. Sarah Ahmed",
        category: "Quran Studies",
        readTime: "15 min read",
        image:
          "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2940&auto=format&fit=crop",
      },
      {
        title: "Islamic Finance: A Comprehensive Guide",
        author: "Dr. Ibrahim Hassan",
        category: "Contemporary Issues",
        readTime: "10 min read",
        image:
          "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2940&auto=format&fit=crop",
      },
    ],
    comments: [
      {
        id: 1,
        user: "Sarah Mohammed",
        avatar:
          "https://ui-avatars.com/api/?name=Sarah+Mohammed&background=random",
        comment:
          "This article provides an excellent explanation of Tawheed and its relevance in our modern context. The practical implementation section was particularly helpful.",
        date: "2 days ago",
        likes: 45,
      },
      {
        id: 2,
        user: "Ahmad Ibrahim",
        avatar:
          "https://ui-avatars.com/api/?name=Ahmad+Ibrahim&background=random",
        comment:
          "Very comprehensive coverage of the topic. The section about modern challenges to Tawheed was eye-opening.",
        date: "3 days ago",
        likes: 32,
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
            Back to Articles
          </Link>
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Article Header */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {article.publishDate}
                </span>
              </div>

              <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{article.subtitle}</p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{article.author.name}</h3>
                  <p className="text-sm text-gray-600">
                    {article.author.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {article.author.institution}
                  </p>
                </div>
              </div>

              {/* Article Stats */}
              <div className="flex items-center gap-6 text-gray-500">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {article.views} views
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {article.likes} likes
                </span>
                <span className="flex items-center gap-1">
                  <Share2 className="w-4 h-4" />
                  {article.shares} shares
                </span>
              </div>
            </Card>

            {/* Featured Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <Card className="p-6">
              <div
                className={`prose max-w-none ${
                  !isContentExpanded && "max-h-[500px] overflow-hidden relative"
                }`}
              >
                {article.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
                {!isContentExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
                )}
              </div>
              <Button
                variant="ghost"
                onClick={() => setIsContentExpanded(!isContentExpanded)}
                className="mt-4 gap-2"
              >
                {isContentExpanded ? (
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

            {/* References */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">References</h2>
              <div className="space-y-4">
                {article.references.map((reference, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-medium">{reference.title}</h3>
                      <p className="text-sm text-gray-600">
                        by {reference.author}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      {reference.type}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Comments */}
            {/* <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Comments</h2>
                <Button>Add Comment</Button>
              </div>

              <div className="space-y-6">
                {article.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="border-b last:border-0 pb-6 last:pb-0"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={comment.avatar}
                        alt={comment.user}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{comment.user}</h3>
                          <span className="text-sm text-gray-500">
                            {comment.date}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-2">{comment.comment}</p>
                        <div className="flex items-center gap-4 mt-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Heart className="w-4 h-4" />
                            {comment.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card> */}
          </div>
        </div>
      </div>
    </main>
  );
}

// /////////////////////////////////////////
{
  /* Sidebar */
}
{
  /* <div className="space-y-8">
{/* Author Bio */
}
{
  /* <Card className="p-6">
  <h2 className="text-lg font-semibold mb-4">About the Author</h2>
  <p className="text-gray-600 text-sm">{article.author.bio}</p>
  <Button variant="outline" className="w-full mt-4 gap-2">
    <User className="w-4 h-4" />
    View Profile
  </Button>
</Card> */
}

{
  /* Topics */
}
{
  /* <Card className="p-6">
  <h2 className="text-lg font-semibold mb-4">Topics</h2>
  <div className="flex flex-wrap gap-2">
    {article.topics.map((topic, index) => (
      <span
        key={index}
        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
      >
        {topic}
      </span>
    ))}
  </div>
</Card> */
}

{
  /* Related Articles */
}
{
  /* <Card className="p-6">
  <h2 className="text-lg font-semibold mb-4">Related Articles</h2>
  <div className="space-y-4">
    {article.relatedArticles.map((relatedArticle, index) => (
      <div
        key={index}
        className="flex items-start gap-4 group cursor-pointer"
      >
        <img
          src={relatedArticle.image}
          alt={relatedArticle.title}
          className="w-20 h-20 rounded object-cover"
        />
        <div>
          <h3 className="font-medium group-hover:text-primary transition-colors">
            {relatedArticle.title}
          </h3>
          <p className="text-sm text-gray-600">
            {relatedArticle.author}
          </p>
          <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
            <span>{relatedArticle.category}</span>
            <span>•</span>
            <span>{relatedArticle.readTime}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</Card> */
}

{
  /* Share & Actions */
}
{
  /* <Card className="p-6">
  <h2 className="text-lg font-semibold mb-4">Share & Actions</h2>
  <div className="space-y-3">
    <Button variant="outline" className="w-full gap-2">
      <Share2 className="w-4 h-4" />
      Share Article
    </Button>
    <Button variant="outline" className="w-full gap-2">
      <Bookmark className="w-4 h-4" />
      Save for Later
    </Button>
    <Button variant="outline" className="w-full gap-2">
      <Printer className="w-4 h-4" />
      Print Article
    </Button>
    <Button variant="outline" className="w-full gap-2">
      <Download className="w-4 h-4" />
      Download PDF
    </Button>
  </div>
</Card> */
}
//</div>
//*/}
