import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoutes';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProductSection from './components/ProductSection/ProductSection';
import Welcome from './components/Welcome/Welcome';
import Angebote from './components/Angebote';
import Kontakt from './components/Kontakt';
import ContactForm from './components/ContactForm/ContactForm';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

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
              <ContactForm/>
            </main>
          </>
        } />
        <Route path="/angebote" element={<Angebote />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/admin/*" element={
          <ProtectedRoute>
            <AdminRoutes />
          </ProtectedRoute>
        }
        />
        
      </Routes>
      
      <Footer />
    </Router>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      
    </Routes>
  );
};


