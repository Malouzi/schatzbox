import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './Checkout.module.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    billingStreet: '',
    billingPostalCode: '',
    shippingStreet: '',
    shippingPostalCode: '',
    paymentMethod: 'rechnung',
  });
  const [sameAddress, setSameAddress] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setSameAddress(!sameAddress);
    if (!sameAddress) {
      setFormData({
        ...formData,
        shippingStreet: formData.billingStreet,
        shippingPostalCode: formData.billingPostalCode,
      });
    } else {
      setFormData({
        ...formData,
        shippingStreet: '',
        shippingPostalCode: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/order-confirmation');
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
          <h3>Lieferadresse</h3>
          <div>
            <label>Straße:</label>
            <input
              type="text"
              name="shippingStreet"
              value={sameAddress ? formData.billingStreet : formData.shippingStreet}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Postleitzahl:</label>
            <input
              type="text"
              name="shippingPostalCode"
              value={sameAddress ? formData.billingPostalCode : formData.shippingPostalCode}
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
          <button type="submit">Bestellen</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
