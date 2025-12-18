# Hospital Pharmacy - Medicine E-Commerce

A modern, user-friendly e-commerce platform for hospital medicine sales. This is designed as a modular feature that can be easily integrated into a larger hospital management system.

## Features

- 🏥 **Healthcare-Focused Design** - Clean, professional UI with healthcare theme colors
- 💊 **Medicine Catalog** - Browse and search through extensive medicine collection
- 🛒 **Shopping Cart** - Add, update, and manage cart items with persistent storage
- 📋 **Product Filtering** - Filter by category, search by name/description
- 💳 **Checkout System** - Complete checkout flow with delivery information and payment options
- 📱 **Responsive Design** - Fully responsive design that works on all devices
- 🎨 **Modern UI/UX** - Stunning interface with smooth animations and transitions

## Tech Stack

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Context API** - State management for cart

## Healthcare Theme Colors

- **Primary**: Deep Blue (#2563EB, #1E40AF) - Trust, reliability
- **Secondary**: Teal/Aqua (#0D9488, #14B8A6) - Healing, freshness
- **Background**: White/Soft Gray (#F8FAFC) - Clean, sterile feel
- **Accent**: Mint Green (#5EEAD4) / Coral (#FB7185) - CTAs

## Installation

1. Install dependencies for both frontend and backend:
```bash
npm install
cd server && npm install
cd ..
```

2. Start both frontend and backend in development mode:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:5000`.

## Project Structure

```
├── server/              # Node.js/Express backend
│   ├── index.js         # Entry point and API routes
│   └── package.json     # Backend dependencies
├── src/                 # React frontend
│   ├── api/             # API utility functions
│   ├── components/      # Reusable UI components
│   ├── context/         # React Context providers
│   ├── pages/           # Page components
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
```

## Integration Notes

This module is designed to be integrated into a larger hospital management system. Key integration points:

1. **CartContext** - Can be extended to connect with backend API
2. **Data Layer** - Replace `medicines.js` with API calls to your backend
3. **Authentication** - Add authentication wrapper around routes
4. **Payment Gateway** - Integrate actual payment processing in Checkout component
5. **Order Management** - Connect order placement with your order management system

## Key Features for Integration

- **Modular Structure**: Components are self-contained and can be easily integrated
- **Context API**: Cart state management is centralized and can be extended
- **Routing**: Uses React Router which can be integrated into parent application
- **Styling**: Tailwind CSS allows easy theme customization
- **Local Storage**: Cart persists in browser, can be replaced with backend sync

## Customization

### Adding New Medicines

Edit `src/data/medicines.js` to add or modify medicine data:

```javascript
{
  id: 13,
  name: "Medicine Name",
  description: "Description here",
  price: 100.00,
  category: "Category Name",
  image: "💊",
  stock: 100,
  requiresPrescription: false,
  manufacturer: "Manufacturer Name"
}
```

### Modifying Colors

Update `tailwind.config.js` to change the healthcare theme colors.

### Adding New Categories

Add categories to the `categories` array in `src/data/medicines.js`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of a larger hospital management system.

