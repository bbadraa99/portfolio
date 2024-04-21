import React from "react";

const Footer = () => {
  return (
    <div className="font-dmono regular-14 center text-white pb-10 flex-col">
      Developed by Badraa Bat-Ulzii
      <br />
      <p>
        Using{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="text-background-50"
        >
          Next.js
        </a>{" "}
        &{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="text-background-50"
        >
          Tailwind CSS
        </a>
      </p>
    </div>
  );
};

export default Footer;
