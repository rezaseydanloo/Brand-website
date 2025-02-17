
export default function FamousCart({path , mainCart , title} : {path:string , mainCart:boolean ,title:string}){

    return(
        <div className={`w-[32%] h-full bg-black }  
                        ${mainCart ? true : "scale-90 brightness-50"}    `}>
            <img src={path} alt="" className={`w-full h-[93%] object-cover ${path==="" ? " brightness-0 " : "shadow-[5px_5px_15px_rgba(255,255,255,0.1)]"}`} />
            <p className="w-full h-[7%] text-white text-xl flex justify-center items-center font-dancing"> {title} </p>
        </div>
    )
}