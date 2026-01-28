interface IContactMethod {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  color: string;
}

interface IContactProps {
  className?: string;
}

const contactMethods: IContactMethod[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "0412-9621113",
    href: "https://wa.me/584129621113",
    color: "#25D366",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Correo Electrónico",
    value: "ingesealschacao01@gmail.com",
    href: "mailto:ingesealschacao01@gmail.com",
    color: "#EA4335",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    label: "Instagram",
    value: "@ingeseals.ccs",
    href: "https://instagram.com/ingeseals.ccs",
    color: "#E4405F",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    label: "Facebook",
    value: "IngeSeals",
    href: "https://facebook.com/IngeSeals",
    color: "#1877F2",
  },
];

export default function Contact({ className = "" }: IContactProps): React.ReactElement {
  return (
    <section id="contacto" className={`py-20 bg-[#f3f4f6] ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-[#1f2937]/70 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Comunícate con nosotros por el canal de tu preferencia.
          </p>
          <div className="w-20 h-1 bg-[#ff6b00] mx-auto mt-6" />
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${method.color}20` }}
              >
                <span style={{ color: method.color }}>{method.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1a2744] mb-2">
                {method.label}
              </h3>
              <p
                className="text-sm font-medium transition-colors duration-300"
                style={{ color: method.color }}
              >
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 max-w-4xl mx-auto bg-[#1a2744] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Necesitas una cotización?
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Envíanos las especificaciones de lo que necesitas y te responderemos a la brevedad con la mejor opción para ti.
          </p>
          <a
            href="https://wa.me/584129621113?text=Hola,%20necesito%20una%20cotización%20para..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#ff6b00] hover:bg-[#e55f00] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b00]/30"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  );
}
