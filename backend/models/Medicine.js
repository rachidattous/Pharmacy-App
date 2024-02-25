// const mongoose = require('mongoose')


// const MedicineSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Please add a Medicine name'],
//     unique: true,
//     trim: true,
//     maxlength: [50, 'Name can not be more than 50 characters']
//   },
//   description: {
//     type: String,
//     required: [true, 'Please add a Medicine description'],
//     maxlength: [500, 'Description can not be more than 500 characters']
//   },
//   price: {
//     type: Number,
//     required: [true, 'Please add the price']
//   },
//   // category: {
    
//   // },
//   prescription: {
//     type: Boolean,
//     default: false
//   },
//   image: {
//     type: String
//   },
//   pharmacy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Pharmacy',
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// })



// module.exports = mongoose.model('Medicine', MedicineSchema)