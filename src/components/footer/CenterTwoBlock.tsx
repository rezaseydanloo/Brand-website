

export default function CenterTwoBlock(){

    return(
        <div className="w-[25%] h-[90%] grid grid-cols-1 grid-rows-12 pt-10 ">

        <p className="col-span-1 row-span-2 text-white font-lato cursor-default font-semibold"> Company</p>

        <p className="col-span-1 row-span-1 text-zinc-400  hover:text-white font-lato cursor-pointer"> About Nike</p>
        <p className="col-span-1 row-span-1 text-zinc-400  hover:text-white font-lato cursor-pointer"> News</p>
        <p className="col-span-1 row-span-1 text-zinc-400  hover:text-white font-lato cursor-pointer"> Careers</p>
        <p className="col-span-1 row-span-1 text-zinc-400  hover:text-white font-lato cursor-pointer"> Investors</p>
        <p className="col-span-1 row-span-1 text-zinc-400  hover:text-white font-lato cursor-pointer"> Purpose</p>
        <p className="col-span-1 row-span-1 text-zinc-400  hover:text-white font-lato cursor-pointer"> Sustainability</p>

    </div>
    )
}