import { useState } from "react";
import AboutRow from "./Menu-Setup/AboutRow";
import CrossIcon from "./Menu-Setup/CrossIcon";
import JustDoIt from "./Menu-Setup/JustDoIt";
import PersonInHamburger from "./Menu-Setup/PersonInHamburger";
import ShoppingCartRow from "./Menu-Setup/ShoppingCartRow";
import ShopRow from "./Menu-Setup/ShopRow";
import "../navbar/navbar-css/ShinyText.css";
import JordanLogo from "./Menu-Setup/JordanLogo";

export default function HamburgerMenu({
  isMenu,
  setisMenu,
}: {
  isMenu: boolean;
  setisMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleLogoutClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <div
      className={`fixed top-0 right-0 w-2/3 h-full bg-zinc-900 flex flex-col 
                  text-white z-50 shadow-lg transition-transform 
                    duration-500 transform translate-x-0 rounded-l-sm `}>
      <div
        className="w-full h-10 sm:h-12 md:h-14 rounded-l-xl flex
                      justify-start items-center mt-1 sm:mt-2 md:mt-3 px-2">

        <CrossIcon isMenu={isMenu} setisMenu={setisMenu} />
        <JustDoIt />
      </div>

      <hr className="w-[90%] mt-2 md:mt-4 ml-[5%]" />
      <PersonInHamburger />
      <ShopRow />
      <ShoppingCartRow />
      <AboutRow />

      
      <p  className={` font-lato ml-[5%] w-[100px] md:w-[125px] mt-4 font-bold pl-2 rounded-xl text-xl sm:text-2xl md:text-3xl duration-300
        ${  isClicked ? "bg-red-600 text-zinc-900 shadow-lg shadow-red-900 border border-red-800" : "text-red-500 border border-zinc-900"}`}
        onClick={handleLogoutClick}>
        Logout </p>

      <JordanLogo />
    </div>
  );
}
