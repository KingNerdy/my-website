"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-screen bg-bgGrey pt-10 flex flex-row justify-around items-end text-textOlive font-sans text-3xl font-semibold fixed">
      <Link className={`hover:text-textPink`} href="/Home">
        Home
      </Link>
      <Link className={`hover:text-textPink`} href="/Enjoy">
        I enjoy
      </Link>
      <Link className={`hover:text-textPink`} href="/Learn">
        I learn
      </Link>
      <Link className={`hover:text-textPink`} href="/Contact">
        Contact me
      </Link>
    </div>
  );
};

export default Header;
