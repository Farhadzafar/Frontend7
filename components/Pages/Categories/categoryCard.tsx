import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
interface categoryType {
  title: string;
  description: string;
  questions: number;
  icon: React.ReactNode;
  color: string;
}

export default function CategoryCard({
  title,
  description,
  questions,
  icon,
  color,
}: categoryType) {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 hover:border-primary">
      <div className="flex items-start gap-4">
        <div
          className={`p-4 rounded-xl ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-primary font-medium">
              {questions} questions
            </span>
            <Button
              variant="ghost"
              className="group-hover:text-primary transition-colors"
            >
              Explore <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
