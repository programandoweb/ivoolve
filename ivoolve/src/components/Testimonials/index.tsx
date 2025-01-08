/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular 3115000926
 *  website: Programandoweb.net
 *  Proyecto: Ivoolve *  
 * ---------------------------------------------------
 */

import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC = () => (
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Lo que dicen nuestros clientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialCard
          name="Juan Pérez"
          feedback="El contador que contraté gracias a esta plataforma fue clave para mi declaración fiscal."
        />
        <TestimonialCard
          name="Ana Gómez"
          feedback="Simplifiqué mi gestión contable y ahora tengo más tiempo para hacer crecer mi negocio."
        />
      </div>
    </div>
  </section>
);

export default Testimonials;
