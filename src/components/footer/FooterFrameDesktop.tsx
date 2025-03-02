
import LeftBlock from "./LeftBlock";
import CenteraOneBlock from "./CenterOneBlock";
import CenterTwoBlock from "./CenterTwoBlock";
import RightBlock from "./RightBlock";
import BottomLayer from "./BottomLayer";

export default function FooterFrameDesktop(){

    return(
        <footer className="w-full h-[550px] flex flex-wrap caret-transparent">
            <hr className="w-[90%] ml-[5%]"/>

            <LeftBlock />
            <CenteraOneBlock />
            <CenterTwoBlock />
            <RightBlock />
            <BottomLayer />
            

        </footer>   
    )
}