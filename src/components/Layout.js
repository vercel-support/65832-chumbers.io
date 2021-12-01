import React from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"
import { CategoryCarousel } from "./CategoryCarousel"

import "normalize.css"
import "../assets/styles/globals.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <CategoryCarousel />
      {children}
      <Footer />
    </>
  )
}

export default Layout
