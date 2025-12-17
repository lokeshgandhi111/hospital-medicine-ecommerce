import ProductList from '../components/ProductList';
import { medicines } from '../data/medicines';

const Medicines = () => {
  return <ProductList medicines={medicines} />;
};

export default Medicines;

