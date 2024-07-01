import React from 'react';
import { FaLock, FaHandshake, FaLightbulb, FaUserCheck, FaRocket, FaMagic } from 'react-icons/fa';

const Keypoints = () => {
  return (
    <div id="keypoints" className="py-12 bg-gray-100">
      <section>
        <div className="m-auto max-w-6xl px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center" data-aos="zoom-out">
            <div className="mb-4">
              <FaLock size={60} className="text-purple-700" />
            </div>
            <h3 className="text-2xl text-custom-blue font-bold">
              Data Security <span className="font-black">and Privacy</span>
            </h3>
            <p className="my-3 text-l text-gray-600 font-semibold">
              Ensuring robust data security and privacy measures.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="zoom-out">
            <div className="mb-4">
              <FaHandshake size={60} className="text-blue-500" />
            </div>
            <h3 className="text-2xl text-custom-blue font-bold">
              Diversification <span className="font-black"></span>
            </h3>
            <p className="my-3 text-l text-gray-600 font-semibold">
              Commitment to innovative solutions and diversification.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="zoom-out">
            <div className="mb-4">
              <FaLightbulb size={60} className="text-red-500" />
            </div>
            <h3 className="text-2xl text-custom-blue font-bold">
              Customer Experience <span className="font-black"></span>
            </h3>
            <p className="my-3 text-l text-gray-600 font-semibold">
              Focusing on exceptional customer experience.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="zoom-out">
            <div className="mb-4">
              <FaUserCheck size={60} className="text-green-500" />
            </div>
            <h3 className="text-2xl text-custom-blue font-bold">
              Promise To Deliver <span className="font-black"></span>
            </h3>
            <p className="my-3 text-l text-gray-600 font-semibold">
              Ensuring first-time-right solutions and quality assurance.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="zoom-out">
            <div className="mb-4">
              <FaRocket size={60} className="text-purple-700" />
            </div>
            <h3 className="text-2xl text-custom-blue font-bold">
              Future Proof <span className="font-black">Ideas</span>
            </h3>
            <p className="my-3 text-l text-gray-600 font-semibold">
              Implementing future-proof strategies and solutions.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="zoom-out">
            <div className="mb-4">
              <FaMagic size={60} className="text-blue-500" />
            </div>
            <h3 className="text-2xl text-custom-blue font-bold">
              Art of <span className="font-black"> Possible</span>
            </h3>
            <p className="my-3 text-l text-gray-600 font-semibold">
              Pushing the boundaries with the art of possible innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Keypoints;
