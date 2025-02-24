import { motion } from "framer-motion";

export default function JordanLogo() {
  return (
    <div className="w-full h-[30%] mt-3 flex justify-center items-center">
      <motion.img
        src="src/icons/Hamburger-Menu/jordan-svgrepo-com.svg"
        className="w-[50%] h-[50%]"
        alt="Jordan logo"
        initial={{ x: -100, opacity: 0 }} // شروع از بیرون صفحه (چپ)
        animate={{ x: 0, opacity: 1 }} // حرکت به جای اصلی با نمایش کامل
        transition={{ duration: 1.5, ease: "easeOut" }} // تنظیم سرعت و نرمی انیمیشن
      />
    </div>
  );
}
