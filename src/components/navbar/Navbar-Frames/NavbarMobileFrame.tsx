import HeartIcon from "../HeartIcon";
import PersonIcon from "../PersonIcon";
import NikeIcon from "../NikeIcon";
import "../navbar-css/ShinyText.css"
import "../navbar-css/Slider.css"
import SeachIcon from "../SearchIcon";

export default function NavbarMobileFrame() {
  return (
    <header className="sticky top-0 w-[100%] h-[50px] flex items-center bg-black  ">
        
      <NikeIcon />
      <HeartIcon />
      <PersonIcon />
      <SeachIcon />
      
    </header>
  );
}
