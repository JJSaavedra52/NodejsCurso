const express = require('express');

const CategoriesService = require('../services/categoriesService');

const router = express.Router();
const service = new CategoriesService;

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
})

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = service.params;
  const categoryAndProduct = service.findOne(categoryId, productId)
  res.json({
    categoryAndProduct
  });
})

module.exports = router;
