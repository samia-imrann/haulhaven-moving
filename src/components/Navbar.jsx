import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Areas', path: '/areas' },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 bg-white/40 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl text-white">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">

        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="HaulHaven Moving" className="h-20 w-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]" />
        </Link>

        {/* CHANGED: text-[#102A43] to text-white here */}
        <nav className="hidden md:flex flex-1 justify-end gap-10 items-center font-semibold text-[#102A43]">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-[#F4B942] border-b-2 border-[#F4B942] pb-1" : "hover:text-[#F4B942] transition-colors pb-1"
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/contact" className={({ isActive }) => `px-6 py-2.5 rounded-md font-bold transition-colors ${isActive ? 'bg-white text-[#102A43]' : 'bg-[#F4B942] text-[#102A43] hover:bg-yellow-500'}`}>
            Contact
          </NavLink>
        </nav>

        {/* CHANGED: text-[#102A43] to text-white here */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#102A43]/95 backdrop-blur-xl p-4 flex flex-col gap-4 rounded-b-2xl border-t border-white/20 text-white">
          {links.map((link) => (
            <NavLink key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="font-semibold text-white p-2">
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="bg-[#F4B942] text-[#102A43] px-5 py-3 rounded-md font-bold text-center">
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
}