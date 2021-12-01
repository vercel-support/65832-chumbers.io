import React from "react"
import { footerNavigation } from "../assets/data/footerNavigation"

import { FiYoutube, FiLinkedin, FiGithub } from "react-icons/fi"
import { MdOutlineEmail } from "react-icons/md"

import Inputfield from "./Inputfield"

const Footer = () => {
  return (
    <footer className="bg-off-black px-10 pt-6 pb-4">
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
          <Inputfield
            type="email"
            label="Notify me"
            placeholder="E-mail"
            btnLabel="send"
            isEmail={true}
            id="footerNotify"
          />
        </div>
      </div>
      <div className="pt-4 pb-8 flex justify-between">
        <p className="text-white font-medium">
          &copy; {new Date().getFullYear()} <span>chumbers.com</span>. Built
          with <a href="gatsbyjs.com">Gatsby</a>
        </p>
        <div className="text-gray-500 flex">
          <FiYoutube className="icon" />
          <FiLinkedin className="icon" />
          <FiGithub className="icon" />
          <MdOutlineEmail className="icon" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
