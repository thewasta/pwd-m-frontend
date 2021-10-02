import React, {useState} from "react";
import SidebarComponent from "./SideBar/SidebarComponent";
import ContentComponent from "./Content/ContentComponent";
import MobileSidebarComponent from "./SideBar/MobileSidebarComponent";

const HomePage = () => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
    return (
        <>
            <MobileSidebarComponent isMobileMenuActive={isMobileMenuActive}
                                    setMobileMenuActive={setIsMobileMenuActive}/>
            <SidebarComponent isMobileMenuActive={isMobileMenuActive}/>
            <ContentComponent/>
        </>
    );
};

export default HomePage;
