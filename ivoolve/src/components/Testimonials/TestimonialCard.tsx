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

// Interfaz para las props de TestimonialCard
interface TestimonialCardProps {
  name: string;
  feedback: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, feedback }) => (
  <div className="p-6 bg-white shadow-md rounded-lg">
    <p className="italic">"{feedback}"</p>
    <p className="mt-4 font-bold text-right">- {name}</p>
  </div>
);

export default TestimonialCard;
