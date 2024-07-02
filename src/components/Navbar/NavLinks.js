import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { HiOutlineInformationCircle, HiOutlineClipboardList, HiOutlineBriefcase, HiOutlineMail } from 'react-icons/hi'; // Import icons from react-icons

const NavLinks = () => {
    return (
        <div className="flex items-center space-x-4">
            <HashLink
                className="px-4 py-2 font-semibold text-white hover:text-gray-100 transition-colors duration-300 bg-gradient-to-r from-blue-500 to-custom-blue rounded-lg shadow-md"
                smooth
                to="/aboutus"
            >
                <div className="flex items-center space-x-2">
                        <HiOutlineInformationCircle className="nav-icon text-white" />
                        <span className="text-white">About</span>
                    </div>
            </HashLink>
            <HashLink
                className="px-4 py-2 font-semibold text-white hover:text-gray-100 transition-colors duration-300 bg-gradient-to-r from-blue-500 to-custom-blue rounded-lg shadow-md"
                smooth
                to="/Services"
            >
                <div className="flex items-center space-x-2">
                        <HiOutlineClipboardList className="nav-icon text-white" />
                        <span className="text-white">Services</span>
                    </div>
            </HashLink>
            {/* <HashLink
                className="px-4 py-2 font-semibold text-white hover:text-gray-100 transition-colors duration-300 bg-gradient-to-r from-blue-500 to-custom-blue rounded-lg shadow-md"
                smooth
                to="/Products"
            >
                <div className="flex items-center space-x-2">
                        <HiOutlineBriefcase className="nav-icon text-white" />
                        <span className="text-white">Products</span>
                    </div>
            </HashLink> */}
            <HashLink
                className="px-4 py-2 font-semibold text-white hover:text-gray-100 transition-colors duration-300 bg-gradient-to-r from-blue-500 to-custom-blue rounded-lg shadow-md"
                smooth
                to="/contact"
            >
                <div className="flex items-center space-x-2">
                        <HiOutlineMail className="nav-icon text-white " />
                        <span className="text-white">Contact Us</span>
                    </div>
            </HashLink>
            <br/>
            <HashLink
                className="px-4 py-2 font-semibold text-white hover:text-gray-100 transition-colors duration-300 bg-gradient-to-r from-blue-500 to-custom-blue rounded-lg shadow-md"
                smooth
                to="/LearnMore"
            >
                <div className="flex items-center space-x-2">
                <HiOutlineInformationCircle className="nav-icon text-white" />
                <span className="text-white">Learn More</span>
                    </div>
            </HashLink>
        </div>
    );
};

export default NavLinks;
