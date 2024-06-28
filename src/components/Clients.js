import React, { useEffect, useRef } from 'react';
import kws from '../images/clients/Larsen__Toubro_Logo-2048x378.png';
import StrateficInsights from '../images/clients/StrateficInsights.png';
import CIM_Finance from '../images/clients/CIM Finance.png';
import HDFC from '../images/clients/Hdfc.png';
import Indroma from '../images/clients/indroma.svg';
import IQEQ from '../images/clients/IQEQ.svg';
import JSW from '../images/clients/JSW.png';
import Avatara from '../images/clients/avatara.png';

const clientImage = {
    height: 'auto',
    width: '13rem',
    marginRight: '5rem',
    marginLeft: '5rem',
    mixBlendMode: 'colorBurn',
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'
};

const Clients = () => {
    const scrollContainerRef = useRef(null);
    const images = [kws, StrateficInsights, CIM_Finance, HDFC, Indroma, IQEQ, JSW, Avatara];

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        let scrollAmount = 0;
        let scrollDirection = 1;

        const scrollStep = () => {
            if (scrollContainer) {
                scrollAmount += scrollDirection;
                scrollContainer.scrollLeft += scrollDirection;

                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollDirection = -1;
                } else if (scrollContainer.scrollLeft <= 0) {
                    scrollDirection = 1;
                }
            }
        };

        const scrollInterval = setInterval(scrollStep, 20);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-custom-blue uppercase font-bold">Our Clients</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-custom-blue'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-custom-blue">Some of our clients.</h2>
                </div>
                <div className="px-2 py-16 overflow-hidden">
                    <div
                        ref={scrollContainerRef}
                        className="flex space-x-1 overflow-x-auto scroll-smooth"
                        style={{
                            width: '100%',
                            // overflowX: 'hidden',
                            margin: '1 -10rem', // Adjusted negative margin to offset clientImage margins
                            padding: '1-10rem', // Adjusted padding to offset clientImage margins
                            // scrollbarWidth: 'none', // Firefox
                            // msOverflowStyle: 'none', // IE and Edge
                        }}
                    >
                        {images.map((image, index) => (
                            <div key={index} style={clientImage} className=" mb-5 flex-shrink-0 overflow-hidden flex justify-center items-center opacity-50 hover:opacity-100 hover:transform hover:scale-105">
                                <img src={image} alt={`client-${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
