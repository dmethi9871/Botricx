import React from 'react';
import { FaCog, FaDollarSign, FaCheck, FaStar, FaMedal, FaShieldAlt } from 'react-icons/fa';

const Keypoints = () => {
  return (
    <div id="keypoints" className="py-12 bg-gray-100">
      <section>
        <div className="m-auto max-w-6xl px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center" data-aos="zoom-out">
            <div className="mb-4">
              <FaCog size={60} className="text-purple-700" />
            </div>
            <h3 className="text-2xl text-custom-blue font-bold">
              Affordable <span className="font-black">Cost</span>
            </h3>
            <p className="my-3 text-l text-gray-600 font-semibold">
              Affordable cost through automation and technology.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="zoom-out">
            <div className="mb-4">
              <FaCheck size={60} className="text-blue-500" />
            </div>
            <h3 className="text-2xl text-custom-blue font-bold">
              Startup <span className="font-black">Friendly</span>
            </h3>
            <p className="my-3 text-l text-gray-600 font-semibold">
              Startup friendly team which gives you service beyond satisfaction.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="zoom-out">
            <div className="mb-4">
              <FaStar size={60} className="text-red-500" />
            </div>
            <h3 className="text-2xl text-custom-blue font-bold">
              Superb <span className="font-black">Packages</span>
            </h3>
            <p className="my-3 text-l text-gray-600 font-semibold">
              Superb packages which you can’t find anywhere.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="zoom-out">
            <div className="mb-4">
              <FaMedal size={60} className="text-green-500" />
            </div>
            <h3 className="text-2xl text-custom-blue font-bold">
              Lifetime <span className="font-black">Support</span>
            </h3>
            <p className="my-3 text-l text-gray-600 font-semibold">
              After service lifetime support as premium client.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="zoom-out">
            <div className="mb-4">
              <FaShieldAlt size={60} className="text-purple-700" />
            </div>
            <h3 className="text-2xl text-custom-blue font-bold">
              Money <span className="font-black">Back Guarantee</span>
            </h3>
            <p className="my-3 text-l text-gray-600 font-semibold">
              100% money back guarantee on professional fee.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="zoom-out">
            <div className="mb-4">
              <FaShieldAlt size={60} className="text-blue-500" />
            </div>
            <h3 className="text-2xl text-custom-blue font-bold">
              Confidential <span className="font-black">Policy</span>
            </h3>
            <p className="my-3 text-l text-gray-600 font-semibold">
              Confidential documents policy during the process.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Keypoints;
