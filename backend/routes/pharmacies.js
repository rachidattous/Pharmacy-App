const express = require('express')
const router = express.Router({ mergeParams: true })
const { getNearestPharmacies, getAllPharmacies, getPharmacyDetails } = require('../controllers/pharmacies')



router.get('/', getNearestPharmacies)
router.route('/pharmacies').get(getAllPharmacies)
router.route('/:id').get(getPharmacyDetails)



module.exports = router