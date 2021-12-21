import React from "react"
import "tailwindcss/tailwind.css"
import Layout from "../components/Layout"
import { CategoryCarousel } from "../sections/CategoryCarousel"
import Featured from "../sections/Featured"
import Latest from "../sections/Latest"
import TagsList from "../sections/TagsList"

export default function Home() {
  return (
    <Layout>
      <CategoryCarousel />
      <Featured />
      <div className="w-full grid grid-cols-3 gap-4">
        <Latest />
        <TagsList />
      </div>
    </Layout>
  )
}
