import request from 'supertest';
import app from '../app'; // Stelle sicher, dass der Express-App-Export korrekt ist

describe('Admin Router Tests', () => {
  it('GET /users should return all users', async () => {
    const response = await request(app).get('/admin/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('GET /orders should return all orders', async () => {
    const response = await request(app).get('/admin/orders');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('Product Route Tests', () => {
  it('POST / should create a new product', async () => {
    const newProduct = {
      name: 'Test Product',
      price: 100,
      description: 'Test Description',
      imageUrl: 'http://example.com/image.jpg'
    };
    const response = await request(app).post('/products').send(newProduct);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Product created successfully');
  });

  it('GET / should return all products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('GET /:id should return a specific product', async () => {
    const response = await request(app).get('/products/1'); // Ersetze 1 durch eine gültige ID
    expect(response.status).toBe(200);
  });

  it('DELETE /:id should delete a product', async () => {
    const response = await request(app).delete('/products/1'); // Ersetze 1 durch eine gültige ID
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Product deleted successfully');
  });

  it('PUT /:id should update a product', async () => {
    const updatedProduct = {
      name: 'Updated Product',
      price: 150,
      description: 'Updated Description'
    };
    const response = await request(app).put('/products/1').send(updatedProduct); // Ersetze 1 durch eine gültige ID
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Product updated successfully');
  });
});
