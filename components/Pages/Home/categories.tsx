import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Section from "@/components/ui/section";
import { Book, BookOpen, Globe, Star, Users, Users2 } from "lucide-react";
import React from "react";

const categories = [
  {
    icon: Book,
    title: "Aqeedah",
    description: "Matters of Islamic belief and creed",
    questions: 245,
  },
  {
    icon: Users,
    title: "Fiqh",
    description: "Islamic jurisprudence and rulings",
    questions: 389,
  },
  {
    icon: Globe,
    title: "Hadith",
    description: "Prophetic traditions and narrations",
    questions: 167,
  },
  {
    icon: Users2,
    title: "Family",
    description: "Marriage, parenting, and family matters",
    questions: 203,
  },
  {
    icon: Star,
    title: "Worship",
    description: "Prayer, fasting, and other acts of worship",
    questions: 312,
  },
  {
    icon: BookOpen,
    title: "Quran",
    description: "Tafsir and Quranic sciences",
    questions: 178,
  },
];

export default function Categories() {
  return (
    <Section bgColor="bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Browse by Category
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Explore our comprehensive collection of Islamic knowledge categorized
        for easy access
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Card
            key={category.title}
            className="p-6 hover:shadow-lg transition-all duration-300 category-card"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">
                    {category.questions} questions
                  </span>
                  <Button variant="outline">View All →</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
