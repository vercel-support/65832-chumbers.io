import React from "react"
import "tailwindcss/tailwind.css"
import Layout from "../components/Layout"
import { CategoryCarousel } from "../components/CategoryCarousel"
import Featured from "../components/Featured"
import Latest from "../components/Latest"
import TagsList from "../components/TagsList"

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
