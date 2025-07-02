// import { BookOpen, Clock, Download } from "lucide-react";
// import { toast } from "@/hooks/use-toast";
// const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/books`;

// const apiGetAllBooks = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/books/filter`;

// type Filters = {
//   search?: string;
//   language?: string;
//   category?: string;
//   sortBy?: string;
// };

// // 🔁 Your new API endpoint
// const apiGetAllBooksFilter = "http://127.0.0.1:5000/api/books/filer-by-we";

// export default async function getAllBooks(
//   page = 1,
//   limit = 10,
//   filters: Filters = {}
// ) {
//   try {
//     const params = new URLSearchParams({
//       page: String(page),
//       limit: String(limit),
//       search:
//         filters.search && filters.search !== "null" ? filters.search : "null",
//       language: filters.language || "all",
//       category: filters.category || "all",
//       sortBy: filters.sortBy || "recent", // default to recent if not set
//     });

//     const url = `${apiGetAllBooksFilter}?${params.toString()}`;

//     console.log("📚 Fetching books with URL:", url);

//     const response = await fetch(url, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       cache: "no-store",
//     });

//     const json = await response.json();
//     console.log("📚 Books fetched:", json);

//     if (!json.success || !Array.isArray(json.data)) {
//       throw new Error("Invalid response");
//     }

//     return {
//       books: json.data,
//       hasMore: json.hasMore,
//     };
//   } catch (error) {
//     console.error("❌ getAllBooks error:", error);
//     return { books: [], hasMore: false };
//   }
// }

// export async function getBookById(id: string) {
//   try {
//     const userString = localStorage.getItem("user");
//     if (!userString) throw new Error("User not found in localStorage");

//     const userObject = JSON.parse(userString);
//     const token = userObject?.user?.token;
//     if (!token) throw new Error("Authentication token not found");

//     const response = await fetch(`${apiUrl}/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       cache: "no-store",
//     });

//     const json = await response.json();
//     console.log("📚 Book fetched:", json.data);

//     if (!json.success || !json.data) {
//       throw new Error("Invalid response");
//     }

//     return json.data;
//   } catch (error) {
//     console.error("❌ getBookById error:", error);
//     return null; // Return null if there's an error
//   }
// }

// export async function getCategories() {
//   return [
//     {
//       id: "6859544d68b989660de6f629",
//       ps: "واده",
//       en: "Marriage",
//       ar: "الزواج",
//     },
//     { id: "6859544d68b989660de6f62a", ps: "طلاق", en: "Divorce", ar: "الطلاق" },
//     { id: "6859544d68b989660de6f62b", ps: "نماز", en: "Prayer", ar: "الصلاة" },
//     { id: "6859544d68b989660de6f62c", ps: "روژه", en: "Fasting", ar: "الصيام" },
//     { id: "6859544d68b989660de6f62d", ps: "زکات", en: "Zakat", ar: "الزكاة" },
//     { id: "6859544d68b989660de6f63a", ps: "تجارت", en: "Trade", ar: "التجارة" },
//     {
//       id: "6859544d68b989660de6f63b",
//       ps: "خوراک او څښاک",
//       en: "Food & Drink",
//       ar: "الطعام والشراب",
//     },
//     {
//       id: "6859544d68b989660de6f63c",
//       ps: "کورنۍ اړیکې",
//       en: "Family Relations",
//       ar: "العلاقات الأسرية",
//     },
//     {
//       id: "6859544d68b989660de6f643",
//       ps: "میراث",
//       en: "Inheritance",
//       ar: "الميراث",
//     },
//     { id: "6859642f8c140503427e8c57", ps: "نکاح", en: "Nikah", ar: "النكاح" },
//   ];
// }

// export function getSortOptions() {
//   return [
//     { label: "Recent", value: "recent" }, // default
//     { label: "Most Viewed", value: "mostViewed" },
//     { label: "Most Liked", value: "mostLiked" },
//     { label: "Popular", value: "popular" },
//   ];
// }

// export async function getLanguages() {
//   return [
//     { name: "English", code: "en" },
//     { name: "Arabic", code: "ar" },
//     { name: "Pashto", code: "ps" },
//   ];
// }

// src/lib/data/books.ts

const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

const apiGetAllBooksFilter = `${BASE_URL}/api/books/filer-by-we`;
const apiGetBookById = `${BASE_URL}/api/books`;

export type Filters = {
  search?: string;
  language?: string;
  category?: string;
  sortBy?: string;
};

export interface Book {
  _id?: string;
  title: string;
  author: string;
  category: string | { name: string };
  coverImageUrl: string;
  description: string;
  fileLink: string;
  fileSizeMB: number;
  language: string;
  pageCount: number;
  rating: number;
  createdAt: string;
  uploadedBy?: { fullName: string } | null;
  downloads?: number;
}

export async function getAllBooks(
  page = 1,
  limit = 10,
  filters: Filters = {}
): Promise<{ books: Book[]; hasMore: boolean }> {
  try {
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
      search:
        filters.search && filters.search !== "null" ? filters.search : "null",
      language: filters.language || "all",
      category: filters.category || "all",
      sortBy: filters.sortBy || "recent",
    });

    const url = `${apiGetAllBooksFilter}?${params.toString()}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const json = await response.json();

    if (!json.success || !Array.isArray(json.data)) {
      throw new Error("Invalid response");
    }

    return {
      books: json.data,
      hasMore: json.hasMore,
    };
  } catch (error) {
    console.error("❌ getAllBooks error:", error);
    return { books: [], hasMore: false };
  }
}

export async function getBookById(id: string): Promise<Book | null> {
  try {
    const userString =
      typeof window !== "undefined" && localStorage.getItem("user");
    if (!userString) throw new Error("User not found in localStorage");

    const userObject = JSON.parse(userString);
    const token = userObject?.user?.token;
    if (!token) throw new Error("Authentication token not found");

    const response = await fetch(`${apiGetBookById}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const json = await response.json();

    if (!json.success || !json.data) {
      throw new Error("Invalid response");
    }

    return json.data;
  } catch (error) {
    console.error("❌ getBookById error:", error);
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
    { label: "Recent", value: "recent" },
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
