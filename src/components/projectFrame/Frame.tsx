import Navbar from "../navbar/Navbar";
import HomePoster from "../poster/HomePoster";


export default function Frame(){

    return(
        <div className=" h-screen w-screen flex flex-col items-center bg-black overflow-auto">
            <Navbar />
            <HomePoster />
            

        </div>
    )
}