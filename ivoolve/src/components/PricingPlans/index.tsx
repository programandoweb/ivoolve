/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular: 3115000926
 *  Website: Programandoweb.net
 *  Proyecto: Ivoolve
 * ---------------------------------------------------
 */

// Importación necesaria
import React from "react";

// Definición de la interfaz
interface PricingPlansProps {
  id: string; // Identificador único para la sección
}

const PricingPlans: React.FC<PricingPlansProps> = ({ id }) => (
  <section className="bg-gradient-to-r from-purple-500 to-brand-600 py-16 text-white" id={id}>
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        Planes y Precios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Plan Básico */}
        <div className="bg-white text-brand-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4">Plan Básico</h3>
          <p className="text-lg mb-6">Gestión de inventarios automatizada.</p>
          <p className="text-4xl font-bold mb-6">1000 USD de por vida</p>
          <button className="bg-brand-600 text-white px-6 py-3 rounded-lg hover:bg-brand-800 transition">
            Comprar
          </button>
        </div>
        {/* Plan Premium */}
        <div className="bg-white text-brand-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4">Plan Premium</h3>
          <p className="text-lg mb-6">
            Tienda online + Inventarios + Soporte 24/7.
          </p>
          <p className="text-4xl font-bold mb-6">$20/mes</p>
          <button className="bg-brand-600 text-white px-6 py-3 rounded-lg hover:bg-brand-800 transition">
            Suscribirme
          </button>
        </div>
        {/* Plan Avanzado */}
        <div className="bg-white text-brand-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4">Plan Avanzado</h3>
          <p className="text-lg mb-6">Gestión integral y soporte personalizado.</p>
          <p className="text-4xl font-bold mb-6">Consultar</p>
          <button className="bg-brand-600 text-white px-6 py-3 rounded-lg hover:bg-brand-800 transition">
            Preguntar
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingPlans;
