import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Clock, Heart } from 'lucide-react';
import { medicines } from '../data/medicines';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredMedicines = medicines.slice(0, 8);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-health-primary to-health-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Your Trusted Healthcare Partner
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Quality medicines delivered with care. Browse our extensive collection of pharmaceuticals and healthcare products.
            </p>
            <Link to="/medicines" className="btn-accent inline-flex items-center space-x-2 text-lg">
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="bg-health-accent-mint/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-health-secondary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Authentic Products</h3>
              <p className="text-sm text-gray-600">100% genuine medicines from trusted manufacturers</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-health-accent-mint/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-health-secondary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Quick and secure delivery to your doorstep</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-health-accent-mint/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-health-secondary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Round-the-clock customer service assistance</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-health-accent-mint/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-health-secondary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-sm text-gray-600">Professional pharmaceutical guidance available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-health-bg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Medicines</h2>
              <p className="text-gray-600">Popular and trusted medications</p>
            </div>
            <Link to="/medicines" className="hidden md:flex items-center space-x-2 text-health-primary font-semibold hover:text-health-primary-dark">
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMedicines.map((medicine) => (
              <ProductCard key={medicine.id} medicine={medicine} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/medicines" className="btn-primary inline-flex items-center space-x-2">
              <span>View All Medicines</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-health-secondary to-health-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Medical Advice?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our expert pharmacists are here to help you choose the right medication
          </p>
          <button className="bg-white text-health-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Consult a Pharmacist
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

