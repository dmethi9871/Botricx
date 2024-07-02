import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Keypoints from '../components/Keypoints';
import VisonAndMisson from '../components/VisonAndMisson';
import NavBar from '../components/Navbar/NavBar';
import NavBarpag1 from '../components/Navbar/NavBarpag1';

import Strategic_Partners from '../components/Strategic_Partners';



const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Keypoints/>
            <Services />
            <VisonAndMisson/>
           
            <Strategic_Partners/>
            <Clients />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

