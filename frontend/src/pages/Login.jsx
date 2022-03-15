import React from 'react'
import { FaUser } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function Login() {
  const [formData, setFormData] = useState({  
    email: '',
    password: '',
  
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  
  return(
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Login
        </h1>
        <p>Login and fly towards your goals!</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>

          <div className='form-group'>
          <input
          type='email'
          className='form-control'
          id='email'
          name='email'
          value={email}
          placeholder='Enter your email'
          onChange={onChange}></input>
          </div>

          <div className='form-group'>
          <input
          type='password'
          className='form-control'
          id='password'
          name='password'
          value={password}
          placeholder='Enter your password'
          onChange={onChange}></input>
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block' >Submit</button>

          </div>
        </form>

      </section>

     

      
     
    </>
  )
    
  
  }