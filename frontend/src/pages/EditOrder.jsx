import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditOrder = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrder = async () => {
            const response = await axios.get(`/order/${orderId}`);
            setOrder(response.data);
        };

        fetchOrder();
    }, [orderId]);

    const handleSave = async () => {
        await axios.put(`/order/${orderId}`, order);
        navigate('/orders');
    };

    if (!order) return <div>Loading...</div>;

    return (
        <div>
            <h1>Edit Order</h1>
            <form onSubmit={handleSave}>
                <div>
                    <label>Status:</label>
                    <input
                        type="text"
                        value={order.status}
                        onChange={(e) => setOrder({ ...order, status: e.target.value })}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditOrder;
