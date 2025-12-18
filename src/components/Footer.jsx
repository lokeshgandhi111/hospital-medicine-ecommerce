import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-health-primary via-health-secondary to-health-accent-mint opacity-50"></div>
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-health-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-white p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-health-primary fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight leading-none">
                  HOSPITAL<span className="text-health-primary">PHARMA</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-health-secondary">
                  Healthcare Excellence
                </span>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering healthcare through digital excellence. We provide premium medical solutions with 100% authenticity and expert care.
            </p>

            <div className="flex items-center space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-health-primary hover:text-white rounded-xl flex items-center justify-center transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Rapid Links */}
          <div>
            <h4 className="text-lg font-black mb-8 flex items-center">
              Explore <span className="w-2 h-2 bg-health-primary rounded-full ml-2"></span>
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Medical Team', 'Our Services', 'Recent Blogs', 'Contact Support'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h4 className="text-lg font-black mb-8 flex items-center">
              Specialties <span className="w-2 h-2 bg-health-secondary rounded-full ml-2"></span>
            </h4>
            <ul className="space-y-4">
              {['Cardiac Care', 'Infection Control', 'Digestive Health', 'Allergy Relief', 'Bone & Joint'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-black mb-8 flex items-center">
              Contact <span className="w-2 h-2 bg-health-accent-mint rounded-full ml-2"></span>
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-3 rounded-xl">
                  <Phone className="w-5 h-5 text-health-primary" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Emergency 24/7</p>
                  <p className="font-bold text-sm text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-3 rounded-xl">
                  <Mail className="w-5 h-5 text-health-secondary" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="font-bold text-sm text-white">care@hospitalpharma.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-3 rounded-xl">
                  <MapPin className="w-5 h-5 text-health-accent-mint" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Medical Center</p>
                  <p className="font-bold text-sm text-white leading-relaxed">123 Medical Plaza, Suite 400<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Hospital Pharma. Licensed & Verified.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-[10px] font-black text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-black text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Terms of Service</a>
            <a href="#" className="text-[10px] font-black text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
