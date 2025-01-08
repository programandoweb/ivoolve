/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular 3115000926
 *  Website: Programandoweb.net
 *  Proyecto: Ivoolve
 * ---------------------------------------------------
 */
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import React from "react";

// Definición de la interfaz para las props del componente
interface CallToActionProps {
  id: string; // Propiedad requerida para el ID del componente
}

const CallToAction: React.FC<CallToActionProps> = ({ id }) => (
  <section className="bg-gradient-to-r from-purple-500 to-brand-600 py-16 text-white" id={id}>
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Lleva tu negocio al siguiente nivel con Ivoolve
      </h2>
      <p className="text-lg md:text-xl mb-10">
        Descubre cómo nuestras herramientas pueden transformar tus procesos, 
        mejorar tu productividad y aumentar tus ventas. ¡El momento de evolucionar es ahora!
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <Link
          href="#contacto"
          className="bg-white text-brand-600 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-brand-800 hover:text-white transition duration-300"
        >
          Solicita una Demo
        </Link>
        <Link
          href="https://wa.me/573315000926"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 flex items-center justify-center font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
        >
          <FaWhatsapp className="mr-2" size={20} /> Contáctanos por WhatsApp
        </Link>
      </div>
    </div>
  </section>
);

export default CallToAction;
