import CrossIcon from "./Menu-Setup/CrossIcon";
import JustDoIt from "./Menu-Setup/JustDoIt";
import PersonInHamburger from "./Menu-Setup/PersonInHamburger";


export default function HamburgerMenu({
  isMenu,
  setisMenu,
}: {
  isMenu: boolean;
  setisMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    
    <div className="fixed top-0 right-0 w-2/3 h-full bg-zinc-900
                  text-white z-50 shadow-lg transition-transform 
                    duration-500 transform translate-x-0 rounded-l-xl">

      <div className="w-full h-10 sm:h-12 md:h-14rounded-l-xl flex
                      justify-start items-center mt-1 sm:mt-2 md:mt-3 px-2">

        <CrossIcon isMenu={isMenu} setisMenu={setisMenu} />
        <JustDoIt />
      </div>
      <hr className="w-[90%] mt-2 md:mt-4 ml-[5%]" />
      <PersonInHamburger />


    </div>
  );
}
