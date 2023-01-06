const express = require('express')
const router = express.Router()
const {getTickets} = require('../controllers/ticketController')

router.get('/', (getTickets))

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Set tickets' })
})

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update ticket ${req.params.id}` })
})

router.get('/:id', (req, res) => {
  res.status(200).json({ message: `Delete ticket ${req.params.id}` })
})

module.exports = router
