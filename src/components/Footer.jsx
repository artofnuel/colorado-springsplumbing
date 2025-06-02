import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYelp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Colorado Springs</span>
              <span className="text-primary-500"> Plumbing</span>
            </h3>
            <p className="mb-6">Professional plumbing services for residential and commercial clients in Colorado Springs and surrounding areas.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors">
                <FaYelp size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-primary-500 transition-colors">Emergency Repairs</Link></li>
              <li><Link to="/services" className="hover:text-primary-500 transition-colors">Drain Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-primary-500 transition-colors">Water Heater Services</Link></li>
              <li><Link to="/services" className="hover:text-primary-500 transition-colors">Fixture Installation</Link></li>
              <li><Link to="/services" className="hover:text-primary-500 transition-colors">Pipe Repair & Replacement</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-500 transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-500 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-primary-500" />
                <span>(719) 555-1234</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-primary-500" />
                <span>info@cospringplumbing.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary-500" />
                <span>123 Main Street<br />Colorado Springs, CO 80903</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Colorado Springs Plumbing. All Rights Reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-primary-500 transition-colors">Privacy Policy</Link>
            {' | '}
            <Link to="/terms" className="hover:text-primary-500 transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;