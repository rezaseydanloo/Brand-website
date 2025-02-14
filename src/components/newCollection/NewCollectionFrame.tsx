import { useEffect, useState } from "react";
import NewCollectionMobileFrame from "./NewCollectionMobileFrame";
import NewCollectionAnotherFrame from "./NewCollectionAnotherFrame";

export default function NewCollectionFrame() {

    const [isSmallScreen,  setIsSmallScreen]  = useState<boolean>(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen( window.innerWidth < 1024);
        };
        checkScreenSize(); 
    }, []);

    if(isSmallScreen){
        return ( <NewCollectionMobileFrame /> );
    }
    else{
        return (<NewCollectionAnotherFrame /> );
    }
}