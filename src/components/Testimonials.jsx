import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'John Davis',
    position: 'Homeowner',
    quote: 'Colorado Springs Plumbing saved us during a major water heater emergency. They arrived promptly and fixed the issue with incredible professionalism. Highly recommend their services!',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    position: 'Property Manager',
    quote: 'Managing multiple properties requires reliable service partners. Colorado Springs Plumbing has consistently delivered exceptional service for all our plumbing needs across our properties.',
    rating: 5
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    position: 'Restaurant Owner',
    quote: 'When our restaurant faced plumbing issues that threatened to shut us down, the team arrived quickly and worked efficiently to get us back in business with minimal disruption.',
    rating: 4
  }
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">Don't just take our word for it. Here's what our customers have to say about our services.</p>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FaQuoteLeft className="text-4xl text-primary-200 absolute top-6 left-6 opacity-50" />
              <div className="relative z-10">
                <p className="mb-6 text-gray-700 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-500">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;