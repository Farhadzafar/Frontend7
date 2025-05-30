"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Search,
  Filter,
  BookOpen,
  FileText,
  GraduationCap,
  Download,
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  Eye,
  ThumbsUp,
  Clock,
  Star,
  Link as LinkIcon,
  MoreVertical,
  Calendar,
  User,
  Book,
  Bookmark,
  Share2,
  X,
  Upload,
  Image as ImageIcon,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormErrors {
  title?: string;
  author?: string;
  category?: string;
  description?: string;
}

export default function ContentPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [contentType, setContentType] = useState<"book" | "blog" | "research">(
    "book"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  // Form states
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!author.trim()) {
      newErrors.author = "Author is required";
    }

    if (!category) {
      newErrors.category = "Please select a category";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
    } else if (description.length < 50) {
      newErrors.description = "Description should be at least 50 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setCategory("");
    setDescription("");
    setCoverImage("");
    setTags([]);
    setNewTag("");
    setErrors({});
    setSubmitStatus("idle");
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle form submission
      console.log({
        type: contentType,
        title,
        author,
        category,
        description,
        coverImage,
        tags,
      });

      setSubmitStatus("success");
      setTimeout(() => {
        setShowAddModal(false);
        resetForm();
      }, 1500);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Your existing data...
  const stats = {
    books: [
      {
        title: "Total Books",
        value: "1,234",
        change: "+5.3%",
        icon: BookOpen,
        color: "bg-blue-50 text-blue-600",
      },
      {
        title: "Published",
        value: "987",
        change: "+8.2%",
        icon: Book,
        color: "bg-green-50 text-green-600",
      },
      {
        title: "Under Review",
        value: "156",
        change: "-2.1%",
        icon: Clock,
        color: "bg-yellow-50 text-yellow-600",
      },
      {
        title: "Downloads",
        value: "45.2K",
        change: "+12.5%",
        icon: Download,
        color: "bg-purple-50 text-purple-600",
      },
    ],
    blogs: [
      {
        title: "Total Articles",
        value: "2,567",
        change: "+7.4%",
        icon: FileText,
        color: "bg-indigo-50 text-indigo-600",
      },
      {
        title: "Published",
        value: "2,123",
        change: "+6.8%",
        icon: Eye,
        color: "bg-emerald-50 text-emerald-600",
      },
      {
        title: "Draft",
        value: "342",
        change: "-3.2%",
        icon: Clock,
        color: "bg-orange-50 text-orange-600",
      },
      {
        title: "Total Views",
        value: "128.5K",
        change: "+15.3%",
        icon: Eye,
        color: "bg-pink-50 text-pink-600",
      },
    ],
    research: [
      {
        title: "Total Papers",
        value: "456",
        change: "+4.2%",
        icon: GraduationCap,
        color: "bg-cyan-50 text-cyan-600",
      },
      {
        title: "Published",
        value: "389",
        change: "+5.7%",
        icon: FileText,
        color: "bg-teal-50 text-teal-600",
      },
      {
        title: "Citations",
        value: "2.3K",
        change: "+9.4%",
        icon: LinkIcon,
        color: "bg-violet-50 text-violet-600",
      },
      {
        title: "Downloads",
        value: "15.6K",
        change: "+11.2%",
        icon: Download,
        color: "bg-rose-50 text-rose-600",
      },
    ],
  };

  const books = [
    {
      title: "The Sealed Nectar",
      author: "Safiur Rahman Mubarakpuri",
      category: "Biography",
      status: "Published",
      downloads: 12500,
      rating: 4.9,
      lastUpdated: "2 days ago",
      coverImage:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2776&auto=format&fit=crop",
    },
    {
      title: "The Divine Reality",
      author: "Hamza Andreas Tzortzis",
      category: "Philosophy",
      status: "Under Review",
      downloads: 8900,
      rating: 4.8,
      lastUpdated: "5 days ago",
      coverImage:
        "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Purification of the Heart",
      author: "Hamza Yusuf",
      category: "Spirituality",
      status: "Published",
      downloads: 15600,
      rating: 4.9,
      lastUpdated: "1 week ago",
      coverImage:
        "https://images.unsplash.com/photo-1606819717115-9159c900370b?q=80&w=2940&auto=format&fit=crop",
    },
  ];

  const blogs = [
    {
      title: "Understanding the Importance of Tawheed in Modern Times",
      author: "Dr. Abdullah Muhammad",
      category: "Aqeedah",
      readTime: "8 min read",
      date: "2 days ago",
      views: 1234,
      image:
        "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "The Scientific Miracles in the Quran",
      author: "Prof. Sarah Ahmed",
      category: "Quran Studies",
      readTime: "12 min read",
      date: "4 days ago",
      views: 2156,
      image:
        "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Islamic Finance: A Comprehensive Guide",
      author: "Dr. Ibrahim Hassan",
      category: "Contemporary Issues",
      readTime: "15 min read",
      date: "1 week ago",
      views: 3789,
      image:
        "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2940&auto=format&fit=crop",
    },
  ];

  const researchPapers = [
    {
      title: "Contemporary Applications of Islamic Finance",
      author: "Dr. Sarah Mohammed",
      institution: "Oxford Centre for Islamic Studies",
      category: "Islamic Finance",
      status: "Published",
      citations: 78,
      downloads: 2300,
      publishDate: "2024-01-15",
    },
    {
      title: "The Evolution of Islamic Jurisprudence",
      author: "Dr. Ahmad Al-Razi",
      institution: "International Islamic University",
      category: "Islamic Law",
      status: "Under Review",
      citations: 45,
      downloads: 1200,
      publishDate: "2024-02-01",
    },
    {
      title: "The Role of Hadith in Modern Islamic Thought",
      author: "Dr. Muhammad Al-Bukhari",
      institution: "Al-Azhar University",
      category: "Hadith Studies",
      status: "Published",
      citations: 56,
      downloads: 1800,
      publishDate: "2024-01-20",
    },
  ];

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Content Management</h1>
          <p className="text-gray-600">
            Manage books, articles, and research papers
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button className="gap-2" onClick={() => setShowAddModal(true)}>
            <Plus className="w-4 h-4" />
            Add Content
          </Button>
        </div>
      </div>

      {/* Add Content Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-3xl mx-4 overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold">Add New Content</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setShowAddModal(false);
                  resetForm();
                }}
                disabled={isSubmitting}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6">
              {/* Content Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Type
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-colors ${
                      contentType === "book"
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-primary/50"
                    }`}
                    onClick={() => setContentType("book")}
                    disabled={isSubmitting}
                  >
                    <BookOpen className="w-6 h-6" />
                    <span>Book</span>
                  </button>
                  <button
                    className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-colors ${
                      contentType === "blog"
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-primary/50"
                    }`}
                    onClick={() => setContentType("blog")}
                    disabled={isSubmitting}
                  >
                    <FileText className="w-6 h-6" />
                    <span>Blog Article</span>
                  </button>
                  <button
                    className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-colors ${
                      contentType === "research"
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-primary/50"
                    }`}
                    onClick={() => setContentType("research")}
                    disabled={isSubmitting}
                  >
                    <GraduationCap className="w-6 h-6" />
                    <span>Research Paper</span>
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <Input
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      if (errors.title) {
                        setErrors({ ...errors, title: undefined });
                      }
                    }}
                    className={errors.title ? "border-red-500" : ""}
                    disabled={isSubmitting}
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-500">{errors.title}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <Input
                    placeholder="Enter author name"
                    value={author}
                    onChange={(e) => {
                      setAuthor(e.target.value);
                      if (errors.author) {
                        setErrors({ ...errors, author: undefined });
                      }
                    }}
                    className={errors.author ? "border-red-500" : ""}
                    disabled={isSubmitting}
                  />
                  {errors.author && (
                    <p className="mt-1 text-sm text-red-500">{errors.author}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    className={`w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary ${
                      errors.category ? "border-red-500" : ""
                    }`}
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      if (errors.category) {
                        setErrors({ ...errors, category: undefined });
                      }
                    }}
                    disabled={isSubmitting}
                  >
                    <option value="">Select a category</option>
                    <option value="Aqeedah">Aqeedah</option>
                    <option value="Fiqh">Fiqh</option>
                    <option value="Hadith">Hadith</option>
                    <option value="Quran">Quran</option>
                    <option value="Islamic History">Islamic History</option>
                    <option value="Contemporary Issues">
                      Contemporary Issues
                    </option>
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.category}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <Textarea
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      if (errors.description) {
                        setErrors({ ...errors, description: undefined });
                      }
                    }}
                    className={`min-h-[100px] ${
                      errors.description ? "border-red-500" : ""
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.description}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Image
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="h-32 flex flex-col gap-2"
                      disabled={isSubmitting}
                    >
                      <Upload className="w-6 h-6" />
                      <span>Upload Image</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-32 flex flex-col gap-2"
                      disabled={isSubmitting}
                    >
                      <ImageIcon className="w-6 h-6" />
                      <span>Choose from Library</span>
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-2"
                      >
                        {tag}
                        <button
                          onClick={() => handleRemoveTag(tag)}
                          disabled={isSubmitting}
                        >
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
                      disabled={isSubmitting}
                    />
                    <Button
                      onClick={handleAddTag}
                      variant="outline"
                      disabled={isSubmitting}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 p-6 bg-gray-50 border-t">
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span>Content added successfully!</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-5 h-5" />
                  <span>Error adding content. Please try again.</span>
                </div>
              )}

              <div className="flex items-center gap-3 ml-auto">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowAddModal(false);
                    resetForm();
                  }}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="min-w-[100px]"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Add Content"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rest of your existing code... */}
      <Tabs defaultValue="books" className="space-y-6">
        <TabsList className="bg-transparent border-b w-full justify-start rounded-none p-0 h-auto">
          <TabsTrigger
            value="books"
            className="data-[state=active]:border-primary border-b-2 border-transparent rounded-none pb-2"
          >
            Books
          </TabsTrigger>
          <TabsTrigger
            value="blogs"
            className="data-[state=active]:border-primary border-b-2 border-transparent rounded-none pb-2"
          >
            Blog Articles
          </TabsTrigger>
          <TabsTrigger
            value="research"
            className="data-[state=active]:border-primary border-b-2 border-transparent rounded-none pb-2"
          >
            Research Papers
          </TabsTrigger>
        </TabsList>

        {/* Books Content */}
        <TabsContent value="books" className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.books.map((stat, index) => {
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
                  <Input placeholder="Search books..." className="pl-10" />
                </div>
              </div>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <div className="mt-4 pt-4 border-t grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>All Categories</option>
                    <option>Biography</option>
                    <option>Philosophy</option>
                    <option>Spirituality</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>All Status</option>
                    <option>Published</option>
                    <option>Under Review</option>
                    <option>Draft</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sort By
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>Most Recent</option>
                    <option>Most Downloads</option>
                    <option>Highest Rated</option>
                  </select>
                </div>
              </div>
            )}
          </Card>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-white/90 hover:bg-white"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        book.status === "Published"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-yellow-50 text-yellow-600"
                      }`}
                    >
                      {book.status}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">{book.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-medium text-lg mb-1">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">by {book.author}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {book.downloads.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {book.lastUpdated}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Blog Articles Content */}
        <TabsContent value="blogs" className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.blogs.map((stat, index) => {
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

          {/* Blog Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-40">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    By {article.author}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {article.views}
                      </span>
                    </div>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Research Papers Content */}
        <TabsContent value="research" className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.research.map((stat, index) => {
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

          {/* Research Papers List */}
          <div className="space-y-4">
            {researchPapers.map((paper, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {paper.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {paper.publishDate}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                      {paper.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {paper.institution}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        paper.author
                      )}&background=random`}
                      alt={paper.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium">{paper.author}</span>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="text-sm text-gray-500">
                      {paper.citations} citations
                    </span>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
