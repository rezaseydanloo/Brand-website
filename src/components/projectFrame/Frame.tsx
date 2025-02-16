import HomeBand from "../band/HomeBand";
import Navbar from "../navbar/Navbar";
import NewCollection from "../newCollection/NewCollectionFrame";
import NewCollectionTag from "../newCollection/newCollectionTag/NewCollectionTag";
import NewsBlock from "../News/NewsBlock";

import HomePoster from "../poster/HomePoster";


export default function Frame(){

    return(

        <div className=" h-full w-full flex flex-col items-center absolute bg-black overflow-auto relative">
            <Navbar />
            <HomePoster />
            <HomeBand />
            <NewCollectionTag />
            <NewCollection />
            <NewsBlock />
            
            
            
        </div>

    )
}