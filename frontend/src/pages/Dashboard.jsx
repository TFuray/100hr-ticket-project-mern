import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TicketForm from '../components/TicketForm'

const Dashboard = () => {
  const navigate = useNavigate()

  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Tickets Dashboard</p>
      </section>

      <TicketForm />
    </>
  )
}

export default Dashboard
