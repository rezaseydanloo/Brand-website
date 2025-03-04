import HeartIcon from "../HeartIcon";
import PersonIcon from "../PersonIcon";
import NikeIcon from "../NikeIcon";
import "../navbar-css/ShinyText.css"
import "../navbar-css/Slider.css"
import SeachIcon from "../SearchIcon";
import MenuIcon from "../MenuIcon";
import {MyContext} from "../../projectFrame/Frame"
import { useContext } from "react";


export default function NavbarMobileFrame({isMenu , setisMenu} : {isMenu : boolean ,setisMenu : React.Dispatch<React.SetStateAction<boolean>>}) {

  const {isSearchPanel} = useContext<{isSearchPanel:boolean}>(MyContext);

  return (
    <header className={`sticky top-0 bg-black w-[100%] ${isSearchPanel ? "h-[250px] duration-500 rounded-b-2xl" : "h-[50px] duration-500" } flex items-start pl-2`}>
        
      <NikeIcon />
      <div className="w-[80%] h-14 flex justify-end items-center relative ml-auto pr-3 space-x-1">
                
        <SeachIcon />
        <HeartIcon />
        <PersonIcon />
        <MenuIcon isMenu={isMenu} setisMenu={setisMenu} />
      </div>
      
      
    </header>
  );
}
