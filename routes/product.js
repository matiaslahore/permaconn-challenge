const express = require('express')
const router = express.Router()
const { listProducts, updateProduct, createProduct } = require('../controllers/product');


router.get('/', async (req, res) => {
  const products = await listProducts(req.query);
  res.send(products);
})

router.post('/', async (req, res) => {
  const newProduct = await createProduct(req.body);
  res.send(newProduct);
})

router.put('/:id', async (req, res) => {
  const productUpdated = await updateProduct(req.params.id, req.body);
  res.send(productUpdated);
})


module.exports = router;
