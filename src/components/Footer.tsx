import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 mt-10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © {currentYear} TaskMaster. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              <span className="sr-only">Privacy Policy</span>
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              <span className="sr-only">Terms of Service</span>
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              <span className="sr-only">Contact Us</span>
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;