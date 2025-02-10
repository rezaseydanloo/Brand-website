import "./navbar-css/SearchSlider.css"

export default function SeachIcon() {
    
  return (
    <div className="flex justify-center items-center absolute 
                    search-zone 
                    right-[70px] sm:right-[75px] md:right-[75px] lg:right-[80px] xl:right-[90px]
                    w-20 sm:w-64 md:w-48 lg:w-80 xl:w-80 
                    h-6 sm:h-7 md:h-8 lg:h-8 xl:h-9">
      <input type="text" className="rounded-3xl outline-none absolute
                    right-7 sm:right-8 md:right-9 lg:right-10 xl:right-11 
                    shiny-text border search-slider" />
      <img
        src="src\icons\search-svgrepo-com.svg"
        alt="person icon"
        className="inline
                  w-6 sm:w-7 md:w-8 lg:w-8 xl:w-9
                  h-6 sm:h-7 md:h-8 lg:h-8 xl:h-9
                  duration-300
                  caret-transparent absolute right-0 hover:scale-75 duration-500 "/>
    </div>
  );
}
