import { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import { CartContext } from "../../context/CartContext";

export default function ProductCard({
  id,
  title,
  description,
  coverImage,
  price,
}) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, title, price, coverImage });
  };

  const handleViewProduct = () => {
    window.location.href = `/product/${id}`;
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.cardHeader}>
        <img src={`/${coverImage}`} alt={title} />
      </div>
      <div className={styles.cardBody}>
        <h4>{title}</h4>
        <p>{description}</p>
        <p className={styles.price}>Preis: {price.toFixed(2)}€</p>
        <div className={styles.productActions}>
          <button
            className={styles.addToCart}
            onClick={handleAddToCart}
          >
            In den Warenkorb
          </button>
          <button
            className={styles.viewProduct}
            onClick={handleViewProduct}
          >
            Zum Produkt
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};


/*import { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import { CartContext } from "../../context/CartContext";

export default function ProductCard({
  id,
  title,
  description,
  coverImage,
  price,
}) {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.cardHeader}>
          <img src={`/${coverImage}`} alt={title} />
        </div>
        <div className={styles.cardBody}>
          <h4>{title}</h4>
          <p>{description}</p>
          <p className={styles.price}>Preis: {price.toFixed(2)}€</p>
          <div className={styles.productActions}>
            <button
              className={styles.addToCart}
              onClick={() => addToCart({ id, title, price, coverImage })}
            >
              In den Warenkorb
            </button>
            <button
              className={styles.viewProduct}
              onClick={() => (window.location.href = `/product/${id}`)}
            >
              Zum Produkt
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
*/