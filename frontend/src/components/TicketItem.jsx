
const TicketItem = ({ticket}) => {
  
  return (
    <div className="goal">
     <div>
      {new Date(ticket.createdAt).toLocaleString('en-US')}
      </div> 
      <h2>{ticket.title}</h2>

      <h5>{ticket.priority}</h5>
    </div>
  )
}

export default TicketItem
