import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Phone, ArrowLeft } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import ContactForm from '../components/ContactForm';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  // If the URL is wrong (e.g., /services/abc), show this:
  if (!service) {
    return (
      <div className="py-32 text-center bg-[#F5F7FA] min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-[#102A43] mb-4">Service Not Found</h2>
        <p className="text-[#526579] mb-8">The service you are looking for does not exist.</p>
        <Link to="/services" className="bg-[#102A43] text-white px-6 py-3 rounded-md hover:bg-[#F4B942] transition-colors">
          View All Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F7FA]">
      {/* Page Header */}
      <section className="bg-[#102A43] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-[#F4B942] hover:text-white transition-colors mb-6 font-semibold">
            <ArrowLeft size={18} /> Back to All Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg text-blue-100 max-w-3xl">{service.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-8">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-[#102A43] mb-4">Service Overview</h2>
                <p className="text-[#526579] text-lg leading-relaxed mb-8">
                  {service.longDescription}
                </p>

                <h3 className="text-xl font-bold text-[#102A43] mb-4">What's Included:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#F4B942] shrink-0 mt-1" size={20} />
                      <span className="text-[#526579] font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-[#102A43] p-8 rounded-xl shadow-lg sticky top-24 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Move?</h3>
                <p className="text-blue-100 mb-8">
                  Get a free, no-obligation quote for your {service.title.toLowerCase()} today.
                </p>
                <a href="tel:+15551234567" className="flex items-center justify-center gap-2 w-full bg-[#F4B942] hover:bg-yellow-500 text-[#102A43] font-bold py-4 rounded-md transition-colors mb-4">
                  <Phone size={20} /> Call (555) 123-4567
                </a>
                <p className="text-sm text-blue-200">Or fill out the form below to request a quote online.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reuse the Contact Form */}
      <ContactForm />
    </div>
  );
}