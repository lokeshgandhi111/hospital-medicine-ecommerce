const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");
const Medicine = require("./models/Medicine");
const Lab = require("./models/Lab");

const medicineRoutes = require("./routes/medicineRoutes");
const orderRoutes = require("./routes/orderRoutes");
const prescriptionRoutes = require("./routes/prescriptionRoutes");
const testBookingRoutes = require("./routes/testBookingRoutes");
const labRoutes = require("./routes/labRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API Routes
app.use("/api/medicines", medicineRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/test-bookings", testBookingRoutes);
app.use("/api/labs", labRoutes);

// ================================
// 🔥 Serve React Frontend (SAFE)
// ================================
const __dirname1 = path.resolve();

app.use(express.static(path.join(__dirname1, "dist")));

// ✅ SAFE SPA fallback (NO wildcard routes)
app.use((req, res) => {
  res.sendFile(path.join(__dirname1, "dist", "index.html"));
});

// ================================
// Database + Seed + Server Start
// ================================
connectDB().then(async () => {
  try {
    const count = await Medicine.countDocuments();

    if (count < 4) {
      await Medicine.deleteMany({});
      await Medicine.insertMany([
        {
          name: "Paracetamol 500mg",
          description: "Pain reliever and fever reducer.",
          price: 45,
          category: "Pain Relief",
          image: "uploads/medicines/Paracetamol 500mg.jpeg",
          stock: 150,
          requiresPrescription: false,
          manufacturer: "MediCare Pharma",
        },
        {
          name: "Ibuprofen 200mg",
          description: "Anti-inflammatory medication.",
          price: 89,
          category: "Pain Relief",
          image: "uploads/medicines/Ibuprofen 200mg.jpeg",
          stock: 120,
          requiresPrescription: false,
          manufacturer: "HealthCare Labs",
        },
      ]);

      console.log("✅ Medicines seeded");
    }

    await Lab.deleteMany({});
    console.log("🧹 Labs cleared");
  } catch (err) {
    console.error("❌ Seeding error:", err.message);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
