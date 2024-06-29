import React from 'react';
import NavBar from './Navbar/NavBar';
import Footer from './Footer';
import { FiClock, FiTarget } from 'react-icons/fi'; // Example icons from react-icons library
import Image1 from '../images/Aboutus.png'; // Example image import

function LearnMore() {
    return (
        <>
            <NavBar />
<br/>
<br/>
<br/>
            <div className=" py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Humble & Nimble Journey So Far!!</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Timeline of Achievements</p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Here's a visual representation of our company's journey showcasing key milestones and achievements.
                        </p>
                    </div>

                    <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-12">
                        <div className="relative">
                            <div className="relative">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
                                    <FiClock className="w-6 h-6" />
                                </div>
                                <p className="mt-6 text-lg leading-6 font-medium text-gray-900">Founding</p>
                                <p className="mt-2 text-base leading-6 text-gray-500">Established the company in 20XX.</p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
                                    <FiTarget className="w-6 h-6" />
                                </div>
                                <p className="mt-6 text-lg leading-6 font-medium text-gray-900">First Milestone</p>
                                <p className="mt-2 text-base leading-6 text-gray-500">Achieved XYZ milestone in 20XX.</p>
                            </div>
                        </div>

                        {/* Add more timeline items as needed */}
                    </div>

                    <div className="mt-12">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-4 py-1 text-sm text-gray-500">Scroll down for more</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col items-center space-y-8">
                        <div className="max-w-lg">
                            <img src={Image1} alt="About us" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="max-w-lg">
                            <p className="text-xl text-gray-800">A glimpse into our company culture and team.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default LearnMore;
