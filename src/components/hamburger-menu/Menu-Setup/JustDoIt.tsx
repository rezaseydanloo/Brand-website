import { motion } from "framer-motion";

export default function JustDoIt(){

    return(

        <p className="font-dancing inline ml-4 text-xl sm:text-xl md:text-2xl  font-bold">
          {Array.from("Just Do It").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.4, duration: 0.2 }}>
              {char}
            </motion.span>
          ))}
        </p>

    )
}