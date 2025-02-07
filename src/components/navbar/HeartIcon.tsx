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

        <div  className=" w-14 h-14 flex justify-center items-center">
            <img src={heartIconPath}
            alt="haert icon"
            className="bg-black w-9 h-9 absolute right-16 shadow-white HeartAnimation caret-transparent"
            onClick={oncliclHandler}  />
        </div>
        
    )
}