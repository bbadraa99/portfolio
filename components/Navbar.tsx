"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed w-full z-50 ${
          header ? "bg-white" : "bg-transparent"
        } transition-all duration-500 ease-in-out`}
      >
        <div>
          <div className={`flex-row my-3 ease-in-out`}>
            <ul className="h-full gap-8 hidden lg:flex pr-20 justify-end">
              {[
                NAV_LINKS.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      key={link.key}
                      className={`regular-14 flexCenter p-3 cursor-pointer transition-all font-dmono ${
                        header
                          ? "text-black hover:bg-stone-300"
                          : "text-white hover:bg-stone-100 hover:bg-opacity-40"
                      }  rounded-sm`}
                      style={{ textAlign: "left" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                )),
              ]}
              <li>
                <Link
                  href="/resume.pdf"
                  key="resume"
                  style={{ border: "1px solid", borderRadius: "2px" }}
                  className={`btn btn-outline font-dmono regular-14 ${
                    header ? "text-black hover:text-white hover:bg-background-50" : "text-white hover:text-white hover:bg-stone-100 hover:bg-opacity-40" 
                  }`}
                  target="_blank"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          <div className="right-0 lg:hidden z-60" dir="rtl">
            <label className="swap swap-rotate pr-10" dir="rtl">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onClick={() => setisClick(!isClick)} />

              {/* hamburger icon */}
              <svg
                className={`swap-off ${header ? "fill-black" : "fill-white"}`}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className={`swap-on ${header ? "fill-black" : "fill-white"}`}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          {isClick && (
            <div className="absolute right-6 md:right-12 px-5 py-5 bg-white bg-opacity-95 z-50 rounded-md lg:hidden">
              <div className="h-full flex items-center justify-center">
                <ul className="text-black">
                  {/* Render menu items */}
                  {NAV_LINKS.map((link) => (
                    <li
                      key={link.key}
                      className="py-2 px-3 hover:bg-gray-800 hover:text-white cursor-pointer regular-16 font-dmono"
                      onClick={() => setisClick(!isClick)}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                  <li className="py-2">
                    <Link
                      href="/resume.pdf"
                      key="resume"
                      style={{ border: "1px solid", borderRadius: "2px" }}
                      className="px-6 btn btn-outline font-dmono regular-16 text-black"
                      onClick={() => setisClick(!isClick)}
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
