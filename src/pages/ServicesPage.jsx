import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShower, FaWrench, FaFaucet, FaTint, FaHome, FaIndustry, FaTools, FaWater, FaExclamationTriangle, FaGasPump, FaSink } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import ServiceCard from '../components/ServiceCard';

const allServices = [
  {
    category: "Residential",
    icon: <FaHome />,
    services: [
      {
        icon: <FaWrench />,
        title: 'Emergency Repairs',
        description: 'Fast response to plumbing emergencies 24/7. We\'re here when you need us most with prompt, reliable service.',
      },
      {
        icon: <FaShower />,
        title: 'Fixture Installation',
        description: 'Expert installation of sinks, toilets, showers, and all plumbing fixtures to enhance your home.',
      },
      {
        icon: <FaTint />,
        title: 'Leak Detection & Repair',
        description: 'Advanced techniques to locate and fix leaks quickly, preventing water damage to your property.',
      },
      {
        icon: <FaFaucet />,
        title: 'Drain Cleaning',
        description: 'Professional solutions for clogged drains and sewer lines to restore proper water flow.',
      }
    ]
  },
  {
    category: "Commercial",
    icon: <FaIndustry />,
    services: [
      {
        icon: <FaTools />,
        title: 'Commercial Maintenance',
        description: 'Preventative maintenance programs designed to keep your business plumbing systems operating efficiently.',
      },
      {
        icon: <FaWater />,
        title: 'Backflow Testing & Certification',
        description: 'Professional backflow prevention services to protect your water supply from contamination.',
      },
      {
        icon: <FaExclamationTriangle />,
        title: 'Code Compliance',
        description: 'Ensure your commercial plumbing meets all local and state regulations with our compliance services.',
      }
    ]
  },
  {
    category: "Specialized",
    icon: <FaTools />,
    services: [
      {
        icon: <FaGasPump />,
        title: 'Gas Line Services',
        description: 'Safe and professional gas line installation, repair, and maintenance for your home or business.',
      },
      {
        icon: <FaWater />,
        title: 'Water Treatment',
        description: 'Improve your water quality with our filtration, softening, and purification solutions.',
      },
      {
        icon: <FaSink />,
        title: 'Kitchen & Bath Remodeling',
        description: 'Professional plumbing services for your kitchen and bathroom renovation projects.',
      }
    ]
  }
];

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredServices = activeCategory === "all" 
    ? allServices.flatMap(category => category.services)
    : allServices.find(cat => cat.category === activeCategory)?.services || [];
  
  return (
    <PageTransition>
      <section className="bg-primary-500 py-24 md:py-32">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Professional Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From routine maintenance to emergency repairs, our team delivers quality plumbing solutions for homes and businesses in Colorado Springs.
          </p>
        </div>
      </section>
      
      {/* Category Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeCategory === "all" ? "bg-primary-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => setActiveCategory("all")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Services
            </motion.button>
            
            {allServices.map((category) => (
              <motion.button
                key={category.category}
                className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center ${
                  activeCategory === category.category ? "bg-primary-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setActiveCategory(category.category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.icon}</span> {category.category}
              </motion.button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard 
                key={`${activeCategory}-${index}`}
                title={service.title} 
                description={service.description} 
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-gray-600">We follow a simple, efficient process to address your plumbing needs quickly and effectively.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Contact Us",
                description: "Reach out through our form, by phone, or email to describe your plumbing needs."
              },
              {
                step: "2",
                title: "Diagnosis & Quote",
                description: "Our expert technicians will assess the situation and provide a clear, upfront quote."
              },
              {
                step: "3",
                title: "Professional Service",
                description: "We complete the job efficiently with quality workmanship and clean up after ourselves."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today for professional plumbing services you can count on.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/contact" className="btn bg-white text-primary-500 hover:bg-gray-100 text-lg px-8 py-4">
              Contact Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServicesPage;