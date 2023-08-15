"use client";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { TEMPORARY_REDIRECT_STATUS } from "next/dist/shared/lib/constants";

const links = [
  { id: 1, title: "home", url: "/" },
  { id: 2, title: "men", url: "/men" },
  { id: 3, title: "women", url: "/women" },
  { id: 4, title: "kids", url: "/kids" },
  { id: 5, title: "collection", url: "/collection" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      {!open ? (
        <BiMenu size={30} onClick={() => setOpen(true)} />
      ) : (
        <AiOutlineClose size={30} onClick={() => setOpen(false)} />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-16 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          <Link href="/login" className="border border-white px-4 py-1">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
