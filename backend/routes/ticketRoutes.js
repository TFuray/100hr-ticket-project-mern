const express = require('express')

const router = express.Router()
const {
  getTickets,
  setTickets,
  updateTicket,
  deleteTicket
} = require('../controllers/ticketController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getTickets).post(protect, setTickets)
router.route('/:id').put(protect, updateTicket).delete(protect, deleteTicket)


module.exports = router
