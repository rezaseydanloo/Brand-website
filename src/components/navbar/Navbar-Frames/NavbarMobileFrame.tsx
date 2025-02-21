import HeartIcon from "../HeartIcon";
import PersonIcon from "../PersonIcon";
import NikeIcon from "../NikeIcon";
import "../navbar-css/ShinyText.css"
import "../navbar-css/Slider.css"
import SeachIcon from "../SearchIcon";
import MenuIcon from "../MenuIcon";

export default function NavbarMobileFrame({isMenu , setisMenu} : {isMenu : boolean ,setisMenu : React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <header className="sticky top-0 w-[100%] h-[50px] flex items-center bg-black  ">
        
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
