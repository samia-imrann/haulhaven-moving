import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions'; // <-- Make sure this is here
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Areas from './pages/Areas';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function TitleUpdater() {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    let title = 'HaulHaven Moving | Professional US Movers';
    if (path === '/about') title = 'About Us | HaulHaven Moving';
    else if (path === '/services') title = 'Our Moving Services | HaulHaven Moving';
    else if (path === '/areas') title = 'Areas We Serve | HaulHaven Moving';
    else if (path === '/contact') title = 'Contact Us | HaulHaven Moving';
    else if (path.includes('/services/')) title = 'Service Details | HaulHaven Moving';
    document.title = title;
  }, [location]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TitleUpdater />
      <div className="flex flex-col min-h-screen font-sans text-[#526579] bg-[#F5F7FA]">
        <Navbar />
        <FloatingActions /> {/* <-- Make sure this is here */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;