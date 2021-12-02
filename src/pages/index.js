import React from "react"
import "tailwindcss/tailwind.css"
// import "../assets/styles/globals.scss"
import Layout from "../components/Layout"
import { CategoryCarousel } from "../components/CategoryCarousel"
import Featured from "../components/Featured"

export default function Home() {
  return (
    <Layout>
      <CategoryCarousel />
      <Featured />
    </Layout>
  )
}
