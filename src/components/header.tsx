import LogoIcon from "@/assets/LogoWhite.svg";
import MenuIcon from "@/assets/menu-icon.svg";
import LangIconEn from "@/assets/arabic-lang.svg";

export const Header = () => {
  return (
    <header className="flex justify-between p-6 md:p-16 absolute top-0 left-0 right-0 items-center">
      <LangIconEn classname="" />
      <LogoIcon />
      <MenuIcon />
    </header>
  );
};