import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <div className="bg-slate-200 p-8 md:p-10 rounded-2xl shadow-sm border border-slate-300">
      <h2 className="text-3xl font-bold text-[#102A43] mb-2">Get a Free Quote</h2>
      <p className="text-[#526579] mb-8">Fill out the form below and our team will get back to you within 1 business hour.</p>

      {submitted ? (
        <div className="bg-green-100 border border-green-300 text-green-800 p-6 rounded-xl text-center font-semibold">
          Thank you! Your quote request has been received. We will contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-[#102A43] mb-1.5">Full Name</label>
              <input required type="text" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:border-transparent transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#102A43] mb-1.5">Phone Number</label>
              <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:border-transparent transition-all" placeholder="(555) 123-4567" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#102A43] mb-1.5">Email Address</label>
            <input required type="email" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:border-transparent transition-all" placeholder="john@example.com" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-[#102A43] mb-1.5">Moving From</label>
              <input required type="text" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:border-transparent transition-all" placeholder="City, State" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#102A43] mb-1.5">Moving To</label>
              <input required type="text" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:border-transparent transition-all" placeholder="City, State" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-[#102A43] mb-1.5">Moving Date</label>
              <input type="date" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:border-transparent transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#102A43] mb-1.5">Service Type</label>
              <select className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:border-transparent transition-all">
                <option>Local Moving</option>
                <option>Long Distance Moving</option>
                <option>Residential Moving</option>
                <option>Commercial Moving</option>
                <option>Packing & Unpacking</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#102A43] mb-1.5">Message (Optional)</label>
            <textarea rows="3" className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:border-transparent transition-all" placeholder="Any specific requirements..."></textarea>
          </div>

          <button type="submit" className="w-full bg-[#F4B942] hover:bg-yellow-500 text-[#102A43] font-bold py-4 rounded-lg transition-colors text-lg shadow-sm">
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
}