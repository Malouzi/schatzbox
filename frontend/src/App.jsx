import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './components/Cart/Cart';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProductSection from './components/ProductSection/ProductSection';
import Angebote from './components/Angebote';
import ContactForm from './components/ContactForm/ContactForm';
import ProtectedRoute from './components/ProtectedRoutes';
import PenguinSlideFlipCard from './components/PenguinRiddleBox/PenguinSlideFlipCard';
import { Admin } from './pages/Admin';
import { EditProduct } from './pages/EditProduct';
import { DeleteProduct } from './pages/DeleteProduct';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Circles from "./components/Circles/Circles";
import Imprint from "./components/Imprint/Imprint";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Contact from "./components/Contact/Contact";

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
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
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
}

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/product/edit/:id" element={<EditProduct />} />
      <Route path="/product/delete/:id" element={<DeleteProduct />} />
    </Routes>
  );
};
