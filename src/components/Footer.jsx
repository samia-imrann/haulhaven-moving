import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#102A43] text-[#526579] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <img src="/logo.png" alt="HaulHaven Moving" className="h-12 mb-4 brightness-0 invert" />
          <p className="mb-4 text-sm text-gray-300">Providing top-rated residential and commercial moving services across the United States.</p>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/about" className="hover:text-[#F4B942]">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#F4B942]">Our Services</Link></li>
            <li><Link to="/areas" className="hover:text-[#F4B942]">Areas We Serve</Link></li>
            <li><Link to="/contact" className="hover:text-[#F4B942]">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#F4B942] shrink-0" />
              Dallas, Texas, USA
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#F4B942] shrink-0" />
              <a href="tel:+15551234567" className="hover:text-[#F4B942]">(555) 123-4567</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#F4B942] shrink-0" />
              <a href="mailto:hello@haulhaven.com" className="hover:text-[#F4B942]">hello@haulhaven.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-700 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} HaulHaven Moving. All rights reserved.
      </div>
    </footer>
  );
}