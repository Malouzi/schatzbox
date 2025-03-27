import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchOrders = async () => {
            const userId = localStorage.getItem('userId'); 
            try {
                const response = await axios.get(`/orders/${userId}`);
                setOrders(Array.isArray(response.data) ? response.data : []); 
            } catch (error) {
                console.error("Error fetching orders:", error);
                setError("Fehler beim Abrufen der Bestellungen."); 
                setOrders([]); 
                return;
            }
        };

        fetchOrders();
    }, []);

    const navigate = useNavigate(); 

    const handleEditOrder = (orderId) => {
        navigate(`/edit-order/${orderId}`);
    };

    return ( 
        <div>
            <h1>Your Orders</h1>
            {error && <p>{error}</p>}
            <ul>
                {orders.map(order => (
                    <li key={order._id}>
                        Order ID: {order._id} - Status: {order.status}
                        <button onClick={() => handleEditOrder(order._id)}>Edit Order</button> {/* Button to edit the order */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
