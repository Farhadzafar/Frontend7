import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Section from "@/components/ui/section";
import {
  ArrowRight,
  Bookmark,
  Clock,
  Eye,
  MessageSquare,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";

const answers = [
  {
    title: "What is the ruling on combining prayers while traveling?",
    category: "Fiqh",
    excerpt:
      "I will be traveling next week and I'm wondering about the conditions for combining prayers during travel. What are the specific requirements and limitations?",
    scholar: "Sheikh Abdullah Ahmad",
    time: "2 hours ago",
    answers: 3,
    views: 156,
    likes: 12,
    saved: 15,
    tags: ["Prayer", "Travel", "Rulings"],
  },
  {
    title: "How should we understand the concept of Qadr (Divine Decree)?",
    category: "Aqeedah",
    excerpt:
      "Can you explain the Islamic perspective on predestination and free will? How do we balance between trust in Allah's decree and taking necessary actions?",
    scholar: "Dr. Sarah Mohammed",
    time: "4 hours ago",
    answers: 5,
    views: 234,
    likes: 28,
    saved: 32,
    tags: ["Faith", "Belief", "Divine Decree"],
  },
  {
    title: "What are the etiquettes of giving Sadaqah (charity)?",
    category: "Worship",
    excerpt:
      "I want to know the proper manners and conditions for giving charity in Islam. What should we keep in mind to ensure our charity is accepted?",
    scholar: "Mufti Ibrahim Hassan",
    time: "6 hours ago",
    answers: 4,
    views: 189,
    likes: 21,
    saved: 18,
    tags: ["Charity", "Manners", "Worship"],
  },
  {
    title: "What are the etiquettes of giving Sadaqah ",
    category: "Worship",
    excerpt:
      "I want to know the proper manners and conditions for giving charity in Islam. What should we keep in mind to ensure our charity is accepted?",
    scholar: "Mufti Ibrahim Hassan",
    time: "6 hours ago",
    answers: 4,
    views: 189,
    likes: 21,
    saved: 18,
    tags: ["Charity", "Manners", "Worship"],
  },
  {
    title: "What is the etiquettes of giving Sadaqah (charity)?",
    category: "Worship",
    excerpt:
      "I want to know the proper manners and conditions for giving charity in Islam. What should we keep in mind to ensure our charity is accepted?",
    scholar: "Mufti Ibrahim Hassan",
    time: "6 hours ago",
    answers: 4,
    views: 189,
    likes: 21,
    saved: 18,
    tags: ["Charity", "Manners", "Worship"],
  },
  {
    title: "What are the  of giving Sadaqah (charity)?",
    category: "Worship",
    excerpt:
      "I want to know the proper manners and conditions for giving charity in Islam. What should we keep in mind to ensure our charity is accepted?",
    scholar: "Mufti Ibrahim Hassan",
    time: "6 hours ago",
    answers: 4,
    views: 189,
    likes: 21,
    saved: 18,
    tags: ["Charity", "Manners", "Worship"],
  },
  {
    title: "What are the etiquettes of giving  (charity)?",
    category: "Worship",
    excerpt:
      "I want to know the proper manners and conditions for giving charity in Islam. What should we keep in mind to ensure our charity is accepted?",
    scholar: "Mufti Ibrahim Hassan",
    time: "6 hours ago",
    answers: 4,
    views: 189,
    likes: 21,
    saved: 18,
    tags: ["Charity", "Manners", "Worship"],
  },
  {
    title: "What are the etiquettes of giving Sadaqah ()?",
    category: "Worship",
    excerpt:
      "I want to know the proper manners and conditions for giving charity in Islam. What should we keep in mind to ensure our charity is accepted?",
    scholar: "Mufti Ibrahim Hassan",
    time: "6 hours ago",
    answers: 4,
    views: 189,
    likes: 21,
    saved: 18,
    tags: ["Charity", "Manners", "Worship"],
  },
  {
    title: "What are the etiquettes of  Sadaqah (charity)?",
    category: "Worship",
    excerpt:
      "I want to know the proper manners and conditions for giving charity in Islam. What should we keep in mind to ensure our charity is accepted?",
    scholar: "Mufti Ibrahim Hassan",
    time: "6 hours ago",
    answers: 4,
    views: 189,
    likes: 21,
    saved: 18,
    tags: ["Charity", "Manners", "Worship"],
  },
  {
    title: "What are the etiquettes of giving Sadaqah (charity)?",
    category: "Worship",
    excerpt:
      "I want to know the proper manners and conditions for giving charity in Islam. What should we keep in mind to ensure our charity is accepted?",
    scholar: "Mufti Ibrahim Hassan",
    time: "6 hours ago",
    answers: 4,
    views: 189,
    likes: 21,
    saved: 18,
    tags: ["Charity", "Manners", "Worship"],
  },
];

export default function RecentAnswers() {
  return (
    <Section>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Recent Questions</h2>
          <p className="text-gray-600">
            Explore the latest questions answered by our scholars
          </p>
        </div>
        <Link href="/answers">
          <Button variant="ghost" className="gap-2">
            View All <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      <Carousel className="mx-10 lg:mx-4">
        <CarouselContent>
          {answers.map((answer, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
              <Card
                key={index}
                className="lg:h-[440px] p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-full flex flex-col justify-between space-y-4">
                  <div className="h-full flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {answer.category}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {answer.time}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                        <Link href="#">{answer.title.substring(0, 70)}</Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{answer.excerpt}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-primary"
                    >
                      <Bookmark className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {answer.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                          answer.scholar
                        )}&background=random`}
                        alt={answer.scholar}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium">
                        {answer.scholar}
                      </span>
                    </div>

                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{answer.views}</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{answer.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-8 text-center md:hidden">
        <Link href="/answers">
          <Button className="hidden md:flex">
            View All Questions <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
