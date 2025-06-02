import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaShower,
  FaWrench,
  FaFaucet,
  FaHome,
  FaTint,
  FaToolbox,
  FaArrowRight,
} from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import ParallaxSection from "../components/ParallaxSection";
import ServiceCard from "../components/ServiceCard";
import Testimonials from "../components/Testimonials";
import { useInView } from "react-intersection-observer";

const serviceHighlights = [
  {
    icon: <FaWrench />,
    title: "Emergency Repairs",
    description:
      "Fast response to plumbing emergencies 24/7. We are here when you need us most with prompt, reliable service.",
  },
  {
    icon: <FaShower />,
    title: "Fixture Installation",
    description:
      "Expert installation of sinks, toilets, showers, and all plumbing fixtures to enhance your home.",
  },
  {
    icon: <FaTint />,
    title: "Leak Detection & Repair",
    description:
      "Advanced techniques to locate and fix leaks quickly, preventing water damage to your property.",
  },
  {
    icon: <FaFaucet />,
    title: "Drain Cleaning",
    description:
      "Professional solutions for clogged drains and sewer lines to restore proper water flow.",
  },
];

const HomePage = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <PageTransition>
      {/* Hero Section with Parallax */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1543674892-7d64d45df18b?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height="100vh"
      >
        <div
          className="container mx-auto px-4 text-center text-white"
          ref={heroRef}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Professional Plumbing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Reliable plumbing solutions for residential and commercial
              properties in Colorado Springs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  Request a Quote
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="btn btn-outline text-lg px-8 py-4 bg-transparent text-white border-white hover:bg-white hover:bg-opacity-10"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Services Highlight Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Professional Services
            </h2>
            <p className="text-gray-600">
              From emergency repairs to new installations, our experienced
              plumbers provide comprehensive solutions for all your plumbing
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-primary-500 font-bold text-lg hover:text-primary-600 transition-colors"
            >
              View All Services <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-primary-100">
              With years of experience serving Colorado Springs, we're committed
              to excellence in every job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary-500 text-3xl mx-auto mb-4">
                <FaToolbox />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-primary-100">
                Fully certified professionals you can trust with your home or
                business.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary-500 text-3xl mx-auto mb-4">
                <FaHome />
              </div>
              <h3 className="text-xl font-bold mb-2">Locally Owned</h3>
              <p className="text-primary-100">
                A Colorado Springs company serving our community with pride and
                dedication.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary-500 text-3xl mx-auto mb-4">
                <FaTint />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-primary-100">
                Round-the-clock emergency service when you need it most.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "10,000+", label: "Projects Completed" },
              { value: "24/7", label: "Emergency Service" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-4xl font-bold text-primary-500 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-neutral-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Solve Your Plumbing Problems?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for fast, reliable plumbing services in Colorado
            Springs and the surrounding areas.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              Request Service Now
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;
