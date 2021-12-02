import React from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"

import "normalize.css"
import "../assets/styles/globals.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="py-10 px-10" style={{ backgroundColor: "#eff5fc" }}>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout
