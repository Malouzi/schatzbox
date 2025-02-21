import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';

export default function Cart() {
  const { 
    cartItems, 
    removeFromCart, 
    totalItems,
    totalPrice 
  } = useContext(CartContext);

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
                <span>{item.title} (x{item.quantity})</span>
                <span>{(item.price * item.quantity).toFixed(2)}€</span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Entfernen
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
            onClick={() => alert('Checkout noch nicht implementiert')}
          >
            Zur Kasse
          </button>
        </>
      )}
    </div>
  );
}
