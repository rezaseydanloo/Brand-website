import { useState } from "react"
import "./navbar-css/HeartIcon.css"

export default function HeartIcon(){

    const [heartCount , setheartCount] = useState(0);
    const [heartIconPath , setheartIconpath] = useState("src/icons/heart-svgrepo-com.svg")

    const oncliclHandler=() : void=>{
        if (heartCount == 0){
            setheartCount(1);
            setheartIconpath("src/icons/heart-svgrepo-com.svg")
        }
        else{
            setheartCount(0);
            setheartIconpath("src/icons/heart2-svgrepo-com.svg")
        }
    }

    return(

        <div  className=" flex justify-center items-center absolute 
                          right-12 sm:right-12 md:right-12 lg:right-11 xl:right-12
                          duration-300
                          w-8 sm:w-9 md:w-9 lg:w-8 xl:w-9
                          h-8 sm:h-9 md:h-9 lg:h-8 xl:h-9">
            <img src={heartIconPath}
            alt="haert icon"
            className="w-9 h-9  shadow-white HeartAnimation caret-transparent"
            onClick={oncliclHandler}  />
        </div>
        
    )
}