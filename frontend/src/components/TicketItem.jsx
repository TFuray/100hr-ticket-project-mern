import { deleteTicket } from '../features/tickets/ticketSlice'
import { useDispatch } from 'react-redux'

const TicketItem = ({ ticket }) => {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div className='date'>
          - {new Date(ticket.createdAt).toLocaleString('en-US')}
      </div>
      <div>
        <h2>{ticket.title}</h2>
      </div>
      <div>
        <h5>Priority: { ticket.priority}</h5>
      </div>
      <div>
        <>Description: {ticket.description}</>
      </div>
      <div>
      </div>
      <button
        onClick={() => dispatch(deleteTicket(ticket._id))}
        className='close'
      >
        X
      </button>
    </div>
  )
}

export default TicketItem
