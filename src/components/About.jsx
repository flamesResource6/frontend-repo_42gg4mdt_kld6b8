export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Sobre</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Cozinha de essência. Trabalhamos com ingredientes sazonais e técnicas precisas para entregar pratos
            que valorizam o mínimo necessário. Sem excessos, sem distrações — apenas o sabor em foco.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white rounded-xl border">
              <p className="text-3xl font-semibold text-gray-900">12</p>
              <p className="text-xs text-gray-500">mesas</p>
            </div>
            <div className="p-4 bg-white rounded-xl border">
              <p className="text-3xl font-semibold text-gray-900">4</p>
              <p className="text-xs text-gray-500">menus sazonais</p>
            </div>
            <div className="p-4 bg-white rounded-xl border">
              <p className="text-3xl font-semibold text-gray-900">1</p>
              <p className="text-xs text-gray-500">visão</p>
            </div>
          </div>
        </div>
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-red-100 to-white border"></div>
      </div>
    </section>
  )
}
