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

  const ticket = await Ticket.create({
    text: req.body.text
  })

  res.status(200).json(ticket)
})

// @desc    Update tickets
// @route   Put /api/tickets/:id
const updateTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(400)
    throw new Error('Ticket not found')
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json(updatedTicket)
})

// @desc    Delete tickets
// @route   DELETE /api/tickets/:id
const deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(400)
    throw new Error('Ticket not found')
  }

  await ticket.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getTickets,
  setTickets,
  updateTicket,
  deleteTicket
}
