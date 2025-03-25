import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Admin.module.css';

export const Admin = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/books.json');
        setProducts(response.data);
        

        setProducts(response.data.books);
      } catch (error) {
        console.error('Fehler beim Laden der Produkte:', error);
        setError('Fehler beim Laden der Produkte.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className={styles.message}>Lade Produkte...</div>;
  }

  if (error) {
    return <div className={styles.messageError}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.addButtonContainer}>
        <Link to="/add-product" className={styles.addButton}>
          Produkt hinzufügen
        </Link>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.productTable}>
          <thead>
            <tr>
              <th>Bild</th>
              <th>Name</th>
              <th>Preis</th>
              <th>Beschreibung</th>
              <th>Kategorie</th>
              <th>Aktionen</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.title || 'Produktbild'}
                    className={styles.productImage}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price.toFixed(2)}€</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>
                  <Link to={`/admin/product/edit/${product.id}`} className={styles.editLink}>
                    Bearbeiten
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
