import React from 'react';
import { FaRocket, FaEye } from 'react-icons/fa';

const VisionAndMission = () => {
  return (
    <div id="VisionAndMission" className="py-12 bg-yellow-100" >
      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-custom-blue mb-4">
                <FaRocket size={72} className="text-purple-700" />
              </div>
              <h3 className="text-3xl text-custom-blue font-bold"><span className="font-black">Mission</span></h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  At Boticx, our mission is to fuse human ingenuity with advanced robotic intelligence to revolutionize the way businesses operate. We strive to create seamless, automated workflows that elevate efficiency, reduce redundancy, and empower our clients to focus on innovation and strategic growth. Our commitment is to lead the digital renaissance, enabling organizations to transcend the ordinary and achieve extraordinary outcomes.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-custom-blue mb-4">
                <FaEye size={72} className="text-purple-700" />
              </div>
              <h3 className="text-3xl text-custom-blue font-bold"><span className="font-black">Vision</span></h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  To be the visionary pioneers of the digital age, where intelligent automation harmoniously integrates with human creativity to unlock limitless potential. We envision a future where every business, regardless of size, harnesses the power of robotic process automation to transform their operations, drive sustainable growth, and contribute to a world where technology enhances the human experience, fostering a society driven by innovation, efficiency, and boundless opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisionAndMission;
