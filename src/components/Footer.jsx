export default function Footer() {
  return (
    <footer id="contato" className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <p className="text-lg font-semibold text-gray-900">Domino</p>
          <p className="mt-2 text-sm text-gray-600">Rua Minimal, 123 — Centro, São Paulo</p>
          <p className="mt-1 text-sm text-gray-600">Ter a Sáb: 19h — 23h</p>
        </div>
        <div>
          <p className="text-sm text-gray-700 font-medium">Contato</p>
          <p className="mt-2 text-sm text-gray-600">(11) 99999-9999</p>
          <p className="text-sm text-gray-600">contato@domino.rest</p>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <form className="flex gap-3">
            <input type="email" placeholder="Seu e-mail" className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-red-500" />
            <button className="px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800">Enviar</button>
          </form>
          <p className="mt-3 text-xs text-gray-500">Receba atualizações do menu e eventos.</p>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Domino. Todos os direitos reservados.</div>
    </footer>
  )
}
