/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular 3115000926
 *  website: Programandoweb.net
 *  Proyecto: Ivoolve *  
 * ---------------------------------------------------
 */
import Image from "next/image";

const TestimonialsAndSuccessStories = () => (
  <section
    className="py-16 bg-gray-100 text-center"
    aria-labelledby="testimonials-title"
  >
    <div className="container mx-auto max-w-4xl px-4">
      <h2 id="testimonials-title" className="text-3xl font-bold mb-8">
        What Our Clients Say
      </h2>
      <div className="relative p-8 bg-white rounded-lg shadow-lg">
        <p className="text-lg font-light italic text-gray-700 mb-6">
          "The dedication and professionalism of Programandoweb left me
          impressed. They have a great ability to turn ideas into reality.
          Thanks to their work, our platform is at another level, and we
          continue to see growth every month. Jorge is a reliable person and an
          expert in his field."
        </p>
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <Image
              alt="Daniel Sánchez photo"
              src="https://jorgedev.pro/images/default/daniel-sanchez.jpg"
              width={250}
              height={250}
              className="rounded-full overflow-hidden"
            />
          </div>
          <h3 className="text-xl font-semibold text-purple-700 mt-4">
            Daniel Sánchez
          </h3>
          <p className="text-gray-500">Crookieval Sales</p>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <button className="px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition">
            Previous
          </button>
          <button className="px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition">
            Next
          </button>
          <button className="px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition">
            Play
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsAndSuccessStories;
