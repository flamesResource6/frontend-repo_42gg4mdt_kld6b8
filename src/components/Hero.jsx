import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-700">Restaurante Minimalista</p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
              Sabores autorais, estética limpa.
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Uma experiência contemporânea onde cada prato é um gesto preciso — simples, elegante e memorável.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#menu" className="px-5 py-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors">Ver Cardápio</a>
              <a href="#reservas" className="px-5 py-3 rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">Reservar</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  )
}
