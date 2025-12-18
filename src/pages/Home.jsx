import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMedicines } from '../api/medicineApi';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMedicines = async () => {
      try {
        const data = await fetchMedicines();
        setMedicines(data); // Fetch all medicines for the home page catalog
      } catch (err) {
        console.error('Failed to load medicines');
      } finally {
        setLoading(false);
      }
    };

    getMedicines();
  }, []);

  return (
    <div className="bg-health-bg min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900">Available Medicines</h1>
          <p className="text-gray-500 mt-2">Browse our complete inventory.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            [1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="bg-white p-6 rounded-2xl shadow-sm animate-pulse h-80">
                <div className="bg-gray-200 h-40 rounded-xl mb-4"></div>
                <div className="bg-gray-200 h-6 w-3/4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
              </div>
            ))
          ) : (
            medicines.map((medicine) => (
              <ProductCard key={medicine.id} medicine={medicine} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
