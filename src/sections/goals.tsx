"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "@/context/lang-context";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";

const GoalsSection = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en : ar;

  return (
    <section className="layout-wrapper relative mt-10 grid w-full grid-cols-2 gap-y-10 overflow-hidden !px-10 pb-10 md:grid-cols-3 rtl:font-ge-ss-two">
      {t.goals.map((item, index) => (
        <div
          className={`flex flex-col gap-2 border-b border-Brown px-4 pb-8 md:px-0 ${
            index < 3 || index >= t.goals.length - 3 ? "" : "md:border-none"
          }`}
          key={item.title}
        >
          <Image src={item.icon} alt={item.title} width={42} height={42} />
          <h3
            className={`numerals text-xl font-bold text-Brown md:text-2xl ${language === "ar" ? "font-ge-ss-two" : "font-all-round-gothic"}`}
          >
            {item.title}
          </h3>
          <p className="numerals text-sm font-semibold text-Brown md:text-base rtl:text-xl rtl:font-semibold">
            {item.description}
          </p>
        </div>
      ))}
      {language === "ar" ? (
        <Image
          src="/elem-4.png"
          width={120}
          height={150}
          className="absolute -left-10 bottom-0 z-10"
          alt=""
        />
      ) : (
        <Image
          src="/elem-4.png"
          width={120}
          height={150}
          className="absolute -right-10 bottom-0 z-10"
          alt=""
        />
      )}
    </section>
  );
};

export default GoalsSection;
