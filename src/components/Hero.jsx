import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32">
      {/* NEW Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-[#102A43]/80 px-4 py-2 rounded-full mb-6 text-sm font-semibold text-[#F4B942] backdrop-blur-sm border border-white/10">
          <ShieldCheck size={18} />
          Licensed & Insured US Movers
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-3xl leading-tight mb-6">
          Moving Made Simple. <br />
          <span className="text-[#F4B942]">Moving Made Stress-Free.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10">
          Professional local and long-distance moving services tailored to your needs. Trusted by thousands of American families and businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="bg-[#F4B942] hover:bg-yellow-500 text-[#102A43] px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 transition-colors">
            Get a Free Quote <ArrowRight size={20} />
          </Link>
          <a href="tel:+15551234567" className="bg-white hover:bg-slate-100 text-[#102A43] px-8 py-4 rounded-md font-bold text-lg text-center transition-colors">
            Call (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}