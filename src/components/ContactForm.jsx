import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <section className="py-20 bg-white" id="quote">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get a Free Moving Quote</h2>
            <p className="text-blue-100">Fill out the form below and our team will get back to you within 1 business hour.</p>
          </div>

          {submitted ? (
            <div className="bg-green-500/20 border border-green-400 text-white p-6 rounded-lg text-center font-semibold">
              Thank you! Your quote request has been received. We will contact you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">Full Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-md bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">Phone Number</label>
                <input required type="tel" className="w-full px-4 py-3 rounded-md bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">Moving From</label>
                <input required type="text" className="w-full px-4 py-3 rounded-md bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="City, State" />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">Moving To</label>
                <input required type="text" className="w-full px-4 py-3 rounded-md bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="City, State" />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">Moving Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-md bg-blue-800 border border-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">Service Type</label>
                <select className="w-full px-4 py-3 rounded-md bg-blue-800 border border-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>Local Moving</option>
                  <option>Long Distance Moving</option>
                  <option>Residential Moving</option>
                  <option>Commercial Moving</option>
                  <option>Packing & Unpacking</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-md transition-colors text-lg">
                  Request My Free Quote
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}