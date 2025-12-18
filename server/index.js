const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data (to be replaced with DB)
const medicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    description: "Pain reliever and fever reducer. Effective for headaches, muscle aches, and reducing fever.",
    price: 45.0,
    category: "Pain Relief",
    image: "💊",
    stock: 150,
    requiresPrescription: false,
    manufacturer: "MediCare Pharma",
  },
  {
    id: 2,
    name: "Ibuprofen 200mg",
    description: "Anti-inflammatory medication for pain, inflammation, and fever. Suitable for adults and children over 12.",
    price: 89.0,
    category: "Pain Relief",
    image: "💉",
    stock: 120,
    requiresPrescription: false,
    manufacturer: "HealthCare Labs",
  },
  {
    id: 3,
    name: "Amoxicillin 250mg",
    description: "Antibiotic used to treat various bacterial infections. Prescription required.",
    price: 250.0,
    category: "Antibiotics",
    image: "💊",
    stock: 80,
    requiresPrescription: true,
    manufacturer: "BioPharm Inc",
  },
  {
    id: 4,
    name: "Aspirin 100mg",
    description: "Blood thinner and pain reliever. Used for heart conditions and mild pain relief.",
    price: 55.0,
    category: "Cardiovascular",
    image: "💊",
    stock: 200,
    requiresPrescription: false,
    manufacturer: "CardioMed",
  },
  {
    id: 5,
    name: "Omeprazole 20mg",
    description: "Proton pump inhibitor for treating acid reflux, heartburn, and stomach ulcers.",
    price: 180.0,
    category: "Digestive",
    image: "💊",
    stock: 90,
    requiresPrescription: false,
    manufacturer: "Digestive Health Co",
  },
  {
    id: 6,
    name: "Loratadine 10mg",
    description: "Antihistamine for allergy relief. Non-drowsy formula for seasonal allergies.",
    price: 95.0,
    category: "Allergy",
    image: "💊",
    stock: 140,
    requiresPrescription: false,
    manufacturer: "AllergyCare",
  },
  {
    id: 7,
    name: "Metformin 500mg",
    description: "Diabetes medication to control blood sugar levels. Prescription required.",
    price: 320.0,
    category: "Diabetes",
    image: "💊",
    stock: 75,
    requiresPrescription: true,
    manufacturer: "Diabetic Solutions",
  },
  {
    id: 8,
    name: "Atorvastatin 20mg",
    description: "Cholesterol-lowering medication. Prescription required.",
    price: 280.0,
    category: "Cardiovascular",
    image: "💊",
    stock: 85,
    requiresPrescription: true,
    manufacturer: "CardioMed",
  },
  {
    id: 9,
    name: "Cetirizine 10mg",
    description: "Antihistamine for allergy symptoms. Fast-acting relief for hives and itching.",
    price: 75.0,
    category: "Allergy",
    image: "💊",
    stock: 160,
    requiresPrescription: false,
    manufacturer: "AllergyCare",
  },
  {
    id: 10,
    name: "Calcium Carbonate",
    description: "Calcium supplement for bone health. 1000mg per tablet with Vitamin D.",
    price: 120.0,
    category: "Supplements",
    image: "💊",
    stock: 180,
    requiresPrescription: false,
    manufacturer: "NutriHealth",
  },
  {
    id: 11,
    name: "Vitamin D3 1000IU",
    description: "Essential vitamin D supplement for bone health and immune support.",
    price: 150.0,
    category: "Supplements",
    image: "💊",
    stock: 200,
    requiresPrescription: false,
    manufacturer: "NutriHealth",
  },
  {
    id: 12,
    name: "Azithromycin 250mg",
    description: "Broad-spectrum antibiotic for bacterial infections. Prescription required.",
    price: 290.0,
    category: "Antibiotics",
    image: "💊",
    stock: 70,
    requiresPrescription: true,
    manufacturer: "BioPharm Inc",
  },
];

// Routes
app.get('/api/medicines', (req, res) => {
  res.json(medicines);
});

app.get('/api/medicines/:id', (req, res) => {
  const medicine = medicines.find(m => m.id === parseInt(req.params.id));
  if (!medicine) return res.status(404).send('Medicine not found');
  res.json(medicine);
});

// Basic route
app.get('/', (req, res) => {
  res.send('Hospital Pharma API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

