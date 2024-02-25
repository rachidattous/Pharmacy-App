const db = require('../config/db')

// @desc get All medicines 
// @route GET /medicines
// @access Public

exports.getAllMedicines = async (req, res, next) => {
  try {
    const result = await db.execute('SELECT medicines.id, medicines.name, medicines.description, medicines.price, medicines.prescription, medicines.image, categories.category_name FROM medicines INNER JOIN categories ON categories.categoryID = medicines.category_id')
    const medicines = result[0]
    
    return res.status(200).json({
      success: true,
      data: medicines
    })
  }catch(err) {
    res.status(500).json({ error: err})
  }
}

// @desc get medicine by id
// @route GET /medicines/:id
// @access Public

exports.getMedicineById = async (req, res, next) => {
  try {
    const result = await db.execute('SELECT medicines.id, medicines.name, medicines.description, medicines.price, medicines.prescription, medicines.image, categories.category_name FROM medicines INNER JOIN categories ON categories.categoryID = medicines.category_id WHERE medicines.id=?', [req.params.id])
    const medicine = result[0]
    
    return res.status(200).json({
      data: medicine
    })
  }catch(err) {
    res.status(500).json({ error: 'Server Error' })
  }
}

// @desc get medicines by a category
// @route GET /medicines/category/:categoryID
// @access Public

exports.getMedicinesByCategory = async (req, res, next) => {
  try {
    const result = await db.execute('SELECT medicines.id, medicines.name, medicines.description, medicines.price, medicines.prescription, medicines.image, categories.category_name FROM medicines INNER JOIN categories ON categories.categoryID = medicines.category_id WHERE medicines.category_id=?', [req.params.categoryID])
    const medicines = result[0]
    
    return res.status(200).json({
      count: medicines.length,
      data: medicines
    })
  }catch(err) {
    res.status(500).json({ error: 'Server Error' })
  }
}

// @desc get available medicines in a pharmacy
// @route GET /medicines/pharmacy/:pharmacyID
// @access Public

exports.getAvailableMedicinesInPhamacy = async (req, res, next) => {
  try {
    const result = await db.execute('SELECT medicine_id, qty FROM pharmacies_medicines  WHERE pharmacy_id=? AND qty > ?', [req.params.pharmacyID, 0])
    const results = result[0]
   

    function extractValue(arr, prop) {
      let extractedValue = arr.map(item => item[prop]);
      return extractedValue;
    }
    const medicinesID = extractValue(results, 'medicine_id')
    const qtys = extractValue(results, 'qty')
    const finalResults = []

      for (let i = 0; i < medicinesID.length; i++) {
        const result = await db.execute('SELECT medicines.id, medicines.name, medicines.description, medicines.price, medicines.prescription, medicines.image, categories.category_name FROM medicines INNER JOIN categories ON categories.categoryID = medicines.category_id WHERE medicines.id=?', [medicinesID[i]])
        const medicine = result[0][0]
        finalResults.push({...medicine, qty: qtys[i]})
      }

      return res.status(200).json(finalResults)

  }catch(err) {
    res.status(500).json({ error: 'Server Error' })
  }
}



