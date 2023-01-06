const asyncHandler = require('express-async-handler')

const Ticket = require('../models/ticketModel')

// @desc    Get tickets
// @route   GET /api/tickets
const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find()

  res.status(200).json({ tickets })
})

// @desc    Set tickets
// @route   POST /api/tickets
const setTickets = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({ message: 'Set tickets' })
})

// @desc    Update tickets
// @route   Put /api/tickets/:id
const updateTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update ticket ${req.params.id}` })
})

// @desc    Delete tickets
// @route   DELETE /api/tickets/:id
const deleteTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete ticket ${req.params.id}` })
})

module.exports = {
  getTickets,
  setTickets,
  updateTicket,
  deleteTicket
}
