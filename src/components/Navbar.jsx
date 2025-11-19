import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-red-500" />
          <span className="text-lg font-semibold tracking-tight text-gray-900">Domino</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#menu" className="hover:text-gray-900 transition-colors">Cardápio</a>
          <a href="#sobre" className="hover:text-gray-900 transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-gray-900 transition-colors">Contato</a>
          <a href="#reservas" className="px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors">Reservar</a>
        </div>
        <button className="md:hidden p-2 rounded-lg border border-gray-200 text-gray-700" aria-label="Menu">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  )
}
