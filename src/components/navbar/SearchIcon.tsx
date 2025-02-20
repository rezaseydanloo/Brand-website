import { useState } from "react";

export default function SeachIcon() {

  const [SearchOption , setSearchOption] = useState<boolean>(true)

  const onClickhandler = ()=> {
    if (SearchOption){
      setSearchOption(false)
    }
    else{
      setSearchOption(true)
    }
  }
    
  return (
    <div className="flex justify-center items-center absolute 
                    search-zone 
                    right-[86px] sm:right-[86px] md:right-[86px] lg:right-[86px] xl:right-[86px]
                    w-44 sm:w-72 md:w-72 lg:w-80 xl:w-80 
                    h-8 sm:h-8 md:9 lg:h-8 xl:h-9">
                      
      <input type="text" className={`rounded-3xl outline-none absolute
                    right-7 sm:right-8 md:right-9 lg:right-10 xl:right-11 
                    shiny-text border ${SearchOption ? "w-0 duration-500" : "w-[70%] duration-500"} `} />
      <img
        src="src\icons\search-svgrepo-com.svg"
        alt="person icon"
        onClick={onClickhandler}
        className="inline
                  w-6 sm:w-7 md:w-8 lg:w-8 xl:w-9
                  h-6 sm:h-7 md:h-8 lg:h-8 xl:h-9
                  caret-transparent absolute right-0 hover:scale-75 duration-500 "/>
    </div>
  );
}
