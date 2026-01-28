interface IBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface IWhyChooseUsProps {
  className?: string;
}

const benefits: IBenefit[] = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Amplio Inventario",
    description: "Gran variedad de sellos, rodamientos y repuestos disponibles para entrega inmediata.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Atención Rápida",
    description: "Respuesta inmediata a sus consultas y despacho ágil de sus pedidos.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Personal Capacitado",
    description: "Equipo técnico con experiencia para asesorarle en la selección correcta.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Precios Competitivos",
    description: "Los mejores precios del mercado sin comprometer la calidad de los productos.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Ubicación Estratégica",
    description: "Ubicados en Chacao, Caracas, de fácil acceso para toda el área metropolitana.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Envíos Nacionales",
    description: "Realizamos envíos a todo el territorio nacional con diferentes opciones de transporte.",
  },
];

export default function WhyChooseUs({ className = "" }: IWhyChooseUsProps): React.ReactElement {
  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
            ¿Por qué Elegirnos?
          </h2>
          <p className="text-lg text-[#1f2937]/70 max-w-2xl mx-auto">
            Nos distinguimos por nuestro compromiso con la calidad y el servicio al cliente.
          </p>
          <div className="w-20 h-1 bg-[#ff6b00] mx-auto mt-6" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-[#f3f4f6] hover:bg-[#1a2744] group transition-all duration-300"
            >
              <div className="flex-shrink-0 p-3 rounded-lg bg-[#1a2744] text-white group-hover:bg-[#ff6b00] transition-colors duration-300">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1a2744] group-hover:text-white mb-2 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-[#1f2937]/70 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
