const db = require('../config/db')


// @desc get All orders
// @route GET /orders
// @access Public

exports.getAllOrders = async (req, res, next) => {
  try {
    const result = await db.execute('SELECT * FROM COMMANDE')
    const medicines = result[0]
    
    return res.status(200).json({
      success: true,
      data: medicines
    })
  }catch(err) {
    res.status(500).json({ error: err})
  }
}




// @desc add order
// @route POST /orders
// @access Public

exports.addOrder = async (req, res, next) => {
  try {
    const { firstName, lastName, address, email, phone, pharmacyID, totalPrice, orderItems } = req.body
    const result = await db.execute('INSERT INTO client (nom, prenom, address, email, tel) VALUES(?,?,?,?,?)', [firstName, lastName, address, email, phone])
    const clientID = result[0].insertId
    
    const result2 = await db.execute('INSERT INTO commande (id_client, pharmacyID, prixTotal) VALUES(?,?,?)', [clientID, pharmacyID, totalPrice])

    const commandeID = result2[0].insertId

    orderItems.forEach(async (order) => {
      await db.execute('INSERT INTO ligne_cmd (id_cmd, id_medication, qte) VALUES(?,?,?)', [commandeID, order.id, order.qty])
    });
    

    return res.status(200).json({
      success: true
    })

  }catch(err) {
    res.status(500).json({ error: err})
  }
}
