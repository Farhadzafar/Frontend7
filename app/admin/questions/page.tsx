"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Search,
  Filter,
  MessageSquare,
  MoreVertical,
  Eye,
  ThumbsUp,
  Clock,
  Tag,
  Download,
  Plus,
  CheckCircle,
  AlertCircle,
  Flag,
  User,
  FileText,
  Edit2,
  Trash2,
  ExternalLink,
  ChevronDown,
  SlidersHorizontal,
  BookOpen,
  GraduationCap,
  Star,
} from "lucide-react";

export default function QuestionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const questions = [
    {
      id: 1,
      title: "What is the ruling on combining prayers while traveling?",
      category: "Fiqh",
      status: "Answered",
      priority: "High",
      askedBy: "Abdullah Ahmad",
      assignedTo: "Dr. Sarah Mohammed",
      dateAsked: "2024-02-15",
      views: 1256,
      answers: 4,
      likes: 89,
      verified: true,
      tags: ["Prayer", "Travel", "Fiqh"],
      excerpt:
        "I will be traveling next week and I'm wondering about the conditions for combining prayers during travel...",
    },
    {
      id: 2,
      title: "How to calculate Zakat on stocks and investments?",
      category: "Finance",
      status: "Pending",
      priority: "Medium",
      askedBy: "Ibrahim Hassan",
      assignedTo: null,
      dateAsked: "2024-02-14",
      views: 856,
      answers: 2,
      likes: 45,
      verified: false,
      tags: ["Zakat", "Finance", "Stocks"],
      excerpt:
        "I have investments in various stocks and mutual funds. How do I calculate the Zakat on these investments?",
    },
    {
      id: 3,
      title: "Understanding the concept of Tawheed",
      category: "Aqeedah",
      status: "Under Review",
      priority: "High",
      askedBy: "Mohammed Ali",
      assignedTo: "Dr. Ahmad Al-Razi",
      dateAsked: "2024-02-13",
      views: 2341,
      answers: 6,
      likes: 156,
      verified: true,
      tags: ["Aqeedah", "Basics", "Faith"],
      excerpt:
        "Can you explain the concept of Tawheed and its importance in Islamic belief...",
    },
  ];

  const categories = [
    { name: "All", count: 1250 },
    { name: "Fiqh", count: 450 },
    { name: "Aqeedah", count: 320 },
    { name: "Hadith", count: 280 },
    { name: "Quran", count: 200 },
  ];

  const statuses = [
    { value: "all", label: "All Statuses" },
    { value: "pending", label: "Pending" },
    { value: "answered", label: "Answered" },
    { value: "review", label: "Under Review" },
    { value: "rejected", label: "Rejected" },
  ];

  const stats = [
    {
      title: "Total Questions",
      value: "1,250",
      change: "+12.5%",
      icon: MessageSquare,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Answered",
      value: "856",
      change: "+8.2%",
      icon: CheckCircle,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Pending Review",
      value: "145",
      change: "-5.1%",
      icon: Clock,
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      title: "Reported",
      value: "23",
      change: "+2.3%",
      icon: Flag,
      color: "bg-red-50 text-red-600",
    },
  ];

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Questions Management</h1>
          <p className="text-gray-600">
            Manage and monitor questions and answers
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Link href="/admin/questions/upload">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add Question
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <span
                      className={`text-sm ${
                        stat.change.startsWith("+")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search questions..." className="pl-10" />
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <select
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option
                  key={category.name.toLowerCase()}
                  value={category.name.toLowerCase()}
                >
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
            <select
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statuses.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date Range
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Input type="date" placeholder="From" />
                <Input type="date" placeholder="To" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                <option>All Priorities</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Verification
              </label>
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                <option>All</option>
                <option>Verified Only</option>
                <option>Unverified</option>
              </select>
            </div>
          </div>
        )}
      </Card>

      {/* Questions List */}
      <div className="space-y-4">
        {questions.map((question) => (
          <Card key={question.id} className="p-6">
            <div className="flex flex-col space-y-4">
              {/* Question Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        question.category === "Fiqh"
                          ? "bg-blue-50 text-blue-600"
                          : question.category === "Aqeedah"
                          ? "bg-purple-50 text-purple-600"
                          : "bg-emerald-50 text-emerald-600"
                      }`}
                    >
                      {question.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        question.status === "Answered"
                          ? "bg-green-50 text-green-600"
                          : question.status === "Pending"
                          ? "bg-yellow-50 text-yellow-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {question.status}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        question.priority === "High"
                          ? "bg-red-50 text-red-600"
                          : question.priority === "Medium"
                          ? "bg-yellow-50 text-yellow-600"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {question.priority} Priority
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                    {question.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{question.excerpt}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {question.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Question Details */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Asked by:</span>
                  <span className="font-medium">{question.askedBy}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Assigned to:</span>
                  <span className="font-medium">
                    {question.assignedTo || "Unassigned"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{question.dateAsked}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-gray-400" />
                    {question.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    {question.answers}
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4 text-gray-400" />
                    {question.likes}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Showing 1-10 of 1,250 questions</p>
        <div className="flex gap-2">
          <Button variant="outline" className="w-10 h-10 p-0">
            1
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0">
            2
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0">
            3
          </Button>
          <span className="w-10 h-10 flex items-center justify-center">
            ...
          </span>
          <Button variant="outline" className="w-10 h-10 p-0">
            50
          </Button>
        </div>
      </div>
    </div>
  );
}
