import { Button } from "@/components/ui/button";
import Filters from "@/components/Features/filer/filters";
import FatwaCard from "@/components/Pages/Fatwa/fatwaCard";
import FatwasPageClient from "@/components/Pages/Fatwa/fatwaPageClient";
import { getCategories, getLanguages, getSortOptions } from "@/lib/data/fatwa";

export default async function AnswersPage() {
  const categories = await getCategories();
  const languages = await getLanguages();
  const sort = await getSortOptions();
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}

          {/* Questions List */}
          <div className="flex-1">
            {/* <Filters /> */}

            <div className="space-y-4">
              <FatwasPageClient
                categories={categories}
                languages={languages}
                sort={sort}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
