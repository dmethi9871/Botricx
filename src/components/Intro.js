import React from 'react';
import img from '../images/Aboutus.png';
import { Link } from 'react-router-dom';
import { FaRobot, FaLightbulb, FaRocket } from 'react-icons/fa';
import NavBar from './Navbar/NavBar';


const Intro = () => {
  return (
    <>
    {/* <NavBar/> */}
      <div className="m-auto max-w-7xl p-2 md:p-11 h-5/6" id='about'>
        <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
          <div className="lg:w-1/2 h-30 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-t float-right w-full h-auto" src={img} />
          </div>
          <div className="flex-col my-6 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
            <h3 className="text-2xl text-custom-blue font-bold">Welcome to Boticx: Where Innovation Meets Deep Technologies</h3>
            <div className="my-6 flex items-center justify-center lg:justify-start">
              <FaRobot className="text-4xl text-custom-blue mr-4" />
              <p className='text-l text-gray-600 font-semibold'>We lead the digital renaissance by seamlessly integrating human intellect with robotic precision, setting new standards in efficiency and reliability.</p>
            </div>
            <div className="my-6 flex items-center justify-center lg:justify-start">
              <FaLightbulb className="text-3xl text-custom-blue mr-4" />
              <p className='text-l text-gray-600 font-semibold'>With Boticx, specializing in Intelligent Automation Everywhere, we elevate mundane processes into intelligent workflows, enhancing productivity and operational excellence.</p>
            </div>
            <div className="my-6 flex items-center justify-center lg:justify-start">
              <FaRocket className="text-4xl text-custom-blue mr-4" />
              <p className='text-l text-gray-600 font-semibold'>Through automation, we empower businesses to redirect their focus towards innovation and growth, fostering a dynamic environment for success.</p>
            </div>
            <div className="my-6">
              <p className='text-l text-gray-600 font-semibold'>Guided by a vision of technological enhancement of human potential, we have successfully automated thousands of processes, paving the way for a future where possibilities are limitless.</p>
            </div>
            <Link to="/contact" className="text-white bg-custom-blue hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
              Join the Movement
            </Link>
          </div>
        </div>
        
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Intro;
