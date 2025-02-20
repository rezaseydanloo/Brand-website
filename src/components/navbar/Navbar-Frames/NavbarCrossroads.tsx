import { useEffect, useState } from "react"
import NavbarDesktopFrame from "../Navbar-Frames/NavbarDesktopFrame";
import NavbarMobileFrame from "./NavbarMobileFrame";



export default function NavbarCrossroadsd(){

    const [isDesktop,  setisDesktop]  = useState<boolean>(false);
    useEffect(() => {
        const checkScreenSize = () => {
            setisDesktop( window.innerWidth > 1024);
        };
        checkScreenSize(); 
    }, []);

    if(isDesktop){
        return(
            <NavbarDesktopFrame />
        ) 
    }
    else{
        return(
            <NavbarMobileFrame />
        )
    }
}