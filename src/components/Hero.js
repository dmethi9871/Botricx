import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/intro2.png';

const Hero = () => {
    return (
        <div className="relative h-screen">
      
            <img
                src={heroImg}
                alt="Hero Background"
                className="absolute inset-0 object-cover w-full h-full"
            />

            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
                <NavBar />
                <div className="px-6 md:px-12 lg:px-24 xl:px-32">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Discover the future of responsible Technology with Boticx</h1>
                    <p className="text-xl md:text-2xl lg:text-3xl mb-6">Future Proofing Ideas</p>
                    <div className="space-y-4 md:space-y-0 md:flex md:justify-center">
                        <Link
                            to="/LearnMore"
                            className="text-white bg-custom-blue hover:bg-blue-800 inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl shadow-xl rounded-full sm:w-auto sm:mb-0"
                        >
                            Learn more
                            <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl text-white bg-gray-500 hover:bg-gray-400 shadow-xl rounded-full sm:w-auto sm:mb-0 mt-4 md:mt-0 md:ml-4"
                        >
                            Contact US
                            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
