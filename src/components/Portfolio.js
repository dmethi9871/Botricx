import React from 'react';
import imgAdi from '../images/adi.jpeg';
import imgPet3D from '../images/pet3d.webp';
import imgNeuphony from '../images/neuphony.jpg';

const Portfolio = () => {
    return (
        <div className="my-4 py-12" id='portfolio'>
            <h2 className="my-2 text-center text-3xl text-custom-blue uppercase font-bold">Products</h2>
            <div className='flex justify-center'>
                <div className='w-24 border-b-4 border-custom-blue mb-8'></div>
            </div>

            <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <img alt="Adi Robot" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full h-auto object-cover" src={imgAdi} />
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Adi</h4>
                            <p className="text-md font-medium leading-5 h-auto md:h-48">
                                India’s first Anthropomorphic Robot (humanoid) Adi is designed to be socially intelligent and can mimic human gestures, hold conversations. She uses a combination of AI, computer vision, and speech recognition technology. Adi has natural language processing, facial recognition, visual tracking, and other AI-based behaviors.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <img alt="Pet3D" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full h-auto object-cover" src={imgPet3D} />
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Pet3D</h4>
                            <p className="text-md font-medium leading-5 h-auto md:h-48">
                                It offers proprietary technology with an innovative system for pet measurement using AI and machine learning. By sending photos of your dog or cat, the system can identify the pet's measurements, also assisting in our Size Recommendation technology.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <img alt="Neuphony" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full h-auto object-cover" src={imgNeuphony} />
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Neuphony</h4>
                            <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Neuphony is a neurofeedback-based wearable brain device (EEG Headband) that captures key mind parameters and allows users to know their cognitive scores. The device has 8 sensors distributed in the brain's parietal, frontal & temporal lobes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
