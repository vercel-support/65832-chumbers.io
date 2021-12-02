import React from "react"
import "tailwindcss/tailwind.css"
// import "../assets/styles/globals.scss"
import Layout from "../components/Layout"
import { CategoryCarousel } from "../components/CategoryCarousel"
import Featured from "../components/Featured"

export default function Home() {
  return (
    <Layout>
      <main className="py-10 px-10" style={{ backgroundColor: "#eff5fc" }}>
        <CategoryCarousel />
        <Featured />
      </main>
    </Layout>
  )
}
