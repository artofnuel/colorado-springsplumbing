import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <div className="text-center">
          <motion.h1 
            className="text-9xl font-bold text-primary-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            404
          </motion.h1>
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Page Not Found
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="btn btn-primary inline-flex items-center"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;