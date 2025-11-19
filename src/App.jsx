import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuGrid from './components/MenuGrid'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <MenuGrid />
      <About />
      <Footer />
    </div>
  )
}

export default App
