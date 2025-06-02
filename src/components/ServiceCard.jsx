import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, link = '/contact', delay = 0 }) => {
  return (
    <motion.div
      className="card h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="p-6 flex-grow">
        <div className="w-16 h-16 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center text-2xl mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <div className="p-6 pt-0 mt-auto">
        <Link 
          to={link} 
          className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          Learn more <FaArrowRight className="ml-2 text-sm" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;