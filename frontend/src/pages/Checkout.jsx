import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Bestellung erfolgreich!');
    clearCart();
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
    </div>
  );
};

export default Checkout;
