import React from 'react';
import { FaRobot, FaIndustry,  FaFileAlt, FaTools, FaClipboardList, FaChartLine, FaStethoscope, FaStore, FaNetworkWired, FaUserFriends, FaDollarSign, FaLaptop } from 'react-icons/fa'; // Importing new icons
import img from '../images/blockchain-development.gif';
import img2 from '../images/about.gif';
import img3 from '../images/Launchy-ani-5.gif';
import img4 from '../images/image_processing20200407-22533-gselen.gif';
import NavBar from './Navbar/NavBar';
import Footer from './Footer';
import Services from './Services';


const ServicesPage1 = () => {
  return (

   <>
<NavBar/>
<br/>
<br/>
      <Services/>
      <Footer/>
      </>
  );
}

export default ServicesPage1;
