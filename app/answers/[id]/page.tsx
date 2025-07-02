// import { notFound } from "next/navigation";
// import { Metadata } from "next";
// import { cachedGetFatwaById } from "@/lib/cache/fawta";
// import { Fatwa } from "@/types/fatwa"; // Import interface
// import FatwaDetailClient from "@/components/Pages/Fatwa/FatwaDetailClient";

// // ✅ Metadata generator
// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   const fatwa = await cachedGetFatwaById(params.id);
//   console.log("salkdjfwoeijf lsakdjfoiwej flksdajf", fatwa);

//   return {
//     title: fatwa?.title || "Fatwa Detail | Islamic Portal",
//     description:
//       fatwa?.description?.slice(0, 150).replace(/\s+/g, " ") ||
//       "Islamic fatwa detail page.",
//     openGraph: {
//       title: fatwa?.title || "Fatwa Detail | Islamic Portal",
//       description:
//         fatwa?.description?.slice(0, 150).replace(/\s+/g, " ") ||
//         "Detailed Islamic legal opinions.",
//       type: "article",
//       url: `http://localhost/answers/${params.id}`,
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: fatwa?.title || "Fatwa Detail",
//       description:
//         fatwa?.description?.slice(0, 150).replace(/\s+/g, " ") ||
//         "Islamic fatwa answer and detail.",
//     },
//   };
// }

// // ✅ Page component
// export default async function Page({ params }: { params: { id: string } }) {
//   const fatwaData = await cachedGetFatwaById(params.id);

//   console.log(fatwaData);
//   if (!fatwaData) {
//     notFound();
//   }

//   // Map getFatwaInterface to Fatwa type

//   return <FatwaDetailClient fatwa={fatwaData} />;
// }

// app/answers/[id]/page.tsx

import FatwaDetailClient from "@/components/Pages/Fatwa/FatwaDetailClient";
import { getFatwaById } from "@/lib/data/fatwa";
import { Metadata } from "next";

// ✅ Metadata function
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const fatwa = await getFatwaById(params.id);

  return {
    title: fatwa?.title || "Fatwa Detail | Islamic Portal",
    description:
      fatwa?.description?.slice(0, 150).replace(/\s+/g, " ") ||
      "Islamic fatwa detail page.",
    openGraph: {
      title: fatwa?.title || "Fatwa Detail | Islamic Portal",
      description:
        fatwa?.description?.slice(0, 150).replace(/\s+/g, " ") ||
        "Detailed Islamic legal opinions.",
      type: "article",
      url: `https://yourdomain.com/answers/${params.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: fatwa?.title || "Fatwa Detail",
      description:
        fatwa?.description?.slice(0, 150).replace(/\s+/g, " ") ||
        "Islamic fatwa content",
    },
  };
}

// ✅ Page component
export default async function Page({ params }: { params: { id: string } }) {
  console.log("🤩🤩🤩🤩🤩🤩", params.id);
  const fatwa = await getFatwaById(params.id);
  console.log("👅👅👅👅👅", fatwa);
  return <FatwaDetailClient fatwa={fatwa} />;
}
