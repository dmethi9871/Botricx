import React from 'react';
import Founder1 from '../images/founders/AvanishPathak.jpg';
import Founder2 from '../images/founders/Bhuprai.jpg';
import Founder3 from '../images/founders/bharat.jpg';
import Founder4 from '../images/founders/bheema.jpg';
import Founder5 from '../images/founders/shailendra.png';

const Cta = () => {
  return (

    <>
    <div className="mt-8">
    <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-custom-blue uppercase font-bold">Meet Our Founders</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-custom-blue'></div>
                    </div>
                    
                </div>
    <div className="w-full flex justify-center mb-126">
      <div className=' m-auto max-w-7xl p-2 md:p-11 h-5/'>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 w-full">
        <div className="bg-white rounded shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <img src={Founder1} alt="Founder 1" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-6">
            <h5 className="text-lg font-bold mb-2">John Doe</h5>
            <p className="text-gray-600">Founder & CEO</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
        </div>
        <div className="bg-white rounded shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <img src={Founder2} alt="Founder 2" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h5 className="text-lg font-bold mb-2">Jane Doe</h5>
            <p className="text-gray-600">Co-Founder & CTO</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
        </div>
        <div className="bg-white rounded shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <img src={Founder3} alt="Founder 3" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h5 className="text-lg font-bold mb-2">Bob Smith</h5>
            <p className="text-gray-600">Co-Founder & CMO</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
        </div>
        <div className="bg-white rounded shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <img src={Founder4} alt="Founder 4" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h5 className="text-lg font-bold mb-2">Bheema Smith</h5>
            <p className="text-gray-600">Co-Founder & CMO</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
        </div>
        <div className="bg-white rounded shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <img src={Founder5} alt="Founder 5" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h5 className="text-lg font-bold mb-2">Shailendra Singh</h5>
            <p className="text-gray-600">Co-Founder & CMO</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
        </div>
        </div>
      </div>
      </div>
      </div>

  
    </>
  );
};

export default Cta;
