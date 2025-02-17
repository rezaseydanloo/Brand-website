import HomeBand from "../band/HomeBand";
import Navbar from "../navbar/Navbar";
import NewCollection from "../newCollection/NewCollectionFrame";
import NewCollectionTag from "../newCollection/newCollectionTag/NewCollectionTag";
import NewsBlock from "../News/NewsBlock";
import NewsTag from "../News/NewsTag";
import HomePoster from "../poster/HomePoster";


export default function Frame(){

    return(

        <div className=" h-full w-full flex flex-col items-center bg-black overflow-auto relative">
            <Navbar />
            <HomePoster />
            <HomeBand />
            <NewCollectionTag />
            <NewCollection />
            <NewsTag />
            <NewsBlock />
            <div className="h-44 w-full bg-black">

            </div>
            
            
            
        </div>

    )
}