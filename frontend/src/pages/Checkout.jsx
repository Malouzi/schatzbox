import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './Checkout.module.css';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'creditCard',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier könnte die Logik für die Bestellung implementiert werden
    alert('Bestellung erfolgreich!');
    clearCart(); // Warenkorb leeren nach der Bestellung
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Ihr Warenkorb ist leer.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Adresse:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Zahlungsmethode:</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="creditCard">Kreditkarte</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <h3>Gesamtpreis: {totalPrice} €</h3>
          <button type="submit">Bestellen</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
