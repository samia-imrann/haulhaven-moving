import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import AreasWeServe from '../components/AreasWeServe';
import ContactForm from '../components/ContactForm';
import MapSection from '../components/MapSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <AreasWeServe />
      <ContactForm />
      <MapSection />
    </div>
  );
}