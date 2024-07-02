import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavBar from './Navbar/NavBar';
import Footer from './Footer';
import { FiAward, FiStar } from 'react-icons/fi';
// Importing new icons
import Image1 from '../images/Aboutus.png';
import Image2 from '../images/WhatsApp Image 2024-07-01 at 15.59.52_5695fc9a.jpg';
import Image3 from '../images/WhatsApp Image 2024-07-01 at 16.00.28_4aeacde5.jpg'; // Example image import
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsBriefcaseFill, BsPersonFill } from 'react-icons/bs';
import { FaBorderNone, FaBrain, FaRobot } from 'react-icons/fa';
// import VideoThumbnail from '../images/'; // Example video thumbnail image

function LearnMore() {
    return (
        <>
            <NavBar />
            <br></br>
            <br />
            <br />
            <div className="pt-16 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Humble & Nimble Journey So Far!!</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Timeline of Achievements</p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Here's a visual representation of our company's journey showcasing key milestones and achievements.
                        </p>
                    </div>
                    <div className="mt-12">
                        <h3 className="text-2xl leading-8 font-extrabold tracking-tight text-center text-gray-900 sm:text-3xl">Our Achievements</h3>
                        <ul className="mt-4 max-w-8xl text-xl text-gray-500 lg:mx-auto space-y-4">
                            <li><AiFillCheckCircle className="inline-block mr-2 text-green-500" /> Boticx Labs employed close to 80 employees and interns and multiple vendors who did well with us in the journey. Every member that got associated has grown financially and educationally and are doing exponentially well.</li>
                            <li><BsPersonFill className="inline-block mr-2 text-blue-500" /> Retained AI services business and customer business running from Mauritius.</li>
                            <li><FaRobot className="inline-block mr-2 text-purple-500" /> First to develop the most advanced humanoid in the social category, sold it to Swedish company Oriflamme (Implemented).</li>
                            <li><BsBriefcaseFill className="inline-block mr-2 text-yellow-500" /> First to develop Autonomous navigation technology using Lidar to be used by our robot for inhouse complex.</li>
                            <li><FaBorderNone className="inline-block mr-2 text-red-500" /> First to develop independent platform and use cases of AI using Drone and Camera.</li>
                            <li><FaBrain className="inline-block mr-2 text-indigo-500" /> Developed the world’s quickest learning and implementable optical recognition bot that could be deployed for various finance functions in any industry (Piloted in L&T).</li>
                        </ul>
                    </div>

                    <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-12">
                        <div className="relative">
                            <div className="relative">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
                                    <FiAward className="w-6 h-6" /> {/* New icon */}
                                </div>
                                <p className="mt-6 text-lg leading-6 font-medium text-gray-900">Founding</p>
                                <p className="mt-2 text-base leading-6 text-gray-500">Our company began with a bold vision to innovate and lead the industry. From the very start, we have been dedicated to initiating change and setting new standards.</p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
                                    <FiStar className="w-6 h-6" /> {/* New icon */}
                                </div>
                                <p className="mt-6 text-lg leading-6 font-medium text-gray-900">Journey</p>
                                <p className="mt-2 text-base leading-6 text-gray-500">The journey of our company has been marked by continuous growth and improvement. Every challenge we face is an opportunity to learn and evolve. Our team's dedication and hard work drive us forward.</p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
                                    <FiStar className="w-6 h-6" /> {/* New icon */}
                                </div>
                                <p className="mt-6 text-lg leading-6 font-medium text-gray-900">Success</p>
                                <p className="mt-2 text-base leading-6 text-gray-500">Success is not just a destination for us; it's a continuous pursuit. We measure our success by the satisfaction of our clients and the positive impact we make in the industry. Together, we build a legacy of excellence.</p>
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

                    <div className="mt-16">
                        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay className="h-96">
                            <div className="h-full w-full flex items-center justify-center bg-gray-100">
                                <img src={Image2} alt="About us" className="rounded-lg shadow-lg max-h-96 w-full object-contain" />
                                <p className="legend">A glimpse into our company culture and team.</p>
                            </div>
                            <div className="h-full w-full flex items-center justify-center bg-gray-100">
                                <img src={Image3} alt="About us" className="rounded-lg shadow-lg max-h-96 w-full object-contain" />
                                <p className="legend">A glimpse into our company culture and team.</p>
                            </div>
                            <div className="h-full w-full flex items-center justify-center bg-gray-100">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/i4Bz_SWRrFs?si=h1ODZzeIOA-lT7x5"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="rounded-lg shadow-lg max-h-96 w-full object-contain"
                                ></iframe>
                            </div>
                            <div className="h-full w-full flex items-center justify-center bg-gray-100">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/uJA728Bi8-0?si=Km62PQcvekhpj5ZO"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="rounded-lg shadow-lg max-h-96 w-full object-contain"
                                ></iframe>
                            </div>
                        </Carousel>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    );
}

export default LearnMore;
