import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import Footer from './Footer';
import Portfolio from './Portfolio';

const PortfolioPage1 = () => {
    return (
        <>
        <NavBar/>
        <br/>
        <br/>
            <Portfolio/>
            <Footer/>
        </>
    )
}

export default PortfolioPage1;