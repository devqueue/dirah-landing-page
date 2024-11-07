"use client";

import { useLanguage } from "@/context/lang-context";
import Image from "next/image";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      className="z-10"
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
    >
      <Image
        src={language === "en" ? "/arabic-lang.svg" : "/english-lang.svg"}
        alt="Language"
        width={42}
        height={42}
        className="h-[42px] w-[42px] md:h-[90px] md:w-[90px]"
      />
    </button>
  );
};
