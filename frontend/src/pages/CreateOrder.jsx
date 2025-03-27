import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateOrder = () => {
    const [userId, setUserId] = useState('');
    const [productId, setProductId] = useState('');
    const [status, setStatus] = useState('pending');
    const [notes, setNotes] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/order', { userId, productId, status, notes });
            console.log('Order created:', response.data);
            navigate('/orders');
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <div>
            <h1>Create Order</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User ID:</label>
                    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
                </div>
                <div>
                    <label>Product ID:</label>
                    <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} required />
                </div>
                <div>
                    <label>Status:</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="pending">Pending</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
                <div>
                    <label>Notes:</label>
                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
                </div>
                <button type="submit">Create Order</button>
            </form>
        </div>
    );
};

export default CreateOrder;
