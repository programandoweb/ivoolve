/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular: 3115000926
 *  Website: Programandoweb.net
 *  Proyecto: Ivoolve
 * ---------------------------------------------------
 */

// Importaciones necesarias
import React from "react";

// Definición de la interfaz
interface LeadFormProps {
  id: string; // Identificador único para la sección
}

const LeadForm: React.FC<LeadFormProps> = ({ id }) => (
  <section className="py-16 bg-gray-100" id={id}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-600 mb-10">
        ¡Optimiza tu negocio con nuestra guía gratuita!
      </h2>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Tu nombre completo"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Tu correo electrónico"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="needs" className="block text-gray-700 font-bold mb-2">
            ¿Qué necesitas?
          </label>
          <select id="needs" className="w-full px-4 py-2 border rounded-lg">
            <option value="inventario">Gestión de Inventario</option>
            <option value="tienda">Tienda Online</option>
            <option value="soporte">Soporte Técnico</option>
          </select>
        </div>
        <button className="bg-brand-600 text-white px-6 py-3 rounded-lg hover:bg-brand-800 transition">
          Descargar Guía
        </button>
      </form>
    </div>
  </section>
);

export default LeadForm;
