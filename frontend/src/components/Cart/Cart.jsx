import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

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
      <button onClick={handlePrepayment}>Zahlung per Vorkasse</button>
    </div>
  );
}

const handlePrepayment = async () => {
  const response = await fetch('/api/payment/confirm-prepayment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ orderId: '12345' }),
  });

  if (response.ok) {
    const data = await response.json();
    alert(data.message);
  } else {
    alert('Fehler bei der Zahlungsbestätigung');
  }
}


export default Cart
