interface IScheduleProps {
  className?: string;
}

export default function Schedule({ className = "" }: IScheduleProps): React.ReactElement {
  const scheduleData = [
    { day: "Lunes a Viernes", hours: "8:00 AM - 5:00 PM" },
    { day: "Sábados", hours: "8:00 AM - 12:00 PM" },
    { day: "Domingos", hours: "Cerrado" },
  ];

  return (
    <section id="ubicacion" className={`py-20 bg-[#1a2744] ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map / Location Visual */}
          <div className="relative">
            <div className="bg-[#243b5f] rounded-2xl p-8 shadow-2xl">
              {/* Location Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full bg-[#ff6b00]">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Nuestra Ubicación</h3>
              </div>

              {/* Address */}
              <div className="space-y-4 text-white/90">
                <p className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 flex-shrink-0 mt-1 text-[#ff6b00]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>
                    Chacao, Caracas<br />
                    Municipio Chacao<br />
                    Estado Miranda, Venezuela
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 flex-shrink-0 text-[#ff6b00]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <span>Fácil acceso desde toda el área metropolitana</span>
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 rounded-xl overflow-hidden border-4 border-[#1a2744]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15692.52285839675!2d-66.86372!3d10.4879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58f5c4b5f8a7%3A0x1234567890abcdef!2sChacao%2C%20Caracas!5e0!3m2!1ses!2sve!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Ingeseals Chacao"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Schedule Info */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Horario de Atención
              </h2>
              <p className="text-lg text-white/70">
                Estamos disponibles para atenderte en nuestro horario comercial.
              </p>
              <div className="w-20 h-1 bg-[#ff6b00] mx-auto lg:mx-0 mt-6" />
            </div>

            {/* Schedule Table */}
            <div className="space-y-4">
              {scheduleData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-5 bg-[#243b5f] rounded-xl hover:bg-[#3b5998] transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-[#1a2744]">
                      <svg
                        className="w-6 h-6 text-[#ff6b00]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">{item.day}</span>
                  </div>
                  <span
                    className={`text-lg font-semibold ${
                      item.hours === "Cerrado" ? "text-red-400" : "text-[#25D366]"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="mt-8 text-white/60 text-sm text-center lg:text-left">
              * Horarios especiales en días feriados. Contáctanos para confirmar disponibilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
