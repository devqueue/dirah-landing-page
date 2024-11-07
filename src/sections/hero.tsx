"use client";

import { Header } from "@/components/header";
import { useLanguage } from "@/context/lang-context";
import { ar } from "@/locales/ar";
import { en } from "@/locales/en";
import Image from "next/image";

export const Hero = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en : ar;

  return (
    <div>
      <div className="heroImg w-full">
        <div className="min-h-screen w-full bg-zinc-400">
          <Image
            src="/images/Hero.png"
            className="heroImg min-h-screen w-full object-cover"
            alt="Hero Image"
            width={1920}
            height={1080}
            priority
          />
        </div>
        <Header />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center font-all-round-gothic text-4xl font-bold text-white lg:text-[64px]">
            {t.hero.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
