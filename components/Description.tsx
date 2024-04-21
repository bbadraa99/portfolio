import React from "react";
import Image from 'next/image';
import Link from "next/link";


const Description = () => {
  return (
    <div id="about" className="text-white flex-col sm:px-10 md:px-20 w-full xl:w-[1000px] mx-auto py-20">
      <h1 className="font-dmono bold-26 mb-5 justify-start">01. <span className="text-white bold-32">About me</span></h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="text-stone-200 my-5 flex-col w-full md:w-1/2 text-left  font-dmono">
          <p className="regular-18">
          Hey there! I'm Badraa, a passionate software engineer on a mission to
            <span> </span>
            <span className="bold-18">
              make a meaningful impact through technology.
            </span>
          </p>
          <br />
          <p className="regular-18">
            As a senior student at UNIST in South Korea, I bring a fresh perspective and innovative solutions to the table.
            <br/>
            <br />
            Checkout my full resume! 
          </p>
          <br />
          <Link href="/resume.pdf" target="_blank">
            <button className="btn btn-outline font-dmono regular-18 text-stone-300 hover:bg-stone-100 hover:bg-opacity-40">Resume</button>
          </Link>
          
        </div>
        <div className="w-full center md:w-auto">
          <Image
            src="/profile.jpg"
            alt="profile photo"
            width={350}
            height={350}
            className="white rounded-md border-2"
            style={{ }}
          />
        </div>
        
      </div>
      
    </div>
  );
};

export default Description;
