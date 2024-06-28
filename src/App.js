import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Keypoints from './components/Keypoints';
import IntroPage from './components/Intropage1';
import ServicesPage1 from './components/ServicesPage1';
import PortfolioPage1 from './components/Portfoliopage1';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("MLD | Molad e Konsult - Bespoke Web and Mobile Applications");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<IntroPage/>} />
            <Route path="/Keypoints" element={<Keypoints/>} />
            <Route path="/Products" element={<PortfolioPage1/>} />
            <Route path="/Services" element={<ServicesPage1 />} />
         
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;