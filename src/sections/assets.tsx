"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "@/context/lang-context";
import { ar } from "@/locales/ar";
import { en } from "@/locales/en";

const AssetsSection = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en : ar;

  return (
    <div className="relative mt-8 flex h-screen min-h-full items-center justify-center overflow-hidden py-12 md:mt-12 md:h-[90vh] md:py-0">
      <Image
        src="/images/asset-bg.png"
        alt="Asset background"
        fill
        className="z-[-1] object-cover brightness-50"
        priority
      />
      <div className="z-10 grid grid-cols-1 gap-8 px-16 md:grid-cols-3 md:gap-10">
        {t.assets.map((asset) => (
          <Card key={asset.id} number={asset.id} description={asset.text} />
        ))}
      </div>
      <Image
        src="elem-3.svg"
        width={150}
        height={400}
        alt=""
        className={`absolute -bottom-3 ${language === "ar" ? "-left-20" : "-right-10"} md:-bottom-10 ${language === "ar" ? "-left-7 scale-x-[-1] transform" : "right-2"}`}
      />
    </div>
  );
};

interface CardProps {
  number: string;
  description: string;
}

const Card = ({ number = "01", description }: CardProps) => {
  return (
    <div className="font-adelle-ara rtl:font-ge-ss-two">
      <div className="relative flex h-20 w-20 items-center justify-center md:h-28 md:w-28">
        <svg className="absolute inset-0" viewBox="0 0 100 100">
          <polygon
            points="50 0, 100 50, 50 100, 0 50"
            fill="transparent"
            className="stroke-Beign"
            strokeWidth="3"
          />
        </svg>
        <span className="numerals relative z-10 text-2xl font-extrabold text-white md:text-3xl">
          {number}
        </span>
      </div>
      <p
        className="mt-3 text-lg text-white md:text-2xl"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default AssetsSection;
