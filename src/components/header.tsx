import Image from "next/image";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  return (
    <header className="layout-wrapper absolute left-0 right-0 top-0 mx-auto flex items-center justify-between">
      <div className="">
        <button>
          <Image
            src={"/menu-icon.svg"}
            alt="Menu"
            width={24}
            height={24}
            className="h-[24px] w-[24px] md:h-[32px] md:w-[32px]"
          />
        </button>
      </div>
      <Image
        src={"/LogoWhite.svg"}
        alt="Logo"
        width={100}
        height={100}
        className="h-[90px] w-[90px] md:h-[140px] md:w-[140px]"
      />
      <div className="z-10">
        <LanguageSwitcher />
      </div>
    </header>
  );
};
