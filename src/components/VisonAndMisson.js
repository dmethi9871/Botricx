import React from 'react';
import { FaRocket, FaEye } from 'react-icons/fa';

const VisionAndMission = () => {
  return (
    <div id="VisionAndMission" className=" bg-yellow-100" >
      <section>
        <div className="m-auto max-w-7xl p-2 md:p-12 h-5/6">
          <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-custom-blue mb-4">
                <FaRocket size={72} className="text-purple-700" />
              </div>
              <h3 className="text-3xl text-custom-blue font-bold"><span className="font-black">Mission</span></h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                To be the leading provider of innovative and intelligent AI solutions that empower organasations to seamlessly  manage their work.
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
                  Develop cutting-edge AI technology to create smart devices and software products that enhance daily living  & woking experiences, prioritize security and privacy, and contribute to the evolution of responsible AI.
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
