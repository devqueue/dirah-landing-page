import Image from "next/image";
import React from "react";

const footer = () => {
  return (
    <footer className="mt-10 bg-Brown font-adelle-ara">
      <div className="container mx-auto flex h-full flex-col justify-between gap-20 py-20 md:flex-row md:gap-0">
        <div className="flex flex-col gap-3">
          <div>
            <span className="text-Beign">CONTACT</span>
            <h2 className="mb-10 font-adelle-ara text-3xl font-bold text-white">
              Contact & Inquiries
            </h2>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded border border-white bg-transparent px-3 py-2 text-white placeholder-white/50 focus:outline-none active:outline-none md:w-[400px]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full rounded border border-white bg-transparent px-3 py-2 text-white placeholder-white/50 focus:outline-none active:outline-none md:w-[400px]"
          />
          <button className="w-fit rounded bg-Beign px-10 py-2 text-white">
            Submit
          </button>
        </div>
        <div className="flex h-full flex-col justify-between gap-5 md:items-end md:gap-36">
          <Image
            src="/LogoWhite.svg"
            alt="footer-logo"
            width={150}
            height={150}
          />
          <span className="text-Beign">
            Copyright 2024. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
