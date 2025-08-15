import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Wave Divider */}
      <div className="w-full h-16 md:h-24 overflow-hidden relative">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#111827" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 overflow-hidden">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10C28.5 10 14.5 23.5 10 45C10 65 25 85 50 90C75 85 90 65 90 45C85.5 23.5 71.5 10 50 10Z" fill="#6fb873"/>
                  <path d="M50 20C35.5 20 25.5 30 22.5 45C22.5 60 35 75 50 77.5C65 75 77.5 60 77.5 45C74.5 30 64.5 20 50 20Z" fill="#a3d9a5"/>
                  <path d="M50 90V10M10 45H90M30 20C30 20 35 40 50 45C65 50 70 70 70 70M70 20C70 20 65 40 50 45C35 50 30 70 30 70" stroke="#4a9b4f" strokeWidth="2"/>
                  <circle cx="50" cy="45" r="5" fill="#3c4fd9"/>
                </svg>
              </div>
              <span className="text-xl font-display font-semibold text-white">NatureAI</span>
            </Link>
            <p className="text-gray-400 mt-2">Where nature meets technology. Harnessing the power of natural patterns to create smarter AI solutions.</p>
            <div className="flex space-x-4 mt-6">
              {['twitter', 'facebook', 'instagram', 'github'].map((social) => (
                <motion.a 
                  key={social}
                  href={`https://${social}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-nature-green hover:text-white transition-colors duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {social === 'twitter' && (
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    )}
                    {social === 'facebook' && (
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    )}
                    {social === 'instagram' && (
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    )}
                    {social === 'github' && (
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-nature-green-light">Product</h3>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Demo', 'API', 'Integrations'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-nature-green-light transition-colors duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-nature-green-light">Company</h3>
              <ul className="space-y-3">
                {['About', 'Blog', 'Careers', 'Press', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-nature-green-light transition-colors duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-nature-green-light">Resources</h3>
              <ul className="space-y-3">
                {['Documentation', 'Tutorials', 'Support', 'FAQ', 'Community'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-nature-green-light transition-colors duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} NatureAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link key={item} to="#" className="text-gray-500 hover:text-nature-green-light text-sm transition-colors duration-300">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;