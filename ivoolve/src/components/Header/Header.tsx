/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular 3115000926
 *  website: Programandoweb.net
 *  Proyecto: Ivoolve *  
 * ---------------------------------------------------
 */

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import LogoImage from "../Logo/LogoImage";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Cierra el menú al seleccionar una opción
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <LogoImage />
        {/* Botón de menú para móviles */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-brand-600 text-2xl md:hidden focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        {/* Navegación */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "hero")}
            className="block py-2 px-4 text-brand-600 hover:text-brand-800 transition"
          >
            Inicio
          </a>
          <a
            href="#benefits"
            onClick={(e) => handleSmoothScroll(e, "benefits")}
            className="block py-2 px-4 text-brand-600 hover:text-brand-800 transition mt-0"
          >
            Funcionalidades
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, "pricing")}
            className="block py-2 px-4 text-brand-600 hover:text-brand-800 transition"
          >
            Planes y Precios
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleSmoothScroll(e, "testimonials")}
            className="block py-2 px-4 text-brand-600 hover:text-brand-800 transition"
          >
            Testimonios
          </a>
          <a
            href="#cta"
            onClick={(e) => handleSmoothScroll(e, "cta")}
            className="block py-2 px-4 text-brand-600 hover:text-brand-800 transition"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
