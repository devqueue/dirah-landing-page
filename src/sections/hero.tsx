import HeroImg from "@/assets/images/Hero.png";
import { Header } from "@/components/header";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="heroImg w-full">
        <div className="w-full min-h-screen bg-zinc-400">
          <Image
            className="w-full min-h-screen object-cover heroImg"
            src={HeroImg}
            alt="Hero Image"
          />
        </div>
        <Header />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white font-all-round-gothic font-bold text-[64px] text-center">
            Dirah Development Company
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
