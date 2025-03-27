import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import styles from './Checkout.module.css';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const [sameAddress, setSameAddress] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    billingStreet: '',
    billingPostalCode: '',
    shippingStreet: '',
    shippingPostalCode: '',
    paymentMethod: 'rechnung',
  });
  const [orderStatus, setOrderStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setSameAddress(e.target.checked);
    if (e.target.checked) {
      setFormData({
        ...formData,
        shippingStreet: formData.billingStreet,
        shippingPostalCode: formData.billingPostalCode,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = '12345'; 
    const productIds = cartItems.map(item => item.id);
    const status = 'pending';
    const notes = '';

    try {
      const response = await axios.post('/orders/order', {
        userId,
        productIds,
        status,
        notes,
      });
    
      console.log("Antwort vom Server:", response.data);
      
      if (response.status === 201) {
        setOrderStatus('Bestellung erfolgreich!');
        clearCart();
      } else {
        setOrderStatus('Fehler beim Absenden der Bestellung. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      console.error('Fehler beim Erstellen der Bestellung:', error);
      setOrderStatus('Fehler beim Absenden der Bestellung. Bitte versuchen Sie es erneut.');
    }
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

          <h3>Rechnungsadresse</h3>
          <div>
            <label>Straße:</label>
            <input
              type="text"
              name="billingStreet"
              value={formData.billingStreet}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Postleitzahl:</label>
            <input
              type="text"
              name="billingPostalCode"
              value={formData.billingPostalCode}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <input
              type="checkbox"
              checked={sameAddress}
              onChange={handleCheckboxChange}
            />
            <label>Lieferadresse gleich Rechnungsadresse</label>
          </div>

          {!sameAddress && (
            <>
              <h3>Lieferadresse</h3>
              <div>
                <label>Straße:</label>
                <input
                  type="text"
                  name="shippingStreet"
                  value={formData.shippingStreet}
                  onChange={handleChange}
                  required={!sameAddress}
                />
              </div>
              <div>
                <label>Postleitzahl:</label>
                <input
                  type="text"
                  name="shippingPostalCode"
                  value={formData.shippingPostalCode}
                  onChange={handleChange}
                  required={!sameAddress}
                />
              </div>
            </>
          )}

          <div>
            <label>Zahlungsmethode:</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="rechnung">Rechnung</option>
              <option value="vorkasse">Vorkasse</option>
            </select>
          </div>

          <h3>Gesamtpreis: {totalPrice} €</h3>
          <button type="submit">Bestellen</button>
        </form>
      )}

      {/* Erfolgs-/Fehlermeldung anzeigen */}
      {orderStatus && <p>{orderStatus}</p>}
    </div>
  );
};

export default Checkout;
