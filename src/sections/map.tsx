"use client";

import React, { useState } from "react";
import Image from "next/image";

const MapSection = () => {
  const [selectedMarket, setSelectedMarket] = useState("Al Maigliah Markets");

  const marketImages: { [key: string]: string } = {
    "Al Maigliah Markets": "/images/map-1.png",
    "Al Tameer Wholesale Market": "/images/map-2.png",
    "Al Dirah Market": "/images/map-3.png",
  };

  const markets = [
    "Al Maigliah Markets",
    "Al Tameer Wholesale Market",
    "Al Dirah Market",
  ];

  return (
    <section className="container mx-auto my-20">
      <p className="mb-10 w-full font-adelle-ara text-xl font-medium text-Brown md:w-2/3 md:text-2xl">
        Three real estate assets in the Qasr Al Hukom area in the city of Riyadh
        are currently being managed and operated by Dirah Development Company,
        while ensuring that their identities are maintained:
      </p>
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <ButtonGroup
          markets={markets}
          selectedMarket={selectedMarket}
          setSelectedMarket={setSelectedMarket}
        />

        <Image
          src={marketImages[selectedMarket]}
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

const ButtonGroup = ({
  markets,
  selectedMarket,
  setSelectedMarket,
}: {
  markets: string[];
  selectedMarket: string;
  setSelectedMarket: (market: string) => void;
}) => {
  return (
    <div className="relative flex flex-col">
      {/* Vertical line */}
      {/* <div className="absolute left-[12px] top-[24px] bottom-[24px] w-[1px] bg-Brown" /> */}

      {markets.map((market, index) => (
        <div key={index} className="relative flex items-center">
          <button
            onClick={() => setSelectedMarket(market)}
            className={`flex w-fit items-center space-x-3 rounded-lg p-2 text-Brown transition-colors md:p-4 ${
              selectedMarket === market
                ? "font-semibold"
                : "group hover:text-Beign"
            }`}
          >
            <div className="flex w-14 justify-center">
              {selectedMarket === market ? (
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
            <span className="text-lg">{market}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default MapSection;
