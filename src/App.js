import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { ReactComponent as TopArr } from './assets/image/Home/svg/scrollTop.svg';
import Footer from './components/Footer';
import Header from './components/Header';
import PNShadowBtn from './components/PNShadowBtn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Loader from './components/Loader';

function App() {
  // scroll to top button
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // AOS
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loader
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        {showLoading && <Loader />}
      </div>
      <div>
        {isVisible && (
          <PNShadowBtn onClick={scrollToTop} className="z-50 fixed bottom-5 right-5 lg:bottom-10 lg:right-10 bg-cstm-blue-100">
              <TopArr className='stroke-primary-100'/>
          </PNShadowBtn>
        )}
      </div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
