import NavbarDesktopFrame from "../Navbar-Frames/NavbarDesktopFrame";
import NavbarMobileFrame from "./NavbarMobileFrame";

export default function NavbarCrossroadsd({ isMenu, setisMenu }: { isMenu: boolean, setisMenu: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className="w-full">
            
            <div className="hidden lg:block">
                <NavbarDesktopFrame />
            </div>

            
            <div className="lg:hidden">
                <NavbarMobileFrame isMenu={isMenu} setisMenu={setisMenu} />
            </div>
        </div>
    );
}
