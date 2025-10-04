import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { SiPolymerproject } from "@icons-pack/react-simple-icons";
import { Contact2, HomeIcon, User2 } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full h-16 flex items-center justify-center ">
        <nav className="px-8 py-2 rounded-3xl bg-black dark:bg-white">
          <ul className="flex items-center justify-center gap-5 md:gap-9 font-open-sans font-semibold text-white dark:text-black">
            <li>
              <Link href="/" className="flex gap-2">
                <HomeIcon className="text-2xl" />
                <span className="border-b-2 hidden md:block border-b-black dark:border-b-white dark:hover:border-b-black hover:border-b-white  transition-all duration-500">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/user/about"} className="flex gap-2">
                <User2 className="text-2xl" />
                <span className="border-b-2 hidden md:block border-b-black dark:border-b-white dark:hover:border-b-black hover:border-b-white  transition-all duration-500">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/user/projects" className="flex gap-2">
                <SiPolymerproject className="text-2xl" />
                <span className="border-b-2 hidden md:block border-b-black dark:border-b-white dark:hover:border-b-black hover:border-b-white  transition-all duration-500">
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/user/contact" className="flex gap-2">
                <Contact2 className="text-2xl" />
                <span className="border-b-2 hidden md:block border-b-black dark:border-b-white dark:hover:border-b-black hover:border-b-white  transition-all duration-500">
                  Contact
                </span>
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
