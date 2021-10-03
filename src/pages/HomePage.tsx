import React, {useState} from "react";
import SidebarComponent from "../Components/Home/SideBar/SidebarComponent";
import ContentComponent from "../Components/Home/Content/ContentComponent";
import MobileSidebarComponent from "../Components/Home/SideBar/MobileSidebarComponent";

const HomePage = () => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false);

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
