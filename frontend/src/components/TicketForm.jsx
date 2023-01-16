import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTicket } from '../features/tickets/ticketSlice'

const TicketForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [project, setProject] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [priority, setPriority] = useState('')
  const [type, setType] = useState('')

  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()

    dispatch(
      createTicket({ title, description, project, assignedTo, priority, type })
    )
    setTitle('')
    setDescription('')
    setProject('')
    setAssignedTo('')
    setPriority('')
    setType('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='project'>Project</label>
          <input
            type='text'
            name='project'
            id='project'
            value={project}
            onChange={e => setProject(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='assignedTo'>Assigned To</label>
          <input
            type='text'
            name='assignedTo'
            id='assignedTo'
            value={assignedTo}
            onChange={e => setAssignedTo(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='priority'>Priority</label>
          <select name='priority' id='priority'>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
          {/* <input
            type='text'
            name='priority'
            id='priority'
            value={priority}
            onChange={e => setPriority(e.target.value)}
          /> */}
        </div>

        <div className='form-group'>
          <label htmlFor='type'>Type</label>
          <input
            type='text'
            name='type'
            id='type'
            value={type}
            onChange={e => setType(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Ticket
          </button>
        </div>
      </form>
    </section>
  )
}

export default TicketForm
