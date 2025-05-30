// the hero section ux/ui design should be like the bing website, where the hero section is a full-screen section with a background image, a title, a subtitle, and a search bar. The background image should change every few seconds to create a dynamic effect. The title should be large and bold, while the subtitle should be smaller and less prominent. The search bar should be centered below the title and subtitle, with a placeholder text that encourages users to search for answers. Additionally, there should be quick access buttons for popular topics or categories related to Islamic knowledge.
// the website URL=> https://www.bing.com/?pc=W230#

"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  X,
  TrendingUp,
  Clock,
  BookOpen,
  HomeIcon,
  MessageCircle,
  Star,
} from "lucide-react";
// import image1 from "../../../public/image/hero/1.avif";
// import image2 from "../../../public/image/hero/1.avif";
// import image3 from "../../../public/image/hero/1.avif";
// import image4 from "../../../public/image/hero/1.avif";
// import image1 from "@/public/image/hero/1.avif";
// import image2 from "@/public/image/hero/2.avif";
// import image3 from "@/public/image/hero/3.webp";
// import image4 from "@/public/image/hero/4.avif";

const heroImages = [
  {
    url: "https://images.pexels.com/photos/2895295/pexels-photo-2895295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Find Authentic Islamic Answers",
  },
  {
    url: "https://images.pexels.com/photos/6477399/pexels-photo-6477399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Find Authentic Islamic Answers",
  },
  {
    url: "https://images.pexels.com/photos/7744325/pexels-photo-7744325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Find Authentic Islamic Answers",
  },
  {
    url: "https://images.pexels.com/photos/7705839/pexels-photo-7705839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Find Authentic Islamic Answers",
  },
  {
    url: "https://images.pexels.com/photos/9472020/pexels-photo-9472020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Find Authentic Islamic Answers",
  },
  {
    url: "https://images.pexels.com/photos/7744325/pexels-photo-7744325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Find Authentic Islamic Answers",
  },
  {
    url: "https://images.pexels.com/photos/14255786/pexels-photo-14255786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Connect with Qualified Scholars",
  },
  {
    url: "https://images.pexels.com/photos/11752943/pexels-photo-11752943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Your Source of Islamic Knowledge",
  },
  {
    url: "https://images.pexels.com/photos/12049056/pexels-photo-12049056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Your Source of Islamic Knowledge",
  },
  {
    url: "https://images.pexels.com/photos/6920597/pexels-photo-6920597.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Guided by the Quran and Sunnah",
  },
];

const popularSearches = [
  "Prayer times calculation",
  "Fasting in Ramadan",
  "Zakat calculation",
  "Marriage in Islam",
  "Halal food guidelines",
  "Islamic inheritance",
  "Hajj rituals",
  "Islamic finance",
];

const recentSearches = [
  "Prayer times",
  "Fasting rules",
  "Zakat calculation",
  "Islamic marriage",
];

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[670px] flex items-center justify-center text-white overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
          </div>
        </div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          {heroImages[currentImageIndex].caption}
          <span className="block text-lg font-normal mt-4 text-emerald-300">
            Verified by Qualified Scholars
          </span>
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          Access thousands of reliable answers based on Quran and Sunnah
        </p>

        {/* Enhanced Search Section */}
        <div className="relative max-w-2xl mx-auto">
          <div
            className={`relative transition-all duration-300 ${
              isSearchFocused ? "scale-105" : "scale-100"
            }`}
          >
            <Input
              placeholder="Search for answers..."
              className="w-full h-14 pl-12 pr-4 rounded-lg text-black shadow-lg border-2 focus:border-primary transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                setShowSuggestions(true);
                setIsSearchFocused(true);
              }}
              onBlur={() => setIsSearchFocused(false)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 h-10">
              Search
            </Button>
          </div>

          {showSuggestions && (
            <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 search-suggestions">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-gray-500">
                  Search Suggestions
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => setShowSuggestions(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-500 flex items-center mb-2">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Popular Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-500 flex items-center mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  Recent Searches
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm transition-colors"
                    >
                      <Clock className="w-4 h-4 text-gray-400" />
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Access Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button
            variant="outline"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Prayer
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Fasting
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Zakat
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
          >
            <Star className="mr-2 h-5 w-5" />
            Hajj
          </Button>
        </div>
      </div>
    </div>
  );
}
