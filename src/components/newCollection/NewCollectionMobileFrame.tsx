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


            <Product path={"src/picture/NewCollection/kobe-mens-max90-basketball-t-shirt-J7RdC2.jfif"}
                            ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                            Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>
            
            <Product path={"src/picture/NewCollection/sportswear-phoenix-fleece-womens-over-oversized-pullover-hoodie-Kqx9H3.jfif"}
                            ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                            Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>
            
             <Product path={"src/picture/NewCollection/sportswear-tech-fleece-womens-high-waisted-mini-skirt-82MtjL.jfif"}
                            ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                            Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>                      
            
            <Product path={"src/picture/NewCollection/W+NSW+PHNX+FLC+OOS+PO+HOODIE.jpg"}
                           ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                           Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>
            
            <Product path={"src/picture/NewCollection/AIR+JORDAN+4+RM.jpg"}
                           ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                           Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>

            <Product path={"src/picture/NewCollection/AIR+JORDAN+4+RM.jpg"}
                           ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                           Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>

            {isMore ? <Product path={"src/picture/NewCollection/jordan-brooklyn-fleece-mens-pullover-hoodie-dGf5LT.jfif"}
                           ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                           Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>    : true}
            {isMore ?<Product path={"src/picture/NewCollection/pro-womens-3-shorts-4HBtrm.jfif"}
                           ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                           Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>    : true}
            {isMore ?<Product path={"src/picture/NewCollection/image.jpg"}
                           ProductName="Nike Shoze" ProductText="" Size="L , XL , XXL "
                          Color1="bg-black" Color2="bg-red-500" Color3="bg-blue-500" Color4="bg-green-500"/>    : true}
                     
            <MoreOption isMore={isMore} setisMore={setisMore} />
            
      </section>
  );
}
