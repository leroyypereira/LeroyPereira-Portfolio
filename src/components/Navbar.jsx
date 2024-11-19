import React from 'react'
import logo from "../assets/logofinal.png"

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return <nav className="mb-20 flex items-center py-6 justify-between">
    <div className="flex flex-shrink-0 items-center">
        <img className = "mx-2 w-10" src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/leroy-pereira-a7843224b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <FaGithub/>
        <FaSquareXTwitter/>
    </div>
  </nav>
}

export default Navbar