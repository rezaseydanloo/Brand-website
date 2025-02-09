import HorizontalPart from "./HorizontalPart";
import VerticalPart from "./VerticalPart";





export default function NewCollectionFrame(){
   
    return(
        
        <section className="w-9/12 h-[750px] grid grid-cols-8 grid-rows-8 gap-2 mt-3">
    
            <div className="row-span-5 col-span-3">
                <VerticalPart imgPath={"src/picture/Shoes/nike-just-do-it (1).jpg"} />
            </div>
        
            <div className="col-span-5 row-span-3">
                <HorizontalPart imgPath={"src/picture/Shoes/men-s-shoes-clothing-accessories.jpg"}/>
            </div>
        
            <div className="border flex justify-center items-center rounded-sm col-span-2 row-span-2">
            
            </div>
            
            <div className="row-span-5 col-span-3">
                <VerticalPart imgPath={"src/picture/shoes/nike-just-do-it (2).jpg"}/>
            </div>
        
            <div className=" col-span-5 row-span-3">
                <HorizontalPart imgPath={"src/picture/nike-just-do-it (3).jpg"}/>
            </div>

      </section>
        

    )
}