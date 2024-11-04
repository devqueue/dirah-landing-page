import HeroImg from "@/assets/images/Hero.png";
import { Header } from "@/components/header";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className=" relative heroImg w-full">
        <div className="w-full min-h-screen bg-zinc-400">
          <Image
            className="w-full min-h-screen object-cover heroImg"
            src={HeroImg}
            alt="Hero Image"
          />
        </div>
        <Header />
      </div>
    </div>
  );
};

export default Hero;
