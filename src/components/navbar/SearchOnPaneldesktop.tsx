


import { motion } from "framer-motion";

export default function searchOnPanelDesktop(){

    const items = ["shose blazer" , "shose blazer" ,"shose blazer" ,"shose blazer" ,"shose blazer" ,"shose blazer" ,"shose blazer" ,"shose blazer" ,"shose blazer" ,"shose blazer" ,"shose blazer" ,"shose blazer" ,"shose blazer" ,"shose blazer" ,"travis scot shose all " , "running shose" , "wrestling shose" , "footbal Shose nike" , "red shose" , "shose blazer" , "wrestling black shose"]


    return(
        <div className="w-[70%] h-[175px] flex flex-wrap gap-x-2 gap-y-1 pt-1 justify-center items-center overflow-y-auto scrollbar-default shadow-sm pb-2  ">

        {items.map((item, index) => (

          <motion.div
          key={index}
          className=" bg-zinc-100 border-1 border-white font-bold h-11 text-black w-fit  flex items-center pl-2 pr-2 rounded-full hover:scale-80"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 0.8 , transition: { duration: 0.2 } } } >

          {item}

        </motion.div> ))}
      </div>
    )
}