import HeartIcon from "../HeartIcon";
import PersonIcon from "../PersonIcon";
import SeachIcon from "../SearchIcon";
import NikeIcon from "../NikeIcon";
import "../navbar-css/ShinyText.css"
import "../navbar-css/Slider.css"

export default function NavbarDesktopFrame() {
  return (
    <header className="sticky top-0 bg-black w-[100%] h-[10%] flex items-center pl-2">
        
        <NikeIcon />

      <ul className="flex mt-2
                    ml-1 sm:ml-3 md:ml-5 lg:ml-7 xl:ml-8
                    md:space-x-3 lg:space-x-5 xl:space-x-7 caret-transparent duration-300 ">
        <li className="font-libre text-slate-500 mr-2 text-sm md:text-xl lg:text-2xl shiny-text duration-300">
          Shop  
          <div className="slider" >
          </div>  
        </li>

        <li className="font-libre  text-slate-500 mr-1 text-sm md:text-xl lg:text-2xl shiny-text duration-300">
          ShoppingCart
          <div className="slider " >
          </div>
          </li>

        <li className="font-libre  text-slate-500 mr-2 text-sm md:text-xl lg:text-2xl shiny-text duration-300">
          About
          <div className="slider" >
          </div>
          </li>

      </ul>

      <div className="w-[40%] pr-4 h-16  flex justify-end items-center ml-auto">
        <SeachIcon />
        <HeartIcon />
        <PersonIcon />
        
      </div>

      
    </header>
  );
}
