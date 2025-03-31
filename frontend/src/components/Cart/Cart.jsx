import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import styles from "./Cart.module.css";
import { Alert, Button } from "@mui/material";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } =
    useContext(CartContext);

  const handlePrepayment = async () => {
    const response = await fetch("/api/payment/confirm-prepayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId: "12345" }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
    } else {
      alert("Fehler bei der Zahlungsbestätigung");
    }
  };

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
            <h3 className={styles.totalPrice}>Gesamtpreis: {totalPrice} €</h3>
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
