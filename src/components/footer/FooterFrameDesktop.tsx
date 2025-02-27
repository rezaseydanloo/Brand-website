import CenterBlock from "./CenterBlock";
import LeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";

export default function FooterFrameDesktop(){

    return(
        <footer className="w-full h-[550px] flex flex-wrap">
            <hr className="w-[90%] ml-[5%]"/>

            <LeftBlock />
            <CenterBlock />
            <RightBlock />

            <div className="w-full h-20 bg-slate-800">

            </div>

        </footer>   
    )
}