"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "@/context/lang-context";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";

const Footer = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en : ar;

  return (
    <footer className="bg-Brown p-4 font-adelle-ara md:p-0 rtl:font-ge-ss-two">
      <div className="layout-wrapper mx-auto flex h-full flex-col justify-between gap-20 py-20 md:flex-row md:gap-0">
        <div className="flex flex-col gap-6">
          {/* Title */}
          <div>
            <span className="text-Beign">{t.footer.contact}</span>
            <h2 className="font-adelle-ara text-3xl font-bold text-white">
              {t.footer.title}
            </h2>
          </div>
          {/* Input Fields */}
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder={t.footer.email.placeholder}
              className="w-full rounded border border-white bg-transparent px-3 py-2 text-white placeholder-white/50 focus:outline-none active:outline-none md:w-[400px]"
            />
            <input
              type="text"
              placeholder={t.footer.phone.placeholder}
              className="w-full rounded border border-white bg-transparent px-3 py-2 text-white placeholder-white/50 focus:outline-none active:outline-none md:w-[400px]"
            />
          </div>
          {/* Submit Button */}
          <button className="w-fit rounded bg-Beign px-10 py-2 text-white">
            {t.footer.submit}
          </button>
        </div>
        {/* Copyright container */}
        <div className="flex h-full flex-col justify-between gap-5 md:items-end md:gap-36">
          <Image
            src="/LogoWhite.svg"
            alt="footer-logo"
            width={150}
            height={150}
          />
          <span className="text-Beign">{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
