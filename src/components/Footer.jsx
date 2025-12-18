const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Pharmacy Module.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-gray-600">Secure Payment</span>
            <span className="text-xs text-gray-600">Verified Medicines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
