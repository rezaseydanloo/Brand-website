import HomeBand from "../band/HomeBand";
import Navbar from "../navbar/Navbar";
import NewCollection from "../newCollection/NewCollectionFrame";

import HomePoster from "../poster/HomePoster";


export default function Frame(){

    return(

        <div className=" h-full w-full flex flex-col items-center bg-black overflow-auto relative">
            <Navbar />
            <HomePoster />
            <HomeBand />
            <NewCollection />
            
        </div>

    )
}