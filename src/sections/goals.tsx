"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "@/context/lang-context";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";

// interface GoalContentProps {
//   icon: string;
//   title: string;
//   description: string;
// }

const GoalsSection = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en : ar;

  return (
    <section className="container mx-auto mt-10 grid w-full grid-cols-2 gap-y-10 p-4 pb-10 font-adelle-ara md:grid-cols-3 rtl:font-ge-ss-two">
      {t.goals.map((item, index) => (
        <div
          className={`flex flex-col gap-2 border-b border-Brown px-4 pb-8 md:px-0 ${
            index < 3 ? "" : "md:border-none"
          }`}
          key={item.title}
        >
          <Image src={item.icon} alt={item.title} width={42} height={42} />
          <h3 className="numerals text-xl font-bold text-Brown md:text-2xl">
            {item.title}
          </h3>
          <p className="numerals text-sm font-medium text-Brown md:text-base">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default GoalsSection;
