"use client";

import { useLanguage } from "@/context/lang-context";
import { ReactNode } from "react";
import React from "react";

export default function ClientLanguageWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const { language } = useLanguage();

  // Update html attributes using useEffect
  React.useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return <>{children}</>;
}
