const findNearestLocation = require('map-nearest-location')
const db = require('../config/db')



// @desc get All pharmcies 
// @route GET /pharmacies
// @access Public

exports.getAllPharmacies = async (req, res, next) => {
  try {
    const result = await db.execute('SELECT * FROM pharmacies')
    const pharmacies = result[0]
    
    return res.status(200).json({
      success: true,
      count: pharmacies.length,
      data: pharmacies
    })
  }catch(err) {
    res.status(500).json({ error: 'Server Error' })
  }
}



// @desc get the nearest pharmcies 
// @route GET /
// @access Public
exports.getNearestPharmacies = async (req, res, next) => {
  

  // Get nearest pharmacies to the user location

  try {
    const userLocation = {
      lat: parseFloat(req.query.lat),
      lng: parseFloat(req.query.lng)
    }

    const result = await db.execute('SELECT * FROM pharmacies')
    const pharmacies = result[0]
    

    const locations = []
    pharmacies.forEach(pharmacy => locations.push({
      lat: pharmacy.lat,
      lng: pharmacy.lng
    }))

    const nearestPharmacies = []
    

    while(locations.length > 0) {
      const nearestLocation = findNearestLocation(userLocation, locations)
      const rows = await db.execute('SELECT * FROM pharmacies WHERE lat = ? AND lng = ?', [nearestLocation.location.lat, nearestLocation.location.lng])
      const nearestPharmacy = rows[0][0]

      nearestPharmacies.push({
        pharmacy: nearestPharmacy,
        distance: nearestLocation.distance
      })
      const index = locations.findIndex(location => location.lat === nearestPharmacy.lat && location.lng === nearestPharmacy.lng);
      locations.splice(index, 1)
    }
    
    

    
    // Get pharmcies On duty this week (the 3 nearst to the user)

    const pharmaciesOnDutyThisWeek = nearestPharmacies.filter(nearestPharmacy => nearestPharmacy.pharmacy.onDuty === 1)

    res.status(200).json({
      success: true,
      data: {
        nearestPharmacies,
        pharmaciesOnDutyThisWeek
      }
    })


  } catch(err) {
    res.status(500).json({
      success: false,
      error: err.message || 'server error'
    })
  }
}

// @desc get pharmacy details 
// @route GET /:id
// @access Publicy

exports.getPharmacyDetails = async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM pharmacies WHERE pharmacyID=?', [req.params.id])
    const pharmacy = result[0]
    res.status(201).json({ succes: true, data: pharmacy })
  } catch(err) {
    res.status(500).json({
      success: false,
      error: err.message 
    })
  }
} 


