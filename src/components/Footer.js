import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-100 border-t border-b py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Grid container for footer sections */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Contact information */}
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto lg:mx-0">
                            <h2 className="font-bold text-4xl mb-4">Contact Us</h2>
                            <div className="text-gray-600">
                            <h5>BoticX</h5>
                                <p>India,</p>
                                <p>Mauritius,</p>
                                <p>Nepal</p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Links</h2>
                            <ul className="text-l text-gray-800 mb-4">
                                <li><HashLink to="/aboutus" className="hover:text-blue-600 transition duration-300">About</HashLink></li>
                                <li><HashLink to="/Services" className="hover:text-blue-600 transition duration-300">Services</HashLink></li>
                                <li><HashLink to="/Products" className="hover:text-blue-600 transition duration-300">Products</HashLink></li>
                                <li><HashLink to="/contact" className="hover:text-blue-600 transition duration-300">Contact</HashLink></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Stay Connected</h2>
                            <div className="flex space-x-4">
                                <Link to="#" className="text-gray-600 hover:text-blue-600 transition duration-300"><FaTwitter size="24" /></Link>
                                <Link to="#" className="text-gray-600 hover:text-blue-600 transition duration-300"><FaFacebookF size="24" /></Link>
                                <Link to="#" className="text-gray-600 hover:text-blue-600 transition duration-300"><FaInstagram size="24" /></Link>
                                <Link to="#" className="text-gray-600 hover:text-blue-600 transition duration-300"><FaLinkedinIn size="24" /></Link>
                            </div>
                        </div>

                    </div>

                    {/* Bottom copyright section */}
                    <div className=" text-center text-gray-600">
                        <p>&copy; {new Date().getFullYear()} Boticx. All rights reserved.</p>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;
