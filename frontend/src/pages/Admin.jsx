import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Admin = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get('http://localhost:3000/product')
      .then((response) => {
        setProduct(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Fehler beim Laden der Produkte.");
        setLoading(false);
      });
  }, []);

  return (
    <div className='px-4 py-8 max-w-7x1 mx-auto'>

      <div className='overflow-x-auto'>

        <table className='table-auto w-full'>
          <thead>
            <tr>
              <th>
                <Link to="/add-product" className='bg-blue-400 py-2 px-4 hover:bg-sky-200 text-white rounded'>
                Produkt zufügen
                </Link>
              </th>
              <th>Name</th>
              <th>Preis</th>
              <th>Beschreibung</th>
              <th>Kategorie</th>
            </tr>
          </thead>

          <tbody>
            {product.map((product, index) => (
              <tr key={product._id} className=''>
                <td>
                  <div className=''>
                    <img src={product.image} alt={product.title} />
                  </div>  

                </td>
                <td className=''>{product.name}</td>
                <td className=''>{product.price}</td>
                <td className=''>{product.description}</td>
                <td className=''>{product.category}</td>
                <td className=''>
                  <div>
                  <Link to={`/admin/product/edit/${product._id}`}>Bearbeiten</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
