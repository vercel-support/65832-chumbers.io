import React from "react";
import { footerNavigation } from "../data/footerNavigation";

import { FiYoutube, FiLinkedin, FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

import Inputfield from "./Inputfield";

const Footer = () => {
  return (
    <footer className="bg-off-black px-10 pb-4 z-10">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4  mb-4 pb-8 border-t border-gray-100 pt-6">
        {footerNavigation.map((col, index) => (
          <div key={index} className="flex flex-col pl-4 justify-start">
            <h4 className="text-gray-200 text-sm uppercase font-semibold">
              {col[0]}
            </h4>
            {col[1].map((row, index) => (
              <p
                key={index}
                className="cursor-pointer text-gray-200 capitalize text-sm mb-1"
              >
                {row}
              </p>
            ))}
          </div>
        ))}
        <div className="col-span-2 flex flex-col text-sm">
          <h4 className="text-gray-200 uppercase font-semibold">
            Subscribe to receive updates
          </h4>
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
      <div className="sm:mt-7 md:mt-auto pt-6 pb-8 sm:flex sm:justify-between border-t border-gray-100 xs:block">
        <p className="text-white font-medium xs:mb-4 sm:mb-3">
          &copy; {new Date().getFullYear()} <span>chumbers.com</span>. Built
          with <a href="gatsbyjs.com">Gatsby</a>
        </p>
        <div className="text-gray-500 flex xs:mt-4 sm:mt-1">
          <a href="https://www.youtube.com/c/Chumbers" className="icon">
            <FiYoutube />
          </a>
          <a href="https://linkedin.com/in/nickmarks00" className="icon">
            <FiLinkedin />
          </a>
          <a href="https://github.com/nickmarks00" className="icon">
            <FiGithub />
          </a>
          <a href="mailto:nd.marks00@gmail.com" className="icon">
            <MdOutlineEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
