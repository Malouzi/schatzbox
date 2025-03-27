import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Warenkorb</h2>
      {cartItems.length === 0 ? (
        <p>Ihr Warenkorb ist leer.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img src={`/${item.coverImage}`} alt={item.title} className={styles.cartItemImage} />
              <div>
                <h3>{item.title}</h3>
                <p>Preis: {item.price} €</p>
                <p>Menge: {item.quantity}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(item.id)}>Entfernen</button>
              </div>
            </div>
          ))}
          <h3>Gesamtpreis: {totalPrice} €</h3> 
        </div>
      )}
      {/* Bezahl-Button */}
      <button onClick={handleCheckout}>Bezahlen</button>
    </div>
  );
};

export default Cart;
