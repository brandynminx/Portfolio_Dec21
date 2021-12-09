import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-green-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl font-sans">
            Brandy Minx
          </a>
        </p>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-green-100	flex flex-wrap items-center text-base justify-center">
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Previous Work
          </a>
          <a href="#education" className="mr-5 hover:text-white">
            Education
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-green-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-800 hover:text-white rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}