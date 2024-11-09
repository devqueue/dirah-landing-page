"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/lang-context";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";

const MapSection = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en : ar;

  const [selectedMarket, setSelectedMarket] = useState(t.map.markets[0].name);

  useEffect(() => {
    setSelectedMarket(t.map.markets[0].name);
  }, [language, t.map.markets]);

  return (
    <section className="layout-wrapper py-10 md:py-20">
      <p className="mb-10 w-full font-adelle-ara text-xl font-medium text-Brown md:w-2/3 md:text-2xl rtl:font-ge-ss-two">
        {t.map.text}
      </p>
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <ButtonGroup
          markets={t.map.markets}
          selectedMarket={selectedMarket}
          setSelectedMarket={setSelectedMarket}
        />

        <Image
          src={
            t.map.markets.find((market) => market.name === selectedMarket)
              ?.image ?? "/map-1.svg"
          }
          alt={`${selectedMarket} map`}
          width={700}
          height={0}
          style={{ height: "auto" }}
          priority
        />
      </div>
    </section>
  );
};

interface Market {
  id: string;
  name: string;
  image: string;
}

const ButtonGroup = ({
  markets,
  selectedMarket,
  setSelectedMarket,
}: {
  markets: Market[];
  selectedMarket: string;
  setSelectedMarket: (market: string) => void;
}) => {
  return (
    <div className="relative flex flex-col gap-0 font-adelle-ara rtl:font-ge-ss-two">
      {markets.map((market, index) => (
        <div key={market.id} className="relative flex flex-col gap-0">
          <div className="relative z-10 flex items-center">
            <button
              onClick={() => setSelectedMarket(market.name)}
              className={`flex w-fit items-center gap-4 space-x-3 rounded-lg bg-transparent p-3 text-Brown transition-colors ${
                selectedMarket === market.name
                  ? "font-semibold"
                  : "group hover:text-Beign"
              }`}
            >
              <div className="flex w-14 justify-center">
                {selectedMarket === market.name ? (
                  <Image
                    src="/btn-active.svg"
                    alt="active"
                    width={56}
                    height={56}
                  />
                ) : (
                  <div className="h-4 w-4 rotate-45 bg-Brown group-hover:bg-Beign" />
                )}
              </div>
              <div className="md:text-base lg:text-xl rtl:text-xl">
                {market.name}
              </div>
            </button>
          </div>
          {index < markets.length - 1 && (
            <svg
              width="2"
              height="40"
              className="ml-[38px] sm:ml-[38px] md:ml-[38px] lg:ml-[39px] rtl:mr-[38px] rtl:md:mr-[38px] rtl:lg:mr-[39px]"
            >
              <line x1="1" y1="0" x2="1" y2="40" stroke="black" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default MapSection;
