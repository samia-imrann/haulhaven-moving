import { ShieldCheck, Target, Users, ThumbsUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function About() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">

      {/* Reusable Page Header */}
      <PageHeader
        title="About HaulHaven"
        subtitle="Your trusted partner for stress-free moving across the United States."
        bgImage="/about-bg.jpeg"
      />

      {/* Story Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="absolute inset-0 bg-[#F4B942] rounded-2xl transform translate-x-4 translate-y-4 opacity-20"></div>
            <img
              src="/about.jpeg"
              alt="HaulHaven Moving Team"
              className="relative rounded-2xl shadow-xl w-full h-[450px] object-cover border-4 border-white"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop";
              }}
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#102A43] mb-6">Our Story</h2>
            <div className="space-y-4 text-[#526579] text-lg leading-relaxed">
              <p>
                Founded in Dallas, Texas, HaulHaven Moving started with a simple mission: to take the stress out of moving. We realized that moving wasn't just about transporting boxes; it was about transporting lives, memories, and businesses.
              </p>
              <p>
                Over the years, we have grown from a small local crew to a nationwide moving company. Despite our growth, our core values remain the same: honesty, careful handling, and treating every customer like family.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#102A43]">10+</span>
                <span className="text-sm font-medium text-[#526579]">Years Experience</span>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#102A43]">5k+</span>
                <span className="text-sm font-medium text-[#526579]">Happy Moves</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#F5F7FA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#102A43] mb-4">Our Core Values</h2>
            <p className="text-lg text-[#526579]">The principles that guide every move we make.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Integrity', desc: 'No hidden fees, no surprises. Just honest service.' },
              { icon: Target, title: 'Precision', desc: 'We handle your belongings with exact care and precision.' },
              { icon: Users, title: 'Teamwork', desc: 'Our trained professionals work together seamlessly.' },
              { icon: ThumbsUp, title: 'Reliability', desc: 'We show up on time and get the job done right.' },
            ].map((val, idx) => (
              <div key={idx} className="relative overflow-hidden bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F4B942] to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="w-16 h-16 bg-[#F4B942]/10 text-[#F4B942] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F4B942] group-hover:text-white transition-colors duration-300">
                  <val.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#102A43] mb-3">{val.title}</h3>
                <p className="text-[#526579] text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#102A43] rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F4B942] rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#F4B942] rounded-full blur-3xl opacity-20"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your next chapter?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Let our family help yours move safely and stress-free.</p>
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