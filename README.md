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

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductList.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Medicines.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── OrderSuccess.jsx
│   ├── context/         # React Context providers
│   │   └── CartContext.jsx
│   ├── data/            # Sample data
│   │   └── medicines.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
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

