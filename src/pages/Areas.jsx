import { MapPin } from 'lucide-react';
import MapSection from '../components/MapSection';
import { Link } from 'react-router-dom';

export default function Areas() {
  const regions = [
    { state: 'Texas', cities: ['Austin', 'Dallas', 'Houston', 'San Antonio', 'Fort Worth', 'El Paso'] },
    { state: 'Colorado', cities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Boulder'] },
    { state: 'Washington', cities: ['Seattle', 'Spokane', 'Tacoma', 'Bellevue', 'Olympia'] },
    { state: 'California', cities: ['Los Angeles', 'San Diego', 'San Francisco', 'Sacramento', 'Fresno'] }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 py-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Areas We Serve</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Providing reliable moving services across the United States. Find your city below.
        </p>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <MapPin className="text-amber-500" /> {region.state}
                </h2>
                <ul className="space-y-2 text-slate-600">
                  {region.cities.map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-4">Don't see your city? We offer long-distance moves nationwide.</p>
            <Link to="/contact" className="text-blue-900 font-bold underline hover:text-amber-500">
              Contact us to confirm your location
            </Link>
          </div>
        </div>
      </section>

      {/* Map */}
      <MapSection />
    </div>
  );
}