import LogoIcon from "@/assets/LogoWhite.svg";
import MenuIcon from "@/assets/menu-icon.svg";
import LangIconEn from "@/assets/arabic-lang.svg";
// import HeroImg from "@/assets/images/Hero.png";
// import Image from "next/image";
import React from "react";

// export const Hero = () => {
//   return (
//     <div className="">
//       {/* Hero Section */}
//       <div className=" relative heroImg w-full">
//         <div className="w-full min-h-screen bg-zinc-400">
//           <Image
//             className="w-full min-h-screen object-cover heroImg"
//             src={HeroImg}
//             alt="Hero Image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export const Header = () => {
//   return (
//     <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
//       <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
//       <div className="container">
//         <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
//           <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
//           <div>
//             <LogoIcon className="h-8 w-8" />
//           </div>
//           <div className="flex gap-4 items-center">
//             <MenuIcon className="md:hidden" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <LangIconEn className="h-8 w-8" />
          </div>
          <div>
            <LogoIcon className="h-8 w-8" />
          </div>
          <div className="flex gap-4 items-center">
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
