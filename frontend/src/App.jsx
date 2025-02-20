import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { ProductSection } from './components/ProductSection/ProductSection'
import { Welcome } from './components/Welcome/Welcome'
import Angebote from './components/Angebote';
import Kontakt from './components/Kontakt';

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Welcome/>
            <main>
              <ProductSection />
            </main>
          </>
        } />
        <Route path="/angebote" element={<Angebote />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Footer />
    </Router>
  )
}
