import request from 'supertest';
import app from '../index.js'; // assuming your express app is exported from index.js

describe('Payment Processing', () => {
    let token; // Variable to hold the JWT token

    beforeAll(async () => {
        // Here you would typically log in to get a token
        const response = await request(app)
            .post('/login') // Adjust the login route as necessary
            .send({ username: 'testuser', password: 'testpassword' });
        token = response.body.token; // Assuming the token is returned in the response
    });

    test('Create Payment Intent with Stripe', async () => {
        const response = await request(app)
            .post('/create-payment-intent')
            .set('Authorization', `Bearer ${token}`)
            .send({ amount: 1000, currency: 'usd' });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('clientSecret');
    });

    test('Create Payment with PayPal', async () => {
        const response = await request(app)
            .post('/create-payment')
            .set('Authorization', `Bearer ${token}`)
            .send({ amount: 10.00 });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
    });
});
