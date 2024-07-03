import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/Boticx.svg'; // Adjust the path as necessary

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex flex-row justify-between items-center py-2 px-4 md:px-12">
                <div className="flex flex-row items-center">
                    <HashLink smooth to="/">
                        <img src={logo} alt="CoolBrains Logo" className="ml-3 h-20 w-30 md:h-30 md:w-30" /> {/* Adjusted height and width */}
                    </HashLink>
                </div>
                <div className="flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-custom-blue" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className='hidden space-x-6 lg:inline-block p-5'>
                        <NavLinks />
                    </div>
                    <div className={`fixed transition-transform duration-300 ease-in-out flex flex-col justify-start left-0 w-full h-full bg-white lg:hidden top-14 transform ${isOpen ? "scale-100" : "scale-0"} ${isOpen ? "opacity-100" : "opacity-0"}`}>
                        <div className='flex flex-col space-y-6 p-5'>
                            <NavLinks className="transition-opacity duration-500 ease-in-out" />
                        </div>                                                
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
