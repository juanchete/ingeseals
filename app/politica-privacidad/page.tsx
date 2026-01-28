import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Ingeseals Chacao",
  description: "Política de privacidad de Ingeseals Chacao. Conoce cómo manejamos tu información personal.",
};

export default function PrivacyPolicy(): React.ReactElement {
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
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none text-[#1f2937]">
            <p className="text-sm text-[#1f2937]/60 mb-8">
              Última actualización: Enero 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                1. Información General
              </h2>
              <p className="mb-4">
                En <strong>Ingeseals Chacao</strong>, respetamos tu privacidad y nos comprometemos a proteger
                la información personal que compartas con nosotros. Esta política describe cómo recopilamos,
                usamos y protegemos tu información.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                2. Información que Recopilamos
              </h2>
              <p className="mb-4">Podemos recopilar la siguiente información cuando nos contactas:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Nombre y apellido</li>
                <li>Número de teléfono</li>
                <li>Dirección de correo electrónico</li>
                <li>Nombre de la empresa (si aplica)</li>
                <li>Información sobre productos o servicios solicitados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                3. Uso de la Información
              </h2>
              <p className="mb-4">Utilizamos tu información para:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Responder a tus consultas y solicitudes</li>
                <li>Proporcionar cotizaciones de productos y servicios</li>
                <li>Procesar pedidos y coordinar entregas</li>
                <li>Enviarte información relevante sobre nuestros productos (con tu consentimiento)</li>
                <li>Mejorar nuestros servicios y atención al cliente</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                4. Protección de Datos
              </h2>
              <p className="mb-4">
                Implementamos medidas de seguridad apropiadas para proteger tu información personal
                contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                5. Compartir Información
              </h2>
              <p className="mb-4">
                No vendemos, intercambiamos ni transferimos tu información personal a terceros,
                excepto cuando sea necesario para:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Cumplir con obligaciones legales</li>
                <li>Proteger nuestros derechos o propiedad</li>
                <li>Procesar tu pedido (por ejemplo, empresas de envío)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                6. Tus Derechos
              </h2>
              <p className="mb-4">Tienes derecho a:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Acceder a tu información personal</li>
                <li>Solicitar la corrección de datos inexactos</li>
                <li>Solicitar la eliminación de tu información</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                7. Cookies y Tecnologías Similares
              </h2>
              <p className="mb-4">
                Nuestro sitio web puede utilizar cookies para mejorar tu experiencia de navegación.
                Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar
                algunas funcionalidades del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                8. Cambios a esta Política
              </h2>
              <p className="mb-4">
                Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento.
                Los cambios serán publicados en esta página con la fecha de actualización correspondiente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                9. Contacto
              </h2>
              <p className="mb-4">
                Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tu información,
                puedes contactarnos a través de:
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
