import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
}

const dishes = [
  {
    id: 1,
    name: 'Tomate Confit & Burrata',
    desc: 'Tomates doces, burrata cremosa, azeite infundido, basilicão.',
    price: '58',
    tag: 'Entrada'
  },
  {
    id: 2,
    name: 'Gnocchi de Batata',
    desc: 'Manteiga noisette, sálvia crocante, Parmigiano.',
    price: '74',
    tag: 'Principal'
  },
  {
    id: 3,
    name: 'Peixe Branco ao Molho Leve',
    desc: 'Purê de couve-flor, azeite cítrico, ervas.',
    price: '96',
    tag: 'Principal'
  },
  {
    id: 4,
    name: 'Risotto de Cogumelos',
    desc: 'Arborio, demi de cogumelos, perfume de trufa.',
    price: '88',
    tag: 'Principal'
  },
  {
    id: 5,
    name: 'Pavlova Minimal',
    desc: 'Merengue leve, creme fresco, frutas da estação.',
    price: '42',
    tag: 'Sobremesa'
  },
  {
    id: 6,
    name: 'Tarte de Limão',
    desc: 'Curd suave, raspas cítricas, crosta delicada.',
    price: '38',
    tag: 'Sobremesa'
  }
]

export default function MenuGrid() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Cardápio</h2>
            <p className="text-gray-600 mt-2">Pratos autorais preparados com técnica e poucos elementos — foco absoluto no sabor.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm text-gray-600">
            <span className="px-3 py-1 rounded-full border">Todas</span>
            <span className="px-3 py-1 rounded-full border">Entradas</span>
            <span className="px-3 py-1 rounded-full border">Principais</span>
            <span className="px-3 py-1 rounded-full border">Sobremesas</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((item, i) => (
            <motion.article
              key={item.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="group rounded-2xl border border-gray-200 p-5 hover:shadow-lg transition-shadow bg-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-gray-900 font-semibold">R$ {item.price}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">{item.tag}</span>
                <button className="text-sm text-red-600 hover:text-red-700">Adicionar</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
