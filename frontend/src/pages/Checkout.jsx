import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import styles from './Checkout.module.css';
const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const [sameAddress, setSameAddress] = useState(false);
  const [formData, setFormData] = useState({
    shippingGender: '',
    firstName: '',
    lastName: '',
    email: '',
    billingStreet: '',
    houseNumber: '',
    billingPostalCode: '',
    billingCity: '',
    billingGender: '',
    lastName1: '',
    firstName1: '',
    shippingStreet: '',
    houseNumber1: '',
    shippingPostalCode: '',
    shippingCity: '',
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
            <div className={styles.radioGroup}>
              <span>Anrede:</span>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="shippingGender"
                  value="Herr"
                  checked={formData.shippingGender === "Herr"}
                  onChange={handleChange}
                  required
                />
                <span className={styles.customRadio}></span>
                Herr
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="shippingGender"
                  value="Frau"
                  checked={formData.shippingGender === "Frau"}
                  onChange={handleChange}
                  required
                />
                <span className={styles.customRadio}></span>
                Frau
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="shippingGender"
                  value="Divers"
                  checked={formData.shippingGender === "Divers"}
                  onChange={handleChange}
                  required
                />
                <span className={styles.customRadio}></span>
                Divers
              </label>
              <label className={styles.radioLabel}>
    <input
      type="radio"
      name="shippingGender"
      value="keine Angabe"
      checked={formData.billingGender === "keine Angabe"}
      onChange={handleChange}
      required
    />
    <span className={styles.customRadio}></span>
    Keine Angabe
  </label>
            </div>
            <label>Nachname:</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
             <label>Vorname:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
             <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
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
                  value={formData.shippingStreet}
                  onChange={handleChange}
                  required={!sameAddress}
                />
                <label>Hausnr:</label>
                <input
                  type="text"
                  name="houseNumber"
                  value={formData.houseNumber}
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
                <label>Ort:</label>
                <input
                  type="text"
                  name="shippingcity"
                  value={formData.shippingCity}
                  onChange={handleChange}
                  required={!sameAddress}
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
            <h3>Rechnungsadresse</h3>
            <div className={styles.radioGroup}>
  <span>Anrede:</span>
  <label className={styles.radioLabel}>
    <input
      type="radio"
      name="billingGender"
      value="Herr"
      checked={formData.billingGender === "Herr"}
      onChange={handleChange}
      required
    />
    <span className={styles.customRadio}></span>
    Herr
  </label>
  <label className={styles.radioLabel}>
    <input
      type="radio"
      name="billingGender"
      value="Frau"
      checked={formData.billingGender === "Frau"}
      onChange={handleChange}
      required
    />
    <span className={styles.customRadio}></span>
    Frau
  </label>
  <label className={styles.radioLabel}>
    <input
      type="radio"
      name="billingGender"
      value="Divers"
      checked={formData.billingGender === "Divers"}
      onChange={handleChange}
      required
    />
    <span className={styles.customRadio}></span>
    Divers
  </label>
  <label className={styles.radioLabel}>
    <input
      type="radio"
      name="billingGender"
      value="keine Angabe"
      checked={formData.billingGender === "keine Angabe"}
      onChange={handleChange}
      required
    />
    <span className={styles.customRadio}></span>
    Keine Angabe
  </label>
</div>
            <div>
            <label>Nachname:</label>
            <input
              type="text"
              name="lastName1"
              value={formData.lastName1}
              onChange={handleChange}
              required
            />
             <label>Vorname:</label>
            <input
              type="text"
              name="firstName1"
              value={formData.firstName1}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Straße:</label>
            <input
              type="text"
              name="billingStreet"
              value={formData.billingStreet}
              onChange={handleChange}
              required
            />
             <label>Hausnr:</label>
                <input
                  type="text"
                  name="houseNumber1"
                  value={formData.houseNumber1}
                  onChange={handleChange}
                  required={!sameAddress}
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
            <label>Ort:</label>
            <input
              type="text"
              name="billingCity"
              value={formData.billingCity}
              onChange={handleChange}
              required
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
          <button type="submit" className={styles.buttonblue}>Bestellen</button>
        </form>
      )}
      {/* Erfolgs-/Fehlermeldung anzeigen */}
      {orderStatus && <p>{orderStatus}</p>}
    </div>
  );
};
export default Checkout;






