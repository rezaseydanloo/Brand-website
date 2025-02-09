import HorizontalPart from "./HorizontalPart";
import VerticalPart from "./VerticalPart";





export default function NewCollectionFrame(){
   
    return(
        
        <section className="w-9/12 h-[750px] grid grid-cols-8 grid-rows-8 gap-2 mt-3">
    
            <div className="border rounded-lg row-span-5 col-span-3">
                <VerticalPart imgPath={"src/picture/3cdd04c0-1e2d-4e27-8fb0-bdca6f54fd93.jfif"} />
            </div>
        
            <div className="border flex justify-center items-center rounded-sm col-span-5 row-span-3">
                <HorizontalPart imgPath={"src/picture/281150.jpg"}/>
            </div>
        
            <div className="border flex justify-center items-center rounded-sm col-span-2 row-span-2">
            
            </div>
            
            <div className="border flex justify-center items-center rounded-sm row-span-5 col-span-3">
                <VerticalPart imgPath={"src/picture/281150.jpg"}/>
            </div>
        
            <div className="border flex justify-center items-center rounded-sm col-span-5 row-span-3">
                <HorizontalPart imgPath={"src/picture/281150.jpg"}/>
            </div>

      </section>
        

    )
}