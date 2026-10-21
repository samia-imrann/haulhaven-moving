import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import MapSection from '../components/MapSection';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">

      {/* Page Header (Reusable Component) */}
      <PageHeader
        title="Contact Us"
        subtitle="Ready to move? Get in touch with our team for a free, no-obligation quote."
        bgImage="/contact-bg.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 space-y-6">

            {/* Top Card (Blue with Gray Ombre, Yellow Text) */}
            <div className="bg-gradient-to-br from-[#102A43] to-[#526579] rounded-2xl shadow-md border border-white/10 p-8 relative overflow-hidden">
              {/* Decorative ombre shapes */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute top-10 -right-5 w-20 h-20 bg-slate-300/10 rounded-full opacity-40 blur-md"></div>

              <div className="relative z-10 space-y-6">
                <a href="mailto:hello@haulhaven.com" className="flex items-center gap-4 group">
                  <Mail size={22} className="text-[#F4B942] group-hover:text-white transition-colors" />
                  <p className="text-xl font-medium text-[#F4B942] group-hover:text-white transition-colors">hello@haulhaven.com</p>
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-4 group">
                  <Phone size={22} className="text-[#F4B942] group-hover:text-white transition-colors" />
                  <p className="text-xl font-medium text-[#F4B942] group-hover:text-white transition-colors">(555) 123-4567</p>
                </a>
              </div>
            </div>

            {/* Bottom Card (Image + WhatsApp) */}
            <div className="relative rounded-2xl shadow-md overflow-hidden h-80 bg-slate-800">
              {/* Dallas Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: "url('/dallas.jpeg')" }}
              ></div>

              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-[#102A43]/60 to-transparent"></div>

              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">United States</h3>
                <p className="text-blue-100 text-lg mb-6">Dallas, Texas, USA</p>

                {/* WhatsApp Number */}
                <div className="flex items-center gap-3 text-white font-medium text-lg border-t border-white/20 pt-4">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  +1 (555) 123-4567
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <MapSection />
    </div>
  );
}