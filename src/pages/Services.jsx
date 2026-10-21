import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServicesGrid from '../components/ServicesGrid';
import PageHeader from '../components/PageHeader';

export default function Services() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">

      {/* Reusable Page Header */}
      <PageHeader
        title="Our Services"
        subtitle="Professional moving solutions tailored for residential, commercial, local, and long-distance needs."
        bgImage="/services-bg.jpeg"
      />

      {/* Reusing the Home Page Services Grid */}
      <ServicesGrid />

      {/* Bottom CTA (Floating Style) */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#102A43] rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F4B942] rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#F4B942] rounded-full blur-3xl opacity-20"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Not sure which service you need?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Give us a call or request a quote online. Our moving experts will help you figure out the perfect plan for your move.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#F4B942] hover:bg-yellow-500 text-[#102A43] font-bold px-8 py-4 rounded-md transition-colors text-lg">
                Get a Free Quote <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}