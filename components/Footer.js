import React from "react"
import { footerNavigation } from "../assets/data/footerNavigation"

import { FiYoutube, FiLinkedin, FiGithub } from "react-icons/fi"
import { MdOutlineEmail } from "react-icons/md"

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-6 pt-6 pb-4">
      <div className="grid grid-cols-6 gap-4 border-b border-gray-100 mb-4 pb-8">
        {footerNavigation.map((col, index) => (
          <div key={index} className="flex flex-col pl-4 justify-start">
            <h3 className="text-gray-200 uppercase font-semibold">{col[0]}</h3>
            {col[1].map((row, index) => (
              <p
                key={index}
                className="cursor-pointer text-gray-200 capitalize"
              >
                {row}
              </p>
            ))}
          </div>
        ))}
        <div className="col-span-2 flex flex-col">
          <h3 className="text-gray-200 uppercase font-semibold">
            Subscribe to receive updates
          </h3>
          <p className="text-gray-200">
            Get the latest posts, articles and courses sent directly to your
            inbox
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="md:col-span-2 rounded-md px-2 py-1 focus:ring-2 focus:ring-gray-200"
              name="email"
            />
            <button
              className="transition duration-500 ease hover:bg-blue-200 inline-block cursor-pointer ml-3 bg-blue-700 rounded-md text-white py-1"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-8 flex justify-between">
        <p className="text-white font-medium">
          &copy; {new Date().getFullYear()} <span>ndmarks.com</span>. Built with{" "}
          <a href="gatsbyjs.com">Gatsby</a>
        </p>
        <div className="text-gray-500 flex">
          <FiYoutube className="ml-6 h-5 w-5" />
          <FiLinkedin className="ml-6 h-5 w-5" />
          <FiGithub className="ml-6 h-5 w-5" />
          <MdOutlineEmail className="ml-6 h-5 w-5" />
        </div>
      </div>
    </footer>
  )
}

export default Footer

{
  /* <p>
        &copy; {new Date().getFullYear()} <span>ndmarks.com</span>. Built with{" "}
        <a href="gatsbyjs.com">Gatsby</a>
      </p> */
}
