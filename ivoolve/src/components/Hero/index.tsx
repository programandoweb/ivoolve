/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular: 3115000926
 *  Website: Programandoweb.net
 *  Proyecto: Ivoolve
 * ---------------------------------------------------
 */

import Image from "next/image";
import React from "react";

interface HeroProps {
  id: string; // Define la propiedad id como un string requerido
}

const Hero: React.FC<HeroProps> = ({ id }) => (
  <section className="relative overflow-hidden text-center bg-brand-600" id={id}>
    {/* Líneas dinámicas en el fondo */}
    <div className="absolute inset-0 z-0">
      <div className="absolute w-[120%] h-[120%] -top-10 -left-10 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-pulse opacity-10 transform rotate-45"></div>
    </div>

    {/* Contenido principal */}
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center">
      {/* Texto */}
      <div className="w-full py-20">
        <div className="flex justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Impulsa tu negocio al siguiente nivel
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Ivoolve te ofrece herramientas integradas para gestionar inventarios, optimizar procesos y vender en línea. Simplifica tu estrategia y enfócate en lo que importa.
            </p>
            <button className="px-8 py-4 font-bold transition duration-300 transform bg-white rounded-lg shadow-lg text-brand-600 hover:bg-brand-800 hover:text-white">
              Asesoría
            </button>
          </div>
        </div>
      </div>

      {/* Imagen */}
      <div className="hidden w-full md:block">
        <Image
          src="/img/layout/ivoolve-jorgedev-programandoweb.png"
          width={1280}
          height={1280}
          alt={(process.env.NEXT_PUBLIC_NAME + " " + process.env.NEXT_PUBLIC_NAME2) || "Ivoolve Hero"}
          title={(process.env.NEXT_PUBLIC_NAME + " " + process.env.NEXT_PUBLIC_NAME2) || "Ivoolve Hero"}
          className="rounded-lg"
        />
      </div>
    </div>
  </section>
);

export default Hero;
