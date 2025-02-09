import "./navbar-css/SearchSlider.css"

export default function SeachIcon() {
    
  return (
    <div className="flex justify-center items-center absolute right-32 w-56 h-14 search-zone">
      <input type="text" className="rounded-3xl outline-none  absolute right-12 shiny-text border search-slider" />
      <img
        src="src\icons\search-svgrepo-com.svg"
        alt="person icon"
        className="inline w-10 h-10 caret-transparent absolute right-0 hover:scale-75 duration-500 "/>
    </div>
  );
}
