import Product from "./Product";
import MoreOption from "./MoreOption";
import { useState } from "react";

export default function NewCollectionMobileFrame() {

  const[isMore , setisMore] = useState <number>(0);
    
  return (
      <section
         
        className={`grid gap-2 p-2 
                    xl:grid-cols-4 xl:grid-rows-2
                    lg:grid-cols-4 lg:grid-rows-2                         
                    ${isMore==1 ? " grid-cols-3 grid-rows-3 w-[90%] sm:w-[90%] md:w-[90%]" :
                                  " grid-cols-3 grid-rows-2 w-[90%] sm:w-[90%] md:w-[90%]"}                         
                    transition-[grid-template-columns]  duration-500 overflow-auto`}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            {isMore ?  <div> <Product /> </div> : true}
            {isMore ?  <div> <Product /> </div> : true}
            {isMore ?  <div> <Product /> </div> : true}
            <MoreOption isMore={isMore} setisMore={setisMore} />
      </section>
  );
}
