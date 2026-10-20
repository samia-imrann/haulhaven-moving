import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function AreasWeServe() {
  const cities = ['Austin', 'Dallas', 'Houston', 'San Antonio', 'Denver', 'Seattle'];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Areas We Serve</h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">We provide top-rated moving services across the country. Check if we operate in your city.</p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {cities.map((city) => (
            <span key={city} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 text-blue-900 font-semibold">
              <MapPin size={18} className="text-amber-500" /> {city}
            </span>
          ))}
        </div>

        <Link to="/areas" className="text-blue-900 font-bold hover:text-amber-500 transition-colors underline underline-offset-4">
          View All Service Areas
        </Link>
      </div>
    </section>
  );
}