import Hero from "@/components/Pages/Home/hero";
import Stats from "@/components/Pages/Home/stats";
import CallToAction from "@/components/CTAS";
import Services from "@/components/Pages/Home/services";
import Categories from "@/components/Pages/Home/categories";
import RecentAnswers from "@/components/Pages/Home/answer";
import RecentArticlesSection from "@/components/Pages/Books/recentArticlesSection";
import FeatuersBookSection from "@/components/Pages/Books/featuersBookSection";


export default function Home() {
  return (
    
      <main className="min-h-screen">
        {/* Hero Section  */}
        <Hero />

        {/* Stats Section */}
        <Stats />

        {/* Categories Section */}
        <Categories />
        {/* Recent Questions Section */}
        <RecentAnswers />
        {/* Featured Books Section */}
        <FeatuersBookSection />

        {/* Recent Articles Section */}
        <RecentArticlesSection />

        {/* Services Section */}
        <Services />

        {/* Call to Action Section */}
        <CallToAction
          title="Start Your Journey of Islamic Learning Today"
          description="Join thousands of students worldwide who are discovering the beauty of Islamic knowledge through our platform."
          action="Get Started"
        />
      </main>
  );
}
