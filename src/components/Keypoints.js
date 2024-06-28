import React from 'react';
import img from '../images/Keypoints.gif';
import { FaCog, FaDollarSign, FaCheck, FaChartLine } from 'react-icons/fa';

const Keypoints = () => {
  return (
    <div id="keypoints" className="py-12 bg-gray-100">
      <section>
        <div className="m-auto max-w-6xl px-4 md:px-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center lg:text-left" data-aos="zoom-out">
              <div className="text-custom-blue mb-4">
                <FaCog size={60} className="text-purple-700" />
              </div>
              <h3 className="text-2xl text-custom-blue font-bold">
                Boost <span className="font-black">Productivity</span>
              </h3>
              <p className="my-3 text-l text-gray-600 font-semibold">
                Automate tasks and let your team focus on innovation. Watch productivity soar!
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center lg:text-left" data-aos="zoom-out">
              <div className="text-custom-blue mb-4">
                <FaCheck size={60} className="text-blue-500" />
              </div>
              <h3 className="text-2xl text-custom-blue font-bold">
                Enhance <span className="font-black">Accuracy</span>
              </h3>
              <p className="my-3 text-l text-gray-600 font-semibold">
                Minimize errors with smart automation. Enjoy flawless processes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center lg:text-left" data-aos="zoom-out">
              <div className="text-custom-blue mb-4">
                <FaChartLine size={60} className="text-red-500" />
              </div>
              <h3 className="text-2xl text-custom-blue font-bold">
                Scale <span className="font-black">Easily</span>
              </h3>
              <p className="my-3 text-l text-gray-600 font-semibold">
                Grow your business with scalable automation solutions. Stay flexible and thrive.
              </p>
            </div>
            <div className="flex flex-col items-center text-center lg:text-left" data-aos="zoom-out">
              <div className="text-custom-blue mb-4">
                <FaDollarSign size={60} className="text-green-500" />
              </div>
              <h3 className="text-2xl text-custom-blue font-bold">
                Cut <span className="font-black">Costs</span>
              </h3>
              <p className="my-3 text-l text-gray-600 font-semibold">
                Save money by streamlining operations. Allocate resources smarter.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0" data-aos="zoom-out">
            <img src={img} alt="About us" className="w-full h-auto " style={{maxWidth: '10000px'}} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Keypoints;
