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
  return (
    <>
      <div>
        {isVisible && (
          <PNShadowBtn onClick={scrollToTop} className="z-50 fixed bottom-10 right-10 bg-cstm-blue-100">
              <TopArr className='stroke-primary-100'/>
          </PNShadowBtn>
        )}
      </div>
      <Header />
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
