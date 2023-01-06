const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please add text value"]
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Ticket', ticketSchema)