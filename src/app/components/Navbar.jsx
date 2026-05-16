"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-border top-0 left-0 right-0 z-10 bg-background bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="Yimesgen Amanuel logo"
            width={200}
            height={60}
            className="h-11 w-auto md:h-14"
            priority
          />
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle className="md:hidden" />
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 items-center mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
