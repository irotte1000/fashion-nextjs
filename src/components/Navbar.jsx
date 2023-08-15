"use client";
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Men",
      href: "/men",
    },
    {
      label: "Women",
      href: "/women",
    },
    {
      label: "Kids",
      href: "/kids",
    },
    {
      label: "Collection",
      href: "/collection",
    },
  ];
  return (
    <div className=" h-16 border-b border-red-800 bg-blackish fixed z-20 top-0 w-[100vw] shadow-md">
      <div className="px-5 md:px-20 text-sm text-orange-800 h-full flex items-center justify-between uppercase">
        <div className="text-xl font-bold  ">
          <Link href="/">Fashion</Link>
        </div>
        <div className="hidden md:flex gap-10 mx-auto font-medium py-4">
          {navItems.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={
                pathname === `${link.href}`
                  ? " text-orange-400 font-bold underline"
                  : ""
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className=" hidden md:flex px-3 py-2 uppercase text-sm border border-orange-800 tracking-wider hover:text-white hover:bg-orange-800 transition-all duration-300">
          Login
        </button>

        <div className="md:hidden block">
          <Menu />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
