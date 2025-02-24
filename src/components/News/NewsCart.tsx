import { useState } from "react";


export default function NewsCart(){

    const [isFocused, setIsFocused] = useState(false);
    

    return(
        <div tabIndex={0} 
             onMouseEnter={() => setIsFocused(true)}
             onMouseLeave={() => setIsFocused(false)}
            className={`w-[175px] Sm:w-[250px] md:w-[215px] xl:w-[350px] h-full text-xs xl:text-base overflow-y-auto
            ${isFocused ? "scrollbar-show" : "scrollbar-hide"} `}>
            <p className="text-white">The Name's Origin – The company was originally called Blue Ribbon Sports
            before rebranding as Nike in 1971. The name comes from the Greek goddess of victory. </p>
            <br />
            <p className="text-white">The Name's Origin – The company was originally called Blue Ribbon Sports
            before rebranding as Nike in 1971. The name comes from the Greek goddess of victory. </p>
            <br />
            <p className="text-white">The Name's Origin – The company was originally called Blue Ribbon Sports
            before rebranding as Nike in 1971. The name comes from the Greek goddess of victory. </p></div>
    )
}