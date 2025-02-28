import HomeBand from "../band/HomeBand";
import NavbarCrossroadsd from "../navbar/Navbar-Frames/NavbarCrossroads";
import HomePoster from "../poster/HomePoster";
import FamousFrame from "../ShopByFamous/FamousFrame";
import ShopByFamousTag from "../ShopByFamous/ShopByFamousTag";
import NewCollectionTag from "../newCollection/newCollectionTag/NewCollectionTag";
import NewCollection from "../newCollection/NewCollectionFrame";
import NewsTag from "../News/NewsTag";
import NewsBlock from "../News/NewsBlock";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import FooterFrameDesktop from "../footer/FooterFrameDesktop";
import NikeLogo from "../band/NikeLogo";
import { useState } from "react";

export default function Frame() {

  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <div className="bg-black h-full flex flex-col relative">
      
      <div className="w-full fixed top-0 left-0 z-50">
        <NavbarCrossroadsd isMenu={isMenu} setisMenu={setIsMenu} />
      </div>

      <div className={`lg:hidden ${isMenu ? 'block' : 'hidden'}`}>
        <HamburgerMenu isMenu={isMenu} setisMenu={setIsMenu} />
      </div>

      <div className="flex-1 w-full flex flex-col items-center bg-black mt-16">
        <HomePoster />
        <HomeBand />
        <ShopByFamousTag />
        <FamousFrame />
        <NewCollectionTag />
        <NewCollection />
        <NewsTag />
        <NikeLogo />
        <NewsBlock />
        <FooterFrameDesktop />
      </div>

    </div>
  );
}
