"use client";

import { useLanguage } from "@/context/lang-context";
import Image from "next/image";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      className="z-10 flex items-center gap-2"
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
    >
      <span className="text-xl text-white">
        {language === "en" ? "عربي" : "EN"}
      </span>
      <Image
        src="globe.svg"
        // src={language === "en" ? "/arabic-lang.svg" : "/english-lang.svg"}
        alt="Language"
        width={24}
        height={24}
        className="h-[18px] w-[18px] text-white md:h-[24px] md:w-[24px]"
      />
    </button>
  );
};
