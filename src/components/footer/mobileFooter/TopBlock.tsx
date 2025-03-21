import { useState } from "react";

export default function TopBlock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`grid grid-cols-2 w-full overflow-hidden duration-700 pl-[5%] cursor-pointer 
                        ${isOpen ? "h-[49%]" : "h-[15%]"}`}
      onClick={() => setIsOpen(!isOpen)} // change display status 
      tabIndex={0}
      onBlur={()=> setIsOpen(false)}
    >
      <p className="col-span- text-white font-lato cursor-pointer font-semibold bg-black z-10">
        Resources
      </p>
      <div className="h-full w-full flex justify-end">
        <img
          src={`${
            isOpen
              ? "icons/more option icon/top-arrow-svgrepo-com.svg"
              : "icons/more option icon/bottom-arrow-svgrepo-com.svg"
          }`}
          alt="Aroow"
          className="h-[100%] w-[10%] mr-10"
        />
      </div>

      {[
        "Gift Cards",
        "Find a Store",
        "Membership",
        "Nike Journal",
        "Site Feedback",
      ].map((item, index) => (
        <p
          key={index}
          className={`transition-all duration-500 ease-in-out text-zinc-400 cursor-pointer hover:text-white font-lato 
                        ${
                          isOpen
                            ? "opacity-100 max-h-[20px]"
                            : "opacity-0 max-h-0"
                        }`}
          style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
