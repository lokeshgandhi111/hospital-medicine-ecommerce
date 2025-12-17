import { ShoppingCart, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ProductCard = ({ medicine }) => {
  const { addToCart } = useCart();
  const [showPrescriptionAlert, setShowPrescriptionAlert] = useState(false);

  const handleAddToCart = () => {
    if (medicine.requiresPrescription) {
      setShowPrescriptionAlert(true);
      setTimeout(() => setShowPrescriptionAlert(false), 3000);
    } else {
      addToCart(medicine);
    }
  };

  return (
    <div className="card p-6 relative overflow-hidden group">
      {/* Prescription Badge */}
      {medicine.requiresPrescription && (
        <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
          Rx Required
        </div>
      )}

      {/* Stock Badge */}
      {medicine.stock < 20 && (
        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
          Low Stock
        </div>
      )}

      {/* Product Image/Emoji */}
      <div className="text-6xl text-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {medicine.image}
      </div>

      {/* Product Info */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{medicine.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{medicine.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-health-secondary bg-health-secondary/10 px-3 py-1 rounded-full">
            {medicine.category}
          </span>
          <span className="text-xs text-gray-500">Stock: {medicine.stock}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-health-primary">₹{medicine.price.toFixed(2)}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-health-primary hover:bg-health-primary-dark text-white p-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            title={medicine.requiresPrescription ? "Prescription required" : "Add to cart"}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Manufacturer */}
      <p className="text-xs text-gray-500 mt-2">{medicine.manufacturer}</p>

      {/* Prescription Alert */}
      {showPrescriptionAlert && (
        <div className="absolute bottom-4 left-4 right-4 bg-amber-100 border border-amber-400 text-amber-800 px-4 py-2 rounded-lg flex items-center space-x-2 animate-pulse">
          <AlertCircle className="w-4 h-4" />
          <span className="text-xs font-semibold">Prescription required for this medication</span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

