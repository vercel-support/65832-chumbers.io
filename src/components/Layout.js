import React from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"

import "normalize.css"
import "../assets/styles/globals.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="my-10 mx-10">{children}</main>

      <Footer />
    </>
  )
}

export default Layout
