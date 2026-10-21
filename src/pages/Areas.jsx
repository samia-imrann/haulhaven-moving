import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MapSection from '../components/MapSection';
import PageHeader from '../components/PageHeader';

export default function Areas() {
  const regions = [
    { state: 'Texas', cities: ['Austin', 'Dallas', 'Houston', 'San Antonio', 'Fort Worth', 'El Paso'] },
    { state: 'Colorado', cities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Boulder'] },
    { state: 'Washington', cities: ['Seattle', 'Spokane', 'Tacoma', 'Bellevue', 'Olympia'] },
    { state: 'California', cities: ['Los Angeles', 'San Diego', 'San Francisco', 'Sacramento', 'Fresno'] }
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen">

      {/* Reusable Page Header */}
      <PageHeader
        title="Areas We Serve"
        subtitle="Providing reliable moving services across the United States. Find your city below."
        bgImage="/areas-bg.jpeg"
      />

      {/* Locations Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {regions.map((region, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden bg-[#F5F7FA] p-8 rounded-2xl border border-gray-100 shadow-sm group hover:-translate-y-2 hover:shadow-xl hover:border-[#F4B942]/30 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F4B942] to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <h2 className="text-xl font-bold text-[#102A43] mb-5 flex items-center gap-2">
                  <MapPin className="text-[#F4B942]" size={24} /> {region.state}
                </h2>
                <ul className="space-y-3 text-[#526579] text-sm font-medium">
                  {region.cities.map((city) => (
                    <li key={city} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#F4B942] rounded-full"></span> {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[#526579] text-lg mb-4">Don't see your city? We offer long-distance moves nationwide.</p>
            <Link to="/contact" className="text-[#102A43] font-bold underline underline-offset-4 hover:text-[#F4B942] transition-colors">
              Contact us to confirm your location
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* Bottom CTA (Floating Style) */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#102A43] rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F4B942] rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#F4B942] rounded-full blur-3xl opacity-20"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Moving from or to one of these areas?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Let our team handle the heavy lifting. Get a custom quote tailored to your exact route.
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