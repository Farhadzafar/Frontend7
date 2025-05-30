import { Button } from "@/components/ui/button";
import Filters from "@/components/Features/filer/filters";
import FatwaCard from "@/components/Pages/Fatwa/fatwaCard";

const fatwas = [
  {
    id: "1",
    category: "Fiqh",
    time: "1 hour ago",
    title: "What is the ruling on combining prayers while traveling?",
    excerpt:
      "I will be traveling next week and I'm wondering about the conditions for combining prayers during travel...",
    tags: ["Prayer", "Travel", "Fiqh"],
    scholarName: "Sheikh Ahmad",
    comments: 3,
    views: 140,
    likes: 12,
  },
  {
    id: "2",
    category: "Aqeedah",
    time: "2 hours ago",
    title: "Understanding the concept of Tawheed in Islam",
    excerpt:
      "Can you explain the concept of Tawheed and its importance in Islamic belief...",
    tags: ["Aqeedah", "Belief", "Fundamentals"],
    scholarName: "Mufti Abdullah",
    comments: 5,
    views: 180,
    likes: 20,
  },
  {
    id: "3",
    category: "Worship",
    time: "3 hours ago",
    title: "How should one perform ablution (wudhu) correctly?",
    excerpt:
      "Please explain the step-by-step process of wudhu and the common mistakes to avoid.",
    tags: ["Wudhu", "Purity", "Worship"],
    scholarName: "Imam Kareem",
    comments: 2,
    views: 110,
    likes: 9,
  },
  {
    id: "4",
    category: "Family",
    time: "5 hours ago",
    title: "What are the rights of a wife in Islam?",
    excerpt:
      "I want to understand what Islam says about how a husband should treat his wife...",
    tags: ["Marriage", "Rights", "Family"],
    scholarName: "Sheikh Yasin",
    comments: 7,
    views: 210,
    likes: 30,
  },
  {
    id: "5",
    category: "Quran",
    time: "6 hours ago",
    title: "Can we recite Quran without wudhu?",
    excerpt:
      "Is it permissible to recite or touch the Quran without being in a state of ablution?",
    tags: ["Quran", "Purity", "Fiqh"],
    scholarName: "Dr. Iqbal",
    comments: 4,
    views: 170,
    likes: 15,
  },
  {
    id: "6",
    category: "Fiqh",
    time: "7 hours ago",
    title: "Is it allowed to delay Zakat?",
    excerpt:
      "Due to financial hardship, can I delay giving Zakat, and what are the rulings on this?",
    tags: ["Zakat", "Charity", "Fiqh"],
    scholarName: "Mufti Rahman",
    comments: 6,
    views: 130,
    likes: 18,
  },
  {
    id: "7",
    category: "Aqeedah",
    time: "8 hours ago",
    title: "Do angels write down our thoughts?",
    excerpt:
      "Is there any evidence that angels record our thoughts even if we don’t act on them?",
    tags: ["Angels", "Belief", "Aqeedah"],
    scholarName: "Sheikh Hamid",
    comments: 3,
    views: 100,
    likes: 8,
  },
  {
    id: "8",
    category: "Worship",
    time: "10 hours ago",
    title: "Can women pray in congregation at home?",
    excerpt:
      "Is it encouraged or allowed for women to lead or join group prayers at home?",
    tags: ["Prayer", "Women", "Worship"],
    scholarName: "Ustadha Fatima",
    comments: 2,
    views: 95,
    likes: 11,
  },
  {
    id: "9",
    category: "Family",
    time: "11 hours ago",
    title: "Is adoption allowed in Islam?",
    excerpt:
      "I’m considering adopting a child. What does Islam say about legal adoption and naming?",
    tags: ["Adoption", "Family", "Orphans"],
    scholarName: "Mufti Bilal",
    comments: 4,
    views: 160,
    likes: 14,
  },
  {
    id: "10",
    category: "Quran",
    time: "12 hours ago",
    title: "What is the best way to memorize the Quran?",
    excerpt:
      "I want to begin memorizing the Quran. Are there recommended methods from the scholars?",
    tags: ["Memorization", "Quran", "Tips"],
    scholarName: "Hafiz Zubair",
    comments: 6,
    views: 220,
    likes: 26,
  },
];

export default function AnswersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}

          {/* Questions List */}
          <div className="flex-1">
            <Filters />

            <div className="space-y-4">
              {fatwas.map((fatwa) => (
                <FatwaCard key={fatwa.id} {...fatwa} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-around">
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
                  10
                </Button>
              </div>

              <p> show 1 to 10 questions form 2023</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
