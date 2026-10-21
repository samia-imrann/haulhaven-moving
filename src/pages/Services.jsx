import { Link } from 'react-router-dom';
import ServicesGrid from '../components/ServicesGrid';

export default function Services() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 py-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Moving Services</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Professional moving solutions tailored for residential, commercial, local, and long-distance needs.
        </p>
      </section>

      {/* Reusing the Home Page Services Grid */}
      <ServicesGrid />

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-50 text-center px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Not sure which service you need?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Give us a call or request a quote online. Our moving experts will help you figure out the perfect plan for your move.
        </p>
        <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-md font-bold transition-colors inline-block">
          Get a Free Quote
        </Link>
      </section>
    </div>
  );
}