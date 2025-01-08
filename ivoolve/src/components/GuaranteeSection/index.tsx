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
interface GuaranteeSectionProps {
  id: string; // Identificador único para la sección
}

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ id }) => (
  <section className="bg-gradient-to-r from-green-500 to-green-700 py-16 text-white" id={id}>
    <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Tu inversión está segura con Ivoolve
      </h2>
      <p className="text-lg md:text-xl mb-8">
        Garantizamos tu satisfacción con una política de devolución de 30 días.
        Además, tu información está protegida con los más altos estándares de
        seguridad.
      </p>
    </div>
  </section>
);

export default GuaranteeSection;
