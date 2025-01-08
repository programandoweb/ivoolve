/**
 * Pie de Página
 */

import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-2xl font-bold mb-4">Ivoolve</h3>
      <p className="mb-6">La evolución de tu negocio comienza aquí.</p>
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://wa.me/573315000926" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-500 text-2xl" />
        </a>        
      </div>
      <p className="text-gray-400 text-sm">&copy; 2024 Ivoolve. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
