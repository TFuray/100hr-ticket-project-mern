import { deleteTicket } from "../features/tickets/ticketSlice"
import { useDispatch } from "react-redux"

const TicketItem = ({ticket}) => {
  const dispatch = useDispatch()
  
  return (
    <div className="goal">
     <div>
      {new Date(ticket.createdAt).toLocaleString('en-US')}
      </div> 
      <h2>{ticket.title}</h2>
      <h5>{ticket.priority}</h5>
      <button onClick={ () => dispatch(deleteTicket(ticket._id))} className="close">X</button>
    </div>
  )
}

export default TicketItem
