"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";

const About = () => {
  const [text] = useTypewriter({
    words: [" An aspiring Software Engineer", " Senior CSE student"],
    loop: true,
    typeSpeed: 120,
  });

  return (
    <>
      <div
        className="h-screen flexCenter flex-col text-white"
        style={{ textAlign: "center" }}
      >
        
        <p className="regular-16 md:regular-24 font-dmono pt-16">Hello, my name is</p>
        <h1 className="bold-52 md:bold-72 font-dmono">Badraa Bat-Ulzii</h1>
        <h2 className="regular-16 md:regular-24 font-dmono">
          <span>{text}</span>
          <Cursor cursorStyle="_" />
        </h2>
        <Image className="animate-bounce pt-16" src="/star.png" alt="star" width={50} height={50}></Image>
      </div>
    </>
  );
};

export default About;
