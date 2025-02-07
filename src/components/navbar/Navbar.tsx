import HeartIcon from "./HeartIcon";
import PersonIcon from "./PersonIcon";
import SeachIcon from "./SearchIcon";
import "./navbar-css/ShinyText.css"
import "./navbar-css/Slider.css"

export default function Navbar() {
  return (
    <div className="relative w-9/12 h-[10%] flex items-center  ">
        
      <ul className="flex ml-14 md:space-x-3 lg:space-x-5 xl:space-x-7 caret-transparent ">

        <li className="font-libre bg-slate-700  text-slate-500 mr-2 text-base md:text-xl lg:text-2xl shiny-text">
          Shop
          <div className="slider" >
          </div>
        </li>

        <li className="font-libre  text-slate-500 mr-2 text-base md:text-xl lg:text-2xl shiny-text">
          ShoppingCart
          <div className="slider" >
          </div>
          </li>

        <li className="font-libre  text-slate-500 bg-slate-300 mr-2 text-base md:text-xl lg:text-2xl shiny-text">
          About
          <div className="slider" >
          </div>
          </li>

      </ul>

      <HeartIcon />
      <PersonIcon />
      <SeachIcon />

        


      
    
      
    </div>
  );
}
