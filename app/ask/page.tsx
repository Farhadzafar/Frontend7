"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, AlertCircle, Image as ImageIcon, Link as LinkIcon, FileText, Send } from "lucide-react";

const guidelines = [
  "Be specific and clear in your question",
  "Provide relevant context and background",
  "Avoid asking multiple questions in one post",
  "Check if your question has already been answered",
  "Be respectful and follow Islamic etiquettes"
];

const categories = [
  "Aqeedah", "Fiqh", "Hadith", "Quran", "Family", "Worship", 
  "Contemporary Issues", "Islamic History", "Dawah"
];

export default function AskQuestionPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Ask a Question</h1>
          <p className="text-lg opacity-90">
            Get authentic answers from qualified scholars
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question Title
                  </label>
                  <Input 
                    placeholder="What is your question? Be specific."
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question Details
                  </label>
                  <Textarea 
                    placeholder="Provide more context and details about your question..."
                    className="min-h-[200px]"
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="gap-2">
                    <ImageIcon className="w-4 h-4" />
                    Add Image
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <LinkIcon className="w-4 h-4" />
                    Add Link
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <FileText className="w-4 h-4" />
                    Add Document
                  </Button>
                </div>

                <div className="flex justify-end">
                  <Button className="gap-2">
                    Submit Question
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Guidelines */}
            <Card className="p-6">
              <div className="flex items-center gap-2 text-primary mb-4">
                <HelpCircle className="w-5 h-5" />
                <h3 className="font-semibold">Asking Guidelines</h3>
              </div>
              <ul className="space-y-3">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <AlertCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    {guideline}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Similar Questions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Similar Questions</h3>
              <div className="space-y-4">
                {[
                  "What are the conditions for prayer to be valid?",
                  "How to calculate Zakat on savings?",
                  "Rules of fasting in Ramadan",
                ].map((question, index) => (
                  <button
                    key={index}
                    className="text-sm text-gray-600 hover:text-primary transition-colors text-left w-full"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </Card>

            {/* Need Help? */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our support team is here to assist you with any questions about using the platform.
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}