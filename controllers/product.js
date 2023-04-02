const productService = require('../services/product')

const listProducts = (filterQuery) => {
  return productService.list(filterQuery);
}

const createProduct = (newProduct) => {
  return productService.create(newProduct);
}

const updateProduct = (id, updates) => {
  return productService.update(id, updates);
}

module.exports = {
  listProducts,
  createProduct,
  updateProduct
};
