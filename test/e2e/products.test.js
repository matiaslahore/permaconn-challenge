const request = require('supertest');
const app = require('../../server');
const { MOCK_PRODUCTS, MOCK_NEW_PRODUCT, MOCK_UPDATE_PRODUCT } = require('./mock');

jest.mock('../../services/product', () => ({
  list: jest.fn(() => Promise.resolve(MOCK_PRODUCTS)),
  create: jest.fn(() => Promise.resolve(MOCK_NEW_PRODUCT)),
  update: jest.fn(() => Promise.resolve(MOCK_UPDATE_PRODUCT))
}));


describe('GET /products', function () {
  it('should response a list of products', async () => {
    const response = await request(app)
      .get('/products')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('products');
    expect(response.body).toEqual(MOCK_PRODUCTS);
  });
});

describe('POST /product', function () {
  it('should create a new product', async () => {
    const response = await request(app)
      .post('/products')
      .send(MOCK_NEW_PRODUCT)
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(MOCK_NEW_PRODUCT);
  });
});

describe('PUT /product', function () {
  it('should update the product', async () => {
    const response = await request(app)
      .put('/products/1')
      .send(MOCK_UPDATE_PRODUCT)
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(MOCK_UPDATE_PRODUCT);
  });
});
