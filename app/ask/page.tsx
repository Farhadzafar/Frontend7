// "use client";

// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   HelpCircle,
//   AlertCircle,
//   Image as ImageIcon,
//   Link as LinkIcon,
//   FileText,
//   Send,
// } from "lucide-react";

// const guidelines = [
//   "Be specific and clear in your question",
//   "Provide relevant context and background",
//   "Avoid asking multiple questions in one post",
//   "Check if your question has already been answered",
//   "Be respectful and follow Islamic etiquettes",
// ];

// const categories = [
//   "Aqeedah",
//   "Fiqh",
//   "Hadith",
//   "Quran",
//   "Family",
//   "Worship",
//   "Contemporary Issues",
//   "Islamic History",
//   "Dawah",
// ];
// const mdhab = ["Hanfi", "Hembli", "Shapi", "Malki"];

// export default function AskQuestionPage() {
//   const [selectedCategory, setSelectedCategory] = useState("");

//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="bg-primary text-white py-16">
//         <div className="max-w-6xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">Ask a Question</h1>
//           <p className="text-lg opacity-90">
//             Get authentic answers from qualified scholars
//           </p>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Form */}
//           <div className="lg:col-span-2 space-y-6">
//             <Card className="p-6">
//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Question Title
//                   </label>
//                   <Input
//                     placeholder="What is your question? Be specific."
//                     className="h-12"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Category
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {categories.map((category) => (
//                       <button
//                         key={category}
//                         onClick={() => setSelectedCategory(category)}
//                         className={`px-4 py-2 rounded-full text-sm transition-colors ${
//                           selectedCategory === category
//                             ? "bg-primary text-white"
//                             : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                         }`}
//                       >
//                         {category}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Question Details
//                   </label>
//                   <Textarea
//                     placeholder="Provide more context and details about your question..."
//                     className="min-h-[200px]"
//                   />
//                 </div>

//                 <div className="flex justify-end">
//                   <Button className="gap-2">
//                     Submit Question
//                     <Send className="w-4 h-4" />
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Guidelines */}
//             <Card className="p-6">
//               <div className="flex items-center gap-2 text-primary mb-4">
//                 <HelpCircle className="w-5 h-5" />
//                 <h3 className="font-semibold">Asking Guidelines</h3>
//               </div>
//               <ul className="space-y-3">
//                 {guidelines.map((guideline, index) => (
//                   <li
//                     key={index}
//                     className="flex items-start gap-2 text-sm text-gray-600"
//                   >
//                     <AlertCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
//                     {guideline}
//                   </li>
//                 ))}
//               </ul>
//             </Card>

//             {/* Similar Questions */}
//             {/* <Card className="p-6">
//               <h3 className="font-semibold mb-4">Similar Questions</h3>
//               <div className="space-y-4">
//                 {[
//                   "What are the conditions for prayer to be valid?",
//                   "How to calculate Zakat on savings?",
//                   "Rules of fasting in Ramadan",
//                 ].map((question, index) => (
//                   <button
//                     key={index}
//                     className="text-sm text-gray-600 hover:text-primary transition-colors text-left w-full"
//                   >
//                     {question}
//                   </button>
//                 ))}
//               </div>
//             </Card> */}

//             {/* Need Help? */}
//             <Card className="p-6 bg-primary/5 border-primary/20">
//               <h3 className="font-semibold mb-2">Need Help?</h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 Our support team is here to assist you with any questions about
//                 using the platform.
//               </p>
//               <Button variant="outline" className="w-full">
//                 Contact Support
//               </Button>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, AlertCircle, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { getUserToken } from "@/hooks/getTokn";
import { getUserId } from "@/hooks/userId";
import { getCategories } from "@/lib/data/articles";
// assumes you have this util

const madhahib = ["Hanfi", "Maliki", "Shafi", "Hanbali"];

const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/questions/add`;

export default function AskQuestionPage() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedMadhhab, setSelectedMadhhab] = useState("");
  const [categories, setCategories] = useState<
    { id: string; ps: string; en: string; ar: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      const cats = await getCategories();
      setCategories(cats);
    }
    load();
  }, []);

  const handleSubmit = async () => {
    if (!title || !details || !selectedCategoryId || !selectedMadhhab) {
      toast({
        title: "⚠️ Missing Fields",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    const token = getUserToken();
    const userId = getUserId();

    try {
      setLoading(true);
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          description: `${title}\n\n${details}`,
          category: selectedCategoryId,
          madhab: selectedMadhhab,
          language: "en",
          askedBy: userId,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit question");

      // Clear form
      setTitle("");
      setDetails("");
      setSelectedCategoryId("");
      setSelectedMadhhab("");

      toast({
        title: "✅ Question Submitted",
        description: "Your question has been sent to the scholars.",
      });
    } catch (error) {
      console.error("❌ Error submitting question:", error);
      toast({
        title: "❌ Submission Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
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
            <Card className="p-6 space-y-6">
              {/* Question Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question Title
                </label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="What is your question? Be specific."
                  className="h-12"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategoryId(cat.id)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedCategoryId === cat.id
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {cat.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Madhhab */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Madhhab
                </label>
                <div className="flex flex-wrap gap-2">
                  {madhahib.map((madhhab) => (
                    <button
                      key={madhhab}
                      type="button"
                      onClick={() => setSelectedMadhhab(madhhab)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedMadhhab === madhhab
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {madhhab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question Details
                </label>
                <Textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Provide more context and details..."
                  className="min-h-[200px]"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="gap-2"
                >
                  {loading ? "Submitting..." : "Submit Question"}
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 text-primary mb-4">
                <HelpCircle className="w-5 h-5" />
                <h3 className="font-semibold">Asking Guidelines</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Be specific and clear in your question",
                  "Provide relevant context and background",
                  "Avoid asking multiple questions in one post",
                  "Check if your question has already been answered",
                  "Be respectful and follow Islamic etiquettes",
                ].map((g, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <AlertCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our support team is here to assist you.
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
