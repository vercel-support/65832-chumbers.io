import React from "react";
import "tailwindcss/tailwind.css";
import { CategoryCarousel } from "../sections/CategoryCarousel";
import Featured from "../sections/Featured";
import Latest from "../sections/Latest";
import TagsList from "../sections/TagsList";
import Seo from "../components/SEO";
import Vanta from "../components/Vanta";

export default function Home() {
  return (
    <main className="mx-10 my-10">
      <Seo title="home" description="Welcome to ndmarks.com" />
      <Vanta />
      <CategoryCarousel />
      <Featured />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <Latest />
        <TagsList />
      </div>
    </main>
  );
}
