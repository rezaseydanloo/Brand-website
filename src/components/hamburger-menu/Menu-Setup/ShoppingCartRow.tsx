import { motion } from "framer-motion";

export default function ShoppingCartRow(){

    return(
        <motion.div
            className="w-[97%] ml-[1.5%] h-[8%] mt-2 sm:mt-3 md:mt-4 flex items-center bg-zinc-950 rounded-sm "
            whileTap={{ scale: 0.9 }} >

            <p className=" font-lato h-full flex items-center w-[80%] text-lg sm:text-2xl md:text-3xl pl-4"> Shopping cart </p>

            <img
                src="src\icons\Hamburger-Menu\shopping-cart-svgrepo-com.svg"
                className="w-[25%] sm:w-[20%] h-[100%] p-2 sm:p-3 md:p-4 hover:scale-75 duration-500"
                alt="shopping cat icon"/>

        </motion.div>
    )
}