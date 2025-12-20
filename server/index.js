const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");

const medicineRoutes = require("./routes/medicineRoutes");
const orderRoutes = require("./routes/orderRoutes");
const prescriptionRoutes = require("./routes/prescriptionRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve uploaded images (medicine images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/api/medicines", medicineRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/prescriptions", prescriptionRoutes);

// ================================
// Serve React ONLY in production
// ================================
if (process.env.NODE_ENV === "production") {
  const rootDir = path.resolve();

  app.use(express.static(path.join(rootDir, "dist")));

  app.use((req, res) => {
    res.sendFile(path.join(rootDir, "dist", "index.html"));
  });
}

// ================================
// Connect DB & start server
// ================================
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
