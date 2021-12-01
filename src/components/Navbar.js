import React, { useState } from "react"
import { Link } from "gatsby"
import { FiYoutube, FiLinkedin, FiGithub } from "react-icons/fi"
import { MdOutlineEmail } from "react-icons/md"
import { IoMdSearch } from "react-icons/io"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import styled from "styled-components"

// import { headerNavigation } from "../assets/data/headerNavigation"
import { lowerNavigation } from "../assets/data/lowerNavigation"
import Inputfield from "./Inputfield"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className="bg-off-black flex flex-col justify-items-center items-center">
      <UpperNav setToggle={setShow} isToggled={show} />
      <div
        className={`flex-col md:flex md:flex-row md:justify-items-center justify-between md:w-2/3 md:mx-auto border-t border-gray-100 w-full ${
          show ? "flex" : "hidden"
        } transition duration-300 ease-in`}
      >
        {lowerNavigation.map((dropdown, index) => (
          <LowerNavDropdown key={index} list={dropdown} />
        ))}
      </div>
    </nav>
  )
}

const UpperNav = ({ setToggle, isToggled }) => {
  return (
    <div className="flex md:justify-items-center justify-between w-full md:w-2/3 md:mx-auto">
      <h1 className="text-4xl font-display font-bold text-white ml-6 md:ml-0 py-6 md:pt-9 md:pb-4 text-center flex-shrink-0 mr-4 transition duration-600 ease hover:text-teal">
        <Link to="/">chumbers</Link>
      </h1>
      <div className="flex-grow px-2 pt-5 pb-2 hidden md:flex relative z-10">
        <Inputfield
          className="my-1 px-2 ml-3 mr-1"
          type="text"
          label="🔍 SEARCH"
          placeholder="Browse the site..."
          btnLabel="search"
          isEmail={false}
          id="navbarSearch"
        />
      </div>
      <div className="flex-shrink-0 text-gray-500 hidden md:flex items-center w-auto px-2 pt-5 pb-2">
        <FiYoutube className="icon" />
        <FiLinkedin className="icon" />
        <FiGithub className="icon" />
        <MdOutlineEmail className="icon" />
      </div>
      <HiOutlineMenuAlt3
        className="text-white cursor-pointer transition duration-500 hover:text-teal md:hidden mx-4 my-auto"
        size="2.5em"
        onClick={() => setToggle(!isToggled)}
      />
    </div>
  )
}

const LowerNavDropdown = ({ list }) => {
  return (
    <div className="dropdown w-full md:relative">
      <span>
        <button
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
          type="button"
        >
          <span className="capitalize">{list[0]}</span>
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </span>
      <ul className="overflow-hidden w-full origin-top-right bg-white border divide-y outline-none dropdown-menu">
        {list[1].map((el, idx) => (
          <li key={idx}>
            <Link
              className="text-gray-700 w-full px-4 py-2 text-sm leading-5 text-center capitalize block cursor-pointer transition duration-200 hover:bg-gray-100"
              role="menuitem"
              to="/about"
            >
              {el}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Search = styled.div`
  padding: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`

const SearchBar = styled.input`
  padding: 1rem 1rem 1rem 3.5rem;
  width: 100%;
`

export default Navbar
