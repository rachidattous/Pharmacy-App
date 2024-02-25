const db = require('../config/db')

// @desc get All categories 
// @route GET /categories
// @access Public

exports.getAllcategories = async (req, res, next) => {
  try {
    const result = await db.execute('SELECT * FROM pharmacy_api.categories')
    const categories = result[0]
    
    return res.status(200).json({
      success: true,
      data: categories
    })
  }catch(err) {
    res.status(500).json({ error: 'Server Error' })
  }
}



// @desc get category by ID 
// @route GET /categories/:id
// @access Public
exports.getCategory = async (req, res, next) => {
  try {
    const result = await db.execute('SELECT * FROM pharmacy_api.categories WHERE categoryID=?', [req.params.id])
    const category = result[0]
    
    return res.status(200).json({
      data: category
    })
  }catch(err) {
    res.status(500).json({ error: 'Server Error' })
  }
}

