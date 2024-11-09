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
          <h1
            className={`text-center text-4xl font-semibold text-white lg:text-[64px] ${language === "ar" ? "font-adelle-ara" : "font-all-round-gothic"}`}
          >
            {t.hero.title}
          </h1>
        </div>
      </div>

      <Image
        alt="elem1"
        src="/elem-1.svg"
        width={600}
        height={300}
        className="absolute -bottom-48 left-1/2 hidden w-[300px] -translate-x-1/2 md:block md:w-[400px] lg:w-[500px] xl:w-[600px]"
      />
      <Image
        alt="elem1 mobile"
        src="/elem-1-mobile.svg"
        width={300}
        height={150}
        className="absolute -bottom-32 left-1/2 w-[300px] -translate-x-1/2 md:hidden"
      />
    </div>
  );
};

export default Hero;
