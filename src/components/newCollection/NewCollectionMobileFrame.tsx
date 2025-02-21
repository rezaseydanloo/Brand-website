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


            <Product path={"src/picture/nikeWeb/nike-just-do-it (2).jpg"}
                     ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                     Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>

            <Product path={"src/picture/nikeWeb/nike-just-do-it (2).jpg"}
                     ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                     Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>

            <Product path={"src/picture/nikeWeb/nike-just-do-it (2).jpg"}
                     ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                     Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>

            <Product path={"src/picture/nikeWeb/nike-just-do-it (2).jpg"}
                     ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                     Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>


            <Product path={"src/picture/nikeWeb/nike-just-do-it (2).jpg"}
                     ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                     Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>

            <Product path={"src/picture/nikeWeb/nike-just-do-it (2).jpg"}
                     ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                     Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>

            {isMore ? <Product path={"src/picture/nikeWeb/nike-just-do-it (2).jpg"}
                     ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                     Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>    : true}
            {isMore ?<Product path={"src/picture/nikeWeb/nike-just-do-it (2).jpg"}
                     ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                     Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>    : true}
            {isMore ?<Product path={"src/picture/nikeWeb/nike-just-do-it (2).jpg"}
                     ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                     Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>    : true}
                     
            <MoreOption isMore={isMore} setisMore={setisMore} />
            
      </section>
  );
}
