import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eliminación de Datos | Ingeseals Chacao",
  description: "Solicita la eliminación de tus datos personales de Ingeapp, desarrollado por Ingeseals Chacao.",
};

export default function DataDeletion(): React.ReactElement {
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
            Eliminación de Datos
          </h1>

          <div className="prose prose-lg max-w-none text-[#1f2937]">
            <p className="text-sm text-[#1f2937]/60 mb-8">
              Última actualización: Enero 2025
            </p>

            <section className="mb-8">
              <p className="mb-4">
                En <strong>Ingeapp</strong>, desarrollado por <strong>Ingeseals Chacao</strong>,
                respetamos el derecho de los usuarios a solicitar la eliminación de sus datos
                personales asociados al uso de nuestra aplicación.
              </p>
              <p className="mb-4">
                Si deseas eliminar tu información, puedes solicitarlo en cualquier momento
                siguiendo los pasos indicados a continuación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                Cómo solicitar la eliminación de tus datos
              </h2>
              <p className="mb-4">
                Para eliminar tus datos, envía un correo electrónico a:
              </p>
              <p className="mb-4">
                <a
                  href="mailto:contacto@ingesealschacao.com"
                  className="text-[#ff6b00] hover:underline font-semibold"
                >
                  contacto@ingesealschacao.com
                </a>
              </p>
              <p className="mb-4">Incluye la siguiente información:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico asociada a la aplicación</li>
                <li>Descripción breve de tu solicitud (por ejemplo: &quot;Solicito la eliminación de mis datos de Ingeapp&quot;)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                Qué datos se eliminarán
              </h2>
              <p className="mb-4">
                Una vez recibida tu solicitud, procederemos a eliminar:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Información de contacto proporcionada por el usuario</li>
                <li>Datos asociados a tu cuenta dentro de la aplicación</li>
                <li>Cualquier registro vinculado a tu uso de Ingeapp que no sea necesario conservar por motivos legales o administrativos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                Tiempo de procesamiento
              </h2>
              <p className="mb-4">
                Tu solicitud será procesada en un plazo máximo de <strong>30 días hábiles</strong> a
                partir de la recepción de tu solicitud.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a2744] mb-4">
                Contacto adicional
              </h2>
              <p className="mb-4">
                Si tienes preguntas adicionales sobre privacidad o manejo de datos, puedes escribirnos a:
              </p>
              <p className="mb-4">
                <a
                  href="mailto:contacto@ingesealschacao.com"
                  className="text-[#ff6b00] hover:underline font-semibold"
                >
                  contacto@ingesealschacao.com
                </a>
              </p>
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
