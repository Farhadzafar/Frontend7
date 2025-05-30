"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Upload,
  Image as ImageIcon,
  Link as LinkIcon,
  FileText,
  Tag,
  CheckCircle,
  AlertCircle,
  Info,
  X,
  Plus,
  Save,
  Clock,
  User,
  BookOpen,
  GraduationCap,
} from "lucide-react";

export default function QuestionUploadPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [attachments, setAttachments] = useState<string[]>([]);
  const [selectedScholar, setSelectedScholar] = useState("");

  const categories = [
    "Aqeedah",
    "Fiqh",
    "Hadith",
    "Quran",
    "Family",
    "Worship",
    "Contemporary Issues",
  ];

  const scholars = [
    {
      id: "1",
      name: "Dr. Abdullah Ahmad",
      specialization: "Islamic Law",
      institution: "Al-Azhar University",
      avatar:
        "https://ui-avatars.com/api/?name=Abdullah+Ahmad&background=random",
    },
    {
      id: "2",
      name: "Dr. Sarah Mohammed",
      specialization: "Quranic Studies",
      institution: "Islamic University of Madinah",
      avatar:
        "https://ui-avatars.com/api/?name=Sarah+Mohammed&background=random",
    },
    {
      id: "3",
      name: "Prof. Ibrahim Hassan",
      specialization: "Hadith Sciences",
      institution: "International Islamic University",
      avatar:
        "https://ui-avatars.com/api/?name=Ibrahim+Hassan&background=random",
    },
  ];

  const handleAddTag = () => {
    if (newTag && !selectedTags.includes(newTag)) {
      setSelectedTags([...selectedTags, newTag]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
  };

  const handleAddAttachment = (url: string) => {
    setAttachments([...attachments, url]);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Upload Question & Answer</h1>
          <p className="text-gray-600">
            Add new Q&A content to the knowledge base
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Cancel</Button>
          <Button className="gap-2">
            <Save className="w-4 h-4" />
            Save Draft
          </Button>
          <Button className="gap-2">
            <CheckCircle className="w-4 h-4" />
            Publish
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Question Section */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Question Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Question Title
                </label>
                <Input placeholder="Enter a clear and concise question title" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Question Content
                </label>
                <Textarea
                  placeholder="Provide the full question details..."
                  className="min-h-[150px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-2"
                    >
                      {tag}
                      <button onClick={() => handleRemoveTag(tag)}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a tag"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
                  />
                  <Button onClick={handleAddTag} variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Answer Section */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Answer</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Answer Content
                </label>
                <Textarea
                  placeholder="Provide a detailed answer..."
                  className="min-h-[300px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  References
                </label>
                <Textarea
                  placeholder="Add references and sources..."
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Attachments
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-24 flex flex-col gap-2"
                  >
                    <ImageIcon className="w-6 h-6" />
                    <span>Add Image</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-24 flex flex-col gap-2"
                  >
                    <FileText className="w-6 h-6" />
                    <span>Add Document</span>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Scholar Assignment */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Assign Scholar</h3>
            <div className="space-y-4">
              {scholars.map((scholar) => (
                <label
                  key={scholar.id}
                  className={`flex items-start gap-4 p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedScholar === scholar.id
                      ? "border-primary bg-primary/5"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="scholar"
                    value={scholar.id}
                    checked={selectedScholar === scholar.id}
                    onChange={(e) => setSelectedScholar(e.target.value)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <img
                        src={scholar.avatar}
                        alt={scholar.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{scholar.name}</p>
                        <p className="text-sm text-gray-500">
                          {scholar.specialization}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                      <GraduationCap className="w-4 h-4" />
                      <span>{scholar.institution}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </Card>

          {/* Publishing Options */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Publishing Options</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm">Feature this Q&A</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm">Allow comments</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm">
                  Send notification to subscribers
                </span>
              </label>
            </div>
          </Card>

          {/* Guidelines */}
          <Card className="p-6 bg-blue-50 border-blue-100">
            <div className="flex items-center gap-2 text-blue-800 mb-4">
              <Info className="w-5 h-5" />
              <h3 className="font-semibold">Guidelines</h3>
            </div>
            <ul className="space-y-3 text-sm text-blue-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-1 shrink-0" />
                Ensure the question is clear and specific
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-1 shrink-0" />
                Provide comprehensive answers with references
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-1 shrink-0" />
                Use appropriate language and formatting
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-1 shrink-0" />
                Add relevant tags for better searchability
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
