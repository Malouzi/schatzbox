import { useState, useEffect } from 'react';
import ProductCard from "../ProductCard/ProductCard.jsx";
import SectionTitles from "../SectionTitles";
import styles from "./ProductSection.module.css";
/*import Circles from '../Circles/Circles.jsx';*/

export default function ProductSection() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books.json')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error loading books:', error));
  }, []);
  return (
   <> 
     {/*
     <br /><br />
      <Circles /> <br /><br />*/}
    
      <section className={styles.productSection}>
        <SectionTitles />
       
        <div className={styles.productsContainer}>
          {books.map(book => (
            <ProductCard
              key={book._id}
              id={book._id}
              title={book.title}
              description={book.description}
              coverImage={book.coverImage}
              price={book.Price}
            />
          ))}
        </div>
      </section>
    </>
  );
}
