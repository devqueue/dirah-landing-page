import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <section className="my-16 md:my-36 px-4 md:px-0">
        <div className="bg-Turquoise container mx-auto rounded-sm flex flex-col md:flex-row justify-between">
          <div className="flex flex-col p-5 md:p-10 justify-center flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-all-round-gothic">
              About the Foundation
            </h2>
            <p className="text-base md:text-xl font-adelle-ara text-white mt-5">
              Dirah Development Company was established through an MOU signed in
              May 2023 under the patronage of His Highness Prince Faisal bin
              Abdul Aziz bin Ayyaf. The agreement, between Riyadh Holding
              Company and Riyadh Development Company, serves as a cornerstone
              for enhancing mutual cooperation, leading to the launch of several
              investment initiatives aimed at developing the quality of services
              in the Dirah area.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={"/images/about-foundation.png"}
              alt="About Foundation"
              width={500}
              height={300}
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className="container mx-auto text-Brown px-4 md:px-0">
        <h2 className="font-bold text-2xl md:text-3xl font-all-round-gothic">
          About the Company
        </h2>
        <p className="text-base md:text-xl mt-5 md:mt-10 font-adelle-ara font-medium">
          Dirah Development Company specializes in development and asset
          management, focusing on the development and management of real estate
          projects and destinations in the heart of the city of Riyadh. Dirah
          Development Company aims to become a leading entity in asset
          development and management, supporting the urban and economic growth
          of Riyadh in the following ways:
        </p>
      </div>
    </>
  );
};

export default AboutSection;
