/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular: 3115000926
 *  Website: Programandoweb.net
 *  Proyecto: Ivoolve
 * ---------------------------------------------------
 */

import React from "react";

// Definición de las propiedades del componente
interface ComparisonTableProps {
  id: string; // Identificador único del componente
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ id }) => (
  <section className="py-16 bg-gray-100" id={id}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-600 mb-10">
        ¿Por qué elegir Ivoolve?
      </h2>
      <div className="bg-white shadow-lg rounded-lg">
        {/* Encabezados */}
        <div className="flex bg-brand-600 text-white rounded-t-lg">
          <div className="flex-1 py-4 px-6 font-bold">Características</div>
          <div className="flex-1 py-4 px-6 font-bold text-center">Ivoolve</div>
          <div className="flex-1 py-4 px-6 font-bold text-center">Otros</div>
        </div>
        {/* Filas */}
        <div className="flex border-b">
          <div className="flex-1 py-4 px-6">Gestión de Inventarios</div>
          <div className="flex-1 py-4 px-6 text-center text-green-600 font-bold">✔</div>
          <div className="flex-1 py-4 px-6 text-center text-red-600 font-bold">✘</div>
        </div>
        <div className="flex border-b">
          <div className="flex-1 py-4 px-6">Integración con WhatsApp</div>
          <div className="flex-1 py-4 px-6 text-center text-green-600 font-bold">✔</div>
          <div className="flex-1 py-4 px-6 text-center text-red-600 font-bold">✘</div>
        </div>
        <div className="flex border-b">
          <div className="flex-1 py-4 px-6">Reportes Detallados</div>
          <div className="flex-1 py-4 px-6 text-center text-green-600 font-bold">✔</div>
          <div className="flex-1 py-4 px-6 text-center text-yellow-600 font-bold">Parcial</div>
        </div>
      </div>
    </div>
  </section>
);

export default ComparisonTable;
