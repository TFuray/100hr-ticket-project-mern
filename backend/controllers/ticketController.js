const asyncHandler = require('express-async-handler')

const Ticket = require('../models/ticketModel')
const User = require('../models/userModel')

// @desc    Get tickets
// @route   GET /api/tickets
const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find({ user: req.user.id })

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
    text: req.body.text,
    user: req.user.id
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

  const user = await User.findById(req.user.id)

  //check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure logged in user matches ticket user
  if (ticket.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
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

  const user = await User.findById(req.user.id)

  //check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure logged in user matches ticket user
  if (ticket.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
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
