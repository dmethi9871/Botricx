import React from 'react';
import Founder1 from '../images/founders/avi.jpg';
import Founder2 from '../images/founders/atul dai.jpg';
import Founder3 from '../images/founders/WhatsApp Image 2024-07-02 at 14.10.36_ba16748a.jpg';
import { FaLinkedin } from 'react-icons/fa';

const Cta = () => {
  // Define founder details
  const founders = [
    {
      name: 'Avanish Pathak',
      title: 'Founder and CEO',
      intro: 'With over 21 years of experience, I am a multifaceted expert dedicated to transforming concepts into outcomes. As a father to an 11-year-old autistic child, I bring personal touch and empathy to my work. My expertise spans Quantum Computing, AI, Generative AI, AGI, Blockchain, Edge Computing, and AIoT Embedded Systems. I also delve into brain functions, psychology, Vedic Shastras, scientific equations, and food as medicine. Combining extensive knowledge and research prowess, I excel in turning innovative ideas into tangible results across technology, science, and holistic health.',
      quote: 'I have got promises to keep and miles to go before I sleep!!         ',
      image: Founder1,
      linkedin: 'https://www.linkedin.com/in/avanish-kumar-pathak-04173639'
    },
    {
      name: 'Atul Koirala',
      title: 'CEO Nepal',
      intro: `M.Tech. Computer Science & Engineering, Russia, is professionally, technically sound and business savvy with 31+ years pioneering career reflecting strong leadership qualities. Playing a strategic role in developing and implementing cutting-edge solutions in overall process efficiency for the growth of an organization. Highly motivated individual with team based management style & excellent inter personal and communication skills. Focused on bottom line results while formulates and implements advanced Methodology /Technology to meet a wide range of needs.`,
      quote: 'Human Intelligence (#HI) Shapes the World, While Artificial Intelligence (#AI) Powers It. Stay Aware, Stay Ahead.',
      image: Founder2,
      linkedin: 'https://www.linkedin.com/in/atul-koirala-a9501056'
    },
    {
      name: 'Shailendra',
      title: 'CEO Mauritius',
      intro: `Shailendra has over 19 years of experience in Digital Transformation, specializing in Intelligent Hyper Automation, AI, and GenAI in Banking, Financial, and Service industries. He has held key roles such as Head of IT at a Private Bank in Mauritius and joined PwC Mauritius Digital wing. With 12+ years in IT services on Oracle, he also served as Executive Director and Officer-in-Charge at a Private Bank in Mauritius. His expertise spans re-engineering processes, aligning digital tech, and implementation roadmaps across various industries globally.`,
      quote: 'We see the wave coming. Now this time next year, every company has to implement it — not even have a strategy. Implement it.',
      image: Founder3,
      linkedin: 'https://www.linkedin.com/in/shailendra-singh-bb9ab58/'
    }
  ];

  return (
    <div className="mt-8">
      <div className="my-4 py-4">
        <h2 className="my-2 text-center text-3xl text-custom-blue uppercase font-bold">Meet Our Creative Founders</h2>
        <div className='flex justify-center'>
          <div className='w-24 border-b-4 border-custom-blue'></div>
        </div>
      </div>

      <div className="w-full flex justify-center mb-12">
        <div className='m-auto max-w-6xl p-2 md:p-11'>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {founders.map((founder, index) => (
              <a key={index} href={founder.linkedin} className="bg-white rounded shadow-lg transform hover:-translate-y-2 transition-all duration-300 block" target="_blank" rel="noopener noreferrer">
                <div>
                  <img src={founder.image} alt={`Founder ${index + 1}`} className="w-full h-50v object-cover rounded-t-lg" />
                  <div className="p-6">
                    <h5 className="text-lg font-bold mb-2">{founder.name}</h5>
                    <p className="text-gray-600 font-bold">{founder.title}</p>
                    <p className="text-gray-600">{founder.intro}</p>
                    {founder.quote && (
                      <p className="text-gray-600 font-bold">
                        "{founder.quote}"
                      </p>
                    )}
                  </div>
                </div>
                <div className="bg-custom-blue text-center py-2 text-white rounded-b-lg">
                  <p className="text-sm">Connect with {founder.name}</p>
                
                  <div className="flex justify-center mt-2">
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                      <FaLinkedin size={24} />
                    </a>
                    {/* Add more social media links/icons as needed */}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
