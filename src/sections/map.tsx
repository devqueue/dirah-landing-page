"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/lang-context";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";

const MapSection = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en : ar;

  const [selectedMarket, setSelectedMarket] = useState(t.map.markets[0].name);

  return (
    <section className="container mx-auto p-4 md:py-20">
      <p className="mb-10 w-full font-adelle-ara text-xl font-medium text-Brown md:w-2/3 md:text-2xl">
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
              ?.image || ""
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
    <div className="relative flex flex-col">
      {markets.map((market) => (
        <div key={market.id} className="relative z-10 flex items-center">
          <button
            onClick={() => setSelectedMarket(market.name)}
            className={`flex w-fit items-center space-x-3 rounded-lg p-2 text-Brown transition-colors md:p-4 ${
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
            <span className="text-lg">{market.name}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default MapSection;
