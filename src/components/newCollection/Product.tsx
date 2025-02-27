import { useState } from "react";
import "./NewCollection-Css/Product.css";

type productObj = {
  path: string;
  ProductName: string;
  ProductText: string;
  Size: string;
  Color1: string;
  Color2: string;
  Color3: string;
  Color4: string;
};

export default function Product({path ,ProductName, ProductText, Size, Color1, Color2, Color3, Color4}: productObj) {

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className="relative sm:row-span-1 sm:col-span-1 lg:row-span-1 lg:col-span-1 
                 xl:row-span-1 xl:col-span-1 card cursor-pointer"
      onClick={() => setIsClicked(!isClicked)}>
      
      <div className="image-box">
        <img
          src={path}
          alt=""
          className={`w-full h-full object-cover transition-all duration-500
            hover:filter hover:grayscale hover:brightness-50 hover:blur-md
            ${isClicked ? "filter grayscale brightness-50 blur-md" : ""}`}
        />
      </div>

      <div
        className={`absolute inset-0  rounded-md bg-black/10 flex flex-col justify-center items-center text-white text-center transition-all duration-500
            opacity-0 scale-100
            hover:opacity-100 hover:scale-90
            ${isClicked ? "opacity-100 scale-90" : ""}
            lg:space-y-5 caret-transparent`}>


        <h1 className="text-xs md:text-3xl">{ProductName}</h1>
        <p className="text-xs md:text-2xl">Size: {Size}</p>

        <div className="w-full h-4 flex justify-center items-center space-x-1">
          <div className={`w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 ${Color1} mt-1`}></div>
          <div className={`w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 ${Color2} mt-1`}></div>
          <div className={`w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 ${Color3} mt-1`}></div>
          <div className={`w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 ${Color4} mt-1`}></div>
        </div>

      </div>
    </div>
  );
}
