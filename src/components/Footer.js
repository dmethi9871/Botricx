import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons
import { HashLink } from 'react-router-hash-link';
import { FiMapPin } from 'react-icons/fi';

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-100 border-t border-b py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Grid container for footer sections */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Contact information */}
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-start rounded-lg xl:w-80 mx-auto lg:mx-0">
                            <h2 className="font-bold text-4xl mb-4">Contact Us</h2>
                            <div className="text-gray-600">
                                <h2>BoticX</h2>
                                <p>
                                    <FiMapPin as={FiMapPin} className="inline-block align-middle mr-2" />
                                    91springboard, Block C, Sector 1, Noida, Uttar Pradesh, India
                                </p>
                                <p>
                                    <FiMapPin className="inline-block align-middle mr-2" />
                                    Nepalganj, Nepal
                                </p>
                                <p>
                                    <FiMapPin as={FiMapPin} className="inline-block align-middle mr-2" />
                                    Mauritius
                                </p>
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
                               
                                <Link to="https://www.facebook.com/p/Boticx-Labs-Future-Proofing-Ideas-100070990359815/?_rdr" className="text-gray-600 hover:text-blue-600 transition duration-300"><FaFacebookF size="24" /></Link>
                              
                                <Link to="https://www.linkedin.com/company/boticx-labs/" className="text-gray-600 hover:text-blue-600 transition duration-300"><FaLinkedinIn size="24" /></Link>
                            </div>
                        </div>

                    </div>

                    

                </div>
            </footer>
            <footer className="bg-gray-200  text-gray-600">
                        <div className="container   text-center">
                            <div className="text-center">
                                <p>&copy; {new Date().getFullYear()} Boticx. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
        </>
    );
};

export default Footer;
