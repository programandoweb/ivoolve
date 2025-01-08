/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular: 3115000926
 *  Website: Programandoweb.net
 *  Proyecto: Ivoolve
 * ---------------------------------------------------
 */

import { FaBox, FaChartBar, FaCogs, FaShoppingCart, FaStore, FaWhatsapp } from "react-icons/fa";

// Definición de las propiedades del componente
interface FeatureCardsProps {
    id: string; // Identificador único del componente para navegación o referencia
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ id }) => (
  <section className="bg-gray-100 py-16" id={id}>
    <div className="container mx-auto px-4">
      {/* Sección Inventario */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-brand-600">
          Funcionalidades de Inventario
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cuadro 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <FaCogs className="text-4xl text-brand-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Procesos de Producción</h3>
            <p className="text-gray-600">
              Conecta la producción con inventarios para lograr trazabilidad total.
            </p>
          </div>
          {/* Cuadro 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <FaBox className="text-4xl text-brand-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Control de Materia Prima</h3>
            <p className="text-gray-600">
              Gestiona eficientemente la entrada y salida de materiales para garantizar la producción.
            </p>
          </div>
          {/* Cuadro 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <FaChartBar className="text-4xl text-brand-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Reportes Detallados</h3>
            <p className="text-gray-600">
              Genera informes que optimizan tus procesos y mejoran tus decisiones estratégicas.
            </p>
          </div>
        </div>
      </div>

      {/* Sección Ivoolve Store */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-brand-600">
          Funcionalidades de Ivoolve Store
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cuadro 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <FaShoppingCart className="text-4xl text-brand-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Gestión de Tiendas</h3>
            <p className="text-gray-600">
              Administra múltiples tiendas y sincroniza inventarios automáticamente.
            </p>
          </div>
          {/* Cuadro 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <FaStore className="text-4xl text-brand-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Integración Online</h3>
            <p className="text-gray-600">
              Conecta tu inventario con plataformas de comercio electrónico como Shopify y WooCommerce.
            </p>
          </div>
          {/* Cuadro 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <FaWhatsapp className="text-4xl text-brand-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Ventas Directas por WhatsApp</h3>
            <p className="text-gray-600">
              Facilita la comunicación y cierra ventas directamente a través de WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureCards;
