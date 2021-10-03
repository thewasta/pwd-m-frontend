import React, {SetStateAction} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

interface iMobileSidebarComponent {
    isMobileMenuActive: boolean;
    setMobileMenuActive: SetStateAction<any>;
}

const MobileSidebarComponent = ({isMobileMenuActive, setMobileMenuActive}: iMobileSidebarComponent) => (
    <div className={"bg-gray-800 text-gray-100 flex justify-between md:hidden"}>
        <Link to={"#"} className="block p-4 text-white font-bold">
            PWM
        </Link>
        <button
            onClick={(event => {
                setMobileMenuActive(!isMobileMenuActive);
            })}
            className={"mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </button>
    </div>
);

MobileSidebarComponent.prototype = {
    isMobileMenuActive: PropTypes.bool.isRequired,
    setMobileMenuActive: PropTypes.func.isRequired
};
export default MobileSidebarComponent;
