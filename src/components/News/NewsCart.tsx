import { useState } from "react";


export default function NewsCart({newtext} : {newtext:string}){

    const [isFocused, setIsFocused] = useState(false);
    

    return(
        <div tabIndex={0} 
             onMouseEnter={() => setIsFocused(true)}
             onMouseLeave={() => setIsFocused(false)}
            className={`w-[175px] Sm:w-[250px] md:w-[215px] xl:w-[350px] h-full text-xs xl:text-base overflow-y-auto
            ${isFocused ? "scrollbar-show" : "scrollbar-hide"} `}>
                <pre className="text-white font-lato text-wrap flex">
                    {newtext}
                </pre>
            </div>
    )
}