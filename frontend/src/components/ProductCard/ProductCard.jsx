
import { useContext } from 'react';
import PropTypes from 'prop-types';
import "./ProductCard.css";
import { CartContext } from '../../context/CartContext';

export default function ProductCard({ id, title, description, coverImage, price }) {
  const { addToCart } = useContext(CartContext);
    return (
     <>
          <div className="product-card">
            <div className="card-header">
                <img src={`/${coverImage}`} alt={title} />
            </div>
            <div className="card-body">
                <h4>{title}</h4>
                <p>{description}</p>
                <p className="price">Preis: {price.toFixed(2)}€</p>
                <div className="product-actions">
                  <button 
                    className="add-to-cart"
                    onClick={() => addToCart({ id, title, price, coverImage })}
                  >
                    In den Warenkorb
                  </button>
                  <button 
                    className="view-product"
                    onClick={() => window.location.href = `/product/${id}`}
                  >
                    Zum Produkt
                  </button>
                </div>
            </div>
          </div>
    </>
    );
  }

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
