import BottomBlock from "./BottomBlock";
import CenterOneBlock from "./CenterOneBlock";
import CenterTwoBlock from "./CenterTwoBlock";
import TopBlock from "./TopBlock";


export default function FooterFrameMobile(){

    return(
        
            <div className="w-full h-[400px] mt-10 ">
                <hr className="w-[90%] ml-[5%] mb-5 " />
                <TopBlock />
                <CenterOneBlock />
                <CenterTwoBlock />
                <BottomBlock />

            </div>
        
    )
}