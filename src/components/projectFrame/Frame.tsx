import HomeBand from "../band/HomeBand";
import NavbarCrossroadsd from "../navbar/Navbar-Frames/NavbarCrossroads";
import Navbar from "../navbar/NavbarDesktopFrame";
import NewCollection from "../newCollection/NewCollectionFrame";
import NewCollectionTag from "../newCollection/newCollectionTag/NewCollectionTag";
import NewsBlock from "../News/NewsBlock";
import NewsTag from "../News/NewsTag";
import HomePoster from "../poster/HomePoster";
import FamousFrame from "../ShopByFamous/FamousFrame";
import ShopByFamousTag from "../ShopByFamous/ShopByFamousTag";

export default function Frame() {
    return (
      <div className="bg-black h-full flex flex-col">
    
        <div className="w-full fixed top-0 left-0 z-50">
          <NavbarCrossroadsd />
        </div>
  
        <div className="flex-1 w-full flex flex-col items-center bg-black overflow-y-auto mt-16">
          <HomePoster />
          <HomeBand />
          <ShopByFamousTag />
          <FamousFrame />
          <NewCollectionTag />
          <NewCollection />
          <NewsTag />
          <NewsBlock />
  
          <div className="h-44 w-full bg-black"></div>
        </div>
      </div>
    );
  }
  
  
  
