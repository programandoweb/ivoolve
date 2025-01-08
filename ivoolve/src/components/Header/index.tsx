/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular 3115000926
 *  website: Programandoweb.net
 *  Proyecto: Ivoolve *  
 * ---------------------------------------------------
 */

import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${
        isScrolled ? "bg-purple" : "bg-transparent"
      } text-white py-6`}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold">Encuentra al contador ideal para tu negocio</h1>
        <p className="mt-4 text-lg">Conecta con expertos en contabilidad para simplificar la gestión de tu empresa.</p>
      </div>
    </header>
  );
};

export default Header;
