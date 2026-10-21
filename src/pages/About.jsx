import { ShieldCheck, Target, Users, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 py-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About HaulHaven Moving</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Your trusted partner for stress-free moving across the United States.
        </p>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              alt="Moving team"
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Founded in Austin, Texas, HaulHaven Moving started with a simple mission: to take the stress out of moving. We realized that moving wasn't just about transporting boxes; it was about transporting lives, memories, and businesses.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Over the years, we have grown from a small local crew to a nationwide moving company. Despite our growth, our core values remain the same: honesty, careful handling, and treating every customer like family.
            </p>
            <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-bold transition-colors inline-block">
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide every move we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Integrity', desc: 'No hidden fees, no surprises. Just honest service.' },
              { icon: Target, title: 'Precision', desc: 'We handle your belongings with exact care and precision.' },
              { icon: Users, title: 'Teamwork', desc: 'Our trained professionals work together seamlessly.' },
              { icon: ThumbsUp, title: 'Reliability', desc: 'We show up on time and get the job done right.' },
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <val.icon size={24} />
                </div>
                <h3 className="font-bold text-blue-900 mb-2">{val.title}</h3>
                <p className="text-sm text-slate-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}