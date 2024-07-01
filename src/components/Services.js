import React from 'react';
import { FaRobot, FaIndustry, FaChartLine, FaStethoscope, FaStore, FaNetworkWired,  FaDollarSign,  FaTasks, FaBrain, FaDatabase, FaUser, FaCog, FaUsers, FaSmile, FaLayerGroup, FaPencilAlt, FaAdjust, FaEye, FaShieldAlt, FaHeartbeat } from 'react-icons/fa'; // Importing new icons
import img from '../images/blockchain-development.gif';
import img2 from '../images/about.gif';
import img3 from '../images/Launchy-ani-5.gif';
import img4 from '../images/image_processing20200407-22533-gselen.gif';
import img5 from '../images/tumblr_inline_ppn2rfyfzy1v5srb7_640.webp';
const Services = () => {
  return (
    <div className="py-12" id="services">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-custom-blue uppercase font-bold">Services</h2>
          <div className='flex justify-center'>
            <div className='w-24 border-b-4 border-custom-blue'></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-custom-blue">We are deeply committed to the growth and success of our clients.</h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* Intelligent Automation */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                <h2 className="font-semibold my-4 text-xl text-center">Intelligent Automation</h2>
              <div className="text-md font-medium">
                <ul className="list-disc list-inside">
                  <li className="flex items-center my-2">
                    <FaRobot className="text-green-500 mr-2" /> Artificial Intelligence
                  </li>
                  <li className="flex items-center my-2">
                    <FaCog className="text-green-500 mr-2" /> Robotic Process Automation
                  </li>
                  <li className="flex items-center my-2">
                    <FaChartLine className="text-green-500 mr-2" /> Business Process Management
                  </li>
                  <li className="flex items-center my-2">
                    <FaUsers className="text-green-500 mr-2" /> Operational Efficiency
                  </li>
                  <li className="flex items-center my-2">
                    <FaSmile className="text-green-500 mr-2" /> Improved Customer Experience
                  </li>
                </ul>
                </div>
              </div>
            </div>

            {/* Generative AI */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
            <div className="m-2 text-justify text-sm">
              <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
              <h2 className="font-semibold my-4 text-xl text-center">Generative AI</h2>
              <div className="text-md font-medium">
                <ul className="list-disc list-inside">
                  <li className="flex items-center my-2">
                    <FaBrain className="text-green-500 mr-2" /> Gen AI
                  </li>
                  <li className="flex items-center my-2">
                    <FaLayerGroup className="text-green-500 mr-2" /> Multimodal AI
                  </li>
                  <li className="flex items-center my-2">
                    <FaPencilAlt className="text-green-500 mr-2" /> Prompt Engineering
                  </li>
                  <li className="flex items-center my-2">
                    <FaAdjust className="text-green-500 mr-2" /> Fine Tuning
                  </li>
                  <li className="flex items-center my-2">
                    <FaEye className="text-green-500 mr-2" /> Attention Mechanism
                  </li>
                </ul>
              </div>
            </div>
            </div>
            </div>

            {/* AI Product Development */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
  <div className="m-2 text-justify text-sm">
    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
    <h2 className="font-semibold my-4 text-xl text-center">AI Product Development</h2>
    <div className="text-md font-medium">
      <ul className="list-disc list-inside">
        <li className="flex items-center my-2">
          <FaRobot className="text-green-500 mr-2" /> Automating Tasks
        </li>
        <li className="flex items-center my-2">
          <FaDatabase className="text-green-500 mr-2" /> Analyzing Data
        </li>
        <li className="flex items-center my-2">
          <FaBrain className="text-green-500 mr-2" /> Enhancing Decision-Making
        </li>
        <li className="flex items-center my-2">
          <FaTasks className="text-green-500 mr-2" /> Automating routine tasks
        </li>
        <li className="flex items-center my-2">
          <FaUser className="text-green-500 mr-2" /> Enhanced user personalization
        </li>
      </ul>
    </div>
  </div>
</div>

            {/* Edge Computing */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img5} />
                <h2 className="font-semibold my-4 text-xl text-center">Edge Computing</h2>
                <div className="text-md font-medium">
                  <ul className="list-disc list-inside">
                    <li className="flex items-center my-2">
                      <FaChartLine className="text-green-500 mr-2" /> Real Time Video Analysis
                    </li>
                    <li className="flex items-center my-2">
                      <FaStethoscope className="text-green-500 mr-2" /> Improved Patient Outcomes
                    </li>
                    <li className="flex items-center my-2">
                      <FaIndustry className="text-green-500 mr-2" /> Fraud Detection
                    </li>
                    <li className="flex items-center my-2">
                      <FaStore className="text-green-500 mr-2" /> Better Supply Chain Management
                    </li>
                    <li className="flex items-center my-2">
                      <FaNetworkWired className="text-green-500 mr-2" /> Crop Health Monitoring
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AIOT */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
            <div className="m-2 text-justify text-sm">
              <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
              <h2 className="font-semibold my-4 text-2xl text-center">AIOT</h2>
              <div className="text-md font-medium">
                <ul className="list-disc list-inside">
                  <li className="flex items-center my-2">
                    <FaShieldAlt className="text-green-500 mr-2" /> Risk Management
                  </li>
                  <li className="flex items-center my-2">
                    <FaHeartbeat className="text-green-500 mr-2" /> Real Time Health Analysis
                  </li>
                  <li className="flex items-center my-2">
                    <FaCog className="text-green-500 mr-2" /> Operational Efficiency
                  </li>
                  <li className="flex items-center my-2">
                    <FaDollarSign className="text-green-500 mr-2" /> Costing
                  </li>
                  <li className="flex items-center my-2">
                    <FaSmile className="text-green-500 mr-2" /> Customer Experience
                  </li>
                </ul>
              </div>
              </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
