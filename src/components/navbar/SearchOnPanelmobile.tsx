
import { motion } from "framer-motion";

export default function searchOnPanelmobile(){

    const items = ["shose blazer"  , "wrestling shose" , "footbal Shose nike" , "red shose" , "shose blazer" , "wrestling black shose"]


    return(
        <div className="w-full h-[190px] flex flex-wrap gap-x-2 gap-y-1 pb-1 pt-1 justify-center items-center overflow-auto ">

        {items.map((item, index) => (

          <motion.div
          key={index}
          className=" bg-zinc-300 border-1 border-white font-bold h-11 text-black w-fit  flex items-center pl-2 pr-2 rounded-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}>

          {item}

        </motion.div> ))}
      </div>
    )
}