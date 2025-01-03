'use client'

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      {/* First Layer */}
      <div className="bg-[#272343] text-white flex flex-col sm:flex-row items-center sm:justify-between md:justify-around p-3 sm:p-0">
        <div className="flex items-center mb-2 sm:mb-0">
          <img className="w-3 h-3 " src="tick.png" alt="" />
          <p className="text-white text-sm flex text-[13px] justify-center p-3 font-extralight">
            Free Shipping On All Orders Over $50
          </p>
        </div>
        <div className="flex justify-end items-center font-extralight">
          <div className="flex gap-x-3 items-center">
            <div className="flex items-center">
              <label className="text-[13px]" htmlFor="dropdown">
                Eng
              </label>
              <img
                className="w-4 h-4 flex"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAjVJREFUaEPtlrFrFEEUh7+fBOwEQbCwEG0sbFIriWJnIVbBQrQwNrHSTiFpBNFOK23UQtFKFP8AJSYqKW0sbBQLCyEg2FgE8nILE1iXuXOys3M7HnPd3b2Z9773vX2smNCPJpSLAva/mS3GirFMOlBGMRMRwWUUY8GtyiSwGMtERHAZxVhwqzIJLMYyERFcRjEW3KpMAouxTEQElxFtzMxmgJvAWUm/gzN7As1sD/ASWJS0FnNXFJiZnQZeAbuBT8CJtnBmthd4C0wDf4Azkt60hWsNZmZzwHNgqpa8gjsl6ddOCnJQq8DR2rkNYE7S653ctR0bA3YeeDIYw12NxJ+BmVA4M9sHLDegqis3gXOSXowVrEpmZqPgTkpaH1WUg3oPHGnEVVAXJT1rA1WdaW1sO6GDe+q564t75n76ijOz/cA7D5QBF2KgOgFz5i4BDz1wX4Fjkv6Cc1AfB6N8uAFdQV2W9LitqehnrJnYzEbBzUr64ZpwYLBgVlJCdWasNpYV3CNPt78Dx93vH4CDnpj5Lkx1bqwGtwDc9xT+zf12yPPfFUkPYsevfj56eQxZDMPgfOGdQ3U+ivWqzewqcPcfFpJAJQVzi2IU3DVJ97ocv+SjGGAuKVRyY7WFcn3wonzbfb8h6U4qU8m24rCCzWypev+TdCs11NiMjQOkmSPJuu8DpIDl0PWYGsooxnSvj7PFWB9dj8lZjMV0r4+zxVgfXY/JWYzFdK+Ps8VYH12PyTmxxrYAa8WJN8+9rnUAAAAASUVORK5CYII="
              />
            </div>
            <p className="text-[13px]">Faqs</p>
            <div className="flex items-center gap-x-1">
              <img className="w-4 h-4" src="help.png" alt="" />
              <p className="text-[13px]">Need Help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Layer */}
      <div className="bg-[#F0F2F3] flex justify-between items-center p-5">
        <div className="flex gap-x-2 items-center">
          <img src="sofa.png" alt="logo" />
          <p className="text-[26px] font-medium">Comforty</p>
        </div>
        <div className="flex items-center">
          <button
            className="text-[30px] cursor-pointer sm:hidden"
            onClick={toggleSidebar}
          >
            &#9776;
          </button>
          <Link href="/cart">
            <div className="w-[120px] h-[44px] ml-3 md:ml-0 bg-white rounded-md flex items-center gap-x-2 justify-center text-[12px]">
              <img className="w-[22px] h-[22px]" src="cart.png" alt="" />
              <p className="font-medium">Cart</p>
              <p className="w-[20px] h-[20px] rounded-full text-[10px] bg-[#007580] text-center text-white flex items-center justify-center">
                2
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Third Layer (Navigation) */}
      <div className="hidden sm:flex justify-around items-center h-[74px]">
        <div className="flex justify-between gap-x-10 font-medium items-center text-[14px]">
          <Link href="/">
            <p className="hover:text-[#007580] hover:font-semibold cursor-pointer hidden lg:block">
              Home
            </p>
          </Link>
          <Link href="/contact" passHref>
            <p className="hover:text-[#007580] hover:font-semibold hidden lg:block">
              Contact
            </p>
          </Link>
          <Link href="/products" passHref>
            <p className="hover:text-[#007580] hover:font-semibold hidden lg:block">
              Product
            </p>
          </Link>
          <Link href="/signup">
            <p className="hover:text-[#007580] hover:font-semibold cursor-pointer hidden lg:block">
              Pages
            </p>
          </Link>
          <Link href="/about">
            <p className="hover:text-[#007580] hover:font-semibold cursor-pointer hidden lg:block">
              About
            </p>
          </Link>
        </div>
        <p className="text-[14px] font-light">
          Contact: <span className="font-medium">{` (808) 555-0111`}</span>
        </p>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 w-[250px] h-full bg-[#272343] text-white flex flex-col items-start p-5 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <button
          className="text-[30px] self-end mb-6"
          onClick={toggleSidebar}
        >
          &times;
        </button>
        <Link href="/">
          <p
            className="hover:text-[#007580] hover:font-semibold cursor-pointer mb-2"
            onClick={toggleSidebar}
          >
            Home
          </p>
        </Link>
        <Link href="/contact" passHref>
          <p
            className="hover:text-[#007580] hover:font-semibold cursor-pointer mb-2"
            onClick={toggleSidebar}
          >
            Shop
          </p>
        </Link>
        <Link href="/products" passHref>
          <p
            className="hover:text-[#007580] hover:font-semibold cursor-pointer mb-2"
            onClick={toggleSidebar}
          >
            Product
          </p>
        </Link>
        <Link href="/signup">
          <p
            className="hover:text-[#007580] hover:font-semibold cursor-pointer mb-2"
            onClick={toggleSidebar}
          >
            Pages
          </p>
        </Link>
        <Link href="/about">
          <p
            className="hover:text-[#007580] hover:font-semibold cursor-pointer mb-2"
            onClick={toggleSidebar}
          >
            About
          </p>
        </Link>
        <p className="text-[14px] font-light mt-auto">
          Contact: <span className="font-medium">{` (808) 555-0111`}</span>
        </p>
      </div>

      <hr />
    </header>
  );
}
