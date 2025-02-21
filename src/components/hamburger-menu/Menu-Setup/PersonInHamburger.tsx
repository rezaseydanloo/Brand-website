

export default function PersonInHamburger(){

    return(
        <div className="w-[96%] ml-[2%] h-16 md:h-20 bg-zinc-950 mt-2 flex border-2 border-dashed border-zinc-600 rounded-3xl">

            <div className="w-[75%] h-full flex pl-1 sm:pl-2 md:pl-3 items-center ">
                <p className="text-xl md:text-3xl flex flex-wrap"> reza seydanloo </p>
            </div>

            <div className="w-[25%] h-full  flex justify-center items-center">
                <img src="src\icons\person-circle-svgrepo-com.svg" className="w-full h-full p-2" alt="" />
            </div>
        </div>
    )
}