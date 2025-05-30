import React from "react";
import BookCard from "./bookCard";
import { featuredBooks } from "@/public/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/section";

export default function FeatuersBookSection() {
  return (
    <Section bgColor="bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Featured Books</h2>
        <Button variant="ghost" className="gap-2">
          View All <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </Section>
  );
}
