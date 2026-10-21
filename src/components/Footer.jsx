import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#102A43] text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Brand & Description */}
        <div>
          <img src="/logo.png" alt="HaulHaven Moving" className="h-16 w-auto mb-5 brightness-0 invert" />
          <p className="text-base leading-relaxed max-w-sm">
            Providing top-rated residential and commercial moving services across the United States. Your trusted partner for a stress-free move.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3.5 text-base">
            <li><Link to="/about" className="hover:text-[#F4B942] transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#F4B942] transition-colors">Our Services</Link></li>
            <li><Link to="/areas" className="hover:text-[#F4B942] transition-colors">Areas We Serve</Link></li>
            <li><Link to="/contact" className="hover:text-[#F4B942] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info & CTA */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-base mb-6">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-[#F4B942] shrink-0 mt-0.5" />
              Dallas, Texas, USA
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[#F4B942] shrink-0" />
              <a href="tel:+15551234567" className="hover:text-[#F4B942] transition-colors">(555) 123-4567</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-[#F4B942] shrink-0" />
              <a href="mailto:hello@haulhaven.com" className="hover:text-[#F4B942] transition-colors">hello@haulhaven.com</a>
            </li>
          </ul>
          
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#F4B942] hover:bg-yellow-500 text-[#102A43] font-bold px-6 py-2.5 rounded-md transition-colors">
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-700/50 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} HaulHaven Moving. All rights reserved.</p>
      </div>
    </footer>
  );
}