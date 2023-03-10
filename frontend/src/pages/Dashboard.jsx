/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TicketForm from '../components/TicketForm'
import TicketItem from '../components/TicketItem'
import Spinner from '../components/Spinner'
import { getTickets, reset } from '../features/tickets/ticketSlice'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  const { tickets, isLoading, isError, message } = useSelector(
    state => state.tickets
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }
    dispatch(getTickets())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Tickets Dashboard</p>
      </section>

      <TicketForm />

      <section className='content'>
        <h2>Open Tickets: All</h2>
        {tickets.length > 0 ? (
          <div className="goals">
            {tickets.map((ticket) => (
              <TicketItem key={ticket._id} ticket={ticket} />
            ))}
         </div>
        ) : (<h3>No Open Tickets</h3>)}
      </section>
    </>
  )
}

export default Dashboard
