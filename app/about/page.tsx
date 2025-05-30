"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Users,
  BookOpen,
  GraduationCap,
  Globe,
  MessageCircle,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const stats = [
  {
    number: "50K+",
    label: "Questions Answered",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    number: "100+",
    label: "Verified Scholars",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    number: "1M+",
    label: "Monthly Users",
    icon: <Users className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600",
  },
  {
    number: "3",
    label: "Languages",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-yellow-50 text-yellow-600",
  },
];

const values = [
  {
    title: "Authenticity",
    description:
      "All answers are based on authentic Islamic sources and verified by qualified scholars",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Accessibility",
    description:
      "Making Islamic knowledge easily accessible to Muslims worldwide",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Community",
    description: "Building a supportive community of learners and scholars",
    icon: <Users className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Excellence",
    description: "Striving for excellence in everything we do",
    icon: <Star className="w-6 h-6" />,
    color: "bg-yellow-50 text-yellow-600",
  },
];

const team = [
  {
    name: "Dr. Abdullah Ahmad",
    role: "Founder & Head Scholar",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
    specialization: "Islamic Law & Jurisprudence",
    education: "PhD in Islamic Studies, Al-Azhar University",
  },
  {
    name: "Dr. Sarah Mohammed",
    role: "Senior Scholar",
    image:
      "https://media.istockphoto.com/id/2175616100/photo/happy-islamic-woman-in-hijab-working-on-laptop-in-office.webp?s=1024x1024&w=is&k=20&c=pZw7nbJrUA4J73XSOJWCHt1ANgSp76j-eIB-_artFAs=",
    specialization: "Quranic Studies",
    education: "PhD in Quranic Sciences, Islamic University of Madinah",
  },
  {
    name: "Prof. Ibrahim Hassan",
    role: "Research Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2787&auto=format&fit=crop",
    specialization: "Contemporary Islamic Studies",
    education: "Professor of Islamic Studies, Oxford University",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=3270&auto=format&fit=crop"
            alt="Islamic Architecture"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Spreading Authentic Islamic Knowledge
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Our mission is to make authentic Islamic knowledge accessible to
            everyone, connecting seekers of knowledge with qualified scholars
            worldwide.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10 bg-inherit"
          >
            Learn More About Our Mission
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  IslamicQA was founded in 2020 with a simple yet powerful
                  vision: to bridge the gap between seekers of knowledge and
                  qualified Islamic scholars.
                </p>
                <p>
                  What started as a small online platform has grown into a
                  global community, serving millions of Muslims worldwide with
                  authentic Islamic knowledge based on the Quran and Sunnah.
                </p>
                <p>
                  Our team of verified scholars works tirelessly to provide
                  accurate and reliable answers to your questions, making
                  Islamic knowledge accessible to everyone, everywhere.
                </p>
              </div>
              <Button className="mt-8 gap-2">
                Read Full Story <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=2940&auto=format&fit=crop"
                alt="Islamic Library"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Impact</h4>
                    <p className="text-sm text-gray-600">
                      Touching millions of lives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from answering questions
              to developing new features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 ${value.color} rounded-full flex items-center justify-center mb-4`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Scholars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our team of qualified scholars who work tirelessly to provide
              authentic Islamic knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/90">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-sm text-gray-600">
                        {member.education}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="text-sm text-gray-600">
                        {member.specialization}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions or feedback? We'd love to hear from you. Reach
                out to us through any of these channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-gray-600">contact@islamicqa.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p className="text-gray-600">
                      123 Islamic Center, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-gray-600">+971 4 123 4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?q=80&w=2940&auto=format&fit=crop"
                alt="Contact Us"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">24/7 Support</h4>
                    <p className="text-sm text-gray-600">We're here to help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
