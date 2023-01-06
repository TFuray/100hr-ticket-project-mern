const express = require('express')
const router = express.Router()
const {
  getTickets,
  setTickets,
  updateTicket,
  deleteTickets
} = require('../controllers/ticketController')

router.route('/').get(getTickets).post(setTickets)
router.route('/:id').put(updateTicket).delete(deleteTickets)


module.exports = router
