"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import OutsideClickHandler from "react-outside-click-handler";

import logo from "@/public/logo/logo.svg";
import Avatar from "./Avatar";

// Add navigation links array
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/our-farms", label: "Our Farms" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function Header({
  userRole,
  profilePath,
}: {
  userRole: string | boolean;
  profilePath: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const login = userRole ? true : false;

  const openMenuHandler = () => {
    setIsMenuOpen(() => !isMenuOpen);
  };
  const closeMenuHandler = () => {
    setIsMenuOpen(() => false);
  };
  return (
    // ( py-4 px-4 md:px-10 max-w-screen-xl mx-auto ) add this classes to all  sections.
    <OutsideClickHandler onOutsideClick={closeMenuHandler}>
      <div className="bg-white fixed top-0 left-0 right-0 border-b-2 border-primary/20 z-50">
        <div className="flex flex-wrap items-center justify-between py-4 px-4 md:px-10 max-w-screen-xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary font-mono"
            onClick={closeMenuHandler}
          >
            <Image 
              src={logo} 
              alt="Alpha Herb Logo"
              width={35}
              height={35}
              priority={true}
              loading="eager"
              // className="w-auto h-auto"
              title="Alpha Herb - Organic Products"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              Alpha Herb
            </span>
          </Link>
          {/* *************** Menu Icon in small devices ************** */}
          <button
            onClick={openMenuHandler}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            {!isMenuOpen ? (
              <AlignJustify className="text-primary" />
            ) : (
              <X className="text-red-600" />
            )}
          </button>
          {/* ***************************** */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="w-full font-medium flex flex-col gap-5 md:gap-4 lg:gap-8 items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row  md:mt-0 md:border-0 md:bg-transparent ">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 hover:text-primary md:p-0"
                    onClick={closeMenuHandler}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* line in small devices */}
              {login && (
                <li className="border border-primary w-[90%] md:hidden"></li>
              )}

              <li className="mt-2 md:mt-0">
                {!login ? (
                  <Link
                    href="/sign-in"
                    className="py-2 px-3 text-white rounded bg-primary hover:scale-105 transition"
                    onClick={closeMenuHandler}
                  >
                    Sign In
                  </Link>
                ) : (
                  <Avatar
                    userRole={userRole}
                    onClick={closeMenuHandler}
                    profilePath={profilePath}
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
}

export default Header;
