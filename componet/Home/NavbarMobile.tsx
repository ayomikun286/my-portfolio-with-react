"use client";
import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const NavbarMobile = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <nav className="fixed top-0 w-full py-5 px-5 md:hidden flex justify-between z-999 bg-[#001] ">
        <div className="">
          <h1 className="logo text-[#ff4500] text-3xl font-bold hover:scale-105 ease transition ease-in-out duration-500 ">
            Port<span className="text-xl mx-1">folio</span>
          </h1>
        </div>
        <div className="flex items-center space-x-5  w-30 justify-between ">
          <a
            href="https://github.com/ayomikun286" target="_blank"
            className=" Github    rounded-full hover:text-[#ff4500] cursor-pointer transition ease-in-out duration-500 hover:scale-110 "
          >
            <FontAwesomeIcon icon={faGithub} className=" text-4xl " />
          </a>
          <button className=" text-4xl" onClick={() => setShow(!show)}>
            ☰
          </button>
        </div>
      </nav>

      <div
        className={` md:hidden fixed top-20 left-0  w-full bg-[#ff4500] px-6 py-8 flex flex-col gap-6 transform transition-transform duration-500 ease-in-out z-50
        ${show ? "translate-x-full" : "-translate-x-0"}`}
      >
        <p>HOME</p>
        <hr />
        <p>ABOUT ME</p>
        <hr />
        <p>PROJECTS</p>
        <hr />
        <p>SKILLS</p>
        <hr />
        <p>CONTACT ME</p>
      </div>
    </div>
  );
};

export default NavbarMobile;
