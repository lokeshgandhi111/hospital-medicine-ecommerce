import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-health-accent-mint" />
              <h3 className="text-xl font-bold">Hospital Pharmacy</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in healthcare. We provide quality medicines and healthcare products with professional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-health-accent-mint transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-health-accent-mint transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-health-accent-mint transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-health-accent-mint transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-health-accent-mint transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-health-accent-mint transition-colors">Pain Relief</a></li>
              <li><a href="#" className="hover:text-health-accent-mint transition-colors">Antibiotics</a></li>
              <li><a href="#" className="hover:text-health-accent-mint transition-colors">Cardiovascular</a></li>
              <li><a href="#" className="hover:text-health-accent-mint transition-colors">Supplements</a></li>
              <li><a href="#" className="hover:text-health-accent-mint transition-colors">All Products</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-health-accent-mint mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-health-accent-mint mt-0.5 flex-shrink-0" />
                <span>pharmacy@hospital.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-health-accent-mint mt-0.5 flex-shrink-0" />
                <span>123 Medical Center Dr, City, State 12345</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-health-accent-mint mt-0.5 flex-shrink-0" />
                <span>Mon-Sat: 8AM - 8PM<br />Sun: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hospital Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

