import Image from "next/image";
import React from "react";

const AssetsSection = () => {
  return (
    <div className="relative mt-8 flex min-h-full items-center justify-center px-4 py-12 md:mt-12 md:h-[90vh] md:px-0 md:py-0">
      <Image
        src="/images/asset-bg.png"
        alt="Asset background"
        fill
        className="z-[-1] object-cover brightness-50"
        priority
      />
      <div className="container z-10 mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
        <Card
          number="01"
          description="Contributing to developing the Qasr Al Hukom area into an integrated <strong>tourist destination</strong>."
        />
        <Card
          number="02"
          description="Enhancing the vitality of the city center and <strong> increasing its attractiveness.</strong>"
        />
        <Card
          number="03"
          description="Supporting the achievement of the Riyadh Strategy <strong> 2030 goals. </strong>"
        />
      </div>
    </div>
  );
};

interface CardProps {
  number: string;
  description: string;
}

const Card = ({ number = "01", description }: CardProps) => {
  return (
    <div className="font-adelle-ara">
      <div className="relative flex h-20 w-20 items-center justify-center md:h-28 md:w-28">
        <svg className="absolute inset-0" viewBox="0 0 100 100">
          <polygon
            points="50 0, 100 50, 50 100, 0 50"
            fill="transparent"
            className="stroke-Beign"
            strokeWidth="3"
          />
        </svg>
        <span className="relative z-10 text-2xl font-extrabold text-white md:text-3xl">
          {number}
        </span>
      </div>
      <p
        className="mt-3 text-lg text-white md:text-2xl"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default AssetsSection;
