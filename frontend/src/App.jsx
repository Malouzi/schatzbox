import './App.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { ProductSection } from './components/ProductSection/ProductSection'
import { Welcome } from './components/Welcome/Welcome'

export default function App() {
  

  return (
    <>
    <Navbar/>
    <Welcome/>
    <main>
      <ProductSection />
    </main>
    <Footer />
    </>
  )
}

