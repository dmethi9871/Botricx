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
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex justify-between items-center py-2 md:px-12">
                <div className="flex items-center text-center font-semibold">
                    <HashLink smooth to="/">
                        <img src={logo} alt="CoolBrains Logo" className="h-16 md:h-20" /> {/* Adjust the height as needed */}
                    </HashLink>
                </div>
                <div className="lg:hidden">
                    <button className="p-2 rounded-lg text-custom-blue" onClick={handleClick} aria-label="Toggle Menu">
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                </div>
                <div className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"} absolute transition-transform duration-300 ease-in-out left-0 w-full bg-white shadow-xl top-14 lg:static lg:bg-transparent lg:shadow-none`}>
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
