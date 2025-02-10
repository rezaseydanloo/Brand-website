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
                          right-10 sm:right-10 md:right-11 lg:right-11 xl:right-12
                          duration-300
                          w-6 sm:w-7 md:w-8 lg:w-8 xl:w-9
                          h-6 sm:h-7 md:h-8 lg:h-8 xl:h-9">
            <img src={heartIconPath}
            alt="haert icon"
            className="w-9 h-9  shadow-white HeartAnimation caret-transparent"
            onClick={oncliclHandler}  />
        </div>
        
    )
}