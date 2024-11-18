
export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1a1a2e] lg:pl-48 lg:pr-48 md:pl-10 md:pr-10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-[#714ADC]/10 px-3 py-1 text-sm text-[#714ADC]">
              Nossos Diferenciais
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Transformando Ideias em Realidade Digital
            </h2>
            <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Combinamos expertise técnica com criatividade para entregar soluções tecnológicas que impulsionam seu negócio para o futuro.
            </p>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute w-3/4 h-3/4 bg-[#714ADC]/20 rounded-full blur-3xl" />
            <div className="grid gap-4 sm:grid-cols-2 relative">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg border border-[#4B53DB]/30 bg-[#1a1a2e]/50 p-6 hover:bg-[#1a1a2e]/75 transition-colors"
                >
                  <div className="mb-4 text-[#A14BDB]">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    ),
    title: "Analytics Avançado",
    description: "Insights precisos e em tempo real para tomada de decisões estratégicas.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
    title: "Segurança Total",
    description: "Proteção robusta para seus dados e aplicações em todos os níveis.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M12 3v1" />
        <path d="M12 20v1" />
        <path d="M3 12h1" />
        <path d="M20 12h1" />
        <path d="m18.364 5.636-.707.707" />
        <path d="m6.343 17.657-.707.707" />
        <path d="m5.636 5.636.707.707" />
        <path d="m17.657 17.657.707.707" />
      </svg>
    ),
    title: "Inovação Constante",
    description: "Sempre à frente com as últimas tecnologias e tendências do mercado.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    title: "Documentação Clara",
    description: "Processos e soluções documentados de forma clara e acessível.",
  },
]