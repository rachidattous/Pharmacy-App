const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const pharmaciesRouter = require('./routes/pharmacies')
const medicinesRouter = require('./routes/medicines')
const categoriesRouter = require('./routes/categories')
const ordersRouter = require('./routes/orders')
dotenv.config({ path: './config/config.env' })

const app = express()

app.use(express.json())

app.use('/medicines', medicinesRouter)
app.use('/orders', ordersRouter)
app.use('/categories', categoriesRouter)
app.use('/', pharmaciesRouter)
app.use('/pharmacies', pharmaciesRouter)



const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})