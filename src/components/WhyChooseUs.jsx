import { ShieldCheck, Clock, HeartHandshake, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Full coverage for your peace of mind.' },
    { icon: Clock, title: 'On-Time Guarantee', desc: 'We value your time and show up when promised.' },
    { icon: HeartHandshake, title: 'Careful Handling', desc: 'Your belongings are treated like our own.' },
    { icon: Star, title: '5-Star Service', desc: 'Hundreds of satisfied customers nationwide.' },
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose HaulHaven?</h2>
          <p className="text-lg text-blue-100">We go the extra mile to ensure your moving day is stress-free.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-800 rounded-full flex items-center justify-center mb-4 text-amber-400">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-blue-200">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}