const express = require('express')
const router = express.Router()
const {
  getTickets,
  setTickets,
  updateTicket,
  deleteTicket
} = require('../controllers/ticketController')

router.route('/').get(getTickets).post(setTickets)
router.route('/:id').put(updateTicket).delete(deleteTicket)


module.exports = router
