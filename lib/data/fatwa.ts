import { toast } from "@/hooks/use-toast";
import { count } from "console";
import { CheckCircle, Clock, Flag, MessageCircle } from "lucide-react";

const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/fatwas`;

export interface getFatwaInterface {
  _id: string;
  title: string;
  description: string; // HTML content as string
  madhab: string;
  category: {
    _id: string;
    name?: string;
  };
  scholar: {
    _id: string;
    fullName: string;
    email: string;
  };
  status: "pending" | "published" | "rejected" | string;
  views: number;
  createdAt?: string; // ISO date string
  language: "ps" | "en" | "ar";
}

export interface Fatwa {
  // _id?: string;
  title: string;
  scholar: string;
  description: string;
  category: string;
  madhab: string;
  language: string;
  createdAt: string;
}

// export async function getFatwas(
//   page = 1,
//   limit = 10,
//   filters: {
//     search?: string;
//     category?: string;
//     language?: string;
//     sortBy?: string;
//   } = {}
// ) {
//   try {
//     const params = new URLSearchParams();

//     params.set("page", page.toString());
//     params.set("limit", limit.toString());

//     // 🧠 Only add filter if it's not "all" or empty
//     if (filters.search && filters.search !== "null") {
//       params.set("search", filters.search);
//     }
//     if (filters.category && filters.category !== "all") {
//       params.set("category", filters.category);
//     }
//     if (filters.language && filters.language !== "all") {
//       params.set("language", filters.language);
//     }
//     if (filters.sortBy && filters.sortBy !== "recent") {
//       params.set("status", filters.sortBy);
//     }

//     const url = `${apiUrl}/filter?${params.toString()}`;

//     const response = await fetch(url, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       cache: "no-store",
//     });

//     const json = await response.json();

//     if (!json.success || !Array.isArray(json.data)) {
//       throw new Error("Invalid response");
//     }

//     console.log("📜 Fatwas fetched:", json.data);
//     console.log("📜 Has more:", json.hasMore);

//     return {
//       fatwas: json.data,
//       hasMore: json.hasMore,
//     };
//   } catch (error) {
//     console.error("❌ getFatwas error:", error);
//     return { fatwas: [], hasMore: false };
//   }
// }

const apiUrlFilter = "http://127.0.0.1:5000/api/fatwas/filter-for-we";

export async function getFatwas(
  page = 1,
  limit = 10,
  filters: {
    search?: string;
    category?: string;
    language?: string;
    sortBy?: string;
  } = {}
) {
  try {
    const params = new URLSearchParams();

    params.set("page", page.toString());
    params.set("limit", limit.toString());

    // ✅ Apply filters only if necessary
    params.set(
      "search",
      filters.search && filters.search !== "null" ? filters.search : "null"
    );
    params.set(
      "category",
      filters.category && filters.category !== "all" ? filters.category : "all"
    );
    params.set(
      "language",
      filters.language && filters.language !== "all" ? filters.language : "all"
    );
    params.set(
      "sortBy",
      filters.sortBy && filters.sortBy !== "recent" ? filters.sortBy : "recent"
    );

    const url = `${apiUrlFilter}?${params.toString()}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const json = await response.json();

    if (!json || !Array.isArray(json.data)) {
      throw new Error("Invalid response format");
    }

    return {
      fatwas: json.data,
      hasMore: json.hasMore,
    };
  } catch (error) {
    console.error("❌ Error fetching fatwas:", error);
    return {
      fatwas: [],
      hasMore: false,
    };
  }
}

export async function getFatwaById(
  id: string
): Promise<getFatwaInterface | null> {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        // "Accept-Language": "ps",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch fatwa");
    }

    const data = await response.json();
    console.log("😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️ fatwa data is showing from bacend", data);
    return data.data || null;
  } catch (error) {
    console.error("Error fetching fatwa by ID:", error);
    return null;
  }
}

export async function getCategories() {
  return [
    {
      id: "6859544d68b989660de6f629",
      ps: "واده",
      en: "Marriage",
      ar: "الزواج",
    },
    { id: "6859544d68b989660de6f62a", ps: "طلاق", en: "Divorce", ar: "الطلاق" },
    { id: "6859544d68b989660de6f62b", ps: "نماز", en: "Prayer", ar: "الصلاة" },
    { id: "6859544d68b989660de6f62c", ps: "روژه", en: "Fasting", ar: "الصيام" },
    { id: "6859544d68b989660de6f62d", ps: "زکات", en: "Zakat", ar: "الزكاة" },
    { id: "6859544d68b989660de6f63a", ps: "تجارت", en: "Trade", ar: "التجارة" },
    {
      id: "6859544d68b989660de6f63b",
      ps: "خوراک او څښاک",
      en: "Food & Drink",
      ar: "الطعام والشراب",
    },
    {
      id: "6859544d68b989660de6f63c",
      ps: "کورنۍ اړیکې",
      en: "Family Relations",
      ar: "العلاقات الأسرية",
    },
    {
      id: "6859544d68b989660de6f643",
      ps: "میراث",
      en: "Inheritance",
      ar: "الميراث",
    },
    { id: "6859642f8c140503427e8c57", ps: "نکاح", en: "Nikah", ar: "النكاح" },
  ];
}

export function getSortOptions() {
  return [
    { label: "Recent", value: "recent" }, // default
    { label: "Most Viewed", value: "mostViewed" },
    { label: "Most Liked", value: "mostLiked" },
    { label: "Popular", value: "popular" },
  ];
}

export async function getLanguages() {
  return [
    { name: "English", code: "en" },
    { name: "Arabic", code: "ar" },
    { name: "Pashto", code: "ps" },
  ];
}
