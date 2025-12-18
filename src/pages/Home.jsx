import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowRight, Shield, Truck, Clock, Heart, Plus, Star, CheckCircle2 } from 'lucide-react';
import { fetchMedicines } from '../api/medicineApi';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [featuredMedicines, setFeaturedMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFeaturedMedicines = async () => {
      try {
        const data = await fetchMedicines();
        setFeaturedMedicines(data.slice(0, 4));
      } catch (err) {
        console.error('Failed to load featured medicines');
      } finally {
        setLoading(false);
      }
    };

    getFeaturedMedicines();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Decorative Elements */}
        <div className="blob -top-20 -left-20 animate-float"></div>
        <div className="blob top-1/2 -right-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-pattern opacity-50"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center space-x-2 bg-health-primary/10 border border-health-primary/20 px-4 py-2 rounded-full mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-health-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-health-primary"></span>
                </span>
                <span className="text-health-primary font-bold text-xs uppercase tracking-widest">
                  Licensed Hospital Pharmacy
                </span>
              </div>
              
              <h1 className="section-title mb-6 leading-[1.1]">
                Revolutionizing <br />
                <span className="text-gradient">Healthcare Delivery</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
                Experience the next generation of pharmacy services. 
                Get authentic medications with expert guidance, 
                delivered directly from our medical center to your doorstep.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/medicines" className="btn-primary w-full sm:w-auto text-center group">
                  Start Shopping
                  <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="btn-outline w-full sm:w-auto">
                  Consult Pharmacist
                </button>
              </div>

              <div className="mt-12 flex items-center space-x-8">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden flex items-center justify-center text-xs font-bold text-gray-500">
                      DR
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Trusted by 10k+ patients</p>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in hidden lg:block">
              <div className="relative z-10 p-4">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white p-2">
                  <div className="relative bg-health-bg h-[500px] w-full rounded-[2rem] flex items-center justify-center text-[180px] select-none animate-float">
                    💊
                  </div>
                </div>
              </div>
              {/* Floating Cards */}
              <div className="absolute top-1/4 -left-12 glass-card p-5 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Verification</p>
                    <p className="text-sm font-black">100% Authentic</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-12 -right-8 glass-card p-5 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Truck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Delivery</p>
                    <p className="text-sm font-black">Express Shipping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-black text-health-primary uppercase tracking-[0.3em] mb-4">Our Commitment</h2>
            <h3 className="section-title mb-6">Why Choose Hospital Pharma?</h3>
            <p className="text-gray-600 text-lg">We combine pharmaceutical expertise with cutting-edge technology to ensure your health is always the top priority.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Shield, 
                title: 'Safe & Secure', 
                desc: 'All medications are sourced directly from verified manufacturers and stored in controlled environments.',
                color: 'bg-blue-50 text-blue-600'
              },
              { 
                icon: Clock, 
                title: '24/7 Availability', 
                desc: 'Access our pharmacy anytime. Our online platform and emergency support are always ready for you.',
                color: 'bg-teal-50 text-teal-600'
              },
              { 
                icon: Heart, 
                title: 'Patient Centric', 
                desc: 'Our pharmacists provide personalized consultations to help you manage your health journey effectively.',
                color: 'bg-rose-50 text-rose-600'
              }
            ].map((service, i) => (
              <div key={i} className="group p-10 rounded-[2rem] hover:bg-health-bg transition-all duration-500 border border-transparent hover:border-gray-100">
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-health-bg relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-health-secondary uppercase tracking-[0.3em] mb-4">Inventory</h2>
              <h3 className="section-title">Popular Medications</h3>
            </div>
            <Link to="/medicines" className="mt-6 md:mt-0 inline-flex items-center text-health-primary font-black hover:text-health-primary-dark transition-colors group">
              Explore Catalog
              <Plus className="w-5 h-5 ml-2 group-hover:rotate-90 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {loading ? (
              [1, 2, 3, 4].map((n) => (
                <div key={n} className="bg-white p-6 rounded-2xl shadow-premium animate-pulse h-80">
                  <div className="bg-gray-200 h-40 rounded-xl mb-4"></div>
                  <div className="bg-gray-200 h-6 w-3/4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                </div>
              ))
            ) : (
              featuredMedicines.map((medicine) => (
                <ProductCard key={medicine.id} medicine={medicine} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-health-primary to-health-primary-dark rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-health-secondary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white text-center lg:text-left">
                <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Ready to prioritize <br />your health?</h3>
                <p className="text-xl text-blue-100/80 mb-10">
                  Join thousands of patients who trust our pharmacy for their daily medical needs.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <button className="bg-white text-health-primary font-black py-4 px-10 rounded-2xl hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1">
                    Create Account
                  </button>
                  <button className="bg-transparent border-2 border-white/30 text-white font-black py-4 px-10 rounded-2xl hover:bg-white/10 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 animate-float">
                   <div className="text-center text-white space-y-4">
                      <div className="text-5xl">⚡</div>
                      <p className="text-2xl font-black">Express Refill</p>
                      <p className="text-sm opacity-60">Scan prescription & get medicines <br />delivered in 2 hours</p>
                      <button className="bg-health-accent-mint text-gray-900 font-bold px-6 py-3 rounded-xl mt-4">
                        Refill Now
                      </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
