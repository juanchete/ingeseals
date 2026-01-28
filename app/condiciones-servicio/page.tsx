import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Condiciones del Servicio | Ingeseals Chacao",
  description: "Condiciones del servicio de Ingeseals Chacao. Conoce los términos y condiciones de nuestros productos y servicios.",
};

export default function TermsOfService(): React.ReactElement {
  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      {/* Header */}
      <header className="bg-[#1a2744] py-6">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="text-white hover:text-[#ff6b00] transition-colors font-semibold"
          >
            &larr; Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-8">
            Condiciones del Servicio
          </h1>

          <div className="prose prose-lg max-w-none text-[#1f2937]">
            <p className="text-sm text-[#1f2937]/60 mb-8">
              Última actualización: Enero 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                1. Aceptación de los Términos
              </h2>
              <p className="mb-4">
                Al utilizar los servicios de <strong>Ingeseals Chacao</strong>, aceptas estas condiciones
                del servicio en su totalidad. Si no estás de acuerdo con alguna parte de estos términos,
                te recomendamos no utilizar nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                2. Descripción de los Servicios
              </h2>
              <p className="mb-4">Ingeseals Chacao ofrece los siguientes servicios:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Venta de sellos hidráulicos y neumáticos</li>
                <li>Fabricación de sellos especiales a medida</li>
                <li>Venta de rodamientos, chumaceras y componentes industriales</li>
                <li>Identificación técnica de piezas</li>
                <li>Asesoría técnica especializada</li>
                <li>Envíos a nivel nacional</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                3. Cotizaciones y Precios
              </h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Las cotizaciones tienen una validez de <strong>7 días hábiles</strong> a partir de su emisión, salvo que se indique lo contrario.</li>
                <li>Los precios están sujetos a cambios sin previo aviso debido a fluctuaciones del mercado.</li>
                <li>Los precios no incluyen IVA ni costos de envío, a menos que se especifique expresamente.</li>
                <li>Para confirmar un pedido, se requiere la aceptación formal de la cotización.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                4. Formas de Pago
              </h2>
              <p className="mb-4">Aceptamos las siguientes formas de pago:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Transferencia bancaria</li>
                <li>Pago móvil</li>
                <li>Efectivo (en tienda)</li>
                <li>Divisas (USD) según tasa del día</li>
              </ul>
              <p className="mb-4">
                El pedido será procesado una vez confirmado el pago. Para pedidos especiales o
                fabricación a medida, se requiere un anticipo del 50%.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                5. Entregas y Envíos
              </h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Los productos en inventario se despachan en un plazo de <strong>1-3 días hábiles</strong> después de confirmar el pago.</li>
                <li>Los productos especiales o de fabricación tienen tiempos de entrega variables según complejidad.</li>
                <li>Los costos de envío corren por cuenta del cliente, salvo acuerdo previo.</li>
                <li>Realizamos envíos a todo el territorio nacional a través de empresas de encomienda.</li>
                <li>El cliente es responsable de verificar el estado del producto al momento de recibirlo.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                6. Garantía de Productos
              </h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Todos nuestros productos cuentan con garantía contra defectos de fabricación.</li>
                <li>La garantía no cubre daños por mal uso, instalación incorrecta o desgaste normal.</li>
                <li>Para hacer válida la garantía, el cliente debe presentar el comprobante de compra.</li>
                <li>Los productos fabricados a medida no tienen devolución, excepto por defectos de fabricación.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                7. Devoluciones y Cambios
              </h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Las devoluciones se aceptan dentro de los <strong>7 días</strong> posteriores a la compra.</li>
                <li>El producto debe estar en su empaque original, sin uso y en perfectas condiciones.</li>
                <li>No se aceptan devoluciones de productos fabricados a medida o especiales.</li>
                <li>Los cambios están sujetos a disponibilidad de inventario.</li>
                <li>El cliente asume los costos de envío para devoluciones o cambios.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                8. Responsabilidades del Cliente
              </h2>
              <p className="mb-4">El cliente se compromete a:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Proporcionar información veraz y completa al solicitar cotizaciones.</li>
                <li>Verificar las especificaciones técnicas antes de confirmar un pedido.</li>
                <li>Realizar la instalación de los productos por personal calificado.</li>
                <li>Utilizar los productos de acuerdo a sus especificaciones técnicas.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                9. Limitación de Responsabilidad
              </h2>
              <p className="mb-4">
                Ingeseals Chacao no será responsable por daños indirectos, incidentales o consecuentes
                derivados del uso de los productos vendidos. Nuestra responsabilidad se limita al
                valor del producto adquirido.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                10. Propiedad Intelectual
              </h2>
              <p className="mb-4">
                Todo el contenido de este sitio web, incluyendo logos, textos e imágenes, es propiedad
                de Ingeseals Chacao y está protegido por las leyes de propiedad intelectual.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                11. Modificaciones
              </h2>
              <p className="mb-4">
                Nos reservamos el derecho de modificar estas condiciones del servicio en cualquier momento.
                Los cambios entrarán en vigor desde su publicación en este sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                12. Legislación Aplicable
              </h2>
              <p className="mb-4">
                Estas condiciones se rigen por las leyes de la República Bolivariana de Venezuela.
                Cualquier disputa será sometida a los tribunales competentes de la ciudad de Caracas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                13. Contacto
              </h2>
              <p className="mb-4">
                Para consultas sobre estas condiciones del servicio, puedes contactarnos:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <strong>WhatsApp:</strong>{" "}
                  <a href="https://wa.me/584129621113" className="text-[#ff6b00] hover:underline">
                    0412-9621113
                  </a>
                </li>
                <li>
                  <strong>Correo:</strong>{" "}
                  <a href="mailto:ingesealschacao01@gmail.com" className="text-[#ff6b00] hover:underline">
                    ingesealschacao01@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Ubicación:</strong> Chacao, Caracas, Venezuela
                </li>
              </ul>
            </section>
          </div>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#1a2744] hover:bg-[#243b5f] text-white font-semibold py-3 px-6 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a2744] py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Ingeseals Chacao. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
