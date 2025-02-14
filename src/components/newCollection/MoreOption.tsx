import { useState } from "react"


export default function MoreOption({isMore , setisMore} : {isMore :number , setisMore :React.Dispatch<React.SetStateAction<number>> }){


    const iconPath : string[] = ["src/icons/more option icon/bottom-arrow-svgrepo-com.svg",
                        "src/icons/more option icon/top-arrow-svgrepo-com.svg"]
    const [ArowPath , setArowPath] = useState<string>("src/icons/more option icon/bottom-arrow-svgrepo-com.svg")

    const onClickHandler = ()=>{
        if(isMore==0){
            setArowPath(iconPath[1])
            setisMore(1)
        }
        else{
            setArowPath(iconPath[0])
            setisMore(0)
        }
    }
    return(
        <div className="w-6 h-6 bg-transparent">
            <img src={ArowPath} alt="more oprion arrow "
                    className="w-full h-full"
                    onClick={onClickHandler} />
        </div>
    )
}