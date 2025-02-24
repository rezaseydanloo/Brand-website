import { useState } from "react";
import NewsCart from "./NewsCart";

export default function NewsBlock() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      tabIndex={0} 
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`w-[90%] h-[175px] sm:h-[200px] md:h-[210px] lg:h-[350px] xl:h-[350px]
                 overflow-x-auto p-2 transition-all duration-300 
                 ${isFocused ? "scrollbar-show" : "scrollbar-hide"}`}
    >
      <div className="flex space-x-4 w-max h-[100%]">
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
      </div>
    </div>
  );
}
