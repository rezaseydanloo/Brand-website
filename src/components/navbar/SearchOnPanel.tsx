
import { motion } from "framer-motion";

export default function searchOnPanel(){

    const items = ["shose blazer" , "travis scot shose all " , "running shose" , "wrestling shose" , "footbal Shose nike" , "red shose" , "shose blazer" , "wrestling black shose"]


    return(
        <div className="w-full h-[196px] flex flex-wrap gap-x-2 gap-y-1 pb-1 pt-1 justify-center items-center ">

        {items.map((item, index) => (

          <motion.div
          key={index}
          className=" bg-zinc-300 border-2 border-white font-bold h-11 text-black w-fit  flex items-center pl-2 pr-2 rounded-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}>

          {item}

        </motion.div> ))}
      </div>
    )
}