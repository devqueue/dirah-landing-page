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
    <div className="relative overflow-hidden">
      <section className="layout-wrapper mb-8 mt-24 md:mb-14">
        <div className="flex flex-col justify-between rounded-sm bg-Turquoise lg:flex-row">
          <div className="flex flex-1 flex-col justify-center p-5 md:p-10">
            <h2 className="font-all-round-gothic text-2xl font-bold text-white md:text-3xl rtl:font-adelle-ara">
              {t.about.foundation}
            </h2>
            <p className="mt-5 text-base text-white md:text-xl ltr:font-adelle-ara rtl:font-ge-ss-two">
              {t.about.foundationText}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={"/images/about-foundation.png"}
              alt="About Foundation"
              width={500}
              height={300}
              quality={100}
              className="h-full w-full object-cover" // Changed to object-contain for tablet
            />
          </div>
        </div>
      </section>
      <div className="layout-wrapper text-Brown">
        <h2 className="font-all-round-gothic text-2xl font-bold md:text-3xl rtl:font-adelle-ara">
          {t.about.company}
        </h2>
        <p className="mt-5 font-adelle-ara text-base font-medium md:mt-10 md:text-xl rtl:font-ge-ss-two">
          {t.about.companyText}
        </p>
      </div>
      <Image
        src="/elem-2.png"
        className="-left-10 bottom-0 -z-10 hidden md:absolute md:block"
        width={150}
        height={600}
        // quality={100}
        alt=""
      />
    </div>
  );
};

export default AboutSection;
