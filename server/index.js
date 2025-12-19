const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");
const Medicine = require("./models/Medicine");
const Lab = require("./models/Lab"); // Import Lab model

const medicineRoutes = require("./routes/medicineRoutes");
const orderRoutes = require("./routes/orderRoutes");
const prescriptionRoutes = require("./routes/prescriptionRoutes");
const testBookingRoutes = require("./routes/testBookingRoutes");
const labRoutes = require("./routes/labRoutes"); // Import Lab routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/medicines", medicineRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/test-bookings", testBookingRoutes);
app.use("/api/labs", labRoutes); // Use Lab routes

// ✅ Serve Static Frontend Files (Production)
// ✅ Serve Static Frontend Files (Production)
const frontendPath = path.join(__dirname, "../dist");
app.use(express.static(frontendPath));

// ✅ Handle React Router (SPA Fallback)
app.get(/.*/, (req, res) => {
	res.sendFile(path.join(frontendPath, "index.html"));
});

// Connect DB & seed (ONLY IF EMPTY)
connectDB().then(async () => {
	try {
		const count = await Medicine.countDocuments();

		if (count < 4) {
			await Medicine.deleteMany({}); // Clear old data to ensure full list is seeded
			await Medicine.insertMany([
				{
					name: "Paracetamol 500mg",
					description:
						"Pain reliever and fever reducer. Effective for headaches, muscle aches, and reducing fever.",
					price: 45,
					category: "Pain Relief",
					image: "uploads/medicines/Paracetamol 500mg.jpeg",
					stock: 150,
					requiresPrescription: false,
					manufacturer: "MediCare Pharma",
				},
				{
					name: "Ibuprofen 200mg",
					description:
						"Anti-inflammatory medication for pain, inflammation, and fever.",
					price: 89,
					category: "Pain Relief",
					image: "uploads/medicines/Ibuprofen 200mg.jpeg",
					stock: 120,
					requiresPrescription: false,
					manufacturer: "HealthCare Labs",
				},
				{
					name: "Amoxicillin 250mg",
					description:
						"Antibiotic used to treat various bacterial infections. Prescription required.",
					price: 250,
					category: "Antibiotics",
					image: "uploads/medicines/amoxicillin 250mg.webp",
					stock: 80,
					requiresPrescription: true,
					manufacturer: "BioPharm Inc",
				},
				{
					name: "Aspirin 100mg",
					description: "Blood thinner and pain reliever.",
					price: 55,
					category: "Cardiovascular",
					image: "uploads/medicines/Aspirin 100mg.jpeg",
					stock: 200,
					requiresPrescription: false,
					manufacturer: "CardioMed",
				},
				{
					name: "Omeprazole 20mg",
					description: "Used for acid reflux, heartburn, and stomach ulcers.",
					price: 180,
					category: "Digestive",
					image: "uploads/medicines/Omeprazole 20mg.jpeg",
					stock: 90,
					requiresPrescription: false,
					manufacturer: "Digestive Health Co",
				},
				{
					name: "Loratadine 10mg",
					description: "Antihistamine for allergy relief.",
					price: 95,
					category: "Allergy",
					image: "uploads/medicines/Loratadine 10mg.jpeg",
					stock: 140,
					requiresPrescription: false,
					manufacturer: "AllergyCare",
				},
				{
					name: "Metformin 500mg",
					description: "Diabetes medication to control blood sugar levels.",
					price: 320,
					category: "Diabetes",
					image: "uploads/medicines/Metformin 500mg.jpeg",
					stock: 75,
					requiresPrescription: true,
					manufacturer: "Diabetic Solutions",
				},
				{
					name: "Atorvastatin 20mg",
					description: "Cholesterol-lowering medication.",
					price: 280,
					category: "Cardiovascular",
					image: "uploads/medicines/Atorvastatin 20mg.jpeg",
					stock: 85,
					requiresPrescription: true,
					manufacturer: "CardioMed",
				},
				{
					name: "Cetirizine 10mg",
					description: "Fast-acting allergy relief.",
					price: 75,
					category: "Allergy",
					image: "uploads/medicines/Cetirizine 10mg.jpeg",
					stock: 160,
					requiresPrescription: false,
					manufacturer: "AllergyCare",
				},
				{
					name: "Calcium Carbonate",
					description: "Calcium supplement for bone health.",
					price: 120,
					category: "Supplements",
					image: "uploads/medicines/Calcium Carbonate.jpeg",
					stock: 180,
					requiresPrescription: false,
					manufacturer: "NutriHealth",
				},
				{
					name: "Vitamin D3 1000IU",
					description: "Vitamin D supplement for immunity and bone health.",
					price: 150,
					category: "Supplements",
					image: "uploads/medicines/Vitamin D3 1000IU.jpeg",
					stock: 200,
					requiresPrescription: false,
					manufacturer: "NutriHealth",
				},
				{
					name: "Azithromycin 250mg",
					description: "Broad-spectrum antibiotic.",
					price: 290,
					category: "Antibiotics",
					image: "uploads/medicines/Azithromycin 250mg.jpeg",
					stock: 70,
					requiresPrescription: true,
					manufacturer: "BioPharm Inc",
				},
			]);

			console.log("✅ Seeded full list of medicines");
		}

    // FORCE UPDATE: Clear existing labs to ensure new custom data is loaded
    // This meets the user's request for the "easiest, error-free" way to see changes.
    await Lab.deleteMany({});
    console.log("🧹 Cleared existing labs to ensure fresh seed.");
    
    const labCount = await Lab.countDocuments();
    if (labCount === 0) {
      
      const getRandomTests = (type) => {
        const pathologyTests = [
          { code: "CBC", name: "Complete Blood Count (Blood Test)", price: 400, category: "Basic Health" },
          { code: "FBS", name: "Sugar Test (Fasting)", price: 200, category: "Diabetes" },
          { code: "PPBS", name: "Sugar Test (Post-Meal)", price: 200, category: "Diabetes" },
          { code: "HBA1C", name: "3-Month Sugar Average (HbA1c)", price: 600, category: "Diabetes" },
          { code: "LIPID", name: "Cholesterol & Heart Test", price: 800, category: "Heart Health" },
          { code: "TSH", name: "Thyroid Test (TSH)", price: 350, category: "Thyroid" },
          { code: "LFT", name: "Liver Health Test", price: 700, category: "Liver & Kidney" },
          { code: "KFT", name: "Kidney Health Test", price: 800, category: "Liver & Kidney" },
          { code: "CALCIUM", name: "Calcium Test", price: 250, category: "Vitamins" },
          { code: "VITD", name: "Vitamin D Test", price: 1200, category: "Vitamins" },
          { code: "VITB12", name: "Vitamin B12 Test", price: 800, category: "Vitamins" },
          { code: "IRON", name: "Iron Deficiency Test", price: 550, category: "Iron Study" },
          { code: "DENGUE", name: "Dengue Fever Test", price: 1000, category: "Fever Package" },
          { code: "TYPHOID", name: "Typhoid Test", price: 400, category: "Fever Package" },
          { code: "URINE", name: "Urine Infection Test", price: 300, category: "Infection" },
        ];
        const radiologyTests = [
          { code: "XRAY-CHEST", name: "X-Ray Chest PA View", price: 500, category: "X-Ray" },
          { code: "ECG", name: "Heart Rate Graph (ECG)", price: 400, category: "Heart Health" },
          { code: "USG-ABDO", name: "Ultrasound Abdomen (Stomach)", price: 1200, category: "Ultrasound" },
          { code: "CT-BRAIN", name: "CT Scan Brain", price: 2500, category: "CT Scan" },
          { code: "MRI-KNEE", name: "MRI Knee", price: 4500, category: "MRI" },
        ];

        let available = [];
        const lowerType = type ? type.toLowerCase() : "";

        if (lowerType.includes("scan") || lowerType.includes("imaging")) {
          available = [...available, ...radiologyTests];
        }
        if (lowerType.includes("pathology") || lowerType.includes("lab") || lowerType.includes("diagnostic")) {
           available = [...available, ...pathologyTests];
        }
        // distinct default
        if (available.length === 0) available = [...pathologyTests];

        // Pick random subset
        return available.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 3);
      };

      const customLabs = [
        // --- Palakollu (4 Labs) ---
        { name: "Sri Vijaya Diagnostic Centre", city: "Palakollu", district: "West Godavari", type: "Diagnostic Lab" },
        { name: "Krishna Diagnostics", city: "Palakollu", district: "West Godavari", type: "Pathology" },
        { name: "Dr Lal PathLabs", city: "Palakollu", district: "West Godavari", type: "Pathology" },
        { name: "MedPlus Pathlabs", city: "Palakollu", district: "West Godavari", type: "Pathology (Home Collection)" },

        // --- Bhimavaram (4 Labs) ---
        { name: "Lotus Diagnostics", city: "Bhimavaram", district: "West Godavari", type: "Diagnostic Lab" },
        { name: "Apollo Diagnostics", city: "Bhimavaram", district: "West Godavari", type: "Pathology & Imaging" },
        { name: "SRL Diagnostics", city: "Bhimavaram", district: "West Godavari", type: "Pathology" },
        { name: "Bhimavaram Scans & Labs", city: "Bhimavaram", district: "West Godavari", type: "Scan & Diagnostics" },

        // --- Eluru (4 Labs) ---
        { name: "Royal Hospital Diagnostic Centre", city: "Eluru", district: "West Godavari", type: "Hospital Diagnostics" },
        { name: "Ravi Scan Center", city: "Eluru", district: "West Godavari", type: "Scan & Diagnostics" },
        { name: "Shilpa Scan & Diagnostic Centre", city: "Eluru", district: "West Godavari", type: "Scan & Lab" },
        { name: "Eluru City Diagnostics", city: "Eluru", district: "West Godavari", type: "Diagnostic Lab" },

        // --- Narsapuram (4 Labs) ---
        { name: "Godavari Diagnostics", city: "Narsapuram", district: "West Godavari", type: "Diagnostic Lab" },
        { name: "Narsapuram X-Ray & Path", city: "Narsapuram", district: "West Godavari", type: "Radiology" },
        { name: "Thyrocare Aarogyam Centre", city: "Narsapuram", district: "West Godavari", type: "Pathology (Home Collection)" },
        { name: "Pathkind Labs", city: "Narsapuram", district: "West Godavari", type: "Pathology" }
      ];

      const seedData = customLabs.map(lab => ({
        name: lab.name,
        city: lab.city.toLowerCase(), 
        address: `${lab.city}, ${lab.district}`, // Constructed address
        rating: (4.0 + Math.random()).toFixed(1),
        tests: getRandomTests(lab.type)
      }));

      await Lab.insertMany(seedData);
      console.log("✅ Seeded custom labs data");
    }
	} catch (err) {
		console.error("❌ Error seeding data:", err.message);
	}
});

app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`);
});
