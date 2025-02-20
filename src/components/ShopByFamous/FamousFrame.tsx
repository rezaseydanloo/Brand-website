import { useState } from "react";
import LeftArow from "./Arows/LeftArow";
import RightArow from "./Arows/RightArow";
import FamousCart from "./FamousCart";
import { tr } from "framer-motion/client";

export default function FamousFrame() {
  const [Index, setIndex] = useState(2); // مقدار Index در state ذخیره شده 

  const PathArraye: { pathImg: string; title: string }[] = [
    { pathImg: "", title: "" },
    { pathImg: "src/picture/Famous/nike-just-do-it (2).jpg", title: "Kevin Durant" },
    { pathImg: "src/picture/Famous/nike-just-do-it (3).jpg", title: "Image 3" },
    { pathImg: "src/picture/Famous/nike-just-do-it (4).jpg", title: "Image 4" },
    { pathImg: "src/picture/Famous/nike-just-do-it (5).jpg", title: "Image 5" },
    { pathImg: "src/picture/Famous/nike-just-do-it (6).jpg", title: "Lebron James" },
    { pathImg: "src/picture/Famous/nike-just-do-it (7).jpg", title: "Image 7" },
    { pathImg: "", title: "" }
  ];

  const ShiftRight = (): void => {
    if (Index < PathArraye.length - 1) {
      setIndex(Index + 1); 
    }
  };

  const ShiftLeft = (): void => {
    if (Index > 2) {
      setIndex(Index - 1);
      console.log(PathArraye.length)
    }
  };

  return (
    <div className="w-[90%] h-[660px] bg-black">
      <div className="flex w-[100%] h-[580px] bg-black space-x-6 justify-center">
        {window.innerWidth < 640 ? <FamousCart path={PathArraye[Index - 1].pathImg} title={PathArraye[Index - 1].title}  mainCart={true}/> :true}
        {window.innerWidth > 640 && window.innerWidth <1024 ? <FamousCart path={PathArraye[Index - 2].pathImg} title={PathArraye[Index - 2].title}  mainCart={false}/> :true}
        {window.innerWidth > 640 && window.innerWidth <1024? <FamousCart path={PathArraye[Index - 1].pathImg} title={PathArraye[Index - 1].title}  mainCart={true}/>:true}
        {window.innerWidth >1024 ? <FamousCart path={PathArraye[Index - 2].pathImg} title={PathArraye[Index - 2].title}  mainCart={false}/> :true}
        {window.innerWidth >1024 ? <FamousCart path={PathArraye[Index - 1].pathImg} title={PathArraye[Index - 1].title}  mainCart={true}/>:true}
        {window.innerWidth >1024 ? <FamousCart path={PathArraye[Index].pathImg}  title={PathArraye[Index].title}         mainCart={false}/>:true}
      </div>
      <div className="w-[30%] h-[80px] bg-black flex justify-center items-center space-x-4">
        <LeftArow Leftarrow={ShiftLeft} Index={Index}  />
        <RightArow Rightarrow={ShiftRight} Index={Index} pathArrayeSize={PathArraye.length}/>
      </div>
    </div>
  );
}
