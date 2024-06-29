import React from 'react';
import { FaRobot, FaIndustry, FaFileAlt, FaTools, FaClipboardList, FaChartLine, FaStethoscope, FaStore, FaNetworkWired, FaUserFriends, FaDollarSign, FaLaptop } from 'react-icons/fa'; // Importing new icons
import img from '../images/blockchain-development.gif';
import img2 from '../images/about.gif';
import img3 from '../images/Launchy-ani-5.gif';
import img4 from '../images/image_processing20200407-22533-gselen.gif';

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
            {/* RPA Consulting */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                <h2 className="font-semibold my-4 text-xl text-center">Intelligent Automation</h2>
                <div className="text-md font-medium">
                  <ul className="list-disc list-inside">
                    <li className="flex items-center my-2">
                      <FaRobot className="text-green-500 mr-2" /> RPA Consulting
                    </li>
                    <li className="flex items-center my-2">
                      <FaTools className="text-green-500 mr-2" /> RPA Development
                    </li>
                    <li className="flex items-center my-2">
                      <FaClipboardList className="text-green-500 mr-2" /> RPA Implementation
                    </li>
                    <li className="flex items-center my-2">
                      <FaTools className="text-green-500 mr-2" /> RPA Support & Maintenance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Industry Solutions */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                <h2 className="font-semibold my-4 text-xl text-center">Generative AI  </h2>
                <div className="text-md font-medium">
                  <ul className="list-disc list-inside">
                    <li className="flex items-center my-2">
                      <FaChartLine className="text-green-500 mr-2" /> Banking & Financial Services
                    </li>
                    <li className="flex items-center my-2">
                      <FaStethoscope className="text-green-500 mr-2" /> Healthcare
                    </li>
                    <li className="flex items-center my-2">
                      <FaIndustry className="text-green-500 mr-2" /> Manufacturing & High Tech
                    </li>
                    <li className="flex items-center my-2">
                      <FaStore className="text-green-500 mr-2" /> Retail & Consumer Goods
                    </li>
                    <li className="flex items-center my-2">
                      <FaNetworkWired className="text-green-500 mr-2" /> Telecommunications
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Functions */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                <h2 className="font-semibold my-4 text-xl text-center">AI product development</h2>
                <div className="text-md font-medium">
                  <ul className="list-disc list-inside">
                    <li className="flex items-center my-2">
                      <FaUserFriends className="text-green-500 mr-2" /> Human Resources
                    </li>
                    <li className="flex items-center my-2">
                      <FaDollarSign className="text-green-500 mr-2" /> Finance & Accounting
                    </li>
                    <li className="flex items-center my-2">
                      <FaChartLine className="text-green-500 mr-2" /> Sales & Marketing
                    </li>
                    <li className="flex items-center my-2">
                      <FaLaptop className="text-green-500 mr-2" /> IT & Infrastructure
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                <h2 className="font-semibold my-4 text-xl text-center">Edge Computing</h2>
                <div className="text-md font-medium">
                  <ul className="list-disc list-inside">
                    <li className="flex items-center my-2">
                      <FaChartLine className="text-green-500 mr-2" /> Banking & Financial Services
                    </li>
                    <li className="flex items-center my-2">
                      <FaStethoscope className="text-green-500 mr-2" /> Healthcare
                    </li>
                    <li className="flex items-center my-2">
                      <FaIndustry className="text-green-500 mr-2" /> Manufacturing & High Tech
                    </li>
                    <li className="flex items-center my-2">
                      <FaStore className="text-green-500 mr-2" /> Retail & Consumer Goods
                    </li>
                    <li className="flex items-center my-2">
                      <FaNetworkWired className="text-green-500 mr-2" /> Telecommunications
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                <h2 className="font-semibold my-4 text-2xl text-center">AIOT</h2>
                <div className="text-md font-medium">
                  <ul className="list-disc list-inside">
                    <li className="flex items-center my-2">
                      <FaFileAlt className="text-green-500 mr-2" /> Case Studies
                    </li>
                    <li className="flex items-center my-2">
                      <FaFileAlt className="text-green-500 mr-2" /> Blogs and Articles
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
