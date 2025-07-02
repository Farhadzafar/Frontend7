// types/fatwa.ts
export interface Fatwa {
  _id: string;
  id?: string;
  title: string;
  description: string;
  question: string;
  madhab: string;
  category: string;
  language: string;
  scholar: string | null;
  questioner: string | null;
  helpful: number;
  likes: string[];
  reportError: string[];
  status: "submitted" | "approved" | "rejected";
  views: number;
  createdAt: string;
  updatedAt: string;
  answer?: string;
  relatedQuestions?: string[];
  __v?: number;
}
