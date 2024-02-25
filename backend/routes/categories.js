const express = require('express')
const router = express.Router({ mergeParams: true })
const { getAllcategories, getCategory } = require('../controllers/categories')

router.route('/').get(getAllcategories)
router.route('/:id').get(getCategory)

module.exports = router