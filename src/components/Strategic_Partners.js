import React from 'react';
import { Link } from 'react-router-dom';
import img5 from '../images/sailogo.svg';
import img4 from '../images/Brainwave.png';
import { FaLightbulb, FaRobot, FaRocket } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Strategic_Partners = () => {
    return (
       <>
       <div className="m-auto max-w-7xl p-2 md:p-11" id='about'>
            <h2 className="my-2 text-center text-3xl text-custom-blue uppercase font-bold">Strategic Partners</h2>
            <div className='flex justify-center'>
                <div className='w-24 border-b-4 border-custom-blue mb-8'></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" data-aos="fade-up">
                <div className="lg:order-2">
                    <img alt="Brainwave Technology" className="rounded-t w-full h-full object-cover" src={img4} />
                </div>
                <div className="lg:order-1 flex flex-col justify-center text-center lg:text-left" data-aos="zoom-in" data-aos-delay="500">
                    <h3 className="text-2xl text-custom-blue font-bold">Brainwave Technology</h3>
                    <div className="my-6 flex items-center justify-center lg:justify-start">
                        <FaRobot className="text-4xl text-custom-blue mr-4" />
                        <p className='text-l text-gray-600 font-semibold'>
                            We leverage the power of the Internet of Things (IoT), Artificial Intelligence (AI), and Printed Circuit Board (PCB) design to create solutions that are not just futuristic but also scalable, efficient, and tailored to meet the challenges of today and tomorrow.
                        </p>
                    </div>
                    <a href="https://www.brainwavetechnologie.com/" className="text-white bg-custom-blue hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                        Join the Movement
                    </a>
                </div>
            </div>
        </div>

        <div className="m-auto max-w-7xl p-2 md:p-11">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" data-aos="fade-up">
                <div className="lg:order-1">
                    <img alt="SmartedgeAI" className="rounded-t w-full h-full object-cover" src={img5} />
                </div>
                <div className="lg:order-2 flex flex-col justify-center text-center lg:text-left" data-aos="zoom-in" data-aos-delay="500">
                    <h3 className="text-2xl text-custom-blue font-bold">Smartedgeai</h3>
                    <div className="my-6 flex items-center justify-center lg:justify-start">
                        <FaRobot className="text-4xl text-custom-blue mr-4" />
                        <p className='text-l text-gray-600 font-semibold'>
                            SmartedgeAI is a cutting-edge DeepTech research organization that specializes in deep technologies, leveraging GenAI and Edge computing and embedded to drive transformation in various sectors like generative AI, Edge AI, Carbon.
                        </p>
                    </div>
                    <a href="https://smartedgeai.com/" className="text-white bg-custom-blue hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                        Join the Movement
                    </a>
                </div>
            </div>
        </div>
      </>
    );
}

export default Strategic_Partners;
