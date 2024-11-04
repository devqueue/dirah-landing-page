import LogoIcon from "@/assets/LogoWhite.svg";
import React from "react";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <LogoIcon className="h-8 w-8" />
    </header>
  );
};

export default Header;
