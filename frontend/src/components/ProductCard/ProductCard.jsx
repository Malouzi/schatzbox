
import "./ProductCard.css";

export default function ProductCard({ id, title, description, coverImage, price }) {
    return (
     <>
          <div className="product-card">
            <div className="card-header">
                <img src={`/${coverImage}`} alt={title} />
            </div>
            <div className="card-body">
                <h4>{title}</h4>
                <p>{description}</p>
                <p className="price">Preis: {price.toFixed(2)}€</p>
                <button onClick={() => window.location.href = `/product/${id}`}>
                    Zum Produkt
                </button>
            </div>
          </div>
    </>
    );
  }

