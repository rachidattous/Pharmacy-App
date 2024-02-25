const express = require('express')
const router = express.Router({ mergeParams: true })
const { getAllOrders, addOrder } = require('../controllers/orders')


router.route('/').get(getAllOrders).post(addOrder)


module.exports = router