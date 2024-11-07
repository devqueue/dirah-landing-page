"use client";

import Image from "next/image";
import React from "react";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { useLanguage } from "@/context/lang-context";

const AboutSection = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en : ar;

  return (
    <>
      <section className="mb-8 mt-16 px-4 md:mb-14 md:px-0">
        <div className="container mx-auto flex flex-col justify-between rounded-sm bg-Turquoise md:flex-row">
          <div className="flex flex-1 flex-col justify-center p-5 md:p-10">
            <h2 className="font-all-round-gothic text-2xl font-bold text-white md:text-3xl">
              {t.about.foundation}
            </h2>
            <p className="mt-5 font-adelle-ara text-base text-white md:text-xl">
              {t.about.foundationText}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={"/images/about-foundation.png"}
              alt="About Foundation"
              width={500}
              height={300}
              quality={100}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 text-Brown md:px-0">
        <h2 className="font-all-round-gothic text-2xl font-bold md:text-3xl">
          {t.about.company}
        </h2>
        <p className="mt-5 font-adelle-ara text-base font-medium md:mt-10 md:text-xl">
          {t.about.companyText}
        </p>
      </div>
    </>
  );
};

export default AboutSection;
