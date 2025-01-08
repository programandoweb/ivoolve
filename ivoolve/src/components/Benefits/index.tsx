/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular: 3115000926
 *  Website: Programandoweb.net
 *  Proyecto: Ivoolve
 * ---------------------------------------------------
 */

import { FaChartLine, FaWarehouse, FaShoppingCart, FaCogs } from "react-icons/fa";
import React from "react";

// Definición de la interfaz para las props del componente
interface BenefitsProps {
  id: string; // Propiedad requerida para el ID del componente
}

const Benefits: React.FC<BenefitsProps> = ({ id }) => (
  <section className="bg-white py-20" id={id}>
    <div className="container mx-auto text-center px-6">
      {/* Título de la sección */}
      <h2 className="text-3xl md:text-5xl font-bold text-brand-600 mb-10">
        Por qué elegir Ivoolve
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mb-16">
        Desde la gestión de inventarios hasta tu tienda en línea, Ivoolve ofrece herramientas diseñadas para simplificar y optimizar tu negocio.
      </p>

      {/* Beneficios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Beneficio 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-brand-600 text-white p-6 rounded-full mb-4 shadow-lg">
            <FaWarehouse size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Gestión de Inventarios
          </h3>
          <p className="text-gray-600">
            Controla tu inventario en tiempo real para reducir pérdidas y aumentar eficiencia.
          </p>
        </div>

        {/* Beneficio 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-brand-600 text-white p-6 rounded-full mb-4 shadow-lg">
            <FaChartLine size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Análisis en Tiempo Real
          </h3>
          <p className="text-gray-600">
            Obtén reportes detallados y toma decisiones estratégicas basadas en datos.
          </p>
        </div>

        {/* Beneficio 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-brand-600 text-white p-6 rounded-full mb-4 shadow-lg">
            <FaShoppingCart size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Tienda en Línea
          </h3>
          <p className="text-gray-600">
            Vende tus productos directamente en línea con una tienda personalizada.
          </p>
        </div>

        {/* Beneficio 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-brand-600 text-white p-6 rounded-full mb-4 shadow-lg">
            <FaCogs size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Automatización de Procesos
          </h3>
          <p className="text-gray-600">
            Ahorra tiempo automatizando tareas clave como órdenes y notificaciones.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Benefits;
