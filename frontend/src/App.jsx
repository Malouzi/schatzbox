import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProductSection from './components/ProductSection/ProductSection';
import Angebote from './components/Angebote';
import Kontakt from './components/Kontakt';
import ContactForm from './components/ContactForm/ContactForm';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import ProtectedRoute from './components/ProtectedRoutes';
import PenguinSlideFlipCard from './components/PenguinRiddleBox/PenguinSlideFlipCard';
import { Admin } from './pages/Admin';
import { EditProduct } from './pages/EditProduct';
import { DeleteProduct } from './pages/DeleteProduct';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Welcome />
              <PenguinSlideFlipCard />

              <main>
                <ProductSection />
                <ContactForm />
              </main>
            </>
          }
        />
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
      <Route path="/" element={<Admin/>} />
      <Route path="/product/edit/:id" element={<EditProduct />} />
      <Route path="/product/delete/:id" element={<DeleteProduct />} />
    </Routes>
  );
};



