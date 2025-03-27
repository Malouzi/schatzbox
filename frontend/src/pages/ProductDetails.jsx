import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import styles from "./ProductDetails.module.css";
import productsData from "../../public/books.json?url";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchProduct = () => {
  //     const foundProduct = productsData.find(
  //       (item) => item._id === parseInt(id)
  //     );
  //     if (foundProduct) {
  //       setProduct(foundProduct);
  //     } else {
  //       setError("Produkt nicht gefunden");
  //     }
  //     setLoading(false);
  //   };
  //   fetchProduct();
  // }, [id]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/books.json");
        const data = await response.json();
        const foundProduct = data.find((item) => item._id.toString() === id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Produkt nicht gefunden");
        }
      } catch (err) {
        setError("Fehler beim Laden der Produktdaten");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  
  if (loading) {
    return <p>Lädt...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} wurde zum Warenkorb hinzugefügt!`);
  };
  return (
    <div className={styles.productDetailsContainer}>
      <h2>{product.name}</h2>
      <img className={styles.imgProductDetails} src={`/${product.coverImage}`} alt={product.title} />
      <p>{product.description}</p>
      <p>Preis: {product.price} €</p>
      <p>Bewertung: {product.rating} ★</p>
      <p>
        Verfügbarkeit: {product.availability ? "Auf Lager" : "Nicht verfügbar"}
      </p>
      <button className={styles.btnProduct} onClick={handleAddToCart} disabled={!product.availability}>
        In den Warenkorb
      </button>
    </div>
  );
};
export default ProductDetails;
