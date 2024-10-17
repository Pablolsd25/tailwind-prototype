const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-white hover:text-gray-300">
            Inicio
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Personajes
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Planetas
          </a>
        </div>
        <div className="text-sm">
          <p>
            &copy; {new Date().getFullYear()} Dragon Ball Universe. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
