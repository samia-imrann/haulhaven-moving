import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Areas', path: '/areas' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="HaulHaven Moving" className="h-12" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-semibold text-slate-700">
          {links.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-amber-500 transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+15551234567" className="flex items-center gap-2 font-bold text-blue-900 hover:text-amber-500 transition-colors">
            <Phone size={18} />
            (555) 123-4567
          </a>
          <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-md font-semibold transition-colors">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="font-semibold text-slate-700 p-2">
              {link.name}
            </Link>
          ))}
          <a href="tel:+15551234567" className="flex items-center gap-2 font-bold text-blue-900 p-2">
            <Phone size={18} /> (555) 123-4567
          </a>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-amber-500 text-white px-5 py-3 rounded-md font-semibold text-center">
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}