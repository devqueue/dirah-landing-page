import Image from "next/image";
import React from "react";

interface goalsContentProps {
  icon: string;
  title: string;
  description: string;
}

const GoalsSection = () => {
  const goalsContent: goalsContentProps[] = [
    {
      icon: "/icons/team-line.svg",
      title: "6 Million",
      description: "Visitors more than a year",
    },
    {
      icon: "/icons/collage-line.svg",
      title: "170,000 m²",
      description: "Total area of rental property",
    },
    {
      icon: "/icons/building-line.svg",
      title: "83,000 m²",
      description: "Commercial Space",
    },
    {
      icon: "/icons/store-line.svg",
      title: "79,000 m²",
      description: "Retail Space",
    },
    {
      icon: "/icons/drag-drop-line.svg",
      title: "88,000 m²",
      description: "Office Space",
    },
    {
      icon: "/icons/home-5-line.svg",
      title: "17,000 m²",
      description: "Residential Space",
    },
  ];
  return (
    <>
      <section className="container mx-auto mt-10 grid w-full grid-cols-2 gap-y-10 font-adelle-ara md:grid-cols-3">
        {goalsContent.map((item, index) => (
          <div
            className={`flex flex-col gap-2 border-b border-Brown px-4 pb-8 md:px-0 ${
              index < 3 ? "" : "md:border-none"
            }`}
            key={item.title}
          >
            <Image src={item.icon} alt={item.title} width={42} height={42} />
            <h3 className="text-xl font-bold text-Brown md:text-2xl">
              {item.title}
            </h3>
            <p className="text-sm font-medium text-Brown md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default GoalsSection;
