import React from "react";
import Section from "@/components/ui/section";
import {
  GraduationCap,
  Heart,
  Headphones,
  Video,
  BookMarked,
  Caravan as Quran,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
const services = [
  {
    icon: <Quran className="w-12 h-12" />,
    title: "Quranic Studies",
    description:
      "Learn Quran with certified teachers through interactive online sessions",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Islamic Courses",
    description:
      "Structured courses on various Islamic topics taught by qualified scholars",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Community Support",
    description:
      "Join a supportive community of learners and scholars worldwide",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: <Headphones className="w-12 h-12" />,
    title: "24/7 Support",
    description:
      "Get answers to your questions anytime through our support system",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <Video className="w-12 h-12" />,
    title: "Video Lectures",
    description: "Access high-quality video lectures on various Islamic topics",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: <BookMarked className="w-12 h-12" />,
    title: "Resource Library",
    description:
      "Extensive collection of articles, books, and research materials",
    color: "bg-indigo-50 text-indigo-600",
  },
];
export default function Services() {
  return (
    <Section bgColor="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of Islamic learning services designed
          to help you grow in your spiritual journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 h-full">
              <div
                className={`${service.color} rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              {/* <Button
                    variant="link"
                    className="group-hover:text-primary transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button> */}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
