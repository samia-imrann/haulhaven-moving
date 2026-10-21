import { ShieldCheck, Clock, HeartHandshake, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Full coverage for your peace of mind.' },
    { icon: Clock, title: 'On-Time Guarantee', desc: 'We value your time and show up when promised.' },
    { icon: HeartHandshake, title: 'Careful Handling', desc: 'Your belongings are treated like our own.' },
    { icon: Star, title: '5-Star Service', desc: 'Hundreds of satisfied customers nationwide.' },
  ];

  return (
    <section className="py-24 bg-[#102A43] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose HaulHaven?</h2>
          <p className="text-lg text-blue-100">We go the extra mile to ensure your moving day is stress-free.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden text-center bg-gradient-to-b from-[#1A365D] to-[#142E4D] p-8 rounded-2xl border border-white/5 shadow-lg group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(244,185,66,0.2)] hover:border-[#F4B942]/30 transition-all duration-300"
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-[#F4B942] rounded-2xl flex items-center justify-center mb-6 text-[#102A43] shadow-[0_0_20px_rgba(244,185,66,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#F4B942] transition-colors">{feature.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}