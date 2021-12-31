import React from "react";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { CategoryCarousel } from "../sections/CategoryCarousel";
import Featured from "../sections/Featured";
import Latest from "../sections/Latest";
import TagsList from "../sections/TagsList";
import Seo from "../components/SEO";

export default function Home() {
  return (
    <Layout>
      <Seo title="home" description="Welcome to ndmarks.com" />
      <CategoryCarousel />
      <Featured />
      <div className="w-full grid grid-cols-3 gap-4">
        <Latest />
        <TagsList />
      </div>
    </Layout>
  );
}
