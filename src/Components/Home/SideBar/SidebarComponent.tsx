import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

interface iSidebarComponent {
    isMobileMenuActive: boolean;
}

const SidebarComponent = ({isMobileMenuActive}: iSidebarComponent) => {
    useEffect(() => {
        document.querySelector(".sidebar")?.classList.toggle("-translate-x-full");
    }, [isMobileMenuActive]);
    return (
        <div
            className={"sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute md:relative md:translate-x-0 inset-y-0 left-0 transform -translate-x-full duration-200 ease-in-out"}>
            <Link to={"#"} className={"text-white flex items-center space-x-2 px-4"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
                <span className="text-2xl font-extrabold">
                    PWM
                </span>
            </Link>
            {/* nav */}
            <nav>
                <Link to="#"
                      className="block transition duration-200 rounded hover:bg-blue-700 hover:text-white-100 py-2.5 px-4">Home</Link>
                <Link to="/view" className="block rounded hover:bg-blue-700 py-2.5 px-4">My Passwords</Link>
            </nav>
        </div>
    );
};

SidebarComponent.prototype = {
    isMobileMenuActive: PropTypes.string.isRequired
};

export default SidebarComponent;
