import { useContext, useState } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { 
    cartItems, 
    removeFromCart, 
    totalItems,
    totalPrice,
    updateQuantity
  } = useContext(CartContext);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <h2>Warenkorb</h2>
      {cartItems.length === 0 ? (
        <p>Dein Warenkorb ist leer.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <span className="item-title">{item.title}</span>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <span className="item-price">{(item.price * item.quantity).toFixed(2)}€</span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                  aria-label="Artikel entfernen"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span>Gesamt ({totalItems} Artikel):</span>
            <span>{totalPrice.toFixed(2)}€</span>
          </div>
          <button 
            className="checkout-btn"
            onClick={() => {
              setIsCheckoutLoading(true);
            
              setTimeout(() => {
                navigate('/checkout');
                setIsCheckoutLoading(false);
              }, 1000);
            }}
            disabled={isCheckoutLoading}
          >
            {isCheckoutLoading ? 'Wird verarbeitet...' : 'Zur Kasse'}
          </button>
        </>
      )}
    </div>
  );
}
