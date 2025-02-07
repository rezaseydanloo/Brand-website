import Horizontal from "./Horizontal";
import VerticalPart from "./VerticalPart";



export default function NewCollectionFrame(){
   
    return(
        
        <section className="w-9/12 h-[750px] grid grid-cols-8 grid-rows-8 gap-2 mt-2">
    
            <div className="border flex justify-center items-center rounded-sm row-span-5 col-span-3">
            1 + 4
            </div>
        
            <div className="border flex justify-center items-center rounded-sm col-span-5 row-span-3">
            2 + 3
            </div>
        
            <div className="border flex justify-center items-center rounded-sm col-span-2 row-span-2">
            5
            </div>
            
            <div className="border flex justify-center items-center rounded-sm row-span-5 col-span-3">
            6 + 9
            </div>
        
            <div className="border flex justify-center items-center rounded-sm col-span-5 row-span-3">
            7 + 8
            </div>

      </section>
        

    )
}