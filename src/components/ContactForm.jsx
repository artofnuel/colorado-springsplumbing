import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormStore } from '../store';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { formData, setFormField, resetForm } = useFormStore();

  const services = [
    'Emergency Repair',
    'Drain Cleaning',
    'Water Heater Service',
    'Fixture Installation',
    'Pipe Repair',
    'Sewer Service',
    'Backflow Prevention',
    'Water Line Service',
    'Gas Line Service',
    'Commercial Plumbing',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      resetForm();
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const inputVariants = {
    focus: { scale: 1.01, boxShadow: "0 0 0 2px #0099ff" }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className="bg-green-50 rounded-lg p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full mx-auto flex items-center justify-center text-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2 text-green-800">Request Submitted!</h3>
        <p className="text-green-700">Thank you for contacting us. We'll be in touch with you shortly.</p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-2">Request a Quote</h2>
        <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
        <motion.input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={formData.name}
          onChange={(e) => setFormField('name', e.target.value)}
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
        <motion.input
          type="tel"
          id="phone"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={formData.phone}
          onChange={(e) => setFormField('phone', e.target.value)}
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <motion.input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={formData.email}
          onChange={(e) => setFormField('email', e.target.value)}
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>
      
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
        <motion.input
          type="text"
          id="address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={formData.address}
          onChange={(e) => setFormField('address', e.target.value)}
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
        <motion.select
          id="service"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={formData.service}
          onChange={(e) => setFormField('service', e.target.value)}
          whileFocus="focus"
          variants={inputVariants}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </motion.select>
      </div>
      
      <div>
        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
        <motion.input
          type="date"
          id="preferredDate"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={formData.preferredDate}
          onChange={(e) => setFormField('preferredDate', e.target.value)}
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>
      
      <div className="md:col-span-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <motion.textarea
          id="message"
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="Please describe your issue or request in detail..."
          value={formData.message}
          onChange={(e) => setFormField('message', e.target.value)}
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>
      
      <div className="md:col-span-2">
        <motion.button
          type="submit"
          className="btn btn-primary w-full md:w-auto"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm;