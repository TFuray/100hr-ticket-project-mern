import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const onChange = () => {}

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form>
          <div className="form-group">
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            placeholder='Enter your name'
            onChange={onChange}
            className='form-control'
          />
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
