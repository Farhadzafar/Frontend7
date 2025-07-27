// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Bookmark, Download, GraduationCap } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// interface Research {
//   _id?: string;
//   title: string;
//   abstract: string;
//   status?: string;
//   citations: number;
//   authors?: {
//     fullName?: string;
//     bio?: string;
//     affiliation?: string;
//   };
//   language: "en" | "ps" | "ar";
//   downloadCount: number;
//   category: {
//     _id: string;
//     name: string;
//   };
//   fileSize: string; // in bytes, from API
//   pageCount: number;
//   uploadedBy: {
//     _id: string;
//     fullName?: string;
//     image?: string;
//     bio?: string;
//   };
//   keywords?: string[];
//   publishedDate: string; // ISO date
//   createdAt: string; // ISO date
// }

// export default function ResearchCard({ research }: Research) {
//   return (
//     <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300">
//       {/* Header Section */}
//       <div className="flex items-start justify-between">
//         <div className="flex-1 space-y-2">
//           <div className="flex items-center gap-3">
//             <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
//               {research.category}
//             </span>
//             <span className="text-sm text-muted-foreground">
//               {research.published}
//             </span>
//           </div>
//           <h3 className="text-xl font-semibold hover:text-primary transition-colors">
//             {research.title}
//           </h3>
//           <div className="flex items-center gap-2">
//             <GraduationCap className="w-4 h-4 text-muted-foreground" />
//             <span className="text-sm text-muted-foreground">
//               {research.institution}
//             </span>
//           </div>
//         </div>
//         <Button
//           variant="ghost"
//           size="icon"
//           className="text-muted-foreground hover:text-primary"
//         >
//           <Bookmark className="w-5 h-5" />
//         </Button>
//       </div>

//       {/* Footer Section */}
//       <div className="flex items-center justify-between border-t pt-4">
//         <div className="flex items-center gap-2">
//           <Image
//             src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
//               research.author
//             )}&background=random`}
//             alt={research.author}
//             width={32}
//             height={32}
//             className="rounded-full"
//           />
//           <span className="text-sm font-medium">{research.author}</span>
//         </div>

//         <div className="flex items-center gap-4">
//           <span className="text-sm text-muted-foreground">
//             {research.citations} citations
//           </span>
//           {/* <Button variant="outline" size="sm" className="gap-2">
//             <Download className="w-4 h-4" />
//             <a href={research.pdfUrl || "#"} download>
//               Download PDF
//             </a>
//           </Button> */}
//         </div>
//       </div>
//     </Card>
//   );
// }

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark, GraduationCap } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Research {
  research: {
    _id?: string;
    title: string;
    abstract: string;
    status?: string;
    citations: number;
    authors?: {
      fullName?: string;
      bio?: string;
      affiliation?: string;
    };
    language: "en" | "ps" | "ar";
    downloadCount: number;
    category: {
      _id: string;
      name: string;
    };
    fileSize: string;
    pageCount: number;
    uploadedBy: {
      _id: string;
      fullName?: string;
      image?: string;
      bio?: string;
    };
    keywords?: string[];
    publishedDate: string;
    createdAt: string;
  };
}

export default function ResearchCard({ research }: Research) {
  const authorName = research.uploadedBy?.fullName || "Unknown Author";

  return (
    <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300">
      {/* Header Section */}
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {research.category.name}
            </span>
            <span className="text-sm text-muted-foreground">
              {/* {research.published} */}
              {research.publishedDate}
            </span>
          </div>
          <Link href={`/ResearchPapers/${research._id}`}>
            <h3 className="text-xl font-semibold hover:text-primary transition-colors">
              {research.title}
            </h3>
          </Link>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {research.authors?.affiliation}
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-primary"
        >
          <Bookmark className="w-5 h-5" />
        </Button>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-2">
          <Image
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              research.authors?.fullName ?? "authors"
            )}&background=random`}
            alt={research.authors?.fullName ?? "Auther"}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-medium">
            {research.authors?.fullName}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {research.citations} citations
          </span>
          {/* <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            <a href={research.pdfUrl || "#"} download>
              Download PDF
            </a>
          </Button> */}
        </div>
      </div>
    </Card>
  );
}
