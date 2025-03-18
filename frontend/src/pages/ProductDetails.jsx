import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  
  const product = {
    id: id,
    title: 'Beispiel Produkt',
    description: 'Dies ist eine detaillierte Beschreibung des Produkts.',
    price: 29.99,
    coverImage: 'path/to/image.jpg',
    rating: 4.5,
    availability: true,
  }; 

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} wurde zum Warenkorb hinzugefügt!`);
  };

  return ( 

    <div className={styles.productDetailsContainer}>
      <h2>{product.title}</h2>
      <img src={`/${product.coverImage}`} alt={product.title} />
      <p>{product.description}</p>
      <p>Preis: {product.price} €</p>
      <p>Bewertung: {product.rating} ★</p>
      <p>Verfügbarkeit: {product.availability ? 'Auf Lager' : 'Nicht verfügbar'}</p>
      <button onClick={handleAddToCart}>In den Warenkorb</button>
    </div>
  );
};

export default ProductDetails;
