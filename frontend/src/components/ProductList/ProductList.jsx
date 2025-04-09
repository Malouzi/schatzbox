import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';


const ProductList = ({ products }) => {
  return (
    <div className={styles.productList}>
      <h2>Produkte</h2>
      {products && products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          coverImage={product.coverImage}
          price={product.price}
          //rating={product.rating} // Bewertung übergeben
          //availability={product.availability} // Verfügbarkeit übergeben
        />
      ))}
      <p>★</p>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      coverImage: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      showRating={false}
showAvailability={false}
    })
  ).isRequired,
};

export default ProductList;
