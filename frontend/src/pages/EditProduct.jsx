import {useSnackbar} from 'notistack';
import React from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

export const EditProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const {id} = useParams();
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3000/products/${id}`)
        .then(response => {
            setName(response.data.name);
            setPrice(response.data.price);
            setCategory(response.data.category);
            setDescription(response.data.description);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.log(error);
            alert('Fehler beim Laden des Produkts.');
            });
    }, [id]);


    const handleEditProduct = () => {
        const data = {
            name,
            price,
            category,
            description
        };
        setLoading(true);
        axios
        .put(`http://localhost:3000/products/${id}`, data)
        .then(response => {
            setLoading(false);
            enqueueSnackbar('Produkt erfolgreich bearbeitet.', {variant: 'success'});
            navigate('/admin');
        })
        .catch(error => {
            setLoading(false);
            console.log(error);
            alert('Fehler beim Bearbeiten des Produkts.');
        });

    };


  return (
    <div>EditProduct</div>
  )
}
