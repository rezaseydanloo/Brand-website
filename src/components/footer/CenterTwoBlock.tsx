

export default function CenterTwoBlock(){

    return(
        <div className="w-[25%] h-[90%] grid grid-cols-1 grid-rows-12 pt-10 ">

        <p className="col-span-1 row-span-2 text-white font-lato cursor-default font-semibold"> Resources</p>

        <p className="col-span-1 row-span-1 text-zinc-400  hover:text-white font-lato cursor-pointer"> Gift Cards</p>
        <p className="col-span-1 row-span-1 text-zinc-400  hover:text-white font-lato cursor-pointer"> Find a Store</p>
        <p className="col-span-1 row-span-1 text-zinc-400  hover:text-white font-lato cursor-pointer"> Membership</p>
        <p className="col-span-1 row-span-1 text-zinc-400  hover:text-white font-lato cursor-pointer"> Nike Journal</p>
        <p className="col-span-1 row-span-1 text-zinc-400  hover:text-white font-lato cursor-pointer"> Site Feedback</p>

    </div>
    )
}