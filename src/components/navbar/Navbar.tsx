import HeartIcon from "./HeartIcon";
import PersonIcon from "./PersonIcon";

export default function Navbar() {
  return (
    <div className="relative w-9/12 h-[10%] flex items-center">
        
      <ul className="flex ml-14 md:space-x-3 lg:space-x-5 xl:space-x-7 caret-transparent">
        <li className="font-libre text-white mr-2 text-base md:text-xl lg:text-2xl">Shop</li>
        <li className="font-libre text-white mr-2 text-base md:text-xl lg:text-2xl">ShoppingCart</li>
        <li className="font-libre text-white care mr-2 text-base md:text-xl lg:text-2xl">About</li>
      </ul>

      <HeartIcon />
      <PersonIcon />

        


      
    
      
    </div>
  );
}
