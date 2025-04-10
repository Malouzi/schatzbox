import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './Checkout.module.css';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setSameAddress(isChecked);
  
    if (isChecked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        billingStreet: prevFormData.shippingStreet,
        billingPostalCode: prevFormData.shippingPostalCode,
        billingCity: prevFormData.shippingCity,
        houseNumber1: prevFormData.houseNumber,
      }));
    }
  };
  const handleGenderClick = (genderType, gender) => {
    setFormData({
      ...formData,
      [genderType]: formData[genderType] === gender ? '' : gender,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order-confirmation');
  };

  return (
    <div className={styles.checkoutPage}>
      <div className={styles.checkoutContainer}>
        {orderStatus && <p>{orderStatus}</p>}
        <h1 className={styles.checkoutTitle}>Checkout</h1>
        {cartItems.length === 0 ? (
          <p>Ihr Warenkorb ist leer.</p>
        ) : (
          <form className={styles.checkoutForm} onSubmit={handleSubmit}>
            <div>
                <h3>Lieferadresse</h3>
              <div className={styles.radioGroup}>
                <span>Anrede:</span>
                {['Herr', 'Frau', 'Divers'].map((gender) => (
                  <label key={gender} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="shippingGender"
                      value={gender}
                      checked={formData.shippingGender === gender}
                      onChange={() => handleGenderClick('shippingGender', gender)}
                      />
                    <span className={styles.customRadio}></span>
                    {gender}
                  </label>
                ))}
              </div>
              <label>Nachname:</label>
              <input
                type="text"
                name="lastName"
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
                name="shippingCity"
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
                  {['Herr', 'Frau', 'Divers'].map((gender) => (
                    <label key={gender} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="billingGender"
                        value={gender}
                        checked={formData.billingGender === gender}
                        onChange={() => handleGenderClick('billingGender', gender)}
                      />
                      <span className={styles.customRadio}></span>
                      {gender}
                    </label>
                  ))}
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
            <button type="submit" className={styles.checkoutButton}>Bestellen</button>
          </form>
        )}
      </div>
    </div>
  );
};
export default Checkout;