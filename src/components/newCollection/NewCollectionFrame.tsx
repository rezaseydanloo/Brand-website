import { useState, useEffect } from "react";
import NewCollectionMobileFrame from "./NewCollectionMobileFrame";
import NewCollectionAnotherFrame from "./NewCollectionAnotherFrame";

export default function NewCollectionFrame() {
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };

        // Initial check
        checkScreenSize(); 

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return isSmallScreen ? <NewCollectionMobileFrame /> : <NewCollectionAnotherFrame />;
}
