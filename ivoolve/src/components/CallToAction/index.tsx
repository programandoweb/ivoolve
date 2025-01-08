/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular 3115000926
 *  website: Programandoweb.net
 *  Proyecto: Ivoolve *  
 * ---------------------------------------------------
 */

const CallToAction = () => (
  <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">
        ¡Empieza hoy mismo!
      </h2>
      <p className="mb-8 text-lg">
        Conecta con los mejores contadores y haz crecer tu negocio.
      </p>
      <a
        href="#contact"
        className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
      >
        Contáctanos
      </a>
    </div>
  </section>
);

export default CallToAction;
