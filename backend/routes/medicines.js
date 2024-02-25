const express = require('express')
const { getAllMedicines, getMedicineById, getMedicinesByCategory, getAvailableMedicinesInPhamacy } = require('../controllers/medicines')

const router = express.Router({ mergeParams: true })

router.route('/').get(getAllMedicines)
router.route('/:id').get(getMedicineById)
router.route('/pharmacy/:pharmacyID').get(getAvailableMedicinesInPhamacy)
router.route('/category/:categoryID').get(getMedicinesByCategory)

module.exports = router