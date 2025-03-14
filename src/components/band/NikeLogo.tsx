import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NikeLogo() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const logo = document.getElementById("nike-logo");
        if (logo) {
          const logoTop = logo.getBoundingClientRect().top;
          const triggerPoint = window.innerHeight * 0.8; 

          if (logoTop < triggerPoint) {
            setIsVisible(true);
          } else {
            setIsVisible(false); 
          }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="nike-logo" className="w-full h-72 mt-3 flex justify-center items-center ">
      <motion.img
        src="icons/nike-4-logo-svgrepo-com.svg"
        className="w-full h-full"
        alt="Nike logo"
        initial={{ opacity: 0}}
        animate={isVisible ? { opacity: 1} : { opacity: -1}}
        transition={{ duration:5 , ease: "easeOut" }}/>
    </div>
  );
}







