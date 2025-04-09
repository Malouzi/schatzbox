import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import styles from "./Cart.module.css";
import { Alert, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } =
    useContext(CartContext);
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const navigate = useNavigate();
  const handlePrepayment = () => {
    navigate("/checkout");
  };
  const applyDiscount = () => {
    if (discountCode === "SCHATZBOX10") {
      setDiscountApplied(true);
    } else {
      alert("Ungültiger Rabattcode");
    }
  };
  const discountAmount = discountApplied ? totalPrice * 0.1 : 0;
  const finalPrice = totalPrice - discountAmount;
  return (
    <div className={styles.cartPage}>
      <div className={styles.cartContainer}>
        <h1 className={styles.cartTitle}>Warenkorb</h1>
        {cartItems.length === 0 ? (
          <Alert severity="info">Ihr Warenkorb ist leer.</Alert>
        ) : (
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img
                  src={`/${item.coverImage}`}
                  alt={item.title}
                  className={styles.cartItemImage}
                />
                <div className={styles.cartItemDetails}>
                  <h3>{item.title}</h3>
                  <p>Preis: {item.price} €</p>
                  <div className={styles.cartItemQuantity}>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className={styles.quantityInput}
                    />
                  </div>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => removeFromCart(item.id)}
                    className={styles.removeButton}
                  >
                    Entfernen
                  </Button>
                </div>
              </div>
            ))}
            {/* Rabattcode-Eingabezeile */}
            <div className={styles.discountRow}>
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Rabattcode"
                className={styles.discountInput}
              />
              <Button variant="contained" onClick={applyDiscount}>
                Rabatt anwenden
              </Button>
            </div>
            <div className={styles.priceSummary}>
              <div className={styles.labelColumn}>
                <p>Gesamtpreis:</p>
                {discountApplied && <p>Rabatt:</p>}
                <p>zu zahlender Betrag (inkl. MwSt.):</p>
              </div>
              <div className={styles.valueColumn}>
                <p>{totalPrice.toFixed(2)} €</p>
                {discountApplied && (
                  <p className={styles.discountAmount}>
                    -{discountAmount.toFixed(2)} €
                  </p>
                )}
                <p>{finalPrice.toFixed(2)} €</p>
              </div>
            </div>
          </div>
        )}
        {cartItems.length > 0 && (
          <Button
            variant="contained"
            className={styles.checkoutButton}
            onClick={handlePrepayment}
          >
            Bezahlen
          </Button>
        )}
      </div>
    </div>
  );
};
export default Cart;