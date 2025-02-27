
import LeftBlock from "./LeftBlock";
import CenteraOneBlock from "./CenterOneBlock";
import CenterTwoBlock from "./CenterTwoBlock";
import RightBlock from "./RightBlock";

export default function FooterFrameDesktop(){

    return(
        <footer className="w-full h-[550px] flex flex-wrap caret-transparent">
            <hr className="w-[90%] ml-[5%]"/>

            <LeftBlock />
            <CenteraOneBlock />
            <CenterTwoBlock />
            <RightBlock />

            <div className="w-full h-20 pb-10 bg-black flex space-x-6 pl-[5%]">

                <p className="inline font-lato text-zinc-400  hover:text-white"> Guides</p>
                <p className="inline font-lato text-zinc-400  hover:text-white cursor-pointer"> Terms of Sale</p>
                <p className="inline font-lato text-zinc-400  hover:text-white cursor-pointer"> Terms of Use</p>
                <p className="inline font-lato text-zinc-400  hover:text-white cursor-pointer"> Nike Privacy Policy</p>
                <p className="inline font-lato text-zinc-400  hover:text-white cursor-pointer"> Your Privacy Choices</p>
                <p className="inline font-lato text-zinc-400  hover:text-white cursor-pointer"> CA Supply Chains Act</p>

            </div>

        </footer>   
    )
}