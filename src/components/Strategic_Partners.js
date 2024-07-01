import React from 'react';
import { Link } from 'react-router-dom';
import img5 from '../images/sailogo.svg';
import img4 from '../images/Brainwave.png';
import { FaLightbulb, FaRobot, FaRocket } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Strategic_Partners = () => {
    return (
       <>
       <div className="m-auto max-w-7xl p-2 md:p-11 h-5/6" id='about'>
       <h2 className="my-2 text-center text-3xl text-custom-blue uppercase font-bold">Strategic Partners</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-custom-blue mb-8'></div>
                </div>
        <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
          <div className="lg:w-1/2 h-30 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-t float-right w-full h-auto" src={img4} />
          </div>
          <div className="flex-col my-6 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
            <h3 className="text-2xl text-custom-blue font-bold">Brainwave Technology</h3>
            <div className="my-6 flex items-center justify-center lg:justify-start">
              <FaRobot className="text-4xl text-custom-blue mr-4" />
              <p className='text-l text-gray-600 font-semibold'>We leverage the power of the Internet of Things (IoT), Artificial Intelligence (AI), and Printed Circuit Board (PCB) design to create solutions that are not just futuristic but also scalable, efficient, and tailored to meet the challenges of today and tomorrow</p>
            </div>
           
            <Link to="https://www.brainwavetechnologie.com/" className="text-white bg-custom-blue hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
              Join the Movement
            </Link>
          </div>
        </div>

        
      </div>
      <div className="m-auto max-w-7xl p-2 md:p-11 h-5/6" id='about'>
        <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
          <div className="lg:w-1/2 h-30 flex flex-col lg:mx-4 justify-center">
          <h3 className="text-2xl text-custom-blue font-bold">Smartedgeai</h3>
            <div className="my-6 flex items-center justify-center lg:justify-start">
              <FaRobot className="text-4xl text-custom-blue mr-4" />
              <p className='text-l text-gray-600 font-semibold'>SmartedgeAI is a cutting-edge DeepTech research organization that specializes in deep technologies, leveraging GenAI and Edge computing and embedded to drive transformation in various sectors like generative AI , Edge AI , Carbon.</p>
            </div>
            <div className="flex-col my-6 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
            <HashLink to="https://smartedgeai.com/" className="text-white bg-custom-blue hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
              Join the Movement
            </HashLink>
            </div>
          </div>
          <div className="flex-col my-6 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
          <img alt="card img" className="rounded-t float-right w-full h-auto" src={img5} />
          
          </div>
          
        </div>
        
      </div>
      </>
    )
}

export default Strategic_Partners;
