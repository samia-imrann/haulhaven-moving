import { Link } from 'react-router-dom';
import { Truck, Map, Home, Building2, Package, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap = { Truck, Map, Home, Building2, Package };

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Moving Services</h2>
          <p className="text-lg text-slate-600">Whether you are moving down the street or across the country, we have the right solution for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">{service.description}</p>
                <Link to={`/services/${service.id}`} className="text-amber-500 font-semibold flex items-center gap-2 hover:text-amber-600">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}