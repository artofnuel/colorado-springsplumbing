import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <PageTransition>
      <section className="bg-primary-500 py-24 md:py-32">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Reach out to us for any plumbing services, questions, or to schedule an appointment.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <FaPhone className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Phone</h3>
                    <p className="text-gray-600">(719) 555-1234</p>
                    <p className="text-gray-500 text-sm">Available 24/7 for emergencies</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <FaEnvelope className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-gray-600">info@cospringplumbing.com</p>
                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <FaMapMarkerAlt className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Office Location</h3>
                    <p className="text-gray-600">123 Main Street<br/>Colorado Springs, CO 80903</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <FaClock className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 4:00 PM<br/>Sunday: Closed (Emergency Service Available)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Service Area</h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve Colorado Springs and surrounding areas including Monument, Fountain, Manitou Springs, and Security-Widefield.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Find Us</h2>
          <div className="aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
            {/* This would be replaced with an actual Google Maps embed in a production environment */}
            <div className="bg-gray-300 w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Google Maps would be embedded here showing our location in Colorado Springs</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;