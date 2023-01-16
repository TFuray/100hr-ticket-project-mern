const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: [true, "Please add Title"]
  },
  description: {
    type: String,
    required: [true, "Pleae add Description"]
  },
  project: {
    type: String,
  },
  assignedTo: {
    type: String,
    required: [true, "Anyone"],
    default: 'Anyone'
  },
  Priority: {
    type: String 
  },
  Status: {
    type: Boolean
  },
  Type: {
  type: String
  },

}, {
  timestamps: true
})

module.exports = mongoose.model('Ticket', ticketSchema)