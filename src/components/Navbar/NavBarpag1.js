import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/Boticx.svg'; // Adjust the path as necessary

const NavBarpag1 = () => {
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
        <div className="bg-black shadow-lg"> {/* Background color set to white with shadow */}
            <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-black shadow-lg'}`}>
                <div className="flex flex-row justify-between items-center py-2">
                    <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                        <HashLink smooth to="/">
                            <img src={logo} alt="CoolBrains Logo" className="h-20" /> {/* Adjust the height as needed */}
                        </HashLink>
                    </div>
                    <div className="group flex flex-col items-center">
                        <button className="p-2 rounded-lg lg:hidden text-custom-blue" onClick={handleClick}>
                            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                )}
                            </svg>
                        </button>
                        <div className='hidden space-x-6 mr-5 lg:inline-block p-5 mr-10'>
                            <NavLinks />
                        </div>

                        <div className={`fixed transition-transform duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 mr-20 ${isOpen ? "block" : "hidden"}`}>
                            <div className='flex flex-col space-y-6'>
                            
                            <NavBarpag1/>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBarpag1;
