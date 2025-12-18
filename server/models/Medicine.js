const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},

		description: {
			type: String,
			required: true,
			trim: true,
		},

		price: {
			type: Number,
			required: true,
			min: 0,
		},

		category: {
			type: String,
			required: true,
			trim: true,
			index: true,
		},

		// ✅ Store relative image path
		image: {
			type: String,
			default: "uploads/medicines/default.jpeg",
		},

		stock: {
			type: Number,
			default: 0,
			min: 0,
		},

		requiresPrescription: {
			type: Boolean,
			default: false,
		},

		manufacturer: {
			type: String,
			required: true,
			trim: true,
		},

		isActive: {
			type: Boolean,
			default: true,
			index: true,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Medicine", medicineSchema);
