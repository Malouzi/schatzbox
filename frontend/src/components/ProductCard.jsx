export default function ProductCard({imgpath}) {
    return (
     <>
          <div className="product-card">
            <div className="card-header">
                <img src={imgpath} alt="" />
            </div>
            <div className="card-body">
                <h4>Card Title</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, consequatur!</p>
            </div>
          </div>
    </>
    );
  }