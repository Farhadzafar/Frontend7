"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Book,
  Users,
  Globe,
  BookOpen,
  Users2,
  Heart,
  Video,
  GraduationCap,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Filters from "@/components/Features/filer/filters";
import CategoryCard from "@/components/Pages/Categories/categoryCard";

const categories = [
  {
    icon: <Book className="w-8 h-8" />,
    title: "Aqeedah",
    description: "Islamic beliefs and creed",
    questions: 245,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Fiqh",
    description: "Islamic jurisprudence and rulings",
    questions: 389,
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Hadith",
    description: "Prophetic traditions and narrations",
    questions: 167,
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Quran",
    description: "Quranic sciences and interpretation",
    questions: 178,
    color: "bg-yellow-50 text-yellow-600 border-yellow-100",
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: "Family",
    description: "Marriage, parenting, and relationships",
    questions: 203,
    color: "bg-red-50 text-red-600 border-red-100",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Worship",
    description: "Prayer, fasting, and acts of worship",
    questions: 312,
    color: "bg-pink-50 text-pink-600 border-pink-100",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Contemporary Issues",
    description: "Modern challenges and solutions",
    questions: 156,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Islamic History",
    description: "Historical events and lessons",
    questions: 134,
    color: "bg-orange-50 text-orange-600 border-orange-100",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Dawah",
    description: "Inviting to Islam and dialogue",
    questions: 98,
    color: "bg-teal-50 text-teal-600 border-teal-100",
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 pt-16">
        <Filters />
      </div>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              title={category.title}
              icon={category.icon}
              color={category.color}
              description={category.description}
              questions={category.questions}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
