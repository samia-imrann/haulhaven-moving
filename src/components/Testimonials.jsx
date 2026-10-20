import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: 'Sarah M.', location: 'Austin, TX', text: 'The team was incredibly professional and fast. They wrapped all my furniture and not a single thing was scratched. Highly recommend!' },
    { name: 'David L.', location: 'Denver, CO', text: 'I moved cross-country for a new job and HaulHaven made the process seamless. They communicated every step of the way.' },
    { name: 'Emily R.', location: 'Seattle, WA', text: 'Moving is usually a nightmare, but these guys were amazing. Friendly, careful, and worked hard. Worth every penny.' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-slate-600">Don't just take our word for it. Read reviews from real families we've helped move.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <div className="flex gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-6">"{review.text}"</p>
              <div>
                <p className="font-bold text-blue-900">{review.name}</p>
                <p className="text-sm text-slate-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}