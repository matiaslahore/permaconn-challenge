const productService = require('../services/product')

const listProducts = () => {
  return productService.list();
}

const createProduct = (newProduct) => {
  return productService.create(newProduct);
}

const updateProduct = (id, updates) => {
  return productService.update(id, updates);
}

module.exports = {
  listProducts,
  updateProduct,
  createProduct
};
